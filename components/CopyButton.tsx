'use client';

import { useState } from 'react';

/** Petit bouton qui copie `text` dans le presse-papiers et affiche « Copié ✓ ». */
export default function CopyButton({ text, label = 'Copier' }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Repli pour les navigateurs sans API presse-papiers
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      className={`copy-btn ${copied ? 'is-copied' : ''}`}
      onClick={onClick}
      aria-label={copied ? 'Copié' : `${label} : ${text}`}
    >
      {copied ? 'Copié ✓' : label}
      <span className="sr-only" aria-live="polite">{copied ? 'Copié dans le presse-papiers' : ''}</span>
    </button>
  );
}

