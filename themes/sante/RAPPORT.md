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

---

# Lot 2 — Sections principales et direction Denticare adaptée

**Statut :** terminé et validé automatiquement par les tests.  
**Périmètre :** hero éditorial, navigation de parcours par onglets HTML, services, présentation et CTA sur les accueils français et arabe RTL.

La référence Denticare Everest a été adaptée au lieu d’être copiée : topbar et navigation de parcours, hero à grand aplat coloré, hiérarchie typographique éditoriale, CTA contrasté, onglets de services et séparateur courbe. Les contenus, la marque, la palette bleu Atlas/menthe et les assets restent propres à Atlas Santé. Les onglets sont des ancres HTML sans JavaScript.

## Sortie complète de `verify.sh --lot 2`

```text
== Atlas Santé statique · verify.sh · lot 2 ==
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

## Sortie complète de `test.sh --lot 2`

```text
== Atlas Santé statique · test.sh · lot 2 ==
✅ index.html répond 200
✅ ar/index.html répond 200
✅ Chaque accueil a une langue et un unique h1
✅ Accueil FR + CSS : 25 Ko < 100 Ko
Résultat : 4 vérifications vertes, 0 erreur(s).
```

---

# Lot 3 — Sections secondaires statiques

**Statut :** terminé et validé automatiquement par les tests.  
**Périmètre :** horaires, FAQ native, formulaire de contact, itinéraire et équivalents arabes RTL.

La FAQ repose sur `<details>` et `<summary>` : elle est accessible au clavier et ne nécessite aucun JavaScript. Le formulaire dispose de labels, de champs requis et de téléphones maintenus en LTR. Les horaires sont représentés par un tableau lisible dans les deux directions.

## Sortie complète de `verify.sh --lot 3`

```text
== Atlas Santé statique · verify.sh · lot 3 ==
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

## Sortie complète de `test.sh --lot 3`

```text
== Atlas Santé statique · test.sh · lot 3 ==
✅ index.html répond 200
✅ ar/index.html répond 200
✅ Chaque accueil a une langue et un unique h1
✅ Accueil FR + CSS : 30 Ko < 100 Ko
Résultat : 4 vérifications vertes, 0 erreur(s).
```

---

# Lot 4 — Huit pages FR et huit pages AR RTL

**Statut :** terminé et validé automatiquement par les tests.  
**Périmètre :** les pages accueil, à propos, services, détail de service, contact, FAQ, 404 et mentions légales, dans les deux langues.

La navigation pointe désormais vers des fichiers HTML existants. Toutes les pages arabes portent `lang="ar" dir="rtl"`, tandis que les téléphones restent explicitement en LTR. Les pages reprennent le système éditorial Atlas, ses variables CSS et ses attributs de données.

## Sortie complète de `verify.sh --lot 4`

```text
== Atlas Santé statique · verify.sh · lot 4 ==
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
✅ Les huit pages françaises existent
✅ Les huit pages arabes existent
✅ Chaque page arabe est marquée RTL
✅ La FAQ utilise les éléments HTML natifs
Résultat : 18 vérifications vertes, 0 erreur(s).
```

## Sortie complète de `test.sh --lot 4`

```text
== Atlas Santé statique · test.sh · lot 4 ==
✅ index.html répond 200
✅ ar/index.html répond 200
✅ Les 16 pages HTML répondent 200
✅ Aucun lien interne mort
✅ Chaque accueil a une langue et un unique h1
✅ Accueil FR + CSS : 30 Ko < 100 Ko
Résultat : 6 vérifications vertes, 0 erreur(s).
```

---

# Lot 5 — Conformité, assets et documentation

**Statut :** terminé et validé automatiquement par les tests complets.  
**Périmètre :** `FIELDS.md`, documentation, logo WebP + fallback PNG local, contrôle de dépendances, RTL, absence de CDN, poids et liens.

Le thème statique est autonome dans `themes/sante/`. Les polices sont importées localement depuis les seules dépendances prévues ; les logos sont servis via `picture` avec WebP et fallback PNG ; aucun chemin Manus ou CDN ne demeure dans les fichiers HTML/CSS. Le répertoire contient les huit pages françaises et les huit pages arabes RTL avec une navigation valide.

## Sortie complète de `verify.sh --lot all`

```text
== Atlas Santé statique · verify.sh · lot all ==
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
✅ Les huit pages françaises existent
✅ Les huit pages arabes existent
✅ Chaque page arabe est marquée RTL
✅ La FAQ utilise les éléments HTML natifs
✅ FIELDS.md est présent
✅ README.md est présent
✅ Les images utilisent WebP avec fallback local
✅ FIELDS.md recense tous les data-field utilisés
Résultat : 22 vérifications vertes, 0 erreur(s).
```

## Sortie complète de `test.sh --lot all`

```text
== Atlas Santé statique · test.sh · lot all ==
✅ index.html répond 200
✅ ar/index.html répond 200
✅ Les 16 pages HTML répondent 200
✅ Aucun lien interne mort
✅ Chaque accueil a une langue et un unique h1
✅ Accueil FR + CSS : 30 Ko < 100 Ko
Résultat : 6 vérifications vertes, 0 erreur(s).
```

## Réserve avant publication commerciale

Les coordonnées, horaires, adresse, contenus médicaux et textes arabes doivent être remplacés ou relus par le cabinet avant une mise en ligne publique. La structure, le thème, les tests et l’inventaire de données sont prêts pour cette intégration.

---

# Lot médias — Médecin, équipe et cabinet

**Statut :** terminé et validé automatiquement par les tests.  
**Périmètre :** trois photographies originales, intégrées sur les accueils FR/AR avec WebP et fallback JPG local.

Le portrait du médecin est intégré au hero, l’équipe médicale à la section de présentation et l’intérieur du cabinet dans le bloc de contact. Les fichiers optimisés restent autonomes dans `assets/img/` : doctor WebP/JPG (46/112 Ko), team WebP/JPG (72/168 Ko) et clinic WebP/JPG (94/183 Ko). La hiérarchie a été rendue plus clinique : titres Inter/Cairo, Bleu Atlas dominant, surfaces glacier et menthe réservée aux signaux d’action.

## Sortie complète de `verify.sh --lot media`

```text
== Atlas Santé statique · verify.sh · lot media ==
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
✅ Les huit pages françaises existent
✅ Les huit pages arabes existent
✅ Chaque page arabe est marquée RTL
✅ La FAQ utilise les éléments HTML natifs
✅ FIELDS.md est présent
✅ README.md est présent
✅ Les images utilisent WebP avec fallback local
✅ Les visuels médicaux sont locaux avec fallback
✅ FIELDS.md recense tous les data-field utilisés
Résultat : 23 vérifications vertes, 0 erreur(s).
```

## Sortie complète de `test.sh --lot media`

```text
== Atlas Santé statique · test.sh · lot media ==
✅ index.html répond 200
✅ ar/index.html répond 200
✅ Les 16 pages HTML répondent 200
✅ Aucun lien interne mort
✅ Chaque accueil a une langue et un unique h1
✅ Accueil FR + CSS : 31 Ko < 100 Ko
Résultat : 6 vérifications vertes, 0 erreur(s).
```
