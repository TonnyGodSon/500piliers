/** @type {import('next').NextConfig} */
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/\/$/, '');

const nextConfig = {
  // Génère un site 100 % statique dans /out (hébergeable partout : GitHub Pages, Netlify, OVH…)
  output: 'export',
  // Préfixe d'URL (ex. « /500piliers » pour GitHub Pages) ; vide en local ou sur un domaine dédié
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
