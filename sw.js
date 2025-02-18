self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("acdclock-cache").then((cache) => {
      return cache.addAll([
        "https://iamsdbhosale.github.io/HumanRobot/acdclockd.html"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
