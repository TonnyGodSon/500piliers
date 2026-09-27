/**
 * Contenu éditorial centralisé : modifiez ce fichier pour mettre à jour le site
 * sans toucher aux composants.
 */

export const SITE = {
  name: 'Les 500 Piliers du Royaume',
  org: 'Impact Centre Chrétien – Églises de Normandie',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  contactEmail: '500piliersnormandie@gmail.com',
  financeEmail: 'rouen.finances@gmail.com',
  mainChurchUrl: 'https://impactcentrechretien.com/',
  headquarters: 'Rouen – Isneauville',
} as const;

/**
 * Logo officiel (seul logo utilisé). Original : public/logo-500-piliers.png (5404 × 3561).
 * Versions redimensionnées du même fichier : logo-500-piliers-800.png (page), og-image.png (partage),
 * icon-512.png et apple-icon.png (icônes).
 */
export const LOGO = {
  src: '/logo-500-piliers-800.png',
  og: '/og-image.png',
  icon: '/icon-512.png',
  appleIcon: '/apple-icon.png',
  ratio: 3561 / 5404,
} as const;

export const PILIER_AMOUNT = 2000;

export const DONATION_LINKS = {
  taxFrance:
    'https://impactcentrechretien.assoconnect.com/collect/description/635186-x-operation-500-piliers-normandie',
  noTaxFrance:
    'https://impactcentrechretienculturel.assoconnect.com/collect/description/635183-b-operation-500-piliers-normandie',
} as const;

export const NAV_LINKS = [
  { href: '#projet', label: 'Le projet' },
  { href: '#campus', label: 'Le campus' },
  { href: '#icc-normandie', label: 'ICC Normandie' },
  { href: '#avancement', label: 'Avancement' },
];

/**
 * Chiffres de la collecte (issus du tableau de bord). Mettre à jour chaque mois :
 * modifier `period` et les valeurs ci-dessous.
 */
export const FUNDRAISING_STATS = {
  period: 'Septembre 2026',
  contributors: [
    { label: 'Total des contributeurs', value: 210 },
    { label: 'Contributeurs actifs', value: 83 },
    { label: 'Contributeurs passifs', value: 127 },
  ],
  amounts: [
    { label: 'Total des engagements', value: 399925 },
    { label: 'Total récolté', value: 37639.98 },
    { label: 'Reste à collecter', value: 362285.02 },
  ],
  progressRate: 9.41, // en %
} as const;

export const KEY_FIGURES = [
  { value: 1, suffix: 'M€', label: 'Objectif de la mobilisation' },
  { value: 500, suffix: '', label: 'Piliers contributeurs' },
  { value: 12, suffix: '', label: 'Mois de mobilisation' },
  { value: 2000, suffix: ' €', label: "Montant d'un pilier" },
];

export const CAMPUS_FEATURES = [
  { icon: '🎤', title: 'Auditorium central', text: 'Pour les cultes.' },
  { icon: '🎭', title: 'Auditorium annexe', text: 'Pour des évènements autres.' },
  { icon: '🧸', title: 'Espace enfants', text: 'Un espace réservé exclusivement à nos enfants avec une nurserie et même des aires de jeux.' },
  { icon: '📚', title: 'Librairie', text: 'Une librairie et des espaces de lecture.' },
  { icon: '💻', title: 'Espaces multimédias', text: 'Des espaces informatiques et multimédias de travail.' },
  { icon: '🤝', title: 'Salles multifonctions', text: "Réunions, formations, bulles d'écoute, etc." },
  { icon: '☕', title: 'Détente & convivialité', text: 'Cafétéria, espaces verts…' },
  { icon: '🧺', title: 'Activités solidaires', text: 'Pôle social, épicerie normande…' },
];

export type CityKind = 'main' | 'connected' | 'future';
export const CITIES: { name: string; kind: CityKind }[] = [
  { name: 'Rouen', kind: 'main' },
  { name: 'Caen', kind: 'main' },
  { name: 'Évreux', kind: 'main' },
  { name: 'Le Havre', kind: 'main' },
  { name: 'Cherbourg', kind: 'connected' },
  { name: 'Dieppe', kind: 'connected' },
  { name: 'Saint-Lô', kind: 'connected' },
  ...['Val-de-Reuil', 'Louviers', 'Vernon', 'Alençon', 'Lisieux', 'Fécamp', 'Bayeux', 'Vire', 'Granville', 'Coutances', 'Avranches', 'Flers', "L'Aigle"].map(
    (name) => ({ name, kind: 'future' as const }),
  ),
];

export const LOCAL_CHURCHES = ['ICC Rouen', 'ICC Caen', 'ICC Évreux', 'ICC Le Havre', 'Autre'];

export const VERSES = {
  deut: {
    text: "Que l'Éternel, le Dieu de vos pères, vous augmente mille fois autant et qu'il vous bénisse comme il vous l'a dit !",
    ref: 'Deutéronome 1.11',
  },
  samuel: { text: "J'ai donné une demeure à mon peuple.", ref: '2 Samuel 7.10' },
  corinth: {
    text: "Que chacun donne comme il l'a résolu en son cœur, sans tristesse ni contrainte ; car Dieu aime celui qui donne avec joie.",
    ref: '2 Corinthiens 9.7',
  },
} as const;

export const formatEuro = (n: number) =>
  new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: Number.isInteger(n) ? 0 : 2,
  }).format(n);

export const round2 = (n: number) => Math.round(n * 100) / 100;


