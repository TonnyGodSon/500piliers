'use client';

import { useEffect } from 'react';

/** Met à jour la variable CSS --hero-scroll pour l'effet de profondeur (parallaxe) de l'accueil. */
export default function HeroParallax() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const hero = document.getElementById('accueil');
    if (!hero) return;
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = Math.min(window.scrollY, window.innerHeight);
      hero.style.setProperty('--hero-scroll', String(y));
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
}

