/* ---------- Datos del arancel ---------- */
const PAYLOAD = {
        "items": [
          {
            "categoria": "1. Materia Constitucional",
            "subcategoria": null,
            "detalle": "Acción de libertad",
            "porcentaje_adicional": "En todas, más el 10% del monto litigado y/o resarcimiento",
            "monto_la_paz_bs": "6.621",
            "id": 0,
            "que_es": "Acción de defensa constitucional que protege el derecho a la vida, la libertad física y de locomoción, y el debido proceso vinculado a la privación de libertad.",
            "cuando_aplica": "Se usa cuando una persona es detenida, procesada o perseguida ilegal o indebidamente, cuando su vida está en peligro, o cuando se restringe su libertad de circulación sin cumplir los requisitos legales. Puede presentarla la propia persona o cualquier otra en su nombre, sin necesidad de abogado, y se resuelve con carácter de urgencia."
          },
          {
            "categoria": "1. Materia Constitucional",
            "subcategoria": null,
            "detalle": "Acción de amparo constitucional",
            "porcentaje_adicional": "En todas, más el 10% del monto litigado y/o resarcimiento",
            "monto_la_paz_bs": "6.621",
            "id": 1,
            "que_es": "Acción de defensa de carácter residual que protege los derechos y garantías reconocidos por la Constitución y los tratados, cuando no existe otro medio de defensa idóneo.",
            "cuando_aplica": "Aplica frente a actos u omisiones ilegales o indebidos de servidores públicos o de particulares que restrinjan, supriman o amenacen derechos distintos de los protegidos por libertad, privacidad, cumplimiento o acción popular. Debe interponerse dentro de los 6 meses de conocido el hecho."
          },
          {
            "categoria": "1. Materia Constitucional",
            "subcategoria": null,
            "detalle": "Acción de protección de privacidad",
            "porcentaje_adicional": "En todas, más el 10% del monto litigado y/o resarcimiento",
            "monto_la_paz_bs": "8.155",
            "id": 2,
            "que_es": "Equivalente boliviano del hábeas data: protege el derecho a la intimidad, la propia imagen y la autodeterminación informativa.",
            "cuando_aplica": "Se usa cuando una persona necesita conocer, actualizar, rectificar o eliminar datos personales o familiares registrados en bancos de datos públicos o privados, o cuando esa información se usa para afectar sus derechos."
          },
          {
            "categoria": "1. Materia Constitucional",
            "subcategoria": null,
            "detalle": "Acción de cumplimiento",
            "porcentaje_adicional": "En todas, más el 10% del monto litigado y/o resarcimiento",
            "monto_la_paz_bs": "5.602",
            "id": 3,
            "que_es": "Acción de defensa que busca hacer efectivo el cumplimiento de una norma legal o de un deber administrativo que la autoridad omite ejecutar.",
            "cuando_aplica": "Procede cuando un servidor público o autoridad incumple una disposición constitucional o legal expresa, y la parte afectada requiere que un juez ordene su cumplimiento."
          },
          {
            "categoria": "1. Materia Constitucional",
            "subcategoria": null,
            "detalle": "Acción popular",
            "porcentaje_adicional": "En todas, más el 10% del monto litigado y/o resarcimiento",
            "monto_la_paz_bs": "2.544",
            "id": 4,
            "que_es": "Acción de defensa que protege derechos e intereses colectivos o difusos: patrimonio, medio ambiente, salud pública, consumidores, etc.",
            "cuando_aplica": "Puede interponerla cualquier persona, sin necesidad de acreditar interés personal directo, contra actos u omisiones que amenacen o vulneren esos derechos colectivos."
          },
          {
            "categoria": "1. Materia Constitucional",
            "subcategoria": null,
            "detalle": "Acción de inconstitucionalidad abstracta",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "8.155",
            "id": 5,
            "que_es": "Mecanismo de control normativo que analiza, en abstracto y con efectos generales, si una ley, decreto o resolución es compatible con la Constitución.",
            "cuando_aplica": "Solo puede plantearla ante el Tribunal Constitucional Plurinacional un grupo reducido de autoridades legitimadas (Presidencia, asambleístas, autoridades ejecutivas territoriales, Defensoría del Pueblo, etc.), sin que exista necesariamente un proceso judicial en curso."
          },
          {
            "categoria": "1. Materia Constitucional",
            "subcategoria": null,
            "detalle": "Acción de inconstitucionalidad concreta",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "8.155",
            "id": 6,
            "que_es": "Control de constitucionalidad que se plantea dentro de un proceso judicial o administrativo ya en trámite, cuando la norma que debe aplicarse se considera contraria a la Constitución.",
            "cuando_aplica": "La promueve cualquiera de las partes del proceso, o el juez de oficio; el trámite suspende la causa principal hasta que el Tribunal Constitucional resuelva sobre la norma cuestionada."
          },
          {
            "categoria": "1. Materia Constitucional",
            "subcategoria": null,
            "detalle": "Conflictos de competencia",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "6.621",
            "id": 7,
            "que_es": "Proceso constitucional que resuelve controversias sobre qué autoridad jurisdiccional es competente para conocer un asunto.",
            "cuando_aplica": "Se activa cuando dos o más jueces o tribunales se disputan, o ambos rechazan, el conocimiento de una misma causa."
          },
          {
            "categoria": "1. Materia Constitucional",
            "subcategoria": null,
            "detalle": "Conflictos de competencia y atribuciones entre órganos del poder público",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "5.602",
            "id": 8,
            "que_es": "Proceso constitucional que dirime controversias sobre las atribuciones asignadas por la Constitución a los órganos Ejecutivo, Legislativo, Judicial o Electoral.",
            "cuando_aplica": "Aplica cuando dos órganos del poder público reclaman para sí una misma atribución o se niegan a ejercer una competencia que la Constitución les asigna."
          },
          {
            "categoria": "1. Materia Constitucional",
            "subcategoria": null,
            "detalle": "Conflictos de competencia entre nivel central del Estado y las ETA y entre estas",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "5.602",
            "id": 9,
            "que_es": "Proceso constitucional que resuelve disputas de competencia entre el nivel central del Estado y las Entidades Territoriales Autónomas, o entre estas últimas entre sí.",
            "cuando_aplica": "Se usa cuando dos niveles de gobierno reclaman ejercer la misma competencia asignada por la Constitución o la Ley Marco de Autonomías."
          },
          {
            "categoria": "1. Materia Constitucional",
            "subcategoria": null,
            "detalle": "Conflictos de competencia entre jurisdicción indígena originaria campesina y jurisdicción ordinaria y agroambiental",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "5.602",
            "id": 10,
            "que_es": "Proceso constitucional que determina qué jurisdicción -indígena originaria campesina u ordinaria/agroambiental- debe conocer un caso concreto.",
            "cuando_aplica": "Aplica cuando existe duda o disputa sobre si un asunto corresponde a la justicia comunitaria indígena o a la justicia ordinaria/agroambiental."
          },
          {
            "categoria": "1. Materia Constitucional",
            "subcategoria": null,
            "detalle": "Recurso contra tributos, impuestos, tasas, patentes, derechos o contribuciones especiales",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "8.155",
            "id": 11,
            "que_es": "Recurso ante el Tribunal Constitucional que cuestiona la constitucionalidad de un tributo, tasa, patente o contribución especial creada por ley u ordenanza.",
            "cuando_aplica": "Se plantea cuando el tributo fue creado sin cumplir los requisitos constitucionales, por ejemplo por una autoridad sin competencia para crearlo."
          },
          {
            "categoria": "1. Materia Constitucional",
            "subcategoria": null,
            "detalle": "Recursos contra resoluciones del Órgano Legislativo",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "8.155",
            "id": 12,
            "que_es": "Recurso constitucional contra resoluciones camarales o de la Asamblea Legislativa que afecten a una o más personas.",
            "cuando_aplica": "Procede cuando una resolución legislativa concreta -no una ley en abstracto- lesiona derechos de un particular determinado."
          },
          {
            "categoria": "1. Materia Constitucional",
            "subcategoria": null,
            "detalle": "Recurso directo de nulidad",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "8.155",
            "id": 13,
            "que_es": "Acción que declara la nulidad de los actos de una autoridad que asume una competencia o jurisdicción que no le corresponde (usurpación de funciones).",
            "cuando_aplica": "Se usa cuando una autoridad judicial o administrativa actúa sin competencia, ha sido depuesta o cesada, o usurpa funciones que no le fueron conferidas por ley."
          },
          {
            "categoria": "2. Materia Civil",
            "subcategoria": "Proceso cautelar y de conocimiento",
            "detalle": "Proceso cautelar",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "3.563",
            "id": 14,
            "que_es": "Conjunto de medidas provisionales (embargo preventivo, anotación preventiva, secuestro, etc.) destinadas a asegurar el resultado de un proceso.",
            "cuando_aplica": "Se solicita cuando existe riesgo de que, mientras dura el juicio principal, el demandado oculte, disponga o deteriore bienes que garantizarían el cumplimiento de la futura sentencia."
          },
          {
            "categoria": "2. Materia Civil",
            "subcategoria": "Proceso cautelar y de conocimiento",
            "detalle": "Proceso ordinario",
            "porcentaje_adicional": "Más el 10% con cuantía",
            "monto_la_paz_bs": "10.598",
            "id": 15,
            "que_es": "Vía procesal civil general y de mayor extensión probatoria, usada para las pretensiones que no tienen un trámite especial asignado.",
            "cuando_aplica": "Aplica a la mayoría de conflictos civiles de fondo -cumplimiento de contratos, responsabilidad civil, nulidades, reivindicación, etc.- que requieren un debate amplio de hechos y pruebas."
          },
          {
            "categoria": "2. Materia Civil",
            "subcategoria": "Proceso cautelar y de conocimiento",
            "detalle": "Proceso extraordinario",
            "porcentaje_adicional": "Más 5% sobre la cuantía",
            "monto_la_paz_bs": "6.621",
            "id": 16,
            "que_es": "Vía procesal civil abreviada respecto del proceso ordinario, con plazos y etapas más cortas.",
            "cuando_aplica": "Se usa para asuntos de menor complejidad, o cuando la ley expresamente remite a esta vía más rápida."
          },
          {
            "categoria": "2. Materia Civil",
            "subcategoria": "Proceso cautelar y de conocimiento",
            "detalle": "Proceso de estructura monitoria",
            "porcentaje_adicional": "Más 5% sobre la cuantía",
            "monto_la_paz_bs": "4.582",
            "id": 17,
            "que_es": "Proceso civil rápido pensado para el cobro de obligaciones documentadas -deudas líquidas y exigibles- sin necesidad de un juicio ordinario completo.",
            "cuando_aplica": "Aplica cuando se cuenta con un documento que acredita la deuda; si el deudor no se opone en el plazo señalado, la orden de pago queda firme y pasa directamente a ejecución."
          },
          {
            "categoria": "2. Materia Civil",
            "subcategoria": "Proceso cautelar y de conocimiento",
            "detalle": "Procesos concursales",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "7.641",
            "id": 18,
            "que_es": "Procedimientos que organizan el concurso de todos los acreedores frente a un deudor común para el cobro ordenado de sus créditos.",
            "cuando_aplica": "Se usa cuando un deudor tiene múltiples acreedores y bienes insuficientes, y es necesario repartir el patrimonio conforme al orden de preferencia legal."
          },
          {
            "categoria": "2. Materia Civil",
            "subcategoria": "Proceso cautelar y de conocimiento",
            "detalle": "Procesos voluntarios",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "5.097",
            "id": 19,
            "que_es": "Trámites de jurisdicción voluntaria en los que no existe controversia entre partes, sino la necesidad de una autorización, homologación o declaración judicial.",
            "cuando_aplica": "Aplica, por ejemplo, para autorizaciones judiciales o cualquier gestión civil que la ley exige tramitar ante un juez sin que exista litigio."
          },
          {
            "categoria": "2. Materia Civil",
            "subcategoria": "Proceso cautelar y de conocimiento",
            "detalle": "Proceso de cooperación judicial internacional",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "7.065",
            "id": 20,
            "que_es": "Mecanismo mediante el cual jueces bolivianos y de otros países se prestan auxilio procesal (notificaciones, pruebas, exhortos, embargos) en causas con elementos extranjeros.",
            "cuando_aplica": "Se usa cuando un proceso requiere diligencias, pruebas o medidas cautelares que deben ejecutarse fuera de Bolivia, o viceversa."
          },
          {
            "categoria": "2. Materia Civil",
            "subcategoria": "Medios de impugnación",
            "detalle": "Recurso de reposición",
            "porcentaje_adicional": "En todos los recursos, más el 10% del monto litigado y/o resarcimiento",
            "monto_la_paz_bs": "1.019",
            "id": 21,
            "que_es": "Recurso que se interpone ante el mismo juez que dictó una providencia o auto, pidiéndole que la revise y modifique.",
            "cuando_aplica": "Se usa contra decretos y autos de mero trámite que no ponen fin al proceso, cuando la parte considera que hay un error que el propio juez puede corregir."
          },
          {
            "categoria": "2. Materia Civil",
            "subcategoria": "Medios de impugnación",
            "detalle": "Recurso de apelación",
            "porcentaje_adicional": "En todos los recursos, más el 10% del monto litigado y/o resarcimiento",
            "monto_la_paz_bs": "5.097",
            "id": 22,
            "que_es": "Recurso ordinario mediante el cual una parte pide que un tribunal superior revise una resolución de primera instancia.",
            "cuando_aplica": "Procede contra sentencias y autos definitivos, o interlocutorios que causen agravio irreparable, dictados por el juez de primera instancia."
          },
          {
            "categoria": "2. Materia Civil",
            "subcategoria": "Medios de impugnación",
            "detalle": "Recurso de casación",
            "porcentaje_adicional": "En todos los recursos, más el 10% del monto litigado y/o resarcimiento",
            "monto_la_paz_bs": "8.155",
            "id": 23,
            "que_es": "Recurso extraordinario ante el Tribunal Supremo de Justicia que revisa errores de derecho o violaciones a normas procesales esenciales en un fallo de segunda instancia.",
            "cuando_aplica": "Se usa contra autos de vista (resoluciones de apelación) cuando se considera que el tribunal de alzada aplicó mal la ley o violó normas procesales esenciales."
          },
          {
            "categoria": "2. Materia Civil",
            "subcategoria": "Medios de impugnación",
            "detalle": "Compulsa",
            "porcentaje_adicional": "En todos los recursos, más el 10% del monto litigado y/o resarcimiento",
            "monto_la_paz_bs": "2.544",
            "id": 24,
            "que_es": "Recurso que se plantea cuando el juez inferior deniega indebidamente un recurso de apelación o casación.",
            "cuando_aplica": "Se usa para pedir al tribunal superior que ordene al juez inferior conceder el recurso que había rechazado."
          },
          {
            "categoria": "2. Materia Civil",
            "subcategoria": "Medios de impugnación",
            "detalle": "Ejecución de sentencia",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "5.047",
            "id": 25,
            "que_es": "Etapa procesal destinada a hacer cumplir forzosamente lo resuelto en una sentencia firme.",
            "cuando_aplica": "Aplica cuando la parte vencedora necesita que el obligado cumpla la sentencia -pago, entrega de un bien, hacer o no hacer algo- y este no lo hace voluntariamente."
          },
          {
            "categoria": "2. Materia Civil",
            "subcategoria": "Medios de impugnación",
            "detalle": "Sumario primera y segunda instancia",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "4.037",
            "id": 26,
            "que_es": "Trámite incidental breve, resuelto con un procedimiento simplificado, dentro de un proceso principal, en primera o segunda instancia.",
            "cuando_aplica": "Se usa para resolver cuestiones accesorias o incidentes que surgen durante el proceso y que la ley ordena tramitar de forma sumaria."
          },
          {
            "categoria": "2. Materia Civil",
            "subcategoria": "Medios de impugnación",
            "detalle": "Recurso extraordinario de revisión de sentencia",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "8.155",
            "id": 27,
            "que_es": "Recurso excepcional que permite reabrir un proceso civil ya resuelto por sentencia firme, en casos taxativamente previstos por la ley.",
            "cuando_aplica": "Procede, por ejemplo, cuando aparecen documentos decisivos ocultados por la contraparte, la sentencia se basó en prueba falsa, o hubo fraude procesal."
          },
          {
            "categoria": "2. Materia Civil",
            "subcategoria": "Medios de impugnación",
            "detalle": "Medidas preliminares",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "3.250",
            "id": 28,
            "que_es": "Diligencias que se solicitan antes de presentar una demanda, para preparar el proceso.",
            "cuando_aplica": "Se usan para asegurar prueba, verificar hechos, identificar al futuro demandado o aclarar aspectos indispensables para plantear correctamente la demanda."
          },
          {
            "categoria": "2. Materia Civil",
            "subcategoria": "Medios de impugnación",
            "detalle": "Juicios monitorios",
            "porcentaje_adicional": "Más el 5% si tiene cuantía",
            "monto_la_paz_bs": "5.850",
            "id": 29,
            "que_es": "Proceso especial -equivalente al de estructura monitoria- orientado a obtener rápidamente una orden de pago u otra prestación exigible.",
            "cuando_aplica": "Se aplica cuando el crédito reclamado consta en un documento o título que hace presumir su existencia, y el deudor no opone excepciones dentro de plazo."
          },
          {
            "categoria": "2. Materia Civil",
            "subcategoria": "Procesos de ejecución",
            "detalle": "Juicio ejecutivo o coactivo civil",
            "porcentaje_adicional": "Más el 5% si tiene cuantía",
            "monto_la_paz_bs": "6.500",
            "id": 30,
            "que_es": "Proceso especial de cobro basado en un título ejecutivo -pagaré, letra de cambio, escritura pública de deuda, entre otros- que trae aparejada ejecución.",
            "cuando_aplica": "Se usa para cobrar una obligación de dar suma de dinero líquida y exigible, cuando se cuenta con un documento que la ley reconoce como título ejecutivo."
          },
          {
            "categoria": "2. Materia Civil",
            "subcategoria": "Procesos de ejecución",
            "detalle": "Concurso de acreedores",
            "porcentaje_adicional": "Más el 10% sobre la cuantía de créditos",
            "monto_la_paz_bs": "3.900",
            "id": 31,
            "que_es": "Proceso en el que todos los acreedores de un mismo deudor concurren para hacer valer y cobrar sus créditos de forma ordenada.",
            "cuando_aplica": "Se aplica cuando varios acreedores reclaman al mismo tiempo sobre el patrimonio insuficiente de un deudor y debe fijarse el orden de prelación de pagos."
          },
          {
            "categoria": "2. Materia Civil",
            "subcategoria": "Procesos de ejecución",
            "detalle": "Tercería de dominio excluyente",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "2.600",
            "id": 32,
            "que_es": "Reclamo que presenta un tercero ajeno al proceso, alegando ser propietario de bienes embargados en una ejecución seguida contra otra persona.",
            "cuando_aplica": "Se usa cuando se embargan bienes que en realidad pertenecen a alguien distinto del ejecutado, para excluirlos del embargo."
          },
          {
            "categoria": "2. Materia Civil",
            "subcategoria": "Procesos de ejecución",
            "detalle": "Tercería coadyuvante",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "2.600",
            "id": 33,
            "que_es": "Intervención de un tercero que se suma a una de las partes del proceso para reforzar su posición o hacer valer un derecho propio conexo.",
            "cuando_aplica": "Se usa cuando un tercero tiene interés jurídico en el resultado del proceso ajeno y decide apoyar activamente a una de las partes."
          },
          {
            "categoria": "2. Materia Civil",
            "subcategoria": "Procesos de ejecución",
            "detalle": "Tercería de derecho preferente",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "2.600",
            "id": 34,
            "que_es": "Reclamo de un acreedor que alega tener un crédito preferente al del ejecutante, sobre el mismo bien embargado.",
            "cuando_aplica": "Se usa cuando otro acreedor considera que su crédito debe cobrarse antes que el del acreedor que inició la ejecución."
          },
          {
            "categoria": "2. Materia Civil",
            "subcategoria": "Procesos de ejecución",
            "detalle": "Interdictos",
            "porcentaje_adicional": "Más el 10% sobre la cuantía",
            "monto_la_paz_bs": "9.100",
            "id": 35,
            "que_es": "Acciones posesorias sumarias que protegen la posesión -no la propiedad- de un bien frente a perturbaciones o despojos.",
            "cuando_aplica": "Se usan para recuperar la posesión perdida, hacer cesar una perturbación actual, o impedir una obra nueva que amenace la posesión, sin necesidad de discutir quién es el dueño."
          },
          {
            "categoria": "2. Materia Civil",
            "subcategoria": "Procesos de ejecución",
            "detalle": "Declaratoria de herederos",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "5.200",
            "id": 36,
            "que_es": "Trámite mediante el cual se declara judicial o notarialmente quiénes son los herederos legales de una persona fallecida.",
            "cuando_aplica": "Se usa para que los sucesores puedan acreditar su calidad de herederos y disponer de los bienes de la herencia."
          },
          {
            "categoria": "2. Materia Civil",
            "subcategoria": "Procesos de ejecución",
            "detalle": "Renuncia de herencia y aceptación con beneficio de inventario",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "3.250",
            "id": 37,
            "que_es": "Trámite mediante el cual un heredero renuncia a la herencia, o la acepta limitando su responsabilidad por las deudas del causante al valor de los bienes heredados.",
            "cuando_aplica": "Se usa cuando el heredero no quiere asumir la herencia, o cuando existen dudas sobre si las deudas del fallecido superan el activo de la herencia."
          },
          {
            "categoria": "2. Materia Civil",
            "subcategoria": "Procesos de ejecución",
            "detalle": "Por división y participación de bienes",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "7.150",
            "id": 38,
            "que_es": "Proceso para dividir y repartir bienes en copropiedad -por ejemplo, una herencia- entre quienes tienen derecho sobre ellos.",
            "cuando_aplica": "Aplica cuando los copropietarios o coherederos no logran un acuerdo directo sobre cómo repartir los bienes comunes."
          },
          {
            "categoria": "2. Materia Civil",
            "subcategoria": "Procesos de ejecución",
            "detalle": "Declaración de ausencia y presunción de muerte",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "3.250",
            "id": 39,
            "que_es": "Trámite judicial que declara ausente, o presuntamente fallecida, a una persona de la que no se tienen noticias por un tiempo prolongado.",
            "cuando_aplica": "Se usa cuando es necesario regularizar el patrimonio, la representación legal o el estado civil de alguien cuyo paradero se desconoce."
          },
          {
            "categoria": "2. Materia Civil",
            "subcategoria": "Procesos de ejecución",
            "detalle": "Oferta de pagos y consignación",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "1.950",
            "id": 40,
            "que_es": "Procedimiento que permite al deudor depositar judicialmente el pago cuando el acreedor se niega a recibirlo o no puede hacerlo.",
            "cuando_aplica": "Se usa cuando el acreedor rechaza injustificadamente el pago, está ausente, o hay incertidumbre sobre quién debe recibirlo, para liberar al deudor de la obligación."
          },
          {
            "categoria": "2. Materia Civil",
            "subcategoria": "Procesos de ejecución",
            "detalle": "Recurso de revisión de sentencia",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "5.200",
            "id": 41,
            "que_es": "Mismo recurso extraordinario de revisión de sentencia civil, listado aquí dentro de los procesos de ejecución.",
            "cuando_aplica": "Procede cuando aparecen, luego de la sentencia firme, hechos o pruebas que antes no pudieron conocerse y que cambian el resultado del caso."
          },
          {
            "categoria": "3. Materia Penal",
            "subcategoria": null,
            "detalle": "Etapa preliminar hasta la conclusión de la etapa",
            "porcentaje_adicional": "Más el 10% sobre la cuantía",
            "monto_la_paz_bs": "5.097",
            "id": 42,
            "que_es": "Primera fase del proceso penal, desde la denuncia o querella hasta que el fiscal decide si imputa formalmente al investigado.",
            "cuando_aplica": "Corresponde a la defensa o al patrocinio del cliente desde que toma conocimiento de una investigación en su contra -o como víctima- hasta la imputación formal."
          },
          {
            "categoria": "3. Materia Penal",
            "subcategoria": null,
            "detalle": "Etapa preparatoria del juicio",
            "porcentaje_adicional": "Más el 10% sobre la cuantía",
            "monto_la_paz_bs": "5.097",
            "id": 43,
            "que_es": "Fase del proceso penal, posterior a la imputación formal, en la que el fiscal reúne pruebas para fundamentar la acusación o el sobreseimiento.",
            "cuando_aplica": "Corresponde a la actuación del abogado -defensa o acusación particular- durante toda la investigación formal, hasta la acusación o el sobreseimiento."
          },
          {
            "categoria": "3. Materia Penal",
            "subcategoria": null,
            "detalle": "Juicio oral y público",
            "porcentaje_adicional": "Más el 10% sobre la cuantía",
            "monto_la_paz_bs": "8.155",
            "id": 44,
            "que_es": "Etapa central del proceso penal en la que, ante un tribunal, se presentan y valoran las pruebas y se dicta sentencia.",
            "cuando_aplica": "Aplica cuando el caso llega a juicio -existe acusación formal- y debe litigarse en audiencia oral, pública y contradictoria."
          },
          {
            "categoria": "3. Materia Penal",
            "subcategoria": null,
            "detalle": "Perdón judicial y suspensión de la pena",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "4.550",
            "id": 45,
            "que_es": "Beneficios previstos en el Código Penal que permiten, en delitos leves y bajo ciertos requisitos, perdonar la pena o suspender su ejecución.",
            "cuando_aplica": "Se solicitan cuando el imputado o condenado cumple los requisitos legales -primera condena, pena baja, reparación del daño, etc.- para acceder a estos beneficios."
          },
          {
            "categoria": "3. Materia Penal",
            "subcategoria": null,
            "detalle": "Incidentes en la ejecución penal",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "6.500",
            "id": 46,
            "que_es": "Cuestiones accesorias que se plantean durante el cumplimiento de una condena, por ejemplo redención de pena, libertad condicional o cómputo de la pena.",
            "cuando_aplica": "Se usan mientras la persona ya está cumpliendo condena, para reclamar beneficios penitenciarios o corregir aspectos de la ejecución de la pena."
          },
          {
            "categoria": "3. Materia Penal",
            "subcategoria": null,
            "detalle": "Recurso de reposición",
            "porcentaje_adicional": "Más el 5% sobre la cuantía",
            "monto_la_paz_bs": "3.058",
            "id": 47,
            "que_es": "Recurso que pide al mismo juez o tribunal que dictó una resolución que la reconsidere.",
            "cuando_aplica": "Procede contra providencias y autos que no son apelables, cuando se considera que hay un error que el mismo juzgador puede corregir."
          },
          {
            "categoria": "3. Materia Penal",
            "subcategoria": null,
            "detalle": "Recurso de reposición bajo alternativa de apelación",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "2.650",
            "id": 48,
            "que_es": "Recurso de reposición que, si es rechazado, se convierte automáticamente en un recurso de apelación ante el superior.",
            "cuando_aplica": "Se usa cuando la ley permite plantear la reposición 'con alternativa', de modo que, si el juez no la acoge, el caso pasa directamente al tribunal de apelación sin necesidad de un recurso nuevo."
          },
          {
            "categoria": "3. Materia Penal",
            "subcategoria": null,
            "detalle": "Recurso de apelación incidental",
            "porcentaje_adicional": "Más el 5% sobre la cuantía",
            "monto_la_paz_bs": "3.563",
            "id": 49,
            "que_es": "Apelación que se interpone contra resoluciones dictadas durante el proceso penal sobre cuestiones accesorias -incidentes-, distintas de la sentencia.",
            "cuando_aplica": "Procede contra autos interlocutorios que resuelven medidas cautelares, excepciones u otros incidentes durante la etapa preparatoria o el juicio."
          },
          {
            "categoria": "3. Materia Penal",
            "subcategoria": null,
            "detalle": "Recurso de apelación restringida",
            "porcentaje_adicional": "Más el 5% sobre la cuantía",
            "monto_la_paz_bs": "3.563",
            "id": 50,
            "que_es": "Recurso que se interpone contra la sentencia penal, limitado a errores de derecho -defectos de procedimiento o de fondo- expresamente señalados en la ley.",
            "cuando_aplica": "Se usa para impugnar la sentencia dictada en el juicio oral, cuando se considera que existió una violación a la ley sustantiva o procesal."
          },
          {
            "categoria": "3. Materia Penal",
            "subcategoria": null,
            "detalle": "Recurso de casación",
            "porcentaje_adicional": "Más el 5% sobre la cuantía",
            "monto_la_paz_bs": "5.097",
            "id": 51,
            "que_es": "Recurso extraordinario ante el Tribunal Supremo de Justicia contra el auto de vista que resuelve la apelación restringida, para uniformar la jurisprudencia.",
            "cuando_aplica": "Procede cuando el auto de vista contradice otros precedentes del Tribunal Supremo o de Tribunales Departamentales sobre una misma cuestión de derecho."
          },
          {
            "categoria": "3. Materia Penal",
            "subcategoria": null,
            "detalle": "Recurso de revisión",
            "porcentaje_adicional": "Más el 5% sobre la cuantía",
            "monto_la_paz_bs": "8.155",
            "id": 52,
            "que_es": "Recurso extraordinario que permite revisar una sentencia condenatoria firme, incluso ya ejecutoriada.",
            "cuando_aplica": "Procede en casos taxativos: nuevos hechos o pruebas que demuestren la inocencia, sentencias contradictorias sobre el mismo hecho, prueba falsa, entre otros previstos en la ley."
          },
          {
            "categoria": "3. Materia Penal",
            "subcategoria": null,
            "detalle": "Procedimiento abreviado (con consentimiento entre partes y fiscal)",
            "porcentaje_adicional": "Más el 10% sobre la cuantía",
            "monto_la_paz_bs": "4.582",
            "id": 53,
            "que_es": "Salida procesal que permite concluir el proceso penal de forma anticipada cuando el imputado admite el hecho y acepta la aplicación de este procedimiento.",
            "cuando_aplica": "Se usa cuando el fiscal, el imputado y su defensa acuerdan resolver el caso sin ir a juicio oral, a cambio de una pena generalmente más benigna."
          },
          {
            "categoria": "3. Materia Penal",
            "subcategoria": null,
            "detalle": "Salidas alternativas",
            "porcentaje_adicional": "Más el 10% sobre la cuantía",
            "monto_la_paz_bs": "7.800",
            "id": 54,
            "que_es": "Mecanismos procesales -conciliación, suspensión condicional del proceso, criterios de oportunidad, entre otros- que evitan continuar con el juicio penal ordinario.",
            "cuando_aplica": "Se aplican en delitos de menor gravedad o cuando la ley lo permite, para dar una solución más rápida al conflicto penal."
          },
          {
            "categoria": "3. Materia Penal",
            "subcategoria": null,
            "detalle": "Sanciones alternativas (Ley N.º 348)",
            "porcentaje_adicional": "Más el 10% sobre la cuantía",
            "monto_la_paz_bs": "5.200",
            "id": 55,
            "que_es": "Medidas distintas a la privación de libertad, previstas en la Ley Integral para Garantizar a las Mujeres una Vida Libre de Violencia (Ley N.º 348).",
            "cuando_aplica": "Se solicitan o discuten en procesos por hechos de violencia comprendidos en la Ley N.º 348, cuando corresponde una sanción distinta al encierro."
          },
          {
            "categoria": "3. Materia Penal",
            "subcategoria": null,
            "detalle": "Procedimientos por delitos de acción penal privada",
            "porcentaje_adicional": "Más el 10% sobre la cuantía",
            "monto_la_paz_bs": "5.097",
            "id": 56,
            "que_es": "Vía procesal aplicable a delitos que solo pueden perseguirse por querella directa del ofendido, sin intervención obligatoria del Ministerio Público -por ejemplo, algunos delitos contra el honor-.",
            "cuando_aplica": "Se usa cuando la víctima decide querellarse directamente ante el juez, sin que el fiscal deba impulsar la acción."
          },
          {
            "categoria": "3. Materia Penal",
            "subcategoria": null,
            "detalle": "Procedimiento para la reparación del daño",
            "porcentaje_adicional": "Más el 10% sobre la cuantía",
            "monto_la_paz_bs": "3.563",
            "id": 57,
            "que_es": "Trámite dentro o después del proceso penal orientado a que la víctima obtenga la reparación económica o moral del daño sufrido por el delito.",
            "cuando_aplica": "Se usa una vez establecida la responsabilidad penal -o de forma independiente, según el caso- para cuantificar y cobrar la indemnización correspondiente."
          },
          {
            "categoria": "3. Materia Penal",
            "subcategoria": null,
            "detalle": "Procedimiento para la reparación del daño causado a la víctima por error",
            "porcentaje_adicional": "Más el 8% sobre el monto de la indemnización",
            "monto_la_paz_bs": "13.000",
            "id": 58,
            "que_es": "Trámite especial de reparación cuando el daño a la víctima se originó en un error judicial, por ejemplo una condena luego revisada.",
            "cuando_aplica": "Se usa para reclamar la indemnización del Estado u otra parte responsable cuando se acredita que hubo un error judicial que causó perjuicio a la víctima."
          },
          {
            "categoria": "3. Materia Penal",
            "subcategoria": "Delitos Ley N.º 1008",
            "detalle": "Defensa en la fase de preparación de diligencias de Policía Técnica Judicial (FELCN)",
            "porcentaje_adicional": "Más el 10% sobre el valor de los bienes recuperados incautados",
            "monto_la_paz_bs": "26.000",
            "id": 59,
            "que_es": "Patrocinio legal desde el primer momento de la investigación por delitos de la Ley N.º 1008 (sustancias controladas), ante la Fuerza Especial de Lucha Contra el Narcotráfico.",
            "cuando_aplica": "Se usa cuando una persona es aprehendida o investigada por presuntos delitos vinculados al narcotráfico o sustancias controladas, desde las primeras diligencias policiales."
          },
          {
            "categoria": "3. Materia Penal",
            "subcategoria": "Delitos Ley N.º 1008",
            "detalle": "Defensa y patrocinio de medidas cautelares",
            "porcentaje_adicional": "Más el 10% sobre el valor de los bienes recuperados incautados",
            "monto_la_paz_bs": "26.000",
            "id": 60,
            "que_es": "Defensa técnica en la audiencia donde se define si el investigado por delitos de la Ley N.º 1008 queda con detención preventiva u otra medida cautelar.",
            "cuando_aplica": "Se usa en la audiencia cautelar posterior a la imputación, para discutir la procedencia de la detención preventiva u otras medidas."
          },
          {
            "categoria": "3. Materia Penal",
            "subcategoria": "Delitos Ley N.º 1008",
            "detalle": "Defensa del encausado en la etapa a juicio",
            "porcentaje_adicional": "Más el 10% sobre el valor de los bienes recuperados incautados",
            "monto_la_paz_bs": "52.000",
            "id": 61,
            "que_es": "Patrocinio legal del acusado durante el juicio oral por delitos de sustancias controladas.",
            "cuando_aplica": "Se usa cuando el proceso por delitos de la Ley N.º 1008 llega a la etapa de juicio propiamente dicha."
          },
          {
            "categoria": "3. Materia Penal",
            "subcategoria": "Delitos Ley N.º 1008",
            "detalle": "Recursos en segunda instancia",
            "porcentaje_adicional": "Más el 10% sobre el valor de los bienes recuperados incautados",
            "monto_la_paz_bs": "52.000",
            "id": 62,
            "que_es": "Patrocinio en los recursos de apelación u otros medios de impugnación dentro de procesos por delitos de la Ley N.º 1008.",
            "cuando_aplica": "Se usa cuando la sentencia o resolución de primera instancia en un caso de sustancias controladas se impugna ante el tribunal superior."
          },
          {
            "categoria": "4. Materia Familiar",
            "subcategoria": "Procesos ordinarios",
            "detalle": "Nulidad de matrimonio o de unión libre",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "7.641",
            "id": 63,
            "que_es": "Proceso que declara inválido un matrimonio o una unión libre por existir, desde su origen, un vicio o impedimento legal.",
            "cuando_aplica": "Se usa cuando existió, por ejemplo, un impedimento legal para casarse -parentesco, matrimonio anterior no disuelto, vicio del consentimiento, etc.-."
          },
          {
            "categoria": "4. Materia Familiar",
            "subcategoria": "Procesos ordinarios",
            "detalle": "División y partición de bienes gananciales",
            "porcentaje_adicional": "Más el 10% sobre el valor comercial de los bienes",
            "monto_la_paz_bs": "4.078",
            "id": 64,
            "que_es": "Proceso para repartir entre los cónyuges o convivientes los bienes adquiridos durante el matrimonio o la unión libre (bienes gananciales).",
            "cuando_aplica": "Se usa al disolverse el matrimonio o la unión libre -por divorcio, separación o fallecimiento- cuando no hay acuerdo directo sobre cómo repartir esos bienes."
          },
          {
            "categoria": "4. Materia Familiar",
            "subcategoria": "Procesos ordinarios",
            "detalle": "Determinación de bienes propios",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "5.760",
            "id": 65,
            "que_es": "Proceso que identifica y declara cuáles bienes pertenecen exclusivamente a uno de los cónyuges o convivientes -no son gananciales-.",
            "cuando_aplica": "Se usa cuando hay discusión sobre si un bien fue adquirido antes del matrimonio o unión, por herencia o donación, y por tanto no debe repartirse."
          },
          {
            "categoria": "4. Materia Familiar",
            "subcategoria": "Procesos extraordinarios",
            "detalle": "Divorcio",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "7.641",
            "id": 66,
            "que_es": "Proceso que disuelve el vínculo matrimonial.",
            "cuando_aplica": "Se usa cuando uno o ambos cónyuges deciden poner fin al matrimonio; puede tramitarse por mutuo acuerdo o de forma contenciosa, a petición de uno solo."
          },
          {
            "categoria": "4. Materia Familiar",
            "subcategoria": "Procesos extraordinarios",
            "detalle": "Declaración judicial de filiación",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "7.641",
            "id": 67,
            "que_es": "Proceso que establece judicialmente el vínculo de filiación -paternidad o maternidad- entre una persona y sus padres.",
            "cuando_aplica": "Se usa cuando no existe reconocimiento voluntario de la filiación y es necesario que un juez la declare, frecuentemente con apoyo de prueba biológica (ADN)."
          },
          {
            "categoria": "4. Materia Familiar",
            "subcategoria": "Procesos extraordinarios",
            "detalle": "Negación de maternidad o paternidad",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "7.641",
            "id": 68,
            "que_es": "Proceso mediante el cual se impugna una filiación ya establecida -por ejemplo, en el registro civil- alegando que no corresponde a la realidad biológica.",
            "cuando_aplica": "Se usa cuando el padre o la madre registrados consideran que no son los progenitores biológicos y buscan que se anule esa filiación."
          },
          {
            "categoria": "4. Materia Familiar",
            "subcategoria": "Procesos extraordinarios",
            "detalle": "Comprobación de matrimonio o de unión libre",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "5.097",
            "id": 69,
            "que_es": "Proceso que declara judicialmente la existencia de un matrimonio o de una unión libre cuando no hay registro o prueba directa de ella.",
            "cuando_aplica": "Se usa, por ejemplo, cuando se necesita acreditar la unión para efectos sucesorios o de asistencia familiar, y no existe partida de matrimonio o esta se ha perdido."
          },
          {
            "categoria": "4. Materia Familiar",
            "subcategoria": "Procesos extraordinarios",
            "detalle": "Oposición al matrimonio",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "3.563",
            "id": 70,
            "que_es": "Trámite mediante el cual una persona legitimada se opone a la celebración de un matrimonio por existir un impedimento legal.",
            "cuando_aplica": "Se usa antes de que se celebre el matrimonio, cuando existe una causal legal que lo impide -parentesco, matrimonio subsistente, entre otras-."
          },
          {
            "categoria": "4. Materia Familiar",
            "subcategoria": "Procesos extraordinarios",
            "detalle": "Declaración de interdicción",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "6.621",
            "id": 71,
            "que_es": "Proceso que declara a una persona incapaz de administrar sus bienes o su persona por una condición que afecta su capacidad de discernimiento.",
            "cuando_aplica": "Se usa para proteger a personas con discapacidad mental o intelectual severa, designándoles un curador que las represente legalmente."
          },
          {
            "categoria": "4. Materia Familiar",
            "subcategoria": "Procesos extraordinarios",
            "detalle": "Suspensión, extinción o restitución de la autoridad de la madre o del padre",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "8.155",
            "id": 72,
            "que_es": "Proceso que suspende, extingue o restituye la autoridad parental -patria potestad- sobre un hijo o hija.",
            "cuando_aplica": "Se usa cuando el padre o la madre incumplen gravemente sus deberes o ponen en riesgo al hijo, o cuando, superadas esas causas, se solicita recuperar la autoridad parental."
          },
          {
            "categoria": "4. Materia Familiar",
            "subcategoria": "Procesos extraordinarios",
            "detalle": "Asistencia familiar (asignación, incremento, reducción y cesación)",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "2.039",
            "id": 73,
            "que_es": "Proceso que fija, aumenta, disminuye o extingue la pensión de asistencia familiar -alimentos- a favor de hijos u otros beneficiarios legales.",
            "cuando_aplica": "Se usa para solicitar por primera vez una pensión de asistencia, para pedir que se ajuste el monto según cambios de necesidad o capacidad económica, o para pedir que cese."
          },
          {
            "categoria": "4. Materia Familiar",
            "subcategoria": "Procesos extraordinarios",
            "detalle": "Liquidación de asistencia familiar",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "1.300",
            "id": 74,
            "que_es": "Trámite para calcular el monto de asistencia familiar adeudada -devengada y no pagada-.",
            "cuando_aplica": "Se usa cuando el obligado dejó de pagar la pensión fijada y se necesita determinar la suma exacta adeudada, generalmente para su cobro."
          },
          {
            "categoria": "4. Materia Familiar",
            "subcategoria": "Procesos extraordinarios",
            "detalle": "Constitución de patrimonio familiar",
            "porcentaje_adicional": "Más el 3% sobre la cuantía estimada de la constitución del patrimonio familiar",
            "monto_la_paz_bs": "4.582",
            "id": 75,
            "que_es": "Trámite que afecta un bien -típicamente la vivienda familiar- para protegerlo, haciéndolo inembargable e inalienable en beneficio de la familia.",
            "cuando_aplica": "Se usa cuando una familia quiere blindar su vivienda u otro bien esencial frente a futuras deudas o embargos."
          },
          {
            "categoria": "4. Materia Familiar",
            "subcategoria": "Procesos extraordinarios",
            "detalle": "Reconocimiento de unión conyugal libre (vía administrativa)",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "3.250",
            "id": 76,
            "que_es": "Trámite administrativo -ante notario o autoridad competente, sin necesidad de proceso judicial- para reconocer una unión libre estable y singular.",
            "cuando_aplica": "Se usa cuando ambos convivientes están de acuerdo en reconocer su unión libre y no existe controversia, por lo que puede resolverse por la vía administrativa/notarial."
          },
          {
            "categoria": "4. Materia Familiar",
            "subcategoria": "Código Niña, Niño y Adolescente",
            "detalle": "Guarda legal",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "5.602",
            "id": 77,
            "que_es": "Medida de protección que confía el cuidado de un niño, niña o adolescente a una persona o institución distinta de sus padres.",
            "cuando_aplica": "Se usa cuando los padres no pueden, temporal o permanentemente, hacerse cargo del cuidado del menor y es necesario designar a un guardador."
          },
          {
            "categoria": "4. Materia Familiar",
            "subcategoria": "Código Niña, Niño y Adolescente",
            "detalle": "Filiación judicial",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "1.019",
            "id": 78,
            "que_es": "Proceso para establecer judicialmente la filiación de un niño, niña o adolescente respecto de su padre o madre, dentro del régimen del Código NNA.",
            "cuando_aplica": "Se usa cuando no hay reconocimiento voluntario y se necesita que un juez de la niñez y adolescencia declare la filiación."
          },
          {
            "categoria": "4. Materia Familiar",
            "subcategoria": "Código Niña, Niño y Adolescente",
            "detalle": "Suspensión, extinción o restitución de la autoridad de la madre o del padre (nuevo)",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "4.550",
            "id": 79,
            "que_es": "Misma figura de suspensión, extinción o restitución de la autoridad parental, tramitada bajo el régimen y ante los juzgados especializados del Código Niña, Niño y Adolescente.",
            "cuando_aplica": "Se usa cuando el caso involucra directamente a un niño, niña o adolescente y corresponde a la jurisdicción especializada en niñez."
          },
          {
            "categoria": "4. Materia Familiar",
            "subcategoria": "Código Niña, Niño y Adolescente",
            "detalle": "Adopción",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "6.621",
            "id": 80,
            "que_es": "Proceso judicial mediante el cual se establece un vínculo de filiación legal entre un niño, niña o adolescente y quienes lo adoptan.",
            "cuando_aplica": "Se usa cuando una pareja o persona, cumpliendo los requisitos legales, busca adoptar a un niño, niña o adolescente declarado en situación de adoptabilidad."
          },
          {
            "categoria": "4. Materia Familiar",
            "subcategoria": "Código Niña, Niño y Adolescente",
            "detalle": "Adopción internacional",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "9.680",
            "id": 81,
            "que_es": "Adopción en la que él o los adoptantes tienen residencia habitual en un país distinto de Bolivia.",
            "cuando_aplica": "Se usa cuando no se encontró una familia adoptiva boliviana disponible y se autoriza, como última opción, la adopción por una familia extranjera."
          },
          {
            "categoria": "4. Materia Familiar",
            "subcategoria": "Procesos voluntarios",
            "detalle": "Inexistencia de filiación (vía administrativa)",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "1.300",
            "id": 82,
            "que_es": "Trámite administrativo para dejar sin efecto un reconocimiento de filiación que resulta manifiestamente inexistente o erróneo, sin necesidad de proceso judicial.",
            "cuando_aplica": "Se usa en los casos simples y no controvertidos en que corresponde corregir un registro de filiación por la vía administrativa."
          },
          {
            "categoria": "4. Materia Familiar",
            "subcategoria": "Procesos voluntarios",
            "detalle": "Tutela ordinaria",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "3.980",
            "id": 83,
            "que_es": "Proceso que designa a un tutor para representar y administrar los bienes de un menor de edad que no está bajo autoridad parental.",
            "cuando_aplica": "Se usa cuando un niño, niña o adolescente queda sin padre ni madre que ejerzan la autoridad parental y necesita un representante legal."
          },
          {
            "categoria": "4. Materia Familiar",
            "subcategoria": "Procesos voluntarios",
            "detalle": "Demanda de discernimiento de tutela, curatela y emancipación",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "3.250",
            "id": 84,
            "que_es": "Trámite mediante el cual el juez confirma -discierne- el cargo de tutor o curador, o declara la emancipación de un menor.",
            "cuando_aplica": "Se usa para formalizar judicialmente el nombramiento de un tutor o curador ya designado, o para que un adolescente obtenga capacidad legal anticipada."
          },
          {
            "categoria": "4. Materia Familiar",
            "subcategoria": "Procesos voluntarios",
            "detalle": "Otros procesos contemplados en la Ley N.º 548",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "4.550",
            "id": 85,
            "que_es": "Categoría residual para otros trámites judiciales de niñez y adolescencia previstos en el Código Niña, Niño y Adolescente que no tienen ítem propio en este arancel.",
            "cuando_aplica": "Se usa para cualquier otro proceso regulado por la Ley N.º 548 no listado específicamente en esta tabla."
          },
          {
            "categoria": "5. Materia Comercial",
            "subcategoria": null,
            "detalle": "Redacción de minutas de constitución",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "5.148",
            "id": 86,
            "que_es": "Elaboración del documento -minuta- que da origen a una sociedad comercial, para su posterior elevación a escritura pública.",
            "cuando_aplica": "Se usa al constituir una nueva empresa o sociedad."
          },
          {
            "categoria": "5. Materia Comercial",
            "subcategoria": null,
            "detalle": "Redacción de minutas de modificación",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "3.432",
            "id": 87,
            "que_es": "Elaboración del documento que modifica el contrato social o los estatutos de una sociedad ya constituida.",
            "cuando_aplica": "Se usa para cambios societarios: aumento de capital, cambio de socios, de objeto social, de razón social, entre otros."
          },
          {
            "categoria": "5. Materia Comercial",
            "subcategoria": null,
            "detalle": "Redacción de estatuto",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "5.148",
            "id": 88,
            "que_es": "Elaboración del estatuto que regula el funcionamiento interno de una sociedad: órganos, atribuciones, quórum, etc.",
            "cuando_aplica": "Se usa al constituir una sociedad que requiere estatuto propio, por ejemplo una sociedad anónima."
          },
          {
            "categoria": "5. Materia Comercial",
            "subcategoria": null,
            "detalle": "Redacción de reglamentos y estatuto",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "7.176",
            "id": 89,
            "que_es": "Elaboración conjunta de estatuto y reglamentos internos que desarrollan su aplicación.",
            "cuando_aplica": "Se usa cuando, además del estatuto, la sociedad necesita reglamentos específicos -de directorio, de asambleas, etc.-."
          },
          {
            "categoria": "5. Materia Comercial",
            "subcategoria": null,
            "detalle": "Inscripción Registro de Comercio",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "2.402",
            "id": 90,
            "que_es": "Gestión del trámite de inscripción de una empresa o de sus actos societarios en el Registro de Comercio (FUNDEMPRESA).",
            "cuando_aplica": "Se usa para formalizar legalmente una empresa o registrar modificaciones, trámite obligatorio para operar como comerciante."
          },
          {
            "categoria": "5. Materia Comercial",
            "subcategoria": null,
            "detalle": "Organización y constitución de S.A.",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "13.737",
            "id": 91,
            "que_es": "Asesoría y trámite integral para constituir una Sociedad Anónima, desde la minuta hasta su inscripción.",
            "cuando_aplica": "Se usa cuando los socios eligen específicamente el tipo societario de Sociedad Anónima."
          },
          {
            "categoria": "5. Materia Comercial",
            "subcategoria": null,
            "detalle": "Organización y constitución de otras sociedades comerciales",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "10.305",
            "id": 92,
            "que_es": "Asesoría y trámite integral para constituir otros tipos societarios: SRL, sociedad colectiva, en comandita, etc.",
            "cuando_aplica": "Se usa cuando se constituye una sociedad comercial distinta de la Sociedad Anónima."
          },
          {
            "categoria": "5. Materia Comercial",
            "subcategoria": null,
            "detalle": "Redacción de contratos comerciales",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "1.030",
            "id": 93,
            "que_es": "Elaboración de contratos mercantiles entre empresas o comerciantes: compraventa, distribución, suministro, etc.",
            "cuando_aplica": "Se usa siempre que se necesite formalizar por escrito una relación comercial entre partes."
          },
          {
            "categoria": "5. Materia Comercial",
            "subcategoria": null,
            "detalle": "Petición de patente de invención",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "5.148",
            "id": 94,
            "que_es": "Trámite ante el SENAPI para solicitar el registro de una patente que proteja una invención.",
            "cuando_aplica": "Se usa cuando un inventor o empresa quiere proteger legalmente una nueva invención o proceso técnico."
          },
          {
            "categoria": "5. Materia Comercial",
            "subcategoria": null,
            "detalle": "Registro de marca",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "3.432",
            "id": 95,
            "que_es": "Trámite ante el SENAPI para registrar y proteger legalmente una marca comercial.",
            "cuando_aplica": "Se usa para proteger el nombre, logo o signo distintivo de un producto o servicio."
          },
          {
            "categoria": "5. Materia Comercial",
            "subcategoria": null,
            "detalle": "Registro de propiedad intelectual de derechos de autor",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "1.716",
            "id": 96,
            "que_es": "Trámite para registrar una obra -literaria, artística, de software, etc.- y proteger los derechos de autor sobre ella.",
            "cuando_aplica": "Se usa cuando el autor de una obra quiere dejar constancia registral de su autoría y fecha de creación."
          },
          {
            "categoria": "5. Materia Comercial",
            "subcategoria": null,
            "detalle": "Proceso de oposición, nulidad, fiscalización de registro de patentes, marcas y propiedad intelectual",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "10.305",
            "id": 97,
            "que_es": "Procesos administrativos o judiciales para oponerse al registro de una marca o patente de un tercero, o para anular un registro ya otorgado.",
            "cuando_aplica": "Se usa cuando un titular considera que una solicitud o registro de un tercero afecta sus derechos de propiedad intelectual previos."
          },
          {
            "categoria": "5. Materia Comercial",
            "subcategoria": null,
            "detalle": "Reconocimiento de personalidad jurídica de sociedades extranjeras",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "10.305",
            "id": 98,
            "que_es": "Trámite para que una sociedad constituida en el extranjero sea reconocida legalmente y pueda operar en Bolivia.",
            "cuando_aplica": "Se usa cuando una empresa extranjera quiere establecer sucursal, representación o realizar actividades habituales en el país."
          },
          {
            "categoria": "5. Materia Comercial",
            "subcategoria": null,
            "detalle": "Trámites de formación de empresas unipersonales",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "2.967",
            "id": 99,
            "que_es": "Gestión para constituir una empresa unipersonal -de un solo dueño, sin forma societaria-.",
            "cuando_aplica": "Se usa cuando una persona natural quiere formalizar su actividad comercial de manera individual."
          },
          {
            "categoria": "5. Materia Comercial",
            "subcategoria": null,
            "detalle": "Transferencia de rótulos comerciales y otros",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "4.461",
            "id": 100,
            "que_es": "Trámite para transferir la titularidad de un rótulo o nombre comercial, y actos similares, de un comerciante a otro.",
            "cuando_aplica": "Se usa al vender o traspasar un negocio identificado por su rótulo comercial."
          },
          {
            "categoria": "5. Materia Comercial",
            "subcategoria": null,
            "detalle": "Concurso preventivo y quiebra",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "5.178",
            "id": 101,
            "que_es": "Procesos que buscan, respectivamente, reorganizar a una empresa en dificultades para evitar su quiebra, o liquidar su patrimonio si esta ya es inevitable.",
            "cuando_aplica": "Se usan cuando una empresa no puede cumplir regularmente sus obligaciones -concurso preventivo- o ya es insolvente de forma irreversible -quiebra-."
          },
          {
            "categoria": "5. Materia Comercial",
            "subcategoria": null,
            "detalle": "Procesos de arbitraje",
            "porcentaje_adicional": "Más el 5% sobre la cuantía",
            "monto_la_paz_bs": "4.461",
            "id": 102,
            "que_es": "Mecanismo de resolución de conflictos comerciales fuera de los tribunales ordinarios, ante árbitros elegidos por las partes.",
            "cuando_aplica": "Se usa cuando existe un convenio arbitral entre las partes de un contrato comercial que remite sus disputas a arbitraje."
          },
          {
            "categoria": "5. Materia Comercial",
            "subcategoria": null,
            "detalle": "Gestión de negocios para empresas y sociedades extranjeras",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "4.461",
            "id": 103,
            "que_es": "Representación y gestiones legales generales a favor de empresas extranjeras que operan o quieren operar en Bolivia.",
            "cuando_aplica": "Se usa para trámites diversos -contratos, permisos, representación- que una empresa extranjera necesita realizar en el país."
          },
          {
            "categoria": "5. Materia Comercial",
            "subcategoria": null,
            "detalle": "Gestión de negocios para empresas y sociedades nacionales",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "2.967",
            "id": 104,
            "que_es": "Representación y gestiones legales generales a favor de empresas bolivianas.",
            "cuando_aplica": "Se usa para trámites diversos que una empresa nacional necesita gestionar ante terceros o entidades públicas."
          },
          {
            "categoria": "5. Materia Comercial",
            "subcategoria": null,
            "detalle": "Asesoramiento en asamblea de sociedades o directorio",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "2.231",
            "id": 105,
            "que_es": "Asesoría legal en la preparación, desarrollo y actas de asambleas de socios/accionistas o reuniones de directorio.",
            "cuando_aplica": "Se usa cuando una sociedad convoca a una asamblea o sesión de directorio y requiere respaldo jurídico sobre quórum, votaciones y validez de acuerdos."
          },
          {
            "categoria": "5. Materia Comercial",
            "subcategoria": null,
            "detalle": "Gestión y asesoramiento sobre sistemas tarifarios, requisitos de pago, así como restricciones de importación y exportación",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "1.950",
            "id": 106,
            "que_es": "Asesoría sobre regulaciones de comercio exterior: aranceles, tarifas, requisitos de pago y restricciones a la importación/exportación.",
            "cuando_aplica": "Se usa por empresas que importan o exportan bienes y necesitan orientación sobre el régimen tarifario y las restricciones aplicables."
          },
          {
            "categoria": "5. Materia Comercial",
            "subcategoria": "Procesos concursales",
            "detalle": "Preventivo",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "6.500",
            "id": 107,
            "que_es": "Proceso concursal preventivo, listado aquí dentro de la subcategoría de procesos concursales comerciales.",
            "cuando_aplica": "Se usa cuando la empresa aún puede reorganizarse y busca un acuerdo con sus acreedores para evitar la quiebra."
          },
          {
            "categoria": "5. Materia Comercial",
            "subcategoria": "Procesos concursales",
            "detalle": "De quiebra",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "3.900",
            "id": 108,
            "que_es": "Proceso de liquidación judicial del patrimonio de una empresa insolvente que no logró un acuerdo preventivo.",
            "cuando_aplica": "Se usa cuando la insolvencia de la empresa es irreversible y debe liquidarse su patrimonio para pagar a los acreedores."
          },
          {
            "categoria": "6. Materia del Trabajo y Seguridad Social",
            "subcategoria": null,
            "detalle": "Demanda por beneficios sociales",
            "porcentaje_adicional": "Más el 10% sobre la cuantía",
            "monto_la_paz_bs": "6.117",
            "id": 109,
            "que_es": "Proceso laboral para reclamar el pago de beneficios sociales adeudados al finalizar la relación de trabajo: desahucio, indemnización, aguinaldo, vacaciones, etc.",
            "cuando_aplica": "Se usa cuando un trabajador es despedido o renuncia y el empleador no le paga correctamente sus beneficios sociales."
          },
          {
            "categoria": "6. Materia del Trabajo y Seguridad Social",
            "subcategoria": null,
            "detalle": "Acciones sociales individuales o colectivas",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "2.039",
            "id": 110,
            "que_es": "Demandas laborales presentadas por un trabajador individual o por un grupo/sindicato de trabajadores.",
            "cuando_aplica": "Se usa para reclamar derechos laborales que afectan a un solo trabajador o a varios de forma conjunta."
          },
          {
            "categoria": "6. Materia del Trabajo y Seguridad Social",
            "subcategoria": null,
            "detalle": "Denuncias por infracción de leyes sociales, de higiene y seguridad ocupacionales",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "3.058",
            "id": 111,
            "que_es": "Denuncia ante la autoridad laboral por incumplimiento de normas de higiene, seguridad industrial u otras leyes sociales.",
            "cuando_aplica": "Se usa cuando un empleador incumple normas de seguridad e higiene ocupacional o cualquier otra disposición laboral protectora."
          },
          {
            "categoria": "6. Materia del Trabajo y Seguridad Social",
            "subcategoria": "Procedimientos especiales",
            "detalle": "Juicios coactivos",
            "porcentaje_adicional": "Más el 10% sobre la cuantía",
            "monto_la_paz_bs": "5.097",
            "id": 112,
            "que_es": "Proceso de cobro ejecutivo de sumas ya reconocidas en resoluciones administrativas o judiciales laborales firmes.",
            "cuando_aplica": "Se usa cuando existe una resolución firme que reconoce una deuda laboral y el obligado no paga voluntariamente."
          },
          {
            "categoria": "6. Materia del Trabajo y Seguridad Social",
            "subcategoria": "Procedimientos especiales",
            "detalle": "Procedimientos por infracción de ley social",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "2.039",
            "id": 113,
            "que_es": "Trámite administrativo o judicial por incumplimiento de normas laborales generales.",
            "cuando_aplica": "Se usa para denunciar y sancionar infracciones a leyes sociales por parte del empleador."
          },
          {
            "categoria": "6. Materia del Trabajo y Seguridad Social",
            "subcategoria": "Procedimientos especiales",
            "detalle": "Procedimiento por desafuero sindical",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "5.097",
            "id": 114,
            "que_es": "Proceso para levantar el fuero sindical que protege a un dirigente sindical, permitiendo su despido u otra sanción.",
            "cuando_aplica": "Se usa cuando el empleador considera que existe causa justificada para despedir o sancionar a un dirigente sindical, lo cual requiere autorización judicial previa."
          },
          {
            "categoria": "6. Materia del Trabajo y Seguridad Social",
            "subcategoria": "Procedimientos especiales",
            "detalle": "Procedimiento sobre declaratoria de derechos",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "2.039",
            "id": 115,
            "que_es": "Trámite para que la autoridad laboral reconozca y declare un derecho laboral controvertido.",
            "cuando_aplica": "Se usa cuando existe duda o disputa sobre la existencia de un derecho laboral específico que debe ser reconocido formalmente."
          },
          {
            "categoria": "6. Materia del Trabajo y Seguridad Social",
            "subcategoria": "Procedimientos especiales",
            "detalle": "Procedimiento en materia de seguridad social y de recuperación del patrimonio sindical",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "1.019",
            "id": 116,
            "que_es": "Trámite vinculado a la seguridad social o a la protección/recuperación de bienes pertenecientes a una organización sindical.",
            "cuando_aplica": "Se usa en conflictos sobre aportes o prestaciones de seguridad social, o cuando el patrimonio de un sindicato debe recuperarse o protegerse legalmente."
          },
          {
            "categoria": "6. Materia del Trabajo y Seguridad Social",
            "subcategoria": "Procedimientos especiales",
            "detalle": "Juicios ejecutivos sociales",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "4.784",
            "id": 117,
            "que_es": "Proceso ejecutivo laboral para cobrar créditos sociales que constan en un título con fuerza ejecutiva.",
            "cuando_aplica": "Se usa cuando existe un documento -por ejemplo, una planilla de sueldos no pagada o un fallo laboral- que permite el cobro directo sin discutir de nuevo el fondo del asunto."
          },
          {
            "categoria": "6. Materia del Trabajo y Seguridad Social",
            "subcategoria": "Procedimientos especiales",
            "detalle": "Desafuero sindical",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "4.784",
            "id": 118,
            "que_es": "Trámite para autorizar judicialmente el despido o sanción de un dirigente sindical protegido por fuero.",
            "cuando_aplica": "Se usa en el mismo supuesto que el procedimiento por desafuero sindical: cuando el empleador busca sancionar a un dirigente amparado por fuero."
          },
          {
            "categoria": "6. Materia del Trabajo y Seguridad Social",
            "subcategoria": "Procedimientos especiales",
            "detalle": "Arbitraje laboral",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "3.341",
            "id": 119,
            "que_es": "Mecanismo de solución de conflictos colectivos de trabajo mediante árbitros, como alternativa a la huelga o al litigio.",
            "cuando_aplica": "Se usa cuando empleador y trabajadores -o su sindicato- acuerdan someter su conflicto colectivo a un árbitro en lugar de continuar la vía judicial u otras medidas de presión."
          },
          {
            "categoria": "6. Materia del Trabajo y Seguridad Social",
            "subcategoria": "Procedimientos especiales",
            "detalle": "Trámites conciliatorios ante el Ministerio de Trabajo",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "3.341",
            "id": 120,
            "que_es": "Gestión de audiencias de conciliación ante la autoridad administrativa de trabajo, antes o en lugar de un juicio.",
            "cuando_aplica": "Se usa cuando trabajador y empleador buscan resolver su conflicto de forma directa y rápida ante el Ministerio de Trabajo, sin llegar a juicio."
          },
          {
            "categoria": "6. Materia del Trabajo y Seguridad Social",
            "subcategoria": "Procedimientos especiales",
            "detalle": "Trámites relacionados a seguridad social",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "2.867",
            "id": 121,
            "que_es": "Gestiones diversas ante las entidades de seguridad social -AFP, cajas de salud, etc.- vinculadas a la relación laboral.",
            "cuando_aplica": "Se usa para trámites de aportes, prestaciones o beneficios de seguridad social relacionados con un empleo."
          },
          {
            "categoria": "6. Materia del Trabajo y Seguridad Social",
            "subcategoria": "Procedimientos especiales",
            "detalle": "Apelación",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "4.784",
            "id": 122,
            "que_es": "Recurso de apelación dentro de un proceso laboral, para que un tribunal superior revise una resolución de primera instancia.",
            "cuando_aplica": "Se usa cuando una de las partes del juicio laboral no está de acuerdo con el fallo de primera instancia."
          },
          {
            "categoria": "6. Materia del Trabajo y Seguridad Social",
            "subcategoria": "Procedimientos especiales",
            "detalle": "Demanda por beneficios sociales",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "2.867",
            "id": 123,
            "que_es": "Misma figura que la demanda por beneficios sociales de la sección anterior de esta materia.",
            "cuando_aplica": "Se usa cuando un trabajador reclama beneficios sociales impagos. Esta fila aparece duplicada en el documento original, con un monto distinto al de su primera aparición; revísalo con el Colegio de Abogados si necesitas precisión sobre cuál aplica."
          },
          {
            "categoria": "6. Materia del Trabajo y Seguridad Social",
            "subcategoria": "Procedimientos especiales",
            "detalle": "Acciones sociales individuales o colectivas",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "2.867",
            "id": 124,
            "que_es": "Misma figura que las acciones sociales individuales o colectivas de la sección anterior.",
            "cuando_aplica": "Se usa para reclamos laborales individuales o colectivos. Esta fila aparece duplicada en el documento original, con un monto distinto al de su primera aparición."
          },
          {
            "categoria": "6. Materia del Trabajo y Seguridad Social",
            "subcategoria": "Procedimientos especiales",
            "detalle": "Denuncias por infracción de leyes sociales y de higiene y seguridad ocupacionales",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "2.867",
            "id": 125,
            "que_es": "Misma figura que la denuncia por infracción de leyes sociales, higiene y seguridad de la sección anterior.",
            "cuando_aplica": "Se usa para denunciar infracciones a normas de higiene y seguridad ocupacional. Esta fila aparece duplicada en el documento original, con un monto distinto."
          },
          {
            "categoria": "6. Materia del Trabajo y Seguridad Social",
            "subcategoria": "Procedimientos especiales",
            "detalle": "Procedimientos por infracción de ley social",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "1.908",
            "id": 126,
            "que_es": "Misma figura que el ítem 113.",
            "cuando_aplica": "Fila duplicada en el documento original, con un monto distinto al de su primera aparición."
          },
          {
            "categoria": "6. Materia del Trabajo y Seguridad Social",
            "subcategoria": "Procedimientos especiales",
            "detalle": "Procedimiento por desafuero sindical",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "4.784",
            "id": 127,
            "que_es": "Misma figura que el ítem 114.",
            "cuando_aplica": "Fila duplicada en el documento original, con un monto distinto al de su primera aparición."
          },
          {
            "categoria": "6. Materia del Trabajo y Seguridad Social",
            "subcategoria": "Procedimientos especiales",
            "detalle": "Procedimiento sobre declaratoria de derechos",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "1.908",
            "id": 128,
            "que_es": "Misma figura que el ítem 115.",
            "cuando_aplica": "Fila duplicada en el documento original, con un monto distinto al de su primera aparición."
          },
          {
            "categoria": "6. Materia del Trabajo y Seguridad Social",
            "subcategoria": "Procedimientos especiales",
            "detalle": "Procedimiento en materia de seguridad social y de recuperación del patrimonio sindical",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "959",
            "id": 129,
            "que_es": "Misma figura que el ítem 116.",
            "cuando_aplica": "Fila duplicada en el documento original, con un monto distinto al de su primera aparición."
          },
          {
            "categoria": "7. Materia Tributaria y Coactivo Fiscal",
            "subcategoria": null,
            "detalle": "Procedimientos tributarios",
            "porcentaje_adicional": "En todos más el 10% sobre la cuantía",
            "monto_la_paz_bs": "5.602",
            "id": 130,
            "que_es": "Trámites generales ante la Administración Tributaria (Servicio de Impuestos Nacionales) relacionados con obligaciones fiscales.",
            "cuando_aplica": "Se usa para gestionar o responder a actuaciones de la Administración Tributaria: fiscalización, determinación de deuda, etc."
          },
          {
            "categoria": "7. Materia Tributaria y Coactivo Fiscal",
            "subcategoria": null,
            "detalle": "Recursos de impugnación en materia tributaria",
            "porcentaje_adicional": "En todos más el 10% sobre la cuantía",
            "monto_la_paz_bs": "5.097",
            "id": 131,
            "que_es": "Recursos administrativos o jurisdiccionales para impugnar actos de la Administración Tributaria, por ejemplo ante la Autoridad de Impugnación Tributaria.",
            "cuando_aplica": "Se usa cuando el contribuyente no está de acuerdo con una resolución determinativa, sancionatoria u otro acto de la Administración Tributaria."
          },
          {
            "categoria": "7. Materia Tributaria y Coactivo Fiscal",
            "subcategoria": null,
            "detalle": "Proceso coactivo fiscal",
            "porcentaje_adicional": "En todos más el 10% sobre la cuantía",
            "monto_la_paz_bs": "6.621",
            "id": 132,
            "que_es": "Proceso de cobro forzoso de deudas tributarias firmes y exigibles.",
            "cuando_aplica": "Se usa cuando el Estado ejecuta el cobro de una deuda tributaria que el contribuyente no pagó voluntariamente."
          },
          {
            "categoria": "7. Materia Tributaria y Coactivo Fiscal",
            "subcategoria": null,
            "detalle": "Proceso penal aduanero",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "8.530",
            "id": 133,
            "que_es": "Proceso penal especial para delitos aduaneros: contrabando, defraudación aduanera, entre otros.",
            "cuando_aplica": "Se usa cuando se investiga o juzga a una persona por delitos vinculados al comercio exterior y las aduanas."
          },
          {
            "categoria": "8. Materia Agroambiental",
            "subcategoria": null,
            "detalle": "Trámites administrativos",
            "porcentaje_adicional": "En todos más el 10% sobre la cuantía asignada por el Estado",
            "monto_la_paz_bs": "4.582",
            "id": 134,
            "que_es": "Gestiones ante entidades administrativas agrarias -por ejemplo, el INRA- relacionadas con la tierra y los recursos naturales.",
            "cuando_aplica": "Se usa para trámites de saneamiento, titulación u otros procedimientos administrativos sobre tierras."
          },
          {
            "categoria": "8. Materia Agroambiental",
            "subcategoria": null,
            "detalle": "Procesos judiciales",
            "porcentaje_adicional": "En todos más el 10% sobre la cuantía asignada por el Estado",
            "monto_la_paz_bs": "5.097",
            "id": 135,
            "que_es": "Procesos contenciosos ante la jurisdicción agroambiental sobre tierras, aguas y recursos naturales.",
            "cuando_aplica": "Se usa cuando existe un conflicto que debe resolverse ante un juez agroambiental."
          },
          {
            "categoria": "8. Materia Agroambiental",
            "subcategoria": null,
            "detalle": "Procedimientos ante el Tribunal Agroambiental",
            "porcentaje_adicional": "En todos más el 10% sobre la cuantía asignada por el Estado",
            "monto_la_paz_bs": "5.602",
            "id": 136,
            "que_es": "Procesos y recursos que se tramitan directamente ante el Tribunal Agroambiental, máxima instancia de esta jurisdicción especializada.",
            "cuando_aplica": "Se usa para recursos de casación y otros procesos de competencia exclusiva del Tribunal Agroambiental."
          },
          {
            "categoria": "8. Materia Agroambiental",
            "subcategoria": null,
            "detalle": "Acción real",
            "porcentaje_adicional": "10% más de la cuantía",
            "monto_la_paz_bs": "5.100",
            "id": 137,
            "que_es": "Acción que protege el derecho de propiedad u otro derecho real sobre un predio agrario.",
            "cuando_aplica": "Se usa cuando se discute la titularidad o un derecho real sobre la tierra, por ejemplo una reivindicación de predio rural."
          },
          {
            "categoria": "8. Materia Agroambiental",
            "subcategoria": null,
            "detalle": "Acción personal",
            "porcentaje_adicional": "10% más de la cuantía",
            "monto_la_paz_bs": "5.100",
            "id": 138,
            "que_es": "Acción que reclama el cumplimiento de una obligación personal derivada de una relación jurídica agraria.",
            "cuando_aplica": "Se usa cuando el conflicto no es sobre la propiedad del predio, sino sobre una obligación entre las partes vinculada a la actividad agraria."
          },
          {
            "categoria": "8. Materia Agroambiental",
            "subcategoria": null,
            "detalle": "Acción mixta",
            "porcentaje_adicional": "10% más de la cuantía",
            "monto_la_paz_bs": "5.100",
            "id": 139,
            "que_es": "Acción que combina pretensiones reales y personales dentro de un mismo proceso agroambiental.",
            "cuando_aplica": "Se usa cuando el conflicto involucra a la vez un derecho sobre la tierra y una obligación personal conexa."
          },
          {
            "categoria": "8. Materia Agroambiental",
            "subcategoria": null,
            "detalle": "Acción posesoria",
            "porcentaje_adicional": "5% más de la cuantía",
            "monto_la_paz_bs": "4.580",
            "id": 140,
            "que_es": "Acción que protege la posesión agraria -no necesariamente la propiedad- de un predio rural.",
            "cuando_aplica": "Se usa cuando alguien es perturbado o despojado de la posesión de un predio rural que viene trabajando."
          },
          {
            "categoria": "8. Materia Agroambiental",
            "subcategoria": null,
            "detalle": "Acción ambiental preventiva",
            "porcentaje_adicional": "10% más de la cuantía",
            "monto_la_paz_bs": "5.100",
            "id": 141,
            "que_es": "Acción que busca evitar un daño ambiental antes de que se produzca o que se agrave.",
            "cuando_aplica": "Se usa cuando existe una amenaza cierta de daño al medio ambiente y se requiere una medida judicial preventiva urgente."
          },
          {
            "categoria": "8. Materia Agroambiental",
            "subcategoria": null,
            "detalle": "Acción para establecer responsabilidad ambiental",
            "porcentaje_adicional": "10% más de la cuantía",
            "monto_la_paz_bs": "5.100",
            "id": 142,
            "que_es": "Acción que busca determinar y sancionar la responsabilidad de quien causó un daño ambiental.",
            "cuando_aplica": "Se usa una vez producido el daño ambiental, para identificar al responsable y exigir su reparación."
          },
          {
            "categoria": "8. Materia Agroambiental",
            "subcategoria": null,
            "detalle": "Acción sobre el ejercicio de derechos de uso y aprovechamiento de recursos naturales renovables (entre particulares)",
            "porcentaje_adicional": "10% más de la cuantía",
            "monto_la_paz_bs": "5.100",
            "id": 143,
            "que_es": "Acción que resuelve conflictos entre particulares sobre el uso de recursos naturales renovables: agua, pastos, bosques, etc.",
            "cuando_aplica": "Se usa cuando dos o más personas particulares disputan el derecho a usar o aprovechar un mismo recurso natural renovable."
          },
          {
            "categoria": "8. Materia Agroambiental",
            "subcategoria": null,
            "detalle": "Procesos de estructura monitoria",
            "porcentaje_adicional": "5% más de la cuantía",
            "monto_la_paz_bs": "4.500",
            "id": 144,
            "que_es": "Versión agroambiental del proceso monitorio: vía rápida para obligaciones claras y exigibles vinculadas a la actividad agraria.",
            "cuando_aplica": "Se usa cuando existe un documento que acredita una obligación agraria líquida y exigible."
          },
          {
            "categoria": "8. Materia Agroambiental",
            "subcategoria": null,
            "detalle": "Procesos voluntarios",
            "porcentaje_adicional": "5% más de la cuantía",
            "monto_la_paz_bs": "4.580",
            "id": 145,
            "que_es": "Trámites de jurisdicción voluntaria ante juzgados agroambientales, sin controversia entre partes.",
            "cuando_aplica": "Se usa para gestiones agrarias que requieren intervención judicial pero no implican litigio."
          },
          {
            "categoria": "8. Materia Agroambiental",
            "subcategoria": null,
            "detalle": "Medidas preparatorias y medidas precautorias",
            "porcentaje_adicional": "5% más de la cuantía",
            "monto_la_paz_bs": "4.580",
            "id": 146,
            "que_es": "Diligencias previas a la demanda y medidas cautelares dentro de procesos agroambientales.",
            "cuando_aplica": "Se usa para asegurar prueba o proteger el objeto del litigio -por ejemplo, evitar que se altere un predio- antes o durante el proceso agroambiental."
          },
          {
            "categoria": "8. Materia Agroambiental",
            "subcategoria": null,
            "detalle": "Reposición",
            "porcentaje_adicional": "10% más de la cuantía",
            "monto_la_paz_bs": "1.020",
            "id": 147,
            "que_es": "Recurso de reposición dentro de procesos agroambientales.",
            "cuando_aplica": "Se usa contra autos de mero trámite del juez agroambiental, pidiéndole que reconsidere su propia decisión."
          },
          {
            "categoria": "8. Materia Agroambiental",
            "subcategoria": null,
            "detalle": "Compulsa",
            "porcentaje_adicional": "10% más de la cuantía",
            "monto_la_paz_bs": "1.500",
            "id": 148,
            "que_es": "Recurso para que el tribunal superior ordene conceder una apelación que el juez agroambiental denegó.",
            "cuando_aplica": "Se usa cuando el juez agroambiental de instancia rechaza indebidamente un recurso de apelación."
          },
          {
            "categoria": "8. Materia Agroambiental",
            "subcategoria": null,
            "detalle": "Recurso de casación y/o nulidad",
            "porcentaje_adicional": "10% más de la cuantía",
            "monto_la_paz_bs": "2.500",
            "id": 149,
            "que_es": "Recurso extraordinario ante el Tribunal Agroambiental contra las resoluciones de instancia, por errores de derecho o vicios procesales graves.",
            "cuando_aplica": "Se usa para impugnar, en última instancia, una sentencia agroambiental que se considera contraria a la ley o afectada de nulidad."
          },
          {
            "categoria": "8. Materia Agroambiental",
            "subcategoria": null,
            "detalle": "Proceso contencioso administrativo",
            "porcentaje_adicional": "10% pequeña propiedad y propiedad colectiva; 13% mediana propiedad; 15% propiedad empresarial",
            "monto_la_paz_bs": "5.600",
            "id": 150,
            "que_es": "Proceso que impugna, ante el Tribunal Agroambiental, resoluciones administrativas relacionadas con la tierra, por ejemplo del INRA.",
            "cuando_aplica": "Se usa cuando el titular de un predio no está de acuerdo con una resolución administrativa agraria y busca su revisión judicial."
          },
          {
            "categoria": "8. Materia Agroambiental",
            "subcategoria": null,
            "detalle": "Nulidad de título ejecutorial",
            "porcentaje_adicional": "10% pequeña propiedad y propiedad colectiva; 13% mediana propiedad; 15% propiedad empresarial",
            "monto_la_paz_bs": "5.600",
            "id": 151,
            "que_es": "Proceso que busca declarar nulo un título ejecutorial -documento que reconoce y titula la propiedad agraria- por vicios graves en su emisión.",
            "cuando_aplica": "Se usa cuando el proceso de saneamiento o titulación que originó el título tuvo defectos que afectan su validez desde el origen."
          },
          {
            "categoria": "8. Materia Agroambiental",
            "subcategoria": null,
            "detalle": "Anulabilidad de título ejecutorial",
            "porcentaje_adicional": "10% pequeña propiedad y propiedad colectiva; 13% mediana propiedad; 15% propiedad empresarial",
            "monto_la_paz_bs": "5.600",
            "id": 152,
            "que_es": "Proceso que busca dejar sin efecto un título ejecutorial por vicios que lo hacen anulable, de menor entidad que los de nulidad absoluta.",
            "cuando_aplica": "Se usa cuando existen irregularidades subsanables en el trámite que originó el título, que aun así ameritan su revisión."
          },
          {
            "categoria": "9. Materia Minera",
            "subcategoria": null,
            "detalle": "Derechos mineros y extinción",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "4.078",
            "id": 153,
            "que_es": "Asesoría y trámites relacionados con la constitución y, en su caso, la extinción de derechos mineros (concesiones/áreas mineras).",
            "cuando_aplica": "Se usa para tramitar el otorgamiento de un derecho minero o para gestionar su extinción por las causales previstas en la Ley de Minería y Metalurgia (Ley N.º 535)."
          },
          {
            "categoria": "9. Materia Minera",
            "subcategoria": null,
            "detalle": "Contratos mineros y licencias de prospección y exploración",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "3.563",
            "id": 154,
            "que_es": "Elaboración y gestión de contratos administrativos mineros, y trámite de licencias para prospectar y explorar áreas mineras.",
            "cuando_aplica": "Se usa al iniciar actividades de prospección o exploración, o al formalizar un contrato minero con el Estado."
          },
          {
            "categoria": "9. Materia Minera",
            "subcategoria": null,
            "detalle": "Régimen de adecuaciones",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "3.563",
            "id": 155,
            "que_es": "Trámite para adecuar derechos o contratos mineros preexistentes al nuevo marco legal minero.",
            "cuando_aplica": "Se usa cuando un titular minero debe ajustar su situación jurídica a cambios normativos en el sector."
          },
          {
            "categoria": "9. Materia Minera",
            "subcategoria": null,
            "detalle": "Gestión y representación legal ante entidades privadas y públicas mineras",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "7.500",
            "id": 156,
            "que_es": "Representación legal general ante entidades del sector minero: AJAM, Ministerio de Minería, COMIBOL, empresas privadas, etc.",
            "cuando_aplica": "Se usa para cualquier gestión o representación legal ante estas entidades relacionada con la actividad minera."
          },
          {
            "categoria": "9. Materia Minera",
            "subcategoria": null,
            "detalle": "Resolución de conflictos mineros",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "10.000",
            "id": 157,
            "que_es": "Patrocinio en la solución de conflictos entre actores mineros: superposición de áreas, servidumbres, límites, etc.",
            "cuando_aplica": "Se usa cuando surge una disputa entre titulares mineros, o entre estos y comunidades u otros actores."
          },
          {
            "categoria": "9. Materia Minera",
            "subcategoria": null,
            "detalle": "Trámites ante instancias administrativas mineras",
            "porcentaje_adicional": "Más el 10% del monto ante instancias administrativas mineras",
            "monto_la_paz_bs": "4.078",
            "id": 158,
            "que_es": "Gestión de trámites diversos ante la Autoridad Jurisdiccional Administrativa Minera (AJAM) y otras instancias del sector.",
            "cuando_aplica": "Se usa para cualquier procedimiento administrativo minero que deba tramitarse ante estas instancias."
          },
          {
            "categoria": "9. Materia Minera",
            "subcategoria": null,
            "detalle": "Solicitud de contrato minero administrativo sin oposición",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "21.000",
            "id": 159,
            "que_es": "Trámite para obtener un contrato administrativo minero sobre un área libre, cuando nadie se opone a la solicitud.",
            "cuando_aplica": "Se usa cuando el área solicitada no genera oposición de terceros durante el trámite."
          },
          {
            "categoria": "9. Materia Minera",
            "subcategoria": null,
            "detalle": "Defensa en trámite de reversión",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "7.000",
            "id": 160,
            "que_es": "Defensa legal frente a un procedimiento de reversión de derechos mineros -pérdida del derecho por inactividad u otra causal-.",
            "cuando_aplica": "Se usa cuando el Estado inicia un trámite para revertir un derecho minero por falta de actividad u otro incumplimiento, y el titular quiere defenderlo."
          },
          {
            "categoria": "9. Materia Minera",
            "subcategoria": null,
            "detalle": "Amparo administrativo minero",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "12.000",
            "id": 161,
            "que_es": "Recurso administrativo especial del sector minero para proteger derechos frente a actos de la autoridad minera.",
            "cuando_aplica": "Se usa cuando un acto de la autoridad administrativa minera vulnera un derecho del titular minero y no existe otra vía idónea más específica."
          },
          {
            "categoria": "9. Materia Minera",
            "subcategoria": null,
            "detalle": "Trámites de continuidad de actividades mineras",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "3.500",
            "id": 162,
            "que_es": "Gestión para mantener vigente y en regla la operación minera: cumplimiento de requisitos que evitan su suspensión.",
            "cuando_aplica": "Se usa para conservar los permisos y condiciones necesarias para seguir operando sin interrupciones."
          },
          {
            "categoria": "9. Materia Minera",
            "subcategoria": null,
            "detalle": "Trámite de extinción de derechos mineros",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "7.000",
            "id": 163,
            "que_es": "Procedimiento formal por el que se declara extinguido un derecho minero.",
            "cuando_aplica": "Se usa cuando corresponde dar de baja formalmente un derecho minero por cualquiera de las causales legales."
          },
          {
            "categoria": "9. Materia Minera",
            "subcategoria": null,
            "detalle": "Desistimiento de derechos mineros",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "7.000",
            "id": 164,
            "que_es": "Trámite mediante el cual el titular renuncia voluntariamente a su derecho minero.",
            "cuando_aplica": "Se usa cuando el propio titular decide, por su voluntad, abandonar el derecho minero que posee."
          },
          {
            "categoria": "10. Materia Administrativa",
            "subcategoria": null,
            "detalle": "Procedimientos administrativos ante entidades públicas y privadas",
            "porcentaje_adicional": "En todos más el 10% sobre la cuantía",
            "monto_la_paz_bs": "6.621",
            "id": 165,
            "que_es": "Trámites generales que se siguen ante entidades públicas -o privadas que ejercen función pública- conforme a la Ley de Procedimiento Administrativo (Ley N.º 2341).",
            "cuando_aplica": "Se usa para cualquier gestión, solicitud o defensa ante la Administración Pública en el marco de un procedimiento administrativo."
          },
          {
            "categoria": "10. Materia Administrativa",
            "subcategoria": null,
            "detalle": "Recursos administrativos (revocatorio o jerárquico)",
            "porcentaje_adicional": "En todos más el 10% sobre la cuantía",
            "monto_la_paz_bs": "2.039",
            "id": 166,
            "que_es": "Recursos internos de la Administración Pública: el revocatorio -ante la misma autoridad- y el jerárquico -ante el superior-.",
            "cuando_aplica": "Se usan para impugnar una resolución administrativa antes de acudir, en su caso, a la vía judicial (proceso contencioso administrativo)."
          },
          {
            "categoria": "10. Materia Administrativa",
            "subcategoria": null,
            "detalle": "Proceso contencioso administrativo",
            "porcentaje_adicional": "En todos más el 10% sobre la cuantía",
            "monto_la_paz_bs": "5.097",
            "id": 167,
            "que_es": "Proceso judicial que revisa la legalidad de actos de la Administración Pública, una vez agotada la vía administrativa.",
            "cuando_aplica": "Se usa cuando, tras los recursos administrativos, el interesado sigue en desacuerdo con la resolución y pide su revisión ante un tribunal."
          },
          {
            "categoria": "10. Materia Administrativa",
            "subcategoria": null,
            "detalle": "Trámite de reconocimiento de personalidad jurídica de instituciones (sociedad civil)",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "3.130",
            "id": 168,
            "que_es": "Gestión para que una fundación, asociación u otra institución de la sociedad civil obtenga personalidad jurídica ante el Estado.",
            "cuando_aplica": "Se usa al constituir formalmente una organización sin fines de lucro que necesita ser reconocida legalmente."
          },
          {
            "categoria": "10. Materia Administrativa",
            "subcategoria": null,
            "detalle": "Redacción de estatutos y reglamentos internos para instituciones (sociedad civil)",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "10.000",
            "id": 169,
            "que_es": "Elaboración de los estatutos y reglamentos que regirán el funcionamiento de una institución de la sociedad civil.",
            "cuando_aplica": "Se usa junto con el trámite de personalidad jurídica, o para actualizar los estatutos de una institución ya existente."
          },
          {
            "categoria": "11. Trámites en General",
            "subcategoria": null,
            "detalle": "Consultas profesionales",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "202",
            "id": 170,
            "que_es": "Honorario por una consulta u orientación legal puntual, sin implicar la apertura de un caso o proceso.",
            "cuando_aplica": "Se usa cuando el cliente solo necesita una opinión u orientación jurídica breve sobre una duda concreta."
          },
          {
            "categoria": "11. Trámites en General",
            "subcategoria": null,
            "detalle": "Redacción de normativa (leyes, reglamentos, estatutos y otros)",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "5.097",
            "id": 171,
            "que_es": "Elaboración técnica de proyectos de normas: leyes, decretos, reglamentos, ordenanzas, estatutos, entre otros.",
            "cuando_aplica": "Se usa cuando una entidad pública o privada necesita redactar un instrumento normativo."
          },
          {
            "categoria": "11. Trámites en General",
            "subcategoria": null,
            "detalle": "Asesoría general",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "2.039",
            "id": 172,
            "que_es": "Servicio de asesoría jurídica continua o de carácter amplio, no limitado a una consulta puntual.",
            "cuando_aplica": "Se usa cuando el cliente requiere acompañamiento legal general y permanente."
          },
          {
            "categoria": "11. Trámites en General",
            "subcategoria": null,
            "detalle": "Asesoría especializada",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "3.563",
            "id": 173,
            "que_es": "Asesoría jurídica enfocada en un área técnica o especializada del derecho.",
            "cuando_aplica": "Se usa cuando el asunto requiere experticia específica en una materia particular, más allá de una asesoría general."
          },
          {
            "categoria": "11. Trámites en General",
            "subcategoria": null,
            "detalle": "Audiencias (presencial o virtual)",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "353",
            "id": 174,
            "que_es": "Honorario por la actuación del abogado en una audiencia judicial o administrativa, sea presencial o virtual.",
            "cuando_aplica": "Se usa como referencia del costo de comparecer y litigar en una audiencia puntual."
          },
          {
            "categoria": "11. Trámites en General",
            "subcategoria": null,
            "detalle": "Audiencias preliminares",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "1.300",
            "id": 175,
            "que_es": "Actuación del abogado en audiencias previas dentro de un proceso, antes de la etapa principal.",
            "cuando_aplica": "Se usa cuando el proceso contempla una audiencia preliminar previa, por ejemplo para sanear el proceso o fijar el objeto del litigio."
          },
          {
            "categoria": "11. Trámites en General",
            "subcategoria": null,
            "detalle": "Audiencia complementaria o preparatoria",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "1.300",
            "id": 176,
            "que_es": "Actuación en audiencias intermedias que complementan o preparan la etapa decisiva del proceso.",
            "cuando_aplica": "Se usa en procesos cuyo trámite contempla una audiencia complementaria o preparatoria antes del juicio o la resolución final."
          },
          {
            "categoria": "11. Trámites en General",
            "subcategoria": null,
            "detalle": "Audiencia de medidas cautelares y/o sentencia",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "2.600",
            "id": 177,
            "que_es": "Actuación del abogado en la audiencia donde se resuelven medidas cautelares o se dicta sentencia.",
            "cuando_aplica": "Se usa para la audiencia en la que el juez decide sobre una medida cautelar solicitada, o dicta la sentencia del caso."
          },
          {
            "categoria": "11. Trámites en General",
            "subcategoria": null,
            "detalle": "Conciliación en sede administrativa",
            "porcentaje_adicional": "Más el 10% de la cuantía de la conciliación",
            "monto_la_paz_bs": "505",
            "id": 178,
            "que_es": "Actuación del abogado en un proceso de conciliación llevado ante una entidad administrativa.",
            "cuando_aplica": "Se usa cuando las partes buscan resolver su conflicto mediante conciliación ante una autoridad administrativa, en lugar de litigar."
          },
          {
            "categoria": "11. Trámites en General",
            "subcategoria": null,
            "detalle": "Conciliación en sede judicial",
            "porcentaje_adicional": "Más el 10% de la cuantía de la conciliación",
            "monto_la_paz_bs": "717",
            "id": 179,
            "que_es": "Actuación del abogado en una audiencia de conciliación dentro de un proceso judicial.",
            "cuando_aplica": "Se usa cuando, dentro de un juicio ya iniciado, las partes intentan llegar a un acuerdo conciliatorio ante el juez."
          },
          {
            "categoria": "11. Trámites en General",
            "subcategoria": null,
            "detalle": "Arbitraje",
            "porcentaje_adicional": "Más el 10% de la cuantía del arbitraje",
            "monto_la_paz_bs": "1.019",
            "id": 180,
            "que_es": "Patrocinio legal en un proceso de arbitraje, al margen de la materia específica del conflicto.",
            "cuando_aplica": "Se usa cuando las partes de cualquier tipo de conflicto arbitrable acuerdan someterlo a arbitraje en lugar de a la justicia ordinaria."
          },
          {
            "categoria": "11. Trámites en General",
            "subcategoria": null,
            "detalle": "Trámites en derechos reales",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "3.130",
            "id": 181,
            "que_es": "Gestiones ante el registro de Derechos Reales -inscripción, cancelación, certificaciones, etc.- sobre inmuebles y otros bienes registrables.",
            "cuando_aplica": "Se usa para registrar compraventas, hipotecas, gravámenes u otros actos sobre bienes inmuebles."
          },
          {
            "categoria": "11. Trámites en General",
            "subcategoria": null,
            "detalle": "Trámites ante los Gobiernos Autónomos Municipales (cambio de línea y nivel, impuestos, inspecciones, etc.)",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "1.880",
            "id": 182,
            "que_es": "Gestiones ante los gobiernos municipales sobre temas urbanísticos, catastrales, tributarios municipales, entre otros.",
            "cuando_aplica": "Se usa para trámites como cambio de línea y nivel de un inmueble, pago o impugnación de impuestos municipales, inspecciones, entre otros."
          },
          {
            "categoria": "11. Trámites en General",
            "subcategoria": null,
            "detalle": "Trámites por la Ley 247 (datos técnicos o personales)",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "2.600",
            "id": 183,
            "que_es": "Gestiones relacionadas con el Régimen Excepcional de Regularización del Derecho Propietario (Ley N.º 247), sobre datos técnicos o personales de un inmueble.",
            "cuando_aplica": "Se usa para regularizar el derecho propietario de un inmueble bajo este régimen excepcional."
          },
          {
            "categoria": "11. Trámites en General",
            "subcategoria": null,
            "detalle": "Trámites ante el INRA",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "3.130",
            "id": 184,
            "que_es": "Gestiones ante el Instituto Nacional de Reforma Agraria relacionadas con la titulación y el saneamiento de tierras.",
            "cuando_aplica": "Se usa para trámites de saneamiento, titulación o consulta de antecedentes agrarios ante el INRA."
          },
          {
            "categoria": "11. Trámites en General",
            "subcategoria": null,
            "detalle": "Trámites ante impuestos",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "2.500",
            "id": 185,
            "que_es": "Gestiones ante el Servicio de Impuestos Nacionales u otras entidades tributarias, fuera de un proceso contencioso.",
            "cuando_aplica": "Se usa para trámites administrativos tributarios rutinarios: inscripciones, certificaciones, planes de pago, etc."
          },
          {
            "categoria": "11. Trámites en General",
            "subcategoria": null,
            "detalle": "Elaboración de contratos",
            "porcentaje_adicional": "Más el 1% de la cuantía",
            "monto_la_paz_bs": "250",
            "id": 186,
            "que_es": "Redacción de contratos en general, de cualquier materia no comercial específica.",
            "cuando_aplica": "Se usa cuando el cliente necesita formalizar por escrito un acuerdo con otra persona o entidad."
          },
          {
            "categoria": "12. Redacción de Memoriales",
            "subcategoria": null,
            "detalle": "Escrito de simple petición",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "150",
            "id": 187,
            "que_es": "Memorial breve que solicita algo puntual dentro de un trámite o proceso, sin mayor fundamentación.",
            "cuando_aplica": "Se usa para pedidos simples y directos ante una autoridad, por ejemplo solicitar una copia, un plazo o una certificación."
          },
          {
            "categoria": "12. Redacción de Memoriales",
            "subcategoria": null,
            "detalle": "Escrito fundamentado",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "380",
            "id": 188,
            "que_es": "Memorial que desarrolla argumentos de hecho y de derecho para sustentar una petición o posición dentro de un proceso.",
            "cuando_aplica": "Se usa cuando la solicitud requiere una argumentación jurídica más elaborada que un simple pedido."
          },
          {
            "categoria": "12. Redacción de Memoriales",
            "subcategoria": null,
            "detalle": "Redacción de contratos",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "190",
            "id": 189,
            "que_es": "Elaboración de un contrato, listada específicamente en la sección de redacción de memoriales.",
            "cuando_aplica": "Se usa para la sola redacción del documento, sin que implique gestión de trámite o representación posterior."
          },
          {
            "categoria": "12. Redacción de Memoriales",
            "subcategoria": null,
            "detalle": "Redacción de testamento",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "1.250",
            "id": 190,
            "que_es": "Elaboración de un testamento conforme a las formas legales exigidas.",
            "cuando_aplica": "Se usa cuando una persona quiere disponer, para después de su muerte, de sus bienes conforme a su voluntad, dentro de los límites que fija la ley (por ejemplo, la legítima de los herederos forzosos)."
          },
          {
            "categoria": "12. Redacción de Memoriales",
            "subcategoria": null,
            "detalle": "Redacción de minutas",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "630",
            "id": 191,
            "que_es": "Elaboración de minutas -documentos privados previos a una escritura pública- de diversos actos jurídicos.",
            "cuando_aplica": "Se usa como paso previo a la protocolización notarial de un acto: compraventa, constitución de sociedad, etc."
          },
          {
            "categoria": "13. Asuntos Sociales",
            "subcategoria": null,
            "detalle": "Conciliación definitiva por derechos laborales ante la Inspectoría del Trabajo",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "2.600",
            "id": 192,
            "que_es": "Actuación del abogado en la conciliación final llevada ante la Inspectoría/Jefatura del Trabajo sobre derechos laborales.",
            "cuando_aplica": "Se usa cuando trabajador y empleador acuden a la Inspectoría del Trabajo para cerrar definitivamente su conflicto mediante acuerdo conciliatorio."
          },
          {
            "categoria": "13. Asuntos Sociales",
            "subcategoria": null,
            "detalle": "Juicio sobre cobro de beneficios sociales",
            "porcentaje_adicional": "Más el 10% sobre liquidación judicial",
            "monto_la_paz_bs": "8.700",
            "id": 193,
            "que_es": "Proceso judicial para cobrar beneficios sociales ya liquidados o reconocidos y no pagados.",
            "cuando_aplica": "Se usa cuando, pese a existir una liquidación de beneficios sociales, el empleador no paga y es necesario demandar judicialmente su cobro."
          },
          {
            "categoria": "13. Asuntos Sociales",
            "subcategoria": null,
            "detalle": "Denuncias por infracción a las leyes sociales",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "4.750",
            "id": 194,
            "que_es": "Denuncia ante la autoridad competente por el incumplimiento de normas laborales y sociales por parte del empleador.",
            "cuando_aplica": "Se usa para poner en conocimiento de la autoridad laboral el incumplimiento de leyes sociales."
          },
          {
            "categoria": "13. Asuntos Sociales",
            "subcategoria": null,
            "detalle": "Pliego, petitorio, arbitraje y conflictos laborales",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "12.500",
            "id": 195,
            "que_es": "Patrocinio en la presentación de pliegos petitorios colectivos y en la resolución de conflictos laborales colectivos, incluido el arbitraje.",
            "cuando_aplica": "Se usa en negociaciones colectivas entre sindicato y empleador, y en los conflictos que de ellas deriven."
          },
          {
            "categoria": "13. Asuntos Sociales",
            "subcategoria": null,
            "detalle": "Juicio social coactivo",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "8.750",
            "id": 196,
            "que_es": "Proceso de cobro ejecutivo de obligaciones sociales/laborales reconocidas en un título con fuerza coactiva.",
            "cuando_aplica": "Se usa cuando existe una resolución o documento que permite exigir directamente el pago de una obligación social."
          },
          {
            "categoria": "13. Asuntos Sociales",
            "subcategoria": null,
            "detalle": "Trámites relacionados con la seguridad social",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "4.380",
            "id": 197,
            "que_es": "Gestiones diversas ante entidades de seguridad social vinculadas a derechos laborales y previsionales.",
            "cuando_aplica": "Se usa para trámites de aportes, prestaciones, jubilación u otros beneficios de seguridad social."
          },
          {
            "categoria": "14. Asuntos Tributarios y Aduaneros",
            "subcategoria": null,
            "detalle": "Defensa en nota de cargo",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "13.500",
            "id": 198,
            "que_es": "Defensa legal frente a una nota de cargo -acto por el cual la Administración Tributaria determina una deuda- emitida contra el contribuyente.",
            "cuando_aplica": "Se usa cuando el Servicio de Impuestos Nacionales notifica una nota de cargo y el contribuyente quiere impugnarla o descargarla."
          },
          {
            "categoria": "14. Asuntos Tributarios y Aduaneros",
            "subcategoria": null,
            "detalle": "Procesos tributarios",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "9.000",
            "id": 199,
            "que_es": "Patrocinio general en procesos ante la Administración Tributaria o la Autoridad de Impugnación Tributaria.",
            "cuando_aplica": "Se usa para cualquier proceso tributario contencioso no cubierto por un ítem más específico."
          },
          {
            "categoria": "14. Asuntos Tributarios y Aduaneros",
            "subcategoria": null,
            "detalle": "Denuncias sobre infracciones tributarias",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "9.000",
            "id": 200,
            "que_es": "Denuncia ante la autoridad competente por infracciones tributarias cometidas por un contribuyente.",
            "cuando_aplica": "Se usa para poner en conocimiento de la Administración Tributaria el incumplimiento de obligaciones fiscales."
          },
          {
            "categoria": "14. Asuntos Tributarios y Aduaneros",
            "subcategoria": null,
            "detalle": "Defensa en denuncia",
            "porcentaje_adicional": "Más el 15% del monto de la denuncia",
            "monto_la_paz_bs": "18.000",
            "id": 201,
            "que_es": "Defensa legal frente a una denuncia por presunta infracción o delito tributario/aduanero.",
            "cuando_aplica": "Se usa cuando el cliente es denunciado por un ilícito tributario o aduanero y necesita defensa técnica."
          },
          {
            "categoria": "14. Asuntos Tributarios y Aduaneros",
            "subcategoria": null,
            "detalle": "Defensa en la denuncia de contrabando",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "18.000",
            "id": 202,
            "que_es": "Defensa legal especializada frente a una denuncia por el delito de contrabando.",
            "cuando_aplica": "Se usa cuando la Aduana Nacional u otra autoridad denuncia a una persona por contrabando de mercancías."
          },
          {
            "categoria": "14. Asuntos Tributarios y Aduaneros",
            "subcategoria": null,
            "detalle": "Juicios coactivos en general",
            "porcentaje_adicional": "Más el 10% sobre la cuantía",
            "monto_la_paz_bs": "27.000",
            "id": 203,
            "que_es": "Proceso de cobro ejecutivo de deudas tributarias o aduaneras firmes.",
            "cuando_aplica": "Se usa cuando el Estado ejecuta coactivamente una deuda tributaria o aduanera no pagada voluntariamente."
          },
          {
            "categoria": "14. Asuntos Tributarios y Aduaneros",
            "subcategoria": null,
            "detalle": "Consultoría jurídica por hora",
            "porcentaje_adicional": "—",
            "monto_la_paz_bs": "630",
            "id": 204,
            "que_es": "Honorario por asesoría tributaria facturada según el tiempo efectivamente dedicado.",
            "cuando_aplica": "Se usa cuando el servicio se cobra por horas de consultoría, en lugar de por un caso o trámite específico."
          },
          {
            "categoria": "14. Asuntos Tributarios y Aduaneros",
            "subcategoria": null,
            "detalle": "Trámite de pago de impuestos sucesorios",
            "porcentaje_adicional": "Más el 2%",
            "monto_la_paz_bs": "630",
            "id": 205,
            "que_es": "Gestión del pago del impuesto a la transmisión gratuita de bienes (sucesiones, donaciones) ante la Administración Tributaria.",
            "cuando_aplica": "Se usa cuando una persona hereda o recibe una donación y debe liquidar y pagar el impuesto sucesorio correspondiente."
          }
        ],
        "categorias": [
          {
            "nombre": "1. Materia Constitucional",
            "total": 14,
            "base_legal": "Código Procesal Constitucional (Ley N.º 254) y Constitución Política del Estado, arts. 196–204."
          },
          {
            "nombre": "2. Materia Civil",
            "total": 28,
            "base_legal": "Código Procesal Civil (Ley N.º 439) y Código Civil."
          },
          {
            "nombre": "3. Materia Penal",
            "total": 21,
            "base_legal": "Código de Procedimiento Penal (Ley N.º 1970) y Código Penal. La subcategoría de sustancias controladas se rige por la Ley N.º 1008."
          },
          {
            "nombre": "4. Materia Familiar",
            "total": 23,
            "base_legal": "Código de las Familias y del Proceso Familiar (Ley N.º 603). La subcategoría de niñez se rige por el Código Niña, Niño y Adolescente (Ley N.º 548)."
          },
          {
            "nombre": "5. Materia Comercial",
            "total": 23,
            "base_legal": "Código de Comercio y normativa de propiedad intelectual del SENAPI."
          },
          {
            "nombre": "6. Materia del Trabajo y Seguridad Social",
            "total": 21,
            "base_legal": "Ley General del Trabajo, su Decreto Reglamentario y Código Procesal del Trabajo."
          },
          {
            "nombre": "7. Materia Tributaria y Coactivo Fiscal",
            "total": 4,
            "base_legal": "Código Tributario Boliviano (Ley N.º 2492)."
          },
          {
            "nombre": "8. Materia Agroambiental",
            "total": 19,
            "base_legal": "Ley N.º 1715 (Ley INRA), modificada por la Ley N.º 3545, y normativa del Tribunal Agroambiental."
          },
          {
            "nombre": "9. Materia Minera",
            "total": 12,
            "base_legal": "Ley de Minería y Metalurgia (Ley N.º 535)."
          },
          {
            "nombre": "10. Materia Administrativa",
            "total": 5,
            "base_legal": "Ley de Procedimiento Administrativo (Ley N.º 2341)."
          },
          {
            "nombre": "11. Trámites en General",
            "total": 17,
            "base_legal": "Normativa variada según la materia de cada trámite."
          },
          {
            "nombre": "12. Redacción de Memoriales",
            "total": 5,
            "base_legal": "Honorarios por la sola redacción de escritos; la materia de fondo depende de cada caso."
          },
          {
            "nombre": "13. Asuntos Sociales",
            "total": 6,
            "base_legal": "Normativa laboral y de seguridad social."
          },
          {
            "nombre": "14. Asuntos Tributarios y Aduaneros",
            "total": 8,
            "base_legal": "Código Tributario Boliviano (Ley N.º 2492) y Ley General de Aduanas (Ley N.º 1990)."
          }
        ]
      };

/* ---------- Interfaz: buscador, filtros y listado ---------- */

      (function () {
        const items = PAYLOAD.items;
        const categorias = PAYLOAD.categorias;

        const chipRow = document.getElementById("chipRow");
        const catRoot = document.getElementById("categories");
        const searchInput = document.getElementById("search");
        const resultCount = document.getElementById("resultCount");
        const emptyState = document.getElementById("emptyState");

        let activeCat = "Todos";
        let query = "";

        function norm(s) {
          return (s || "")
            .toString()
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
        }

        // Build chips
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
            const short = c.nombre.replace(/^\d+\.\s*/, "");
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

        function highlight(text, q) {
          if (!q) return escapeHtml(text);
          const idx = norm(text).indexOf(q);
          if (idx === -1) return escapeHtml(text);
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
        function escapeHtml(s) {
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

        const openIds = new Set();

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
          let lastCat = null,
            lastSub = null;
          let catSection = null,
            subMarkerNeeded = false;

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
            section.className = "category collapsed";
            const head = document.createElement("div");
            head.className = "category-head";
            head.innerHTML =
              "<h2>" +
              escapeHtml(cat.nombre) +
              '</h2><span class="count">' +
              catItems.length +
              (catItems.length === cat.total ? "" : " de " + cat.total) +
              "</span>";
            section.appendChild(head);

          // Click header to toggle collapse
          head.addEventListener('click', () => {
            const isCollapsed = section.classList.toggle('collapsed');
            // No additional state needed; CSS handles hiding items
          });

            if (cat.base_legal) {
              const basis = document.createElement("div");
              basis.className = "category-basis";
              basis.textContent = cat.base_legal;
              section.appendChild(basis);
            }

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

              if (isDupItem(it)) {
                const dup = document.createElement("span");
                dup.className = "dup-flag";
                dup.textContent = "dup.";
                row.appendChild(dup);
              }

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
              detail.innerHTML =
                '<div class="block"><span class="label">¿Qué es?</span>' +
                escapeHtml(it.que_es) +
                "</div>" +
                '<div class="block"><span class="label">¿Cuándo aplica?</span>' +
                escapeHtml(it.cuando_aplica) +
                "</div>" +
                '<div class="fee-line">' +
                '<span><span class="k">Honorario mínimo La Paz — </span><span class="v">Bs ' +
                it.monto_la_paz_bs +
                "</span></span>" +
                (it.porcentaje_adicional && it.porcentaje_adicional !== "—"
                  ? '<span><span class="k">Regla adicional — </span><span class="v">' +
                    escapeHtml(it.porcentaje_adicional) +
                    "</span></span>"
                  : "") +
                "</div>";
              wrap.appendChild(detail);

              section.appendChild(wrap);
            });

            catRoot.appendChild(section);
          });

          emptyState.style.display = shown === 0 ? "block" : "none";
          resultCount.textContent =
            q || activeCat !== "Todos"
              ? shown + " de " + items.length
              : items.length + " conceptos";
        }

        // Mark duplicate detalle within same categoria+subcategoria as dup for the UI hint
        function isDupItem(it) {
          return DUP_IDS.has(it.id);
        }
        const DUP_IDS = new Set();
        (function findDups() {
          const seen = {};
          items.forEach((it) => {
            const key =
              it.categoria + "|" + it.subcategoria + "|" + norm(it.detalle);
            seen[key] = seen[key] || [];
            seen[key].push(it.id);
          });
          Object.values(seen).forEach((ids) => {
            if (ids.length > 1) ids.forEach((id) => DUP_IDS.add(id));
          });
        })();

        searchInput.addEventListener("input", (e) => {
          query = e.target.value;
          render();
        });

        buildChips();
        render();
      })();

/* ---------- Selector de tema (claro / oscuro) ---------- */
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;
  const mql = window.matchMedia("(prefers-color-scheme: dark)");

  function currentTheme() {
    const explicit = root.getAttribute("data-theme");
    if (explicit === "light" || explicit === "dark") return explicit;
    return mql.matches ? "dark" : "light";
  }

  function applyStoredTheme() {
    let stored = null;
    try {
      stored = localStorage.getItem("theme");
    } catch (e) {
      /* localStorage no disponible; se usa la preferencia del sistema */
    }
    if (stored === "light" || stored === "dark") {
      root.setAttribute("data-theme", stored);
    }
  }

  function updateToggle() {
    const theme = currentTheme();
    toggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    toggle.setAttribute(
      "aria-label",
      theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro",
    );
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", theme === "dark" ? "#1b1712" : "#efe7d8");
    }
  }

  applyStoredTheme();
  updateToggle();

  toggle.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* si no se puede guardar, el tema solo dura esta sesión */
    }
    updateToggle();
  });
})();

/* ---------- PWA: instalación y service worker ---------- */
(function () {
  const installBtn = document.getElementById("installBtn");
  let deferredPrompt = null;

  // Chrome/Android disparan este evento cuando la app cumple los
  // requisitos para instalarse; mostramos entonces el botón "Instalar".
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    if (installBtn) installBtn.hidden = false;
  });

  if (installBtn) {
    installBtn.addEventListener("click", async () => {
      if (!deferredPrompt) return;
      installBtn.hidden = true;
      deferredPrompt.prompt();
      try {
        await deferredPrompt.userChoice;
      } finally {
        deferredPrompt = null;
      }
    });
  }

  window.addEventListener("appinstalled", () => {
    if (installBtn) installBtn.hidden = true;
    deferredPrompt = null;
  });

  // El service worker habilita el uso offline y es uno de los requisitos
  // que Chrome exige para poder "instalar" el sitio como app.
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {
        /* si falla el registro, el sitio sigue funcionando normalmente */
      });
    });
  }
})();
