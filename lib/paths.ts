/**
 * Préfixe d'URL du site (ex. « /500piliers » sur GitHub Pages, vide sur un domaine dédié).
 * Défini au moment du build via la variable NEXT_PUBLIC_BASE_PATH.
 */
export const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/\/$/, '');

/** Ajoute le préfixe du site à un chemin de fichier public (images, icônes…). */
export const asset = (path: string) => `${BASE_PATH}${path}`;

