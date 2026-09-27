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

## Avant la mise en ligne

- Définir l'URL finale du site : variable `NEXT_PUBLIC_SITE_URL` (ex. `https://500piliers.fr`).

## Hébergement

- **Vercel / Netlify** : commande `npm run build`, dossier de sortie `out`.
- **OVH / FTP / GitHub Pages** : envoyer le contenu du dossier `out/`.

