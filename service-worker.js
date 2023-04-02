const u = [
  "/_app/immutable/assets/_page-54f4d176.css",
  "/_app/immutable/chunks/index-06b9bfde.js",
  "/_app/immutable/chunks/singletons-886c71d9.js",
  "/_app/immutable/modules/pages/_layout.ts-e4e26074.js",
  "/_app/immutable/components/pages/_layout.svelte-1c8abdef.js",
  "/_app/immutable/chunks/cs-c1e9f59b.js",
  "/_app/immutable/chunks/zh-Hans-13150fb1.js",
  "/_app/immutable/chunks/i18n-aa9fd378.js",
  "/_app/immutable/start-12b98c91.js",
  "/_app/immutable/chunks/zh-Hant-79f99e59.js",
  "/_app/immutable/chunks/_layout-e4a84b88.js",
  "/_app/immutable/chunks/en-0ebedb5d.js",
  "/_app/immutable/chunks/hu-4ebb5507.js",
  "/_app/immutable/chunks/ru-5f7b907e.js",
  "/_app/immutable/chunks/ar-faba7b51.js",
  "/_app/immutable/components/error.svelte-6f16e1f8.js",
  "/_app/immutable/chunks/1-79577567.js",
  "/_app/immutable/chunks/2-3fc32f1e.js",
  "/_app/immutable/chunks/0-8e7406a0.js",
  "/_app/immutable/chunks/SelectionGroupIcon-b5ff4833.js",
  "/_app/immutable/components/pages/_page.svelte-69954f06.js"
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
], r = "1680395272344", n = (
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
    const a = new URL(e.request.url), t = await caches.open(p);
    if (i.includes(a.pathname))
      return t.match(e.request);
    try {
      const c = await fetch(e.request);
      return c.status === 200 && t.put(e.request, c.clone()), c;
    } catch {
      return t.match(e.request);
    }
  }
  e.respondWith(s());
});
