# [Low] Account Enumeration via Password Reset Endpoint (Timing + Message Oracle)

---

## 1. Summary

The `POST /forgot-password/` endpoint on `app.smtp2go.com` reveals whether an email address is registered with smtp2go through two distinct channels: different response messages and significantly different response times. An attacker can enumerate valid smtp2go user accounts by querying the endpoint with candidate email addresses and observing these differences.

---

## 2. Vulnerability Details

- **Class**: Information Disclosure / Account Enumeration (WSTG-IDNT-04)
- **Endpoint**: `POST https://app.smtp2go.com/forgot-password/`
- **Root cause**: The server sends an actual password reset email for valid accounts (adding email delivery latency) and performs a distinct code path for invalid accounts, leaking both message content and timing.

---

## 3. Severity

- **Rating**: Low
- **CVSS v3.1**: 3.7 — AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:N/A:N
- **Justification**: Enables targeted phishing and credential stuffing preparation. Low impact in isolation but contributes to attack chains.

---

## 4. Steps to Reproduce

```bash
# Valid account
time curl -s -X POST 'https://app.smtp2go.com/forgot-password/' \
  -d 'email=valid_user@example.com'
# Response: "Password reset email sent to valid_user@example.com"
# Time: ~2,000–13,000ms (email send latency)

# Invalid email
time curl -s -X POST 'https://app.smtp2go.com/forgot-password/' \
  -d 'email=notregistered@example.com'
# Response: "Unable to retrieve user information, Please try again..."
# Time: ~379ms (fast DB miss, no email sent)
```

**Two independent oracle signals:**

| Signal | Valid Account | Invalid Email |
|---|---|---|
| Response message | "Password reset email sent to [email]" | "Unable to retrieve user information, Please try again..." |
| Response time | 2,000–13,000ms | ~379ms |

---

## 5. Impact

- Allows silent enumeration of valid smtp2go accounts from public email lists
- Enables targeted phishing (know which emails have smtp2go accounts)
- Supports credential stuffing with email verification pre-check

---

## 6. Recommended Remediation

1. Return the same message for both valid and invalid emails (e.g., "If that email is registered, you'll receive a reset link shortly")
2. Add a fixed time delay (or use async processing) so response time is uniform regardless of account existence

---

*Tested on: 2026-05-08*
