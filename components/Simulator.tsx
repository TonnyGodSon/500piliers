'use client';

import { useState } from 'react';
import { PILIER_AMOUNT, formatEuro, round2 } from '@/lib/content';
import { prefillPledge } from '@/lib/events';

const MIN = 1;
const MAX = 50;
const clamp = (n: number) => Math.min(MAX, Math.max(MIN, n));

export default function Simulator() {
  const [piliers, setPiliers] = useState(1);
  const total = piliers * PILIER_AMOUNT;

  return (
    <div className="simulator reveal">
      <h3>Simulez votre engagement</h3>
      <div className="sim-controls">
        <label htmlFor="simPiliers">Nombre de piliers</label>
        <div className="sim-stepper">
          <button type="button" aria-label="Retirer un pilier" onClick={() => setPiliers((p) => clamp(p - 1))}>
            −
          </button>
          <input
            id="simPiliers"
            type="number"
            min={MIN}
            max={MAX}
            value={piliers}
            onChange={(e) => setPiliers(clamp(parseInt(e.target.value, 10) || MIN))}
          />
          <button type="button" aria-label="Ajouter un pilier" onClick={() => setPiliers((p) => clamp(p + 1))}>
            +
          </button>
        </div>
      </div>
      <div className="sim-results" aria-live="polite">
        <div>
          <span key={`t${total}`} className="sim-pop">
            {formatEuro(total)}
          </span>
          <small>au total</small>
        </div>
        <div>
          <span key={`m${total}`} className="sim-pop">
            {formatEuro(round2(total / 12))}
          </span>
          <small>par mois sur 12 mois</small>
        </div>
        <div>
          <span key={`q${total}`} className="sim-pop">
            {formatEuro(total / 4)}
          </span>
          <small>par trimestre</small>
        </div>
      </div>
      <button type="button" className="btn btn-gold sim-cta" onClick={() => prefillPledge(total)}>
        Je m&apos;engage pour {formatEuro(total)}
      </button>
    </div>
  );
}
