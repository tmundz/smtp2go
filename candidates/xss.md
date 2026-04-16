# XSS Candidates — smtp2go

---

## [XSS-001] ❌ Sunk — `$(".username").html(data.username)` Not Exploitable

| Field | Value |
|---|---|
| **Source** | `static/js/functions.js:529` |
| **Test status** | ❌ Not exploitable — `data.username` is the account email address |

### Why closed
Confirmed from CSV: `data.username` returned by API endpoints (e.g. `/api/reports/data-exports/`)
is the login email (`0xcaphe+roy@wearehackerone.com`). Email addresses are server-validated
format — cannot contain HTML tags. The jQuery `.html()` call exists but is safe in practice
because the server controls the email format.

The real injection surface is XSS-006 (inline JS `userFullName` — separate entry below).

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

---

## [XSS-006] ❌ Not Exploitable — `userFullName` HTML-Encoded in Script Context

| Field | Value |
|---|---|
| **Source** | Every authenticated page — 19+ pages confirmed |
| **Type** | Stored JS injection — server renders fullname directly into `<script>` block |
| **Sink** | Inline `<script>` tag — `var userFullName = '<FULLNAME>';` |
| **Input vector** | Account fullname field (set via `PUT /api/settings/team/?action=update_member`) |
| **Payload tested** | `'; alert(document.domain); //` |
| **Severity estimate** | N/A — mitigated |
| **Test status** | ❌ Not exploitable — server HTML-encodes `'` as `&#39;` in script context |

### Evidence

Every authenticated page contains this server-rendered inline script:
```javascript
// dashboard/main/(index).html:1389-1391 — same pattern on all 19 pages
zE(function(){
    var userIdentifier = '1010395';
    var userFullName = 'roy kent';;   // server renders fullname into single-quoted string
    var userMail = '0xcaphe+roy@wearehackerone.com';
    zE('webWidget', 'prefill', { name: { value: userFullName, readOnly: true }, ...
```

Double-semicolon (`'roy kent';;`) is a Django/Jinja template artifact. No JS-encoding applied. Value is single-quoted — a single-quote in fullname breaks out of the string.

**All 19 authenticated pages**: dashboard/main, reports/*, email-testing, sending/*, settings/*, account/*

### Exploit Payload

If fullname = `'; alert(document.domain); //`, inline script becomes:
```javascript
var userFullName = ''; alert(document.domain); //';;
```

### Test plan
- [ ] Get edit_token: `POST /api/settings/team/?action=get_edit_token&CSRF_key=<csrf>` with `{"password": "<pwd>"}`
- [ ] Update fullname: `POST /api/settings/team/?action=update_member&CSRF_key=<csrf>` with `{"edit_token": "<tok>", "old_username": "email", "new_username": "email", "fullname": "'; alert(document.domain); //"}`
- [ ] Load any authenticated page — does JS execute?
- [ ] Check CSP headers on dashboard — does `script-src` allow inline?
- [ ] Escalation: admin updates victim team member fullname → XSS on victim's every page load

### Attack Chain (High severity)

1. Admin (or account owner) sets another team member's fullname to payload via `update_member`
2. Every page the victim loads fires the payload — no interaction needed
3. Alternately: chained with IDOR-001 (cross-tenant subaccount access) to hit accounts outside your own team

### Result

**NOT EXPLOITABLE — confirmed 2026-04-15 via browser test.**

User manually set fullname to `'; alert(document.domain); //` via the team settings UI.
Full `GET /dashboard/main/` HTTP response confirmed server-side HTML encoding.

**Evidence from live HTTP response:**

HTML nav bar (expected encoding):
```html
<span class="account-name">&#39;; alert(document.domain); //</span>
```

Inline `<script>` block (the critical one):
```javascript
var userFullName = '&#39;; alert(document.domain); //';;
```

**Why this mitigates:**
The `<script>` element content is parsed as "raw text" by the HTML parser — HTML entities
are **not decoded** within `<script>` blocks. The JavaScript engine therefore receives the
literal string `&#39;; alert(document.domain); //` — the `&#39;` is 5 characters
(`&`, `#`, `3`, `9`, `;`), not a single quote. The payload never breaks out of the JS
string. No code executes.

**What was tested:**
- Payload `'; alert(document.domain); //` set as fullname via browser UI
- Full `GET /dashboard/main/` response inspected
- Both HTML context (nav bar) and script context (inline `<script>`) confirmed `&#39;` encoding
- No CSP was present on the page (confirmed earlier — irrelevant since encoding blocks it first)

**Additional test — angle bracket injection (2026-04-15):**

Payload `</span> <script> alert(document.domain);</script><span>` set as fullname via UI.
Nav dropdown rendered:
```html
<span class="account-name">&lt;/span&gt; &lt;script&gt; alert(document.domain);&lt;/script&gt;&lt;span&gt;</span>
```

`<` and `>` are encoded as `&lt;` / `&gt;`. Tag injection fails — no element is created,
no context escape. The full set of HTML special characters is entity-encoded:
`<` → `&lt;`, `>` → `&gt;`, `'` → `&#39;`.

**Conclusion:** Django's template engine applies `|escape` or equivalent to all string
interpolation, including inside `<script>` blocks. All HTML special characters are encoded.
Both single-quote escape (JS context) and tag injection (HTML context) are fully mitigated.
This vector is definitively closed — no further testing warranted.
