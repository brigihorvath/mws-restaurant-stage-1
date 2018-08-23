
//Install cache and add all the files to it
self.addEventListener('install', (event) => {
  var urlsToCache = [
    '/',
    'restaurant.html',
	'index.html',
	'css/styles.css',
	'js/main.js',
	'js/dbhelper.js',
	'js/restaurant_info.js',
	'/data/restaurants.json',
	'img/1.jpg',
	'img/2.jpg',
	'img/3.jpg',
	'img/4.jpg',
	'img/5.jpg',
	'img/6.jpg',
	'img/7.jpg',
	'img/8.jpg',
	'img/9.jpg',
	'img/10.jpg'
  ];
  event.waitUntil(
  	caches.open('mws-static-v1').then((cache) => {
  		return cache.addAll(urlsToCache);
  	})
  	);
});

//fetch the files from the cache
self.addEventListener('fetch', function(event) {
  event.respondWith(
  	caches.match(event.request).then( (response) =>{
  		if(response) return response;
  		return fetch(event.request);
  	})
  	);
});