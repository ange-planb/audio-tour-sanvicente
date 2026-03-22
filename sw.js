const CACHE_NAME = 'audio-tour-sanvicente-v1';
const urlsToCache = [
    '/',
    '/index.html',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

// Instalación: cachear recursos estáticos
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
    self.skipWaiting();
});

// Activación: limpiar caches antiguos
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(name => name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            );
        })
    );
    self.clients.claim();
});

// Fetch: estrategia Cache First, luego Network
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);
    
    // Para audios: cachear dinámicamente
    if (url.pathname.includes('.mp3') || url.pathname.includes('.mp4') || url.pathname.includes('.wav')) {
        event.respondWith(cacheAudio(request));
        return;
    }
    
    // Para otros recursos: cache first
    event.respondWith(
        caches.match(request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(request).then(response => {
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(request, responseToCache);
                    });
                    return response;
                });
            })
    );
});

// Estrategia especial para audios: cachear para offline
async function cacheAudio(request) {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    
    if (cached) {
        return cached;
    }
    
    try {
        const response = await fetch(request);
        if (response.status === 200) {
            cache.put(request, response.clone());
        }
        return response;
    } catch (error) {
        // Si no hay conexión y no está en cache, devolver error silencioso
        console.log('Audio no disponible offline:', request.url);
        return new Response('', { status: 404 });
    }
}