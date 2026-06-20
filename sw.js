/* ============================================================
   Nervless — Service Worker
   Cache strategy:
   - App shell (HTML, CSS, JS, icons): cache-first, update in background
   - API/proxy calls (ondigitalocean, supabase): network-only (never cache)
   - Everything else: network-first, fallback to cache
   ============================================================ */

const CACHE_VERSION = 'nervless-v5';
const SHELL_CACHE = CACHE_VERSION + '-shell';

// Files that make up the app shell — update CACHE_VERSION when deploying
// new versions to force a cache bust
const SHELL_FILES = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/data.js',
  '/js/logic.js',
  '/js/ui.js',
  '/js/app.js',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/icon-180.png',
  // CDN dependencies — cached on first load
  'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js'
];

// Hosts that should NEVER be served from cache (API calls, auth, recording)
const NETWORK_ONLY_HOSTS = [
  'ondigitalocean.app',
  'supabase.co',
  'googleapis.com',
  'googletagmanager.com',
  'clarity.ms',
  'tally.so'
];

// ── Install: pre-cache the shell ──
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then(cache => {
      // addAll fails if any request fails — use individual adds to be resilient
      return Promise.allSettled(
        SHELL_FILES.map(url =>
          cache.add(url).catch(err => console.warn('[SW] Failed to cache:', url, err))
        )
      );
    }).then(() => self.skipWaiting())
  );
});

// ── Activate: remove old caches ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key.startsWith('nervless-') && key !== SHELL_CACHE)
          .map(key => {
            console.log('[SW] Removing old cache:', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch: route by strategy ──
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Network-only: API endpoints and analytics — never cache these
  if (NETWORK_ONLY_HOSTS.some(host => url.hostname.includes(host))) {
    event.respondWith(fetch(event.request));
    return;
  }

  // Non-GET requests (POST to proxy etc) — network only
  if (event.request.method !== 'GET') {
    event.respondWith(fetch(event.request));
    return;
  }

  // App shell files — cache-first, update in background (stale-while-revalidate)
  const isShell = SHELL_FILES.includes(url.pathname) ||
                  SHELL_FILES.includes(event.request.url) ||
                  url.pathname === '/' ||
                  url.pathname === '/index.html';

  if (isShell) {
    event.respondWith(
      caches.open(SHELL_CACHE).then(cache =>
        cache.match(event.request).then(cached => {
          const networkFetch = fetch(event.request)
            .then(response => {
              if (response && response.status === 200) {
                cache.put(event.request, response.clone());
              }
              return response;
            })
            .catch(() => cached); // offline: serve stale

          // Serve cache immediately; update happens in background
          return cached || networkFetch;
        })
      )
    );
    return;
  }

  // Everything else — network-first, cache as fallback
  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response && response.status === 200) {
          caches.open(SHELL_CACHE).then(cache => cache.put(event.request, response.clone()));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
