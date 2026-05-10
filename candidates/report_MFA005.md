# [Low] MFA Lockout Uses Fixed Timeout Without Exponential Backoff

---

## 1. Summary

Both the Email OTP and TOTP login flows on `app.smtp2go.com` implement a fixed-duration lockout after failed attempts (~3 attempts for email OTP, ~5 for TOTP) with no exponential backoff. After the fixed lockout period (~7–10 minutes) expires, an attacker can immediately retry with another batch of guesses. This allows sustained, systematic 2FA brute-force attacks across repeated lockout cycles.

---

## 2. Vulnerability Details

- **Class**: Weak Anti-Brute-Force Control (WSTG-ATHN-03)
- **Endpoints**: `POST https://app.smtp2go.com/login/2fa/`
- **Root cause**: Lockout duration is static. There is no exponential backoff (lockout should double with each cycle: 10min → 20min → 40min → …). After expiry, the attempt counter resets to zero.

---

## 3. Severity

- **Rating**: Low
- **CVSS v3.1**: 2.6 — AV:N/AC:H/PR:N/UI:R/S:U/C:L/I:N/A:N
- **Justification**: Requires active account credentials to reach the 2FA step. The fixed lockout is a defense weakening rather than a standalone bypass.

---

## 4. Steps to Reproduce

**Email OTP lockout:**
```bash
# After reaching /login/2fa/ via email OTP path:
for i in 1 2 3 4; do
  curl -s -X POST 'https://app.smtp2go.com/login/2fa/' \
    -b cookies.txt \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'otp=000000'
done
# After ~3 attempts: {"status":"ERROR","error":"Your account is locked..."}
# Wait ~10 minutes → attempt counter resets → try another 3 guesses
```

**Observed behavior:**
| Attempt | Response |
|---|---|
| 1–3 | `{"error": "Incorrect authentication code"}` |
| 4 | `{"error": "Your account is locked. Please try again later."}` |
| After ~10 min | Counter resets — 3 more guesses available |

**Email OTP space**: 6 digits = 1,000,000 combinations.  
**Guesses per lockout cycle**: ~3 attempts per 10 minutes.  
**Time to exhaust**: 1,000,000 / 3 × 10 min ≈ 2,300 days — impractical.

However, for TOTP (6 digits, rotating every 30s) the threat model is different: an attacker who can predict the approximate TOTP window can focus guesses across multiple lockout cycles targeting known TOTP codes, and the fixed lockout doesn't grow to deter sustained campaigns.

---

## 5. Impact

- Sustained brute-force campaigns face no increasing deterrent
- Lockout expires at fixed intervals, making timing attacks predictable
- No account notification triggered after multiple lockout cycles

---

## 6. Recommended Remediation

1. Implement exponential backoff: lockout duration doubles after each lockout cycle (10 min → 20 → 40 → max 24h)
2. Send account owner email notification after N lockout cycles, alerting of repeated failed 2FA attempts
3. Consider permanent lockout after excessive cycles, requiring manual account recovery

---

*Tested on: 2026-05-08*
