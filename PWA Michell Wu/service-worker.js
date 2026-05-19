const CACHE_NAME = "aquareef-cache-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./data.json",
  "./manifest.json",

  "./images/ocean-header.svg",
  "./images/sea-turtle.jpg",
  "./images/dolphin.jpg",
  "./images/octopus.jpg",
  "./images/jellyfish.jpg"
];

/* INSTALL */
self.addEventListener("install", (event) => {

  event.waitUntil(

    caches.open(CACHE_NAME).then((cache) => {

      return cache.addAll(FILES_TO_CACHE);

    })

  );

});

/* FETCH */
self.addEventListener("fetch", (event) => {

  event.respondWith(

    caches.match(event.request).then((response) => {

      return response || fetch(event.request);

    })

  );

});