# Session Setup — Directory Init

Run this at the start of every recon session before Phase 1.

## Create findings structure

```bash
mkdir -p findings/raw/js

# Initialize empty finding files with headers
cat > findings/js-files.md << 'EOF'
# JS File Inventory
_Populated during Phase 1_

EOF

cat > findings/api-endpoints.md << 'EOF'
# API Endpoint Map
_Populated during Phase 2_

## Summary
| ID | Method | Path | IDOR Signal | WCD Signal |
|---|---|---|---|---|

EOF

cat > findings/idor-candidates.md << 'EOF'
# IDOR Candidates
_Populated during Phase 3_

EOF

cat > findings/wcd-candidates.md << 'EOF'
# Web Cache Deception Candidates
_Populated during Phase 4_

EOF

echo "findings/ initialized"
```

## Confirm tools available

```bash
# Check which crawlers are available
for tool in katana hakrawler gau curl js-beautify prettier jq; do
  command -v $tool &>/dev/null && echo "✓ $tool" || echo "✗ $tool (missing)"
done
```

If `katana` and `hakrawler` are both missing, fall back to:
```bash
# Manual HTML scrape for script tags
curl -s "https://TARGET" | grep -oE 'src="[^"]+\.js[^"]*"' | sed 's/src="//;s/"//'
```

## Set target variable

```bash
export TARGET="https://target.example.com"
echo "Target set: $TARGET"
```
