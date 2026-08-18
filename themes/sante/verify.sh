#!/usr/bin/env bash
# Contrôle statique indépendant du thème HTML Atlas Santé.
set -euo pipefail
LOT="${2:-all}"; [ "${1:-}" = "--lot" ] || LOT="all"
ROOT="$(cd "$(dirname "$0")" && pwd)"; PASS=0; FAIL=0
ok(){ printf '✅ %s\n' "$1"; PASS=$((PASS+1)); }
ko(){ printf '❌ %s\n' "$1"; FAIL=$((FAIL+1)); }
check(){ if eval "$2"; then ok "$1"; else ko "$1"; fi; }
echo "== Atlas Santé statique · verify.sh · lot $LOT =="
check 'Le point de départ HTML statique existe' "test -f '$ROOT/index.html' && test -f '$ROOT/ar/index.html'"
check 'Les partials header et footer existent' "test -f '$ROOT/partials/header.html' && test -f '$ROOT/partials/footer.html'"
check 'La feuille CSS compilée existe' "test -s '$ROOT/assets/styles.css'"
check 'La pile du thème ne contient que les dépendances autorisées' "node -e \"const p=require('$ROOT/package.json');const a=['tailwindcss','@tailwindcss/cli','@fontsource/inter','@fontsource/cairo'];process.exit(Object.keys(p.devDependencies).every(k=>a.includes(k))?0:1)\""
check 'Aucun framework front ne figure dans le thème' "! grep -RIlE 'react|vue|svelte|alpine|angular|express|vite' '$ROOT' --exclude-dir=node_modules --include='*.html' --include='*.js' --include='*.css' >/dev/null"
check 'Aucun asset Manus ne figure dans le thème' "! grep -RIl '/manus-storage/' '$ROOT' --exclude-dir=node_modules --include='*.html' --include='*.css' >/dev/null"
check 'Aucun CDN de police ou de script ne figure dans le thème' "! grep -RIlE 'fonts\\.googleapis|fonts\\.gstatic|cdn\\.jsdelivr|unpkg\\.com|cdnjs' '$ROOT' --exclude-dir=node_modules --include='*.html' --include='*.css' >/dev/null"
check 'Aucune classe RTL physique interdite ne figure dans le thème' "! grep -RInE '\\b(ml|mr|pl|pr)-[0-9a-z]+|\\btext-(left|right)\\b|\\bborder-(l|r)\\b|\\b(left|right)-[0-9]|\\brounded-(l|r)-' '$ROOT' --exclude-dir=node_modules --include='*.html' --include='*.css' | grep -q ."
check 'Aucune propriété CSS physique interdite ne figure dans le thème' "! grep -RInE 'margin-(left|right)|padding-(left|right)|text-align:[[:space:]]*(left|right)|border-(left|right):' '$ROOT/assets' --include='*.css' | grep -q ."
check 'La page arabe porte lang=ar et dir=rtl' "grep -q 'lang=\"ar\" dir=\"rtl\"' '$ROOT/ar/index.html'"
check 'La page arabe conserve un téléphone en LTR' "grep -q 'dir=\"ltr\"' '$ROOT/ar/index.html'"
check 'Les couleurs passent par des variables CSS' "grep -q -- '--color-primary' '$ROOT/assets/tailwind.css' && ! grep -qE '#[0-9a-fA-F]{6}' '$ROOT/index.html'"
check 'Les polices Inter et Cairo sont importées localement' "grep -q '@fontsource/inter' '$ROOT/assets/tailwind.css' && grep -q '@fontsource/cairo' '$ROOT/assets/tailwind.css'"
check 'Les data-field de la fondation sont présents' "grep -q 'data-field=\"business.tagline.fr\"' '$ROOT/index.html' && grep -q 'data-field=\"business.tagline.ar\"' '$ROOT/ar/index.html'"
FR_COUNT=$(find "$ROOT" -maxdepth 1 -name '*.html' | wc -l)
AR_COUNT=$(find "$ROOT/ar" -maxdepth 1 -name '*.html' | wc -l)
RTL_COUNT=$(grep -l 'lang="ar" dir="rtl"' "$ROOT"/ar/*.html | wc -l)
[ "$FR_COUNT" -eq 8 ] && ok 'Les huit pages françaises existent' || ko "Pages françaises : $FR_COUNT/8"
[ "$AR_COUNT" -eq 8 ] && ok 'Les huit pages arabes existent' || ko "Pages arabes : $AR_COUNT/8"
[ "$RTL_COUNT" -eq 8 ] && ok 'Chaque page arabe est marquée RTL' || ko "Pages RTL : $RTL_COUNT/8"
check 'La FAQ utilise les éléments HTML natifs' "grep -q '<details>' '$ROOT/index.html' && grep -q '<summary' '$ROOT/index.html'"
check 'FIELDS.md est présent' "test -f '$ROOT/FIELDS.md'"
check 'README.md est présent' "test -f '$ROOT/README.md'"
check 'Les images utilisent WebP avec fallback local' "grep -Rql '<picture data-field=\"brand.logo\"' '$ROOT' --include='*.html' && test -s '$ROOT/assets/img/logo.webp' && test -s '$ROOT/assets/img/logo.png'"
MISSING=0; while IFS= read -r field; do grep -qF "$field" "$ROOT/FIELDS.md" || MISSING=$((MISSING+1)); done < <(grep -RhoE 'data-field="[^"]+"' "$ROOT" --include='*.html' | sed 's/data-field="//;s/"//' | sort -u)
[ "$MISSING" -eq 0 ] && ok 'FIELDS.md recense tous les data-field utilisés' || ko "$MISSING data-field absent(s) de FIELDS.md"
echo "Résultat : $PASS vérifications vertes, $FAIL erreur(s)."
[ "$FAIL" -eq 0 ]
