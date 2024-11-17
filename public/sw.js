const cachName1='faradarsCaches';
const dynamicCache='dynamicCache';
const assets=[

    '/',
    
    'index.html',
    '/static/js/bundle.js',
    '/pages/page.html'

]
self.addEventListener("install",function(event){
   event.waitUntil(
       caches.open(cachName1).then(
           cache=>cache.addAll(assets)

       ).catch(err=>console.log(err))
   )
});


self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.open(dynamicCache)
            .then(function(cache) {
                cache.match(event.request)
                    .then( function(cacheResponse) {
                        fetch(event.request)
                            .then(function(networkResponse) {
                                cache.put(event.request, networkResponse)
                            })
                        return cacheResponse || networkResponse
                    })
            })
    )
});

self.addEventListener("fetch",function(event){
    const request=event.request
    event.respondWith(
    fetch(event.request).then(function(res){
        return caches.open(dynamicCache).then(function(cache){
            cache.put(event.request.url,res.clone())
            return res
        })
    })
    .catch(function(err){
        // debugger
        return caches.match("/pages/page.html")
    })
    
    )
    
    
    
    
    
    })
    
// self.addEventListener("fetch", (event) => {
//     // Let the browser do its default thing
//     // for non-GET requests.
//     if (event.request.method !== "GET") return;
  
//     // Prevent the default, and handle the request ourselves.
//     event.respondWith(
//       (async () => {
//         // Try to get the response from a cache.
//         const cache = await caches.open("faradarsCaches");
//         const cachedResponse = await cache.match(event.request);
  
//         if (cachedResponse) {
//           // If we found a match in the cache, return it, but also
//           // update the entry in the cache in the background.
//           event.waitUntil(cache.add(event.request));
//           return cachedResponse;
//         }
  
//         // If we didn't find a match in the cache, use the network.
//         // return fetch(event.request);
//       })()
//     );
//   });