import type { CSSProperties } from 'react';
import AnimatedNumber from './AnimatedNumber';
import { FUNDRAISING_STATS } from '@/lib/content';

const delay = (i: number) => ({ '--i': i }) as CSSProperties;

export default function FundraisingStats() {
  const { period, contributors, amounts, progressRate } = FUNDRAISING_STATS;

  return (
    <section className="section section-light section-alt" id="avancement">
      <div className="container">
        <h2 className="section-title dark reveal">Où en sommes-nous ?</h2>
        <p className="center">
          <span className="period-badge">Chiffres de {period}</span>
        </p>

        <h3 className="fs-group-title">Les contributeurs</h3>
        <div className="fs-grid fs-grid-3">
          {contributors.map((s, i) => (
            <div className="fs-card reveal" key={s.label} style={delay(i)}>
              <span className="fs-label">{s.label}</span>
              <AnimatedNumber value={s.value} className="fs-value" />
            </div>
          ))}
        </div>

        <h3 className="fs-group-title">La collecte</h3>
        <div className="fs-grid fs-grid-4">
          {amounts.map((s, i) => (
            <div className="fs-card reveal" key={s.label} style={delay(i)}>
              <span className="fs-label">{s.label}</span>
              <AnimatedNumber value={s.value} format="euro" className="fs-value" />
            </div>
          ))}
          <div className="fs-card fs-card-highlight reveal" style={delay(amounts.length)}>
            <span className="fs-label">Taux de progression</span>
            <AnimatedNumber value={progressRate} format="percent" className="fs-value" />
          </div>
        </div>

        <p className="center small muted fs-note">
          Chaque contribution compte : rejoignez les bâtisseurs et aidez-nous à atteindre l&apos;objectif.
        </p>
        <p className="center">
          <a href="#contribuer" className="btn btn-gold">Je contribue</a>
        </p>
      </div>
    </section>
  );
}
