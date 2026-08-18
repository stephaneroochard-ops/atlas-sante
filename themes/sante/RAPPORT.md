# Rapport de reconstruction statique — Lot 1

**Statut :** fondations statiques terminées et soumises à validation.  
**Périmètre :** point de départ HTML dans `themes/sante/`, feuille CSS Tailwind compilée, polices locales Inter/Cairo, partials header/footer, index FR/AR RTL et contrôle indépendant.

## Choix appliqués

Le thème statique est isolé dans `themes/sante/`. Il ne contient aucun framework front, aucun chemin `/manus-storage/` et aucun CDN. Le premier écran français et son équivalent arabe utilisent les variables CSS de la palette, les attributs `data-field` de fondation, `lang="ar" dir="rtl"` pour l’arabe et un téléphone explicitement maintenu en LTR.

## Sortie complète de `verify.sh --lot 1`

```text
== Atlas Santé statique · verify.sh · lot 1 ==
✅ Le point de départ HTML statique existe
✅ Les partials header et footer existent
✅ La feuille CSS compilée existe
✅ La pile du thème ne contient que les dépendances autorisées
✅ Aucun framework front ne figure dans le thème
✅ Aucun asset Manus ne figure dans le thème
✅ Aucun CDN de police ou de script ne figure dans le thème
✅ Aucune classe RTL physique interdite ne figure dans le thème
✅ Aucune propriété CSS physique interdite ne figure dans le thème
✅ La page arabe porte lang=ar et dir=rtl
✅ La page arabe conserve un téléphone en LTR
✅ Les couleurs passent par des variables CSS
✅ Les polices Inter et Cairo sont importées localement
✅ Les data-field de la fondation sont présents
Résultat : 14 vérifications vertes, 0 erreur(s).
```

## Sortie complète de `test.sh --lot 1`

```text
== Atlas Santé statique · test.sh · lot 1 ==
✅ index.html répond 200
✅ ar/index.html répond 200
✅ Chaque accueil a une langue et un unique h1
✅ Accueil FR + CSS : 18 Ko < 100 Ko
Résultat : 4 vérifications vertes, 0 erreur(s).
```

> **Lot 1 prêt à validation.** Le prochain lot ajoutera les deux variantes de hero, les grilles de services, la section de présentation et la CTA dans les accueils FR/AR.
