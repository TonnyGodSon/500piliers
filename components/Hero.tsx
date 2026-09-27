import Logo from './Logo';
import Verse from './Verse';
import { VERSES } from '@/lib/content';

export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-bg" />
      <div className="container hero-content">
        <Logo width={380} className="hero-logo" priority />
        <p className="hero-sub">Pour l&apos;acquisition du nouveau</p>
        <h1>
          Campus Central d&apos;Impact Centre Chrétien
          <br />
          <span className="gold">en Normandie</span>
        </h1>
        <Verse text={VERSES.deut.text} cite={VERSES.deut.ref} />
        <p className="hero-cta-text">
          Faites partie des bâtisseurs de cette entreprise divine et expérimentez une distinction sans précédent !
        </p>
        <div className="hero-actions">
          <a href="#contribuer" className="btn btn-gold">Je deviens un pilier</a>
          <a href="#projet" className="btn btn-outline">Découvrir le projet</a>
        </div>
      </div>
      <a href="#chiffres" className="scroll-down" aria-label="Défiler vers le bas" />
    </section>
  );
}

