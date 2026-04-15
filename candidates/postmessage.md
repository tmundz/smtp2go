# postMessage Candidates — smtp2go

---

## [PM-NONE] No Custom postMessage Usage Found

| Field | Value |
|---|---|
| **Analysis date** | 2026-04-14 |
| **Files searched** | All 238 JS files under app-us.smtp2go.com (excluding www.smtp2go.com) |
| **Result** | ❌ No exploitable postMessage usage in custom application code |

### What was found
All `postMessage` references in the codebase trace to:

1. **ace.js** (code editor library) — Uses `postMessage` internally for web worker
   communication (linting, syntax highlighting). Origin is worker-controlled.
   Not exploitable.

2. **Vue vendor bundles** (`vendor.js` in reports/suppression, reports/data-exports,
   reports/sms, settings/smtp-auth, settings/api-auth) — Standard Vue/axios
   internal use of `postMessage` for async scheduling (zero-timeout trick).
   Pattern: `d.postMessage(e + "", "*")` — sends a string integer, not sensitive data.
   Listener only acts on matching tick IDs, not arbitrary data.

3. **worker-html.js, worker-json.js** (ace editor workers) — Web worker internal
   messaging for lint results. No user data or auth tokens involved.

### What was NOT found
- No `postMessage(data, '*')` sending auth tokens, API keys, or session data
- No `addEventListener('message', fn)` without origin check in custom app code
- No `window.opener.postMessage()` usage
- No `eval(event.data)` or `innerHTML = event.data` patterns
- No embed/iframe cross-origin messaging in the Vue apps

### Conclusion
postMessage is not a relevant attack surface for this application based on current
JS files. If Zopim/Zendesk chat widget (`widget-mediator.zopim.com/`) is analyzed,
it may have separate postMessage patterns — that is out of scope for this phase.

### Next steps if re-evaluating
- Check `original/widget-mediator.zopim.com/` if Zendesk SSO is in scope
- Check if any iframes are embedded in the main dashboard HTML
- Monitor live traffic for postMessage events using browser devtools
