# Journal des versions

## [3.0.0] – 2026-09-27

### Présentation
- **Carrousel des espaces du campus** (« Le projet d'acquisition ») : flèches, points, glissement tactile,
  clavier, défilement automatique en pause au survol ; 3 cartes sur ordinateur, 2 sur tablette, 1 sur mobile
- **« La collecte »** : seul le taux de progression est affiché, avec une jauge dorée animée
- Boutons d'action renommés **« Je contribue »** (menu, bouton flottant, barre mobile)

### Textes
- Nouvelle présentation du projet des « 500 piliers du Royaume »
- Nouveau titre de section : « Notre perspective : ce que nous voyons »
- Texte d'appel de « Comment contribuer ? » raccourci

### Déploiement
- Prise en charge d'un **nom de domaine personnalisé** (variable `CUSTOM_DOMAIN`, fichier CNAME automatique)
- Configuration Netlify (`netlify.toml`) comme alternative compatible dépôt privé
- Correction du workflow GitHub Pages (activation de Pages à faire manuellement dans les paramètres)

## [2.0.0] – 2026-09-27

### Nouveautés
- **Section « Où en sommes-nous ? »** : chiffres de la collecte (Septembre 2026) avec compteurs animés
- **Carte interactive de la Normandie** : églises locales, familles connectées et sites à déployer
- **Bulletin d'engagement en 4 étapes** (Montant, Versement, Paiement, Coordonnées) avec barre de progression, imprimable
- **Simulateur relié au bulletin** : « Je m'engage pour ce montant » pré-remplit le bulletin
- **Bouton Partager** (menu natif sur mobile, WhatsApp, Facebook, SMS, e-mail, copie du lien)
- **Boutons Copier** sur les ordres de chèque et les adresses e-mail
- **QR code agrandissable** en plein écran
- **Barre « Contribuer par carte »** sur mobile et bouton « Retour en haut »
- **Application installable** (écran d'accueil du téléphone, consultation hors connexion)

### Animations et présentation
- Accueil : halo lumineux derrière le logo, particules dorées, effet de profondeur au défilement
- Apparition décalée des cartes, titres de section qui se dessinent
- Reflet doré sur les boutons, relief des cartes au survol
- Menu qui suit la lecture et barre de progression dorée
- Respect du réglage « réduire les animations » des appareils

### Technique
- Logo officiel en WebP (35 Ko au lieu de 182 Ko), icônes et image de partage générées (`npm run images`)
- Déploiement automatique sur GitHub Pages

## [1.0.0] – 2026-09-27

- Première version du site : présentation du projet, campus, ICC Normandie, attentes, moyens de contribution,
  simulateur, bulletin d'engagement par e-mail
- Next.js (export statique), React, TypeScript, logo officiel

