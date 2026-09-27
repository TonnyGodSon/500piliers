# Les 500 Piliers du Royaume – ICC Normandie

Site de l'opération **500 Piliers** des églises locales d'Impact Centre Chrétien en Normandie.

**Stack :** Next.js (App Router, Turbopack) · React · TypeScript · export 100 % statique.

## Démarrage

```
npm install
npm run dev      # http://localhost:3000
npm run build    # génère le site statique dans /out
npm start        # prévisualise /out
```

## Structure

```
app/               layout (polices, SEO), page, styles, sitemap, robots
components/        Une section = un composant
lib/content.ts     Tout le contenu modifiable : textes, liens de don, e-mails, villes, logo…
public/            Images du site
```

## Images requises dans `public/`

| Fichier                     | Contenu                                                 |
|-----------------------------|---------------------------------------------------------|
| `logo-500-piliers.png`      | **Logo officiel** des 500 Piliers (seul logo utilisé)   |
| `qr-code-500-piliers.jpg`   | QR code de contribution (bloc masqué s'il est absent)   |

Après tout changement du logo, régénérer ses déclinaisons (WebP pour la page, image de partage,
icônes de l'application) :

```
npm run images
```

## Fonctionnalités

- Compteurs animés, apparition progressive des sections, particules et halo sur l'accueil
- Menu qui suit la lecture + barre de progression
- Carte interactive de la Normandie
- Simulateur relié au bulletin d'engagement (assistant en 4 étapes, imprimable)
- Boutons Partager (WhatsApp, Facebook, SMS, e-mail) et Copier
- QR code agrandissable, barre « Contribuer par carte » sur mobile, retour en haut
- Application installable (manifeste + service worker, consultation hors connexion)
- Animations désactivées automatiquement si l'utilisateur a réduit les animations de son appareil

## Avant la mise en ligne

- Définir l'URL finale du site : variable `NEXT_PUBLIC_SITE_URL` (ex. `https://500piliers.fr`).

## Hébergement

### GitHub Pages (automatique)

Chaque envoi sur la branche `main` met le site en ligne automatiquement
(workflow `.github/workflows/deploy.yml`) :

👉 **https://tonnygodson.github.io/500piliers/**

### Versions

Les versions sont marquées par des étiquettes Git (`v1.0.0`, `v2.0.0`…). Envoyer une étiquette
crée automatiquement une **Release** GitHub avec les notes de `CHANGELOG.md` et le site prêt à héberger (zip) :

```
npm version 2.1.0 --no-git-tag-version   # puis compléter CHANGELOG.md
git commit -am "Version 2.1.0"
git tag -a v2.1.0 -m "Version 2.1.0"
git push --follow-tags
```

### Autres hébergeurs
- **Vercel / Netlify** : commande `npm run build`, dossier de sortie `out`.
- **OVH / FTP / GitHub Pages** : envoyer le contenu du dossier `out/`.

