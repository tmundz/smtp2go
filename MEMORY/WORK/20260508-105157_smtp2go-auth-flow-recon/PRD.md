---
task: Map smtp2go authentication and MFA flow recon
slug: 20260508-105157_smtp2go-auth-flow-recon
effort: advanced
phase: think
progress: 0/28
mode: interactive
started: 2026-05-08T10:51:57Z
updated: 2026-05-08T10:52:30Z
---

## Context

Bug bounty recon on smtp2go.com (app.smtp2go.com). Goal is to map the complete
authentication and MFA flow using User 1 (roy). This is read-only reconnaissance:
capture URLs, form structure, cookie names, response headers, and screenshots
at every step. Output feeds IDOR/auth-bypass and MFA-bypass testing.

Two test accounts exist: roy (credentials known) and ted (no password known).

### Risks
- MFA may fire, blocking login completion without TOTP code
- Password reset may redirect to authenticated state (MFA bypass surface)
- Session may lock after repeated login attempts
- No known TOTP secret for roy — MFA step may be uncompleteable
- Browser session must be properly closed to avoid zombie processes

## Criteria

### Login page
- [ ] ISC-1: Login page URL captured and recorded
- [ ] ISC-2: Login form action URL and HTTP method documented
- [ ] ISC-3: All visible input fields in login form listed by name/type
- [ ] ISC-4: All hidden input fields in login form listed by name/value
- [ ] ISC-5: Login page screenshot saved
- [ ] ISC-6: Cookie names set on login page load recorded

### Post-login flow
- [ ] ISC-7: Login attempt with roy credentials submitted
- [ ] ISC-8: Post-login redirect URL captured
- [ ] ISC-9: Dashboard screenshot saved after successful login
- [ ] ISC-10: Cookie names set after login recorded
- [ ] ISC-11: Interesting response headers on login response noted

### MFA flow (if triggered)
- [ ] ISC-12: MFA page URL captured if MFA fires
- [ ] ISC-13: MFA form action URL and HTTP method documented
- [ ] ISC-14: MFA type identified (TOTP / SMS / email OTP)
- [ ] ISC-15: MFA page screenshot saved
- [ ] ISC-16: "Remember this device" / "trust device" option presence noted
- [ ] ISC-17: "Skip" or "back" link presence on MFA page noted
- [ ] ISC-18: Hidden fields on MFA form listed

### MFA settings page
- [ ] ISC-19: MFA settings page URL captured
- [ ] ISC-20: MFA settings page screenshot saved
- [ ] ISC-21: Whether MFA is mandatory or optional documented
- [ ] ISC-22: Backup codes existence and location noted
- [ ] ISC-23: All MFA types offered listed

### Password reset flow
- [ ] ISC-24: Password reset page URL captured
- [ ] ISC-25: Password reset form action URL and method documented
- [ ] ISC-26: Password reset page screenshot saved
- [ ] ISC-27: Whether reset link leads to authenticated state noted

### Logout
- [ ] ISC-28: Logout flow URL(s) and final redirect URL captured

## Decisions

## Verification
