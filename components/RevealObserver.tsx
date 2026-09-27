'use client';

import { useEffect } from 'react';

const STAGGER_MS = 90;
const DURATION_MS = 700;

/**
 * Anime l'apparition des éléments `.reveal` (décalage via la variable CSS `--i`).
 * Les éléments restent visibles sans JavaScript (la classe `js-reveal` n'est ajoutée qu'ici).
 */
export default function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    document.documentElement.classList.add('js-reveal');
    const timers: number[] = [];

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          el.classList.add('in');
          obs.unobserve(el);
          // Une fois l'apparition terminée, on retire le délai (survols instantanés)
          const i = Number(getComputedStyle(el).getPropertyValue('--i')) || 0;
          timers.push(window.setTimeout(() => el.classList.add('revealed'), DURATION_MS + i * STAGGER_MS + 50));
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    els.forEach((el) => obs.observe(el));
    return () => {
      obs.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return null;
}
