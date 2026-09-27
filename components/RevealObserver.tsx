'use client';

import { useEffect } from 'react';

/**
 * Anime l'apparition des éléments portant la classe `.reveal`.
 * Les éléments restent visibles sans JavaScript (la classe `js-reveal` n'est ajoutée qu'ici).
 */
export default function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    document.documentElement.classList.add('js-reveal');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}

