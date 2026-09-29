import { CATEGORIES } from "./data/categories.js";
import { CIVIL_DETAILS } from "./data/civil_details.js";
import { norm, tokenize, highlight, escapeHtml } from "./utils.js";
import { buildDetailHtml } from "./ui-components.js";

// Materias
import { items as constitutional } from "./data/materias/constitucional.js";
import { items as civil } from "./data/materias/civil.js";
import { items as penal } from "./data/materias/penal.js";
import { items as familiar } from "./data/materias/familiar.js";
import { items as comercial } from "./data/materias/comercial.js";
import { items as trabajo } from "./data/materias/trabajo.js";
import { items as tributaria } from "./data/materias/tributaria.js";
import { items as agroambiental } from "./data/materias/agroambiental.js";
import { items as minera } from "./data/materias/minera.js";
import { items as administrativa } from "./data/materias/administrativa.js";
import { items as tramites } from "./data/materias/tramites.js";
import { items as memoriales } from "./data/materias/memoriales.js";
import { items as sociales } from "./data/materias/sociales.js";
import { items as aduaneros } from "./data/materias/aduaneros.js";

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

// Nombres cortos para las pastillas de filtro (por número de materia)
const SHORT_LABELS = {
  1: "Constitucional",
  2: "Civil",
  3: "Penal",
  4: "Familiar",
  5: "Comercial",
  6: "Trabajo y Seg. Social",
  7: "Tributaria",
  8: "Agroambiental",
  9: "Minera",
  10: "Administrativa",
  11: "Trámites en general",
  12: "Memoriales",
  13: "Asuntos sociales",
  14: "Tributario y Aduanero",
};

const $ = (id) => document.getElementById(id);

function init() {
  const chipRow = $("chipRow");
  const catRoot = $("categories");
  const searchInput = $("search");
  const clearBtn = $("clearSearch");
  const resultCount = $("resultCount");
  const emptyState = $("emptyState");
  const notice = $("notice");
  if (!chipRow || !catRoot || !searchInput) return;

  const items = ALL_ITEMS;

  // Los totales se calculan con los datos reales (antes estaban a mano y no coincidían).
  const categorias = CATEGORIES.map((c) => ({
    ...c,
    total: items.filter((it) => it.categoria === c.nombre).length,
  }));

  // Texto de búsqueda de cada concepto, calculado una sola vez.
  const HAY = new Map(
    items.map((it) => [
      it.id,
      norm(
        [
          it.detalle,
          it.que_es,
          it.cuando_aplica,
          it.subcategoria,
          it.categoria,
          it.porcentaje_adicional !== "—" ? it.porcentaje_adicional : "",
          it.monto_la_paz_bs,
          String(it.monto_la_paz_bs).replace(/\./g, ""),
        ]
          .filter(Boolean)
          .join(" "),
      ),
    ]),
  );

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isWide = () => window.matchMedia("(min-width: 900px)").matches;
  const behavior = () => (reduceMotion ? "auto" : "smooth");

  let activeCat = "Todos";
  let rawQuery = "";
  let toks = [];
  const openIds = new Set();
  const catOpenOverride = new Map();

  const matches = (it) => toks.every((t) => HAY.get(it.id).includes(t));
  const hasPct = (it) => it.porcentaje_adicional && it.porcentaje_adicional !== "—";

  function isCatOpen(cat) {
    if (catOpenOverride.has(cat.nombre)) return catOpenOverride.get(cat.nombre);
    return toks.length > 0 || activeCat !== "Todos";
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  /* ---------- Chips de materia ---------- */
  function chipLabel(nombre) {
    const m = nombre.match(/^(\d+)\.\s*(.*)$/);
    if (!m) return nombre;
    return SHORT_LABELS[Number(m[1])] || m[2];
  }

  function buildChips() {
    const frag = document.createDocumentFragment();
    const make = (cat, label) => {
      const b = el("button", "chip");
      b.type = "button";
      b.dataset.cat = cat;
      b.append(el("span", "lbl", label), el("span", "n"));
      return b;
    };
    frag.appendChild(make("Todos", "Todos"));
    categorias.forEach((c) => frag.appendChild(make(c.nombre, chipLabel(c.nombre))));
    chipRow.innerHTML = "";
    chipRow.appendChild(frag);

    chipRow.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      const changed = activeCat !== btn.dataset.cat;
      activeCat = btn.dataset.cat;
      catOpenOverride.clear();
      render();
      centerChip(btn);
      if (changed) scrollToResults();
    });
  }

  function updateChips(counts, total) {
    chipRow.querySelectorAll(".chip").forEach((chip) => {
      const cat = chip.dataset.cat;
      const n = cat === "Todos" ? total : counts.get(cat) || 0;
      chip.querySelector(".n").textContent = n;
      chip.classList.toggle("active", cat === activeCat);
      chip.classList.toggle("is-empty", n === 0 && cat !== "Todos");
      chip.setAttribute("aria-pressed", cat === activeCat ? "true" : "false");
    });
  }

  // En móvil la fila de chips se desplaza sola para dejar visible el elegido.
  function centerChip(btn) {
    if (isWide()) return;
    const row = chipRow.getBoundingClientRect();
    const r = btn.getBoundingClientRect();
    const delta = r.left + r.width / 2 - (row.left + row.width / 2);
    chipRow.scrollBy({ left: delta, behavior: behavior() });
  }

  // Si el usuario está muy abajo, lo sube al inicio de los resultados.
  function scrollToResults() {
    const controlsEl = document.querySelector(".controls");
    const wide = isWide();
    const anchor = wide ? document.querySelector(".content") || catRoot : catRoot;
    const offset = wide ? 20 : (controlsEl ? controlsEl.offsetHeight : 0) + 8;
    const top = anchor.getBoundingClientRect().top;
    if (top < offset) {
      window.scrollTo({ top: top + window.scrollY - offset, behavior: behavior() });
    }
  }

  /* ---------- Detalle (se arma solo al abrir) ---------- */
  function fillDetail(node, it) {
    if (node.dataset.ready) return;
    try {
      node.innerHTML = buildDetailHtml(it, CIVIL_DETAILS);
      node.dataset.ready = "1";
    } catch (err) {
      console.error("No se pudo armar el detalle del ítem", it.id, err);
      node.textContent = "No se pudo cargar el detalle de este concepto.";
    }
  }

  function buildItem(it) {
    const isOpen = openIds.has(it.id);
    const wrap = el("div", "item" + (isOpen ? " open" : ""));
    wrap.dataset.id = String(it.id);

    const detailId = "detalle-" + it.id;
    const row = el("button", "item-row");
    row.type = "button";
    row.setAttribute("aria-expanded", String(isOpen));
    row.setAttribute("aria-controls", detailId);

    const name = el("span", "item-name");
    name.innerHTML = highlight(it.detalle, toks);
    row.append(el("span", "chev"), name);

    if (hasPct(it)) {
      const pct = el("span", "pct-dot", "+ % adicional");
      pct.title = it.porcentaje_adicional;
      row.appendChild(pct);
    }

    const amt = el("span", "amount");
    amt.innerHTML = '<span class="bs">Bs</span>' + escapeHtml(it.monto_la_paz_bs);
    row.appendChild(amt);

    const detail = el("div", "item-detail");
    detail.id = detailId;
    if (isOpen) fillDetail(detail, it);

    row.addEventListener("click", () => {
      const open = wrap.classList.toggle("open");
      row.setAttribute("aria-expanded", String(open));
      if (open) {
        openIds.add(it.id);
        fillDetail(detail, it);
      } else {
        openIds.delete(it.id);
      }
    });

    wrap.append(row, detail);
    return wrap;
  }

  function buildCategory(cat, catItems) {
    const open = isCatOpen(cat);
    const section = el("section", "category" + (open ? " open" : ""));

    const head = el("button", "category-head");
    head.type = "button";
    head.setAttribute("aria-expanded", String(open));
    const m = cat.nombre.match(/^(\d+)\.\s*(.*)$/);
    head.append(
      el("span", "cat-num", m ? m[1] : "•"),
      el("h2", null, m ? m[2] : cat.nombre),
      el(
        "span",
        "count",
        catItems.length === cat.total
          ? String(catItems.length)
          : catItems.length + " de " + cat.total,
      ),
      el("span", "cat-chev"),
    );
    head.addEventListener("click", () => {
      catOpenOverride.set(cat.nombre, !isCatOpen(cat));
      render();
    });
    section.appendChild(head);

    if (!open) return section;

    if (cat.base_legal) section.appendChild(el("div", "category-basis", cat.base_legal));

    let curSub = null;
    catItems.forEach((it) => {
      if (it.subcategoria && it.subcategoria !== curSub) {
        curSub = it.subcategoria;
        section.appendChild(el("div", "subcategory-label", curSub));
      } else if (!it.subcategoria) {
        curSub = null;
      }
      section.appendChild(buildItem(it));
    });
    return section;
  }

  /* ---------- Render ---------- */
  function renderEmpty(totalMatches) {
    const q = rawQuery.trim();
    if (activeCat !== "Todos" && totalMatches > 0) {
      emptyState.innerHTML =
        "<p><strong>Sin resultados en esta materia.</strong></p>" +
        "<p>Hay " + totalMatches + " en otras materias.</p>" +
        '<button type="button" class="link-btn" data-action="all">Ver todas las materias</button>';
    } else if (q) {
      emptyState.innerHTML =
        "<p><strong>Sin resultados para “" + escapeHtml(q) + "”.</strong></p>" +
        "<p>Prueba con menos palabras o revisa la ortografía.</p>" +
        '<button type="button" class="link-btn" data-action="clear">Borrar búsqueda</button>';
    } else {
      emptyState.innerHTML = "<p><strong>No hay conceptos para mostrar.</strong></p>";
    }
  }

  function render() {
    const counts = new Map();
    const matched = new Map();
    let total = 0;
    categorias.forEach((c) => {
      const list = items.filter((it) => it.categoria === c.nombre && matches(it));
      matched.set(c.nombre, list);
      counts.set(c.nombre, list.length);
      total += list.length;
    });
    updateChips(counts, total);

    const frag = document.createDocumentFragment();
    let shown = 0;
    categorias.forEach((cat) => {
      if (activeCat !== "Todos" && cat.nombre !== activeCat) return;
      const catItems = matched.get(cat.nombre);
      if (!catItems.length) return;
      shown += catItems.length;
      frag.appendChild(buildCategory(cat, catItems));
    });
    catRoot.innerHTML = "";
    catRoot.appendChild(frag);

    if (shown === 0) renderEmpty(total);
    emptyState.style.display = shown === 0 ? "block" : "none";

    const filtering = toks.length > 0 || activeCat !== "Todos";
    if (resultCount) {
      resultCount.textContent = filtering
        ? shown + " de " + items.length
        : items.length + " conceptos";
    }
    if (clearBtn) clearBtn.hidden = rawQuery === "";
  }

  /* ---------- Búsqueda ---------- */
  function applyQuery() {
    const prev = toks.join(" ");
    rawQuery = searchInput.value;
    toks = tokenize(rawQuery);
    const changed = toks.join(" ") !== prev;
    if (changed) catOpenOverride.clear();
    render();
    if (changed) scrollToResults();
  }

  let timer = null;
  searchInput.addEventListener("input", () => {
    if (clearBtn) clearBtn.hidden = searchInput.value === "";
    clearTimeout(timer);
    timer = setTimeout(applyQuery, 90);
  });

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      searchInput.blur(); // en el celular cierra el teclado para ver los resultados
    } else if (e.key === "Escape" && searchInput.value) {
      e.preventDefault();
      clearSearch(false);
    }
  });

  function clearSearch(focus) {
    clearTimeout(timer);
    searchInput.value = "";
    applyQuery();
    if (focus) searchInput.focus();
  }

  if (clearBtn) clearBtn.addEventListener("click", () => clearSearch(true));

  emptyState.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    if (btn.dataset.action === "clear") {
      clearSearch(false);
    } else if (btn.dataset.action === "all") {
      activeCat = "Todos";
      catOpenOverride.clear();
      render();
    }
  });

  // "/" enfoca el buscador (PC)
  document.addEventListener("keydown", (e) => {
    if (e.key !== "/" || e.ctrlKey || e.metaKey || e.altKey) return;
    const tag = (document.activeElement && document.activeElement.tagName) || "";
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(tag)) return;
    e.preventDefault();
    searchInput.focus();
    searchInput.select();
  });

  /* ---------- Botón "volver arriba" ---------- */
  const toTop = el("button", "to-top");
  toTop.type = "button";
  toTop.setAttribute("aria-label", "Volver arriba");
  toTop.innerHTML =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 15l6-6 6 6"/></svg>';
  document.body.appendChild(toTop);
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: behavior() }));

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        toTop.classList.toggle("show", window.scrollY > 700);
        ticking = false;
      });
    },
    { passive: true },
  );

  // Aviso "Cómo usar": abierto en PC, cerrado en celular para ahorrar espacio.
  if (notice && isWide()) notice.open = true;

  buildChips();
  render();
}

init();