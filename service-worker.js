const u = [
  "/_app/immutable/assets/_page-54f4d176.css",
  "/_app/immutable/chunks/0-bbe47889.js",
  "/_app/immutable/chunks/1-79577567.js",
  "/_app/immutable/components/error.svelte-6f16e1f8.js",
  "/_app/immutable/chunks/ru-42354080.js",
  "/_app/immutable/chunks/zh-Hans-e667d761.js",
  "/_app/immutable/chunks/hu-fcfc9ecd.js",
  "/_app/immutable/chunks/en-e367763e.js",
  "/_app/immutable/chunks/cs-4c70b26b.js",
  "/_app/immutable/modules/pages/_layout.ts-e4e26074.js",
  "/_app/immutable/chunks/2-48e1903d.js",
  "/_app/immutable/chunks/_layout-e4a84b88.js",
  "/_app/immutable/components/pages/_layout.svelte-ec939344.js",
  "/_app/immutable/chunks/i18n-b80577d8.js",
  "/_app/immutable/chunks/ar-1fce2521.js",
  "/_app/immutable/chunks/index-06b9bfde.js",
  "/_app/immutable/chunks/singletons-886c71d9.js",
  "/_app/immutable/start-56bd996a.js",
  "/_app/immutable/chunks/SelectionGroupIcon-b5ff4833.js",
  "/_app/immutable/components/pages/_page.svelte-568c3217.js"
], l = [
  "/MS_Basic.sf3",
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
], r = "1678580934679", n = (
  /** @type {ServiceWorkerGlobalScope} */
  /** @type {unknown} */
  self
), p = `cache-${r}`, i = [
  ...u,
  // the app itself
  ...l
  // everything in `static`
];
n.addEventListener("install", (e) => {
  async function s() {
    await (await caches.open(p)).addAll(i);
  }
  e.waitUntil(s());
});
n.addEventListener("activate", (e) => {
  async function s() {
    for (const a of await caches.keys())
      a !== p && await caches.delete(a);
  }
  e.waitUntil(s());
});
n.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET")
    return;
  async function s() {
    const a = new URL(e.request.url), c = await caches.open(p);
    if (i.includes(a.pathname))
      return c.match(e.request);
    try {
      const t = await fetch(e.request);
      return t.status === 200 && c.put(e.request, t.clone()), t;
    } catch {
      return c.match(e.request);
    }
  }
  e.respondWith(s());
});
