# Atlas Santé — thème Santé à page unique

## Rôle du projet

Ce projet contient un thème de site médical bilingue français/arabe RTL, conçu comme une page unique responsive. Il comprend un hero, des services, des repères patients, une demande de rendez-vous locale, une FAQ, des informations pratiques et un footer.

## Utilisation locale

```bash
pnpm dev
```

Le build de production et le contrôle TypeScript se lancent avec :

```bash
pnpm build
pnpm check
```

Les vérifications supplémentaires du thème sont regroupées dans :

```bash
./verify.sh
./test.sh
```

## Bilinguisme et RTL

Le contrôle de langue dans l’en-tête bascule simultanément le contenu affiché, `lang` et `dir` sur l’élément HTML. Les contenus futurs doivent toujours être fournis en français et arabe ; la qualité linguistique arabe doit être relue par une personne arabophone avant publication.

## Données à raccorder

Les champs déjà prévus sont recensés dans `FIELDS.md`. Le formulaire actuel valide les champs et restitue un statut local ; il n’envoie aucune donnée vers un service externe. Avant production, le canal de réception des demandes doit être choisi et relié avec une méthode explicitement validée.

## Assets

Les photos et le symbole sont hébergés dans le stockage du projet et référencés avec leurs URL persistantes. Les polices Inter et Cairo sont désormais importées depuis les dépendances locales `@fontsource` ; aucune requête Google Fonts n’est nécessaire.
