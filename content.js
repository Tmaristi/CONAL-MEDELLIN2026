/* =============================================================================
   CONAL 2026 · Guía del Asistente — CONTENIDO EDITABLE
   =============================================================================

   Este es el ÚNICO archivo que necesitas tocar para cambiar los textos.

   ── CÓMO FUNCIONAN LOS PLACEHOLDERS ──────────────────────────────────────────
   Todo lo que todavía no es un dato oficial lleva el prefijo "[PLACEHOLDER]".

     • Para encontrarlos todos:  busca  [PLACEHOLDER]  en este archivo.
     • En la página, el prefijo NO se ve: el texto aparece con un subrayado
       punteado para que se note que está pendiente.
     • Cuando tengas el dato real, borra "[PLACEHOLDER] " del inicio y listo:
       el subrayado desaparece solo.

   ── IMÁGENES ────────────────────────────────────────────────────────────────
   Las rutas apuntan a archivos dentro de /assets/ que todavía no existen.
   Mientras no estén, se ve un recuadro de color con el nombre del archivo
   esperado. Suelta el archivo con ese nombre exacto y aparece solo.

   ============================================================================= */

window.CONTENT = {

  /* ─────────────────────────────────────────────────────────────────────────
     META · datos generales del evento
     ───────────────────────────────────────────────────────────────────────── */
  meta: {
    evento: 'CONAL 2026',
    subtitulo: 'El Camino del Silletero',
    ciudad: 'Medellín',
    lema: 'Sembrando ideas, cosechando impacto',
    fechas: '21 · 22 · 23 de noviembre de 2026',

    // Fecha y hora de inicio para la cuenta regresiva (zona horaria de Colombia, -05:00).
    // Es la apertura de la acreditación del Día 1.
    inicio: '2026-11-21T07:00:00-05:00',

    // Número del comité para el botón de WhatsApp (formato internacional, sin signos).
    whatsapp: '573015109001',
    whatsappMensaje: 'Hola, comité CONAL 2026. Tengo una pregunta sobre el evento.',

    logo: './assets/logos/logo-conal.jpeg',
    logoAlt: 'CONAL 2026 · El camino del silletero · Medellín',
    // Imagen del lema "Sembrando ideas, cosechando impacto" (va debajo del logo en el inicio).
    lemaImg: './assets/logos/texto-conal.jpeg',

    /* Decoraciones del logo (PNG transparentes) que adornan los títulos de sección.
       "forma" decide dónde se ubican; "color" sirve para no ponerlas sobre un fondo
       del mismo color (ej. las moradas no van en la sección morada). */
    decoraciones: [
      { archivo: './assets/logos/deco-01-gotas-verdes-izq.png',  forma: 'gotas-izq', color: 'verde' },
      { archivo: './assets/logos/deco-07-gotas-verdes-der.png',  forma: 'gotas-der', color: 'verde' },
      { archivo: './assets/logos/deco-02-estrella-rosa.png',     forma: 'estrella',  color: 'fucsia' },
      { archivo: './assets/logos/deco-08-estrella-amarilla.png', forma: 'estrella',  color: 'amarillo' },
      { archivo: './assets/logos/deco-09-estrella-morada.png',   forma: 'estrella',  color: 'morado' },
      { archivo: './assets/logos/deco-04-abanico-morado.png',    forma: 'abanico',   color: 'morado' },
      { archivo: './assets/logos/deco-05-abanico-naranja.png',   forma: 'abanico',   color: 'naranja' },
      { archivo: './assets/logos/deco-03-gota-morada-arriba.png',forma: 'gota',      color: 'morado' },
      { archivo: './assets/logos/deco-06-gota-rosa.png',         forma: 'gota',      color: 'fucsia' }
    ]
  },

  /* ─────────────────────────────────────────────────────────────────────────
     NAVEGACIÓN · el orden aquí es el orden del menú
     ───────────────────────────────────────────────────────────────────────── */
  nav: [
    { id: 'inicio',       label: 'Inicio',      icono: 'home' },
    { id: 'cronograma',   label: 'Cronograma',  icono: 'calendar' },
    { id: 'sedes',        label: 'Sedes',       icono: 'pin' },
    { id: 'planes',       label: 'Planes',      icono: 'compass' },
    { id: 'transporte',   label: 'Transporte',  icono: 'bus' },
    { id: 'equipaje',     label: 'Equipaje',    icono: 'suitcase' },
    { id: 'vestimenta',   label: 'Vestimenta',  icono: 'shirt' },
    { id: 'emergencias',  label: 'Emergencias', icono: 'alert' },
    { id: 'multas',       label: 'Multas',      icono: 'ticket' },
    { id: 'contactos',    label: 'Contactos',   icono: 'phone' },
    { id: 'faq',          label: 'FAQ',         icono: 'help' }
  ],

  /* ─────────────────────────────────────────────────────────────────────────
     MODAL DE BIENVENIDA · solo la primera vez que se abre la guía
     ───────────────────────────────────────────────────────────────────────── */
  bienvenida: {
    saludo: '¡Bienvenido/a!',
    titulo: 'Esta es tu guía del CONAL',
    texto: 'Aquí está todo lo que necesitas para vivir el CONAL 2026 en Medellín: cronograma, sedes, qué empacar y a quién llamar. Guárdala en tu pantalla de inicio y consúltala cuando quieras.',
    boton: 'Entrar a la guía',
    foto: './assets/fotos/bienvenida.jpg'
  },

  /* ─────────────────────────────────────────────────────────────────────────
     1 · INICIO (hero)
     ───────────────────────────────────────────────────────────────────────── */
  hero: {
    foto: './assets/fotos/hero.jpg',
    eyebrow: '¡Es hora de vivir el CONAL!',
    tituloLinea1: 'Guía del',
    tituloScript: 'Asistente',       // esta palabra va en tipografía script
    subtitulo: 'Todo lo que necesitas para vivir la mejor experiencia en Medellín.',
    botonPrimario: 'Comenzar la experiencia',
    desliza: 'Desliza',
    cuentaRegresivaTitulo: 'Faltan',
    cuentaRegresivaNota: 'Para la apertura de la acreditación · sábado 21 de noviembre, 7:00 a. m.',
    cuentaRegresivaFin: '¡Llegó el día! Nos vemos en Medellín.'
  },

  /* ─────────────────────────────────────────────────────────────────────────
     ACCESO RÁPIDO · rejilla de módulos + tarjetas de día
     ───────────────────────────────────────────────────────────────────────── */
  accesoRapido: {
    eyebrow: 'Navega rápido',
    tituloLinea1: 'Acceso',
    tituloScript: 'rápido',
    subtitulo: 'Toca cualquier módulo para ir directo a la información.',

    // Las tarjetas de día enlazan a su pestaña en el Cronograma.
    dias: [
      {
        etiqueta: 'D1',
        dia: 'dia-1',
        titulo: 'Día 1 · Saber',
        fecha: 'Sáb 21 nov',
        descripcion: 'Contenido académico, ODS y responsabilidad social y ambiental.'
      },
      {
        etiqueta: 'D2',
        dia: 'dia-2',
        titulo: 'Día 2 · Ser',
        fecha: 'Dom 22 nov',
        descripcion: 'Desarrollo personal del asociado y capacitación interna.'
      },
      {
        etiqueta: 'D3',
        dia: 'dia-3',
        titulo: 'Día 3 · Hacer',
        fecha: 'Lun 23 nov',
        descripcion: 'Integración de los asistentes.'
      }
    ],

    cierre: {
      foto: './assets/fotos/comunidad.jpg',
      frase: 'Más que un evento: una comunidad que se siembra en Medellín.'
    }
  },

  /* ─────────────────────────────────────────────────────────────────────────
     2 · CRONOGRAMA
     ───────────────────────────────────────────────────────────────────────── */
  cronograma: {
    eyebrow: 'Tres días',
    tituloLinea1: 'El',
    tituloScript: 'cronograma',
    subtitulo: 'Horarios sujetos a ajustes del comité organizador.',
    foto: './assets/fotos/cronograma.jpg',

    // Nombre y orden de los tipos de actividad (para la leyenda).
    // tipo: acreditacion · academico · ceremonia · comida · mercadeo · traslado · logistica · integracion
    tipos: {
      academico:    'Académico',
      ceremonia:    'Ceremonia',
      comida:       'Comida',
      integracion:  'Integración',
      traslado:     'Traslado',
      logistica:    'Logística',
      mercadeo:     'Mercadeo',
      acreditacion: 'Acreditación'
    },
    etiquetaAhora: 'Ahora',
    etiquetaSigue: 'Sigue',

    // Horas en formato 24 h ('HH:MM'). La página las muestra en 12 h.
    // Una fila que termina en '00:00' termina a medianoche de ese mismo día.
    // "detalle" es opcional: aparece como línea secundaria debajo de la actividad.
    dias: [
      {
        id: 'dia-1',
        tab: 'Día 1',
        color: 'fucsia',
        nombre: 'Saber',
        fecha: 'Sábado 21 de noviembre de 2026',
        fechaISO: '2026-11-21',
        descripcion: 'Contenido académico, ODS y responsabilidad social y ambiental.',
        items: [
          { inicio: '07:00', fin: '08:00', actividad: 'Acreditación', tipo: 'acreditacion' },
          { inicio: '08:00', fin: '08:30', actividad: 'Palabras de bienvenida', tipo: 'ceremonia' },
          { inicio: '08:30', fin: '09:00', actividad: 'Acto de apertura cultural', tipo: 'ceremonia' },
          { inicio: '09:00', fin: '10:10', actividad: 'Taller 1 - Data sprint: Decisiones que transforman', tipo: 'academico' },
          { inicio: '10:10', fin: '10:40', actividad: 'Refrigerio 1', tipo: 'comida' },
          { inicio: '10:40', fin: '11:10', actividad: 'Acreditación', tipo: 'acreditacion' },
          { inicio: '11:10', fin: '12:20', actividad: 'Simulación inmersiva 1 - ¿Qué harías si fueras el gerente?', tipo: 'academico' },
          { inicio: '12:20', fin: '13:50', actividad: 'Almuerzo 1 - Libre', tipo: 'comida' },
          { inicio: '13:50', fin: '14:20', actividad: 'Acreditación', tipo: 'acreditacion' },
          { inicio: '14:20', fin: '14:50', actividad: 'Espacio para mercadeo', tipo: 'mercadeo' },
          { inicio: '14:50', fin: '16:20', actividad: 'Panel 1 - Ingeniería para transformar territorios', tipo: 'academico' },
          { inicio: '16:20', fin: '17:10', actividad: 'Espacio para mercadeo', tipo: 'mercadeo' },
          { inicio: '17:10', fin: '17:40', actividad: 'Acomodación en transporte y Refrigerio 2', tipo: 'traslado' },
          { inicio: '17:40', fin: '19:30', actividad: 'Traslado al hotel', tipo: 'traslado', detalle: 'Trayecto aproximado de 1 h 30 min a 2 h. Lugar por confirmar.' },
          { inicio: '19:30', fin: '20:00', actividad: 'Acomodación en habitaciones', tipo: 'logistica' },
          { inicio: '20:00', fin: '21:00', actividad: 'Cena 1', tipo: 'comida' },
          { inicio: '21:00', fin: '22:00', actividad: 'Preparación para la integración', tipo: 'integracion' },
          { inicio: '22:00', fin: '00:00', actividad: 'Integración nocturna', tipo: 'integracion' }
        ]
      },
      {
        id: 'dia-2',
        tab: 'Día 2',
        color: 'morado',
        nombre: 'Ser',
        fecha: 'Domingo 22 de noviembre de 2026',
        fechaISO: '2026-11-22',
        descripcion: 'Desarrollo personal del asociado y capacitación interna.',
        items: [
          { inicio: '07:00', fin: '09:00', actividad: 'Desayuno 1', tipo: 'comida' },
          { inicio: '09:00', fin: '09:30', actividad: 'Acreditación', tipo: 'acreditacion' },
          { inicio: '09:30', fin: '10:30', actividad: 'Workshop 1 - El reto de explicar lo complejo', tipo: 'academico' },
          { inicio: '10:30', fin: '11:00', actividad: 'Refrigerio 3', tipo: 'comida' },
          { inicio: '11:00', fin: '11:30', actividad: 'Acreditación', tipo: 'acreditacion' },
          { inicio: '11:30', fin: '13:00', actividad: 'Espacio JDN-IN-GNP', tipo: 'academico' },
          { inicio: '13:00', fin: '14:00', actividad: 'Almuerzo 2', tipo: 'comida' },
          { inicio: '14:00', fin: '14:30', actividad: 'Acreditación', tipo: 'acreditacion' },
          { inicio: '14:30', fin: '16:00', actividad: 'Conversatorio 1 - El talento que liderará la industria 4.0', tipo: 'academico' },
          { inicio: '16:00', fin: '16:30', actividad: 'Presentación por regiones', tipo: 'academico' },
          { inicio: '16:30', fin: '17:00', actividad: 'Feria de emprendimiento', tipo: 'mercadeo' },
          { inicio: '17:00', fin: '17:30', actividad: 'Refrigerio 4', tipo: 'comida' },
          { inicio: '17:30', fin: '19:30', actividad: 'Preparación para la gala', tipo: 'integracion' },
          { inicio: '19:30', fin: '20:00', actividad: 'Acreditación', tipo: 'acreditacion' },
          { inicio: '20:00', fin: '21:00', actividad: 'Cena 2', tipo: 'comida' },
          { inicio: '21:00', fin: '23:00', actividad: 'Gala y cumpleaños de ANEIAP', tipo: 'ceremonia' },
          { inicio: '23:00', fin: '00:00', actividad: 'Integración nocturna', tipo: 'integracion' }
        ]
      },
      {
        id: 'dia-3',
        tab: 'Día 3',
        color: 'amarillo',
        nombre: 'Hacer',
        fecha: 'Lunes 23 de noviembre de 2026',
        fechaISO: '2026-11-23',
        descripcion: 'Integración de los asistentes.',
        items: [
          { inicio: '07:00', fin: '09:00', actividad: 'Desayuno 2', tipo: 'comida' },
          { inicio: '09:00', fin: '09:30', actividad: 'Acreditación', tipo: 'acreditacion' },
          { inicio: '09:30', fin: '12:00', actividad: 'FRAN', tipo: 'integracion' },
          { inicio: '12:00', fin: '13:00', actividad: 'Almuerzo 3', tipo: 'comida' },
          { inicio: '13:00', fin: '15:00', actividad: 'Refrigerio 5 y tiempo libre', tipo: 'comida' },
          { inicio: '15:00', fin: '16:00', actividad: 'Entrega de habitaciones (check out)', tipo: 'logistica' },
          { inicio: '16:00', fin: '16:30', actividad: 'Acreditación', tipo: 'acreditacion' },
          { inicio: '16:30', fin: '17:30', actividad: 'Zorro', tipo: 'integracion' },
          { inicio: '17:30', fin: '18:00', actividad: 'Acomodación en transporte', tipo: 'traslado' },
          { inicio: '18:00', fin: '20:00', actividad: 'Traslado a Medellín y fin del evento', tipo: 'traslado' }
        ]
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────────────────────
     3 · SEDES
     ───────────────────────────────────────────────────────────────────────── */
  sedes: {
    eyebrow: 'Dónde nos vemos',
    tituloLinea1: 'Las',
    tituloScript: 'sedes',
    subtitulo: 'Guarda las direcciones antes de salir: en algunos puntos la señal es débil.',

    lista: [
      {
        etiqueta: 'DÍA 1',
        color: 'fucsia',
        nombre: 'Sede principal · Universidad de Antioquia',
        descripcion: 'Aquí ocurren el registro, el acto de apertura y la jornada académica del primer día.',
        comoLlegar: 'Estación de Metro más cercana: Universidad. También llegan rutas de bus y servicios de transporte por aplicación.',
        direccion: 'Calle 67 N.º 53-108 (Ciudad Universitaria) · Medellín',
        foto: './assets/sedes/sede-1.jpg',
        mapa: 'https://maps.app.goo.gl/qjiGXp1io8smq7Zu9'
      },
      {
        etiqueta: 'DÍAS 2 Y 3',
        color: 'morado',
        nombre: 'Centro recreacional · Yarumito',
        descripcion: 'Sede del segundo y tercer día: ponencias, integración, alimentación y alojamiento.',
        comoLlegar: 'El traslado se hace únicamente en el transporte oficial del evento. Revisa la sección de Transporte.',
        direccion: 'Yarumito Finca Hotel, Vereda El Guayabo, Barbosa, Antioquia.',
        foto: './assets/sedes/sede-2.jpg',
        mapa: 'https://maps.app.goo.gl/Utzdk1sct4MNT65H8'
      }
    ],

    aviso: {
      titulo: 'Transporte oficial entre sedes',
      texto: 'El traslado entre sedes lo cubre la organización en los horarios publicados. Si te vas por tu cuenta, avísale a tu coordinación: el bus no espera y el cupo no se reserva.'
    },

    botonMapa: 'Abrir en Google Maps'
  },

  /* ─────────────────────────────────────────────────────────────────────────
     4 · PLANES EXTERNOS
     ───────────────────────────────────────────────────────────────────────── */
  planes: {
    eyebrow: 'Antes y después',
    tituloLinea1: 'Planes',
    tituloScript: 'externos',
    subtitulo: 'Además de la agenda académica del 21 al 23 de noviembre, el comité organiza planes opcionales antes y después del evento para que los asistentes conozcan Medellín y Antioquia. Estos planes no están incluidos en el cupo de inscripción y tienen cupos limitados.',

    // Chips de filtro. "fecha" debe coincidir con la "fecha" de cada plan.
    filtros: [
      { fecha: '',           label: 'Todos' },
      { fecha: '2026-11-18', label: 'Mié 18 nov' },
      { fecha: '2026-11-19', label: 'Jue 19 nov' },
      { fecha: '2026-11-20', label: 'Vie 20 nov' },
      { fecha: '2026-11-24', label: 'Mar 24 nov' }
    ],

    resumenTitulo: 'Resumen rápido',
    botonInscripcion: 'Inscríbete',
    botonDetalles: 'Ver detalles',
    botonOcultar: 'Ocultar detalles',
    etiquetaPorConfirmar: 'Por confirmar',
    etiquetaCupos: 'Cupos',
    etiquetaDestacado: 'Pre-evento',

    // Nombre visible de cada campo de detalle, en el orden en que se muestran.
    campos: {
      lugar: 'Lugar',
      comoLlegar: 'Cómo llegar',
      horario: 'Horario',
      duracion: 'Duración aprox.',
      incluye: 'Qué incluye',
      puntoEncuentro: 'Punto de encuentro',
      recomendaciones: 'Recomendaciones'
    },

    /* Los 7 planes, en orden cronológico.
       • Un campo que el plan no trae simplemente se omite (no se muestra).
       • Un dato pendiente se escribe como { texto: '...', porConfirmar: true }
         y la página le pone la etiqueta ámbar "Por confirmar".
       • "gratis: true" pinta el valor con el chip verde.
       • "destacado: true" lo muestra en el banner grande de la sección.
       • Sin "inscripcion": en vez de "Inscríbete" sale "Reservas e información". */
    lista: [
      {
        id: 'parque-explora',
        fecha: '2026-11-18',
        fechaCorta: 'Mié 18 nov',
        fechaLarga: 'Miércoles 18 de noviembre',
        nombre: 'Parque Explora',
        cuando: 'Mañana · 9:00 a. m.',
        hora: '9:00 a. m.',
        descripcion: 'Museo interactivo de ciencia y tecnología con salas de experimentación, el acuario de agua dulce más grande de Suramérica y el vivario. Un plan ideal para ingenieros curiosos.',
        valor: '$50.000 por persona',
        valorCorto: '$50.000',
        cupos: 'Ilimitados',
        lugar: 'Carrera 52 # 73-75, Medellín (frente a la estación Universidad del Metro)',
        duracion: '3 a 4 horas',
        puntoEncuentro: 'Estación Universidad del Metro',
        recomendaciones: 'Ropa cómoda, documento de identidad y carné estudiantil.',
        inscripcion: 'https://docs.google.com/forms/d/e/1FAIpQLSfrkjOkNAiaOkTb9vTUusjpnBYJ5w2D40PESvQTq2sFwZlaUQ/viewform'
      },
      {
        id: 'museo-el-castillo',
        fecha: '2026-11-18',
        fechaCorta: 'Mié 18 nov',
        fechaLarga: 'Miércoles 18 de noviembre',
        nombre: 'Museo El Castillo',
        cuando: 'Tarde · 1:00 p. m.',
        hora: '1:00 p. m.',
        descripcion: 'Castillo de estilo gótico de 1930 en El Poblado, con colecciones de arte decorativo europeo y jardines de inspiración francesa. Uno de los espacios patrimoniales más fotogénicos de la ciudad.',
        valor: '$30.000 por persona',
        valorCorto: '$30.000',
        cupos: '25',
        lugar: 'Calle 9 Sur # 32-269, El Poblado, Medellín',
        duracion: '2 horas (recorrido guiado y jardines)',
        puntoEncuentro: 'Estación Aguacatala del Metro',
        recomendaciones: 'Llegar 15 minutos antes del recorrido. Lleva algo de efectivo para el transporte. Traer carné estudiantil.',
        inscripcion: 'https://docs.google.com/forms/d/e/1FAIpQLSfPRqkwAYCwrehZhS_2I6pPXvnQkx2L0KyamRlQFvW81dpSng/viewform'
      },
      {
        id: 'tour-comuna-13',
        fecha: '2026-11-19',
        fechaCorta: 'Jue 19 nov',
        fechaLarga: 'Jueves 19 de noviembre',
        nombre: 'Tour Comuna 13',
        cuando: 'Mañana · 10:00 a. m.',
        hora: '10:00 a. m.',
        descripcion: 'Recorrido guiado por la Comuna 13, símbolo de transformación social de Medellín: grafitis, escaleras eléctricas al aire libre, hip hop y relatos de la comunidad.',
        valor: 'Gratis (se sugiere propina voluntaria para el guía local)',
        valorCorto: 'Gratis',
        gratis: true,
        cupos: 'Ilimitados',
        comoLlegar: 'Metro línea B hasta la estación San Javier',
        duracion: '2 a 3 horas',
        puntoEncuentro: 'Estación San Antonio del Metro',
        recomendaciones: 'Tenis cómodos (hay muchas escaleras), bloqueador, agua y efectivo para comprar algo a los emprendedores locales. No te separes del grupo.',
        inscripcion: 'https://docs.google.com/forms/d/e/1FAIpQLSdygX2XQKuw-htT8151z9cEdzRRclVuh2M77V5-QonNKFuAAw/viewform'
      },
      {
        id: 'picnic-parques-del-rio',
        fecha: '2026-11-19',
        fechaCorta: 'Jue 19 nov',
        fechaLarga: 'Jueves 19 de noviembre',
        nombre: 'Picnic en Parques del Río',
        cuando: 'Tarde · 4:00 p. m.',
        hora: '4:00 p. m.',
        descripcion: 'Tarde de integración al aire libre en Parques del Río, el corredor verde a orillas del río Medellín. Un espacio para conocer a asistentes de otros capítulos antes del evento.',
        valor: '$10.000 por persona',
        valorCorto: '$10.000',
        // El documento del comité no indica cupos para este plan.
        lugar: 'Parques del Río, Medellín (cerca de la estación Industriales del Metro)',
        duracion: '2 a 3 horas',
        incluye: 'Snacks dulces, salados y bebidas',
        puntoEncuentro: 'Parques del Río',
        recomendaciones: 'Chaqueta ligera y sombrilla: en noviembre suele llover en la tarde.',
        inscripcion: 'https://docs.google.com/forms/d/e/1FAIpQLSfEbA1vim943ipLDo25JEQfmDmfhy-ZvdEfjq9xOu4YHm6V2Q/viewform'
      },
      {
        id: 'chiva-rumbera',
        fecha: '2026-11-19',
        fechaCorta: 'Jue 19 nov',
        fechaLarga: 'Jueves 19 de noviembre',
        nombre: 'Chiva Rumbera',
        cuando: 'Noche · 10:00 p. m.',
        hora: '10:00 p. m.',
        descripcion: 'Recorrido nocturno por Medellín a bordo de una chiva, el bus tradicional de colores de la cultura antioqueña, con música, luces y ambiente de fiesta. Es una forma distinta de conocer la ciudad de noche e integrarse con asistentes de otros capítulos antes de la convención.',
        valor: '$35.000 por persona',
        valorCorto: '$35.000',
        cupos: '50',
        lugar: 'Recorrido por la avenida Las Palmas',
        duracion: '4 horas',
        puntoEncuentro: 'Carrera 70',
        recomendaciones: 'Ropa cómoda, documento de identidad y abrigo.',
        inscripcion: 'https://forms.gle/mVj7y7aN7m36gUB7A'
      },
      {
        id: 'planchon-guatape',
        fecha: '2026-11-20',
        fechaCorta: 'Vie 20 nov',
        fechaLarga: 'Viernes 20 de noviembre',
        nombre: 'Planchón en Guatapé',
        cuando: 'Salida 10:30 a. m. · Regreso 6:00 p. m.',
        hora: '10:30 a. m. – 6:00 p. m.',
        descripcion: 'Paseo en planchón por el embalse de Guatapé–El Peñol, uno de los paisajes más representativos de Antioquia, con música e integración a bordo.',
        valor: '$120.000 por persona',
        valorCorto: '$120.000',
        cupos: '50',
        horario: 'Salida de Medellín a las 10:30 a. m. y regreso a las 6:00 p. m.',
        incluye: 'Transporte ida y vuelta hacia Medellín. Trayecto en el planchón y bebidas.',
        puntoEncuentro: { texto: 'Por confirmar', porConfirmar: true },   // POR CONFIRMAR
        recomendaciones: 'Documento de identidad, bloqueador, gorra, vestido de baño y ropa de cambio, efectivo para alimentación y snacks.',
        inscripcion: 'https://docs.google.com/forms/d/e/1FAIpQLSfNFvij2Fbw3zVbmOuU7UZilp1FsUc49P9pP69x8XR3glYLpg/viewform'
      },
      {
        id: 'pre-evento',
        destacado: true,
        fecha: '2026-11-20',
        fechaCorta: 'Vie 20 nov',
        fechaLarga: 'Viernes 20 de noviembre',
        nombre: 'Pre-evento CONAL',
        cuando: 'Noche · A partir de las 10 p. m.',
        hora: 'Desde las 10 p. m.',
        descripcion: 'Esta vez queremos que *cada capítulo represente a un artista que lleve el nombre de Medellín* y su música a todas partes.\n\nLa idea es que se apropien de su esencia a través del vestuario, los accesorios y, sobre todo, ¡la actitud! No necesitan disfrazarse, simplemente deben llevar el flow de su artista.\n\nDress code: *_Vístete como el flow de tu artista_* 👟🖤',
        valor: 'Depende de la etapa de compra de boleta',
        valorCorto: 'Según etapa de boleta',
        cupos: '200',
        lugar: 'Discoteca ALMA',
        recomendaciones: 'Descansa: al día siguiente la acreditación empieza a las 7:00 a. m. en la Universidad de Antioquia.',
        // Sin formulario: el botón lleva al bloque de "Reservas e información".
        botonSinInscripcion: 'Reservas e información'
      },
      {
        id: 'tour-silletero',
        fecha: '2026-11-24',
        fechaCorta: 'Mar 24 nov',
        fechaLarga: 'Martes 24 de noviembre',
        nombre: 'Tour silletero en Santa Elena',
        cuando: 'Todo el día · Después del evento',
        hora: 'Todo el día',
        descripcion: 'Día completo en el corregimiento de Santa Elena para conocer la tradición silletera, patrimonio cultural de Antioquia e inspiración de la identidad de CONAL Medellín 2026: fincas de flores, historia de las silletas y cultura campesina.',
        valor: '$120.000 con transporte',
        valorCorto: '$120.000',
        cupos: '10 personas en adelante',
        horario: { texto: 'Todo el día (hora de salida y regreso por confirmar)', porConfirmar: true },   // POR CONFIRMAR
        incluye: 'Recorrido guiado por los cultivos de flores, acceso a zonas comunes, charla y armado de silleta. Transporte ida y vuelta.',
        puntoEncuentro: 'Estación San Antonio del Metro',
        recomendaciones: 'Santa Elena es más fría que Medellín: lleva chaqueta, impermeable y zapatos cerrados.',
        inscripcion: 'https://docs.google.com/forms/d/e/1FAIpQLScB8TxeOXw9kXzMU6WOfxh2dPG0qV0pw8bpF8uTrnBdBn7aZQ/viewform'
      }
    ],

    condiciones: {
      titulo: 'Condiciones de participación',
      items: [
        'Los planes externos son opcionales y no están incluidos en el valor de la inscripción a CONAL.',
        'El cupo se reserva únicamente con el pago confirmado. Los cupos son limitados y se asignan por orden de pago.',
        'Cada asistente debe llevar su documento de identidad y su carné de EPS o seguro médico.',
        'Durante el plan, el grupo se desplaza junto y sigue las indicaciones del staff acompañante.',
        'Los horarios pueden ajustarse por clima o tráfico; cualquier cambio se anunciará por los canales oficiales.',
        'Aplican las mismas normas de convivencia del evento.'
      ]
    },

    reservas: {
      titulo: 'Reservas e información',
      items: [
        { etiqueta: 'Logística Interna', nombre: 'Ana Isabel Angarita Escobar', valor: '322 527 0106', enlace: 'tel:+573225270106', icono: 'phone' },
        { etiqueta: 'Finanzas (pagos)',  nombre: 'Juliana Agudelo Cuervo',      valor: '315 633 4193', enlace: 'tel:+573156334193', icono: 'phone' },
        { etiqueta: 'Instagram',          valor: '@conalaneiap',     enlace: 'https://www.instagram.com/conalaneiap', icono: 'instagram' },
        { etiqueta: 'Correo',             valor: 'conal@aneiap.co',  enlace: 'mailto:conal@aneiap.co',               icono: 'mail' }
      ]
    },

    nota: 'Los valores son por persona y pueden ajustarse según el número final de inscritos.'
  },

  /* ─────────────────────────────────────────────────────────────────────────
     5 · TRANSPORTE
     ───────────────────────────────────────────────────────────────────────── */
  transporte: {
    eyebrow: 'Cómo moverte',
    tituloLinea1: 'El',
    tituloScript: 'transporte',
    subtitulo: 'La organización cubre los traslados entre sedes. Lo demás corre por tu cuenta.',

    tarjetas: [
      { icono: 'pin',   titulo: 'Punto de encuentro', valor: 'Universidad de Antioquia', detalle: 'Sábado 21. Lugar exacto de abordaje por confirmar. Llega 15 minutos antes.' },
      { icono: 'clock', titulo: 'Hora de salida',     valor: '5:40 p. m.',               detalle: 'Abordaje y Refrigerio 2 desde las 5:10 p. m. El bus sale puntual: no hay segundo viaje.' },
      { icono: 'bus',   titulo: 'Regreso',            valor: '8:00 p. m.',               detalle: 'Lunes 23: salida de El Yarumito a las 6:00 p. m., llegada estimada a Medellín.' }
    ],

    recomendaciones: [
      'Ten lista la escarapela: es tu pase para subir al transporte oficial.',
      'Descarga el mapa de tu ruta antes de salir, por si te quedas sin datos.',
      'Lleva efectivo en billetes pequeños: no en todos lados reciben transferencia.',
      'Si usas transporte por aplicación, confirma la placa antes de subirte.',
      'Muévete en grupo de noche y avísale a tu coordinación si te separas.',
      'Guarda el número del comité en tu celular antes del primer día.'
    ],

    tarifas: {
      titulo: 'Tarifas del transporte público',
      nota: 'Tarifas de referencia 2026. El valor puede variar; confirma en las taquillas o apps oficiales.',
      columnas: ['Medio', 'Lun a Sáb', 'Dom y festivos'],
      filas: [
        { medio: 'Metro (líneas A y B)',                     lunSab: '$3.820 con Cívica · $4.400 al portador', domFest: '$3.820 con Cívica · $4.400 al portador' },
        { medio: 'Metrocable (integrado)',                   lunSab: 'Incluido en el pasaje del Metro',        domFest: 'Incluido en el pasaje del Metro' },
        { medio: 'Metrocable turístico (línea L, Arví)',     lunSab: '$24.500',                                domFest: '$24.500' },
        { medio: 'Bus integrado (Metro + bus, Medellín)',    lunSab: '$4.715',                                 domFest: '$4.715' },
        { medio: 'Taxi (banderazo)',                         lunSab: '$5.900 · carrera mínima $8.300',         domFest: '$5.900 · carrera mínima $8.300' },
        { medio: 'Apps de transporte',                       lunSab: 'Tarifa variable',                        domFest: 'Tarifa variable' }
      ]
    }
  },

  /* ─────────────────────────────────────────────────────────────────────────
     6 · EQUIPAJE · checklist (el progreso se guarda en el navegador)
     Los "id" deben ser únicos y NO cambiarlos después: son la llave del guardado.
     ───────────────────────────────────────────────────────────────────────── */
  equipaje: {
    eyebrow: 'Qué empacar',
    tituloLinea1: 'Tu',
    tituloScript: 'equipaje',
    subtitulo: 'Toca cada elemento para marcarlo. Se guarda en este dispositivo.',
    progresoTexto: 'de',
    botonReiniciar: 'Reiniciar lista',
    completoTexto: '¡Listo! Ya tienes todo. Nos vemos en Medellín.',

    grupos: [
      {
        titulo: 'Imprescindibles',
        color: 'fucsia',
        items: [
          { id: 'doc-identidad',  texto: 'Documento de identidad' },
          { id: 'escarapela',     texto: 'Escarapela del evento' },
          { id: 'carnet-salud',   texto: 'Carnet de EPS o seguro médico' },
          { id: 'efectivo',       texto: 'Efectivo en billetes pequeños' },
          { id: 'cargador',       texto: 'Cargador y power bank' }
        ]
      },
      {
        titulo: 'Ropa',
        color: 'morado',
        items: [
          { id: 'ropa-formal',    texto: 'Camiseta capitular para la jornada académica (Día 1)' },
          { id: 'ropa-comoda',    texto: 'Camiseta blanca para el Día 2 y ropa deportiva para el Desafío (Día 3)' },
          { id: 'ropa-fiesta',    texto: 'Atuendo decembrino (noche 1) y de gala con toques florales (noche 2)' },
          { id: 'zapatos',        texto: 'Zapatos cómodos para caminar' },
          { id: 'chaqueta',       texto: 'Chaqueta o buzo (en Medellín refresca de noche)' }
        ]
      },
      {
        titulo: 'Cuidado personal',
        color: 'amarillo',
        items: [
          { id: 'aseo',           texto: 'Kit de aseo personal' },
          { id: 'bloqueador',     texto: 'Bloqueador solar' },
          { id: 'repelente',      texto: 'Repelente de insectos' },
          { id: 'medicamentos',   texto: 'Medicamentos personales con su fórmula' },
          { id: 'sombrilla',      texto: 'Sombrilla o impermeable' }
        ]
      },
      {
        titulo: 'Para la sede campestre',
        color: 'cielo',
        items: [
          { id: 'traje-bano',     texto: 'Vestido de baño y chanclas para la piscina (Día 3)' },
          { id: 'toalla',         texto: 'Toalla' },
          { id: 'botella',        texto: 'Botella de agua reutilizable' },
          { id: 'bolsa-ropa',     texto: 'Bolsa para la ropa sucia o mojada' }
        ]
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────────────────────
     7 · CÓDIGO DE VESTIMENTA
     ───────────────────────────────────────────────────────────────────────── */
  vestimenta: {
    eyebrow: 'Cómo vestirte',
    tituloLinea1: 'Código de',
    tituloScript: 'vestimenta',
    subtitulo: 'Un código por día. Si dudas, pregúntale a tu coordinación.',

    dias: [
      {
        id: 'vest-dia-1',
        tab: 'Día 1',
        color: 'fucsia',
        titulo: 'Jornada académica',
        descripcion: 'Sábado 21 en la Universidad de Antioquia. De día, camiseta capitular y cómodo para caminar el campus. 🎄 En la noche (Integración 1: Simulacro decembrino) adelantamos la Navidad: ven con colores de diciembre (rojo, verde, dorado o blanco), suéter navideño, gorro de Papá Noel, luces, escarcha o cualquier detalle de alumbrado paisa. Entre más decembrino, mejor.',
        foto: './assets/vestimenta/dia-1.jpg',
        si: [
          'Camiseta capitular',
          'Jean sin rotos o pantalón largo',
          'Zapatos cerrados y cómodos (caminarás por el campus)',
          'Chaqueta ligera para el auditorio y el viaje'
        ],
        no: [
          'Jeans rotos, shorts, bermudas o faldas cortas',
          'Chanclas, sandalias o crocs',
          'Gorras y gafas de sol dentro del auditorio'
        ]
      },
      {
        id: 'vest-dia-2',
        tab: 'Día 2',
        color: 'morado',
        titulo: 'Liderazgo estratégico',
        descripcion: 'Domingo 22 en El Yarumito. De día, camiseta blanca. 🌸 En la noche (Gala: Met Gala “Jardín de flores”) celebramos los 34 años de ANEIAP: ven de gala y hazle honor a la tierra de las flores con estampados florales, flores en el cabello o los accesorios y colores de orquídea, girasol, heliconia o agapanto. Calzado formal, pero evita tacones muy delgados (el terreno es campestre). Atrévete: es Met Gala.',
        foto: './assets/vestimenta/dia-2.jpg',
        si: [
          'Camiseta blanca',
          'Jean sin rotos o pantalón largo',
          'Zapatos cerrados',
          'Para la gala: atuendo elegante con toques florales y calzado formal'
        ],
        no: [
          'Camisetas de otro color, con estampados grandes o esqueletos',
          'Jeans rotos, shorts o bermudas',
          'Chanclas o sandalias',
          'En la gala: ropa deportiva, jean o tenis'
        ]
      },
      {
        id: 'vest-dia-3',
        tab: 'Día 3',
        color: 'amarillo',
        titulo: 'Desafío ANEIAP',
        descripcion: 'Lunes 23 en El Yarumito. Día para moverte, ensuciarte y mojarte: ropa deportiva y cómoda. Lleva vestido de baño y chanclas solo para la piscina, y algo cómodo para el viaje de regreso.',
        foto: './assets/vestimenta/dia-3.jpg',
        si: [
          'Ropa deportiva y cómoda',
          'Sudadera o licra',
          'Zapatos cerrados (tenis con buen agarre)',
          'Vestido de baño y chanclas solo para la piscina',
          'Ropa cómoda para el viaje de regreso'
        ],
        no: [
          'Jean o ropa formal (te vas a mover, ensuciar o mojar)',
          'Sandalias o chanclas durante el Desafío',
          'Ropa de calle dentro de la piscina'
        ]
      }
    ],

    tituloSi: 'Sí lleva',
    tituloNo: 'Evita'
  },

  /* ─────────────────────────────────────────────────────────────────────────
     8 · EMERGENCIAS · sección sobria, sin humor ni adornos
     ───────────────────────────────────────────────────────────────────────── */
  emergencias: {
    eyebrow: 'Si algo pasa',
    titulo: 'Emergencias',
    subtitulo: 'Mantén la calma y sigue estos pasos. Siempre hay alguien del comité disponible.',

    pasos: [
      { n: 1, titulo: 'Ponte a salvo',            texto: 'Aléjate del riesgo y busca un lugar seguro antes de hacer cualquier otra cosa.' },
      { n: 2, titulo: 'Avisa al comité',          texto: 'Llama o escribe al número de emergencias del comité organizador. Está disponible las 24 horas del evento.' },
      { n: 3, titulo: 'Da tu ubicación exacta',   texto: 'Di en qué sede estás, en qué zona y con quién. Si puedes, comparte tu ubicación por WhatsApp.' },
      { n: 4, titulo: 'No te muevas solo',        texto: 'Espera acompañado hasta que llegue alguien del comité o el personal de salud.' }
    ],

    contactos: [
      {
        tipo: 'comite',
        titulo: 'Comité de emergencias',
        detalle: 'Ana Isabel Angarita · Logística Interna. Disponible 24 horas durante el evento.',
        telefono: '+57 322 527 0106',
        tel: '+573225270106',
        boton: 'Llamar al comité'
      },
      {
        tipo: 'salud',
        titulo: 'Primeros auxilios · 123',
        detalle: 'Línea única de emergencias en Colombia: ambulancia, policía y bomberos.',
        telefono: '123',
        tel: '123',
        boton: 'Llamar al 123'
      },
      {
        tipo: 'clinica',
        titulo: 'Clínica de referencia · Día 1',
        detalle: 'Hospital Alma Máter de Antioquia (sede principal) · Calle 69 #51C-24, Medellín. Línea institucional 24/7 (UdeA): (604) 219 8444. Citas: (604) 322 3633, opción 1.',
        telefono: '(604) 219 8444',
        tel: '+576042198444',
        boton: 'Llamar al hospital'
      },
      {
        tipo: 'clinica',
        titulo: 'Clínica de referencia · Días 2 y 3',
        detalle: 'ESE Hospital San Vicente de Paúl · Barbosa, cerca de El Yarumito.',
        telefono: '(604) 520 2430',
        tel: '+576045202430',
        boton: 'Ver en el mapa',
        mapa: 'https://maps.app.goo.gl/MrQapUKLnmFiXrrt7'
      }
    ],

    sos: {
      titulo: '¿Necesitas ayuda ahora?',
      texto: 'Este botón marca directamente al comité de emergencias.',
      boton: 'SOS · Llamar ahora'
    }
  },

  /* ─────────────────────────────────────────────────────────────────────────
     9 · MULTAS SIMBÓLICAS
     ───────────────────────────────────────────────────────────────────────── */
  multas: {
    eyebrow: 'Las reglas del juego',
    tituloLinea1: 'Multas',
    tituloScript: 'simbólicas',
    subtitulo: 'Son simbólicas y en buena onda: lo recaudado se destina a la actividad de cierre.',

    lista: [
      { concepto: 'Minuto tardío',                                                                  valor: '$700/min' },
      { concepto: 'No acreditación y reclamación extemporánea de kit de bienvenida el primer día del evento', valor: '$1.000/min' },
      { concepto: 'Inasistencia injustificada a visita industrial',                                   valor: '$40.000' },
      { concepto: 'Inasistencia injustificada a espacio/actividad',                                   valor: '$55.000' },
      { concepto: 'Hacer uso de las zonas alternas fuera de los horarios permitidos',                 valor: '$165.000' },
      { concepto: 'Estar fuera de las instalaciones después del horario permitido',                   valor: '$175.000' },
      { concepto: 'Incumplir el código de vestimenta',                                                valor: '$60.000' }
    ],

    nota: {
      titulo: 'Las otras normas no son simbólicas',
      texto: 'El respeto, el cuidado de las sedes y el consumo responsable no se negocian. El comité puede retirar del evento a quien ponga en riesgo a otra persona, y eso sí no tiene multa: tiene consecuencias.'
    }
  },

  /* ─────────────────────────────────────────────────────────────────────────
     10 · CONTACTOS DEL COMITÉ
     ───────────────────────────────────────────────────────────────────────── */
  contactos: {
    eyebrow: 'Quién te ayuda',
    tituloLinea1: 'Contactos del',
    tituloScript: 'comité',
    subtitulo: 'Guarda estos números antes del primer día.',

    lista: [
      { nombre: 'María Isabel Cañas Duque',      rol: 'Coordinadora General',             telefono: '+57 302 406 4959', tel: '+573024064959', foto: './assets/comite/contacto-1.jpg', color: 'fucsia' },
      { nombre: 'Paola Andrea Garcés',  rol: 'Coordinadora General',             telefono: '+57 301 510 9001', tel: '+573015109001', foto: './assets/comite/contacto-2.jpg', color: 'morado' },
      { nombre: 'Susana Roldán Restrepo',         rol: 'Coordinadora Académico',           telefono: '+57 300 614 8677', tel: '+573006148677', foto: './assets/comite/contacto-3.jpg', color: 'amarillo' },
      { nombre: 'María Antonia Bolívar Sierra',   rol: 'Coordinadora Publicidad',          telefono: '+57 314 718 9965', tel: '+573147189965', foto: './assets/comite/contacto-4.jpg', color: 'azul' },
      { nombre: 'Ana Isabel Angarita Escobar',    rol: 'Coordinadora Logística Interna',   telefono: '+57 322 527 0106', tel: '+573225270106', foto: './assets/comite/contacto-5.jpg', color: 'naranja' },
      { nombre: 'Andrés García Arboleda',         rol: 'Coordinador Logística Externa',    telefono: '+57 301 717 6882', tel: '+573017176882', foto: './assets/comite/contacto-6.jpg', color: 'verde' },
      { nombre: 'Juliana Agudelo Cuervo',         rol: 'Coordinadora Finanzas',            telefono: '+57 315 633 4193', tel: '+573156334193', foto: './assets/comite/contacto-7.jpg', color: 'cielo' },
      { nombre: 'Santiago Gómez Berrio',          rol: 'Coordinador Mercadeo',             telefono: '+57 300 454 9923', tel: '+573004549923', foto: './assets/comite/contacto-8.jpg', color: 'fucsia' }
    ],

    whatsapp: {
      titulo: '¿Prefieres escribir?',
      texto: 'Escríbele al comité por WhatsApp y te responden lo antes posible.',
      boton: 'Escribir por WhatsApp'
    }
  },

  /* ─────────────────────────────────────────────────────────────────────────
     11 · FAQ
     ───────────────────────────────────────────────────────────────────────── */
  faq: {
    eyebrow: 'Preguntas frecuentes',
    tituloLinea1: 'Resolvamos',
    tituloScript: 'dudas',
    subtitulo: 'Lo que más nos preguntan antes de cada CONAL.',
    foto: './assets/fotos/faq.jpg',

    items: [
      { p: '¿Qué incluye la inscripción al CONAL 2026?',          r: 'Hospedaje por dos noches en el Centro Recreacional El Yarumito (Barbosa), 6 comidas principales y 5 refrigerios, transporte de ida y regreso entre Medellín y Barbosa, kit de bienvenida con un recordatorio paisa, zona de hidratación y acceso a todas las zonas del lugar de hospedaje. El almuerzo del sábado 21 es libre. El corte Hortensia (externos) incluye solo la jornada académica del Día 1, con kit y 1 refrigerio de ese día.' },
      { p: '¿A qué hora debo llegar el primer día?',               r: 'A las 7:00 a. m. del sábado 21 de noviembre al Auditorio Álvaro de Jesús Pérez Roldán, en la Universidad de Antioquia, para la acreditación y la entrega de kits. Ten a mano tu código QR y tu documento de identidad.' },
      { p: '¿Puedo llegar directamente a la sede campestre?',      r: 'No. Todos los asistentes salen juntos desde la Universidad de Antioquia en el transporte oficial, el sábado a las 5:40 p. m. Si tienes un caso especial, consúltalo antes del evento con Logística Externa.' },
      { p: '¿Hay alojamiento incluido?',                           r: 'Sí. Te alojas las noches del 21 y el 22 de noviembre en El Yarumito, en cabañas con nombres de flores. Quienes compraron el corte Boca de dragón se alojan en la zona de carpas. La asignación se confirma días antes del evento. Lleva toalla y tus artículos de aseo.' },
      { p: 'Tengo una restricción alimentaria, ¿qué hago?',        r: 'Indícala en el formulario de inscripción y escríbele a Logística Interna antes del evento para coordinarlo con la sede: Ana Isabel Angarita, 322 527 0106.' },
      { p: '¿Qué pasa si pierdo mi escarapela?',                   r: 'Repórtalo de inmediato a cualquier integrante del comité o del staff. La escarapela es necesaria para acreditarte en cada jornada, así que el comité te ayudará a reponerla o a validar tu identidad con tu documento.' },
      { p: '¿Puedo invitar a alguien que no esté inscrito?',       r: 'No. El hospedaje y las actividades de los días 2 y 3 son de uso exclusivo para los ANEIAPos y delegados inscritos. En el Día 1, las personas externas solo pueden asistir con el corte Hortensia.' },
      { p: '¿Hay wifi en las sedes?',                              r: 'Sí. El Yarumito tiene wifi en las habitaciones, las zonas comunes y el salón múltiple. Lleva tu cargador y, si puedes, una batería externa.' },
      { p: '¿Cómo me devuelvo el último día?',                     r: 'En el transporte oficial. El lunes 23 los buses salen de El Yarumito a las 6:00 p. m. y llegan a Medellín hacia las 8:00 p. m. Si tienes vuelo o bus de regreso ese día, cómpralo para después de las 9:00 p. m. o para el martes.' },
      { p: '¿A quién le escribo si algo no me queda claro?',       r: 'Puedes contactar directamente a las coordinadoras generales: María Isabel Cañas, 302 406 4959; Paola Garcés, 301 510 9001. Todos los contactos del comité están en la sección de Contactos.' }
    ]
  },

  /* ─────────────────────────────────────────────────────────────────────────
     PLAYLIST · dock flotante
     Pega aquí la URL del embed de Spotify (Compartir → Insertar → copiar el src).
     Mientras esté vacío, se ve un recuadro con instrucciones.
     ───────────────────────────────────────────────────────────────────────── */
  playlist: {
    titulo: 'Playlist oficial',
    embedUrl: 'https://open.spotify.com/embed/playlist/4O153fMjWRr5GwLyxUwF1A',
    vacio: 'La playlist oficial estará disponible muy pronto.'
  },

  /* ─────────────────────────────────────────────────────────────────────────
     CIERRE Y PIE DE PÁGINA
     ───────────────────────────────────────────────────────────────────────── */
  cierre: {
    tituloLinea1: 'Gracias por vivir el',
    tituloDestacado: 'CONAL 2026',
    texto1: 'Medellín te espera con sus flores, sus montañas y su gente.',
    texto2: 'Guarda estos recuerdos y comparte la experiencia.',
    botones: {
      whatsapp: 'WhatsApp',
      contactos: 'Contactos',
      sedes: 'Sedes'
    }
  },

  footer: {
    nombre: 'CONAL Medellín 2026',
    lema: 'Sembrando ideas, cosechando impacto',
    texto: '¿Dudas o preguntas? Escríbenos por WhatsApp o llámanos, estaremos pendientes de ti.',
    credito: 'Guía del Asistente · Comité Organizador CONAL 2026',
    instagram: 'https://www.instagram.com/conalaneiap/',
    instagramLabel: '@conalaneiap'
  },

  /* ─────────────────────────────────────────────────────────────────────────
     TEXTOS DE INTERFAZ
     ───────────────────────────────────────────────────────────────────────── */
  ui: {
    menu: 'Menú',
    cerrar: 'Cerrar',
    sos: 'SOS',
    secciones: 'Secciones',
    dias: 'días', horas: 'horas', minutos: 'min', segundos: 'seg'
  }
};
