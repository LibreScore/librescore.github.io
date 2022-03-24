const build = [
  "/_app/start-9b44dda0.js",
  "/_app/pages/__layout.svelte-227c4612.js",
  "/_app/error.svelte-2f1d340c.js",
  "/_app/pages/index.svelte-0ad2ed26.js",
  "/_app/assets/pages/index.svelte-3d9eaf0f.css",
  "/_app/chunks/vendor-e2d7103b.js",
  "/_app/chunks/preload-helper-e4860ae8.js",
  "/_app/chunks/i18n-3ba68693.js",
  "/_app/chunks/en-8b5e0baa.js",
  "/_app/chunks/fr-1f09aae7.js",
  "/_app/chunks/ar-5cd39bc3.js",
  "/_app/chunks/es-70319a01.js",
  "/_app/chunks/it-953ce87f.js",
  "/_app/chunks/ja-1c2ba3b4.js",
  "/_app/chunks/ko-b467ae17.js",
  "/_app/chunks/ru-5e5e7134.js",
  "/_app/chunks/zh_Hans-f1b24eff.js"
];
const files = [
  "/favicon.png",
  "/librescore128.png",
  "/librescore144.png",
  "/librescore16.png",
  "/librescore168.png",
  "/librescore192.png",
  "/librescore256.png",
  "/librescore32.png",
  "/librescore48.png",
  "/librescore64.png",
  "/librescore72.png",
  "/librescore96.png",
  "/manifest.json",
  "/smui-dark.css",
  "/smui.css"
];
const version = "1648160336890";
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
