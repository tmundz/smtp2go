# [Low] Session Cookie Missing Secure Flag Enables Plaintext Transmission

---

## 1. Summary

The `login_id` cookie set by `app.smtp2go.com` is missing the `Secure` attribute. This flag prevents the browser from transmitting the cookie over unencrypted HTTP connections. Without it, if a user is subjected to an SSL-stripping attack or visits any HTTP page on the same domain/subdomain, the `login_id` cookie may be transmitted in plaintext, exposing the session token to network interception.

---

## 2. Vulnerability Details

- **Class**: Insecure Cookie Configuration (WSTG-SESS-02)
- **Cookie**: `login_id`
- **Issuer**: `app.smtp2go.com` login endpoint
- **Root cause**: Missing `Secure` attribute in `Set-Cookie` header. Cookie is a Flask itsdangerous signed cookie.

---

## 3. Severity

- **Rating**: Low
- **CVSS v3.1**: 3.1 — AV:N/AC:H/PR:N/UI:R/S:U/C:L/I:N/A:N
- **Justification**: Requires active MITM/SSL-strip position or mixed-content scenario. Production site enforces HTTPS via HSTS, reducing real-world exposure. Defense-in-depth failure.

---

## 4. Steps to Reproduce

```bash
curl -s -I -X POST 'https://app.smtp2go.com/api/login/' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'username=test%40example.com&password=test'

# Observe Set-Cookie header:
# Set-Cookie: login_id=<value>; HttpOnly; Path=/
# Note: Missing "Secure" attribute
```

**Expected (secure) header:**
```
Set-Cookie: login_id=<value>; HttpOnly; Secure; SameSite=Strict; Path=/
```

**Actual header:**
```
Set-Cookie: login_id=<value>; HttpOnly; Path=/
```

Missing: `Secure`, `SameSite`

---

## 5. Impact

- On networks where an attacker can perform SSL stripping (public Wi-Fi, rogue AP), the `login_id` session token can be captured in plaintext
- Captured session token allows session hijacking without knowing the user's password or TOTP code
- If any subdomain of smtp2go.com serves HTTP content (or is taken over), the cookie could leak via HTTP requests

---

## 6. Recommended Remediation

1. Add `Secure` attribute to the `login_id` cookie and all session cookies
2. Add `SameSite=Strict` to prevent cross-site transmission (also mitigates CSRF for session-bearing requests)
3. Verify HSTS `includeSubDomains` is set to prevent subdomain HTTP downgrade

---

*Tested on: 2026-05-08*
