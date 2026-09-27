import type { CSSProperties } from 'react';
import AnimatedNumber from './AnimatedNumber';
import { KEY_FIGURES } from '@/lib/content';

export default function KeyFigures() {
  return (
    <section className="stats" id="chiffres">
      <div className="container stats-grid">
        {KEY_FIGURES.map((f, i) => (
          <div className="stat reveal" key={f.label} style={{ '--i': i } as CSSProperties}>
            <AnimatedNumber value={f.value} suffix={f.suffix} className="stat-number" />
            <span className="stat-label">{f.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

