// Offline support: the whole app is one HTML file plus a few icons. After the first visit
// everything is served from the device, so it opens with no Wi-Fi or hotspot and uses no data.
// When a connection is available, a newer version is fetched quietly and used next time.
const CACHE = "nourish-v39";
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png", "./images/meals/88922.jpg", "./images/meals/90893.jpg", "./images/meals/103566.jpg", "./images/meals/218769.jpg", "./images/meals/246747.jpg", "./images/meals/262973.jpg", "./images/meals/479628.jpg", "./images/meals/543733.jpg", "./images/meals/684965.jpg", "./images/meals/775032.jpg", "./images/meals/845552.jpg", "./images/meals/1422384.jpg", "./images/meals/2092897.jpg", "./images/meals/2741457.jpg", "./images/meals/4001867.jpg", "./images/meals/4601975.jpg", "./images/meals/4955257.jpg", "./images/meals/4982431.jpg", "./images/meals/5037607.jpg", "./images/meals/5146439.jpg", "./images/meals/5446516.jpg", "./images/meals/5840082.jpg", "./images/meals/5946722.jpg", "./images/meals/6145894.jpg", "./images/meals/6341422.jpg", "./images/meals/6435266.jpg", "./images/meals/7837785.jpg", "./images/meals/7855668.jpg", "./images/meals/9213868.jpg", "./images/meals/9760214.jpg", "./images/meals/10553647.jpg", "./images/meals/12097599.jpg", "./images/meals/12737919.jpg", "./images/meals/13060695.jpg", "./images/meals/13243944.jpg", "./images/meals/15823271.jpg", "./images/meals/17486821.jpg", "./images/meals/17942033.jpg", "./images/meals/25524074.jpg", "./images/meals/28647073.jpg", "./images/meals/29653191.jpg", "./images/meals/36498703.jpg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  const key = req.mode === "navigate" ? "./index.html" : req;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(key, { ignoreSearch: true });
    const fresh = fetch(req).then(res => { if (res && res.ok) c.put(key, res.clone()); return res; }).catch(() => null);
    if (hit) { e.waitUntil(fresh); return hit; }          // cached copy first: instant and offline
    return (await fresh) || new Response("Offline and not cached yet. Open the app once with a connection.", { status: 503, headers: { "Content-Type": "text/plain" } });
  }));
});
