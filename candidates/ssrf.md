# SSRF Candidates — smtp2go

---

## [SSRF-001] Webhook URL — POST /api/settings/webhooks/

| Field | Value |
|---|---|
| **Source** | `(index).3.inline.js` endpoint map + settings/webhooks/ page |
| **Endpoint** | `/api/settings/webhooks/` |
| **Parameter** | URL field in webhook creation body |
| **Server-side fetch confirmed** | ⬜ Need interactsh ping |
| **Redirect follow** | ⬜ Unknown |
| **Internal access** | ⬜ Unknown |
| **Severity estimate** | High if metadata confirmed |
| **Test status** | ⬜ Untested |

### Context
smtp2go fires webhooks on email events (delivered, bounced, opened, clicked, etc.).
The webhook URL is configured by the user and the server makes an outbound POST to it.
This is a first-class SSRF surface.

### Test plan
- [ ] Configure a webhook with URL: your interactsh endpoint — does server call it? (confirm blind SSRF)
- [ ] Set URL to `http://169.254.169.254/latest/meta-data/` — check for AWS metadata
- [ ] Set URL to `http://metadata.google.internal/computeMetadata/v1/?recursive=true`
- [ ] Set URL to `http://localhost/`, `http://127.0.0.1:8080/`
- [ ] Set URL to `http://10.0.0.1/` (internal network probe)
- [ ] Try redirect chain: your server 301 → `http://169.254.169.254/...`
- [ ] Try protocol smuggling: `dict://127.0.0.1:6379/`, `file:///etc/passwd`
- [ ] Use "Test Webhook" button if present — this triggers an immediate server-side fetch
- [ ] Check: does the response body from the webhook fetch appear anywhere in the UI?

### Result
_Populate after testing._

---

## [SSRF-002] "Test Webhook" Button — Explicit Server-Side Fetch

| Field | Value |
|---|---|
| **Source** | Inferred from settings/webhooks/ UI (test button common in webhook settings) |
| **Endpoint** | `/api/settings/webhooks/?action=test` (likely) |
| **Parameter** | Webhook URL being tested |
| **Severity estimate** | High — explicit server-side HTTP fetch |
| **Test status** | ⬜ Untested |

### Context
Webhook settings pages typically have a "Test" button that triggers an immediate server
fetch to the configured URL. This is often less rate-limited/filtered than the production
webhook delivery path.

### Test plan
- [ ] Configure webhook with SSRF payload URL
- [ ] Click "Test Webhook" button
- [ ] Observe: does interactsh/Burp Collaborator receive the hit?
- [ ] Does the UI show any response from the test fetch?
- [ ] If response shown: try `http://169.254.169.254/` — is metadata returned in UI?

### Result
_Populate after testing._

---

## [SSRF-003] Domain Verification (HTTP method) — Server Fetches Verification URL

| Field | Value |
|---|---|
| **Source** | `/api/settings/verified_senders/` — domain verification feature |
| **Endpoint** | Domain verification endpoint (TBD from CSV) |
| **Parameter** | Domain name or verification URL |
| **Severity estimate** | Medium — server fetches a URL on your domain; redirect may reach internal |
| **Test status** | ⬜ Untested |

### Context
smtp2go's domain verification (for DKIM/SPF/DMARC) includes an HTTP verification method
where the server fetches a token from a URL on your domain. If the server follows
redirects, a 301 from your domain to `http://169.254.169.254/` could achieve SSRF.

### Test plan
- [ ] Register a verified sender domain you control
- [ ] Select "HTTP" verification method (if available)
- [ ] Note the verification URL the server is told to fetch
- [ ] Set up your domain to 301-redirect that path to `http://169.254.169.254/latest/meta-data/`
- [ ] Trigger verification — does the redirect get followed?

### Result
_Populate after testing._
