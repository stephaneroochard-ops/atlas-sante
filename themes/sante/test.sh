#!/usr/bin/env bash
# Contrôle dynamique du thème HTML Atlas Santé.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"; PORT=8091; PASS=0; FAIL=0
ok(){ printf '✅ %s\n' "$1"; PASS=$((PASS+1)); }
ko(){ printf '❌ %s\n' "$1"; FAIL=$((FAIL+1)); }
echo "== Atlas Santé statique · test.sh · lot ${2:-1} =="
node -e "const http=require('http'),fs=require('fs'),p=require('path');const r='$ROOT';http.createServer((q,s)=>{let f=p.join(r,decodeURI(q.url.split('?')[0]));if(fs.existsSync(f)&&fs.statSync(f).isDirectory())f=p.join(f,'index.html');fs.readFile(f,(e,b)=>{s.writeHead(e?404:200,{'Content-Type':f.endsWith('.css')?'text/css':'text/html;charset=utf-8'});s.end(e?'404':b)})}).listen($PORT)" & PID=$!
trap 'kill $PID 2>/dev/null || true' EXIT
sleep 1
for page in index.html ar/index.html; do if [ "$(curl -s -o /dev/null -w '%{http_code}' "http://localhost:$PORT/$page")" = 200 ]; then ok "$page répond 200"; else ko "$page ne répond pas 200"; fi; done
for page in a-propos services service-detail contact faq 404 mentions-legales; do for prefix in '' 'ar/'; do if [ "$(curl -s -o /dev/null -w '%{http_code}' "http://localhost:$PORT/$prefix$page.html")" = 200 ]; then :; else ko "$prefix$page.html ne répond pas 200"; fi; done; done
if [ "$FAIL" -eq 0 ]; then ok 'Les 16 pages HTML répondent 200'; fi
if node -e "const fs=require('fs'),p=require('path');const root='$ROOT',files=[];for(const d of [root,p.join(root,'ar')])for(const f of fs.readdirSync(d))if(f.endsWith('.html'))files.push(p.join(d,f));let dead=[];for(const f of files){const h=fs.readFileSync(f,'utf8');for(const m of h.matchAll(/href=\"(?!https?:|mailto:|tel:|#)([^\"]+)\"/g)){if(!fs.existsSync(p.join(p.dirname(f),m[1])))dead.push(f+' -> '+m[1]);}}if(dead.length){console.error(dead.join('\\n'));process.exit(1)}"; then ok 'Aucun lien interne mort'; else ko 'Lien interne mort détecté'; fi
if node -e "const fs=require('fs');for(const f of ['$ROOT/index.html','$ROOT/ar/index.html']){const h=fs.readFileSync(f,'utf8');if((h.match(/<h1/g)||[]).length!==1||!/<html[^>]+lang=/.test(h))process.exit(1)}"; then ok 'Chaque accueil a une langue et un unique h1'; else ko 'Langue ou h1 non conforme'; fi
SIZE=$(( ($(wc -c < "$ROOT/index.html") + $(wc -c < "$ROOT/assets/styles.css")) / 1024 )); if [ "$SIZE" -lt 100 ]; then ok "Accueil FR + CSS : $SIZE Ko < 100 Ko"; else ko "Accueil FR + CSS : $SIZE Ko"; fi
echo "Résultat : $PASS vérifications vertes, $FAIL erreur(s)."; [ "$FAIL" -eq 0 ]
