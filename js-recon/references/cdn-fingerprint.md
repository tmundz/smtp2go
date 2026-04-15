# CDN Fingerprinting Reference

## Quick probe

```bash
curl -sI "https://TARGET/" | grep -Ei \
  'cf-cache|x-cache|age:|via:|x-served-by|x-akamai|fastly|x-varnish|x-cache-status|server:'
```

Run twice in quick succession — if `Age:` increments or `X-Cache` changes MISS→HIT, caching is active.

---

## Header → CDN Mapping

| Header observed | CDN / Cache |
|---|---|
| `CF-Cache-Status: HIT/MISS/DYNAMIC` | **Cloudflare** |
| `X-Cache: HIT from cloudfront` | **AWS CloudFront** |
| `X-Served-By:` + `X-Cache: HIT, MISS` | **Fastly** |
| `X-Varnish:` and/or `Via: varnish` | **Varnish** |
| `X-Cache-Status: HIT/MISS` | **Nginx proxy_cache** |
| `X-Akamai-*` or `Akamai-*` | **Akamai** |
| `X-Cache: HIT` (no other indicators) | Generic CDN / Nginx |
| `Server: AkamaiGHost` | **Akamai** |
| `X-Azure-Ref:` | **Azure CDN** |
| `x-amz-cf-id:` | **AWS CloudFront** |

---

## Per-CDN WCD Behavior

### Cloudflare
- Caches by extension by default: `.css .js .png .jpg .jpeg .gif .ico .woff .woff2 .svg .json`
- `CF-Cache-Status: DYNAMIC` = not cached (normal for auth pages)
- `CF-Cache-Status: MISS` → `HIT` after first request = now cached
- Does NOT cache if `Cache-Control: no-store` is present **on the origin response**
- Key payloads: `/path/x.js`, `/path/x.css`, `/path/x.woff2`
- Semicolon bypass worth testing: `/path;.css`

### AWS CloudFront
- Cache behaviors configured per path pattern in distribution settings
- Common misconfig: `*.css` or `/static/*` path patterns with no auth forwarding
- Focuses on path prefix and extension matching
- Key payloads: match whatever static path patterns exist on the distribution
- Check `x-amz-cf-id:` and `x-cache: Hit from cloudfront` headers

### Fastly
- More aggressive extension caching than Cloudflare
- Often misconfigured to ignore `Vary: Cookie`
- `X-Cache: MISS, HIT` on second request = confirmed
- Key payloads: `/path/x.css`, `/path/x.json` — JSON caching is common

### Varnish
- Config-driven (VCL) — behavior varies per deployment
- Default VCL caches GET/HEAD on 200/203/204/206/300/301/410
- Often strips cookies on static extension requests → caches without cookie
- Key payloads: try full extension list, note TTL via `Age:` header increments
- Delimiter confusion: `/path/../path/x.css` may normalize differently than expected

### Nginx proxy_cache
- `proxy_cache_valid` and `proxy_cache_bypass` rules determine behavior
- Common default: cache 200 responses for 1h unless Cache-Control says otherwise
- Extension matching common in configs: `location ~* \.(css|js|png)$`
- Key payloads: standard extension list + `/path/x.htm`

### Akamai
- Highly configurable — behavior depends on property rules
- Often caches based on file extension or query string rules
- `X-Check-Cacheable: YES` in some configs indicates the object is cacheable
- Key payloads: focus on extension list, probe for `Age:` header presence

---

## Cache-Control Directive Reference

| Directive | Impact on WCD |
|---|---|
| `no-store` | Strong: should not be cached. Some CDNs override. |
| `no-cache` | Weaker: must revalidate. CDN may still store. |
| `private` | Should not be in shared cache. CDNs may ignore. |
| `max-age=0` | Stale immediately but may still be stored. |
| `s-maxage=N` | Explicit CDN TTL — overrides max-age for CDNs. |
| `public` | Explicitly cacheable — WCD is likely easier. |

---

## WCD Triage Decision Tree

```
GET endpoint?
  NO  → skip (POST/PUT not cached)
  YES ↓

Returns sensitive auth data?
  NO  → low value, skip
  YES ↓

CDN detected in headers?
  NO  → check for Nginx/reverse proxy (less likely WCD, but still test)
  YES ↓

Append /x.css — does response body match original?
  NO  → origin normalizes path, WCD unlikely
  YES ↓

Second request: X-Cache HIT or Age incrementing?
  NO  → not cached, move on
  YES → 🔴 Confirmed cacheable — test unauthenticated
```
