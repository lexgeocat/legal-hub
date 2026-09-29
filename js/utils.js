/* Normaliza: minúsculas y sin acentos (para buscar "casacion" y hallar "casación"). */
export function norm(s) {
  return String(s == null ? "" : s)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function escapeHtml(s) {
  return String(s == null ? "" : s).replace(
    /[&<>"']/g,
    (m) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[m],
  );
}

/* "Acción de  libertad" -> ["accion", "de", "libertad"] */
export function tokenize(q) {
  return norm(q).split(/\s+/).filter(Boolean);
}

/* Devuelve el texto normalizado y, para cada carácter normalizado,
   la posición del carácter original (así el resaltado no se desfasa). */
function normWithMap(text) {
  let out = "";
  const map = [];
  for (let i = 0; i < text.length; i++) {
    const n = norm(text[i]);
    for (let k = 0; k < n.length; k++) {
      out += n[k];
      map.push(i);
    }
  }
  return { out, map };
}

/* Resalta TODAS las palabras buscadas (toks = resultado de tokenize). */
export function highlight(text, toks) {
  const source = String(text == null ? "" : text);
  if (!toks || !toks.length) return escapeHtml(source);

  const { out, map } = normWithMap(source);
  const ranges = [];
  toks.forEach((t) => {
    if (!t) return;
    let from = 0;
    let idx;
    while ((idx = out.indexOf(t, from)) !== -1) {
      ranges.push([map[idx], map[idx + t.length - 1] + 1]);
      from = idx + t.length;
    }
  });
  if (!ranges.length) return escapeHtml(source);

  ranges.sort((a, b) => a[0] - b[0]);
  const merged = [ranges[0].slice()];
  for (let i = 1; i < ranges.length; i++) {
    const last = merged[merged.length - 1];
    if (ranges[i][0] <= last[1]) last[1] = Math.max(last[1], ranges[i][1]);
    else merged.push(ranges[i].slice());
  }

  let html = "";
  let pos = 0;
  merged.forEach(([start, end]) => {
    html +=
      escapeHtml(source.slice(pos, start)) +
      '<span class="hl">' +
      escapeHtml(source.slice(start, end)) +
      "</span>";
    pos = end;
  });
  return html + escapeHtml(source.slice(pos));
}