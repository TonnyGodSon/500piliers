'use client';

import { useEffect, useState } from 'react';

export default function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const contribute = document.getElementById('contribuer');
      const pastHero = window.scrollY > window.innerHeight * 0.8;
      let inContribute = false;
      if (contribute) {
        const r = contribute.getBoundingClientRect();
        inContribute = r.top < window.innerHeight && r.bottom > 0;
      }
      setVisible(pastHero && !inContribute);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a href="#contribuer" className={`floating-cta ${visible ? 'visible' : ''}`} aria-hidden={!visible} tabIndex={visible ? 0 : -1}>
      Contribuer
    </a>
  );
}

