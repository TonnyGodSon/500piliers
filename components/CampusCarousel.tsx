'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { CAMPUS_FEATURES } from '@/lib/content';

const AUTOPLAY_MS = 4500;

/**
 * Carrousel des espaces du futur campus.
 * - Glissement tactile / trackpad natif (scroll-snap), flèches, points, flèches du clavier
 * - Défilement automatique, en pause au survol, au focus, hors écran ou si « réduire les animations »
 */
export default function CampusCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const count = CAMPUS_FEATURES.length;

  const slides = () => Array.from(trackRef.current?.children ?? []) as HTMLElement[];

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    const items = slides();
    if (!track || !items.length) return;
    const i = (index + items.length) % items.length;
    track.scrollTo({ left: items[i].offsetLeft - track.offsetLeft, behavior: 'smooth' });
  }, []);

  // Carte active = celle la plus proche du bord gauche
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const items = slides();
        let best = 0;
        let bestDist = Infinity;
        items.forEach((el, i) => {
          const d = Math.abs(el.offsetLeft - track.offsetLeft - track.scrollLeft);
          if (d < bestDist) {
            bestDist = d;
            best = i;
          }
        });
        // En fin de piste, la dernière carte devient active
        if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 4) best = items.length - 1;
        setActive(best);
      });
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Défilement automatique uniquement quand le carrousel est visible à l'écran
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const obs = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.4 });
    obs.observe(track);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !visible || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => {
      const track = trackRef.current;
      if (!track) return;
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      goTo(atEnd ? 0 : active + 1);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [active, paused, visible, goTo]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goTo(active + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goTo(active - 1);
    }
  };

  return (
    <div
      className="carousel reveal"
      role="region"
      aria-roledescription="carrousel"
      aria-label="Les espaces du futur campus"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <button type="button" className="carousel-arrow carousel-prev" onClick={() => goTo(active - 1)} aria-label="Espace précédent">
        ‹
      </button>

      <div className="carousel-track" ref={trackRef} tabIndex={0} onKeyDown={onKeyDown} aria-live={paused ? 'polite' : 'off'}>
        {CAMPUS_FEATURES.map((f, i) => (
          <article
            className={`feature carousel-slide ${i === active ? 'is-active' : ''}`}
            key={f.title}
            role="group"
            aria-roledescription="diapositive"
            aria-label={`${i + 1} sur ${count} : ${f.title}`}
          >
            <span className="feature-icon" aria-hidden="true">{f.icon}</span>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </article>
        ))}
      </div>

      <button type="button" className="carousel-arrow carousel-next" onClick={() => goTo(active + 1)} aria-label="Espace suivant">
        ›
      </button>

      <div className="carousel-dots" role="tablist" aria-label="Choisir un espace">
        {CAMPUS_FEATURES.map((f, i) => (
          <button
            key={f.title}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={f.title}
            className={i === active ? 'is-active' : undefined}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}

