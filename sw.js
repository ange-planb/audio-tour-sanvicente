const CACHE_NAME = 'audiotour-v2-smartguide';
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './main.js',
    './manifest.json',
    './logos%20PNG/logo%20audio%20tour.png',
    './logos%20PNG/icono%20audio%20tour.png',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Outfit:wght@400;600;700&display=swap'
];

// Instalar el Service Worker y pre-cachear los recursos estructurales rápidos
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened static cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Interceptar peticiones (Estrategia: Stale-While-Revalidate para interfaz, Cache-First para audios/mapas)
self.addEventListener('fetch', event => {
    const requestUrl = new URL(event.request.url);

    // Si es un audio (MP3) o imagen de Leaflet (Map Tiles), usar Cache First, luego red
    if (requestUrl.pathname.endsWith('.mp3') || requestUrl.hostname.includes('basemaps.cartocdn.com')) {
        event.respondWith(
            caches.match(event.request).then(response => {
                if (response) return response;
                return fetch(event.request).then(networkResponse => {
                    return caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                }).catch(() => null); // Si no hay red, de todas formas el MP3 falla con gracia sin romper todo.
            })
        );
        return;
    }

    // Estrategia Stale-While-Revalidate (prioridad caché rápido, pero actualiza en background)
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            const fetchPromise = fetch(event.request).then(networkResponse => {
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, networkResponse.clone());
                });
                return networkResponse;
            }).catch(() => null);

            return cachedResponse || fetchPromise;
        })
    );
});

// Limpieza de caches antiguos
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
