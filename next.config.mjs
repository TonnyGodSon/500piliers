/** @type {import('next').NextConfig} */
const nextConfig = {
  // Génère un site 100 % statique dans /out (hébergeable partout : Netlify, GitHub Pages, OVH…)
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;

