/* Service worker – Arancel de Honorarios La Paz
 *
 * Subir VERSION cada vez que cambies archivos del proyecto para que
 * los teléfonos ya instalados descarguen la versión nueva.
 */
const VERSION = "v3";
const SHELL_CACHE = `arancel-shell-${VERSION}`;
const FONT_CACHE = "arancel-fonts-v1";
const FONT_HOSTS = new Set(["fonts.googleapis.com", "fonts.gstatic.com"]);

const MATERIAS = [
  "constitucional",
  "civil",
  "penal",
  "familiar",
  "comercial",
  "trabajo",
  "tributaria",
  "agroambiental",
  "minera",
  "administrativa",
  "tramites",
  "memoriales",
  "sociales",
  "aduaneros",
];

const SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  // CSS
  "./css/main.css",
  "./css/header.css",
  "./css/controls.css",
  "./css/notice.css",
  "./css/categories.css",
  "./css/civil-details.css",
  "./mejoras-ui.css",
  // JS
  "./js/theme-manager.js",
  "./js/main.js",
  "./js/pwa.js",
  "./js/utils.js",
  "./js/ui-components.js",
  "./js/data/categories.js",
  "./js/data/civil_details.js",
  ...MATERIAS.map((m) => `./js/data/materias/${m}.js`),
  // Iconos
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-32.png",
  "./icons/favicon-64.png",
];

/* ---------- Instalación: precarga tolerante a fallos ---------- */
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(SHELL_CACHE);
      // allSettled: si un archivo falla (404), los demás igual se guardan
      // y el service worker se instala igual.
      const results = await Promise.allSettled(
        SHELL.map((url) => cache.add(new Request(url, { cache: "reload" }))),
      );
      results.forEach((r, i) => {
        if (r.status === "rejected") {
          console.warn("[SW] No se pudo precargar:", SHELL[i]);
        }
      });
      await self.skipWaiting();
    })(),
  );
});

/* ---------- Activación: limpiar cachés viejas ---------- */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keep = new Set([SHELL_CACHE, FONT_CACHE]);
      const keys = await caches.keys();
      await Promise.all(
        keys.filter((k) => !keep.has(k)).map((k) => caches.delete(k)),
      );
      await self.clients.claim();
    })(),
  );
});

/* ---------- Estrategias ---------- */

// Páginas (HTML): red primero (siempre lo más nuevo) y caché si no hay señal.
async function navigate(event) {
  const cache = await caches.open(SHELL_CACHE);
  try {
    const res = await Promise.race([
      fetch(event.request),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("timeout")), 4000),
      ),
    ]);
    if (res && res.ok) event.waitUntil(cache.put(event.request, res.clone()));
    return res;
  } catch (err) {
    return (
      (await cache.match(event.request, { ignoreSearch: true })) ||
      (await cache.match("./index.html")) ||
      (await cache.match("./")) ||
      Response.error()
    );
  }
}

// Archivos estáticos: responde al instante desde caché y actualiza en segundo plano.
async function staleWhileRevalidate(event, cacheName, fresh) {
  const { request } = event;
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  const refresh = fetch(request, fresh ? { cache: "no-cache" } : undefined).then(
    (res) => {
      if (res && (res.ok || res.type === "opaque")) {
        cache.put(request, res.clone());
      }
      return res;
    },
  );

  if (cached) {
    event.waitUntil(refresh.catch(() => { }));
    return cached;
  }
  try {
    return await refresh;
  } catch (err) {
    return Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.protocol !== "http:" && url.protocol !== "https:") return;

  if (request.mode === "navigate") {
    event.respondWith(navigate(event));
    return;
  }
  if (url.origin === self.location.origin) {
    event.respondWith(staleWhileRevalidate(event, SHELL_CACHE, true));
    return;
  }
  if (FONT_HOSTS.has(url.hostname)) {
    event.respondWith(staleWhileRevalidate(event, FONT_CACHE, false));
  }
});