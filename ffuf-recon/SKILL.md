---
name: ffuf-recon
description: >
  ffuf-based web recon skill for bug bounty and penetration testing. Use this skill
  whenever the user wants to fuzz directories, endpoints, parameters, subdomains,
  vhosts, or API paths with ffuf. Also trigger when the user wants to build custom
  wordlists for a specific target — from extracted JS strings, response content,
  domain-specific terms, or by combining/deduplicating existing lists. Trigger on:
  "fuzz this target", "run ffuf", "directory brute force", "enumerate endpoints",
  "build a wordlist", "make a custom wordlist", "fuzz for params", "subdomain
  fuzzing", "vhost fuzzing", "ffuf flags", "what wordlist should I use", "API
  endpoint fuzzing", "fuzz the API", "enumerate subdomains with ffuf",
  "assetfinder", "kiterunner", "kr scan", "find subdomains", "asset discovery",
  or any request to actively probe a web target's surface. Always use this skill
  before manually constructing ffuf/kr commands — it has the exact flag syntax,
  filter strategies, wordlist recipes, and tool chaining order ready to go.
---

# ffuf Recon

## Overview

Four phases. Run them in order or jump to the relevant one.

```
Phase 0 → Asset discovery             (assetfinder + kiterunner — subdomains, live hosts)
Phase 1 → Wordlist preparation        (build/select the right list)
Phase 2 → ffuf + kiterunner execution (flags, filters, scan types)
Phase 3 → Triage & output             (findings/ffuf-results.md)
```

**Phase 0 always runs first on a new target** — you need the full subdomain/asset
list before you know what to fuzz. **Phase 1 before Phase 2** — the right wordlist
beats any flag.

Read `references/wordlist-recipes.md` for target-type-specific list building
strategies. Read `references/filter-guide.md` for response filtering logic.

---

## Phase 0 — Asset Discovery

**Goal**: Enumerate subdomains and live hosts before touching ffuf. Two tools,
run in parallel: `assetfinder` (passive, instant) and `kiterunner` (active API
route discovery).

### 0.1 assetfinder — Passive Subdomain Enumeration

`assetfinder` queries passive sources (crt.sh, certspotter, hackertarget, Wayback,
etc.) with zero requests to the target. Always run this first.

```bash
# Basic run — subdomains only
assetfinder --subs-only TARGET.com | tee findings/wordlists/subs-assetfinder.txt

# Also run without --subs-only to catch related assets
assetfinder TARGET.com | tee findings/wordlists/subs-assetfinder-related.txt

# Combine and deduplicate
cat findings/wordlists/subs-assetfinder*.txt | sort -u \
  > findings/wordlists/subs-passive.txt

echo "Passive subdomains found: $(wc -l < findings/wordlists/subs-passive.txt)"
```

Layer with other passive tools if available:
```bash
# subfinder — broader source coverage
subfinder -d TARGET.com -silent | tee -a findings/wordlists/subs-passive.txt

# amass passive
amass enum -passive -d TARGET.com | tee -a findings/wordlists/subs-passive.txt

# Deduplicate again after layering
sort -u findings/wordlists/subs-passive.txt -o findings/wordlists/subs-passive.txt
```

### 0.2 Resolve & Filter Live Hosts

```bash
# Resolve passive list to live IPs — dnsx preferred
cat findings/wordlists/subs-passive.txt \
  | dnsx -silent -a -resp \
  | tee findings/wordlists/subs-live.txt

# If no dnsx: use httpx to check HTTP/HTTPS directly
cat findings/wordlists/subs-passive.txt \
  | httpx -silent -title -status-code -tech-detect \
  | tee findings/subs-httpx.txt

echo "Live hosts: $(wc -l < findings/wordlists/subs-live.txt)"
```

Review `findings/subs-httpx.txt` — httpx's `-tech-detect` will give you tech
stack hints per subdomain before you run a single fuzz.

### 0.3 kiterunner — API Route Discovery

Kiterunner (kr) is purpose-built for API discovery. It uses `.kite` route databases
compiled from real OpenAPI/Swagger specs — a huge advantage over generic wordlists
for finding documented API routes that happen to be exposed.

**Install / route databases:**
```bash
# Install
go install github.com/assetnote/kiterunner@latest

# Download route databases (one-time setup)
# Large — ~250MB, covers thousands of APIs
wget https://wordlists-cdn.assetnote.io/data/kiterunner/routes-large.kite.tar.gz
tar -xzf routes-large.kite.tar.gz

# Small — faster scans, good for initial sweep
wget https://wordlists-cdn.assetnote.io/data/kiterunner/routes-small.kite.tar.gz
tar -xzf routes-small.kite.tar.gz
```

**Basic API route scan (single host):**
```bash
kr scan https://TARGET \
  -w /path/to/routes-large.kite \
  -A "Authorization: Bearer TOKEN" \
  --ignore-length 34            # filter common "not found" size — set after baseline
  | tee findings/kr/kr-scan.txt
```

**Scan all live subdomains at once:**
```bash
# Build URL list from live hosts
cat findings/wordlists/subs-live.txt \
  | awk '{print "https://"$1}' \
  > findings/wordlists/subs-urls.txt

kr scan -w /path/to/routes-large.kite \
  -A "Authorization: Bearer TOKEN" \
  --ignore-length 34 \
  -j 3 \                        # 3 concurrent hosts
  --input-list findings/wordlists/subs-urls.txt \
  | tee findings/kr/kr-all-subs.txt
```

**Kiterunner + custom wordlist (brute mode):**
```bash
# Use your Phase 1 custom wordlist with kr instead of just ffuf
kr brute https://TARGET \
  -w findings/wordlists/custom-api.txt \
  -A "Authorization: Bearer TOKEN" \
  --ignore-length 34 \
  | tee findings/kr/kr-brute.txt
```

**Replay a specific route (for manual inspection):**
```bash
# kr outputs a "replay" command for each finding — use it to re-examine
kr replay "GET 403 [ 2606ms] https://TARGET/api/v1/admin" \
  -w /path/to/routes-large.kite \
  -A "Authorization: Bearer TOKEN"
```

**Key kr flags:**
```
-w          route database or wordlist (.kite file or plain text)
-A          add a header (use for auth)
-j          concurrent hosts (default 3)
--ignore-length    filter by response size (like ffuf -fs)
--fail-status-codes   codes to treat as failures (default: 400,401,404,403,501,502,426,411)
--delay     delay between requests (ms) — use for rate-limited targets
--input-list   scan a list of URLs from a file
```

**What kiterunner finds that ffuf typically misses:**
- Routes specific to known SaaS APIs (Stripe, Twilio, Salesforce, etc.) if the
  target runs a similar product
- REST conventions your wordlist didn't cover (e.g., `/api/v1/{resource}/bulk`,
  `/_health`, `/api/internal/diagnostics`)
- GraphQL endpoints and operation names compiled from real GraphQL APIs

### 0.4 Combine Phase 0 Output

After Phase 0, you have:
```
findings/wordlists/subs-live.txt    ← live subdomains (input to ffuf/kr)
findings/subs-httpx.txt             ← tech stack per subdomain
findings/kr/kr-all-subs.txt         ← API routes found by kiterunner
```

Feed kiterunner findings back into Phase 1 — extract new path segments:
```bash
# Extract discovered paths from kiterunner output
grep -oE '(GET|POST|PUT|DELETE|PATCH) [0-9]+ \[.*\] https://[^ ]+' \
  findings/kr/kr-all-subs.txt \
  | awk '{print $NF}' \
  | sed 's|https://[^/]*/||' \
  | sort -u >> findings/wordlists/js-paths.txt
```

---

## Phase 1 — Wordlist Preparation

### 1.1 Source Priority

Build the wordlist in this order — earlier sources are higher signal:

```
1. JS-extracted strings      ← highest signal, target-specific
2. Response-mined words      ← second highest, discovered during crawl
3. Caido/proxy history       ← paths you've already seen, expand from here
4. Public lists (curated)    ← fallback, broad coverage
5. AI-generated variants     ← use for API versioning, resource name mutation
```

### 1.2 JS-Extracted Wordlist

If you have JS files from js-recon Phase 1, extract path-like strings:

```bash
# Extract all path-like strings from JS
grep -ohE '"(/[a-zA-Z0-9_/-]{2,})"' findings/raw/js/*.js \
  | tr -d '"' | sort -u > findings/wordlists/js-paths.txt

# Also extract single path segments (resource names like "orders", "invoices")
grep -ohE '"([a-zA-Z][a-zA-Z0-9_-]{2,})"' findings/raw/js/*.js \
  | tr -d '"' \
  | grep -v -E '^(true|false|null|undefined|function|return|const|let|var)$' \
  | sort -u > findings/wordlists/js-words.txt

# Combine and deduplicate
cat findings/wordlists/js-paths.txt findings/wordlists/js-words.txt \
  | sort -u > findings/wordlists/js-combined.txt

wc -l findings/wordlists/js-combined.txt
```

### 1.3 Response-Mined Wordlist (CeWL-style)

If you've captured HTTP responses (from Caido or curl):

```bash
# Extract words from response bodies (min length 4, ignore common stopwords)
cat findings/raw/responses/*.txt \
  | grep -ohE '[a-zA-Z][a-zA-Z0-9_-]{3,}' \
  | tr '[:upper:]' '[:lower:]' \
  | sort | uniq -c | sort -rn \
  | awk '$1 >= 2 { print $2 }' \
  | grep -vf wordlists/stopwords.txt \
  > findings/wordlists/response-mined.txt
```

Read `wordlists/stopwords.txt` for the stopword list to filter.

### 1.4 Public List Selection

**Read `references/wordlist-recipes.md`** for the full list selection guide.
Quick reference:

| Use case | Recommended list |
|---|---|
| General dir brute | `raft-medium-directories.txt` (SecLists) |
| API endpoint fuzzing | `api/api-endpoints.txt` + `api/objects.txt` (SecLists) |
| API versioning | `wordlists/api-versions.txt` (this skill) |
| Subdomain fuzzing | `subdomains-top1million-5000.txt` (SecLists) |
| Vhost fuzzing | same as subdomain |
| Parameter fuzzing | `burp-parameter-names.txt` (SecLists) |
| File extension fuzzing | `wordlists/extensions.txt` (this skill) |
| Backup/config files | `wordlists/backup-files.txt` (this skill) |

### 1.5 Custom API Wordlist (AI-generated variants)

When you know the resource model from JS recon, generate variants:

Given a resource name (e.g., `order`), generate:
```
order          orders         order_id        order-id
orderItem      order_items    order-items     orderItems
invoice        invoices       billing         payments
checkout       cart           basket          purchase
```

Also always include these API structure words alongside resource names:
```
list           search         filter          query
create         update         delete          bulk
export         import         upload          download
count          summary        stats           report
me             self           current         my
admin          internal       private         debug
v1             v2             v3              latest
```

Save the combined output to `findings/wordlists/custom-api.txt`.

**Script to build this automatically:**
```bash
python3 scripts/gen-api-wordlist.py \
  --resources "order,invoice,user,account,payment" \
  --output findings/wordlists/custom-api.txt
```
Read `scripts/gen-api-wordlist.py` for the script.

### 1.6 Final Wordlist — Combine & Deduplicate

```bash
cat \
  findings/wordlists/js-combined.txt \
  findings/wordlists/custom-api.txt \
  findings/wordlists/response-mined.txt \
  /path/to/seclists/Discovery/Web-Content/raft-medium-directories.txt \
  | sort -u \
  | grep -v '^#' \
  | grep -v '^$' \
  > findings/wordlists/final.txt

echo "Final wordlist: $(wc -l < findings/wordlists/final.txt) entries"
```

---

## Phase 2 — ffuf + kiterunner Execution

### 2.1 Global Flags (always include)

```bash
-t 40          # threads — 40 is safe for most bug bounty targets
-timeout 10    # per-request timeout in seconds
-c             # colorize output
-v             # verbose — shows full URL in output
-o findings/ffuf/SCANNAME.json -of json   # always save output
```

Set rate limiting for sensitive targets:
```bash
-rate 30       # max requests/second — use for targets with aggressive WAFs
```

### 2.2 Scan Types

**Directory / endpoint fuzzing**
```bash
ffuf -u https://TARGET/FUZZ \
  -w findings/wordlists/final.txt \
  -t 40 -timeout 10 -c -v \
  -o findings/ffuf/dirs.json -of json \
  -mc 200,201,204,301,302,307,401,403,405
```

**API path fuzzing (with base path)**
```bash
ffuf -u https://TARGET/api/v1/FUZZ \
  -w findings/wordlists/custom-api.txt \
  -t 40 -timeout 10 -c -v \
  -o findings/ffuf/api-v1.json -of json \
  -mc 200,201,204,301,302,307,401,403,405 \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json"
```

**API version fuzzing**
```bash
ffuf -u https://TARGET/api/FUZZ/users \
  -w wordlists/api-versions.txt \
  -t 20 -timeout 10 -c -v \
  -o findings/ffuf/api-versions.json -of json \
  -mc 200,201,401,403
```

**Parameter fuzzing (GET)**
```bash
ffuf -u "https://TARGET/api/endpoint?FUZZ=test" \
  -w /path/to/seclists/Discovery/Web-Content/burp-parameter-names.txt \
  -t 40 -timeout 10 -c -v \
  -o findings/ffuf/params.json -of json \
  -mc 200,201,400,401,403,405 \
  -fs BASELINE_SIZE    # set after running a baseline
```

**POST body parameter fuzzing**
```bash
ffuf -u https://TARGET/api/endpoint \
  -w /path/to/seclists/Discovery/Web-Content/burp-parameter-names.txt \
  -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{"FUZZ":"test"}' \
  -t 30 -timeout 10 -c -v \
  -o findings/ffuf/post-params.json -of json \
  -mc 200,201,400,401,403,405 \
  -fs BASELINE_SIZE
```

**Subdomain fuzzing (active — after assetfinder passive sweep)**
```bash
# Only run active ffuf subdomain fuzzing if assetfinder Phase 0 was insufficient
# or the program explicitly allows active DNS fuzzing.
# Get baseline size for NXDOMAIN first:
curl -si "https://doesnotexist99.TARGET.com" | head -5   # note: may just fail to resolve

ffuf -u https://FUZZ.TARGET.com \
  -w /path/to/seclists/Discovery/DNS/subdomains-top1million-5000.txt \
  -t 40 -timeout 10 -c -v \
  -o findings/ffuf/subdomains.json -of json \
  -mc 200,201,301,302,401,403 \
  -fs BASELINE_SIZE    # baseline from a non-existent subdomain
```

**Vhost fuzzing**
```bash
ffuf -u https://TARGET \
  -H "Host: FUZZ.target.com" \
  -w /path/to/seclists/Discovery/DNS/subdomains-top1million-5000.txt \
  -t 40 -timeout 10 -c -v \
  -o findings/ffuf/vhosts.json -of json \
  -fs BASELINE_SIZE
```

**Extension fuzzing**
```bash
ffuf -u https://TARGET/api/users.FUZZ \
  -w wordlists/extensions.txt \
  -t 40 -timeout 10 -c -v \
  -o findings/ffuf/extensions.json -of json \
  -mc 200,201,204,301,302,403
```

### 2.3 Authentication Headers

Always add auth headers when you have a session:
```bash
# Bearer token
-H "Authorization: Bearer eyJ..."

# Cookie
-H "Cookie: session=ABC123; csrftoken=XYZ"

# Both token + CSRF (common in SPAs)
-H "Authorization: Bearer eyJ..." \
-H "X-CSRF-Token: TOKEN_VALUE"

# API key
-H "X-API-Key: KEYVALUE"
```

### 2.4 Filtering Strategy

**Read `references/filter-guide.md`** for the full filtering decision tree.

Quick reference — filter approaches in order of preference:

```bash
# Filter by status code (whitelist)
-mc 200,201,204,301,302,307,401,403,405   # show only these

# Filter by response size (after baseline)
-fs 1234        # hide responses of exactly N bytes
-fs 1234,5678   # hide multiple sizes

# Filter by word count
-fw 42          # hide responses with exactly 42 words

# Filter by line count  
-fl 10          # hide responses with exactly 10 lines

# Filter by regex in response
-fr "Not Found"        # hide responses matching this string
-fr "404|not found"    # regex

# Match by regex (show only)
-mr '"id":'     # show only responses containing this string
```

**Baseline method** (use before parameter/subdomain fuzzing):
```bash
# Get baseline response size for a known-404 path
curl -si "https://TARGET/definitely-does-not-exist-$(date +%s)" \
  | wc -c
# Use that size as -fs value
```

### 2.5 Recursive Fuzzing

```bash
# Recursion — follow discovered directories 2 levels deep
ffuf -u https://TARGET/FUZZ \
  -w findings/wordlists/final.txt \
  -recursion -recursion-depth 2 \
  -t 30 -timeout 10 -c \
  -o findings/ffuf/recursive.json -of json \
  -mc 200,201,301,302,401,403
```

Use `-recursion` carefully on bug bounty — it multiplies requests fast.
Set `-rate 20` when using it.

---

## Phase 3 — Triage & Output

### 3.1 Parse JSON Output

```bash
# Quick triage of results
cat findings/ffuf/SCANNAME.json \
  | python3 -c "
import json,sys
d = json.load(sys.stdin)
for r in d.get('results', []):
    print(r['status'], r['length'], r['url'])
" | sort -k1,1n -k2,2rn
```

### 3.2 Interesting Status Codes

| Status | What to do |
|---|---|
| 200 | Confirm manually — is it real content or a catch-all? |
| 401 | Endpoint exists but needs auth — try with your token |
| 403 | Endpoint exists but forbidden — try method swap, header manipulation |
| 405 | Method not allowed — the path exists, try other methods |
| 301/302 | Follow the redirect — note destination |
| 500 | Server error — endpoint likely exists, probe further |

### 3.3 403 Bypass Attempts (when 403 found)

```bash
# Method swap
curl -X POST https://TARGET/forbidden-path
curl -X PUT  https://TARGET/forbidden-path

# Header bypass
curl -H "X-Original-URL: /forbidden-path"   https://TARGET/
curl -H "X-Rewrite-URL: /forbidden-path"    https://TARGET/
curl -H "X-Forwarded-For: 127.0.0.1"        https://TARGET/forbidden-path
curl -H "X-Custom-IP-Authorization: 127.0.0.1" https://TARGET/forbidden-path

# Path normalization
curl https://TARGET/forbidden-path/
curl https://TARGET/%2fforbidden-path
curl https://TARGET/./forbidden-path
curl https://TARGET/allowed/../forbidden-path
```

### 3.4 findings/ffuf-results.md Entry Format

```markdown
## [FFUF-001] /api/v1/admin — 403

| Field | Value |
|---|---|
| **Scan** | ffuf/api-v1.json |
| **Status** | 403 |
| **Size** | 142 bytes |
| **Method** | GET |
| **Auth used** | Bearer token (Account A) |
| **Bypass attempted** | Method swap, X-Original-URL, path normalization |
| **Bypass result** | ⬜ Not yet / ✅ Bypassed / ❌ Clean |

### Notes
Path exists but returns 403 with Account A token. Not tested with Account B.
Try: is this role-gated? Check JWT role claim from fingerprint report.
```

---

## Rules

- Always confirm the target is in scope before running ffuf or kiterunner.
- Run assetfinder (passive) before any active scanning — zero noise, free data.
- Start with a low thread count (`-t 20`) on new targets — escalate if stable.
- Use `-rate` on targets that have WAFs or show 429s quickly.
- Never use recursion without a rate limit.
- Save every scan as JSON with `-o` — you'll want to grep it later.
- Run baseline before parameter/vhost fuzzing — wrong filter = missed findings.
- Feed kiterunner discoveries back into your wordlist before the next ffuf pass.

---

## Reference Files

| File | When to read |
|---|---|
| `references/wordlist-recipes.md` | Phase 1 — full wordlist selection by target type |
| `references/filter-guide.md` | Phase 2 — response filter decision tree |
| `wordlists/api-versions.txt` | Phase 2 — API version segment wordlist |
| `wordlists/extensions.txt` | Phase 2 — file extension fuzzing list |
| `wordlists/backup-files.txt` | Phase 2 — backup/config file discovery |
| `wordlists/stopwords.txt` | Phase 1.3 — filter noise from response-mined lists |
| `scripts/gen-api-wordlist.py` | Phase 1.5 — generate target-specific API wordlist |

Also pair with: **`js-recon` skill** (Phase 1 produces the JS-extracted wordlist
input), **`web-fingerprint` skill** (Phase 2 headers tell you what paths/versions exist).
