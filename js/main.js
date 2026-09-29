import { CATEGORIES } from './data/categories.js';
import { CIVIL_DETAILS } from './data/civil_details.js';
import { norm, highlight } from './utils.js';
import { buildDetailHtml } from './ui-components.js';

// Materias imports
import { items as constitutional } from './data/materias/constitucional.js';
import { items as civil } from './data/materias/civil.js';
import { items as penal } from './data/materias/penal.js';
import { items as familiar } from './data/materias/familiar.js';
import { items as comercial } from './data/materias/comercial.js';
import { items as trabajo } from './data/materias/trabajo.js';
import { items as tributaria } from './data/materias/tributaria.js';
import { items as agroambiental } from './data/materias/agroambiental.js';
import { items as minera } from './data/materias/minera.js';
import { items as administrativa } from './data/materias/administrativa.js';
import { items as tramites } from './data/materias/tramites.js';
import { items as memoriales } from './data/materias/memoriales.js';
import { items as sociales } from './data/materias/sociales.js';
import { items as aduaneros } from './data/materias/aduaneros.js';

const ALL_ITEMS = [
    ...constitutional,
    ...civil,
    ...penal,
    ...familiar,
    ...comercial,
    ...trabajo,
    ...tributaria,
    ...agroambiental,
    ...minera,
    ...administrativa,
    ...tramites,
    ...memoriales,
    ...sociales,
    ...aduaneros,
];

(function () {
  const items = ALL_ITEMS;
  const categorias = CATEGORIES;

  const chipRow = document.getElementById("chipRow");
  const catRoot = document.getElementById("categories");
  const searchInput = document.getElementById("search");
  const resultCount = document.getElementById("resultCount");
  const emptyState = document.getElementById("emptyState");

  let activeCat = "Todos";
  let query = "";

  function buildChips() {
    const all = document.createElement("button");
    all.className = "chip active";
    all.dataset.cat = "Todos";
    all.innerHTML = 'Todos <span class="n">' + items.length + "</span>";
    chipRow.appendChild(all);
    categorias.forEach((c) => {
      const b = document.createElement("button");
      b.className = "chip";
      b.dataset.cat = c.nombre;
      const short = c.nombre.replace(/^\\d+\\.\\s*/, "");
      b.innerHTML = short + ' <span class="n">' + c.total + "</span>";
      chipRow.appendChild(b);
    });
    chipRow.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      activeCat = btn.dataset.cat;
      [...chipRow.children].forEach((c) =>
        c.classList.toggle("active", c === btn),
      );
      render();
    });
  }

  const openIds = new Set();
  const catOpenOverride = new Map();

  function isCatOpen(cat) {
    if (catOpenOverride.has(cat.nombre)) {
      return catOpenOverride.get(cat.nombre);
    }
    return query.trim() !== "" || activeCat !== "Todos";
  }

  function itemMatches(it, q) {
    if (!q) return true;
    return (
      norm(it.detalle).includes(q) ||
      norm(it.que_es).includes(q) ||
      norm(it.cuando_aplica).includes(q) ||
      norm(it.subcategoria || "").includes(q)
    );
  }

  function render() {
    const q = norm(query.trim());
    catRoot.innerHTML = "";
    let shown = 0;

    const catsToShow = categorias.filter(
      (c) => activeCat === "Todos" || c.nombre === activeCat,
    );

    catsToShow.forEach((cat) => {
      const catItems = items.filter(
        (it) => it.categoria === cat.nombre && itemMatches(it, q),
      );
      if (catItems.length === 0) return;
      shown += catItems.length;

      const section = document.createElement("section");
      const isOpenCat = isCatOpen(cat);
      section.className = "category" + (isOpenCat ? " open" : "");

      const head = document.createElement("button");
      head.type = "button";
      head.className = "category-head";
      head.setAttribute("aria-expanded", isOpenCat ? "true" : "false");
      const mCat = cat.nombre.match(/^(\d+)\.\s*(.*)$/);
      head.innerHTML =
        '<span class="cat-num">' +
        (mCat ? mCat[1] : "•") +
        "</span><h2>" +
        (mCat ? mCat[2] : cat.nombre) +
        '</h2><span class="count">' +
        catItems.length +
        (catItems.length === cat.total ? "" : " de " + cat.total) +
        '</span><span class="cat-chev"></span>';
      head.addEventListener("click", () => {
        catOpenOverride.set(cat.nombre, !isCatOpen(cat));
        render();
      });
      section.appendChild(head);

      if (cat.base_legal) {
        const basis = document.createElement("div");
        basis.className = "category-basis";
        basis.textContent = cat.base_legal;
        section.appendChild(basis);
      }

      if (isOpenCat) {
        let curSub = null;
        catItems.forEach((it) => {
          if (it.subcategoria && it.subcategoria !== curSub) {
            curSub = it.subcategoria;
            const subEl = document.createElement("div");
            subEl.className = "subcategory-label";
            subEl.textContent = curSub;
            section.appendChild(subEl);
          } else if (!it.subcategoria) {
            curSub = null;
          }

          const wrap = document.createElement("div");
          wrap.className = "item" + (openIds.has(it.id) ? " open" : "");
          wrap.dataset.id = it.id;

          const row = document.createElement("button");
          row.className = "item-row";
          row.setAttribute(
            "aria-expanded",
            openIds.has(it.id) ? "true" : "false",
          );

          const chev = document.createElement("span");
          chev.className = "chev";
          row.appendChild(chev);

          const name = document.createElement("span");
          name.className = "item-name";
          name.innerHTML = highlight(it.detalle, q);
          row.appendChild(name);

          if (it.porcentaje_adicional && it.porcentaje_adicional !== "—") {
            const pct = document.createElement("span");
            pct.className = "pct-dot";
            pct.textContent = "+ %";
            row.appendChild(pct);
          }

          const amt = document.createElement("span");
          amt.className = "amount";
          amt.innerHTML = it.monto_la_paz_bs + '<span class="bs">Bs</span>';
          row.appendChild(amt);

          row.addEventListener("click", () => {
            const isOpen = wrap.classList.toggle("open");
            row.setAttribute("aria-expanded", isOpen ? "true" : "false");
            if (isOpen) openIds.add(it.id);
            else openIds.delete(it.id);
          });

          wrap.appendChild(row);

          const detail = document.createElement("div");
          detail.className = "item-detail";
          // Pass CIVIL_DETAILS to the component
          detail.innerHTML = buildDetailHtml(it, CIVIL_DETAILS); 
          wrap.appendChild(detail);

          section.appendChild(wrap);
        });
      }

      catRoot.appendChild(section);
    });

    emptyState.style.display = shown === 0 ? "block" : "none";
    resultCount.textContent =
      q || activeCat !== "Todos"
        ? shown + " de " + items.length
        : items.length + " conceptos";
  }

  searchInput.addEventListener("input", (e) => {
    query = e.target.value;
    render();
  });

  buildChips();
  render();
})();
