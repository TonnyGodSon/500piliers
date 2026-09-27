import { CITIES, SITE } from '@/lib/content';

export default function IccNormandie() {
  return (
    <section className="section section-dark" id="icc-normandie">
      <div className="container">
        <h2 className="section-title reveal">
          La croissance d&apos;Impact Centre Chrétien en Normandie en quelques chiffres
        </h2>
        <div className="two-cols align-center">
          <div>
            <p className="lead">Après 12 ans, ICC en Normandie c&apos;est déjà :</p>
            <ul className="check-list">
              <li>
                Plus de <strong>8 cultes</strong> de célébration qui réunissent <strong>plus de 1000 personnes</strong>{' '}
                chaque dimanche
              </li>
              <li>
                <strong>4 églises locales</strong> : Rouen, Caen, Évreux et Le Havre
              </li>
              <li>Plusieurs familles connectées à Cherbourg, Dieppe et Saint-Lô</li>
              <li>Et de nombreux autres sites à déployer</li>
              <li>Des cultes spécifiques pour les jeunes, les enfants, les femmes, les hommes, les couples, les célibataires</li>
              <li>Des conférences, des camps, des retraites et des programmes divers d&apos;édification</li>
              <li>Des projets sociaux et humanitaires…</li>
            </ul>
            <p className="small muted">
              Siège régional : {SITE.headquarters}. Découvrez l&apos;église principale sur{' '}
              <a href={SITE.mainChurchUrl} target="_blank" rel="noopener noreferrer">
                impactcentrechretien.com
              </a>
              .
            </p>
          </div>
          <div className="cities-card reveal">
            <h3>Présence en Normandie</h3>
            <ul className="cities">
              {CITIES.map((c) => (
                <li key={c.name} className={`city city-${c.kind}`}>
                  {c.name}
                </li>
              ))}
            </ul>
            <div className="legend">
              <span><i className="dot dot-main" /> Églises locales</span>
              <span><i className="dot dot-connected" /> Familles connectées</span>
              <span><i className="dot" /> Sites à déployer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

