# Inventaire des données — Atlas Santé

Ce document recense tous les attributs `data-field` employés par le thème à page unique. Les chemins suivent le contrat partagé ; l’intégration doit remplacer les valeurs affichées sans modifier les composants ni les signatures.

| Chemin | Type | Section | Exemple de présentation | Remarque |
|---|---|---|---|---|
| `brand.logo` | chemin d’image | Navigation | symbole Atlas Santé | À remplacer par le logo du cabinet traité par le module médias. |
| `business.name` | chaîne bilingue | Navigation | Atlas Santé | Nom affiché dans l’en-tête. |
| `business.tagline.fr` | chaîne | Hero FR | Des soins clairs, à votre rythme. | Version française du titre principal. |
| `business.tagline.ar` | chaîne | Hero AR | رعاية واضحة، وفق إيقاعك. | Version arabe du titre principal. |
| `business.description.fr` | texte | Hero FR | Informations essentielles du cabinet. | Description courte et patient-facing. |
| `business.description.ar` | texte | Hero AR | المعلومات الأساسية عن عيادتك. | Description courte en arabe. |
| `contact.phone` | téléphone E.164 | Topbar et contact | Téléphone du cabinet | Toujours présenté avec `dir="ltr"`. |
| `contact.email` | e-mail | Informations pratiques | Adresse de contact | Lien `mailto:` à ajouter avec la donnée réelle. |
| `contact.hours` | tableau d’horaires | Informations pratiques | Horaires d’accueil | Sert aussi à `openingHoursSpecification` côté SEO. |
| `contact.address.city` | chaîne | Accès au cabinet | Accès au cabinet | À associer à l’adresse complète et à `geo` si disponibles. |
| `services[].title.fr` | chaîne | Services FR | Consultation | Une entrée par service. |
| `services[].title.ar` | chaîne | Services AR | استشارة | Une entrée par service. |
| `services[].description.fr` | texte | Services FR | Première rencontre avec le praticien. | Formulation informative, sans promesse. |
| `services[].description.ar` | texte | Services AR | اللقاء الأول مع طبيبك. | Formulation informative, sans promesse. |
| `faq[].q.fr` | chaîne | FAQ FR | Comment préparer ma première visite ? | Question pratique. |
| `faq[].q.ar` | chaîne | FAQ AR | كيف أستعد للزيارة الأولى؟ | Question pratique. |
| `faq[].a.fr` | texte | FAQ FR | Rassemblez les informations utiles. | Réponse non médicale, sans diagnostic. |
| `faq[].a.ar` | texte | FAQ AR | اجمع المعلومات المفيدة. | Réponse non médicale, sans diagnostic. |

> Les textes actuellement visibles sont une structure de présentation. Avant publication, ils doivent être remplacés par les données et contenus validés par le cabinet, notamment les coordonnées, horaires, descriptions et réponses de FAQ.
