import { norm, escapeHtml } from './utils.js';

export function feeTiles(it) {
  const hasPct = it.porcentaje_adicional && it.porcentaje_adicional !== "—";
  return (
    '<div class="fee-box">' +
    '<div class="fee-tile"><span class="k">Honorario mínimo en La Paz</span>' +
    '<span class="v">Bs ' +
    it.monto_la_paz_bs +
    "</span></div>" +
    '<div class="fee-tile extra"><span class="k">Regla adicional</span>' +
    '<span class="v">' +
    (hasPct ? escapeHtml(it.porcentaje_adicional) : "Sin porcentaje adicional") +
    "</span></div></div>"
  );
}

export function buildDetailHtml(it, civilDetails = null) {
  const cd = civilDetails ? civilDetails[it.id] : null;
  if (it.categoria === "2. Materia Civil" && cd) {
    return buildCivilDetailHtml(it, cd);
  }
  return (
    '<div class="d-grid">' +
    '<div class="d-card"><h4>¿Qué es?</h4><p>' +
    escapeHtml(it.que_es) +
    "</p></div>" +
    '<div class="d-card"><h4>¿Cuándo aplica?</h4><p>' +
    escapeHtml(it.cuando_aplica) +
    "</p></div>" +
    '<div class="d-fee">' +
    feeTiles(it) +
    "</div></div>"
  );
}

function phaseOf(text) {
  const s = norm(text);
  if (/audiencia/.test(s)) return ["aud", "Audiencia"];
  if (
    /notific|citacion|traslado|contestacion|convocatoria|publicacion|intimacion|requerimiento|remision|remitirlo/.test(
      s,
    )
  )
    return ["noti", "Notificación"];
  if (
    /sentencia|resolucion|auto de vista|el juez|el tribunal|resuelve|se mantiene/.test(
      s,
    )
  )
    return ["res", "Resolución"];
  if (
    /embargo|remate|ejecuc|ejecuta|pago al|distribucion|adjudicacion|levantamiento|inscripcion|cumplimiento/.test(
      s,
    )
  )
    return ["exec", "Ejecución"];
  if (
    /demanda|memorial|solicitud|interposicion|interponer|presentacion|presentar|redaccion|declaracion|recurso|compulsa/.test(
      s,
    )
  )
    return ["pres", "Presentación"];
  return ["prep", "Preparación"];
}

function civilCard(title, bodyHtml, cls) {
  return (
    '<section class="c-card ' +
    (cls || "") +
    '"><h4>' +
    escapeHtml(title) +
    "</h4>" +
    bodyHtml +
    "</section>"
  );
}

export function buildCivilDetailHtml(it, cd) {
  const hasPct = it.porcentaje_adicional && it.porcentaje_adicional !== "—";
  const total = cd.flujograma.length;

  const flowHtml =
    '<ol class="flow">' +
    cd.flujograma
      .map((step, i) => {
        const ph = phaseOf(step);
        const pos = i === 0 ? " start" : i === total - 1 ? " end" : "";
        const flag =
          i === 0
            ? '<span class="flow-flag">Inicio</span>'
            : i === total - 1
              ? '<span class="flow-flag">Cierre de la etapa</span>'
              : "";
        return (
          '<li class="flow-step' +
          pos +
          '"><span class="flow-num">' +
          (i + 1) +
          '</span><div class="flow-card"><div class="flow-meta">' +
          '<span class="phase ph-' +
          ph[0] +
          '">' +
          ph[1] +
          "</span>" +
          flag +
          '<span class="step-of">Paso ' +
          (i + 1) +
          " de " +
          total +
          "</span></div><p>" +
          escapeHtml(step) +
          "</p></div></li>"
        );
      })
      .join("") +
    "</ol>";

  return (
    '<div class="civil-detail">' +
    '<div class="civil-head">' +
    '<span class="civil-badge">Ficha profesional · Materia Civil</span>' +
    '<div class="civil-stats">' +
    '<span class="stat"><b>Bs ' +
    it.monto_la_paz_bs +
    "</b> mínimo</span>" +
    (hasPct ? '<span class="stat">Con regla porcentual</span>' : "") +
    '<span class="stat">' +
    total +
    " pasos</span></div></div>" +
    '<div class="civil-grid">' +
    civilCard("Concepto", "<p>" + escapeHtml(cd.concepto) + "</p>", "wide hero") +
    civilCard(
      "Marco normativo",
      "<p>" + escapeHtml(cd.marco_normativo) + "</p>",
      "wide",
    ) +
    civilCard("Requisitos previos", "<p>" + escapeHtml(cd.requisitos) + "</p>") +
    civilCard("Competencia", "<p>" + escapeHtml(cd.competencia) + "</p>") +
    civilCard("Flujograma del trámite", flowHtml, "wide") +
    civilCard(
      "Impugnación",
      "<p>" + escapeHtml(cd.impugnacion) + "</p>",
      "wide",
    ) +
    civilCard(
      "Cobro al cliente explicado",
      "<p>" + escapeHtml(cd.cobro) + "</p>" + feeTiles(it),
      "wide",
    ) +
    "</div>" +
    '<p class="civil-caveat">Ficha de referencia práctica elaborada a partir de la Ley N.º 439 (Código Procesal Civil) y la Ley N.º 025 (Órgano Judicial). No sustituye la revisión del texto vigente ni la jurisprudencia aplicable al caso concreto.</p>' +
    "</div>"
  );
}
