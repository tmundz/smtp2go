#!/usr/bin/env bash
# Phase 2 — API Endpoint Extraction
# Usage: bash phase2-extract.sh
# Run from repo root after Phase 1 completes

set -euo pipefail

JS_DIR="findings/raw/js"
OUT="findings/raw/extracted-endpoints.txt"

if [[ ! -d "$JS_DIR" ]]; then
  echo "ERROR: $JS_DIR not found — run Phase 1 first"
  exit 1
fi

# Use pretty versions when available, fall back to original
JS_FILES=$(ls "$JS_DIR"/*.pretty.js 2>/dev/null || ls "$JS_DIR"/*.js 2>/dev/null)
if [[ -z "$JS_FILES" ]]; then
  echo "ERROR: no JS files found in $JS_DIR"
  exit 1
fi

echo "[*] Extracting API endpoints from JS files..."
> "$OUT"

# ============================================================
# 1. fetch() / axios / XHR calls — capture the URL argument
# ============================================================
echo "[*] Pattern 1: fetch/axios/ajax calls"
grep -rEn \
  "(fetch|axios\.(get|post|put|patch|delete|request)|\.get|\.post|\.put|\.patch|\.delete)\s*\(" \
  $JS_DIR/*.pretty.js $JS_DIR/*.js 2>/dev/null \
  | grep -v "//.*fetch" \
  >> "$OUT" || true

# ============================================================
# 2. String literals that look like API paths
# ============================================================
echo "[*] Pattern 2: API path string literals"
grep -rEon \
  '"(\/api\/[^"]{3,}|\/v[0-9]+\/[^"]{3,}|\/graphql[^"]*|\/rest\/[^"]{3,})"' \
  $JS_DIR/*.pretty.js $JS_DIR/*.js 2>/dev/null \
  >> "$OUT" || true

grep -rEon \
  "'(\/api\/[^']{3,}|\/v[0-9]+\/[^']{3,}|\/graphql[^']*|\/rest\/[^']{3,})'" \
  $JS_DIR/*.pretty.js $JS_DIR/*.js 2>/dev/null \
  >> "$OUT" || true

# ============================================================
# 3. Template literals with interpolated IDs — HIGH IDOR signal
# ============================================================
echo "[*] Pattern 3: template literals with \${id} — IDOR signal"
grep -rEon \
  '`[^`]*(\/api\/|\/v[0-9]+\/)[^`]*\$\{[^}]+\}[^`]*`' \
  $JS_DIR/*.pretty.js $JS_DIR/*.js 2>/dev/null \
  | tee /dev/stderr \
  >> "$OUT" 2>&1 || true

# ============================================================
# 4. GraphQL operations
# ============================================================
echo "[*] Pattern 4: GraphQL operations"
grep -rEn \
  '(query|mutation|subscription)\s+[A-Z][a-zA-Z]+' \
  $JS_DIR/*.pretty.js $JS_DIR/*.js 2>/dev/null \
  >> "$OUT" || true

grep -rEn \
  'gql`|gql\(' \
  $JS_DIR/*.pretty.js $JS_DIR/*.js 2>/dev/null \
  >> "$OUT" || true

# ============================================================
# 5. Hardcoded hostnames and internal API URLs
# ============================================================
echo "[*] Pattern 5: hardcoded hostnames / internal URLs"
grep -rEon \
  'https?://[a-zA-Z0-9._-]+\.(internal|corp|local|dev|staging|api)[a-zA-Z0-9._/-]*' \
  $JS_DIR/*.pretty.js $JS_DIR/*.js 2>/dev/null \
  >> "$OUT" || true

grep -rEon \
  'https?://[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}\/[a-zA-Z0-9._/-]{10,}' \
  $JS_DIR/*.pretty.js $JS_DIR/*.js 2>/dev/null \
  >> "$OUT" || true

# ============================================================
# 6. Auth header construction — reveals auth scheme
# ============================================================
echo "[*] Pattern 6: auth header construction"
grep -rEn \
  "(Authorization|Bearer|api.?key|x-api-key|token)\s*[:=]\s*['\"\`]" \
  $JS_DIR/*.pretty.js $JS_DIR/*.js 2>/dev/null \
  >> "$OUT" || true

# ============================================================
# 7. Secrets — hardcoded keys, tokens, passwords
# ============================================================
echo "[*] Pattern 7: potential secrets"
grep -rEn \
  "(api_key|apikey|api.key|secret|password|passwd|token|private_key)\s*[:=]\s*['\"\`][a-zA-Z0-9+/=_-]{8,}" \
  $JS_DIR/*.pretty.js $JS_DIR/*.js 2>/dev/null \
  >> "$OUT" || true

# ============================================================
# 8. Query param patterns (often missed by path-only searches)
# ============================================================
echo "[*] Pattern 8: query param patterns"
grep -rEon \
  '"[a-z_]+_id"\s*:|[?&][a-z_]+(Id|_id)=' \
  $JS_DIR/*.pretty.js $JS_DIR/*.js 2>/dev/null \
  >> "$OUT" || true

# ============================================================
# 9. Role / permission / admin flags in request bodies
# ============================================================
echo "[*] Pattern 9: role/permission params — priv esc signal"
grep -rEn \
  '"(role|permission|is_admin|admin|scope|plan|tier|access_level)"\s*:' \
  $JS_DIR/*.pretty.js $JS_DIR/*.js 2>/dev/null \
  >> "$OUT" || true

# ============================================================
# Summary
# ============================================================
TOTAL=$(wc -l < "$OUT")
echo ""
echo "[*] Phase 2 extraction complete."
echo "    Total raw lines: $TOTAL"
echo "    Raw output: $OUT"
echo ""
echo "[*] Deduplicating and sorting..."
sort -u "$OUT" -o "$OUT"
echo "    Unique lines after dedup: $(wc -l < "$OUT")"
echo ""
echo "[*] Template literals with IDs (IDOR signals) — review these first:"
grep -E '\$\{[^}]+\}' "$OUT" | head -30 || echo "    None found"
echo ""
echo "[*] Now manually review $OUT and populate findings/api-endpoints.md"
echo "    Use the entry format from SKILL.md Phase 2."
