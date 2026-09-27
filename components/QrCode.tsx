'use client';

import Image from 'next/image';
import { useState } from 'react';

/** Affiche public/qr-code-500-piliers.jpg ; se masque si l'image n'a pas encore été ajoutée. */
export default function QrCode() {
  const [missing, setMissing] = useState(false);
  if (missing) return null;

  return (
    <div className="qr-block">
      <Image
        src="/qr-code-500-piliers.jpg"
        alt="QR Code pour contribuer aux 500 Piliers"
        width={220}
        height={220}
        className="qr-img"
        onError={() => setMissing(true)}
      />
      <p>Ouvrez votre appareil photo et flashez le code pour faire un don.</p>
    </div>
  );
}

