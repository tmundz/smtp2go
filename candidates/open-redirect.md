# Open Redirect Candidates — smtp2go

---

## [OR-001] POST /api/login/ — `data.results.goto` via `getRedirectUrl()`

| Field | Value |
|---|---|
| **Source** | `static/js/layout_subaccounts_dropdown.js` — `getRedirectUrl()` + `handlelogin` / `handleback` |
| **Trigger** | POST /api/login/ with `LOGIN_AS` context (subaccount switch) |
| **Reflection point** | `data.results.goto` from server JSON response, passed directly to `window.location` |
| **Validation** | ❌ None — raw field written to window.location |
| **Severity estimate** | Medium standalone / High if chained with stored XSS |
| **Test status** | ⬜ Untested |

### Code

```js
// layout_subaccounts_dropdown.js
var getRedirectUrl = function(data, fallbackUrl) {
  if (data && data.results && data.results.goto) {
    return data.results.goto; // ← no origin/scheme check
  }
  if (data && data.url) {
    return data.url; // ← second fallback, also unvalidated
  }
  return fallbackUrl;
};

// Called in handlelogin and handleback:
window.location = getRedirectUrl(data, fallbackUrl);
```

### Attack vectors

1. **Server-side goto injection**: If the `goto` field in the login response can be influenced
   by a request parameter (e.g., `?next=`, `?goto=`, `?redirect=`), attacker can craft a
   login link that sends victim to an attacker-controlled domain post-login.

2. **Stored goto via subaccount name**: If `data.results.goto` is constructed server-side
   from a stored value (e.g., subaccount label or URL field), inject `javascript:` URI or
   external URL there.

3. **Chain: IDOR → open redirect**: Account B (attacker) modifies a subaccount-switching
   response to redirect Account A to attacker's phishing clone of smtp2go dashboard.

### Test plan

- [ ] POST /api/login/ — observe raw response JSON, specifically `data.results.goto` field
- [ ] Check if any request param influences the `goto` value (`?next=`, `?return=`, `?goto=`, `?redirect_to=`)
- [ ] Try: `?next=https://evil.com` → does response `goto` contain evil.com?
- [ ] Try: `?next=javascript:alert(document.domain)` → XSS via redirect
- [ ] Test `data.url` fallback path — same parameters

### Result
_Populate after testing._

---

## [OR-002] PUT `?action=download-file` — `stream_url` trusted redirect

| Field | Value |
|---|---|
| **Source** | `reports/sms/main.js:6715,7546,8538` · `reports/suppression/main.js:4160` |
| **Trigger** | PUT /api/reports/summary/ (or sms/suppression equivalent) with `?action=download-file` |
| **Reflection point** | `t.responseJSON.results.stream_url` passed directly to `window.location.replace()` |
| **Validation** | ❌ None — raw field from server JSON |
| **Severity estimate** | Medium standalone / High if stream_url can be influenced by request body |
| **Test status** | ⬜ Untested |

### Code (pattern across 4 locations)

```js
// reports/sms/main.js:6715
$.ajax({ type: "PUT", url: ..., data: {..., action: "download-file"} })
  .done(function(t) {
    window.location.replace(t.responseJSON.results.stream_url);
    // ↑ stream_url written to window.location with no check
  });
```

### Attack vectors

1. **Server generates `stream_url` from request body input**: If any parameter in the PUT
   request body (e.g., report filter fields, date range, export format) is reflected into
   `stream_url`, attacker can redirect the victim to an external domain.

2. **CSPT-003 variant**: If `stream_url` is a relative path, attacker controls enough of
   the path to cause a Client-Side Path Traversal. See candidates/cspt.md.

3. **Chained with stored IDOR**: Attacker stores a malicious report configuration using
   Account B's session; victim Account A triggers download → gets redirected.

### Test plan

- [ ] Trigger a normal report download — capture the PUT request and the `stream_url` value in response
- [ ] Determine format: is `stream_url` absolute (`https://...`) or relative (`/api/...`)?
- [ ] If absolute: does the domain change based on any request param? (`sender=`, `tag=`, etc.)
- [ ] If relative: test for path traversal (`../../evil`) — see CSPT candidate
- [ ] Try request body param: add `stream_url=https://evil.com` — does server echo it?
- [ ] Try `Content-Type: application/json` body injection to see if JSON params alter stream_url

### Result
_Populate after testing._

---

## [OR-003] login-soft.js — `data.results.goto` in soft-login flow

| Field | Value |
|---|---|
| **Source** | `static/js/login-soft.js:86` |
| **Trigger** | Soft-login or session-refresh endpoint |
| **Reflection point** | `window.location = data.results.goto` |
| **Validation** | ❌ None |
| **Severity estimate** | Medium |
| **Test status** | ⬜ Untested |

### Code

```js
// login-soft.js:86
window.location = data.results.goto;
```

### Test plan

- [ ] Identify which endpoint this JS calls (likely POST /api/login/ or /api/session/)
- [ ] Observe `data.results.goto` value in normal flow
- [ ] Test if a request parameter influences the goto value
- [ ] Combine with OR-001 test — may be same server-side handler

### Result
_Populate after testing._

---

## Priority Matrix

| ID | Surface | Exploitability | Impact | Priority |
|----|---------|---------------|--------|----------|
| OR-001 | Login goto (subaccount switch) | Medium — need param that influences goto | High — post-auth redirect, chains with XSS | **HIGH** |
| OR-002 | stream_url download-file | Low-Medium — need request body influence | Medium — mid-flow redirect | **MEDIUM** |
| OR-003 | login-soft goto | Medium — same handler as OR-001 likely | Medium | **MEDIUM** |

### Why OR-001 is priority

The subaccount-switch login flow is a targeted attack surface: an attacker who can get a victim
admin to click a "switch to subaccount" link controls the destination POST. If `goto` can be
influenced by any query param, you have a pre-authenticated open redirect that fires immediately
after the victim's login action — ideal for credential harvesting.

**Chain with XSS**: If OR-001 is confirmed, and stored XSS is also found (sender name / webhook URL),
the chain is: XSS payload → steal session cookie → profit. But open redirect alone = account phishing.

**Chain with CORS misconfiguration (WCP-006)**: Confirmed CORS allows `http://insights.hotjar.com`
with credentials. Open redirect → XSS on that origin → CORS credential exfil. Long chain but
documented CORS config is a real amplifier.
