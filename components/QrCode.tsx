'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const SRC = '/qr-code-500-piliers.jpg';

/**
 * QR code de contribution (public/qr-code-500-piliers.jpg).
 * Un clic l'affiche en plein écran pour le scanner facilement depuis un autre téléphone.
 * Le bloc se masque si l'image n'a pas encore été ajoutée.
 */
export default function QrCode() {
  const [missing, setMissing] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Fermeture au clic sur le fond
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const onClick = (e: MouseEvent) => e.target === d && d.close();
    d.addEventListener('click', onClick);
    return () => d.removeEventListener('click', onClick);
  }, [missing]);

  if (missing) return null;

  return (
    <div className="qr-block">
      <button type="button" className="qr-trigger" onClick={() => dialogRef.current?.showModal()} aria-label="Agrandir le QR code">
        <Image
          src={SRC}
          alt="QR Code pour contribuer aux 500 Piliers"
          width={220}
          height={220}
          className="qr-img"
          onError={() => setMissing(true)}
        />
        <span className="qr-zoom" aria-hidden="true">🔍 Agrandir</span>
      </button>
      <p>Ouvrez votre appareil photo et flashez le code pour faire un don.</p>

      <dialog ref={dialogRef} className="qr-dialog" aria-label="QR code en plein écran">
        <div className="qr-dialog-inner">
          <Image src={SRC} alt="QR Code pour contribuer aux 500 Piliers" width={600} height={600} className="qr-dialog-img" />
          <p>Ouvrez votre appareil photo et flashez le code pour faire un don.</p>
          <form method="dialog">
            <button className="btn btn-gold" autoFocus>Fermer</button>
          </form>
        </div>
      </dialog>
    </div>
  );
}
