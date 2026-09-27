'use client';

import { useEffect, useRef, useState } from 'react';
import { KEY_FIGURES } from '@/lib/content';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value); // valeur finale au rendu serveur (SEO / sans JS)

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setDisplay(0);
    let raf = 0;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const start = performance.now();
        const step = (t: number) => {
          const p = Math.min((t - start) / 1600, 1);
          setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref} className="stat-number">
      {display.toLocaleString('fr-FR')}
      {suffix}
    </span>
  );
}

export default function KeyFigures() {
  return (
    <section className="stats" id="chiffres">
      <div className="container stats-grid">
        {KEY_FIGURES.map((f) => (
          <div className="stat" key={f.label}>
            <Counter value={f.value} suffix={f.suffix} />
            <span className="stat-label">{f.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

