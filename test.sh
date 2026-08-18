#!/usr/bin/env bash
# Atlas Santé — vérifications dynamiques du lot 1 : typage et build de production reproductibles.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

printf '== Atlas Santé · test.sh · lot 2 ==\n'
printf '\n[1/2] Vérification TypeScript\n'
pnpm check
printf '\n[2/2] Build de production\n'
pnpm build
printf '\n✅ Le typage et le build de production sont verts.\n'
