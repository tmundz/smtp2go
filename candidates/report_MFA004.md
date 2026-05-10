# [Medium] No CSRF Protection on Password Reset Endpoint Allows Silently Triggering Password Reset for Any Known Email

---

## 1. Summary

The `POST /forgot-password/` endpoint on `app.smtp2go.com` lacks CSRF protection — no CSRF token is present in the form, and no `SameSite` cookie attribute is set on relevant session cookies. Any page on the internet can silently trigger a password reset email for any known email address by luring a victim to visit a malicious page. This enables unsolicited password reset floods (account disruption) and, in combination with phishing, can facilitate account takeover.

---

## 2. Vulnerability Details

- **Class**: Cross-Site Request Forgery (CSRF)
- **Endpoint**: `POST https://app.smtp2go.com/forgot-password/`
- **Root cause**: No CSRF token in the form. Session cookies do not use `SameSite=Strict` or `SameSite=Lax`. The server accepts cross-origin POST requests and processes them.

---

## 3. Severity

- **Rating**: Medium
- **CVSS v3.1**: 5.4 — AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:L/A:L
- **Justification**: Requires victim to visit attacker's page, but sends real password reset email silently. Can disrupt service and be chained with phishing.

---

## 4. Steps to Reproduce

1. Host the following HTML on an attacker-controlled page:
```html
<form action="https://app.smtp2go.com/forgot-password/" method="POST" id="f">
  <input name="email" value="victim@example.com">
</form>
<script>document.getElementById('f').submit();</script>
```

2. Lure the victim to visit the page (or embed it in an iframe on a page the victim visits).

3. **Observe**: A password reset email is silently sent to `victim@example.com`. The victim sees an unexpected password reset email with no action initiated on their part.

**HTTP request (confirmed accepted):**
```http
POST /forgot-password/ HTTP/1.1
Host: app.smtp2go.com
Content-Type: application/x-www-form-urlencoded
Origin: https://evil.com
Referer: https://evil.com/csrf.html

email=victim%40example.com
```

**Server response**: Identical to legitimate submission — password reset email is sent.

---

## 5. Impact

- **Account disruption**: Attacker can continuously trigger password reset emails, flooding the victim's inbox and causing confusion
- **Phishing chain**: Attacker sends CSRF to trigger real password reset email, then sends a lookalike phishing email claiming to be the reset — victim is more likely to trust due to real reset appearing in inbox
- **Token leakage risk**: If the reset link is ever clicked in a browser that sends Referer headers (e.g., via third-party analytics on the reset landing page), the token could leak

---

## 6. Recommended Remediation

1. Add a CSRF token to the password reset form and validate it server-side
2. Set `SameSite=Strict` on session cookies to prevent cross-site requests from including credentials
3. Validate `Origin` and `Referer` headers on state-changing POST endpoints

---

*Tested on: 2026-05-08*
