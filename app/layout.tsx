import type { Metadata, Viewport } from 'next';
import { Cinzel, Great_Vibes, Inter } from 'next/font/google';
import { LOGO, SITE } from '@/lib/content';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const cinzel = Cinzel({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-cinzel', display: 'swap' });
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400', variable: '--font-script', display: 'swap' });

const description =
  "Opération 500 Piliers : mobilisation pour l'acquisition du nouveau Campus Central d'Impact Centre Chrétien en Normandie (agglomération rouennaise).";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.name} – ICC Normandie`,
  description,
  keywords: ['500 piliers', 'Impact Centre Chrétien', 'ICC Rouen', 'Normandie', 'église', 'campus', 'don'],
  icons: { icon: LOGO.icon, apple: LOGO.appleIcon },
  openGraph: {
    title: `${SITE.name} – ICC Normandie`,
    description: "Faites partie des bâtisseurs du nouveau Campus Central d'Impact Centre Chrétien en Normandie.",
    type: 'website',
    locale: 'fr_FR',
    siteName: SITE.name,
    images: [{ url: LOGO.og, width: 1200, height: 630, alt: 'Les 500 Piliers du Royaume' }],
  },
  appleWebApp: { capable: true, title: '500 Piliers', statusBarStyle: 'black-translucent' },
};

export const viewport: Viewport = { themeColor: '#0b0f2b' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${cinzel.variable} ${greatVibes.variable}`}>
      <body>{children}</body>
    </html>
  );
}

