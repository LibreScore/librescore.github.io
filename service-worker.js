const l = [
  "/_app/immutable/assets/_page-54f4d176.css",
  "/_app/immutable/chunks/index-7bdd31c0.js",
  "/_app/immutable/chunks/preload-helper-41c905a7.js",
  "/_app/immutable/chunks/singletons-76e6fa62.js",
  "/_app/immutable/chunks/ar-7c34a115.js",
  "/_app/immutable/chunks/cs-776e3f5a.js",
  "/_app/immutable/chunks/en-9ca66af2.js",
  "/_app/immutable/chunks/2-6ca76b54.js",
  "/_app/immutable/chunks/1-0475092b.js",
  "/_app/immutable/modules/pages/_layout.ts-e4e26074.js",
  "/_app/immutable/components/pages/_layout.svelte-f03cd1bc.js",
  "/_app/immutable/chunks/hu-675aba04.js",
  "/_app/immutable/chunks/zh-Hans-eecbd39c.js",
  "/_app/immutable/chunks/ru-3c9429db.js",
  "/_app/immutable/chunks/_layout-e4a84b88.js",
  "/_app/immutable/chunks/0-124f5568.js",
  "/_app/immutable/start-eebc9735.js",
  "/_app/immutable/components/error.svelte-84b66d8e.js",
  "/_app/immutable/chunks/SelectionGroupIcon-6d755f59.js",
  "/_app/immutable/components/pages/_page.svelte-ffcb3639.js"
], u = [
  "/MS Basic.sf3",
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
], i = "1673776394548", t = self, p = `cache${i}`, o = l.concat(u), m = new Set(o);
t.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(p).then((s) => s.addAll(o)).then(() => {
      t.skipWaiting();
    })
  );
});
t.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (s) => {
      for (const a of s)
        a !== p && await caches.delete(a);
      t.clients.claim();
    })
  );
});
async function h(e) {
  const s = await caches.open(`offline${i}`);
  try {
    const a = await fetch(e);
    return s.put(e, a.clone()), a;
  } catch (a) {
    const c = await s.match(e);
    if (c)
      return c;
    throw a;
  }
}
t.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const s = new URL(e.request.url), a = s.protocol.startsWith("http"), c = s.hostname === self.location.hostname && s.port !== self.location.port, n = s.host === self.location.host && m.has(s.pathname), r = e.request.cache === "only-if-cached" && !n;
  a && !c && !r && e.respondWith(
    (async () => n && await caches.match(e.request) || h(e.request))()
  );
});
