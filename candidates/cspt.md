# CSPT (Client-Side Path Traversal) Candidates — smtp2go

---

## Summary

No classic CSPT (user-controlled path segment used in AJAX URL) found. The application
uses a strict endpoint-name lookup pattern that prevents user input from reaching URL paths:

```js
// AJAXBackendMixin (riot/mixins.js) — the canonical URL builder
END_POINTS.urls()[endpoint] + "?action=" + encodeURIComponent(action) + "&CSRF_key=" + encodeURIComponent(HTML.csrfkey)
```

All `endpoint` and `action` values are hardcoded string constants from the JavaScript code.
No URL path segment is constructed from `location.search`, `location.hash`, URL params, 
or DOM data.

However, the following related findings were documented:

---

## [CSPT-001] `getRedirectUrl()` — Server-Controlled Navigation Post-Login

| Field | Value |
|---|---|
| **Source** | `static/js/layout_subaccounts_dropdown.js` — `getRedirectUrl()` |
| **Type** | Server-controlled open redirect (not path traversal but related) |
| **Trigger** | `POST /api/login/` with `LOGIN_AS` — response `data.results.goto` or `data.url` |
| **Severity estimate** | Medium |
| **Test status** | ⬜ Untested |

### Evidence
```js
var getRedirectUrl = function(data, fallbackUrl) {
  if (data && data.results && data.results.goto) {
    return data.results.goto;      // full trust in server response
  }
  if (data && data.url) {
    return data.url;               // full trust in server response
  }
  return fallbackUrl;
};

// Called after Login-As subaccount:
window.location = getRedirectUrl(data, Globals.BACKEND + END_POINTS.fronts()['Account Summary']);
```

Two separate login flows use this:
1. **Subaccounts page** (`static/vue/settings/subaccounts/main.js:5860`) — `onLoginAsClicked`
2. **Sidebar dropdown** (`layout_subaccounts_dropdown.js`) — `handlelogin`, `handleback`

Both flow through `getRedirectUrl`. If server-controlled `goto`/`url` is influenced by
subaccount name or any stored user data, it becomes an open redirect or XSS via `javascript:`.

### API flow
```
POST /api/login/
Body: { LOGIN_AS: <record_id>, STACK: "STACK" }

If response contains: { "results": { "goto": "https://attacker.com/" } }
→ window.location = "https://attacker.com/"   ← open redirect
```

### Test plan
- [ ] Perform `POST /api/login/` with a valid subaccount `LOGIN_AS` value
- [ ] Does response include `goto` or `url` field?
- [ ] Create a subaccount with name `javascript:alert(1)` — does goto contain it?
- [ ] Test with `LOGIN_AS` pointing to a closed/invalid subaccount — error response goto?

### Result
_Populate after testing._

---

## [CSPT-002] `/settings/subaccounts/undefined` — Race Condition Path Bug

| Field | Value |
|---|---|
| **Source** | `static/vue/settings/subaccounts/main.js` — route navigation at mount |
| **Type** | JavaScript `undefined` serialized into URL path (race condition) |
| **Observed** | `GET /settings/subaccounts/undefined` → 302 to `https://www.smtp2go.com/404?loc=app` |
| **Severity estimate** | Low (informational) |
| **Test status** | ❌ Not directly exploitable |

### Evidence
Request sequence observed in traffic:
```
t=0: GET /settings/subaccounts/          200
t=1: GET /static/vue/settings/subaccounts/main.js  200
t=2: GET /api/settings/subaccounts/      200
t=3: GET /api/settings/subaccounts/      200  
t=4: GET /api/settings/smtp_users/       200
t=5: GET /settings/subaccounts/undefined 302 → https://www.smtp2go.com/404?loc=app
```

The Vue app navigates to `/settings/subaccounts/<something>` where `<something>` is 
a JavaScript variable that hasn't been set yet (remains `undefined`). This is a 
client-side bug where a property is used in URL construction before the API response
populates it.

**Why this matters for CSPT**: The same code path that produces `undefined` could
produce an attacker-controlled value if the variable is populated from URL params
before the API response arrives. However, no URL param flows into this variable
in the current code — the value comes from API response data.

### Root cause hypothesis
Likely in the Vue mounted() or created() hook, something like:
```js
window.location = '/settings/subaccounts/' + this.someId
// where this.someId is undefined at mount time
```

### Test plan
- [ ] Not directly exploitable — document as negative finding
- [ ] Check: does `/settings/subaccounts/<any_value>` accept arbitrary path segments?
  If yes, it's a potential CSPT injection point from outside the Vue SPA

### Result
❌ Not directly exploitable. The undefined value comes from internal state, not user input.

---

## [CSPT-003] `stream_url` Navigation in Reports Export

| Field | Value |
|---|---|
| **Source** | `static/js/riot/reports-summary-table.tag` |
| **Type** | Server-controlled navigation (close relative of CSPT) |
| **Trigger** | PUT `/api/reports/summary/?CSRF_key=<token>` returns `stream_url` |
| **Severity estimate** | Medium (open redirect) / High (if SSRF chain possible) |
| **Test status** | ⬜ Untested |

### Evidence
```js
$.ajax({
    method: "PUT",
    url: END_POINTS.urls().Summary + '?CSRF_key=' + encodeURIComponent(HTML.csrfkey),
    data: data,
    success: function(res) {
        if (res.status === 'OK') {
            window.location.replace(res.results.stream_url);  // ← no client validation
        }
    }
});
```

The PUT request submits export parameters (date ranges, filters, subaccount IDs).
The server returns a `stream_url` which the client immediately navigates to.
If any export parameter flows into the `stream_url` construction server-side,
an attacker could inject a malicious URL.

### Test plan
- [ ] Trigger export PUT and capture response — what format is `stream_url`?
- [ ] Is it relative (`/api/reports/export/12345`) or absolute?
- [ ] Try submitting malicious values in export body fields (e.g., `subaccounts`, `usernames`)
- [ ] If relative: can it be manipulated to `//attacker.com/`?
- [ ] If it triggers a server-side fetch: chain with SSRF payloads

### Result
_Populate after testing._

---

## [CSPT-004] URL Param `filter` and `date_filter` in Reports

| Field | Value |
|---|---|
| **Source** | `static/js/riot/reports-summary-table.tag` |
| **Type** | URL parameter read into application state |
| **Trigger** | `?filter=sender_email` and `?date_filter=30days` URL params |
| **Severity estimate** | Low — appears to only affect client-side state, not URL construction |
| **Test status** | ⬜ Untested |

### Evidence
```js
let url = new URL(window.location.href);
if (params.get('filter') == 'sender_email') {
    // sets local filter state
}
if (params.get('date_filter') == '30days') {
    // sets local date filter state
}
```

These URL params control client-side filtering state. The values are compared against
hardcoded strings, not used in URL construction. Not a CSPT vector, but confirms
URL params DO flow into the application and affect request payloads sent to the server.

### Test plan
- [ ] Visit `/reports/summary/?filter=sender_email` — does the page show filtered results?
- [ ] Try `?filter=<script>alert(1)</script>` — is the value reflected anywhere in DOM?
- [ ] Try `?filter=` + path traversal chars — any effect on API request URLs?
- [ ] Check if these params are echoed in API request bodies sent to the backend

### Result
_Populate after testing._

---

## [CSPT-005] `show_hidden_endpoints` URL Param → Backend State

| Field | Value |
|---|---|
| **Source** | `static/vue/settings/api-auth/main.js:1122` |
| **Type** | URL param controlling API response content |
| **Trigger** | `/sending/apikeys/?show_hidden_endpoints` |
| **Severity estimate** | Medium — may expose hidden API functionality |
| **Test status** | ⬜ Untested |

### Evidence
```js
var a = new URLSearchParams(window.location.search);
var n = a.has("show_hidden_endpoints");   // boolean: true if param exists (any value)
// sent to backend:
S.post(backendUrl("API Keys", "load-active-users"), {
    page_offset: N.current_page,
    search_text: N.searchText,
    show_hidden_endpoints: n,   // ← user-controlled boolean
})
```

Visiting `/sending/apikeys/?show_hidden_endpoints` (param just needs to exist, any value)
sends `show_hidden_endpoints: true` to the backend API key listing endpoint.

### Test plan
- [ ] Navigate to `/sending/apikeys/?show_hidden_endpoints`
- [ ] Capture the POST to `load-active-users` — does the response differ?
- [ ] Do additional API endpoints appear in the `api_index` section of the response?
- [ ] Are these hidden endpoints accessible via the standard API key pattern?
- [ ] Try `?show_hidden_endpoints=false` (string "false") — does `a.has()` still return true?
  (Yes — `has()` returns true for any value including empty string. `false` as string → true)

### Result
_Populate after testing._
