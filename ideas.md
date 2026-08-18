# Direction artistique — Atlas Santé

## Trois approches explorées

| Thème | Introduction très brève | Probabilité |
|---|---|---:|
| **Clinique de confiance** | Un univers médical bleu profond, lumineux et structuré, avec une sensation de sécurité immédiate et une photographie humaine. | 0.07 |
| **Carnet de soin** | Une esthétique éditoriale claire, douce et très typographique, évoquant le suivi médical personnel. | 0.04 |
| **Atlas organique** | Un langage plus chaleureux, inspiré des textures minérales et des teintes locales du Maroc. | 0.09 |

## Approche retenue — Clinique de confiance

### Mouvement de design

Une interprétation contemporaine du **design de santé numérique rassurant** : composition éditoriale asymétrique, surfaces translucides, contraste contrôlé et imagerie humaine à échelle réelle. Le résultat s’inspire du rythme de Diagonsy sans en copier ni le contenu, ni les composants, ni les assets.

### Principes fondamentaux

1. **Réassurance avant décoration** : chaque élément visuel doit clarifier, guider ou renforcer la crédibilité.
2. **Profondeur calme** : bleu de nuit, halos froids, verre dépoli très léger et ombres diffuses donnent de la densité sans effet gadget.
3. **Asymétrie utile** : le contenu s’ancre à gauche, tandis que la preuve visuelle et les repères de confiance occupent la droite.
4. **Bilinguisme natif** : la direction, les espacements et les alignements logiques sont pensés simultanément pour le français et l’arabe RTL.

### Philosophie de couleur

Le bleu nuit évoque l’expertise et la confidentialité médicale ; le bleu glacier ouvre l’espace et apporte une sensation de précision ; le vert menthe discret signale l’action positive ou la disponibilité. Les couleurs n’existent que comme variables : elles seront ensuite adaptées à l’identité de chaque cabinet.

### Paradigme de mise en page

Une **colonne éditoriale décalée** se déploie sur une scène hero à deux atmosphères : la zone texte sombre et structurée se fond progressivement vers une zone image lumineuse. Les preuves de confiance flottent sur la jonction plutôt que d’être alignées dans une grille centrale conventionnelle.

### Éléments signature

1. Un halo circulaire doux derrière l’image principale, rappelant une zone de diagnostic.
2. Des cartes de réassurance en verre bleuté avec une fine bordure lumineuse.
3. Une ligne topbar très fine, ponctuée d’icônes de localisation et d’horaires.

### Philosophie d’interaction

Les interactions sont sobres et explicitement utiles : le menu mobile se déploie clairement, les boutons confirment le clic par une légère compression et les cartes de réassurance gagnent une fine élévation au survol. Aucune animation ne doit concurrencer une information de santé.

### Animation

Les transitions reposent sur l’opacité et le déplacement vertical court, avec une courbe `cubic-bezier(0.23, 1, 0.32, 1)`. Elles restent sous 220 ms. L’image du hero et les cartes peuvent apparaître en cascade au chargement uniquement si `prefers-reduced-motion` l’autorise.

### Système typographique

**Inter** est retenue pour les titres et la lecture courante afin de respecter le contrat technique du thème ; elle est utilisée avec des graisses 500 à 800 et un espacement serré dans les titres. Pour l’arabe, **Cairo** assure une présence nette et compatible avec la composition, avec une hauteur de ligne supérieure de 0,2. Les deux polices seront chargées localement dans la version intégrée du thème.

### Essence de marque

**Atlas Santé transforme les informations d’un professionnel de santé en une présence web claire, crédible et bilingue pour les patients du Maroc.**

Personnalité : **rassurante, précise, accueillante**.

### Voix de marque

Les titres sont directs, apaisants et ancrés dans le bénéfice patient. Les appels à l’action sont concrets, jamais agressifs.

Exemples :

> « Des soins clairs, à votre rythme. »

> « Préparez votre visite en quelques instants. »

### Mot-symbole et logo

Un symbole original représente un **A ouvert formé de deux arcs de soin**, avec un point central évoquant le diagnostic et l’attention humaine. Le symbole est conçu sans texte, pour fonctionner comme favicon, marque de navigation et élément de confiance.

### Couleur signature

**Bleu Atlas — `#1D4ED8`** : un bleu clinique équilibré, reconnaissable et utilisable à l’action comme au fond.

## Style Decisions

- Atlas Santé ne montre jamais de vocabulaire interne de production : la voix reste prête pour une vraie maison de santé, précise et apaisante.
- Après le hero, chaque section reprend au moins un signe du système clinique : halo de diagnostic, verre bleu, fine bordure lumineuse ou Bleu Atlas.
- La présence bilingue est une preuve de confiance visible dans la navigation, les repères et les appels à l’action ; elle ne se réduit pas à un paramètre de langue.
