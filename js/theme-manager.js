/* Tema claro / oscuro.
 * Este script va en el <head> (sin defer) para aplicar el tema ANTES de que
 * la página se pinte y evitar el parpadeo claro -> oscuro.
 */
(function () {
  var root = document.documentElement;
  var KEY = "theme";
  var COLORS = { light: "#efe7d8", dark: "#1b1712" };
  var mq = window.matchMedia("(prefers-color-scheme: dark)");

  function read() {
    try {
      var v = localStorage.getItem(KEY);
      return v === "dark" || v === "light" ? v : null;
    } catch (err) {
      return null;
    }
  }

  function save(value) {
    try {
      localStorage.setItem(KEY, value);
    } catch (err) {
      /* modo privado: se ignora */
    }
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);

    // Color de la barra de estado del navegador / app instalada
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", COLORS[theme]);

    var btn = document.getElementById("themeToggle");
    if (btn) {
      var isDark = theme === "dark";
      btn.setAttribute("aria-pressed", isDark ? "true" : "false");
      btn.setAttribute("title", isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro");
    }
  }

  function current() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  apply(read() || (mq.matches ? "dark" : "light"));

  document.addEventListener("DOMContentLoaded", function () {
    apply(current()); // el botón ya existe: sincroniza su estado
    var btn = document.getElementById("themeToggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      apply(next);
      save(next);
    });
  });

  // Si el usuario nunca eligió tema, sigue al sistema en vivo.
  var onSystemChange = function (e) {
    if (!read()) apply(e.matches ? "dark" : "light");
  };
  if (mq.addEventListener) mq.addEventListener("change", onSystemChange);
  else if (mq.addListener) mq.addListener(onSystemChange);
})();