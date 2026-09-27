import type { CSSProperties } from 'react';
import Logo from './Logo';
import Verse from './Verse';
import ShareButton from './ShareButton';
import HeroParallax from './HeroParallax';
import { VERSES } from '@/lib/content';

// Particules dorées : positions pseudo-aléatoires mais déterministes (calcul entier, identique partout)
const rand = (seed: number) => {
  let t = (seed * 0x6d2b79f5) >>> 0;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const PARTICLES = Array.from({ length: 26 }, (_, i) => ({
  left: `${(rand(i + 1) * 100).toFixed(2)}%`,
  size: `${(2 + rand(i + 50) * 4).toFixed(1)}px`,
  duration: `${(9 + rand(i + 100) * 10).toFixed(1)}s`,
  delay: `${(-rand(i + 150) * 18).toFixed(1)}s`,
  drift: `${((rand(i + 200) - 0.5) * 80).toFixed(0)}px`,
}));

export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-bg" />
      <div className="hero-particles" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            style={
              {
                left: p.left,
                width: p.size,
                height: p.size,
                animationDuration: p.duration,
                animationDelay: p.delay,
                '--drift': p.drift,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <div className="container hero-content">
        <div className="hero-logo-wrap">
          <div className="hero-halo" aria-hidden="true" />
          <Logo width={380} className="hero-logo" priority />
        </div>
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
          <ShareButton />
        </div>
      </div>
      <a href="#chiffres" className="scroll-down" aria-label="Défiler vers le bas" />
      <HeroParallax />
    </section>
  );
}

