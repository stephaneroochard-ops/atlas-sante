#!/usr/bin/env bash
# Atlas Santé — vérifications statiques du lot 1 : fichiers, assets, marqueurs et fondations RTL.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

pass=0
fail=0

check() {
  local label="$1"
  shift
  if "$@"; then
    printf '✅ %s\n' "$label"
    pass=$((pass + 1))
  else
    printf '❌ %s\n' "$label"
    fail=$((fail + 1))
  fi
}

contains() { grep -q -- "$2" "$1"; }

printf '== Atlas Santé · verify.sh · lot 1 ==\n'
check 'Le fichier Home.tsx existe' test -f client/src/pages/Home.tsx
check 'Le header existe' test -f client/src/components/SiteHeader.tsx
check 'Le footer existe' test -f client/src/components/SiteFooter.tsx
check 'La feuille de styles existe' test -f client/src/index.css
check 'La philosophie est documentée' test -f ideas.md
check 'Le logo Atlas généré est référencé' contains client/src/components/SiteHeader.tsx '/manus-storage/atlas-sante-symbol_ea784670.png'
check 'Le hero généré est référencé' contains client/src/index.css '/manus-storage/atlas-sante-hero_37339b6e.jpg'
check 'Le contenu FR/AR porte des data-fields du contrat' contains client/src/pages/Home.tsx 'business.tagline.ar'
check 'La marque porte un data-field' contains client/src/components/SiteHeader.tsx 'data-field="business.name"'
check 'Le téléphone porte un data-field' contains client/src/components/SiteHeader.tsx 'data-field="contact.phone"'
check 'Le sélecteur RTL est présent' contains client/src/pages/Home.tsx 'document.documentElement.dir = isArabic ? "rtl" : "ltr"'
check 'La police arabe est déclarée' contains client/src/index.css '--font-arabic'
check 'Le breakpoint mobile est présent' contains client/src/index.css '@media (max-width: 560px)'
check 'Aucune classe CSS physique margin-left' bash -c '! grep -R --include="*.css" -n "margin-left" client/src'
check 'Aucune classe CSS physique margin-right' bash -c '! grep -R --include="*.css" -n "margin-right" client/src'
check 'Aucun avis ou témoignage fictif' bash -c '! grep -R -E -i --include="*.tsx" "testimonial|témoignage|patient reviews|avis" client/src'

printf '\nRésultat : %s vérifications vertes, %s erreur(s).\n' "$pass" "$fail"
test "$fail" -eq 0
