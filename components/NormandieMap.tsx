import type { CSSProperties } from 'react';
import { CITIES, NORMANDIE_OUTLINE, type CityKind } from '@/lib/content';

// Projection équirectangulaire simple (corrigée de la latitude moyenne ~49°)
const LON_MIN = -1.95;
const LAT_MAX = 50.08;
const SCALE = 200;
const COS_LAT = Math.cos((49 * Math.PI) / 180);
const PAD = 22;
const WIDTH = Math.round((1.8 - LON_MIN) * COS_LAT * SCALE + PAD * 2);
const HEIGHT = Math.round((LAT_MAX - 48.18) * SCALE + PAD * 2);

const project = (lon: number, lat: number) => ({
  x: +((lon - LON_MIN) * COS_LAT * SCALE + PAD).toFixed(1),
  y: +((LAT_MAX - lat) * SCALE + PAD).toFixed(1),
});

const OUTLINE_PATH =
  NORMANDIE_OUTLINE.map(([lon, lat], i) => {
    const { x, y } = project(lon, lat);
    return `${i ? 'L' : 'M'}${x} ${y}`;
  }).join(' ') + ' Z';

const KIND_LABEL: Record<CityKind, string> = {
  main: 'Église locale',
  connected: 'Familles connectées',
  future: 'Site à déployer',
};
const RADIUS: Record<CityKind, number> = { main: 8, connected: 6, future: 4 };
// Position de l'étiquette pour éviter les chevauchements / la mer
const LABEL_POS: Record<string, 'left' | 'top' | 'right'> = { 'Le Havre': 'left', Cherbourg: 'top', Granville: 'left', Avranches: 'left', Coutances: 'left', Fécamp: 'top' };

export default function NormandieMap() {
  return (
    <div className="map-wrap">
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="normandie-map" role="img" aria-labelledby="map-title map-desc">
        <title id="map-title">Carte de la présence d&apos;Impact Centre Chrétien en Normandie</title>
        <desc id="map-desc">
          Églises locales : Rouen, Caen, Évreux, Le Havre. Familles connectées : Cherbourg, Dieppe, Saint-Lô. Et de
          nombreux autres sites à déployer.
        </desc>
        <defs>
          <linearGradient id="mapFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2a3580" />
            <stop offset="1" stopColor="#141a45" />
          </linearGradient>
          <radialGradient id="goldDot">
            <stop offset="0" stopColor="#f7e3a1" />
            <stop offset="1" stopColor="#9c7424" />
          </radialGradient>
        </defs>

        <path d={OUTLINE_PATH} className="map-land" fill="url(#mapFill)" />

        {CITIES.map((c, i) => {
          const { x, y } = project(c.lon, c.lat);
          const r = RADIUS[c.kind];
          const pos = LABEL_POS[c.name] ?? 'right';
          const lx = pos === 'left' ? x - r - 6 : pos === 'top' ? x : x + r + 6;
          const ly = pos === 'top' ? y - r - 8 : y + 4;
          const anchor = pos === 'left' ? 'end' : pos === 'top' ? 'middle' : 'start';
          return (
            <g
              key={c.name}
              className={`map-city map-city-${c.kind}`}
              tabIndex={0}
              aria-label={`${c.name} : ${KIND_LABEL[c.kind]}`}
              style={{ '--i': i } as CSSProperties}
            >
              <title>{`${c.name} – ${KIND_LABEL[c.kind]}`}</title>
              {c.name === 'Rouen' && <circle cx={x} cy={y} r={r} className="map-pulse" />}
              <circle cx={x} cy={y} r={r + 8} className="map-hit" />
              <circle cx={x} cy={y} r={r} className="map-dot" fill={c.kind === 'main' ? 'url(#goldDot)' : undefined} />
              <text x={lx} y={ly} textAnchor={anchor} className="map-label">
                {c.name}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Liste textuelle (lecteurs d'écran et référencement) */}
      <ul className="sr-only">
        {CITIES.map((c) => (
          <li key={c.name}>
            {c.name} : {KIND_LABEL[c.kind]}
          </li>
        ))}
      </ul>
    </div>
  );
}


