const CACHE_NAME = 'flicker-tv-v1';
const ASSETS_TO_CACHE = [
  '/FLICKER/index.html',
  '/FLICKER/styles.css',
  '/FLICKER/global.js',
  '/FLICKER/icons/icon-192x192.png',
  '/FLICKER/icons/icon-512x512.png',
  '/FLICKER/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .catch(err => console.log('Error al cachear:', err))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
