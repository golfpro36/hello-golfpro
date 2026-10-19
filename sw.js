// service worker แบบง่ายที่สุด: เก็บไฟล์ไว้ในเครื่อง เปิดได้แม้สัญญาณหาย
const CACHE = 'hello-golfpro-v2';
const FILES = ['./', 'index.html', 'manifest.json', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
