const CACHE_NAME = 'vokabel-v1';
const ASSETS = ['./', './index.html', './manifest.json', './sw.js', 'https://img.icons8.com/ios-filled/512/ffffff/abc-block.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => e.waitUntil(clients.claim()));

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
