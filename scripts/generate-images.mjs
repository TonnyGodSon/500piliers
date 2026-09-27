/**
 * Génère toutes les déclinaisons du logo officiel à partir de public/logo-500-piliers.png.
 * Usage : npm run images
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const SRC = 'public/logo-500-piliers.png';
const NAVY = { r: 11, g: 15, b: 43, alpha: 1 };

await mkdir('public/icons', { recursive: true });

// Logo pour la page (WebP + PNG de secours)
for (const w of [400, 800]) {
  await sharp(SRC).resize({ width: w }).webp({ quality: 88 }).toFile(`public/logo-500-piliers-${w}.webp`);
}
await sharp(SRC).resize({ width: 800 }).png({ compressionLevel: 9 }).toFile('public/logo-500-piliers-800.png');

// Image de partage (réseaux sociaux) 1200x630 sur fond bleu nuit
await sharp(SRC)
  .resize({ width: 1000, height: 560, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .extend({ top: 35, bottom: 35, left: 100, right: 100, background: NAVY })
  .flatten({ background: NAVY })
  .png()
  .toFile('public/og-image.png');

// Icônes carrées (onglet, Apple, application installable)
const square = (size, pad, bg) =>
  sharp(SRC)
    .resize({ width: size - pad * 2, height: size - pad * 2, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background: bg ?? { r: 0, g: 0, b: 0, alpha: 0 } })
    .png();

await square(512, 8).toFile('public/icon-512.png');
await square(192, 4).toFile('public/icons/icon-192.png');
await square(512, 8).toFile('public/icons/icon-512.png');
await square(512, 70, NAVY).flatten({ background: NAVY }).toFile('public/icons/icon-maskable-512.png');
await square(180, 10, NAVY).flatten({ background: NAVY }).toFile('public/apple-icon.png');

console.log('Images générées ✔');

