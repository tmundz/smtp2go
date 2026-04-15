# Caido CSPT Testing Workflow

## Setup

### HTTPQL Filters

Save these as Caido filter presets for quick access during testing.

**Watch for traversal-modified fetch requests:**
```
req.path.cont:"../" or req.path.cont:"%2F" or req.path.cont:"%2f"
```

**Catch responses from unexpected endpoints (confirm traversal landed):**
```
resp.code.eq:200 and req.path.cont:".."
```

**Find all dynamic path requests (baseline mapping):**
```
req.path.matches:"\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+"
```

**Isolate API calls from page requests (filter out assets):**
```
req.path.cont:"/api/" and not req.path.cont:".js" and not req.path.cont:".css"
```

**Surface requests where the path changed unexpectedly:**
```
req.path.cont:"/../" or req.path.cont:"/.."
```

---

## Step-by-Step Testing Workflow

### Step 1: Map Dynamic Routes

Browse the target normally with Caido intercepting. Identify patterns like:
- `/app/users/12345/profile` → dynamic segment is `12345`
- `/dashboard/widget/overview` → could be a named route param
- `/files/documents/report.pdf` → path or catch-all

Use this HTTPQL to list distinct path patterns:
```
req.path.matches:"\/[a-zA-Z0-9]+\/[a-zA-Z0-9_-]+"
```

### Step 2: Baseline the API Fetch

For a route like `/app/users/12345/profile`:
1. Load the page normally
2. In Caido, filter for API calls that fire: e.g. `req.path.cont:"/api/users/"`
3. Confirm the expected fetch: `GET /api/users/12345/profile`
4. Note the exact fetch URL pattern — this is what traversal needs to escape from

### Step 3: Inject Payload

Replace the dynamic segment with a traversal payload.
Navigate to: `/app/users/..%2F..%2Fadmin/profile`

In Caido, watch for:
- Did the fetch URL change?
- Does `GET /api/admin/profile` appear (or similar)?
- Did the response differ (200 vs 404, different body)?

### Step 4: Match and Replace Rule (Automate)

To test all requests with a payload automatically, use Caido's Match and Replace:

| Field | Value |
|---|---|
| Match in | Request path |
| Match | `/users/[0-9]+` |
| Replace with | `/users/..%2F..%2Fadmin` |
| Scope | In-scope host only |

This lets you browse normally and have every user-ID-bearing URL automatically fuzzed.

### Step 5: Test Query Params

For every page with a query param that feeds a fetch, test:
```
Original:  /dashboard/stats?widget=overview
Payload:   /dashboard/stats?widget=../../attachments/malicious
```

In Caido:
1. Find the request in history
2. Right-click → Send to Repeater
3. Modify the query param value
4. Check if the fetch endpoint changed

### Step 6: Test Hash Fragment

If the app uses hash routing or reads `window.location.hash`:
```
/dashboard/settings#../../admin/users
```

Hash isn't sent to the server — watch for XHR/fetch calls that fire after navigation,
not the initial page request.

### Step 7: Confirm Impact

Once traversal is confirmed:

**Scenario A — Different API endpoint responds:**
- What does the traversed endpoint return?
- Is it data you shouldn't have? → IDOR/BAC
- Is it a state-changing endpoint? → CSRF primitive

**Scenario B — File upload endpoint in scope:**
- Upload an HTML file with `<img src=x onerror=alert(1)>`
- CSPT to point fetch at the uploaded file URL
- Check if response is rendered via `dangerouslySetInnerHTML` / `v-html` / `{@html}` / `innerHTML`
- If yes → XSS

**Scenario C — Server-side sink:**
- Does the framework run server-side load functions? (Next.js route handlers, SvelteKit `+page.server.ts`)
- If yes, the traversal may reach internal services (SSRF)
- Look for differences in response time (internal timeout vs fast 404) to confirm

---

## Caido Automate Config for Bulk Testing

For systematic path fuzzing across dynamic routes:

1. Go to **Automate** in Caido
2. Set the base request (e.g. `GET /app/users/FUZZ/profile`)
3. Load payload list from `references/payloads.md` (path param section)
4. Match condition: response differs from baseline (different status code or body length)
5. Filter results with HTTPQL:
   ```
   resp.code.neq:404 and resp.code.neq:400
   ```

---

## Signs of Successful Traversal

| Observation | Meaning |
|---|---|
| API request goes to unexpected path | CSPT confirmed |
| Response is from a different resource | CSPT confirmed, impact TBD |
| Response is 200 but different content | Traversal landed somewhere valid |
| Response is 401/403 | Traversal landed but access denied (still report — proves primitive) |
| Response is 500 | Traversal may have landed in a code path expecting different input |
| No change in API requests | Framework re-encoded (safe) or no fetch source-to-sink |

---

## Evidence Collection

For your findings.md, capture from Caido:

1. **Before payload:** Screenshot of `GET /api/users/12345/profile` firing normally
2. **After payload:** Screenshot of `GET /api/[traversed-path]` firing
3. **Request diff:** Export both requests from Caido history
4. **Response diff:** Show the response body changed

Use Caido's **Compare** feature if available to diff request/response pairs.
