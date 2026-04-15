---
name: js-recon
description: >
  Expert JS recon and API surface mapping skill for bug bounty hunting. Use this skill
  whenever the user is: spidering or mapping a web target, extracting API endpoints from
  JavaScript files, building an IDOR or Web Cache Deception candidate list, or initializing
  a findings/ directory for a new program. Trigger on any of: "recon a target", "map the JS",
  "find APIs in", "spider this program", "IDOR surface", "extract endpoints", "find endpoints
  in JS", "start recon on", "initialize findings", "analyze JS files", "look for IDOR",
  "bug bounty recon", "map API surface", or when the user pastes a target domain and asks
  what to test. Also trigger when the user asks to analyze a downloaded JS file or bundle
  for API paths. This skill covers all four phases: JS discovery → endpoint extraction →
  IDOR candidate flagging → WCD candidate flagging. For the WCD testing phase, also read
  the web-cache-deception skill.
---

# JS Recon & API Surface Mapping

## Overview

Four sequential phases. Run them in order. Populate findings files as you go.

```
Phase 1 → findings/js-files.md          (JS inventory)
Phase 2 → findings/api-endpoints.md     (endpoint map)
Phase 3 → findings/idor-candidates.md   (IDOR surface)
Phase 4 → findings/wcd-candidates.md    (cache deception surface)
```

Always create the findings/ directory structure before starting Phase 1.
**Read `references/setup.md` now** for the exact directory init commands.

---

## Phase 1 — JS File Discovery

**Goal**: Enumerate every JS file the target loads. Download and beautify all of them.

### Tools (check availability in order, use first available)
- `katana` — preferred, follows JS-rendered links
- `hakrawler` — fast fallback
- `gau` — historical URLs from Wayback + Common Crawl (supplement, not replace)
- `curl` + `grep` — last resort manual extraction from HTML source

### Steps
1. Crawl and collect JS URLs into `findings/raw/js-urls.txt`
2. Also `curl` the main page and grep for `<script src=` tags — crawlers miss inline bundles
3. Download each unique JS URL to `findings/raw/js/`, named by MD5 of URL
4. Record the URL→filename mapping in `findings/raw/js-map.txt`
5. Beautify every minified file (detect: single line >5000 chars)
6. Populate `findings/js-files.md` as you go — one entry per file

**Read `scripts/phase1-crawl.sh`** for the exact commands to run.

### js-files.md entry format
```markdown
## [filename.js](https://target.com/static/main.abc123.js)

| Field | Value |
|---|---|
| **Local path** | findings/raw/js/a1b2c3.js |
| **Size** | 284 KB |
| **Type** | Webpack bundle — main app chunk |
| **Purpose** | SPA routing, auth flow, API client |
| **Secrets spotted** | None / [describe if found] |
| **APIs referenced** | /api/v1/users, /api/v1/orders (detail in Phase 2) |
```

---

## Phase 2 — API Endpoint Extraction

**Goal**: Extract every API endpoint referenced in the JS and document what it does.

**Read `scripts/phase2-extract.sh`** for grep patterns to run against the JS files.

### What to extract
- `fetch()` / `axios` / `$.ajax` / `XMLHttpRequest` calls
- String/template literals that look like paths: `/api/...`, `/v1/...`, `/graphql`
- Template literals with interpolated IDs: `` `/api/users/${id}` `` — **high IDOR signal**
- GraphQL operation names and query shapes
- Hardcoded hostnames / internal API subdomains
- Auth header construction (reveals auth scheme: Bearer, API key, cookie)

### api-endpoints.md entry format
```markdown
## [EP-001] GET /api/v1/users/{userId}/profile

| Field | Value |
|---|---|
| **Source** | raw/js/a1b2c3.js:2847 |
| **Method** | GET |
| **Auth** | Bearer token (Authorization header) |
| **Path params** | `userId` — integer |
| **Query params** | None observed |
| **Body** | N/A |
| **Returns** | User profile object (name, email, avatar, plan) |
| **IDOR signal** | 🔴 HIGH — integer userId in path, caller-controlled |
| **WCD signal** | 🟡 MEDIUM — returns PII, check if GET is cached |

**Description**: Fetches a user's profile. The userId is read from local state and
inserted directly into the path with no observed client-side validation.
```

Use these signal ratings:
- 🔴 HIGH — strong candidate, test immediately
- 🟡 MEDIUM — worth testing, lower confidence
- 🟢 LOW — unlikely but note it
- ⚪ NONE — not applicable

---

## Phase 3 — IDOR Candidate Analysis

**Goal**: For every 🔴/🟡 IDOR-signal endpoint, document the test plan and results.

**Read `references/idor-checklist.md`** for the full test matrix before starting this phase.

### What makes a strong IDOR candidate
| Pattern | Signal strength |
|---|---|
| Integer ID in path (`/orders/12345`) | 🔴 HIGH |
| UUID in path — predictable context | 🟡 MEDIUM |
| `?account_id=` or `?user_id=` in query | 🔴 HIGH |
| Object ID in request body | 🟡 MEDIUM |
| Batch endpoint: `?ids=1,2,3` or `{ "ids": [...] }` | 🔴 HIGH |
| `role` or `permission` param in body | 🔴 HIGH — priv esc |
| Endpoint returns a list with no obvious scoping filter | 🟡 MEDIUM |
| Indirect: session-scoped but no explicit ID | 🟢 LOW |

### idor-candidates.md entry format
```markdown
## [IDOR-001] GET /api/v1/invoices/{invoiceId}

| Field | Value |
|---|---|
| **Source endpoint** | EP-007 |
| **Reference type** | Integer path param |
| **Severity estimate** | High (if confirmed) |
| **Test status** | ⬜ Untested |

### Test plan
- [ ] Same-type swap: fetch invoice owned by Account B using Account A session
- [ ] Out-of-range: try invoiceId=0, -1, 99999999
- [ ] Type confusion: invoiceId="admin", "null", "undefined"
- [ ] Method swap: try POST/PUT to this path
- [ ] Param pollution: `?invoiceId=MINE&invoiceId=TARGET`

### Results
_Populate after testing._
```

Update `Test status` to:
- ✅ Confirmed — write full repro steps and impact
- ❌ Clean — note what was tested
- 🔄 Partial — note what was inconclusive

---

## Phase 4 — Web Cache Deception Candidates

**Goal**: Identify GET endpoints that return sensitive authenticated data and test whether
appending a static extension causes the CDN to cache the response.

> **Also read the `web-cache-deception` skill** before executing this phase — it has
> per-CDN payload tables, header interpretation, and the full Caido workflow.

### Quick triage — flag an endpoint for WCD if ALL are true
1. It's a GET request
2. It returns sensitive data (PII, tokens, API keys, billing, session info)
3. The target has a CDN layer (check for headers: see `references/cdn-fingerprint.md`)

### CDN fingerprint (quick)
```bash
curl -sI https://TARGET/ | grep -Ei \
  'cf-cache|x-cache|age:|via:|x-served-by|x-akamai|fastly-io|x-varnish'
```

See `references/cdn-fingerprint.md` for what each header means.

### Suffix payload list
Read `references/suffix-list.txt` — use these as the Automate/Intruder wordlist in Caido.

### wcd-candidates.md entry format
```markdown
## [WCD-001] GET /api/v1/me/settings

| Field | Value |
|---|---|
| **Source endpoint** | EP-003 |
| **CDN detected** | Cloudflare (CF-Cache-Status confirmed) |
| **Sensitive data** | Email, API key, notification preferences |
| **Cache-Control (base path)** | `private, no-store` |
| **Suffix tested** | `/api/v1/me/settings/x.css` |
| **CF-Cache-Status on suffix** | MISS → HIT (caching confirmed!) |
| **Unauthenticated result** | ⬜ Not yet tested |
| **Test status** | ⬜ Untested |

### Confirmation steps
- [ ] Auth GET to `/api/v1/me/settings/x.css` → confirm private data in response
- [ ] Second auth GET → CF-Cache-Status: HIT?
- [ ] Unauth GET (no cookies) → private data returned?

### Results
_Populate after testing._
```

---

## Rules

- Confirm target is in scope before sending any non-read request.
- Use two separate test accounts (Account A, Account B) for all IDOR testing.
- For WCD confirmation, use a completely separate unauthenticated session.
- Append to findings files — never truncate existing entries.
- Log clean results too — negative data matters.
- On confirmed bug: stop further exploitation, draft report immediately.

---

## Reference Files

| File | When to read |
|---|---|
| `references/setup.md` | Start of every session — directory init commands |
| `references/idor-checklist.md` | Before Phase 3 — full IDOR test matrix |
| `references/cdn-fingerprint.md` | Before Phase 4 — CDN ID and header meaning |
| `references/suffix-list.txt` | Phase 4 — WCD suffix payload wordlist |
| `scripts/phase1-crawl.sh` | Phase 1 — crawl and download commands |
| `scripts/phase2-extract.sh` | Phase 2 — grep patterns for endpoint extraction |

Also read: **`web-cache-deception` skill** for full WCD execution detail.
