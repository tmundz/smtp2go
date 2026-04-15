# IDOR / BOLA Test Checklist

Full test matrix for each IDOR candidate. Work through every applicable row.

---

## Pre-test Setup

- [ ] Two accounts created: **Account A** (attacker) and **Account B** (victim)
- [ ] Account B owns at least one object of each type being tested (invoice, order, profile, etc.)
- [ ] Capture a valid baseline request in Caido Replay for each endpoint
- [ ] Note the exact object ID format (integer, UUID, base64, sequential, random)

---

## Test Matrix

### 1. Same-type swap (primary test)
Replace Account A's object ID with an ID belonging to Account B.

| Expected | Actual | Result |
|---|---|---|
| 403 Forbidden or 404 | 200 with data | 🔴 IDOR confirmed |
| 403 Forbidden or 404 | 403/404 | ✅ Access control works |
| 200 with empty body | 200 with B's data | 🔴 IDOR confirmed |

**In Caido**: Use Replay → change ID → send → compare response body size and content.

---

### 2. HTTP method swap
Some endpoints check auth on GET but not POST, or vice versa.

```
GET    /api/v1/users/TARGET_ID         → original method
POST   /api/v1/users/TARGET_ID         → method swap
PUT    /api/v1/users/TARGET_ID         → method swap
PATCH  /api/v1/users/TARGET_ID         → method swap
DELETE /api/v1/users/TARGET_ID         → method swap
HEAD   /api/v1/users/TARGET_ID         → method swap (reveals existence)
```

Watch for: 405 Method Not Allowed (endpoint exists but rejects method) vs 404 (endpoint doesn't exist).

---

### 3. Parameter pollution
Send both a legitimate and a target ID in the same request.

```
GET /api/v1/invoices?id=MINE_ID&id=TARGET_ID
GET /api/v1/invoices?id[]=MINE_ID&id[]=TARGET_ID
POST body: {"id": "MINE_ID", "id": "TARGET_ID"}   (duplicate key — behavior is parser-dependent)
POST body: {"ids": ["MINE_ID", "TARGET_ID"]}
```

Some backends use first value, some use last, some use all.

---

### 4. Type confusion
```
/api/v1/orders/0
/api/v1/orders/-1
/api/v1/orders/null
/api/v1/orders/undefined
/api/v1/orders/true
/api/v1/orders/admin
/api/v1/orders/*
/api/v1/orders/%00
/api/v1/orders/99999999
```

---

### 5. Encoded / obfuscated IDs
If the ID looks like base64, JWT, or a hash:

```bash
# Decode and inspect
echo "dXNlcl8xMjM=" | base64 -d          # base64
echo "user_123" | base64                  # re-encode modified value

# JWT — decode payload (no verification needed to read)
# Split on '.' and base64 decode the middle segment
echo "PAYLOAD_SEGMENT" | base64 -d

# Check if ID is a UUID — try incrementing the last segment
# e.g. 550e8400-e29b-41d4-a716-446655440000
#       → 550e8400-e29b-41d4-a716-446655440001
```

---

### 6. Indirect object reference via session
Some endpoints don't take an explicit ID — they infer the user from the session cookie.
Test: remove the ID param entirely. Does the endpoint fall back to a default or error?

```
GET /api/v1/profile          (session-scoped, no ID)
GET /api/v1/profile?user_id=TARGET_ID    (inject ID that shouldn't be trusted)
```

---

### 7. Batch / bulk endpoints
```
GET  /api/v1/users?ids=1,2,3,TARGET_ID
POST /api/v1/users/bulk  body: {"ids": [1, 2, TARGET_ID]}
GET  /api/v1/export?user_ids=TARGET_ID
```

---

### 8. Role/permission escalation
If the endpoint accepts a `role`, `permission`, `is_admin`, or `plan` field in the body:

```json
{"name": "test", "role": "admin"}
{"name": "test", "is_admin": true}
{"name": "test", "plan": "enterprise"}
{"name": "test", "permissions": ["read", "write", "admin"]}
```

---

### 9. Referrer/Origin bypass
Some access controls only fire when the request has no `Referer` or comes from a different origin.

```
# Strip Referer header
# Add/change Origin header
# Try direct curl with no Referer
```

---

### 10. Response difference oracle
Even if the response is 403, compare:
- Response body size (different size = data may be leaking in error message)
- Response time (timing oracle — slower response on valid ID vs invalid)
- Error message content ("not authorized" vs "not found" → confirms object existence = IDOR-light)

---

## Writeup Template (for confirmed IDOR)

```markdown
## IDOR — [Endpoint]: [Short description]

**Severity**: High / Medium
**CVSS**: (estimate)
**Endpoint**: METHOD /api/path/{id}
**Parameter**: path param `id` / query param `?foo=` / body field `bar`

### Steps to reproduce
1. Create two accounts: Account A (attacker) and Account B (victim).
2. As Account B, create/note object ID: `TARGET_ID`
3. As Account A, send:
   ```
   GET /api/v1/resource/TARGET_ID
   Authorization: Bearer ACCOUNT_A_TOKEN
   ```
4. Response: 200 OK with Account B's private data.

### Impact
Full read/write access to [resource type] belonging to any user.
Exposed data: [list PII or sensitive fields].

### Request/Response
[paste sanitized Caido export]
```
