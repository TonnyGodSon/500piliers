'use client';

import { useEffect, useRef, useState } from 'react';
import { SITE } from '@/lib/content';

const SHARE_TEXT =
  "Les 500 Piliers du Royaume : participons ensemble à l'acquisition du nouveau Campus Central d'Impact Centre Chrétien en Normandie !";

export default function ShareButton({ className = 'btn btn-outline' }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState<string>(SITE.url);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => setUrl(window.location.origin + window.location.pathname), []);

  // Fermeture au clic extérieur / touche Échap
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const onShare = async () => {
    // Mobile : menu de partage natif du téléphone
    if (typeof navigator.share === 'function' && window.matchMedia('(pointer: coarse)').matches) {
      try {
        await navigator.share({ title: SITE.name, text: SHARE_TEXT, url });
      } catch {
        /* partage annulé */
      }
      return;
    }
    setOpen((o) => !o);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* presse-papiers indisponible */
    }
  };

  const enc = encodeURIComponent;
  const links = [
    { label: 'WhatsApp', icon: '💬', href: `https://wa.me/?text=${enc(`${SHARE_TEXT} ${url}`)}` },
    { label: 'Facebook', icon: '📘', href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}` },
    { label: 'SMS', icon: '✉️', href: `sms:?&body=${enc(`${SHARE_TEXT} ${url}`)}` },
    { label: 'E-mail', icon: '📧', href: `mailto:?subject=${enc(SITE.name)}&body=${enc(`${SHARE_TEXT}\n\n${url}`)}` },
  ];

  return (
    <div className="share" ref={wrapRef}>
      <button type="button" className={className} onClick={onShare} aria-expanded={open} aria-haspopup="true">
        <span aria-hidden="true">🔗</span> Partager
      </button>
      {open && (
        <div className="share-menu" role="menu">
          {links.map((l) => (
            <a key={l.label} role="menuitem" href={l.href} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              <span aria-hidden="true">{l.icon}</span> {l.label}
            </a>
          ))}
          <button type="button" role="menuitem" onClick={copy}>
            <span aria-hidden="true">{copied ? '✅' : '📋'}</span> {copied ? 'Lien copié !' : 'Copier le lien'}
          </button>
        </div>
      )}
    </div>
  );
}

