# CONAL 2026 · Guía del Asistente — Contexto técnico

Contexto para agentes de IA y desarrolladores que retomen el proyecto. Describe
el estado **final** de la guía (proyecto completo y publicado), su arquitectura,
las reglas técnicas y la identidad de marca.

## Qué es este proyecto

Guía web del asistente para **CONAL 2026 – El Camino del Silletero · Medellín**,
la convención de ANEIAP.
- Lema: **"Sembrando ideas, cosechando impacto"**.
- Fechas: **21, 22 y 23 de noviembre de 2026** (zona horaria `America/Bogota`, UTC-05:00).
- Idioma: español de Colombia, trato de "tú".
- Formato: guía **mobile-first**, de una sola página con navegación por anclas.
- Publicada en GitHub Pages: `https://tmaristi.github.io/CONAL-MEDELLIN2026/`.

Todo el contenido vive en un único archivo, `content.js`, como objeto
`window.CONTENT`. El contenido ya es **real y completo** (cronograma, planes,
sedes, transporte, vestimenta, emergencias, multas, contactos, FAQ). Lo único
pendiente son las 8 fotos del comité (ver más abajo).

## Stack y reglas técnicas

- **HTML + CSS + JavaScript vanilla.** Sin framework y sin paso de build.
- Se publica en **GitHub Pages**. Usa SOLO rutas relativas (`./assets/...`),
  porque el sitio vive en `/CONAL-MEDELLIN2026/`.
- Incluye un archivo `.nojekyll` en la raíz (evita el procesamiento Jekyll).
- Todo el contenido editable vive en `content.js` como `window.CONTENT = {...}`.
  No uses `fetch` de JSON ni módulos ES: `content.js` y `app.js` se cargan con
  `<script>` clásicos (en ese orden) para que `index.html` también abra con doble
  clic si hiciera falta.
- Accesibilidad: contraste suficiente, `alt` en imágenes, foco visible, respeta
  `prefers-reduced-motion`.
- Rendimiento: imágenes optimizadas (recortadas al ratio de su contenedor y
  comprimidas) y con `loading="lazy"`; animaciones ligeras (transform/opacity).
- Probar a 375 px de ancho primero, luego tablet y escritorio.
- `localStorage` se usa para el progreso del checklist de equipaje
  (clave `conal2026:equipaje`). El modal de bienvenida se muestra **siempre** al
  entrar (no guarda marca de "ya visto").

## Arquitectura de archivos

```
index.html   Estructura base + sprite SVG inline (íconos, skyline, flores, nubes, ondas).
             Contiene el <link rel="icon"> al favicon y carga content.js y luego app.js.
styles.css   Todos los estilos. La marca vive en variables de :root (ver abajo).
app.js       Lógica. Lee window.CONTENT y construye el DOM de cada sección con
             funciones render*(). No se edita para cambiar textos.
content.js   Único archivo de contenido editable. Objeto window.CONTENT.
assets/      logos/ (logo-conal.jpeg, texto-conal.jpeg, favicon.png, deco-01..09),
             fotos/, sedes/, vestimenta/, comite/ (pendiente).
.nojekyll    Necesario para GitHub Pages.
referencias/ Material de trabajo (originales en alta, documentos fuente). En .gitignore.
```

Cómo funciona el render: `app.js` tiene una función `render<Seccion>()` por cada
sección que lee su rama de `window.CONTENT` y escribe el HTML. Las listas
(planes, contactos, FAQ, cronograma, etc.) se generan con `.map()`, así que
agregar o quitar elementos se hace **solo en `content.js`**, sin tocar `app.js`.

### Helper de imágenes y fallback

`media(src, opts)` genera un contenedor `.media` con la imagen. `wireMedia()`
le añade la clase `is-missing` si el archivo no existe, mostrando un placeholder
de color. Para soltar un asset nuevo basta con ponerlo en la ruta exacta que
espera `content.js`; aparece solo. En los contactos, el fallback son las
**iniciales** del nombre (generadas en `renderContactos`), no un recuadro.

### Inspiración de outfits (botón a Pinterest)

El Día 1 y el Día 2 (`vestimenta.dias[]`) y el **Pre-evento** (entrada
`pre-evento` de `planes.lista`, el plan `destacado`) tienen un campo
`inspiracion: { url }` que pinta un botón "Ver inspiración en Pinterest" (abre en
pestaña nueva). Lo genera el helper `inspoCard(insp, color, labelBoton)` de
`app.js`, usado en `renderVestimenta()` y en el banner de `renderPlanes()`; si un
día no trae `inspiracion` (p. ej. el Día 3), no pinta nada. El texto del botón
vive en `vestimenta.inspoBoton`. Para cambiar un link, edita solo `content.js` →
`inspiracion.url`.

## Marca

Todo el color y la tipografía salen de variables en `:root` (en `styles.css`).
Cámbialas ahí en un solo lugar. Estos son los valores **reales** en uso:

### Paleta (valores exactos de styles.css)

| Token | HEX | Uso |
|---|---|---|
| `--fucsia` | `#E1187D` | Color principal: bloques, botones, la "C" del logo |
| `--orquidea` | `#B5126F` | Fucsia oscuro: hover, sombras, orquídea |
| `--morado-profundo` | `#3A0F6E` | Titulares y texto fuerte sobre fondo claro |
| `--morado` | `#7326C3` | Acento secundario, la "N" del logo |
| `--amarillo` | `#FFC21A` | Acentos, subrayados de pincel, bloques (la "A") |
| `--azul` | `#2E64D9` | Acento (la "L"), enlaces |
| `--azul-aneiap` | `#1B5FB4` | Reservado para contexto ANEIAP |
| `--naranja` | `#ED5125` | Acentos cálidos (ave del paraíso) |
| `--verde` | `#128D45` | Hojas, estados OK |
| `--lima` | `#8CC63F` | Detalle verde claro |
| `--cielo` | `#A8DDF7` | Fondos de bloques suaves |
| `--blanco` | `#FFFFFF` | Fondo base |
| `--tinta` | `#1A1A1A` | Líneas del skyline y texto de cuerpo |

Derivados: `--cielo-suave #E8F6FE`, `--crema #FFF9EC`, `--gris #5C5566`,
`--gris-claro #EFECF3`, `--rojo #D92B2B` (emergencias).

Reglas de color:
- Fondo base blanco, con bloques fucsia, amarillo, morado y cielo para separar secciones.
- Titulares en `--morado-profundo`, con una palabra clave en script y en `--fucsia`.
- El amarillo NO va como texto sobre blanco (sin contraste): úsalo en rellenos y
  subrayados, o con texto en `--morado-profundo`. Lo mismo aplica al cielo.
- Las 4 letras del logo rotan como colores de día: Día 1 fucsia, Día 2 morado, Día 3 amarillo.

### Tipografía (Google Fonts)

- `--font-display`: **Baloo 2** (peso 800) — títulos, estilo de las letras del logo.
- `--font-script`: **Kaushan Script** — palabra destacada tipo pincel.
- `--font-body`: **Nunito** (400/600/700) — cuerpo.

### Forma y lenguaje visual

- Esquinas muy redondeadas (`--r-md 20px`, `--r-lg 28px`, `--r-xl 36px`, botones píldora).
- Ondas orgánicas, nubes de contorno, garabatos tipo confeti alrededor de los
  títulos, subrayado de pincel amarillo, skyline de Medellín en línea negra y
  borde botánico — todo como SVG inline en `index.html` o como decoraciones PNG
  (`assets/logos/deco-01..09`).
- Los títulos de sección se adornan con las decoraciones de `content.js` →
  `meta.decoraciones` (`decorarTitulos()` en app.js), evitando poner una
  decoración del mismo color que el fondo de la sección.

### Voz y tono

Festivo, cercano y juvenil, con color paisa/antioqueño ("silletero", el lema del
evento). Frases cortas, imperativos amables ("Toca cada elemento para marcarlo").
Sin tono corporativo frío. **Excepción:** la sección de Emergencias es sobria,
sin humor ni adornos.

### Logos y assets de marca

- `logo-conal.jpeg` — palabra CONAL con la orquídea en la "O".
- `texto-conal.jpeg` — el lema "Sembrando ideas, cosechando impacto".
- `favicon.png` — la orquídea del logo recortada en círculo (fondo transparente).
- `deco-01..09` — decoraciones PNG transparentes de los títulos.
- No recrees ni modifiques los logos: se usan tal cual.

## Secciones del sitio

Inicio (cuenta regresiva + accesos rápidos) · Cronograma · Sedes · Planes ·
Transporte · Equipaje · Vestimenta · Emergencias · Multas · Contactos · FAQ.
El orden del menú lo define `content.js` → `nav`.

## Estado y pendientes

- Contenido: **completo**, sin placeholders visibles. El token `[PLACEHOLDER]`
  solo sigue existiendo como mecanismo interno (constante `PH_TOKEN` en app.js y
  su estilo en styles.css), para marcar futuros datos pendientes si hiciera falta.
- Assets presentes: logo, lema, favicon, 9 decoraciones, fotos de bienvenida,
  comunidad, cronograma, faq, 2 sedes y 3 de vestimenta (todas optimizadas).
- **Pendiente:** las 8 fotos del comité (`assets/comite/contacto-1.jpg` …
  `contacto-8.jpg`). Mientras no estén, cada contacto muestra sus iniciales.
- Decisiones tomadas: se eliminó el PDF descargable y sus botones; se quitó el
  logo de ANEIAP del pie (solo queda el de CONAL, centrado); se eliminó el dato
  `sello` por no usarse; el modal de bienvenida aparece en cada visita.

## Cómo trabajar

1. Lee este archivo antes de proponer cambios. Si vas a tocar una sección, lee
   también su rama en `content.js` y su `render*()` en `app.js`.
2. Para cambios de contenido, edita solo `content.js`.
3. No inventes datos reales (precios, horarios, direcciones, teléfonos): usa como
   fuente los documentos en `referencias/` o pregunta.
4. Al optimizar imágenes, recórtalas al ratio del contenedor donde se muestran
   (lo define `styles.css`) y comprímelas; respalda el original en `referencias/`.
5. Verifica tras cada cambio: `node --check` en los JS y sirve con
   `python -m http.server` para revisar en el navegador.
6. Los commits y el `git push` los hace la persona dueña del repo.
