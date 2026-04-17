# IDOR / BAC Candidates — smtp2go

---

## [IDOR-001] POST /api/login/ — Login-As-Subaccount via `LOGIN_AS` integer ID

| Field | Value |
|---|---|
| **Source** | `static/vue/settings/subaccounts/main.js:5860` |
| **Method** | POST |
| **Endpoint** | `/api/login/` |
| **Object type** | `record_id` — integer (subaccount numeric ID) |
| **Severity estimate** | CRITICAL — full cross-tenant account takeover |
| **Test status** | ⬜ Untested |

### Evidence
```js
// main.js:5860
onLoginAsClicked: function (t) {
  var e = {};
  e.LOGIN_AS = t.record_id;   // integer
  e.STACK = "STACK";
  var s = HTML.ajax("post", END_POINTS.urls()["Login"], e, null, false, "Loading...");
  s.success(function (t) {
    window.location = END_POINTS.fronts()["Account Summary"];
  });
}
```
The master account uses this to log in as one of its own subaccounts.
If the backend only validates the session (not that the session's account *owns* `record_id`),
an attacker can log in as any subaccount by enumerating the integer ID.

Observed: master/sponsor account ID `1010395` (from config metadata).
Subaccount `record_id` values are likely in similar numeric range.

### Test plan
- [ ] Log in as Account A (master account with at least one subaccount)
- [ ] Note your own subaccount's `record_id` from the subaccounts list
- [ ] Log in as Account B (second master account with its own subaccount)
- [ ] Note Account B's subaccount `record_id`
- [ ] From Account A's session: `POST /api/login/` with `{ LOGIN_AS: <B_subaccount_record_id>, STACK: "STACK" }`
- [ ] Does the response set a session for B's subaccount?
- [ ] Try `LOGIN_AS` values ±1, ±10, ±100 from your own subaccount's `record_id`
- [ ] Try `LOGIN_AS=0`, `LOGIN_AS=-1`, `LOGIN_AS=1` (lowest ID)

### Result
_Populate after testing._

---

## [IDOR-002] PUT /api/settings/subaccounts/?action=toggle-archiving — Cross-Tenant Archiving Toggle

| Field | Value |
|---|---|
| **Source** | `static/vue/settings/subaccounts/main.js:5668` |
| **Method** | PUT |
| **Endpoint** | `/api/settings/subaccounts/?action=toggle-archiving&CSRF_key=<token>` |
| **Object type** | `subaccount_member_id` — integer |
| **Severity estimate** | High |
| **Test status** | ⬜ Untested |

### Evidence
```js
// main.js:5668
var s = { subaccount_member_id: e.record_id };
this.mixinAjax_put(this.requestPoint, "toggle-archiving", s, ...)
// → PUT /api/settings/subaccounts/?action=toggle-archiving
//   Body: { subaccount_member_id: <integer> }
```

### Test plan
- [ ] Account A: observe own subaccount's `record_id`
- [ ] Account B: observe its subaccount's `record_id`
- [ ] From Account A's session: PUT with `subaccount_member_id=<B_subaccount_record_id>`
- [ ] Verify if archiving state changed on B's account
- [ ] Test with `has_confirmed_disable: true` variant (line 5668–5685)

### Result
_Populate after testing._

---

## [IDOR-003] PUT /api/settings/subaccounts/?action=toggle-sms — Cross-Tenant SMS Toggle

| Field | Value |
|---|---|
| **Source** | `static/vue/settings/subaccounts/main.js:5688` |
| **Method** | PUT |
| **Endpoint** | `/api/settings/subaccounts/?action=toggle-sms&CSRF_key=<token>` |
| **Object type** | `subaccount_member_id` — integer |
| **Severity estimate** | High |
| **Test status** | ⬜ Untested |

### Evidence
```js
// main.js:5688
var e = {
  subaccount_member_id: t.record_id,
  sms_disabled_by_master: t.sms_disabled_by_master,
  has_confirmed_disable: true,
};
this.mixinAjax_put(this.requestPoint, "toggle-sms", e, ...)
```

### Test plan
- [ ] From Account A's session: PUT with `subaccount_member_id=<B's record_id>`
- [ ] Verify if SMS is disabled/enabled on B's subaccount

### Result
_Populate after testing._

---

## [IDOR-004] PUT /api/settings/subaccounts/?action=toggle-2fa — Cross-Tenant 2FA Toggle

| Field | Value |
|---|---|
| **Source** | `static/vue/settings/subaccounts/main.js:5847` |
| **Method** | PUT |
| **Endpoint** | `/api/settings/subaccounts/?action=toggle-2fa&CSRF_key=<token>` |
| **Object type** | `subaccount_member_id` — integer |
| **Severity estimate** | High — can disable/enforce 2FA on another tenant's subaccount |
| **Test status** | ⬜ Untested |

### Evidence
```js
// main.js:5847
var s = { subaccount_member_id: t.record_id };
this.mixinAjax_put(this.requestPoint, "toggle-2fa", s, ...)
```

### Test plan
- [ ] From Account A's session: PUT with `subaccount_member_id=<B's record_id>`
- [ ] If B's 2FA is disabled, this may allow bypassing 2FA requirement on B's subaccount

### Result
_Populate after testing._

---

## [IDOR-005] PUT /api/settings/subaccounts/?action=open — Cross-Tenant Subaccount Reopen

| Field | Value |
|---|---|
| **Source** | `static/vue/settings/subaccounts/main.js:5769` |
| **Method** | PUT |
| **Endpoint** | `/api/settings/subaccounts/?action=open&CSRF_key=<token>` |
| **Object type** | `subaccount_member_id` + `subaccount_username` |
| **Severity estimate** | Medium |
| **Test status** | ⬜ Untested |

### Evidence
```js
// main.js:5769
var s = {
  subaccount_member_id: t.record_id,
  subaccount_username: t.email,
};
this.mixinAjax_put(this.requestPoint, "open", s, ...)
```
Note: also requires `subaccount_username` (email). Lower severity if email validation blocks cross-tenant.

### Test plan
- [ ] From Account A: PUT with `subaccount_member_id=<B_id>` and `subaccount_username=<B_email>`
- [ ] B's email may need to be known — but if `record_id` check is the only auth, email is secondary

### Result
_Populate after testing._

---

## [IDOR-006] PUT /api/settings/subaccounts/?action=migrate — Cross-Tenant Sender Migration

| Field | Value |
|---|---|
| **Source** | `static/vue/settings/subaccounts/main.js:5605` |
| **Method** | PUT |
| **Endpoint** | `/api/settings/subaccounts/?action=migrate&CSRF_key=<token>` |
| **Object type** | `subaccount_member_id` — integer, `usernames` — JSON array |
| **Severity estimate** | High — can migrate senders between accounts |
| **Test status** | ⬜ Untested |

### Evidence
```js
// main.js:5605
var e = {
  usernames: JSON.stringify(this.selectedUsernames),
  subaccount_member_id: this.migrateToSubaccount["record_id"],
};
this.mixinAjax_put(this.requestPoint, "migrate", e, ...)
```
If `subaccount_member_id` is not validated to belong to the caller's account,
an attacker could migrate their own senders INTO another account.

### Test plan
- [ ] From Account A: PUT with `subaccount_member_id=<B's subaccount record_id>` and own sender usernames
- [ ] Would move Account A's senders into Account B's subaccount

### Result
_Populate after testing._

---

## [IDOR-007] Hidden Endpoints via `?show_hidden_endpoints`

| Field | Value |
|---|---|
| **Source** | `static/vue/settings/api-auth/main.js:1122` |
| **Method** | GET (URL param) |
| **Endpoint** | `/sending/apikeys/?show_hidden_endpoints` → `POST /api/settings/api_users/?action=load-active-users` |
| **Object type** | Boolean flag — reveals hidden API endpoint permissions |
| **Severity estimate** | Medium — may expose undocumented/admin endpoints |
| **Test status** | ⬜ Untested |

### Evidence
```js
var a = new URLSearchParams(window.location.search);
var n = a.has("show_hidden_endpoints");
// POSTed to backend: { ..., show_hidden_endpoints: n }
```

### Test plan
- [x] Visit `/sending/apikeys/?show_hidden_endpoints` 
- [x] Inspect the response from `load-active-users` — what additional endpoints appear?
- [x] Are any endpoints only visible with this flag? Document them.
- [ ] Do hidden endpoints have weaker access controls?

### Result
❌ **Not exploitable — flag has no effect on this account. Tested 2026-04-14.**

Tested directly via POST to `load-active-users` with `show_hidden_endpoints=true` vs `false`:
- `api_index` returned identical structure (1 dict, 14 groups) in both cases
- No additional endpoint groups or paths appeared with the flag enabled

The `api_index` is the outbound smtp2go API permission map (paths like `/email/send`, `/domain/verify`, etc.) — not internal web app endpoints. The flag may only have effect for internal admin accounts or accounts with specific roles. No value on standard master accounts.

---

## [IDOR-008] POST /zdesk_chat_auth — Zendesk Chat JWT Leaks Victim Name/Email

| Field | Value |
|---|---|
| **Source** | CSV row 329 — `POST /zdesk_chat_auth?CSRF_key=<token>` |
| **Method** | POST |
| **Endpoint** | `/zdesk_chat_auth?CSRF_key=<token>` |
| **Object type** | User identity (name, email, external_id) |
| **Severity estimate** | Medium — PII leakage when chained with LOGIN_AS IDOR |
| **Test status** | ⬜ Untested |

### Evidence
The `/zdesk_chat_auth` endpoint returns a Zendesk Chat JWT signed server-side:
```json
{
  "status": "OK",
  "results": {
    "jwt": "eyJhbGciOiJIUzI1NiIsImtpZCI6ImFwcF82OTJlNTYzOTNlNjQ1NzVlNTNhYjA2NDciLCJ0eXAiOiJKV1QifQ..."
  }
}
```

JWT payload (decoded):
```json
{
  "scope": "user",
  "name": "roy kent",
  "email": "0xcaphe+roy@wearehackerone.com",
  "external_id": "1010395_0xcaphe+roy@wearehackerone.com",
  "iat": 1776219295,
  "exp": 1776219595
}
```

Contains: display name, email, account ID in `external_id` (format: `{account_id}_{email}`). Expiry: 5 min.

**Attack scenario**: After IDOR-001 login-as succeeds, call `/zdesk_chat_auth` from the victim
session to receive a JWT with the victim's name and email — PII exfiltration via IDOR chain.

### Test plan
- [ ] After IDOR-001 succeeds: POST /zdesk_chat_auth — confirm victim's name/email in JWT
- [ ] Can /zdesk_chat_auth be called without auth?
- [ ] Does `external_id` format reveal master account ID for any subaccount user?

### Result
_Populate after testing._

---

## [IDOR-009] Hidden Backend Endpoints — Never Surfaced in UI

| Field | Value |
|---|---|
| **Source** | `/end-points/` API response — full map decoded from CSV |
| **Method** | GET/POST (unknown per endpoint) |
| **Endpoints** | 10 backend-only URLs with no frontend link |
| **Severity estimate** | Unknown — requires per-endpoint investigation |
| **Test status** | ⬜ Untested |

### Hidden endpoints discovered from `/end-points/` response

| Endpoint Name | Backend URL | Risk Hypothesis |
|--------------|-------------|-----------------|
| Authentication | `/api/settings/authentication/list/` | DKIM/SPF keys, auth config |
| WebhookProcs | `/api/settings/webhooks/processing/` | Webhook processing rules/secrets |
| IP Allowlist | `/api/settings/ipallowlist/` | IP allowlist management |
| Unsubscribe Options | `/api/settings/unsubscribe/` | Unsubscribe behavior config |
| Footer | `/api/settings/footer/` | Email footer configuration |
| Archive Settings | `/api/settings/archives/` | Email archive config |
| bounce_suppress | `/api/settings/settings_bounce_suppress/` | Bounce suppression rules |
| Invoice Details | `/api/dasboard/invoice/` | **TYPO**: "dasboard" not "dashboard" |
| Reports Delivery | `/api/reports/delivery/` | Delivery report data |
| Tool Applications | `/api/available_applications/` | Available integrations |

None appeared in captured traffic — not visited during the session.

### Test plan
- [x] GET each hidden endpoint with valid session — what data is returned?
- [ ] GET each endpoint without session cookie — auth enforced or open?
- [x] GET `/api/dasboard/invoice/` AND `/api/dashboard/invoice/` — same handler or different?
- [x] `/api/settings/authentication/list/` — DKIM keys or SMTP credentials exposed?
- [x] `/api/settings/webhooks/processing/` — webhook secrets/callback URLs in response?
- [ ] For each endpoint: test cross-tenant IDOR with a different account's session

### Result
🔄 **Partial — authenticated responses confirmed, cross-tenant testing pending. Tested 2026-04-14.**

Live results with valid session:

| Endpoint | Method | HTTP | Response summary |
|----------|--------|------|-----------------|
| `/api/settings/authentication/list/` | GET | 405 | Method not allowed (Apache) |
| `/api/settings/authentication/list/` | **PUT** | **200** | **"Updated Successfully"** — blind write, no body required |
| `/api/settings/webhooks/processing/` | GET | 200 | `{"error": "feature not implemented"}` |
| `/api/settings/ipallowlist/` | GET | 200 | `{"error": "action not implemented"}` |
| `/api/settings/settings_bounce_suppress/` | GET | 200 | `{"suppress_bounces": true}` |
| `/api/settings/unsubscribe/` | GET | 200 | 500 internal error |
| `/api/settings/footer/` | GET | 200 | `{"html_footer": "", "text_footer": ""}` |
| `/api/settings/archives/` | GET | 200 | `{"error": "not permitted to enable archiving"}` |
| `/api/reports/delivery/` | GET | 200 | `{"error": "insufficient arguements"}` |
| `/api/available_applications/` | GET | 200 | Full list of all 1000 email testing clients |
| `/api/dasboard/invoice/` | GET | 200 | `{"error": "no invoice ID provided"}` |
| `/api/dashboard/invoice/` | GET | **404** | **Typo URL is the ONLY valid route** |

**Notable findings**:
1. **`PUT /api/settings/authentication/list/`** — returns `{"status":"OK","message":"Updated Successfully"}` with an empty body. This is a blind write endpoint. With no body content, it may be a no-op, or it may clear/reset authentication list state. Needs investigation with a payload.
2. **`/api/dasboard/invoice/`** — the typo URL (missing 'h') is the only valid route; correct spelling returns 404. Accepts an `invoice_id` param but the format is unknown. Could leak invoice data if ID is guessable.
3. **`/api/settings/settings_bounce_suppress/`** — exposes current setting. Can it be PUT to `false` to disable bounce suppression on another account? Cross-tenant IDOR to test.

**Cross-tenant testing**: All of the above need Account B to test IDOR across tenant boundaries.

---

## [IDOR-010] JWT Cookie — Unknown Third-Party Account ID Token

| Field | Value |
|---|---|
| **Source** | Cookie jar — every authenticated request to app-us.smtp2go.com |
| **Cookie name** | `1XJgM5twoV0e8IhkwW0BQuDwzkz` |
| **Type** | HS256 JWT — origin not in any JS file (third-party) |
| **Contains** | `external_id: "1010395"`, user-agent, `remote-addr: "75.159.128.178"` |
| **Expiry** | 12 hours |
| **Severity estimate** | Unknown — depends on what service accepts this cookie |
| **Test status** | ⬜ Untested |

### Evidence
```
1XJgM5twoV0e8IhkwW0BQuDwzkz=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

JWT payload (decoded):
```json
{
  "external_id": "1010395",
  "user-agent": "Mozilla/5.0 (X11; Linux x86_64) ...",
  "remote-addr": "75.159.128.178",
  "iat": 1776219292,
  "exp": 1776262492
}
```

Cookie name absent from all 238 application JS files — set server-side, consumed by unknown third-party.
`external_id` is the master account numeric ID.

### Test plan
- [ ] Browser devtools Network tab: identify which Set-Cookie response creates this cookie
- [ ] If smtp2go server generates it: attempt JWT alg:none with modified `external_id`
- [ ] Check if cookie is forwarded to any non-smtp2go origin
- [ ] Try forged JWT with `external_id: <other_account_id>` — any endpoint validates it?

### Result
_Populate after testing._

---

## [IDOR-002] Template Render — Cross-Account Read via user_template_id (NEW — paid account)

| Field | Value |
|---|---|
| **Source** | New CSV 2026-04-16, Account A session |
| **Method** | POST |
| **Endpoint** | `/api/settings/templates/?action=render-text` |
| **Object type** | `user_template_id` — integer |
| **Object in traffic** | Account A's template: `1250783` |
| **Severity estimate** | Medium — cross-account template content disclosure |
| **Test status** | ⬜ Untested |

### Context
Account A created template `user_template_id=1250783`. The render-text endpoint renders the template and returns `rendered_text`. Test whether Account B's session can render Account A's template.

Account B details (from new CSV):
- member_id: `1015003`
- CSRF key: `VA7xTimlfR3wN4BxB6pK2EyJjvWJCloNRNbvXPEhrdM`

### Test plan
- [ ] From Account B's session: `POST /api/settings/templates/?action=render-text` with `user_template_id=1250783`
- [ ] If response contains Account A's template HTML → IDOR confirmed
- [ ] Enumerate `user_template_id` ±10 from 1250783
- [ ] Try `user_template_id=0`, `user_template_id=-1`

### Result
_Populate after testing._

---

## [IDOR-003] Domain Objects — Cross-Account via Sequential domain.id (NEW — paid account)

| Field | Value |
|---|---|
| **Source** | New CSV 2026-04-16, both account sessions |
| **Object type** | domain ID — integer |
| **Account A domain** | id=`118702`, member_id=`1010395` |
| **Account B domain** | id=`118689`, member_id=`1015003` |
| **Delta** | 13 apart — sequential IDs |
| **Severity estimate** | High — cross-account domain management (delete/modify) |
| **Test status** | ⬜ Untested |

### Context
Both accounts have a domain with `id` returned in the verify response. Operations on domains use the domain name (`domain=wearehackerone.com`), not the ID. However, there may be ID-based endpoints. Test whether the name-based operations enforce ownership when the domain name is the same.

The confound: both accounts added the same domain `wearehackerone.com`. The server must differentiate by member_id/session. Test by using a domain name only Account B owns (add a unique domain to each account).

### Test plan
- [ ] Add unique domain to Account A (e.g., `test-accounta.wearehackerone.com`)  
- [ ] From Account B's session: `DELETE /api/settings/verified_senders/` with `domain=test-accounta.wearehackerone.com`
- [ ] If successful delete → IDOR confirmed
- [ ] Try via any endpoint accepting integer domain_id if discoverable
- [ ] Test: `GET /api/settings/verified_senders/?action=&domain_id=118702` from Account B session

### Result
_Populate after testing._

---

## [IDOR-004] Sender Records — esl_rpath_subdomain Cross-Account Injection

| Field | Value |
|---|---|
| **Source** | New CSV 2026-04-16 |
| **Endpoint** | `POST /api/settings/verified_senders/?action=validate-subdomains` |
| **Key params** | `entri_rpath_subdomain`, `entri_tracker_subdomain` |
| **Account A value** | `em1010395`, `s1010395._domainkey` |
| **Account B value** | `em1015003`, `s1015003._domainkey` |
| **Severity estimate** | Medium — subdomain routing manipulation |
| **Test status** | ⬜ Untested |

### Context
The `validate-subdomains` action takes user-controlled subdomain prefix values. Account A uses `em1010395`, Account B uses `em1015003`. Test whether Account A can set its subdomain to `em1015003` (Account B's routing prefix), effectively hijacking Account B's email delivery routing.

### Test plan
- [ ] From Account A: `POST validate-subdomains` with `entri_rpath_subdomain=em1015003`
- [ ] Does server accept or reject? Does it check ownership of the prefix?
- [ ] If accepted: what DNS records would be created? Who controls the subdomain?

### Result
_Populate after testing._
