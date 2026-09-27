/* Service worker – Les 500 Piliers du Royaume
 * - Pages : réseau d'abord (contenu toujours à jour), cache en secours hors connexion
 * - Fichiers statiques (_next, images, polices) : cache d'abord
 */
const CACHE = '500piliers-v2';
// Chemins relatifs à l'emplacement du service worker (fonctionne aussi sous /500piliers/ sur GitHub Pages)
const BASE = new URL('./', self.location).pathname;
const HOME = BASE;
const PRECACHE = [HOME, `${BASE}manifest.webmanifest`, `${BASE}logo-500-piliers-800.webp`, `${BASE}logo-500-piliers-400.webp`];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return; // liens de don, polices externes… : non interceptés

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(request, copy));
          return res;
        })
        .catch(() => caches.match(request).then((r) => r || caches.match(HOME))),
    );
    return;
  }

  if (/\.(?:js|css|webp|png|jpg|jpeg|svg|woff2?)$/.test(url.pathname) || url.pathname.includes('/_next/')) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((res) => {
            if (res.ok) {
              const copy = res.clone();
              caches.open(CACHE).then((c) => c.put(request, copy));
            }
            return res;
          }),
      ),
    );
  }
});

