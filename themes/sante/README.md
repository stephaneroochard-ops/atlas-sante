# Atlas Santé — thème HTML statique

## Périmètre

Ce dossier constitue la source statique du thème médical Atlas Santé : huit pages françaises et huit pages arabes RTL. Il est conçu pour une conversion Astro mécanique grâce aux attributs `data-field` recensés dans `FIELDS.md`.

## Commandes

Depuis ce dossier :

```bash
./node_modules/.bin/tailwindcss -i assets/tailwind.css -o assets/styles.css --minify
./verify.sh --lot all
./test.sh --lot all
```

## Contraintes

Le thème ne contient aucun framework front, aucun CDN et aucun appel réseau au chargement. Les deux seules polices sont Inter et Cairo via `@fontsource`, les directions sont logiques et toute page arabe porte `lang="ar" dir="rtl"`.

## Avant publication

Remplacer les valeurs de démonstration via les chemins de `FIELDS.md`, valider les informations médicales et juridiques, faire relire l’arabe par une personne arabophone et connecter le formulaire à un canal de réception approuvé.
