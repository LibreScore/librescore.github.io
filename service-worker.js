const u = [
  "/_app/immutable/assets/_page-54f4d176.css",
  "/_app/immutable/chunks/singletons-3cea09d3.js",
  "/_app/immutable/components/pages/_layout.svelte-728a8bf5.js",
  "/_app/immutable/start-895d5362.js",
  "/_app/immutable/chunks/_layout-e4a84b88.js",
  "/_app/immutable/chunks/SelectionGroupIcon-b5ff4833.js",
  "/_app/immutable/chunks/2-aef9bdc6.js",
  "/_app/immutable/components/error.svelte-71222c5a.js",
  "/_app/immutable/chunks/ar-7c34a115.js",
  "/_app/immutable/chunks/en-9ca66af2.js",
  "/_app/immutable/chunks/0-508f1dff.js",
  "/_app/immutable/chunks/hu-675aba04.js",
  "/_app/immutable/chunks/1-6328ce10.js",
  "/_app/immutable/modules/pages/_layout.ts-e4e26074.js",
  "/_app/immutable/chunks/i18n-f3fae792.js",
  "/_app/immutable/chunks/cs-776e3f5a.js",
  "/_app/immutable/chunks/zh-Hans-eecbd39c.js",
  "/_app/immutable/chunks/ru-3c9429db.js",
  "/_app/immutable/chunks/index-06b9bfde.js",
  "/_app/immutable/components/pages/_page.svelte-e7cbeb2e.js"
], r = [
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
], l = "1674379201795", n = (
  /** @type {ServiceWorkerGlobalScope} */
  /** @type {unknown} */
  self
), i = `cache-${l}`, p = [
  ...u,
  // the app itself
  ...r
  // everything in `static`
];
n.addEventListener("install", (e) => {
  async function s() {
    await (await caches.open(i)).addAll(p);
  }
  e.waitUntil(s());
});
n.addEventListener("activate", (e) => {
  async function s() {
    for (const a of await caches.keys())
      a !== i && await caches.delete(a);
  }
  e.waitUntil(s());
});
n.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET")
    return;
  async function s() {
    const a = new URL(e.request.url), c = await caches.open(i);
    if (p.includes(a.pathname))
      return c.match(e.request);
    try {
      if (await c.match(e.request))
        return c.match(e.request);
    } catch {
      const t = await fetch(e.request);
      return t.status === 200 && c.put(e.request, t.clone()), t;
    }
  }
  e.respondWith(s());
});
