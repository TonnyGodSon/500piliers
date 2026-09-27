'use client';

import { useEffect, useState } from 'react';

/**
 * - Ordinateur : bouton flottant « Contribuer » + bouton « Retour en haut »
 * - Mobile : barre fixe en bas « Contribuer par carte » (un clic) + retour en haut
 * Masqués dans la section « Comment contribuer ? » pour ne pas faire doublon.
 */
export default function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const contribute = document.getElementById('contribuer');
      const pastHero = window.scrollY > window.innerHeight * 0.8;
      let inContribute = false;
      if (contribute) {
        const r = contribute.getBoundingClientRect();
        inContribute = r.top < window.innerHeight * 0.6 && r.bottom > window.innerHeight * 0.4;
      }
      setVisible(pastHero && !inContribute);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const tab = visible ? 0 : -1;

  return (
    <>
      <div className={`floating-actions ${visible ? 'visible' : ''}`} aria-hidden={!visible}>
        <button type="button" className="to-top" onClick={toTop} aria-label="Retour en haut de la page" tabIndex={tab}>
          ↑
        </button>
        <a href="#contribuer" className="floating-cta" tabIndex={tab}>
          Contribuer
        </a>
      </div>

      <div className={`mobile-bar ${visible ? 'visible' : ''}`} aria-hidden={!visible}>
        <a href="#paiement-cb" className="btn btn-gold mobile-bar-cta" tabIndex={tab}>
          💳 Contribuer par carte
        </a>
        <button type="button" className="mobile-bar-top" onClick={toTop} aria-label="Retour en haut de la page" tabIndex={tab}>
          ↑
        </button>
      </div>
    </>
  );
}
