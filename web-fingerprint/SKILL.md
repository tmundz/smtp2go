---
name: web-fingerprint
description: >
  Website fingerprinting skill for bug bounty and penetration testing. Use this skill
  whenever the user wants to fingerprint a web target, identify the tech stack, map
  API paths to their JavaScript call sites, or analyze HTTP request headers from a
  captured session. Trigger on: "fingerprint this site", "what tech stack is this",
  "map where these API calls come from", "analyze these headers", "identify the
  framework", "fingerprint the backend", "analyze my captured requests", "what is
  this app built on", or when the user provides JS files and/or a CSV of HTTP requests
  and wants to understand the target surface before testing. This is a pre-exploitation
  recon skill — it produces a fingerprint.md report with tech signals, header analysis,
  API-to-callsite mapping, and a Potential Leads section for follow-on testing.
---

# Web Fingerprint

## Overview

Three analysis phases that converge into a single `fingerprint.md` report.
Run whichever phases apply based on what the user has provided.

```
Input A:  JS files      → Phase 1 (Tech Stack + Callsite Map)
Input B:  CSV requests  → Phase 2 (Header & Protocol Fingerprint)
Both:     Phase 3       → Correlate + produce fingerprint.md with Potential Leads
```

**Always produce `fingerprint.md` as the final output.**
Read `references/tech-signals.md` before starting Phase 1 — it contains framework
detection patterns that would take too long to reproduce inline.

---

## Phase 1 — JavaScript Tech Stack & Callsite Analysis

**Goal**: Identify frameworks/libraries, map API paths to their JS call sites,
and flag any source-to-sink patterns worth investigating.

### 1.1 Tech Stack Detection

Scan JS file content for these signal classes:

| Signal | What to grep | Likely framework |
|---|---|---|
| `__webpack_require__` / `webpackJsonp` | Bundle header | Webpack |
| `React.createElement` / `jsx(` | Any chunk | React |
| `angular.module(` / `ng-` directives | Any file | AngularJS (legacy) |
| `createApp(` / `defineComponent(` | Any file | Vue 3 |
| `Ember.Application` | Any file | Ember |
| `Next.js` / `_next/static` | HTML or chunk | Next.js |
| `__nuxt` / `_nuxt/` | HTML or chunk | Nuxt.js |
| `graphql` / `gql\`` | Imports or calls | GraphQL |
| `axios` / `superagent` | Import lines | HTTP client library |
| `jwt_decode` / `parseJwt` | Any file | JWT auth client-side |
| `Sentry.init` / `DD_RUM` | Any file | Error/monitoring SDK |
| `amplitude` / `mixpanel` / `segment` | Any file | Analytics — data model leak risk |
| `stripe` / `braintree` | Any file | Payment processing |
| `socket.io` / `SockJS` / `EventSource` | Any file | Real-time / WebSocket |

Also check: **read `references/tech-signals.md`** for CDN, WAF, and backend hints
detectable from JS alone (e.g., CSRF token naming, session cookie patterns in JS config).

### 1.2 Callsite Mapping

For every API endpoint found in the JS, map it back to the function(s) that call it.

**What to capture per call site:**

```
Endpoint:   /api/v1/orders/{orderId}/items
Method:     GET
File:       raw/js/main.abc123.js
Line:       4821
Function:   fetchOrderItems(orderId)
Caller:     OrderDetailView → useEffect hook
Data flow:  orderId ← props.match.params.orderId  ← router param  ← URL bar
```

The `Data flow` line is the key — trace where the ID/param **comes from**.
Anything that flows from: URL bar, route param, query string, localStorage, or
user input → directly into an API call is a **source-to-sink lead**.

**Read `references/source-to-sink.md`** for the full taint tracing methodology
and patterns to look for in minified/webpack code.

### 1.3 Source-to-Sink Signals (flag these)

| Pattern | Lead type |
|---|---|
| `params.id` / `params.userId` → fetch call | IDOR — route-controlled ID |
| `localStorage.getItem(...)` → API path | Stored-state injection |
| `location.search` parsed → body/header | Reflected param in request |
| `document.cookie` read → XHR | Cookie value relayed to API |
| Response field → subsequent request ID | Chained IDOR / BOLA |
| `user.role` / `user.permissions` → conditional | Client-side auth gate (bypass candidate) |
| Hardcoded `admin`, `internal`, `debug` paths | Hidden surface |

---

## Phase 2 — HTTP Header & Protocol Fingerprint

**Goal**: From a CSV of captured HTTP requests, extract auth patterns, session
mechanics, and backend hints — without touching the target.

### 2.1 CSV Format Expected

The CSV should have at minimum these columns (Caido/Burp export compatible):

```
method, url, status, request_headers, response_headers
```

If the export format differs, adapt — extract what you can. Tell the user what
columns you found and what you're using.

### 2.2 Header Analysis — What to Extract

**Auth & Session (highest value)**

| Header | What it tells you |
|---|---|
| `Authorization: Bearer <jwt>` | JWT auth — decode the payload, note claims |
| `Authorization: Bearer <opaque>` | Opaque token — note length/format, guess provider |
| `Cookie: session=...` | Cookie auth — note naming convention |
| `X-Auth-Token` / `X-API-Key` / `X-Access-Token` | Custom auth header schemes |
| `Set-Cookie` flags | `HttpOnly`, `Secure`, `SameSite` — missing flags are leads |
| `XSRF-TOKEN` / `X-CSRF-Token` / `__RequestVerificationToken` | CSRF token name → guess framework |

**Backend & Infrastructure**

| Header | Signal |
|---|---|
| `Server: nginx/1.x` | Nginx — note version |
| `Server: Apache/2.x` | Apache |
| `X-Powered-By: Express` | Node.js/Express |
| `X-Powered-By: PHP/8.x` | PHP — note version |
| `X-Powered-By: ASP.NET` | .NET — look for `__VIEWSTATE` |
| `Via: 1.1 cloudflare` | Cloudflare CDN |
| `CF-Ray` | Cloudflare confirmed |
| `X-Amz-Cf-Id` / `X-Cache: Hit from cloudfront` | AWS CloudFront |
| `Fastly-IO-Info` / `X-Served-By` | Fastly |
| `X-Akamai-*` | Akamai |
| `X-Cache: HIT` (Varnish) | Varnish / generic CDN |

**API Design Hints**

| Signal | Inference |
|---|---|
| Versioned paths `/v1/`, `/v2/` | Try `/v0/`, `/internal/` — older versions may have fewer controls |
| GraphQL endpoint (`/graphql`, `/gql`) | Try introspection: `{"query":"{__schema{types{name}}}"}` |
| `Content-Type: application/vnd.api+json` | JSON:API spec — predictable object/id patterns |
| `X-Request-ID` / `X-Correlation-ID` | Distributed tracing — multi-service backend |
| `X-RateLimit-*` headers | Rate limiting present — note limits |
| `Access-Control-Allow-Origin: *` | Overly permissive CORS — note all CORS headers |

### 2.3 JWT Decoding

If you find a JWT in any header or response body, decode the payload (base64):

```bash
echo "<base64-payload>" | base64 -d | python3 -m json.tool
```

Document every claim: `sub`, `iat`, `exp`, `role`, `org_id`, `user_id`, etc.
Any claim that looks like it controls access (role, permissions, org/tenant ID) is
a **Potential Lead** — flag it.

---

## Phase 3 — Correlation & fingerprint.md

**Goal**: Combine Phase 1 + Phase 2 into a single fingerprint report with a
prioritized Potential Leads section.

### fingerprint.md Structure

````markdown
# Fingerprint Report — [Target]
*Generated: [date]*

---

## Tech Stack

| Layer | Technology | Confidence | Evidence |
|---|---|---|---|
| Frontend framework | React 18 | High | `React.createElement`, version string in chunk |
| Bundler | Webpack 5 | High | `__webpack_require__` |
| HTTP client | axios 1.x | High | import in main bundle |
| Backend (inferred) | Node.js/Express | Medium | `X-Powered-By: Express` |
| CDN | Cloudflare | High | `CF-Ray`, `CF-Cache-Status` |
| Auth mechanism | JWT (Bearer) | High | `Authorization: Bearer eyJ...` |
| Session | HttpOnly cookie (supplemental) | Medium | `Set-Cookie: _session=...` |
| Monitoring | Sentry | Medium | `Sentry.init(` in bundle |

---

## Auth & Session Mechanics

_Describe the auth flow as you understand it:_
- Token type: JWT / opaque / session cookie
- Token issuance: where does the app get the token? (login endpoint, OAuth, SSO?)
- Claims observed (if JWT): list them
- How auth is transmitted: header / cookie / both
- CSRF protection: present / absent / partial — token name if present

---

## API Surface Summary

_High-level map of the API paths found and what layer of the app calls them._

| Endpoint | Method | Called From | Notes |
|---|---|---|---|
| `/api/v1/users/{id}` | GET | `UserProfile.jsx:84` | ID from route param |
| `/api/v1/orders` | POST | `CheckoutForm.jsx:201` | Body from form state |
| ... | | | |

---

## Header Anomalies

_Anything unexpected or misconfigured:_
- `Access-Control-Allow-Origin: *` on authenticated endpoints
- `X-Powered-By` not suppressed (info disclosure)
- Missing `Secure` flag on session cookie
- etc.

---

## Potential Leads

> These are **not confirmed bugs** — they are prioritized test candidates based on
> fingerprint signals. Verify each manually before reporting.

### 🔴 High Priority

**[LEAD-001] IDOR candidate — userId in route**
- **Signal**: `GET /api/v1/users/{userId}` — `userId` sourced from `params.userId`
  (URL bar), integer, no observed client-side scoping check
- **Why interesting**: Caller-controlled integer ID flowing directly to user-scoped resource
- **Test approach**: Swap userId across two test accounts; try sequential IDs
- **Next skill**: js-recon Phase 3 / IDOR checklist

**[LEAD-002] JWT role claim**
- **Signal**: JWT payload contains `"role": "user"` — string-typed
- **Why interesting**: Role field in a modifiable token position; try forging `"role": "admin"`
- **Test approach**: Decode → modify → re-sign (none/HS256 with empty secret) → replay
- **Next skill**: Manual JWT testing

### 🟡 Medium Priority

**[LEAD-003] Legacy API version**
- **Signal**: `/api/v2/` observed in requests; `/api/v1/` found in JS but not in CSV
- **Why interesting**: v1 may have fewer access controls or be unauthenticated
- **Test approach**: Replay v2 requests against v1 paths with same token

### 🟢 Low / Informational

**[LEAD-004] Sentry DSN in JS**
- **Signal**: Sentry `dsn` string found in bundle
- **Why interesting**: DSN can be used to submit events or enumerate org data
- **Test approach**: Document DSN, check Sentry's public reporting on its scope

---

## Remaining Unknowns

- [ ] WebSocket surface not yet mapped (socket.io detected but endpoints not enumerated)
- [ ] GraphQL introspection not attempted
- [ ] Mobile API (separate subdomain?) not in scope of this analysis
````

---

## Rules

- Do not send any live requests unless the user explicitly says the target is in scope.
- The CSV is read-only analysis — you're fingerprinting from captured data, not probing.
- Potential Leads must be clearly marked as unconfirmed hypotheses.
- Flag any hardcoded secrets (API keys, DSNs, internal hostnames) immediately, separately.

---

## Reference Files

| File | When to read |
|---|---|
| `references/tech-signals.md` | Phase 1 — extended framework/library signal patterns |
| `references/source-to-sink.md` | Phase 1.2 — taint trace methodology in minified JS |

Also consider: **`js-recon` skill** for full endpoint extraction pipeline if you
need to go deeper than the callsite map produced here.
