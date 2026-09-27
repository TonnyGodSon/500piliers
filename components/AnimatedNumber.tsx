'use client';

import { useEffect, useRef, useState } from 'react';

type Format = 'int' | 'euro' | 'percent';

const decimalsOf = (n: number) => (Number.isInteger(n) ? 0 : 2);

function formatValue(n: number, format: Format, decimals: number) {
  const opts: Intl.NumberFormatOptions = { minimumFractionDigits: decimals, maximumFractionDigits: decimals };
  if (format === 'euro') return new Intl.NumberFormat('fr-FR', { ...opts, style: 'currency', currency: 'EUR' }).format(n);
  const s = new Intl.NumberFormat('fr-FR', opts).format(n);
  return format === 'percent' ? `${s} %` : s;
}

/**
 * Nombre qui s'anime de 0 jusqu'à sa valeur quand il devient visible.
 * Le HTML initial (SEO, sans JS) contient directement la valeur finale.
 */
export default function AnimatedNumber({
  value,
  format = 'int',
  suffix = '',
  duration = 1600,
  className,
}: {
  value: number;
  format?: Format;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const decimals = decimalsOf(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Déjà visible au chargement (ex. lien direct vers la section) : on anime quand même depuis 0
    setDisplay(0);
    let raf = 0;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const start = performance.now();
        const step = (t: number) => {
          const p = Math.min((t - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(p < 1 ? value * eased : value);
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {formatValue(display, format, decimals)}
      {suffix}
    </span>
  );
}

