'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';
import { NAV_LINKS } from '@/lib/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled || open ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#accueil" className="brand" onClick={close}>
          <Logo width={72} className="brand-logo" />
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
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#contribuer" className="btn btn-gold btn-sm" onClick={close}>
            Contribuer
          </a>
        </nav>
      </div>
    </header>
  );
}

