---
name: cspt-hunter
description: >
  Full Client-Side Path Traversal (CSPT) hunting workflow for bug bounty and penetration testing.
  Use this skill whenever the user wants to test for CSPT, is analyzing a web target for path
  traversal primitives, has JS files from jxscout/recon and wants to find CSPT sources or sinks,
  is looking at HTTP requests in Caido and wants traversal payloads, or mentions any of: CSPT,
  client-side path traversal, %2F traversal, path param injection, fetch URL injection, or
  wants to chain traversal to CSRF/XSS/SSRF. Also trigger when the user asks "does this framework
  decode params" or "what payloads work for [framework]". This skill covers all phases:
  framework fingerprinting → source identification → payload generation → Caido testing workflow
  → sink analysis → findings.md output.
---

# CSPT Hunter

Client-Side Path Traversal (CSPT) is a bug class where the frontend router decodes a URL parameter
into a traversal primitive (e.g. `../`) that then gets interpolated into a `fetch()` call. The
result is attacker-controlled API endpoint targeting. Chained with open redirect → XSS, file upload
→ XSS, or CSRF depending on what the traversed endpoint does.

**Reference files — read these when you need them:**
- `references/framework-matrix.md` — Full decoding behavior per framework (React, Next.js, Vue, Nuxt, Angular, SvelteKit, Ember, SolidStart)
- `references/payloads.md` — Framework-specific payload lists, encoding variants, double-encode bypasses
- `references/caido-workflow.md` — Caido HTTPQL filters, match-and-replace rules, testing methodology

---

## Phase 1: Framework Fingerprinting

Before picking payloads, identify the frontend framework. Read inputs in this priority order:

### From a URL / domain
- Check JS bundle filenames: `_next/`, `__nuxt`, `/@vite/`, `ember-` are giveaways
- Look for `<meta name="generator">` or framework-specific HTML comments
- Check `window.__NUXT__`, `window.__remixContext`, `window.next`, `window.Ember` in page source

### From JS files (jxscout output)
Look for these fingerprints:
| Signal | Framework |
|---|---|
| `useParams`, `useSearchParams`, `createBrowserRouter` | React Router v6 |
| `__NEXT_DATA__`, `getServerSideProps`, `app/` routes | Next.js |
| `useRoute`, `useRouter`, `createRouter` (Vue) | Vue Router / Nuxt |
| `paramMap`, `ActivatedRoute`, `HttpClient` | Angular |
| `load({ params`, `$page.params`, `+page.svelte` | SvelteKit |
| `Route.extend`, `model(params)`, `route-recognizer` | Ember |
| `useParams` + `createResource`, `"use server"` | SolidStart |

### From Caido HTTP requests
- `X-Powered-By: Next.js` header
- `__cf_bm` + `_next/data/` paths → Next.js
- Response contains `nuxt` JSON payload → Nuxt
- Angular: look for `ng-version` attribute or zone.js in sources
- SvelteKit: `_app/immutable/` paths

### From a framework name directly
Skip to Phase 2 with the named framework.

---

## Phase 2: Source Identification

CSPT requires a **source** — a URL-derived value that reaches a fetch sink. Three source types:

### Path Parameters (e.g. `/users/:id`)
Check the framework's decoding behavior. Read `references/framework-matrix.md` for exact behavior.

Quick summary:
- **Fully decoded (slashes real):** React Router, Vue Router, Angular, SvelteKit, Ember (:param), Nuxt (client)
- **Re-encoded (safe):** Next.js page components, SolidStart path params
- **Raw / no decode:** SolidStart, Nuxt server (default)

### Query Parameters
**Every framework decodes query params.** This is the universal CSPT vector. No exceptions.
`?widget=../../attachments/x` → `widget = "../../attachments/x"` in all frameworks.

Query params are often overlooked and have NO segment boundary constraint — the full traversal string arrives in one decoded value without needing any encoding tricks.

### Hash Fragment
`window.location.hash` is never encoded or decoded by the browser. Whatever is after `#` is exactly what JS sees. Literal `../` works with no encoding at all.

### Finding Sources in JS Files
When given JS files from jxscout, scan for these patterns:

```
# Path param sources
useParams()
route.params.
paramMap.get(
params.get(
this.route.snapshot.params
model(params)

# Query param sources (universal)
useSearchParams()
route.query.
queryParamMap.get(
url.searchParams
$page.url.searchParams
searchParams.get(

# Hash sources
location.hash
window.location.hash
```

Then trace the value forward to find sinks.

---

## Phase 3: Sink Identification

### Primary sink — `fetch()` and wrappers
```
fetch(`/api/${param}`)
axios.get(`/api/${param}`)
$fetch(`/api/${param}`)          # Nuxt
useFetch(`/api/${param}`)        # Nuxt
this.http.get(`/api/${param}`)   # Angular HttpClient
```

### Secondary / server-side sinks (higher impact)
These reach internal services:
- Next.js route handlers: `await params` is auto-decoded, then used in `fetch()`
- SvelteKit `+page.server.ts`: params decoded, fetch bypasses `hooks.server.ts`
- Nuxt `server/api/`: `getRouterParam(event, 'id', { decode: true })` + `$fetch()`
- SolidStart `"use server"` functions: passthrough to internal fetch

### XSS escalation sinks
If CSPT can redirect a fetch to an attacker-controlled endpoint, look for these render sinks:
| Framework | Dangerous Sink |
|---|---|
| React / Next.js | `dangerouslySetInnerHTML` |
| Vue / Nuxt | `v-html` |
| Angular | `[innerHTML]` + `bypassSecurityTrustHtml()` |
| SvelteKit | `{@html ...}` |
| Ember | Triple-curly `{{{val}}}` or `htmlSafe()` |
| SolidStart | `<div innerHTML={val} />` |

---

## Phase 4: Payload Selection

Read `references/payloads.md` for the full payload matrix. Quick selection guide:

| Framework | Best path param payload | Query param payload |
|---|---|---|
| React Router | `..%2F..%2Ftarget` | `../../target` |
| Vue Router | `..%2F..%2Ftarget` | `../../target` |
| Angular | `..%2F..%2Ftarget` | `../../target` |
| SvelteKit | `..%2F..%2Ftarget` | `../../target` |
| Ember | `..%2F..%2Ftarget` or `%2e%2e%2f` | `../../target` |
| Next.js (route handler) | `..%2F..%2Ftarget` | `../../target` |
| SolidStart | **query params only** | `../../target` |
| Nuxt (client) | `..%2F..%2Ftarget` | `../../target` |

---

## Phase 5: Testing Workflow

Read `references/caido-workflow.md` for the full Caido setup. High-level steps:

1. **Baseline** — identify a dynamic path: `/app/users/123` → confirm `/app/users/` is a real route
2. **Inject payload** — replace the dynamic segment: `/app/users/..%2F..%2Fadmin`
3. **Watch fetch traffic** — in Caido, filter for requests matching the expected API prefix
4. **Confirm traversal** — did the fetch go to a different endpoint than expected?
5. **Escalate** — is there an XSS render sink? Is there a file upload endpoint to chain?
6. **Try server-side** — if the framework has SSR, does the same payload hit an internal route?

---

## Phase 6: Output

### findings.md structure
```markdown
# CSPT Finding — [Target] — [Date]

## Target
URL: 
Framework: 
Confirmed via: 

## Vulnerability
**Type:** Client-Side Path Traversal
**Source:** [e.g. route.params.id via Vue Router decodeParams()]
**Sink:** [e.g. useFetch(\`/api/products/${id}\`)]
**Impact:** [Attacker-controlled fetch endpoint / CSRF primitive / XSS chain]

## Reproduction
1. Navigate to: [URL with payload]
2. Observe: [what fetch fires]
3. Expected URL: /api/products/123
4. Actual URL: /api/[traversed path]

## Payload
Path: `..%2F..%2F[target]`
Query: `?[param]=../../[target]`

## Escalation Potential
- [ ] XSS via [render sink] + file upload
- [ ] CSRF (GET-based state change at traversed endpoint)
- [ ] SSRF (server-side sink, internal network access)

## Evidence
[Caido screenshot / request-response pairs]
```

---

## Quick-Reference: Things That Are Always Safe to Try

Regardless of framework, always test these:

1. **Query param traversal** — `?[any_param]=../../[interesting_path]` — decoded everywhere, no encoding needed
2. **Hash traversal** — `#../../[path]` — raw, no encoding needed  
3. **`%2F` in path segment** — `..%2F..%2F[target]` — works in React, Vue, Angular, SvelteKit, Ember
4. **Catch-all / splat routes** — literal `../../` works with no encoding (e.g. React `*`, Vue `/:pathMatch(.*)`)
5. **Server-side sinks** — if you see `+page.server.ts`, Next.js route handlers, or `"use server"` — try server-side SSRF, not just client-side CSPT
