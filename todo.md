# Suivi d’exécution — Atlas Santé

## Lot 2 — Page d’accueil unique

- [x] Ajouter la section des principales spécialités et services de santé sur la page d’accueil.
- [x] Ajouter une section « Pourquoi nous choisir » avec repères de confiance non fictifs.
- [x] Ajouter un formulaire de demande de rendez-vous accessible et entièrement local.
- [x] Ajouter les contenus arabes et le comportement RTL pour toutes les nouvelles sections.
- [x] Relier la navigation et les appels à l’action à des ancres de la même page.
- [x] Étendre `verify.sh` et `test.sh` avec les contrôles du lot 2.
- [x] Tester les versions bureau et mobile, puis renseigner `RAPPORT.md` avant validation utilisateur.

## Lot 3 — Informations pratiques et réassurance

- [x] Ajouter une FAQ bilingue accessible à la page unique.
- [x] Ajouter les coordonnées, horaires et itinéraire du cabinet avec des données clairement identifiables comme à personnaliser.
- [x] Ajouter un module de contact direct sans inventer de disponibilité, de tarifs ou de témoignages.
- [x] Ajouter le contenu FR/AR RTL et les ancres de navigation correspondantes.
- [x] Étendre `verify.sh`, exécuter les contrôles, puis documenter le lot dans `RAPPORT.md`.

## Lot 4 — Finition fonctionnelle de la page unique

- [x] Ajouter les interactions de navigation nécessaires à la page unique, y compris le menu mobile et les ancres.
- [x] Ajouter les états d’interface manquants pour le formulaire et les sections interactives.
- [x] Vérifier les parcours FR et AR RTL sur bureau et mobile.
- [x] Étendre les scripts, exécuter les contrôles et documenter le lot dans `RAPPORT.md`.

## Lot 5 — Conformité et documentation du thème

- [x] Recenser les `data-field` réels de la page unique et produire `FIELDS.md`.
- [x] Finaliser les métadonnées, les fichiers d’information et la documentation d’usage du thème.
- [x] Ajouter les contrôles finaux au script, exécuter les tests et documenter la clôture dans `RAPPORT.md`.

## Clôture du thème

- [x] Consigner la validation finale du thème et les éléments requis avant raccordement au premier cabinet.

## Export GitHub

- [x] Vérifier la connexion GitHub et identifier le dépôt cible.
- [x] Préparer l’export du checkpoint validé du thème.
- [x] Obtenir la confirmation du nom, de la visibilité et de la création ou mise à jour du dépôt.
- [x] Exporter le projet puis communiquer le lien GitHub.

## Analyse du contenu fourni

- [ ] Lire le contenu joint et identifier ses objectifs, hypothèses et livrables.
- [ ] Formuler un avis critique avec les améliorations prioritaires pour Atlas Santé.

## Reconstruction statique — 8 pages FR / 8 pages AR

- [x] Créer le point de départ `themes/sante/` en HTML statique, Tailwind CLI et assets locaux.
- [x] Restaurer un contrôle contractuel indépendant et figer son contenu avant toute implémentation.
- [x] Construire et vérifier les 8 pages françaises.
- [x] Construire et vérifier les 8 pages arabes avec `lang="ar"` et `dir="rtl"`.
- [x] Réaliser la conformité finale : chemins `data-field`, poids, assets, RTL et build HTML.

## Lot 3 — Sections secondaires

- [x] Ajouter les horaires, la FAQ native, le formulaire de contact et l’itinéraire dans les deux langues.
- [x] Vérifier l’absence de JavaScript et les parcours RTL du lot 3.

## Référence visuelle Denticare Everest

- [x] Analyser la composition, la navigation et les onglets de la page de référence.
- [x] Adapter l’accueil statique FR/AR avec une structure visuelle équivalente et une identité Atlas originale.
- [x] Vérifier que les onglets et les sections ne nécessitent pas de JavaScript hors limite contractuelle.

## Exécution continue

- [x] Enchaîner chaque lot seulement après des tests statiques, dynamiques, RTL, liens et poids verts.
- [x] Inscrire les sorties complètes de chaque lot dans `themes/sante/RAPPORT.md` sans attendre de validation intermédiaire.

## Synchronisation GitHub du thème statique

- [x] Préparer le checkpoint final pour le dépôt public.
- [x] Pousser la reconstruction statique vers la branche `main`.
- [x] Vérifier le dépôt public et communiquer le lien synchronisé.

## Bascule de prévisualisation statique

- [x] Rendre le thème `themes/sante/` accessible depuis la prévisualisation principale.
- [x] Vérifier l’accueil français, l’accueil arabe RTL et les liens de navigation dans la prévisualisation.
- [x] Synchroniser la correction de prévisualisation vers GitHub.

## Visuels médicaux originaux

- [x] Créer un portrait du médecin, une scène d’équipe et une vue intérieure du cabinet dans l’identité Atlas.
- [x] Compresser les visuels pour le thème statique et les intégrer avec WebP + fallback local.
- [x] Vérifier le rendu FR/AR, les poids et les chemins des nouveaux visuels, puis synchroniser GitHub.
