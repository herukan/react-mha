"use strict";var precacheConfig=[["https://reduction-admin.github.io/react-reduction/index.html","0facd15a133b034083794c5ea41df142"],["https://reduction-admin.github.io/react-reduction/static/css/main.29ac668d.css","e85d4a9dbb065213ea2f4f501f8b087f"],["https://reduction-admin.github.io/react-reduction/static/js/0.1a12d9f1.chunk.js","e95993aecaa86112245fc8ad3ec30933"],["https://reduction-admin.github.io/react-reduction/static/js/main.30c004dd.js","898f80c3f353e17a6814fb84b198aaa9"],["https://reduction-admin.github.io/react-reduction/static/media/100_1.1f7beca5.jpg","1f7beca5bf4cda1803cd59cd881c372d"],["https://reduction-admin.github.io/react-reduction/static/media/100_10.56d054ff.jpg","56d054ffdf15ac516d7ba19fa9a33ad5"],["https://reduction-admin.github.io/react-reduction/static/media/100_11.336faadc.jpg","336faadc989ea15bbe2c0fb30e20bcd7"],["https://reduction-admin.github.io/react-reduction/static/media/100_12.1e0889af.jpg","1e0889afa5d1fa653fef4f8b5d3272d2"],["https://reduction-admin.github.io/react-reduction/static/media/100_13.63265e92.jpg","63265e929c9f7442ea1853d2dc19a188"],["https://reduction-admin.github.io/react-reduction/static/media/100_14.595b8cbd.jpg","595b8cbdd2b7f27cf7d38b895a9b56c9"],["https://reduction-admin.github.io/react-reduction/static/media/100_2.82e7c41e.jpg","82e7c41e073394f808fd382c97e71884"],["https://reduction-admin.github.io/react-reduction/static/media/100_3.6e25d86d.jpg","6e25d86d33b97ab231889fd4a38530b4"],["https://reduction-admin.github.io/react-reduction/static/media/100_4.978e51b5.jpg","978e51b554db00a67e2796661b3526fe"],["https://reduction-admin.github.io/react-reduction/static/media/100_5.fd533725.jpg","fd53372585bf0ef377e97ee9dd7ea925"],["https://reduction-admin.github.io/react-reduction/static/media/100_6.de882536.jpg","de88253696b81598494dd6bd5c0b087e"],["https://reduction-admin.github.io/react-reduction/static/media/100_7.1dce100f.jpg","1dce100ffdb944226acf9db666a57319"],["https://reduction-admin.github.io/react-reduction/static/media/100_8.a4be0bbf.jpg","a4be0bbf3a08f9de24548aa6765af93f"],["https://reduction-admin.github.io/react-reduction/static/media/100_9.798c02eb.jpg","798c02eb53d02e11c3d8a6588cdf5033"],["https://reduction-admin.github.io/react-reduction/static/media/background_1920-11.b7f68e8a.jpg","b7f68e8afaec5bfad8fdcc44e4e4e483"],["https://reduction-admin.github.io/react-reduction/static/media/background_1920-18.acfe7046.jpg","acfe7046f47d96b9cb598622e50fe610"],["https://reduction-admin.github.io/react-reduction/static/media/background_1920-19.22fc19f2.jpg","22fc19f2c02f7dba20864f097f0bfd20"],["https://reduction-admin.github.io/react-reduction/static/media/background_1920-2.c54eef50.jpg","c54eef50718560d1268aa8e92025972d"],["https://reduction-admin.github.io/react-reduction/static/media/background_1920-5.1d98ff2e.jpg","1d98ff2e44d70e391ec7a49e4efdfa86"],["https://reduction-admin.github.io/react-reduction/static/media/background_1920-6.1e0eb550.jpg","1e0eb5503400ca7f2a65175cec9e9115"],["https://reduction-admin.github.io/react-reduction/static/media/background_1920-7.abf47fc1.png","abf47fc19906e17185a37765e7594ee0"],["https://reduction-admin.github.io/react-reduction/static/media/background_640-1.1420d15b.jpg","1420d15b22ed3f39abc468212d735814"],["https://reduction-admin.github.io/react-reduction/static/media/background_640-3.55e47e98.jpg","55e47e98ef3c84cf5eb4706a4c74311a"],["https://reduction-admin.github.io/react-reduction/static/media/logo_200.b175e1c4.png","b175e1c4790112fe609a0f3279e8535d"],["https://reduction-admin.github.io/react-reduction/static/media/product_640-1.a9a0ec64.jpg","a9a0ec6482226ea8098fc71a3fababe0"],["https://reduction-admin.github.io/react-reduction/static/media/product_640-2.da0b0457.jpg","da0b0457353c6555a5ba4535597f2187"],["https://reduction-admin.github.io/react-reduction/static/media/product_640-3.64ed27c9.jpg","64ed27c9aca0306b4185b82e144cdedd"],["https://reduction-admin.github.io/react-reduction/static/media/product_640-4.2110d8cd.jpg","2110d8cd7d70f6792b4c2d517cb7f593"],["https://reduction-admin.github.io/react-reduction/static/media/product_640-5.bf8840bd.jpg","bf8840bd88a80c14418b238a7f1beb24"],["https://reduction-admin.github.io/react-reduction/static/media/product_640-6.f9249755.jpg","f9249755162af20121af258ca1ffc578"],["https://reduction-admin.github.io/react-reduction/static/media/sidebar-4.80d4a4e5.jpg","80d4a4e5af9b6cf3882e4a34c5497542"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,i){var c=new URL(e);return i&&c.pathname.match(i)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],i=new URL(t,self.location),c=createCacheKey(i,hashParamName,a,/\.\w{8}\./);return[i.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(i){return setOfCachedUrls(i).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return i.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),i="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,i),e=urlsToCacheKeys.has(a));var c="https://reduction-admin.github.io/react-reduction/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});