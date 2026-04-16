# Common Vulnerable CORS Regex Patterns

---

## SAFE patterns

```
^https?:\/\/(.*\.)?TARGET\.com$
```
Allows `TARGET.com` and `*.TARGET.com` (http/https). The `(.*\.)?` is in a
capturing group so `?` applies to the whole group. The `$` anchor prevents
suffix bypass. **This is the correct pattern.**

---

## VULNERABLE patterns

### VUL-1: Unescaped domain dot

```
^https?:\/\/.*\.?TARGET\.com$
```
**Problem:** `.*\.?` — the `?` only quantifies the `.`, not `.*`. Anything
ending in `TARGET.com` is accepted.

**Bypass:** `https://evilTARGET.com`

---

### VUL-2: Trailing wildcard / port bypass

```
^https?:\/\/(.*\.)?TARGET\.com\:?.*
```
**Problem:** `\:?.*` is intended to allow any port but accepts any suffix.
No `$` anchor.

**Bypass:** `https://TARGET.com.evil.com`

---

### VUL-3: Apache SetEnvIf special-char blind spot

```
SetEnvIf Origin "^https?:\/\/(.*\.)?TARGET\.com([^\.\-a-zA-Z0-9]+.*)?"
```
**Intent:** Allow TARGET.com and subdomains, plus optional port.
**Problem:** The negative character class `[^\.\-a-zA-Z0-9]` allows any
character that isn't `.`, `-`, or alphanumeric — i.e., `_`, `{`, space, etc.

**Bypass (all browsers):** `https://TARGET.com_.attacker.com`
**Bypass (Safari):** `https://TARGET.com{.attacker.com`

---

### VUL-4: Simple endsWith / includes check (non-regex)

```javascript
if (origin.endsWith(".TARGET.com") || origin === "https://TARGET.com") { ... }
```
**Bypass:** `https://evilTARGET.com` (fails the `===` but passes `endsWith`)
if the check is `origin.includes("TARGET.com")`:
**Bypass:** anything with `TARGET.com` anywhere in the string.

---

### VUL-5: Full reflection (no validation)

```javascript
res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
res.setHeader("Access-Control-Allow-Credentials", "true");
```
**Any** origin is reflected. This is the most severe variant.

---

## Quick identification flow

1. Send `Origin: https://evil.com` → ACAO reflects it? → VUL-5 (full reflection)
2. Send `Origin: https://evilTARGET.com` → reflected? → VUL-1 or VUL-4
3. Send `Origin: https://TARGET.com.evil.com` → reflected? → VUL-2 or prefix check missing
4. Send `Origin: https://TARGET.com_.evil.com` → reflected? → VUL-3 (special-char)
5. Send `Origin: null` → `ACAO: null`? → null-origin misconfiguration
