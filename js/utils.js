export function norm(s) {
  return (s || "")
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function escapeHtml(s) {
  return (s || "").replace(
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

export function highlight(text, q) {
  if (!q) return escapeHtml(text);
  const nText = norm(text);
  const nQ = norm(q);
  const idx = nText.indexOf(nQ);
  if (idx === -1) return escapeHtml(text);
  
  // This is a simple implementation; for exact match highlighting 
  // with accents, more complex logic is needed, but this keeps the original behavior.
  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + q.length);
  const after = text.slice(idx + q.length);
  return (
    escapeHtml(before) +
    '<span class="hl">' +
    escapeHtml(match) +
    "</span>" +
    escapeHtml(after)
  );
}
