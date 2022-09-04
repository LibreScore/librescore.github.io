const build = [
  "/_app/immutable/start-12d12010.js",
  "/_app/immutable/pages/__layout.svelte-7e940dc5.js",
  "/_app/immutable/error.svelte-c7f2338a.js",
  "/_app/immutable/pages/index.svelte-88d33adb.js",
  "/_app/immutable/assets/pages/index.svelte-3d9eaf0f.css",
  "/_app/immutable/chunks/index-859c72d3.js",
  "/_app/immutable/chunks/preload-helper-22552618.js",
  "/_app/immutable/chunks/SelectionGroupIcon-0503445d.js",
  "/_app/immutable/chunks/ar-68d3a43c.js",
  "/_app/immutable/chunks/en-e860c338.js",
  "/_app/immutable/chunks/hu-a5bb6806.js",
  "/_app/immutable/chunks/ru-ec5291ac.js",
  "/_app/immutable/chunks/zh-Hans-89b45a6b.js"
];
const files = [
  "/favicon.png",
  "/librescore1024.png",
  "/librescore128.png",
  "/librescore144.png",
  "/librescore16.png",
  "/librescore168.png",
  "/librescore192-apple.png",
  "/librescore192.png",
  "/librescore256.png",
  "/librescore32.png",
  "/librescore48.png",
  "/librescore512.png",
  "/librescore64.png",
  "/librescore72.png",
  "/librescore96.png",
  "/manifest.webmanifest",
  "/smui-dark.css",
  "/smui.css"
];
const version = "1662256515333";
const worker = self;
const ASSETS = `cache${version}`;
const to_cache = build.concat(files);
const staticAssets = new Set(to_cache);
worker.addEventListener("install", (event) => {
  event.waitUntil(caches.open(ASSETS).then((cache) => cache.addAll(to_cache)).then(() => {
    worker.skipWaiting();
  }));
});
worker.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then(async (keys) => {
    for (const key of keys) {
      if (key !== ASSETS)
        await caches.delete(key);
    }
    worker.clients.claim();
  }));
});
async function fetchAndCache(request) {
  const cache = await caches.open(`offline${version}`);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (err) {
    const response = await cache.match(request);
    if (response)
      return response;
    throw err;
  }
}
worker.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || event.request.headers.has("range"))
    return;
  const url = new URL(event.request.url);
  const isHttp = url.protocol.startsWith("http");
  const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
  const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
  const skipBecauseUncached = event.request.cache === "only-if-cached" && !isStaticAsset;
  if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
    event.respondWith((async () => {
      const cachedAsset = isStaticAsset && await caches.match(event.request);
      return cachedAsset || fetchAndCache(event.request);
    })());
  }
});
