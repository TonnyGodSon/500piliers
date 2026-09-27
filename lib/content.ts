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
 * Déclinaisons générées par `npm run images` (WebP pour la page, PNG pour partage et icônes).
 */
export const LOGO = {
  small: '/logo-500-piliers-400.webp',
  large: '/logo-500-piliers-800.webp',
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
/** Villes avec coordonnées GPS (longitude, latitude) pour la carte de Normandie. */
export const CITIES: { name: string; kind: CityKind; lon: number; lat: number }[] = [
  { name: 'Rouen', kind: 'main', lon: 1.1, lat: 49.44 },
  { name: 'Caen', kind: 'main', lon: -0.37, lat: 49.18 },
  { name: 'Évreux', kind: 'main', lon: 1.15, lat: 49.02 },
  { name: 'Le Havre', kind: 'main', lon: 0.13, lat: 49.49 },
  { name: 'Cherbourg', kind: 'connected', lon: -1.62, lat: 49.62 },
  { name: 'Dieppe', kind: 'connected', lon: 1.08, lat: 49.9 },
  { name: 'Saint-Lô', kind: 'connected', lon: -1.09, lat: 49.12 },
  { name: 'Val-de-Reuil', kind: 'future', lon: 1.21, lat: 49.27 },
  { name: 'Louviers', kind: 'future', lon: 1.17, lat: 49.21 },
  { name: 'Vernon', kind: 'future', lon: 1.46, lat: 49.09 },
  { name: 'Alençon', kind: 'future', lon: 0.09, lat: 48.43 },
  { name: 'Lisieux', kind: 'future', lon: 0.23, lat: 49.15 },
  { name: 'Fécamp', kind: 'future', lon: 0.38, lat: 49.74 },
  { name: 'Bayeux', kind: 'future', lon: -0.7, lat: 49.28 },
  { name: 'Vire', kind: 'future', lon: -0.89, lat: 48.84 },
  { name: 'Granville', kind: 'future', lon: -1.57, lat: 48.84 },
  { name: 'Coutances', kind: 'future', lon: -1.44, lat: 49.05 },
  { name: 'Avranches', kind: 'future', lon: -1.36, lat: 48.68 },
  { name: 'Flers', kind: 'future', lon: -0.57, lat: 48.75 },
  { name: "L'Aigle", kind: 'future', lon: 0.63, lat: 48.76 },
];

/** Contour simplifié de la Normandie (longitude, latitude), sens horaire depuis Le Tréport. */
export const NORMANDIE_OUTLINE: [number, number][] = [
  [1.38, 50.07], [1.08, 49.93], [0.71, 49.87], [0.37, 49.77], [0.19, 49.71], [0.07, 49.52],
  [0.1, 49.48], [0.3, 49.45], [0.23, 49.42], [0.07, 49.36], [-0.12, 49.29], [-0.25, 49.29],
  [-0.46, 49.34], [-0.75, 49.36], [-1.05, 49.39], [-1.17, 49.35], [-1.2, 49.43], [-1.27, 49.59],
  [-1.26, 49.69], [-1.45, 49.68], [-1.62, 49.65], [-1.94, 49.72], [-1.85, 49.62], [-1.87, 49.52],
  [-1.8, 49.37], [-1.66, 49.26], [-1.6, 49.13], [-1.58, 49.03], [-1.61, 48.84], [-1.56, 48.74],
  [-1.39, 48.66], [-1.51, 48.62], [-1.51, 48.55], [-1.24, 48.54], [-1.07, 48.52], [-0.86, 48.5],
  [-0.65, 48.47], [-0.42, 48.51], [-0.2, 48.52], [-0.05, 48.38], [0.1, 48.37], [0.35, 48.27],
  [0.4, 48.19], [0.63, 48.26], [0.8, 48.3], [0.95, 48.49], [0.84, 48.61], [0.93, 48.74],
  [1.21, 48.76], [1.36, 48.73], [1.44, 48.86], [1.48, 49.05], [1.62, 49.08], [1.72, 49.2],
  [1.78, 49.28], [1.7, 49.4], [1.72, 49.49], [1.79, 49.7], [1.75, 49.78], [1.63, 49.93], [1.38, 50.07],
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


