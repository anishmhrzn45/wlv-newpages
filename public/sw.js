const CACHE_NAME = 'webliveview-v2';
const ASSETS = [
  '/pages/index.html',
  '/pages/about.html',
  '/pages/signup.html',
  '/pages/contact.html',
  '/pages/pricing.html',
  '/pages/use-cases.html',
  '/pages/privacy-policy.html',
  '/pages/terms-of-service.html',
  '/pages/company-register.html',
  '/pages/styles.css',
  '/pages/webliveview-logo-new.png',
  '/pages/webliveview-logo-white.png',
  '/pages/hero-image.jpg',
  '/pages/furniture-demo.png',
  '/pages/kitchen-demo.png',
  '/pages/electronics-demo.png',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap'
];

// Install event - cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching app assets');
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).then((fetchResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        });
      });
    }).catch(() => {
      // Return offline fallback page if available
      if (event.request.mode === 'navigate') {
        return caches.match('/pages/index.html');
      }
    })
  );
});
