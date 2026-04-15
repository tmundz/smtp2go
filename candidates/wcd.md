# Web Cache Deception Candidates — smtp2go

---

## Fingerprint Context

**Stack**: gunicorn (Python) for HTML pages + Apache for `/api/*` routes. No CDN detected.
**Cache-Control on API endpoints**: `no-cache, no-store, must-revalidate` ✅ (all 30+ endpoints)
**Cache-Control on HTML frontend pages**: **COMPLETELY ABSENT** on all 20 pages ⚠️
**Cache-Control on static assets**: **COMPLETELY ABSENT** on all 259 assets (ETag only)
**Verdict**: No active CDN/caching layer found. WCD is not immediately exploitable in current
infrastructure. However, the complete absence of cache headers on all authenticated HTML responses
means the application is one CDN deployment away from a critical WCD mass-exploitation scenario.

---

## [WCD-001] ALL Authenticated HTML Pages — No Cache-Control Directive

| Field | Value |
|---|---|
| **Affected pages** | 20 authenticated frontend pages (full list below) |
| **CDN detected** | ❌ Not detected in current traffic |
| **Cache-Control (HTML pages)** | MISSING — no directive at all |
| **Cache-Control (API endpoints)** | `no-cache, no-store, must-revalidate` ✅ |
| **Sensitive data in HTML** | CSRF token embedded in every page |
| **Severity estimate** | High (when CDN present) / Info (current state) |
| **Test status** | 🔄 Partial — no CDN to exploit currently |

### Affected pages (all return `Cache-Control: MISSING` with status 200)

| Page | Sensitive Embedded Data |
|------|------------------------|
| `/dashboard/main/` | `HTML.csrfkey = '<token>'` (hardcoded in JS block) |
| `/reports/summary/` | CSRF token |
| `/reports/charts/` | CSRF token |
| `/reports/suppressions/` | CSRF token + `apMetadata` JSON |
| `/reports/data-exports/` | CSRF token + `apMetadata` JSON |
| `/reports/sms/` | CSRF token + `apMetadata` JSON |
| `/email-testing/` | CSRF token |
| `/sending/smtp_users/` | CSRF token |
| `/sending/apikeys/` | CSRF token |
| `/sending/verified_senders/` | CSRF token |
| `/sending/sms_settings/` | CSRF token + `apMetadata` JSON |
| `/settings/webhooks/` | CSRF token |
| `/settings/subaccounts/` | CSRF token + `apMetadata` + `sponsor: 1010395` |
| `/settings/templates/` | CSRF token + `apMetadata` JSON |
| `/settings/integrations/` | CSRF token |
| `/account/team/` | CSRF token |
| `/account/2fa/` | CSRF token |
| `/account/updatebilling/` | CSRF token + Chargebee billing widget |
| `/account/changeplan/` | CSRF token + Chargebee billing widget |
| `/account/changeplan/` | CSRF token + plan pricing data |

### What `apMetadata` contains (confirmed from `/settings/subaccounts/` page)
```json
{
  "app_settings": { "show_subaccount_2fa_col": false, ... },
  "can_send_emails": true,
  "disable_add": false,
  "master_sms_limit": 50,
  "sponsor": 1010395
}
```
Master account ID `1010395` embedded inline in the subaccounts HTML page.

### WCD attack model (for when CDN is added)
1. Attacker lures victim to `/dashboard/main/x.css` or `/dashboard/main;.css`
2. CDN sees `.css` extension → caches the response
3. Victim's authenticated response (with their CSRF token + session data) is cached
4. Attacker fetches the same URL unauthenticated → receives victim's CSRF token
5. Attacker uses CSRF token to make authenticated API calls as victim

### WCD suffix payloads to test
```
# Path suffix
/dashboard/main/x.css
/dashboard/main/x.js
/dashboard/main/x.png
/dashboard/main/x.woff2
/settings/subaccounts/x.css
/sending/apikeys/x.js

# Delimiter-based
/dashboard/main;.css
/dashboard/main%23.css
/dashboard/main%3f.css
/dashboard/main%0a.css

# Double extension
/dashboard/main.php.css
/dashboard/main.asp.css

# Encoded slash
/dashboard/main%2fx.css
```

### Test plan
- [ ] Confirm: does any caching layer exist? Try `curl -I https://app-us.smtp2go.com/dashboard/main/ -H "Accept-Encoding: identity"` multiple times — check Age or X-Cache headers
- [ ] Try `/dashboard/main/x.css` — does server 200? Does cache layer store it?
- [ ] Add `Cache-Control: no-store` to verify it'd block caching
- [ ] Test `/settings/subaccounts/x.css` — would leak sponsor_id + apMetadata
- [ ] Test with delimiter payloads if path suffix doesn't work
- [ ] Check: do any 302 redirects (login flow) cache the session cookie?

### Result
❌ **Not Vulnerable — CF WAF blocks suffix payloads. Updated 2026-04-14.**

Live testing on 2026-04-14 confirmed Cloudflare IS present on app-us.smtp2go.com (was invisible in Caido-captured traffic — CF strips its own headers on pass-through authenticated responses):
- Suffix paths + session cookie → **403 from CF WAF** (error code 1010)
- Suffix paths without session → **404 from origin** (`cf-cache-status: DYNAMIC`, not cached)
- Encoded delimiters (`;`, `%23`, `%3f`, `%0a`, `%09`) → all 403 from CF WAF

The structural risk (no `Cache-Control` on 20 HTML pages) remains. If CF WAF rules change, WCD becomes immediately exploitable across the entire authenticated surface.

---

## [WCD-002] Static Assets Without Cache-Control — Potential Stale Serving

| Field | Value |
|---|---|
| **Affected assets** | 259 static files: `.js`, `.css`, `.png`, `.svg`, `.woff`, `.tag` |
| **Cache-Control** | MISSING on all 259 files |
| **ETag present** | Yes — Apache-style `"<hex>-<timestamp>-<hash>"` |
| **Auth required** | No — static files appear publicly accessible |
| **Severity estimate** | Low — static files are not auth-gated |
| **Test status** | ⬜ Untested |

### Context
All static assets under `/static/` are served without Cache-Control headers.
They have ETags which would allow conditional requests (`If-None-Match`).
No caching intermediary detected. This means:
- Browser may cache based on heuristics (Expires not set either)
- Intermediate proxies may cache indefinitely
- If Vue `.js` bundles are cached stale: an old version of the app may run, 
  potentially with older security bugs or different URL constructions

### Static asset ETag format
`ETag: "8de-64f70c298f700-gzip"` — size in hex + timestamp + gzip indicator.
Version-busted by URL: `?version=1776195579` parameter on all script/style tags in HTML.
So stale caching of old versions is mitigated by the version-busting URL parameter.

### Test plan
- [ ] Fetch `/static/js/functions.js` unauthenticated — returns 200? (confirms no auth)
- [ ] Fetch same path twice — ETag stable? Any Age header?
- [ ] Does version param `?version=X` serve same file regardless of version value?

### Result
_Populate after testing._

---

## [WCD-003] /api/reports/charts/ POST — Anomalous Missing Cache-Control

| Field | Value |
|---|---|
| **Endpoint** | `POST /api/reports/charts/` |
| **Cache-Control** | MISSING (all other API POST responses have `no-cache, no-store, must-revalidate`) |
| **Response type** | JSON — `{"id":"3CNHs3LuZaXgFxxF6U6uKQ43ToS","payload":{...}}` |
| **Severity estimate** | Low — no CDN detected, POST not typically cached |
| **Test status** | ⬜ Untested |

### Evidence
One specific POST /api/reports/charts/ response (the per-user chart data endpoint)
returned without any Cache-Control header. All other POST API responses include
`no-cache, no-store, must-revalidate`. This is anomalous.

Response body preview:
```json
{"id":"3CNHs3LuZaXgFxxF6U6uKQ43ToS","payload":{"user_chart":[],"subaccounts":[],...}}
```
The `id` field (`3CNHs3LuZaXgFxxF6U6uKQ43ToS`) is notable — this may be a stream ID
or export token. 

### Test plan
- [ ] Reproduce this specific charts POST — what action parameter triggers the missing CC?
- [ ] Check if `id` value is a one-time token or reusable
- [ ] Test if this endpoint's response is cacheable via a proxy
- [ ] Check if `id` token can be used to retrieve chart data without auth

### Result
_Populate after testing._

---

## [WCD-004] Path Routing Behavior — Django URL Dispatcher and Suffix Payloads

| Field | Value |
|---|---|
| **Source** | CSV routing observations — 302 patterns on unknown paths |
| **CDN detected** | ❌ Not detected on app-us.smtp2go.com |
| **Relevant behavior** | `/settings/subaccounts/undefined` → 302 → https://www.smtp2go.com/404?loc=app |
| **Severity estimate** | Informational — routing analysis for when CDN is added |
| **Test status** | ⬜ Untested |

### Observed routing behavior

From captured traffic, the server's behavior on non-matching paths:

| Path | Result |
|------|--------|
| `/dashboard/main/` | 200 — gunicorn Django view |
| `/settings/authentication/` | 302 → `/login/` (no frontend URL, different auth?) |
| `/settings/subaccounts/undefined` | 302 → `https://www.smtp2go.com/404?loc=app` |
| `/login/` (when authed) | 302 → `/dashboard/main/` |

The Django URL dispatcher appears to send unknown sub-paths to an external 404 (302 redirect
to `www.smtp2go.com/404?loc=app`). This means suffix-based WCD paths like
`/dashboard/main/x.css` would likely return 302→external-404, NOT 200.

However, delimiter-based payloads (`;`, `%23`, `%3f`, `%0a`) bypass URL routing and may
return the base page response, which would be cacheable if a CDN were present.

### Key routing implications for WCD

**Path suffix** (`/dashboard/main/x.css`):
- Django regex patterns match exact paths — `/dashboard/main/x.css` won't match `^/dashboard/main/$`
- Likely: 302 to external 404
- Verdict: probably NOT exploitable for WCD path suffix method

**Delimiter payloads** (`/dashboard/main;.css`, `/dashboard/main%23.css`):
- Semicolon in URL path: Django may strip after `;` or reject
- `%23` = `#` which is a fragment — most CDNs strip fragments, server never sees them
- `%3f` = `?` — would be treated as query string start
- `%2f` = `/` — Django normalizes this; may be treated as path separator
- These need live testing — cannot determine from static analysis

**Matrix URL (`/dashboard/main;.css`)**: Most promising if Django is using `PATH_INFO` from wsgi
which strips the matrix param, while CDN caches based on the full URL including `;.css`.

### WCD suffix payload list (for manual testing once CDN present)
```
# Path suffix (likely 302→404, verify)
/dashboard/main/x.css
/settings/subaccounts/x.css
/sending/apikeys/x.js

# Delimiter-based (more likely to work)
/dashboard/main;.css
/dashboard/main%3b.css        # encoded semicolon
/dashboard/main%23.css        # fragment (#)
/dashboard/main%3f.css        # query (?)
/dashboard/main%0a.css        # newline
/dashboard/main%09.css        # tab

# Double extension
/dashboard/main.php.css
/dashboard/main.asp.css

# Encoded slash
/dashboard/main%2fx.css
/dashboard/main%252fx.css     # double-encoded
```

### Result
⬜ Cannot test — no CDN. Routing behavior suggests suffix method may not work;
delimiter method needs live verification.

---

## [WCD-005] Anomalous POST /api/reports/charts/ — Different Backend, No Cache-Control

| Field | Value |
|---|---|
| **Source** | CSV row 475 — POST /api/reports/charts/?action=data with multipart/form-data + data_type=peruser |
| **Cache-Control** | MISSING (all other charts POSTs have `no-cache, no-store, must-revalidate`) |
| **Response format** | `{"id":"3CNHs3LuZaXgFxxF6U6uKQ43ToS","payload":{...}}` — different from standard `{"status":"OK","results":{...}}` |
| **Backend indicator** | `x-upstream-status: 200` — Apache proxy header, different upstream handler |
| **Severity estimate** | Low — POST requests are rarely cached, but the `id` field may be sensitive |
| **Test status** | ⬜ Untested |

### Evidence
Row 475 request:
```
POST /api/reports/charts/?action=data&CSRF_key=<token>
Content-Type: multipart/form-data; boundary=...
```
Body fields: `action=data, data_type=peruser, use_short_event_key_name=true, 
exclude_percentages=true, use_normalized_format=true, include_fields[]=t,d,o,c,r,p,
user_limit=5, user_offset=0, client_timezone, unix_secs_start, unix_secs_end`

Response (no Cache-Control):
```json
{"id":"3CNHs3LuZaXgFxxF6U6uKQ43ToS","payload":{"user_chart":[],"subaccounts":[],"pagination":{"total_users":0,"limit":5,"offset":0,"has_more":false,"total_pages":0}}}
```

Response also sets the JWT cookie `1XJgM5twoV0e8IhkwW0BQuDwzkz` (the only other
response that sets it is the login_id-URL session transition — row 186).

This endpoint routes through Apache to a **different backend handler** (streaming/async
service vs. standard Django) — confirmed by `x-upstream-status: 200` header and the
different response schema.

### `id` field analysis
`"id": "3CNHs3LuZaXgFxxF6U6uKQ43ToS"` — 27-character alphanumeric string.
This appears to be a job/stream identifier. Questions:
- Is this a one-time token used to retrieve streaming results?
- Can it be replayed after expiry?
- Does GET /api/reports/charts/?id=3CNHs3Lu... return data without auth?

### Test plan
- [ ] Reproduce this specific POST (multipart + data_type=peruser) — confirm missing CC
- [ ] Try GET /api/reports/charts/?id=3CNHs3LuZaXgFxxF6U6uKQ43ToS — returns data? Auth required?
- [ ] Check: is the `id` predictable/sequential or truly random?
- [ ] Test if this endpoint's response is cacheable via a caching proxy
- [ ] Compare: does data_type=peruser trigger the different backend, while other data_types don't?

### Result
_Populate after testing._
