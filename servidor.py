#!/usr/bin/env python3
"""
Servidor HTTP simples para desenvolvimento do PlayShelf
Execute: python servidor.py
Acesse: http://localhost:8000
"""

import http.server
import socketserver
import webbrowser
import os
from pathlib import Path

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Headers necessários para PWA e Service Workers
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        # CORS para desenvolvimento
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def log_message(self, format, *args):
        # Log mais limpo
        print(f"[{self.address_string()}] {args[0]}")

def main():
    os.chdir(Path(__file__).parent)
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        url = f"http://localhost:{PORT}"
        print("=" * 60)
        print("🚀 Servidor PlayShelf iniciado!")
        print("=" * 60)
        print(f"📍 URL: {url}")
        print(f"📁 Diretório: {os.getcwd()}")
        print("=" * 60)
        print("\n💡 Pressione Ctrl+C para parar o servidor\n")
        
        try:
            webbrowser.open(url)
        except:
            print(f"⚠️  Não foi possível abrir o navegador automaticamente")
            print(f"   Acesse manualmente: {url}\n")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n🛑 Servidor encerrado pelo usuário")

if __name__ == "__main__":
    main()
