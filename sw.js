const CACHE_NAME = 'ddd-system-v1';
const urlsToCache = [
  './DDD_system.html',
  './manifest.json'
  // 若有其他CSS/JS文件，也请添加进来
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});