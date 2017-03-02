self.addEventListener('install', function(event) {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        fetch(event.request)
            .then(function (response) {
                if (cacheUrl(event.request.url)) {
                    var responseForCache = response.clone();
                    caches.open('dvs-static-v1').then(function(cache) {
                        cache.put(event.request, responseForCache);
                    });
                }
                return response;
            })
            .catch(function () {
                return caches.match(event.request);
            })
    );
});

function cacheUrl(url) {
    if (url.indexOf('browser-sync') > -1) {
        return false;
    }

    if (url.indexOf('sw.js') > -1) {
        return false;
    }

    return true;
}