# XSS Candidates — smtp2go

---

## [XSS-001] Stored XSS — `$(".username").html(data.username)` on Dashboard

| Field | Value |
|---|---|
| **Source** | `static/js/functions.js:529` |
| **Type** | Stored (via login API response) |
| **Sink** | jQuery `.html()` on `.username` element — every authenticated page |
| **Input vector** | Username field stored at account registration/profile |
| **Payload** | `<img src=x onerror=alert(document.domain)>` |
| **Severity estimate** | High if confirmed — fires on all authenticated users' dashboard views |
| **Test status** | ⬜ Untested |

### Evidence
```js
// functions.js:528-529
if (data.username != null) {
  $(".username").html(data.username);   // ← .html() not .text()
}
```
`data.username` comes from the login/session API response.
If the server stores the username as-is and returns it without HTML-encoding,
any HTML in the username renders in the DOM.

### Test plan
- [ ] Register or update account with username: `<img src=x onerror=alert(document.domain)>`
- [ ] Log in — does the dashboard fire the alert?
- [ ] Try attribute injection: `" onmouseover="alert(1)` as username
- [ ] Try SVG payload: `<svg onload=alert(1)>`
- [ ] Check if server sanitizes on input (registration POST) vs. on output (login response)
- [ ] If CSP present, try CSP bypass (check response headers first)

### Result
_Populate after testing._

---

## [XSS-002] Potential Stored XSS — `loginMessage.append(data.login_message)`

| Field | Value |
|---|---|
| **Source** | `static/js/functions.js:541` |
| **Type** | Stored (if login_message is user-controlled) / Reflected (if set per-session) |
| **Sink** | jQuery `.append()` — parses string as HTML |
| **Input vector** | `data.login_message` from login API response |
| **Payload** | `<img src=x onerror=alert(1)>` |
| **Severity estimate** | Medium — depends on whether login_message is user-controlled |
| **Test status** | ⬜ Untested |

### Evidence
```js
// functions.js:531-541
if (data.login_message != null) {
  loginMessage = $("#user-login-message");
  loginMessage.empty();
  loginMessage.addClass("bar-notice visible").addClass(alrtclass);
  loginMessage.append(data.login_message);  // ← .append() with string parses HTML
```
jQuery's `.append(string)` parses the string as HTML — functionally equivalent to
`.html()` for XSS purposes. If `login_message` is server-controlled text, this
is low risk. If it can be set by user input (e.g., a custom welcome message or
invite message), it becomes exploitable.

### Test plan
- [ ] Check what API call returns `login_message` — is it the `/api/login/` response?
- [ ] Identify any user input that flows into `login_message` (invite notes, custom messages)
- [ ] If found: inject `<img src=x onerror=alert(1)>` in that field
- [ ] Trigger login to see if the XSS fires in the login message bar

### Result
_Populate after testing._

---

## [XSS-003] DOM XSS — `eval("r." + x)` in functions.js template resolver

| Field | Value |
|---|---|
| **Source** | `static/js/functions.js:61,64` |
| **Type** | DOM XSS (if input reaches eval) |
| **Sink** | `eval("r." + x)` and `eval(x.slice(1))` |
| **Input vector** | `x` parameter — needs tracing to caller |
| **Severity estimate** | High if user-controlled, Low if internally constructed only |
| **Test status** | ⬜ Untested — needs source tracing |

### Evidence
```js
// functions.js:57-64
if (/^[a-zA-Z0-9_\[\]\.]*$/.test(x)) {
  if (/^[0-9]+$/.test(x)) {
    return r[int(x)];
  } else {
    return eval("r." + x);   // ← eval with x
  }
} else if ((x[0] = "=")) {
  return eval(x.slice(1));   // ← eval with x.slice(1)
}
```
The regex `^[a-zA-Z0-9_\[\]\.]*$` prevents injection in the first branch.
But in the second branch `eval(x.slice(1))`, if `x[0] == "="` then `x.slice(1)` is
evaluated directly. The condition `x[0] = "="` uses assignment (=) not comparison (==),
so it ALWAYS evaluates to truthy — the second branch runs whenever x doesn't match
the alphanumeric regex.

**Bug**: `x[0] = "="` is an assignment, not comparison. This means `x` can contain
arbitrary JS if passed with non-alphanumeric content.

### Test plan
- [ ] Trace callers of this function — what is `r` and where does `x` come from?
- [ ] Check if URL params or DOM data flow into `x`
- [ ] If URL-param controlled: try `?x==alert(document.domain)` or equivalent

### Result
_Populate after testing._

---

## [XSS-004] Stored XSS — Sender Name / Email Fields (Surface Map)

| Field | Value |
|---|---|
| **Source** | `POST /api/settings/verified_senders/` |
| **Type** | Stored — rendered in dashboard sender list |
| **Sink** | jQuery `.html()` calls in dashboard_main.js and settings_general.js |
| **Payload** | `<script>alert(document.domain)</script>` in sender name |
| **Severity estimate** | Medium–High |
| **Test status** | ⬜ Untested |

### Evidence
Multiple `.html()` sinks in `dashboard_main.js` (lines 238, 324, 363, 396) and
`settings_general.js` render data pulled from API responses. If sender names or
email fields flow into these renders without escaping, stored XSS is possible.

### Test plan
- [ ] Create sender with name: `<img src=x onerror=alert(document.domain)>`
- [ ] Create sender with email display: `"><svg onload=alert(1)>`
- [ ] Navigate to sending/verified_senders page — does it fire?
- [ ] Check dashboard summary page — sender stats displayed there?
- [ ] Try attribute injection in name: `x" onmouseover="alert(1)`

### Result
_Populate after testing._

---

## [XSS-005] DOM XSS — `pageContentBody.html(res)` AJAX navigation

| Field | Value |
|---|---|
| **Source** | `static/assets/admin/layout/scripts/layout.js:179,218` |
| **Type** | DOM XSS (via server response injection) |
| **Sink** | `pageContentBody.html(res)` — full server HTML injected into page |
| **Input vector** | Any endpoint returning user-controlled HTML without escaping |
| **Severity estimate** | Medium — depends on server-side escaping |
| **Test status** | ⬜ Untested |

### Evidence
```js
// layout.js:173-179
$.ajax({
  type: "GET",
  url: url,
  dataType: "html",
  success: function (res) {
    pageContentBody.html(res);   // ← raw HTML from server injected into DOM
  }
});
```
Triggered by sidebar nav links with class `.ajaxify`. If any navigated page
returns user-controlled content (e.g., subaccount name, sender name, webhook URL)
unescaped within the HTML response, it becomes DOM XSS.

### Test plan
- [ ] Identify which pages are loaded via `.ajaxify` links
- [ ] Set a subaccount/sender/webhook name to `<img src=x onerror=alert(1)>`
- [ ] Navigate to that section using sidebar (which triggers AJAX load)
- [ ] Check if the payload executes in the DOM

### Result
_Populate after testing._
