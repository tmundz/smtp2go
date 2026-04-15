# WCP-006 — CORS Misconfiguration: Confirmed Finding

**Target**: app-us.smtp2go.com  
**Date confirmed**: 2026-04-15  
**Status**: ✅ Confirmed — full chain demonstrated end-to-end

---

## Attack Type

CORS Misconfiguration → Credentialed Cross-Origin Read → Session Token Theft → Account Takeover

---

## Preconditions

1. **Victim has an active smtp2go session** — they are logged into `app-us.smtp2go.com` in their browser.

2. **Attacker has JavaScript execution on `http://insights.hotjar.com`** — the exact origin smtp2go trusts. Realistic paths:
   - XSS vulnerability in Hotjar's own web application at `insights.hotjar.com`
   - DNS hijack or domain compromise of `insights.hotjar.com`
   - The ACAO is `http://` not `https://` — an attacker only needs HTTP execution on that hostname, lowering the bar compared to needing a valid TLS cert

3. **Victim visits the attacker-controlled page at `http://insights.hotjar.com`** while their smtp2go session is active in the same browser — one-click interaction (phishing link, malicious ad, redirected from a compromised page).

4. **Victim's browser sends cross-site cookies** — the smtp2go session cookie has no `SameSite` attribute. Browsers that do not enforce SameSite=Lax by default will send the cookie on cross-origin requests. Confirmed working: Firefox. Chrome 80+ blocks this by default, which limits the affected population to Firefox users and any browser without SameSite enforcement (mobile browsers, embedded webviews, enterprise-managed Chromium builds with `SameSiteByDefaultCookies` disabled).

---

## Reasoning

smtp2go unconditionally responds with:

```
Access-Control-Allow-Origin: http://insights.hotjar.com
Access-Control-Allow-Credentials: true
```

on every API endpoint regardless of whether the request actually came from Hotjar. This tells the browser: *"let any JS running at that origin read the full response, including cookies sent with the request."*

The secondary issue that converts CORS read access into full account takeover: the API echoes the `login_id` session token directly in response bodies, not just as a cookie. The token is not bound to IP or user-agent in a way that prevents reuse. Once read cross-origin, it authenticates independently — no other credential needed.

---

## What an Attacker Gets

| Endpoint | Data readable cross-origin | CSRF required |
|---|---|---|
| `/api/settings/webhooks/` | `login_id` session token + webhook config | No |
| `/api/settings/subaccounts/` | Account plan data, subaccount IDs | No |
| `/api/settings/smtp_users/` | SMTP credentials | Yes |
| `/api/settings/api_users/` | API keys | Yes |

The `login_id` token alone is sufficient to take over the account. Confirmed by curl returning `200 OK` with authenticated data using only that token with no session cookie.

---

## Curl Confirmation

**1. CORS headers on live server**
```bash
curl -si 'https://app-us.smtp2go.com/api/settings/webhooks/' \
  -H 'Origin: http://insights.hotjar.com' \
  -b 'session=<valid_session>' \
  | grep -i 'HTTP/\|access-control'

# Output:
# HTTP/1.1 200 OK
# access-control-allow-credentials: true
# access-control-allow-origin: http://insights.hotjar.com
```

**2. login_id token in response body**
```bash
curl -s 'https://app-us.smtp2go.com/api/settings/webhooks/' \
  -H 'Origin: http://insights.hotjar.com' \
  -b 'session=<valid_session>' \
  | python3 -c "import sys,json; print(json.load(sys.stdin)['login_id'])"

# Output: .eJwFwc...  (full session token)
```

**3. Stolen token authenticates — no session cookie needed**
```bash
curl -si 'https://app-us.smtp2go.com/api/settings/webhooks/' \
  -b "login_id=<stolen_token>" \
  | grep 'HTTP/'

# Output:
# HTTP/1.1 200 OK  ← authenticated with stolen token alone
```

---

## PoC

`poc/wcp-006-cors.html` — served from `http://insights.hotjar.com` via `/etc/hosts`.

Runs automatically on page load from the attacker's origin. Makes two credentialed cross-origin requests:
1. `GET /api/settings/webhooks/` — extracts and displays `login_id` token
2. `GET /api/settings/subaccounts/` — reads account/plan data

Tested in: Firefox 149 with `network.cookie.sameSite.laxByDefault = false` and `network.cookie.cookieBehavior = 0`.

---

## Remediation

1. **Remove or scope the CORS trust** — `insights.hotjar.com` should not have credentialed cross-origin access to API endpoints. If Hotjar integration requires any cross-origin communication, scope it to specific non-sensitive endpoints with explicit allowlists.
2. **Do not echo session tokens in response bodies** — `login_id` should only travel as a `Set-Cookie` header, never in JSON responses.
3. **Add `SameSite=Lax` (minimum) or `SameSite=Strict` to all session cookies** — this would block cross-origin fetch requests from sending cookies regardless of CORS headers, eliminating the browser-side attack vector entirely.
4. **Add `Secure` flag to all session cookies** — prevents cookie transmission over HTTP.
