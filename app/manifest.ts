import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/content';
import { asset } from '@/lib/paths';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} – ICC Normandie`,
    short_name: '500 Piliers',
    description: "Opération 500 Piliers : acquisition du nouveau Campus Central d'Impact Centre Chrétien en Normandie.",
    lang: 'fr',
    start_url: asset('/'),
    scope: asset('/'),
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#0b0f2b',
    theme_color: '#0b0f2b',
    categories: ['lifestyle', 'social'],
    icons: [
      { src: asset('/icons/icon-192.png'), sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: asset('/icons/icon-512.png'), sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: asset('/icons/icon-maskable-512.png'), sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
