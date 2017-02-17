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

// self.addEventListener('install', function(event) {
//     self.skipWaiting();
//
//     event.waitUntil(
//         caches.open('dvs-static-v1').then(function(cache) {
//             //vendor.js is not required for the install as it only exists in development
//             cache.addAll([
//                 'vendor.js'
//             ]);
//
//             return cache.addAll([
//                 '/',
//                 '/app.js',
//                 '/favicon.ico',
//                 '/global.css',
//                 '/global.js',
//                 '/fonts/icomoon.eot?hww2if',
//                 '/fonts/icomoon.svg?hww2if',
//                 '/fonts/icomoon.ttf?hww2if',
//                 '/fonts/icomoon.wott?hww2if',
//                 '/img/scratch-curve.svg',
//                 '/img/smooth-curve.svg'
//             ]);
//         })
//     );
// });
//
// self.addEventListener('activate', function(event) {
//     event.waitUntil(self.clients.claim());
// });
//
// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//         caches.match(event.request).then(function(response) {
//             console.log('test2');
//             return response || fetch(event.request);
//         })
//     );
// });

// Load from cache then update with network request.
// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//         caches.open('dvs-static').then(function(cache) {
//             //Find a matching response if it is in the cache. The will resolve with undefined if
//             //there is no response in the cache
//             return cache.match(event.request).then(function(response) {
//                 var fetchPromise = fetch(event.request).then(function(networkResponse) {
//                     if(cacheUrl(event.request.url)) {
//                         //If etags don't match post a message to the user that there are new features
//                         //response.headers.get('etag') === networkResponse.headers.get('etag');
//                         cache.put(event.request, networkResponse.clone());
//                     }
//                     return networkResponse;
//                 });
//                 return response || fetchPromise;
//             })
//         })
//     );
// });
//
// function cacheUrl(url) {
//     if(url.indexOf('browser-sync') > -1) {
//         return false;
//     }
//
//     if(url.indexOf('sw.js') > -1) {
//         return false;
//     }
//
//     return true;
// }