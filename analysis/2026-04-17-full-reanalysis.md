# Full Re-analysis — 2026-04-17
**CSV coverage**: 1960 rows (app-us.smtp2go.com), both CSVs combined

## ACCOUNT MAPPING CORRECTION
- **KoU12 CSRF prefix** = Account A (roy kent, member_id=1010395) — session 1
- **BKe9 CSRF prefix** = Account A (roy kent) — session 2 (NOT Account B)
- **VA7x CSRF prefix** = Account B (ted lasso, member_id=1015003) — only session

The subagent's "cross-account IDOR" findings were wrong — KoU12 and BKe9 are the SAME ACCOUNT.

## WHAT ACCOUNT B (VA7x) ACTUALLY TOUCHED
Only these endpoints:
- `/api/settings/verified_senders/` — add domain, verify, get-shareable-entri-url, fetch-entri-info, validate-subdomains
- `/api/settings/team/` — GET only (viewed their team)
- `/api/dashboard/billing_details/` — GET (own billing data)
- `/zdesk_chat_auth` — Zendesk chat JWT

Account B NEVER accessed: templates, smtp_users, api_users, webhooks, reports, subaccounts.

## REAL FINDINGS

### 1. Template IDOR — NEVER TESTED cross-account
The previous "test" (BKe9 rendering template 1250783 → "No template exists") was Account A
testing a template it HADN'T CREATED YET in that session. This is NOT a cross-account test.
Account B (VA7x) has NEVER tried to render template_id=1250783.
**→ Real test pending: Account B session + render-text with template_id=1250783**

### 2. Domain name collision — untested IDOR
- Account A owns wearehackerone.com with domain_id=118702
- Account B owns wearehackerone.com with domain_id=118689
- DELETE and other domain operations use `domain=wearehackerone.com` (name, not ID)
- If server scopes by name but not account: Account A's DELETE could remove Account B's domain
**→ Real test pending: Account B session + DELETE domain=wearehackerone.com, check if domain_id=118702 (A's) also disappears**

### 3. action=verify SSRF via HTTP redirect chain
- DNS lookups confirmed from 18.209.86.113 (smtp2go's server)
- `requisition_ssl=true` is supposed to trigger SSL cert provisioning via HTTP fetch
- If smtp2go fetches https://yourdomain.com/.well-known/acme-challenge/ and follows redirects:
  - Redirect → http://169.254.169.254/v1/linode/type → Linode cloud metadata SSRF
**→ Requires: owned domain with DNS set up + VPS redirect server on port 80**

## DEAD ENDS (confirmed)
| Finding | Why Dead |
|---------|---------|
| SSTI via render-text | Handlebars/pybars, not Jinja2. `*` operator not valid. |
| XSS in team fullname | Vue.js uses `_v(_s(fullname))` = textNode, HTML escaped |
| SSRF via action=registrar | DNS NS lookup only, no HTTP. Returns nameserver name. |
| SSRF via webhook | Delivery via Svix (50.112.21.217), not smtp2go's own server |
| LOGIN_AS IDOR | "Access Denied" — properly restricted |
| API key pre-generation | Keys NOT active until user clicks save. Not usable pre-save. |
| Template IDOR (same-session "test") | Was Account A testing its own not-yet-created template |

## NEXT ACTIONS (prioritized)
1. Get Account B's fresh session (VA7x replacement)
2. Test: `POST /api/settings/templates/?action=render-text` from Account B with `user_template_id=1250783`
3. Test: `DELETE /api/settings/verified_senders/` from Account B with `domain=wearehackerone.com`, then check Account A's domain list
4. For SSRF: configure DNS on 0xcaphe.com → add to Account A → call verify with requisition_ssl=true → serve redirect on VPS → redirect to 169.254.169.254
