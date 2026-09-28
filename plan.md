# Plan de implementación: Sistema de gestión y redacción jurídica para abogados independientes

> **Nombre provisional:** [NOMBRE DEL PRODUCTO]
> **Versión del plan:** 1.0 · 28 de septiembre de 2026
> **Documento vivo:** revisar y actualizar al cerrar cada fase.

**Cómo leerlo.** Las secciones 1 a 3 son estrategia; la 4 a 9 son diseño; la 10 a 18 son ejecución, negocio y riesgos; los apéndices traen material listo para usar. Todo lo marcado como **[VERIFICAR]** depende de precios, leyes o límites que cambian y debe comprobarse antes de decidir.

---

## 1. Resumen ejecutivo

**Problema.** El abogado independiente tiene sus memoriales dispersos (Word, PDF, correos, carpetas sin orden), redacta de cero cosas que ya escribió, controla plazos de memoria y dedica horas a tareas administrativas que no factura.

**Solución.** Un sistema minimalista donde el abogado:

1. Reúne y organiza todos sus escritos y los convierte en **modelos reutilizables** con variables.
2. Gestiona sus **casos, plazos y audiencias** en un solo lugar.
3. Consulta una **biblioteca normativa** propia (leyes y códigos convertidos a texto) y selecciona los artículos que necesita.
4. Recibe **borradores asistidos por IA** con citas literales y verificables, que revisa, edita y exporta a Word o PDF.

**Cliente inicial.** Abogados independientes y despachos pequeños, de **una sola materia** y **una sola jurisdicción** para empezar.

**Por qué pagarían.** Porque ahorran horas y evitan errores costosos (plazos vencidos, citas incorrectas, escritos rehechos). No pagan "por IA": pagan por orden, memoria, verificación y tranquilidad.

### Principios rectores

1. **La IA nunca inventa normas.** El texto de cada artículo sale literal de la biblioteca; la IA solo redacta el razonamiento que conecta hechos con artículos.
2. **El abogado decide.** Todo resultado es un borrador. Los plazos siempre requieren confirmación humana.
3. **El sistema es el producto, no la IA.** El valor está en la organización, la memoria de su trabajo y la verificación.
4. **Minimalismo.** Pocas pantallas, cero curva de aprendizaje.
5. **Los datos son del abogado.** Cifrados, exportables, borrables y nunca usados para entrenar sin su permiso expreso.
6. **Proveedor de IA intercambiable.** Ninguna función depende de un modelo o proveedor concreto.

### Qué NO es este producto (por ahora)

- No es un buscador de jurisprudencia masivo.
- No presenta escritos ante los juzgados ni se integra con sistemas judiciales.
- No da opiniones sobre probabilidades de ganar ni decide estrategia procesal.
- No es una aplicación móvil nativa (la web debe funcionar bien en celular).

---

## 2. Alcance por fases

| Módulo | Fase 1 (MVP) | Fase 2 | Fase 3 | Fase 4 |
|---|---|---|---|---|
| Banco de escritos (importar, clasificar, buscar) | Sí | Mejoras | | |
| Convertir memorial en modelo | Sí | | | |
| Generar escrito desde modelo (llenar datos) | Sí | | | |
| Exportar a Word | Sí | PDF | | |
| Casos (carpeta por caso, línea de tiempo) | Básico | Completo | | |
| Biblioteca normativa (PDF a .md, búsqueda) | | Sí | | |
| Redacción asistida con citas verificadas | | Sí | | |
| Plazos, audiencias y recordatorios | | Sí | | |
| Formulario para el cliente con autocompletado | | | Sí | |
| Honorarios y cobros | | | Sí | |
| Resumen de estado del caso para el cliente | | | Sí | |
| Lectura de expedientes (cronología, resumen) | | | Sí | |
| Multiusuario / despachos | | | Sí | |
| Modelo propio afinado con datos acumulados | | | | Sí |
| Jurisprudencia propia del usuario, alertas de reformas | | | | Sí |
| Red entre colegas (sustituciones, derivaciones) | | | | A validar |

### Decisiones iniciales obligatorias

- **Una materia** (la que mejor domines o donde tengas más contactos): civil, laboral, familia, penal, etc.
- **Una jurisdicción** (país, y si aplica, ciudad o distrito judicial).
- **Un tipo de usuario:** abogado independiente. El multiusuario llega en la Fase 3.

---

## 3. Fase 0: validación antes de construir (semanas 1 y 2)

**Objetivo.** Confirmar que el dolor existe, que pagarían por resolverlo y cuál es el primer problema que atacar.

### Actividades

1. Listar **10 abogados** de la materia elegida (contactos directos, colegas, docentes).
2. Entrevistarlos con el guion del **Apéndice A** (20 a 30 minutos cada uno).
3. Proponer a **3 de ellos** un piloto manual: organizas gratis su archivo de escritos (con su permiso y bajo confidencialidad) y observas qué usan, qué piden y qué les sorprende.
4. Reunir en PDF **3 a 5 normas clave** de la materia elegida y de su fuente oficial, para las pruebas de la Fase 2.
5. Reunir **10 a 20 memoriales reales anonimizados** que servirán como material de prueba.

### Criterios para continuar (sugeridos)

- Al menos **6 de 10** entrevistados confirman que pierden tiempo con escritos dispersos o repetidos.
- Al menos **3** aceptan el piloto y entregan su archivo.
- Al menos **3** dicen cuánto pagarían o qué pagarían hoy por algo así.

**Si no se cumplen, se ajusta el enfoque antes de escribir una línea de código.**

### Entregables

- Resumen de entrevistas (dolores, frecuencia, disposición a pagar).
- Lista priorizada de problemas.
- Decisión final de materia, jurisdicción y alcance del MVP.

---

## 4. Arquitectura funcional (módulos)

### M1. Banco de escritos

- Subida masiva de archivos (.docx, .pdf, .txt); OCR para PDFs escaneados.
- Extracción de texto y metadatos: tipo de escrito, materia, juzgado o autoridad, fecha, número de causa, resultado (si se conoce).
- Detección de **duplicados y versiones** (por huella del texto y similitud semántica).
- Búsqueda por palabra clave y por significado, con filtros y etiquetas.
- Estado del escrito: borrador, presentado, archivado.

### M2. Modelos y plantillas

- **"Convertir en modelo":** el sistema propone qué partes son variables (nombres, documentos de identidad, fechas, montos, juzgado, número de causa, domicilios) y el abogado confirma una por una.
- Secciones **fijas, opcionales y repetibles** (por ejemplo, varias pruebas o varios otrosíes).
- Variables tipadas: texto, fecha, monto, lista, persona (con rol).
- Catálogo por tipo de escrito y por materia.
- **Modo sin IA:** formulario que completa el modelo directamente.

### M3. Casos

- Un caso agrupa: partes, cliente, juzgado, número de causa, materia, documentos, escritos, notas y línea de tiempo.
- Cada escrito generado queda asociado a su caso y guarda su versión.

### M4. Plazos y agenda

- Eventos: plazos procesales, audiencias, reuniones con clientes, vencimientos.
- Reglas de plazo almacenadas **como datos configurables** por jurisdicción (días hábiles o calendario, desde cuándo corre, feriados).
- El sistema **calcula una fecha sugerida y el abogado la confirma**; se guarda quién confirmó y cuándo.
- Recordatorios por correo (Fase 2) y por mensajería (Fase 3, **[VERIFICAR]** costos y requisitos de cada canal).

### M5. Biblioteca normativa

- Cada norma es un archivo .md con cabecera de datos y artículos con identificador estable (ver sección 7.3 y Apéndice D).
- Navegación en árbol (norma, título, capítulo, artículo), buscador y colecciones por materia.
- Estado de vigencia, historial de reformas y fecha de última actualización visibles siempre.
- Notas personales del abogado por artículo.

### M6. Redacción asistida

- Entradas: modelo elegido, datos del caso, relato de hechos y artículos seleccionados.
- Proceso por secciones con marcadores de cita y verificación automática (ver 7.4).
- Botones por párrafo: reforzar, acortar, más formal, más contundente, argumento subsidiario.
- Panel "de dónde salió": muestra qué hecho y qué artículo respaldan cada párrafo.

### M7. Cliente

- **Formulario de datos:** enlace seguro para que el cliente llene sus datos; se autocompletan poderes, contratos y borradores.
- **Resumen de estado:** texto en lenguaje sencillo para enviar al cliente con un clic (el abogado lo aprueba).

### M8. Honorarios

- Contrato de servicios desde modelo, honorarios pactados, pagos recibidos, saldo y recordatorios de cobro.
- Registro simple de tiempo por caso (opcional).

### M9. Exportación

- Word (.docx) con formato de escrito judicial (márgenes, interlineado, tipo de letra configurables) y PDF.
- Exportación completa del archivo del abogado en formatos abiertos (portabilidad).

### M10. Administración y seguridad

- Cuenta, autenticación con segundo factor, roles (Fase 3), registro de auditoría, copias de seguridad, exportar y borrar todos mis datos.

---

## 5. Stack técnico recomendado

Criterio: **simple, barato y fácil de mantener por un equipo pequeño.**

| Capa | Recomendación | Nota |
|---|---|---|
| Interfaz web | Next.js (React) + Tailwind | Diseño limpio, responsivo en celular. |
| Backend / API | Python (FastAPI) | Mismo lenguaje que el procesamiento de PDFs y de IA. |
| Base de datos | PostgreSQL con extensión pgvector | Un solo motor para datos, búsqueda de texto y búsqueda semántica. |
| Búsqueda | Texto completo (configuración en español) + embeddings | Combinar ambas y ajustar con pruebas reales. |
| Almacenamiento de archivos | Almacenamiento de objetos cifrado | Un espacio aislado por usuario. |
| Extracción de PDF | PyMuPDF o pdfplumber | Para PDFs digitales. |
| OCR | OCRmyPDF + Tesseract (paquete de español) | Para escaneados; siempre con revisión humana. |
| Word (.docx) | python-docx o docxtemplater | Lectura de escritos y generación de plantillas. |
| Embeddings | Modelo multilingüe abierto (por ejemplo familias bge-m3 o multilingual-e5) | **[VERIFICAR]** con tus propios casos cuál rinde mejor en español jurídico. |
| Capa de IA | Adaptador de proveedor propio | Cambiar de modelo sin tocar el resto del sistema. |
| Tareas en segundo plano | Cola de trabajos (por ejemplo Redis + worker) | Importaciones masivas, OCR, generación. |
| Autenticación | Correo + segundo factor | Aislamiento por usuario a nivel de base de datos. |
| Despliegue | Servidor virtual o plataforma gestionada | Copias de seguridad automáticas cifradas. |

**Regla de diseño:** la lógica de negocio (plantillas, plazos, verificador de citas) **no depende de la IA**. Si la IA falla o cambia de proveedor, el sistema sigue funcionando en modo formulario.

---

## 6. Modelo de datos (entidades principales)

- **Usuario / Despacho:** identidad, plan, preferencias de formato de escritos.
- **Caso:** título, materia, juzgado o autoridad, número de causa, estado, fechas.
- **Persona (parte o cliente):** nombre, documento, domicilio, contacto, rol en cada caso (demandante, demandado, tercero, cliente).
- **Documento:** archivo original, texto extraído, huella, tipo, origen, caso asociado.
- **Escrito:** contenido actual, tipo, estado, caso, modelo de origen.
- **Versión de escrito:** historial de cambios, autor (abogado o IA), fecha.
- **Modelo (plantilla):** estructura de secciones, texto base, materia, tipo de escrito.
- **Variable de modelo:** nombre, tipo, obligatoria u opcional, valor por defecto.
- **Norma:** nombre, tipo, número, fecha, jurisdicción, vigencia, fuente, versión de biblioteca.
- **Artículo:** identificador estable, texto literal, posición en la estructura, vigencia.
- **Reforma / derogación:** artículo afectado, fecha, norma que la produce.
- **Selección de artículos:** artículos elegidos para un escrito, con notas.
- **Cita usada:** escrito, artículo, versión de la norma al momento de generar.
- **Evento:** plazo, audiencia o recordatorio; regla usada; fecha sugerida; fecha confirmada; quién confirmó.
- **Honorario / Pago:** monto pactado, pagos, saldo, recordatorios.
- **Registro de IA:** modelo usado, tipo de tarea, tokens, costo estimado y resultado de la verificación (sin guardar datos sensibles de más).
- **Registro de auditoría:** acciones relevantes por usuario.

---

## 7. Procesos clave

### 7.1 Importar escritos (Fase 1)

1. El abogado sube uno o varios archivos.
2. El sistema extrae el texto (con OCR si es escaneado) y calcula su huella.
3. Detecta duplicados exactos y versiones casi idénticas y los agrupa.
4. Un modelo de IA económico propone: tipo de escrito, materia, autoridad, fecha, número de causa.
5. El abogado revisa una lista resumida y corrige lo que haga falta (revisión en bloque, no uno por uno).
6. El escrito queda indexado y se puede buscar.

### 7.2 Convertir un memorial en modelo (Fase 1)

1. Se elige un escrito bueno del banco.
2. El sistema detecta datos variables con reglas (fechas, montos, documentos de identidad) y con IA (nombres, domicilios, hechos específicos).
3. Propone la estructura en secciones y marca cuáles son fijas, opcionales o repetibles.
4. El abogado confirma, rechaza o edita cada variable y sección.
5. **Control de privacidad:** antes de guardar, el sistema avisa si detecta datos personales que aún no son variables.
6. El modelo se guarda y queda listo para llenar con un formulario.

### 7.3 Ingesta de normativa: PDF a .md (Fase 2)

1. Extracción de texto (o OCR) del PDF oficial.
2. Limpieza: encabezados, pies de página, números de página y saltos de línea rotos.
3. Segmentación por estructura: título, capítulo, sección, artículo.
4. Generación de un archivo .md por norma con cabecera de datos y un **identificador estable por artículo** (por ejemplo `cpc-art-123`).
5. **Pantalla de revisión humana obligatoria:** se compara el texto convertido con el PDF antes de publicar la norma.
6. Publicación con número de versión de la biblioteca y fecha de actualización.
7. Cuando una norma se reforma, se crea una nueva versión (no se sobrescribe) y se registra la reforma.

### 7.4 Redacción asistida (Fase 2)

Para cada escrito, el sistema trabaja por partes:

1. **Validación previa:** revisa qué datos faltan; los marca como `[FALTA: descripción]`. Nunca los inventa.
2. **Ordenar hechos:** la IA convierte el relato libre en hechos numerados y cronológicos; **el abogado aprueba la lista** antes de seguir.
3. **Relacionar hechos con normas:** para cada artículo elegido, indica qué hecho lo activa; avisa de artículos sin hecho asociado y de hechos sin respaldo normativo.
4. **Redacción por secciones** (hechos, fundamentos, petitorio, otrosíes), cada una con sus propias instrucciones.
5. **Marcadores de cita:** la IA escribe `[[CITA:cpc-art-123]]` en vez del texto de la norma.
6. **Inserción literal:** el sistema reemplaza cada marcador por el texto exacto guardado en la biblioteca, con su referencia completa y vigencia.
7. **Verificación automática** (ver 7.5).
8. **Revisión del abogado** con alertas resaltadas.

### 7.5 Verificador de escritos

Comprobaciones automáticas antes de exportar:

- Todo artículo citado existe en la biblioteca y está **vigente** en la fecha del escrito.
- No hay citas escritas a mano por la IA fuera de los marcadores.
- Nombres, fechas, montos y números de causa coinciden con los datos del formulario.
- No quedan campos `[FALTA]` sin resolver (si quedan, se muestra un resumen).
- Todo plazo mencionado coincide con el evento confirmado por el abogado.

Un fallo en citas o datos **bloquea la exportación** hasta que el abogado lo resuelva o lo acepte conscientemente.

---

## 8. Estrategia de IA y costos

**Objetivo:** que el abogado pague por el sistema, no por la IA. La IA debe ser un costo marginal pequeño y controlado.

### 8.1 Niveles de uso (de menor a mayor costo)

| Nivel | Qué hace | Costo |
|---|---|---|
| 0. Sin IA | Biblioteca, buscador, plantillas con formulario, verificador, exportación, plazos. | Cero |
| 1. Modelo pequeño o económico | Clasificar escritos, detectar variables, ordenar hechos, detectar datos faltantes. | Muy bajo |
| 2. Modelo de mayor calidad | Solo la redacción de fundamentos y argumentación. | Bajo |

### 8.2 Ruta por etapas

1. **Desarrollo y demos (Fase 1):** capa gratuita de un proveedor, **solo con datos ficticios**. En muchas capas gratuitas los datos pueden usarse para mejorar productos del proveedor, y los límites cambian con frecuencia **[VERIFICAR]**.
2. **Pilotos con abogados reales (Fase 2):** capa de pago del proveedor con facturación activada (donde los datos no se usan para entrenamiento) o un modelo abierto alojado por terceros, siempre con **anonimización previa** (ver 9.2). **[VERIFICAR]** los términos de datos del proveedor elegido y dónde se procesan.
3. **Escala (Fase 3 a 4):** cuando la factura de IA supere el costo de un servidor con GPU, migrar a un **modelo abierto propio** (por ejemplo, de las familias Gemma o Qwen, con licencias permisivas **[VERIFICAR]**). Costo fijo mensual y privacidad total.

### 8.3 Control de costos

- Adaptador de proveedor propio: cambiar de modelo o proveedor sin reescribir funciones.
- Generación **por secciones**, con modelos pequeños para las tareas simples.
- Reutilización de plantillas y normas (caché) para no reprocesar lo repetido.
- **Cuotas mensuales** de borradores asistidos por plan; el resto del sistema es ilimitado.
- Registro de costo por usuario y por tarea para vigilar el margen desde el primer día.
- Opción "trae tu propia clave" para usuarios avanzados (Fase 3).

### 8.4 Orden de magnitud (estimación con supuestos)

Con unos 10.000 tokens de entrada y 3.000 de salida por llamada, y varias llamadas por escrito, un escrito completo cuesta entre **unos centavos y unos 15 centavos de dólar**. Un abogado que genere 100 borradores al mes cuesta pocos dólares. **[VERIFICAR]** precios vigentes al decidir proveedor: cambian seguido.

### 8.5 Modelo propio (Fase 4)

- Regla: **el conocimiento legal va en la biblioteca (RAG), no en los pesos del modelo.** Las leyes cambian y las citas deben ser trazables.
- Lo que sí conviene afinar, por orden de retorno: (1) el **buscador** con pares "hecho → artículo correcto"; (2) el **estilo del redactor** con escritos aprobados, entrenando siempre con el contexto normativo incluido; (3) tareas pequeñas de clasificación.
- Requisito previo: **500 a 2.000 ejemplos** revisados por abogados y usados con consentimiento y anonimizados.
- Regla de decisión: si el modelo afinado no supera al modelo base en la **prueba ciega** (sección 12), no se usa.

---

## 9. Seguridad, confidencialidad y responsabilidad

### 9.1 Seguridad

- Cifrado en tránsito y en reposo; aislamiento estricto de datos entre usuarios.
- Autenticación con segundo factor; sesiones con vencimiento.
- Copias de seguridad cifradas y prueba periódica de restauración.
- Registro de auditoría de accesos y acciones.
- Exportar todos mis datos y borrar mi cuenta, a un clic (evita el miedo a quedar atrapado).

### 9.2 Confidencialidad frente a la IA

- **Anonimización previa:** antes de enviar texto a un modelo externo, los nombres, documentos y domicilios se reemplazan por marcadores (por ejemplo `{{DEMANDANTE_1}}`) y se restituyen al recibir la respuesta.
- Política clara: **los datos de los usuarios no se usan para entrenar modelos** sin consentimiento expreso y por escrito.
- Elegir proveedores cuyos términos excluyan el uso de datos para entrenamiento **[VERIFICAR]**.
- Opción de trabajar en "modo sin IA" para quien no quiera enviar ningún dato.

### 9.3 Responsabilidad profesional

- Aviso visible en cada borrador: **resultado asistido, debe ser revisado por el abogado**.
- Los plazos se sugieren, **nunca se dan por confirmados** sin acción del abogado.
- El sistema no ofrece opiniones sobre probabilidad de éxito ni decide estrategia.

### 9.4 Aspectos legales del producto (revisar con un abogado propio)

- Ley de protección de datos personales aplicable en la jurisdicción **[VERIFICAR]**.
- Términos de servicio, política de privacidad y contrato de encargo de tratamiento de datos.
- **Derechos de autor:** la normativa oficial suele ser de acceso público, pero doctrina, jurisprudencia de bases privadas y modelos de terceros pueden requerir permiso o licencia **[VERIFICAR]**.

---

## 10. Roadmap por fases

Duraciones estimadas para **1 o 2 personas de desarrollo** más un abogado asesor a tiempo parcial. Ajustar según dedicación real.

| Fase | Duración | Objetivo | Entregable principal |
|---|---|---|---|
| 0. Validación | 2 semanas | Confirmar dolor y disposición a pagar | Resumen de entrevistas y alcance del MVP |
| 1. MVP | 6 a 8 semanas | Banco de escritos y modelos utilizables | Importar, buscar, convertir en modelo, llenar y exportar a Word |
| 2. Normativa y plazos | 6 a 8 semanas | Redacción asistida con citas verificadas y control de plazos | Biblioteca .md, verificador y agenda con recordatorios |
| 3. Práctica completa | 6 a 8 semanas | Cubrir el resto de la operación diaria | Formulario del cliente, honorarios, resúmenes, expedientes, despachos |
| 4. Diferenciación | Continuo | Ventaja difícil de copiar | Modelo propio afinado, jurisprudencia propia, alertas de reformas |

### Fase 1: MVP (semanas 3 a 10)

**Entregables**
- Cuenta segura y espacio aislado por usuario.
- Importación masiva de escritos con extracción de texto y OCR.
- Clasificación automática con revisión en bloque.
- Buscador por palabra clave y por significado.
- "Convertir en modelo" con variables y secciones.
- Llenado de modelo por formulario, editor simple y exportación a Word.
- Casos básicos: carpeta por caso con escritos asociados.

**Criterios de salida (sugeridos)**
- 5 abogados usan el sistema semanalmente durante 4 semanas.
- Cada abogado importa al menos 50 escritos y crea al menos 5 modelos.
- Tiempo para producir un escrito desde un modelo menor a la mitad del tiempo habitual (autoreportado y medido).
- Al menos 3 aceptan pagar por continuar.

### Fase 2: Normativa y plazos

**Entregables**
- Ingesta PDF a .md con pantalla de revisión y biblioteca de 3 a 5 normas de la materia inicial.
- Selección de artículos, notas y colecciones.
- Redacción asistida con marcadores de cita, inserción literal y verificador (sección 7.4 y 7.5).
- Plazos y agenda con recordatorios por correo y confirmación del abogado.

**Criterios de salida (sugeridos)**
- **100% de citas correctas** en el conjunto de evaluación (ver sección 12).
- Cero plazos dados por confirmados sin acción humana.
- Los abogados de prueba califican los borradores con 4 o más sobre 5 en promedio.

### Fase 3: Práctica completa

**Entregables**
- Formulario para clientes con autocompletado de documentos.
- Honorarios, pagos y recordatorios de cobro.
- Resumen de estado del caso para el cliente.
- Lectura de expedientes: cronología, pretensiones y plazos detectados.
- Multiusuario y roles para despachos; biblioteca y modelos compartidos.
- Recordatorios por mensajería **[VERIFICAR]** costos y requisitos.

### Fase 4: Diferenciación

- Modelo propio afinado (sección 8.5) si supera la prueba ciega.
- Jurisprudencia propia del usuario, con notas y vínculo a artículos.
- Alertas de reformas y derogaciones que afectan a sus modelos.
- Exploración de red entre colegas (sustituciones y derivaciones), solo si la validación lo confirma.

---

---

## 11. Sincronización: red local, en línea y por archivo

### 11.1 Alcance

Un **único protocolo** con tres formas de transporte:

| Transporte | Cuándo se usa | Requiere |
|---|---|---|
| **Red local (LAN)** | Equipos de la oficina en la misma red | Nada más; conexión directa entre equipos. |
| **En línea (relé cifrado)** | Equipos en lugares distintos | Cuenta y conexión a internet. |
| **Archivo de intercambio** | Sin conexión, o como último recurso | Una unidad USB o correo. |

**Se sincroniza:** casos, personas, escritos y versiones, modelos, eventos, honorarios, notas, configuración de despacho y referencias a archivos.
**No se sincroniza:** normativa (paquetes firmados), claves API, contraseña maestra, configuración propia de cada dispositivo.

### 11.2 Principios

1. **Cada equipo tiene una copia completa** y puede trabajar sin conexión indefinidamente.
2. La unidad de sincronización es la **operación** (cambio atómico, firmado y cifrado); no se copian bases de datos completas.
3. Las operaciones son **idempotentes:** aplicar la misma dos veces no cambia el resultado.
4. El orden lo da el **reloj lógico híbrido**, no la hora del equipo.
5. Cada dispositivo guarda un **cursor** por cada otro punto de sincronización: pide solo lo que le falta.
6. **No se necesita un servidor de confianza:** el relé solo almacena y reenvía sobres cifrados.
7. **Nunca se pierde información en silencio:** ante duda, se conserva todo y se pregunta.

### 11.3 Conflictos

Reglas por tipo de dato en la sección 7.3. La experiencia de usuario:

- **Bandeja de conflictos** visible con contador: lista de casos en los que dos equipos cambiaron lo mismo.
- Para escritos: vista **lado a lado** con diferencias resaltadas; opciones: quedarse con una, fusionar a mano, conservar ambas como versiones separadas.
- Para plazos y fechas confirmadas: alerta destacada que **no desaparece** hasta que un abogado decide.
- Indicador de "otra persona está editando este escrito" (aviso suave, no bloqueo) cuando hay sincronización activa.
- Edición simultánea en tiempo real del mismo texto **fuera de alcance** (Fase 5, solo si hay demanda comprobada).

### 11.4 Archivos

- Cada archivo se identifica por su huella (SHA-256) y se guarda cifrado; se transmite en fragmentos reanudables.
- **Los metadatos se sincronizan siempre; el contenido de archivos pesados puede descargarse a demanda** (política configurable: todo, últimos N meses, solo casos activos).
- Deduplicación automática: el mismo archivo subido desde dos equipos se guarda una vez.

### 11.5 Modo red local

- **Emparejamiento (una sola vez por dispositivo):** un equipo muestra un **código de 6 dígitos y un QR**; el otro lo introduce. Se intercambian las claves públicas y ambos guardan la identidad del otro.
- **Descubrimiento:** anuncio en la red local (mDNS) para encontrar equipos ya emparejados; alternativa manual con dirección IP si la red lo bloquea.
- **Canal seguro:** TLS 1.3 con certificados propios **fijados durante el emparejamiento**; solo hablan dispositivos previamente emparejados.
- **Comportamiento:** sincroniza automáticamente al detectar otro equipo, en segundo plano, con indicador de estado.
- **Nodo de oficina** (5.4): el mismo mecanismo, pero un equipo permanece siempre disponible.
- **Aviso al usuario:** al activar el modo, la aplicación abre un puerto en la red local; se explica y se puede desactivar en un clic. La contraseña maestra y el cifrado de la base siguen protegiendo los datos en reposo.

### 11.6 Modo en línea: relé cifrado ("ciego")

**Idea.** El relé es un buzón de sobres cifrados: guarda operaciones y archivos que **no puede leer**, y los entrega a los dispositivos autorizados del despacho.

**Qué ve el relé:** identificadores de cuenta y de dispositivo, tamaño y momento de cada sobre, direcciones IP de conexión. **No ve:** contenido, nombres, casos, escritos ni archivos.

**API mínima (borrador en el Apéndice F):**
- Enviar un lote de operaciones cifradas.
- Pedir operaciones posteriores a un cursor.
- Subir y descargar archivos cifrados por huella.
- Registrar, listar y revocar dispositivos.

**Cuentas y acceso:**
- Cuenta del despacho con correo y verificación; cada dispositivo se autentica con su par de claves (firma), no con contraseñas reutilizables.
- Limitación de tasa y detección de abuso.

**Claves (resumen; sección 12.2):**
- El primer dispositivo genera la **clave del despacho.**
- Cada dispositivo nuevo se **aprueba desde un dispositivo ya autorizado** (código y QR), que le entrega la clave del despacho envuelta con la clave pública del nuevo equipo.
- **Clave de recuperación** (frase de 24 palabras y QR imprimible) que el abogado guarda: es la única forma de recuperar la nube si pierde todos sus dispositivos. **Tú no puedes recuperarla.**

**Almacenamiento y retención:** historial completo cifrado con instantáneas periódicas para no crecer sin límite; cuota por plan; borrado definitivo al cancelar (con periodo de gracia y exportación previa).

**Alojamiento [VERIFICAR]:** plataforma *serverless* con almacenamiento de objetos, o un servidor pequeño con almacenamiento compatible con S3. Ambos en TypeScript, con pocos componentes y costo proporcional al almacenamiento.

**Compromisos honestos:**
- Sin acceso al contenido, el relé no puede buscar, restablecer contraseñas ni "reparar" datos.
- Un fallo del relé no bloquea el trabajo: todo sigue funcionando en local.

### 11.7 Archivo de intercambio

- Exportar un **paquete cifrado** con las operaciones y archivos nuevos desde un punto acordado, e importarlo en otro equipo.
- Sirve para despachos sin red compartida, para trasladar datos con seguridad y como método de emergencia.
- Mismo formato de sobre que el relé, por lo que no hay lógica adicional que mantener.

### 11.8 Dispositivos, usuarios y roles

- **Agregar dispositivo:** emparejamiento y aprobación (11.5 y 11.6).
- **Revocar dispositivo** (robo o baja): el administrador lo revoca y se **rota la clave del despacho;** las operaciones futuras usan la nueva clave. **Advertencia honesta:** lo que el dispositivo revocado ya tenía guardado no se puede "des-entregar"; por eso el cifrado de disco y la contraseña maestra son obligatorios.
- **Roles (Fase 3, básicos):** administrador, abogado, asistente (acceso limitado). Se aplican **en la aplicación**; como todos comparten la clave del despacho, no son una barrera criptográfica.
- **Llaves por caso (Fase 5):** claves separadas por caso para restricciones fuertes de acceso, cuando un despacho lo exija.

### 11.9 Versiones y compatibilidad

- Cada dispositivo anuncia su versión de esquema y de protocolo al sincronizar.
- Si un equipo está **más atrasado** que el mínimo compatible, sincroniza solo lectura y se le pide actualizar.
- Las migraciones de esquema son **hacia adelante y probadas** con copias de datos reales anonimizadas.

### 11.10 Reloj y zonas horarias

- El reloj lógico híbrido tolera diferencias pequeñas.
- Si el reloj del equipo difiere mucho de la hora del relé o de otros dispositivos, se **avisa al usuario** y se sugiere corregirlo.
- Las fechas de plazos se guardan como **fecha calendario con zona horaria de la jurisdicción,** no como instantes.

### 11.11 Observabilidad (sin contenido)

- Panel de estado: última sincronización, operaciones pendientes, conflictos, errores.
- Registro de diagnóstico **sin datos del despacho,** exportable para soporte.
- Botón "pausar sincronización" y "sincronizar ahora".

### 11.12 Pruebas de sincronización

- **Simulador** de N dispositivos que se desconectan, editan y reconectan de forma aleatoria; se verifica convergencia y ausencia de pérdidas (miles de ejecuciones automáticas).
- Pruebas con **fallos a mitad de sincronización,** relojes desajustados, operaciones duplicadas y fuera de orden.
- Pruebas de migración entre versiones de esquema.
- **Ninguna versión con sincronización se publica sin pasar estas pruebas.**

### 11.13 Plan B

Si el [SPIKE S5] o la Fase 3 muestran que construir el motor propio es demasiado costoso, se puede usar un **motor de sincronización gestionado** (por ejemplo PowerSync o similares) sobre una base servidor. **Costo de esa decisión:** los datos residirían en claro en el servidor salvo que se cifren campo a campo, perdiendo parte de la promesa de confidencialidad. Solo se adopta con transparencia hacia los clientes y sabiendo que cambia el mensaje comercial.

### 11.14 Limitaciones que hay que comunicar

- Sin edición simultánea en tiempo real del mismo texto (por ahora).
- Si el abogado pierde todos sus dispositivos **y** la clave de recuperación, los datos en la nube son irrecuperables.
- Los roles son de aplicación, no criptográficos, hasta las llaves por caso.

---

## 12. Seguridad y privacidad

### 12.1 Modelo de amenazas

| Amenaza | Impacto | Controles |
|---|---|---|
| Robo o pérdida de un equipo | Acceso a expedientes | Cifrado de disco exigido y verificado; base y archivos cifrados; contraseña maestra; bloqueo por inactividad; revocación remota del dispositivo (11.8). |
| Programa malicioso o ransomware | Robo o pérdida de datos | Respaldos cifrados fuera del equipo con historial; actualizaciones firmadas; recomendaciones de seguridad del equipo en el asistente inicial. |
| Empleado o colaborador desleal | Filtración | Roles de aplicación; registro de auditoría encadenado; exportaciones registradas. |
| Interceptación en red local o internet | Lectura o alteración de datos | TLS 1.3 con certificados fijados; sobres cifrados y firmados de extremo a extremo; el relé no puede leer ni alterar sin ser detectado. |
| Compromiso del relé | Acceso a datos en la nube | Solo contiene cifrado y metadatos mínimos; no tiene claves. |
| Proveedor de IA | Fuga de datos del caso | Anonimización obligatoria según semáforo, vista previa, escaneo de residuos, modo local y modo puente (sección 10). |
| Actualización o paquete falsificado | Ejecución de código o normas alteradas | Firmas verificadas; claves de firma fuera de línea; paquetes normativos con huellas. |
| Pérdida de contraseña o de clave | Pérdida de acceso | Clave de recuperación; respaldos locales; explicación clara al usuario. |
| Error del propio sistema (citas o plazos incorrectos) | Daño profesional | Verificador, confirmación humana de plazos, avisos de borrador, evaluación sistemática. |

### 12.2 Jerarquía de claves

1. **Contraseña maestra** del abogado.
2. **Clave derivada (Argon2id)** que protege la clave local de datos (con parámetros ajustados al equipo).
3. **Clave local de datos:** cifra la base y los archivos en el disco.
4. **Clave del despacho** (para sincronizar): cifra las operaciones y archivos que se envían; se entrega a cada dispositivo envuelta con su clave pública.
5. **Par de claves del dispositivo:** firma y autenticación.
6. **Clave de recuperación:** permite reconstruir el acceso a la clave del despacho.

Criptografía: **libsodium** con algoritmos estándar (cifrado autenticado con XChaCha20-Poly1305, firmas Ed25519, intercambio X25519) y Argon2id. **Nunca se diseña criptografía propia.**

### 12.3 Cifrado en reposo

- **Línea base (Fase 1):** exigir y verificar cifrado de disco del sistema (BitLocker en Windows, FileVault en macOS) con aviso si no está activo; archivos y respaldos **siempre cifrados por la aplicación.**
- **Objetivo (Fase 1 o 2, según [SPIKE S2]):** **base de datos cifrada por completo,** protegida con la clave local de datos.
- Ningún texto de escritos ni datos personales en archivos temporales sin cifrar; limpieza de temporales al cerrar.

### 12.4 Autenticación local

- Contraseña maestra con requisitos mínimos y medidor de fortaleza.
- Bloqueo automático por inactividad configurable.
- Intentos fallidos con retraso creciente.
- Opcional: desbloqueo con las funciones biométricas del sistema, cuando estén disponibles.

### 12.5 Cadena de suministro

- Dependencias fijadas con versión exacta, revisión de licencias y alertas de vulnerabilidades.
- Compilaciones reproducibles y automatizadas; **solo se distribuyen binarios generados por el proceso oficial.**
- Instalador con firma de código; actualizaciones con firma verificada por la aplicación.
- Lista de componentes (SBOM) por versión.

### 12.6 Auditoría

- Registro local **encadenado por huellas** (cada entrada incluye la huella de la anterior) para detectar borrados o alteraciones.
- Eventos: inicio de sesión, exportaciones, cambios de proveedor de IA, envíos a IA (sin contenido), emparejamientos y revocaciones, restauraciones.

### 12.7 Privacidad y telemetría

- **Sin telemetría por defecto.** Opción de estadísticas anónimas de uso, con permiso explícito y sin contenido.
- Tus servicios (relé, actualizaciones) registran solo lo mínimo operativo.
- Política de privacidad y términos de servicio claros y en lenguaje sencillo.

### 12.8 Aspectos legales del producto (revisar con un abogado propio)

- Ley de protección de datos personales aplicable en la jurisdicción **[VERIFICAR].**
- Con cifrado de extremo a extremo, el relé guarda datos cifrados que tú no puedes leer; **aun así hay que definir por contrato el rol de cada parte** (encargado o responsable del tratamiento, según la ley aplicable).
- **Derechos de autor:** la normativa oficial suele ser de acceso público, pero doctrina, jurisprudencia de bases privadas y modelos de terceros pueden requerir permiso **[VERIFICAR].**
- Términos de las cuentas y condiciones de cada proveedor de IA: es responsabilidad del abogado, pero el semáforo debe ser fiel a ellas.

### 12.9 Revisión externa

Antes de habilitar la sincronización en línea (Fase 3b): **revisión de seguridad independiente** del diseño criptográfico, del protocolo de sincronización y del relé, con corrección de hallazgos críticos y altos.

### 12.10 Responsabilidad profesional

- Aviso visible en cada borrador: **resultado asistido, debe ser revisado por el abogado.**
- Los plazos se sugieren; **nunca se dan por confirmados sin acción del abogado.**
- El sistema no opina sobre probabilidades de éxito ni decide estrategia.

---

## 13. Respaldos y recuperación

### 13.1 Estrategia 3-2-1

**3** copias de los datos, en **2** tipos de medio distintos, con **1** fuera de la oficina:
1. Copia de trabajo en el equipo.
2. Respaldo local automático cifrado en disco externo o carpeta de red.
3. Respaldo en la nube cifrado (relé, Fase 3b) o copia periódica en USB guardada fuera.

### 13.2 Respaldo automático

- Programación configurable (por defecto diaria y al cerrar la aplicación), con **historial de versiones** (por ejemplo diarias, semanales y mensuales).
- **Siempre cifrado** con la clave del despacho; los respaldos no dependen de la contraseña diaria.
- Aviso visible si no hay respaldo reciente (por ejemplo, más de 3 días).

### 13.3 Verificación y restauración

- **Verificación automática** de integridad de cada respaldo.
- **Prueba de restauración guiada** cada cierto tiempo (restaurar en una carpeta temporal y comprobar).
- **Restauración guiada:** a otro equipo, a un punto anterior en el tiempo o solo de un caso.

### 13.4 Pérdida de contraseña o de equipo

- Contraseña olvidada: restauración con la **clave de recuperación.** Sin ella ni respaldo, los datos son irrecuperables; se explica desde la instalación.
- Equipo perdido o dañado: instalar en otro equipo, unirlo al despacho y sincronizar, o restaurar desde respaldo.

### 13.5 Objetivos (sugeridos)

- **Pérdida máxima aceptable:** menos de 1 día de trabajo.
- **Tiempo de recuperación:** menos de 2 horas con instrucciones del propio asistente.

---

## 14. Distribución, actualizaciones y licencias

### 14.1 Instalación

- Instalador estándar por sistema operativo (Windows primero), con **asistente inicial:** contraseña maestra, clave de recuperación, cifrado de disco, carpeta de respaldos, elección de proveedor de IA (opcional) y modo de trabajo.
- Sin dependencias manuales (no pedir instalar runtimes ni herramientas).

### 14.2 Firma de código

- **Windows:** firma del instalador y de los ejecutables, para reducir advertencias de SmartScreen y falsos positivos de antivirus. **[VERIFICAR]** opciones y costos del certificado de firma.
- **macOS:** firma y notarización con cuenta de desarrollador de Apple. **[VERIFICAR]** costo.
- Todo ejecutable empaquetado (incluido el núcleo compilado) se firma y se prueba contra antivirus habituales antes de cada versión.

### 14.3 Actualizaciones

- **Actualizador integrado de Tauri** con firma verificada.
- Canales: **estable** (por defecto) y **beta** (opcional, para pilotos).
- Actualizaciones con aviso, nunca a mitad de una tarea; **migración de datos con copia previa automática.**
- Control por despacho: en modo oficina, se sugiere que todos los equipos actualicen a la misma versión.

### 14.4 Paquetes y catálogos firmados

- **Paquetes de normativa, modelos y prompts** y **catálogo de proveedores** se distribuyen como paquetes firmados; la aplicación **rechaza** cualquier paquete sin firma válida.
- Se pueden obtener descargando desde tu sitio, por USB o por correo.
- Claves de firma **fuera de línea,** con procedimiento de rotación documentado.

### 14.5 Licencias

- **Activación con código** por despacho y número de equipos; sin conexión permanente (validación periódica con periodo de gracia amplio).
- **Regla de oro: los datos nunca quedan cautivos.** Si vence la licencia o el plan, la aplicación **sigue abriendo y exportando todo;** lo que se detiene son las actualizaciones, los paquetes nuevos y la sincronización en línea.
- No invertir esfuerzo desproporcionado en evitar copias: el valor está en las actualizaciones, el soporte y la sincronización.

---

## 15. Roadmap por fases

Duraciones estimadas para **1 o 2 personas de desarrollo** más un abogado asesor a tiempo parcial. La sincronización es la parte más arriesgada técnicamente, por eso lleva su propia fase y revisión externa.

| Fase | Duración | Objetivo | Entregable principal |
|---|---|---|---|
| 0. Validación y pruebas técnicas | 3 semanas | Confirmar dolor y decidir la base técnica | Resumen de entrevistas, resultados de S1 a S5, decisiones de arquitectura confirmadas |
| 1. MVP de escritorio | 8 a 10 semanas | Banco de escritos y modelos en un equipo, con IA por proveedores | Instalador firmado; importar, buscar, convertir en modelo, llenar y exportar a Word; casos básicos; proveedores de IA y modo puente; respaldo local |
| 2. Normativa y plazos | 6 a 8 semanas | Redacción asistida con citas verificadas y control de plazos | Paquetes normativos firmados, verificador, prompts por caso con evaluación, plazos y notificaciones locales |
| 3. Oficina y en línea | 8 a 10 semanas | Varios equipos sincronizados con seguridad | **3a:** red local, archivo de intercambio, nodo de oficina y roles básicos. **3b:** relé cifrado, respaldo en la nube y revisión externa de seguridad |
| 4. Práctica completa | 6 a 8 semanas | Cubrir el resto de la operación diaria | Buzón cifrado del cliente, honorarios, resúmenes, lectura de expedientes |
| 5. Diferenciación | Continuo | Ventaja difícil de copiar | Modelo propio afinado, llaves por caso, jurisprudencia propia, alertas de reformas |

### Fase 1: MVP de escritorio

**Entregables**
- Instalador firmado con asistente inicial, contraseña maestra y clave de recuperación.
- Importación masiva con extracción de texto y OCR, clasificación con revisión en bloque.
- Buscador por palabra clave (FTS5) y por significado si hay embeddings disponibles.
- "Convertir en modelo" con variables y secciones; llenado por formulario; editor simple; exportación a Word.
- Casos básicos.
- Proveedores de IA (local y API compatible), **modo puente**, anonimización con vista previa y prompts base.
- Respaldo local automático y restauración.
- Modelo de datos **listo para sincronizar** (sección 7.1).

**Criterios de salida (sugeridos)**
- 5 abogados usan el sistema semanalmente durante 4 semanas.
- Cada uno importa 50 o más escritos y crea 5 o más modelos.
- Tiempo para producir un escrito desde un modelo, la mitad o menos del habitual.
- **Instalación sin asistencia exitosa en al menos 80% de los equipos;** cero pérdidas de datos.
- Al menos 3 aceptan pagar por continuar.

### Fase 2: Normativa y plazos

**Entregables:** ingesta y paquetes firmados de 3 a 5 normas; selección de artículos; redacción asistida con marcadores, inserción literal y verificador; prompts por caso con evaluación de regresión; plazos, audiencias y notificaciones locales.
**Criterios de salida:** **100% de citas correctas** en el conjunto de evaluación; cero plazos dados por confirmados sin acción humana; calificación media de 4 o más sobre 5 de los abogados.

### Fase 3: Oficina y en línea

**3a (red local):** emparejamiento, sincronización LAN, archivo de intercambio, nodo de oficina, bandeja de conflictos, roles básicos.
**3b (en línea):** relé cifrado, claves del despacho y recuperación, respaldo en la nube, cuotas y facturación del plan, **revisión de seguridad externa.**
**Criterios de salida:** convergencia en el 100% de las ejecuciones del simulador; **3 despachos usan LAN o en línea durante 4 semanas sin pérdida de datos;** ningún hallazgo crítico de la revisión externa sin resolver.

### Fase 4: Práctica completa

Buzón cifrado del cliente (el navegador del cliente cifra los datos con la **clave pública del abogado** incluida en el enlace, de modo que el buzón sigue siendo ciego), honorarios y cobros, resúmenes de estado para el cliente, lectura de expedientes (cronología, pretensiones, plazos detectados).

### Fase 5: Diferenciación

Modelo propio afinado (10.12), llaves por caso, jurisprudencia propia con notas y vínculos a artículos, alertas de reformas y derogaciones que afectan a los modelos del abogado. Red entre colegas (sustituciones y derivaciones) solo si la validación lo confirma.

---

## 16. Backlog

Prioridad: **P0** imprescindible, **P1** importante, **P2** deseable.

### Fase 1 (MVP)

| Épica | Historia de usuario | Prioridad |
|---|---|---|
| E1. Instalación y cuenta local | Como abogado, quiero instalar la aplicación sin ayuda técnica y crear mi contraseña maestra y mi clave de recuperación. | P0 |
| E1. Instalación y cuenta local | Como abogado, quiero que la aplicación me avise si mi disco no está cifrado. | P1 |
| E1. Instalación y cuenta local | Como abogado, quiero exportar todos mis datos en formatos abiertos. | P0 |
| E2. Importar | Como abogado, quiero arrastrar carpetas enteras y ver el progreso sin que se bloquee mi trabajo. | P0 |
| E2. Importar | Como abogado, quiero que se lean mis PDFs escaneados. | P1 |
| E2. Importar | Como abogado, quiero que se detecten duplicados y versiones. | P1 |
| E3. Clasificar y buscar | Como abogado, quiero que mis escritos se clasifiquen solos y revisar todo en un vistazo. | P0 |
| E3. Clasificar y buscar | Como abogado, quiero buscar "el escrito donde pedí X" aunque no recuerde las palabras exactas. | P0 |
| E4. Convertir en modelo | Como abogado, quiero convertir un buen memorial en modelo confirmando las variables sugeridas. | P0 |
| E4. Convertir en modelo | Como abogado, quiero un aviso si en el modelo queda algún dato personal sin convertir. | P0 |
| E5. Generar y exportar | Como abogado, quiero llenar un formulario y obtener el escrito completo, editarlo y exportarlo a Word con formato judicial. | P0 |
| E6. Casos | Como abogado, quiero una carpeta por caso con sus escritos y partes. | P1 |
| E7. Proveedores de IA | Como abogado, quiero conectar mi proveedor (local o en la nube) pegando la dirección, la clave y el modelo, o elegirlo de una lista con datos precargados. | P0 |
| E7. Proveedores de IA | Como abogado, quiero una prueba de compatibilidad que me diga para qué tareas sirve cada proveedor. | P1 |
| E7. Proveedores de IA | Como abogado, quiero usar el modo puente copiando un texto y pegando la respuesta. | P0 |
| E7. Proveedores de IA | Como abogado, quiero ver el semáforo de confidencialidad de cada proveedor y una vista previa de lo que se enviará. | P0 |
| E8. Prompts | Como abogado, quiero que el sistema elija el prompt adecuado al tipo de escrito y a la tarea. | P1 |
| E9. Respaldos | Como abogado, quiero respaldos automáticos cifrados y una restauración guiada. | P0 |
| E10. Medición | Como fundador, quiero medir uso y ahorro de tiempo (con permiso del usuario). | P1 |

### Fase 3 (sincronización), épicas principales

| Épica | Alcance | Prioridad |
|---|---|---|
| E14. Núcleo de sincronización | Registro de operaciones, reloj lógico, fusión por tipo, cursores, idempotencia. | P0 |
| E15. Emparejamiento y red local | Código y QR, descubrimiento, canal TLS fijado, nodo de oficina. | P0 |
| E16. Conflictos | Bandeja, vista lado a lado, alertas de plazos. | P0 |
| E17. Relé en línea | API, cuentas, dispositivos, almacenamiento cifrado, cuotas. | P0 |
| E18. Claves y recuperación | Clave del despacho, aprobación de dispositivos, rotación, clave de recuperación. | P0 |
| E19. Intercambio por archivo | Exportación e importación de paquetes cifrados. | P1 |
| E20. Roles básicos | Administrador, abogado, asistente. | P1 |
| E21. Simulación y revisión | Simulador de convergencia, pruebas de fallo, revisión externa. | P0 |

### Criterio de aceptación de ejemplo (E4)

- **Dado** un memorial importado, **cuando** el abogado elige "convertir en modelo", **entonces** el sistema propone variables y secciones, el abogado puede aceptar, rechazar o editar cada una, y el modelo guardado no contiene datos personales identificables tras la revisión.

---

## 17. Calidad y evaluación

### Conjunto de evaluación

- **20 a 30 casos reales anonimizados** de la materia inicial, separados del material de desarrollo.
- Cada caso: datos de las partes, relato de hechos, artículos aplicables y un escrito de referencia hecho por un abogado.

### Métricas y umbrales sugeridos

| Métrica | Umbral |
|---|---|
| Citas correctas (existe, vigente, texto literal) | **100%;** cualquier error es un fallo grave |
| Datos correctos (nombres, montos, fechas, causa) | 100% |
| Fugas de datos en la anonimización (residuos que llegan a la IA) | **0** en el conjunto de pruebas |
| Variables detectadas al convertir en modelo | 90% o más de las relevantes |
| Respuestas con formato válido por proveedor | 90% o más para tareas complejas |
| Calidad jurídica del borrador (2 o 3 abogados, escala 1 a 5) | Promedio 4 o más |
| Tiempo ahorrado frente a redactar a mano | Al menos 50% |
| Convergencia de sincronización en simulación | 100% |
| Instalación sin asistencia | 80% o más de los equipos |

### Prueba ciega de modelos y prompts

Los abogados califican borradores **sin saber qué proveedor, modelo o prompt los generó.** Se decide con esos resultados, no con clasificaciones públicas.

### Evaluación de regresión de prompts

Cada cambio de prompt se ejecuta contra el conjunto de evaluación con al menos un proveedor de cada nivel; **si empeora una métrica crítica, no se publica.**

### Pruebas técnicas

- Automáticas: verificador, motor de plantillas, anonimización, análisis de respuestas.
- Extracción con PDFs de distinta calidad.
- Plazos con casos conocidos revisados por el abogado asesor.
- **Sincronización:** simulador, fallos a medias, relojes desajustados, migraciones (11.12).
- **Instalación y actualización** en equipos reales de distintas versiones de Windows.
- Seguridad: aislamiento, permisos de archivos, revisión externa antes de la Fase 3b.

---

## 18. Modelo de ingresos y precios

**Principio:** cobrar por lo tangible (orden, plazos controlados, ahorro de horas, respaldo y sincronización seguros), no por "IA". Los montos concretos se definen con las entrevistas y los pilotos.

### Fuentes de ingreso

1. **Licencia de la aplicación (pago único)** por despacho, con actualizaciones durante un periodo definido **[DECIDIR].** Se ajusta al deseo de no depender de suscripciones.
2. **Plan de sincronización y respaldo (recurrente):** relé cifrado, respaldo en la nube, dispositivos del despacho y almacenamiento con cuota. Tiene un costo real continuo, así que la cuota es fácil de justificar.
3. **Paquetes de normativa, modelos y prompts por materia (anual),** con actualizaciones por reformas.
4. **Servicios:** instalación, **organización inicial de archivos,** capacitación y personalización de modelos.
5. **Puestos adicionales** para despachos.
6. **Convenios institucionales:** colegios de abogados y universidades.
7. **Opción futura:** plan de IA incluida con créditos.
8. **Plan gratuito:** aplicación con límites (por ejemplo, cantidad de escritos en el banco) y sin sincronización.

### Qué ocurre al vencer un plan

La aplicación **sigue funcionando** con lo instalado y **siempre exporta los datos.** Se detienen las actualizaciones, los paquetes nuevos y la sincronización en línea.

### Economía por cliente

- Tu **costo variable** = relé y almacenamiento + soporte. La IA no entra.
- Meta sugerida: costo variable **menor al 25% del ingreso recurrente** por cliente. Medirlo desde los pilotos.
- Revisar cuotas de almacenamiento y precios cuando cambien los costos del alojamiento.

---

## 19. Métricas de producto

| Métrica | Qué indica |
|---|---|
| Instalaciones completadas sin asistencia | Facilidad de adopción |
| Activación: importan 20 o más escritos en la primera semana | Que entendieron el valor |
| Modelos creados por usuario | Profundidad de uso |
| Escritos generados por semana | Uso recurrente |
| Proveedores de IA configurados y modo puente usado | Adopción de la capa de IA |
| Retención semanal y mensual | Si se vuelve hábito |
| Ahorro de tiempo autoreportado | Valor percibido |
| Recomendación (NPS) | Satisfacción |
| Conversión de gratis a pago y de licencia a plan de sincronización | Disposición a pagar |
| Conflictos de sincronización por semana y su tiempo de resolución | Calidad de la sincronización |
| Correcciones del abogado a sugerencias de IA | Calidad real del sistema |
| Incidentes de soporte por instalación o actualización | Carga operativa |

Todas las métricas de uso dependen de permiso explícito del usuario (12.7).

---

## 20. Riesgos y mitigaciones

| Riesgo | Probabilidad / impacto | Mitigación |
|---|---|---|
| **Complejidad de la sincronización** (el riesgo técnico mayor) | Alta / Alto | Modelo de datos listo desde la Fase 1; simulación intensiva; fase propia con revisión externa; plan B con motor gestionado. |
| Pérdida de datos local (equipo dañado, robo, ransomware) | Media / Muy alto | Respaldos 3-2-1 cifrados con verificación; cifrado; restauración guiada; recordatorios de respaldo. |
| Pérdida de clave o contraseña sin recuperación | Media / Alto | Clave de recuperación desde la instalación; explicación clara; respaldos independientes de la contraseña diaria. |
| Fuga de datos por proveedor de IA gratuito | Media / Muy alto | Semáforo, anonimización obligatoria, escaneo de residuos, vista previa, modo local y modo puente. |
| Proveedores gratuitos cambian condiciones o desaparecen | Alta / Medio | Catálogo actualizable y firmado; cadenas de respaldo; modo local; ninguna función depende de un proveedor. |
| Norma desactualizada o derogada | Media / Alto | Paquetes firmados y versionados; vigencia visible; verificador; alertas (Fase 5). |
| Errores de OCR o conversión de normas | Alta / Alto | Revisión humana obligatoria antes de firmar el paquete. |
| La IA inventa o deforma normas | Media / Muy alto | Marcadores, inserción literal, verificador que bloquea la exportación. |
| Plazo mal calculado | Media / Muy alto | Solo sugerencia; confirmación humana; reglas revisadas por abogado asesor; alerta de conflictos. |
| Instalación difícil, antivirus y advertencias del sistema | Alta / Alto | Firma de código; pruebas en equipos reales; asistente inicial; servicio de instalación. |
| Soporte técnico costoso (equipos y versiones diversas) | Alta / Medio | Requisitos mínimos claros; registro de diagnóstico sin contenido; base de conocimiento; servicio pagado de instalación. |
| Problemas del WebView del sistema en equipos antiguos | Media / Medio | Prueba temprana [SPIKE S1]; plan B con Electron. |
| Compromiso del relé o de la cadena de suministro | Baja / Muy alto | Relé ciego; firmas; claves de firma fuera de línea; revisión externa; SBOM. |
| Baja adopción (hábitos) | Alta / Alto | Empezar por el dolor del desorden; organización inicial guiada; interfaz mínima. |
| Los asistentes de IA generales cubren la redacción | Alta / Medio | No competir en redacción sola: memoria del trabajo, plazos, verificación de citas, sincronización y privacidad. |
| Alcance creciente | Alta / Alto | Una materia, una jurisdicción, fases con criterios de salida. |
| Copias no autorizadas | Media / Bajo | Valor en actualizaciones, paquetes y sincronización; sin esfuerzo desproporcionado. |
| Derechos de autor de contenido de terceros | Media / Medio | Solo normativa oficial y contenido propio o licenciado; revisar términos de cada fuente. |

---

## 21. Equipo y presupuesto

### Roles mínimos

- **Desarrollo full-stack en TypeScript** (1 o 2 personas), con experiencia en aplicaciones de escritorio y, para la Fase 3, en sistemas distribuidos o sincronización.
- **Abogado asesor** (tiempo parcial): revisa normas, plantillas, reglas de plazos, prompts y evaluación.
- **Diseño de interfaz** (por horas o proyecto).
- **Soporte e instalación** (desde la Fase 1 con los pilotos).
- **Revisor de seguridad externo** (antes de la Fase 3b).

### Costos (orden de magnitud, a validar)

- **Desarrollo y asesoría:** el costo dominante.
- **Firma de código** (Windows) y **cuenta de desarrollador** (macOS): costos anuales **[VERIFICAR].**
- **Infraestructura hasta la Fase 3:** mínima (sitio de descargas, actualizaciones y catálogos firmados).
- **Relé (Fase 3b):** proporcional al almacenamiento; **[VERIFICAR]** con estimaciones reales de tamaño por despacho.
- **Revisión de seguridad externa** y **asesoría legal** (términos, privacidad, protección de datos).
- **IA:** ninguno de tu lado (el abogado usa su proveedor).

---

## 22. Primeras 4 semanas: lista de acción

**Semana 1**
- [ ] Definir materia, jurisdicción y sistema operativo inicial.
- [ ] Listar 10 abogados y agendar entrevistas; preparar guion (Apéndice A) y acuerdo de confidencialidad para pilotos.
- [ ] Preparar el entorno de pruebas con equipos reales (Windows 10 y 11).
- [ ] Empezar [SPIKE S1] (Tauri con núcleo TypeScript compilado) y [SPIKE S2] (SQLite, búsqueda y cifrado).

**Semana 2**
- [ ] Realizar las entrevistas y resumir hallazgos.
- [ ] Acordar el piloto de organización de archivo con 3 abogados.
- [ ] Reunir normas en PDF y 10 a 20 memoriales anonimizados.
- [ ] [SPIKE S3] (extracción y OCR) y [SPIKE S4] (adaptador de IA y formato).

**Semana 3**
- [ ] [SPIKE S5] (sincronización cifrada mínima con simulación).
- [ ] Decisión de continuar según criterios de la Fase 0; actualizar la sección 2 con los resultados.
- [ ] Definir estructura de precios preliminar con lo aprendido.

**Semana 4**
- [ ] Repositorio, integración continua y **primer instalador firmado de prueba.**
- [ ] Esquema de datos con las reglas "listo para sincronizar" (7.1).
- [ ] Prototipo: arrastrar archivos, extraer texto, guardar y buscar.
- [ ] Demo a los 3 abogados piloto y registro de sus reacciones.

---

## 23. Decisiones pendientes

| Decisión | Responsable | Fecha límite |
|---|---|---|
| Materia inicial | Fundador | Semana 1 |
| Jurisdicción inicial | Fundador | Semana 1 |
| Sistema operativo inicial (Windows) | Fundador | Semana 1 |
| Nombre y dominio | Fundador | Semana 1 |
| Runtime del núcleo (Bun o Node empaquetado) | Desarrollo | Tras [SPIKE S1] |
| Estrategia de cifrado de base de datos | Desarrollo | Tras [SPIKE S2] |
| Proveedor de alojamiento del relé | Desarrollo | Antes de la Fase 3b |
| Estructura de precios y periodo de actualizaciones de la licencia | Fundador | Al terminar la Fase 1 |
| Política de datos, términos y contrato de tratamiento | Fundador + asesoría legal | Antes de los pilotos con datos reales |
| Reglas de plazos por jurisdicción | Abogado asesor | Antes de la Fase 2 |

---

## Apéndice A. Guion de entrevista con abogados

**Sobre su trabajo**
1. ¿Cuántos escritos redactas por semana y de qué tipos?
2. Cuéntame lo último que redactaste: ¿desde dónde empezaste (de cero, de un modelo, de un caso anterior)?
3. ¿Dónde guardas tus escritos? ¿Cuánto tardas en encontrar uno que ya hiciste?
4. ¿Qué parte de redactar te quita más tiempo?
5. ¿Cómo controlas tus plazos y audiencias? ¿Alguna vez estuviste cerca de perder uno?
6. ¿Cómo llevas honorarios y cobros?
7. ¿Qué tareas repetitivas te gustaría no volver a hacer?
8. Si pudieras resolver **una sola cosa** de tu día a día, ¿cuál sería?

**Sobre su entorno técnico**
9. ¿Cuántas computadoras usa el despacho? ¿Qué sistema operativo, y de qué antigüedad aproximada (memoria y disco)?
10. ¿Trabajan varias personas con los mismos expedientes? ¿Cómo los comparten hoy?
11. ¿Dónde guardas tus respaldos y cuándo fue la última vez que restauraste algo?
12. ¿Tienen internet estable en la oficina? ¿Usan las mismas computadoras en casa y en la oficina?
13. ¿Quién te instala programas o te ayuda con problemas técnicos?

**Sobre confidencialidad e IA**
14. ¿Usas alguna herramienta de IA hoy? ¿Con qué datos te sientes cómodo compartiendo y con cuáles no?
15. ¿Qué garantías te harían confiar en un sistema que guarda tus casos (datos en tu equipo, cifrado, respaldos)?

**Sobre dinero**
16. ¿Qué pagas hoy por herramientas y qué te haría pagar por una nueva? ¿Prefieres pago único o cuota?
17. ¿Aceptarías que organice gratis tu archivo de escritos como prueba, con confidencialidad?

**Regla:** preguntar por lo que hicieron, no por lo que harían. No vender; escuchar.

---

## Apéndice B. Prompt base del motor de redacción

Reglas fijas que el sistema incluye en cada tarea (bloque inmutable) y formato de salida analizable:

```
Eres un asistente de redacción jurídica para un abogado. Redactas borradores
que el abogado revisará.

REGLAS OBLIGATORIAS
1. Usa SOLO los hechos y datos proporcionados. No agregues ninguno.
2. Cita normas SOLAMENTE con el marcador [[CITA:id]] y SOLO con ids de la
   lista entregada. Nunca escribas el texto de un artículo ni un número de
   artículo por tu cuenta.
3. Si crees que otra norma podría aplicar, ponla en <sugerencias>, fuera
   del escrito.
4. No cites jurisprudencia ni doctrina que no esté en el material entregado.
5. Si falta un dato, escribe [FALTA: descripción]. Nunca lo inventes.
6. Respeta el orden y los títulos de la plantilla.
7. Usa la persona gramatical indicada por la plantilla.
8. No opines sobre probabilidades de éxito ni sobre estrategia procesal.
9. Conserva tal cual los marcadores de persona (por ejemplo {{DEMANDANTE_1}}).
10. Responde SOLO con el formato de salida indicado, sin texto adicional.

ENTRADAS
- Tarea y sección a redactar: ...
- Datos del caso (anonimizados): ...
- Hechos aprobados (numerados): ...
- Artículos disponibles (ids): ...
- Tono: formal | conciso | contundente

FORMATO DE SALIDA
<seccion id="NOMBRE_DE_LA_SECCION">
Texto con marcadores [[CITA:id]] y [FALTA: ...] cuando corresponda.
</seccion>
<sugerencias>
Normas adicionales que podrían aplicar y por qué (una por línea).
</sugerencias>
<faltantes>
Lista de datos que faltan.
</faltantes>
```

---

## Apéndice C. Ejemplo de modelo con variables

```
SUMILLA: {{sumilla}}

SEÑOR {{autoridad_destinataria}}:

{{parte_1_nombre}}, con documento de identidad {{parte_1_documento}},
con domicilio en {{parte_1_domicilio}}, en el proceso {{tipo_proceso}}
seguido contra {{parte_2_nombre}}, expediente {{numero_expediente}},
ante usted digo:

I. HECHOS
{{#repetir hechos}}
{{numero}}. {{hecho}}
{{/repetir}}

II. FUNDAMENTOS DE DERECHO
{{fundamentos}}   (sección generada: razonamiento + [[CITA:id]] literales)

III. PETITORIO
{{petitorio}}

{{#opcional otrosies}}
OTROSÍ: {{otrosi}}
{{/opcional}}

{{lugar}}, {{fecha}}.

{{firma_abogado}}
```

Tipos de sección: **fija** (siempre igual), **opcional** (el abogado decide) y **repetible** (se multiplica, por ejemplo hechos o pruebas).

---

## Apéndice D. Formatos de norma y de paquete normativo

### Norma en .md

```
---
id: cpc
nombre: Código de Procedimiento Civil (ejemplo)
tipo: codigo
numero: (número oficial)
fecha_promulgacion: AAAA-MM-DD
jurisdiccion: (país / ámbito)
vigencia: vigente
fuente: (enlace o publicación oficial)
version_paquete: AAAA-MM-DD
ultima_verificacion: AAAA-MM-DD
---

# Título I: (nombre)

## Capítulo I: (nombre)

### Artículo 123 {#cpc-art-123}
(Texto literal del artículo, sin modificar.)

**Reformas:** (fecha y norma que lo modificó, si aplica)
**Estado:** vigente
```

Reglas: un archivo por norma; identificador estable por artículo (`{norma}-art-{número}`); texto **literal**; las reformas generan una **nueva versión de paquete** sin borrar la anterior.

### Manifiesto del paquete

```
{
  "paquete": "normativa-materia-jurisdiccion",
  "version": "AAAA.MM.DD",
  "contenido": [
    { "archivo": "cpc.md", "sha256": "..." },
    { "archivo": "prompts/fundamentos-v3.json", "sha256": "..." }
  ],
  "compatible_con_app": ">=1.2.0",
  "firma": "(firma digital del manifiesto)"
}
```

La aplicación comprueba la firma del manifiesto y la huella de cada archivo antes de instalar.

---

## Apéndice E. Catálogo de proveedores (formato de datos)

El catálogo se distribuye firmado y se actualiza sin cambiar la aplicación. Los valores son **ejemplos a verificar** antes de publicar.

```
{
  "version": "AAAA.MM.DD",
  "proveedores": [
    {
      "id": "ollama-local",
      "nombre": "Ollama (en este equipo)",
      "tipo": "local",
      "base_url": "http://localhost:11434/v1",
      "requiere_clave": false,
      "semaforo": "verde",
      "notas": "Los datos no salen del equipo. Requiere instalar Ollama y descargar un modelo.",
      "ultima_verificacion": "AAAA-MM-DD"
    },
    {
      "id": "openrouter",
      "nombre": "OpenRouter",
      "tipo": "api_openai",
      "base_url": "https://openrouter.ai/api/v1",
      "requiere_clave": true,
      "semaforo": "rojo_para_modelos_gratuitos",
      "notas": "Los modelos gratuitos pueden usar los datos. Lista de modelos gratuitos cambiante.",
      "ultima_verificacion": "AAAA-MM-DD"
    },
    {
      "id": "opencode-zen",
      "nombre": "OpenCode Zen",
      "tipo": "api_openai",
      "base_url": "https://opencode.ai/zen/v1",
      "requiere_clave": true,
      "semaforo": "rojo_para_modelos_gratuitos",
      "notas": "Modelos gratuitos con posible uso temporal de datos; verificar condiciones.",
      "ultima_verificacion": "AAAA-MM-DD"
    },
    {
      "id": "ollama-cloud",
      "nombre": "Ollama Cloud",
      "tipo": "api_openai",
      "base_url": "(verificar ruta compatible)",
      "requiere_clave": true,
      "semaforo": "amarillo",
      "notas": "Plan gratuito con límites; revisar política de datos.",
      "ultima_verificacion": "AAAA-MM-DD"
    },
    {
      "id": "puente",
      "nombre": "Modo puente (copiar y pegar)",
      "tipo": "manual",
      "semaforo": "segun_servicio_usado",
      "notas": "La confidencialidad depende del asistente que use el abogado; la anonimización aplica siempre."
    }
  ]
}
```

Campos por proveedor: identificador, nombre, tipo (`local`, `api_openai`, `manual`), dirección base, si requiere clave, semáforo, notas, fecha de última verificación y, opcionalmente, modelos sugeridos por tarea.

---

## Apéndice F. Borrador del protocolo de sincronización

### Operación (antes de cifrar)

```
{
  "op_id": "(UUIDv7)",
  "dispositivo": "(id del dispositivo)",
  "hlc": "(reloj lógico híbrido)",
  "esquema": 3,
  "entidad": "caso",
  "entidad_id": "(UUIDv7)",
  "tipo": "set | delete | version_add | archivo_ref",
  "cambio": { "titulo": "...", "estado": "activo" },
  "padre": "(id de versión previa, solo para escritos)",
  "firma": "(firma Ed25519 del dispositivo)"
}
```

### Sobre (lo que viaja y se guarda en el relé)

```
{
  "despacho": "(id)",
  "dispositivo": "(id)",
  "seq": 1042,
  "id_clave": "(versión de la clave del despacho)",
  "nonce": "...",
  "cifrado": "(operación cifrada y autenticada)"
}
```

### Relé (borrador de interfaz)

| Método | Ruta | Función |
|---|---|---|
| POST | `/v1/ops` | Enviar un lote de sobres. |
| GET | `/v1/ops?despues=CURSOR` | Pedir sobres posteriores al cursor. |
| PUT / GET | `/v1/archivos/{huella}` | Subir y descargar archivos cifrados. |
| POST | `/v1/dispositivos` | Registrar un dispositivo. |
| DELETE | `/v1/dispositivos/{id}` | Revocar un dispositivo. |

Autenticación: firma del dispositivo sobre cada petición, con protección contra repetición.

### Reglas del protocolo

- Las operaciones se firman **antes** de cifrar; el receptor verifica firma y esquema.
- El cursor es por dispositivo emisor; aplicar dos veces la misma operación no cambia el resultado.
- Los dispositivos con esquema incompatible no aplican operaciones; piden actualizar.
- Instantáneas periódicas (también cifradas) permiten a un dispositivo nuevo ponerse al día sin reproducir todo el historial.

---

## Apéndice G. Checklist de seguridad antes de cada lanzamiento

- [ ] Dependencias fijadas, auditadas y sin vulnerabilidades críticas conocidas.
- [ ] Instalador y ejecutables firmados; probados contra antivirus habituales.
- [ ] Actualización firmada verificada de extremo a extremo (versión anterior a nueva).
- [ ] Ningún dato del despacho en registros de diagnóstico ni en archivos temporales sin cifrar.
- [ ] Claves API solo en el almacén seguro del sistema operativo.
- [ ] Puerto de sincronización cerrado cuando el modo red local está desactivado.
- [ ] Anonimización: 0 fugas en el conjunto de pruebas.
- [ ] Verificador de citas: 100% de aciertos en el conjunto de evaluación.
- [ ] Respaldo y restauración probados en un equipo limpio.
- [ ] Simulador de sincronización: convergencia en todas las ejecuciones de la versión.
- [ ] Migración de datos probada con copias reales anonimizadas y copia previa automática.
- [ ] Paquetes normativos y catálogo firmados con la clave fuera de línea.
- [ ] Revisión externa de seguridad al día (obligatoria antes de habilitar sincronización en línea).