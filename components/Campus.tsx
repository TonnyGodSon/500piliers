import type { CSSProperties } from 'react';
import { CAMPUS_FEATURES } from '@/lib/content';

export default function Campus() {
  return (
    <section className="section section-light" id="campus">
      <div className="container">
        <p className="eyebrow">Le projet d&apos;acquisition</p>
        <h2 className="section-title dark reveal">Nous voulons que ce nouveau campus soit un lieu de vie</h2>
        <div className="features">
          {CAMPUS_FEATURES.map((f, i) => (
            <article className="feature reveal" key={f.title} style={{ '--i': i % 4 } as CSSProperties}>
              <span className="feature-icon" aria-hidden="true">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
        <p className="campus-quote">
          Nous croyons que le siège des églises ICC en Normandie sera un endroit à la gloire de Dieu et du corps de
          Christ en Normandie.
        </p>
      </div>
      <div className="skyline" aria-hidden="true" />
    </section>
  );
}

