'use client';

import { useEffect } from 'react';
import { asset } from '@/lib/paths';

/** Enregistre le service worker (uniquement en production, pour ne pas gêner le développement). */
export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production' || !('serviceWorker' in navigator)) return;
    const register = () => navigator.serviceWorker.register(asset('/sw.js'), { scope: asset('/') }).catch(() => {});
    if (document.readyState === 'complete') register();
    else window.addEventListener('load', register, { once: true });
  }, []);

  return null;
}

