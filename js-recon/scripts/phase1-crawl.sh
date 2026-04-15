#!/usr/bin/env bash
# Phase 1 — JS Discovery
# Usage: TARGET=https://example.com bash phase1-crawl.sh
# Requires: katana OR hakrawler, curl, md5sum

set -euo pipefail

TARGET="${TARGET:-}"
if [[ -z "$TARGET" ]]; then
  echo "ERROR: set TARGET env var first: export TARGET=https://example.com"
  exit 1
fi

mkdir -p findings/raw/js

echo "[*] Crawling $TARGET for JS files..."

# --- Crawl with best available tool ---
if command -v katana &>/dev/null; then
  echo "[*] Using katana"
  katana -u "$TARGET" -d 3 -jc -silent 2>/dev/null \
    | grep -E '\.js(\?|$)' \
    | sort -u > findings/raw/js-urls.txt
elif command -v hakrawler &>/dev/null; then
  echo "[*] Using hakrawler"
  echo "$TARGET" | hakrawler -d 3 -insecure 2>/dev/null \
    | grep -E '\.js(\?|$)' \
    | sort -u > findings/raw/js-urls.txt
else
  echo "[!] No crawler found — falling back to HTML scrape"
  curl -s "$TARGET" \
    | grep -oE '(src|href)="[^"]+\.js[^"]*"' \
    | sed 's/(src|href)="//;s/"//' \
    | sort -u > findings/raw/js-urls.txt
fi

# --- Also pull from Wayback Machine (if gau available) ---
if command -v gau &>/dev/null; then
  echo "[*] Pulling historical JS URLs from gau..."
  DOMAIN=$(echo "$TARGET" | sed 's|https\?://||;s|/.*||')
  gau "$DOMAIN" 2>/dev/null \
    | grep -E '\.js(\?|#|$)' \
    | sort -u >> findings/raw/js-urls.txt
  sort -u findings/raw/js-urls.txt -o findings/raw/js-urls.txt
fi

JS_COUNT=$(wc -l < findings/raw/js-urls.txt)
echo "[*] Found $JS_COUNT unique JS URLs"

# --- Supplement: scrape inline script src tags from HTML ---
echo "[*] Scraping <script src=> tags from main page..."
curl -s "$TARGET" \
  | grep -oE 'src="[^"]*\.js[^"]*"' \
  | sed 's/src="//;s/"//' \
  | grep -v '^$' \
  >> findings/raw/js-urls.txt
sort -u findings/raw/js-urls.txt -o findings/raw/js-urls.txt

# --- Download all JS files ---
echo "[*] Downloading JS files..."
> findings/raw/js-map.txt  # clear/create map file

while IFS= read -r url; do
  # Resolve relative URLs
  if [[ "$url" == /* ]]; then
    BASE=$(echo "$TARGET" | grep -oE 'https?://[^/]+')
    url="${BASE}${url}"
  elif [[ "$url" != http* ]]; then
    url="${TARGET%/}/${url}"
  fi

  fname=$(echo "$url" | md5sum | cut -d' ' -f1).js
  fpath="findings/raw/js/$fname"

  if [[ -f "$fpath" ]]; then
    echo "[=] Already downloaded: $url"
  else
    http_code=$(curl -s -o "$fpath" -w "%{http_code}" \
      -H "User-Agent: Mozilla/5.0" \
      --max-time 15 \
      "$url" 2>/dev/null || echo "000")

    if [[ "$http_code" == "200" ]]; then
      size=$(wc -c < "$fpath")
      echo "[+] $url ($size bytes)"
    else
      echo "[-] $url (HTTP $http_code)"
      rm -f "$fpath"
      continue
    fi
  fi

  echo "$url -> $fname" >> findings/raw/js-map.txt
done < findings/raw/js-urls.txt

# --- Beautify minified files ---
echo "[*] Beautifying minified JS..."
for f in findings/raw/js/*.js; do
  # Detect minification: single line longer than 5000 chars
  lines=$(wc -l < "$f")
  size=$(wc -c < "$f")
  if [[ "$lines" -lt 3 && "$size" -gt 5000 ]]; then
    pretty="${f%.js}.pretty.js"
    if command -v js-beautify &>/dev/null; then
      js-beautify "$f" -o "$pretty" 2>/dev/null && echo "[+] Beautified: $f"
    elif command -v prettier &>/dev/null; then
      prettier --parser babel "$f" > "$pretty" 2>/dev/null && echo "[+] Prettified: $f"
    else
      echo "[!] No beautifier found — install js-beautify: npm i -g js-beautify"
    fi
  fi
done

echo ""
echo "[*] Phase 1 complete."
echo "    JS files downloaded: $(ls findings/raw/js/*.js 2>/dev/null | wc -l)"
echo "    URL map: findings/raw/js-map.txt"
echo ""
echo "[*] Now populate findings/js-files.md with a one-liner per file."
echo "    Then start Phase 2 using scripts/phase2-extract.sh"
