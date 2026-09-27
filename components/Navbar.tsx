'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';
import { NAV_LINKS } from '@/lib/content';

// Toutes les sections, dans l'ordre de la page (celles hors menu désactivent le surlignage)
const SECTION_IDS = ['accueil', 'chiffres', 'projet', 'campus', 'icc-normandie', 'attentes', 'avancement', 'contribuer', 'engagement'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 40);
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);

      // Section active = dernière section dont le haut a dépassé le tiers de l'écran
      const line = window.innerHeight / 3;
      let current = '';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      // « engagement » est rattaché au bouton Contribuer
      setActive(current === 'engagement' ? 'contribuer' : current);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled || open ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#accueil" className="brand" onClick={close}>
          <Logo width={72} className="brand-logo" priority />
          <span>
            <strong>500 Piliers</strong>
            <small>ICC Normandie</small>
          </span>
        </a>
        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Navigation principale">
          {NAV_LINKS.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a key={l.href} href={l.href} onClick={close} className={isActive ? 'active' : undefined} aria-current={isActive ? 'location' : undefined}>
                {l.label}
              </a>
            );
          })}
          <a href="#contribuer" className={`btn btn-gold btn-sm ${active === 'contribuer' ? 'active' : ''}`} onClick={close}>
            Je contribue
          </a>
        </nav>
      </div>
      <div className="read-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
    </header>
  );
}
