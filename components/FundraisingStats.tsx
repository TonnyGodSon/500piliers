import { FUNDRAISING_STATS, formatEuro } from '@/lib/content';

const formatInt = (n: number) => n.toLocaleString('fr-FR');
const formatPercent = (n: number) =>
  new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n) + ' %';

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
          {contributors.map((s) => (
            <div className="fs-card reveal" key={s.label}>
              <span className="fs-label">{s.label}</span>
              <span className="fs-value">{formatInt(s.value)}</span>
            </div>
          ))}
        </div>

        <h3 className="fs-group-title">La collecte</h3>
        <div className="fs-grid fs-grid-4">
          {amounts.map((s) => (
            <div className="fs-card reveal" key={s.label}>
              <span className="fs-label">{s.label}</span>
              <span className="fs-value">{formatEuro(s.value)}</span>
            </div>
          ))}
          <div className="fs-card fs-card-highlight reveal">
            <span className="fs-label">Taux de progression</span>
            <span className="fs-value">{formatPercent(progressRate)}</span>
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

