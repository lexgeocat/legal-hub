/* PWA: registro del service worker + instalación automática (sin botón).
 *
 * Android / Chrome (móvil): el navegador avisa con "beforeinstallprompt".
 *   Guardamos el aviso y abrimos el diálogo nativo de instalación en el
 *   primer toque del usuario (Chrome solo permite abrirlo tras un gesto).
 *   Si el usuario lo rechaza, no se vuelve a mostrar por 7 días.
 *
 * iPhone / iPad (Safari): no existe instalación por código; se muestra una
 *   sola vez una tarjeta corta con los pasos (Compartir > Añadir a inicio).
 *
 * PC: Chrome/Edge ya muestran su propio icono de instalar en la barra de
 *   direcciones, así que no se lanza nada automático.
 */

const DAY = 24 * 60 * 60 * 1000;
const KEY_ANDROID = "arancel-install-dismissed";
const KEY_IOS = "arancel-ios-hint-shown";
const ANDROID_COOLDOWN = 7 * DAY;
const IOS_COOLDOWN = 21 * DAY;
const MIN_PAGE_TIME = 2500; // ms desde que abrió la página, para no interrumpir de golpe

const store = {
    get(key) {
        try {
            return localStorage.getItem(key);
        } catch (err) {
            return null;
        }
    },
    set(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (err) {
            /* modo privado: se ignora */
        }
    },
    del(key) {
        try {
            localStorage.removeItem(key);
        } catch (err) {
            /* modo privado: se ignora */
        }
    },
};

const withinCooldown = (key, ms) => {
    const t = Number(store.get(key));
    return t > 0 && Date.now() - t < ms;
};

const isStandalone = () =>
    window.matchMedia("(display-mode: standalone)").matches ||
    window.matchMedia("(display-mode: minimal-ui)").matches ||
    window.navigator.standalone === true;

const isTouch = () => window.matchMedia("(pointer: coarse)").matches;

/* ---------- 1. Service worker ---------- */
function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) return; // requiere HTTPS (o localhost)

    const register = () => {
        navigator.serviceWorker
            .register("sw.js", { scope: "./" })
            .then((reg) => {
                // Al volver a la app, busca una versión nueva.
                document.addEventListener("visibilitychange", () => {
                    if (document.visibilityState === "visible") {
                        reg.update().catch(() => { });
                    }
                });
            })
            .catch((err) => {
                console.warn("[PWA] No se pudo registrar el service worker:", err);
            });
    };

    if (document.readyState === "complete") register();
    else window.addEventListener("load", register, { once: true });
}

/* ---------- 2. Android / Chrome: instalación automática ---------- */
let deferredPrompt = null;
let armed = false;

function onFirstTap() {
    if (!deferredPrompt) return disarm();
    if (performance.now() < MIN_PAGE_TIME) return; // espera al siguiente toque
    disarm();
    const promptEvent = deferredPrompt;
    deferredPrompt = null;
    showInstallDialog(promptEvent);
}

async function showInstallDialog(promptEvent) {
    try {
        await promptEvent.prompt();
        const choice = await promptEvent.userChoice;
        if (choice && choice.outcome === "dismissed") {
            store.set(KEY_ANDROID, String(Date.now()));
        }
    } catch (err) {
        /* el navegador ya no permite el aviso: se ignora */
    }
}

function arm() {
    if (armed) return;
    armed = true;
    window.addEventListener("click", onFirstTap, true);
}

function disarm() {
    armed = false;
    window.removeEventListener("click", onFirstTap, true);
}

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault(); // evita la mini-barra del navegador; lo abrimos nosotros
    deferredPrompt = event;
    if (!isStandalone() && isTouch() && !withinCooldown(KEY_ANDROID, ANDROID_COOLDOWN)) {
        arm();
    }
});

window.addEventListener("appinstalled", () => {
    deferredPrompt = null;
    disarm();
    store.del(KEY_ANDROID);
});

/* ---------- 3. iPhone / iPad: tarjeta con los pasos ---------- */
function isIOS() {
    const ua = navigator.userAgent || "";
    return (
        /iphone|ipad|ipod/i.test(ua) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    );
}

function showIosHint() {
    const el = document.createElement("div");
    el.className = "ios-hint";
    el.setAttribute("role", "status");
    el.innerHTML =
        '<div class="ios-hint-body">' +
        "<strong>Instala esta app en tu pantalla de inicio</strong>" +
        'Toca <svg class="share-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<path d="M12 15V3M8 7l4-4 4 4M6 11H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-1"/></svg> ' +
        "<b>Compartir</b> y luego <b>Añadir a pantalla de inicio</b>." +
        "</div>" +
        '<button type="button" class="ios-hint-close" aria-label="Cerrar aviso">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
        "</button>";
    document.body.appendChild(el);

    const close = () => el.remove();
    el.querySelector(".ios-hint-close").addEventListener("click", close);
    setTimeout(close, 20000);
}

function maybeShowIosHint() {
    if (!isIOS() || isStandalone() || withinCooldown(KEY_IOS, IOS_COOLDOWN)) return;
    setTimeout(() => {
        if (isStandalone()) return;
        store.set(KEY_IOS, String(Date.now())); // se cuenta al mostrarlo, no al cerrarlo
        showIosHint();
    }, 6000);
}

registerServiceWorker();
maybeShowIosHint();