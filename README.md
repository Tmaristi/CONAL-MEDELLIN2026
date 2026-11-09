# Guía del Asistente · CONAL 2026

Guía web para los asistentes del **CONAL 2026 – El Camino del Silletero**, la
convención de ANEIAP en **Medellín** los días **21, 22 y 23 de noviembre de 2026**.
Lema del evento: *"Sembrando ideas, cosechando impacto"*.

Es una página web de una sola pantalla, pensada para el celular, donde cada
asistente encuentra todo lo que necesita para vivir el evento: cuenta regresiva,
cronograma, sedes, planes, transporte, qué empacar, cómo vestirse, emergencias,
multas, contactos y preguntas frecuentes.

🔗 **En línea:** https://tmaristi.github.io/CONAL-MEDELLIN2026/

---

## Qué incluye la guía

| Sección | Contenido |
|---|---|
| **Inicio** | Portada con cuenta regresiva al evento y accesos rápidos a cada día. |
| **Cronograma** | Agenda de los 3 días (Saber · Ser · Hacer), hora por hora. |
| **Sedes** | Dónde ocurre cada jornada y cómo llegar. |
| **Planes** | Los 8 planes externos opcionales (antes y después del evento). |
| **Transporte** | Punto de encuentro, horarios y tarifas del transporte público. |
| **Equipaje** | Checklist de qué empacar (guarda el progreso en el celular). |
| **Vestimenta** | Código de vestuario por día, incluidas las noches temáticas. |
| **Emergencias** | Qué hacer, a quién llamar y clínicas de referencia. |
| **Multas** | Las multas simbólicas del evento y su valor. |
| **Contactos** | Los 8 coordinadores del comité con su teléfono. |
| **FAQ** | Las preguntas que más se repiten antes de cada CONAL. |

---

## Cómo editar el contenido

**Todo el texto vive en un solo archivo: `content.js`.** No necesitas tocar
`app.js` ni `index.html` para cambiar textos, horarios, precios o contactos.

Abre `content.js`, busca la sección que quieras cambiar y edita el texto entre
comillas. Por ejemplo, para cambiar una actividad del cronograma:

```js
{ inicio: '08:00', fin: '08:30', actividad: 'Palabras de bienvenida', tipo: 'ceremonia' },
```

⚠️ En el checklist de equipaje, **no cambies los `id`**: son la llave con la que
se guarda el progreso en el navegador de cada asistente.

### Agregar fotos

Mientras una foto no exista, se ve un recuadro de color (o, en los contactos, las
iniciales del nombre). Suelta el archivo con **el nombre exacto** que espera la
guía dentro de la carpeta `assets/` correspondiente y aparece solo, sin tocar
código. La lista completa de archivos está en `assets/LEEME.txt`.

Hoy solo faltan las **fotos del comité** (`assets/comite/contacto-1.jpg` …
`contacto-8.jpg`). Mientras no estén, cada contacto muestra sus iniciales.

### Cambiar la playlist de Spotify

En Spotify: **Compartir → Insertar playlist**, copia la URL del embed (la que
contiene `/embed/`) y pégala en `content.js` → `playlist.embedUrl`.

---

## Ver la guía en tu computador

Desde esta carpeta:

```bash
python -m http.server 8000
```

y abre `http://localhost:8000`. Para detenerlo, `Ctrl + C`.

> Conviene verla así (con un servidor local) y no abriendo `index.html` con doble
> clic, porque algunas cosas —como la playlist de Spotify— solo funcionan servidas
> por HTTP.

---

## Publicar los cambios

El sitio se publica solo con **GitHub Pages**: cada vez que subes cambios a la
rama `main`, la página en línea se actualiza en uno o dos minutos.

```bash
git add .
git commit -m "Describe el cambio (ej: actualizo cronograma del día 1)"
git push
```

Luego espera ~1-2 minutos y recarga la página en línea (si no ves el cambio, haz
un refresco forzado con `Ctrl + Shift + R`, por la caché del navegador).

---

## Estructura del proyecto

```
index.html      Estructura base + sprite SVG (íconos, skyline, flores, nubes, ondas)
styles.css      Estilos: variables de marca en :root + componentes
app.js          Arma la página a partir de content.js (no se edita para cambiar textos)
content.js   ←  TODO el contenido editable de la guía
assets/         Logos, fotos y decoraciones
.nojekyll       Necesario para GitHub Pages
CLAUDE.md       Contexto técnico y de marca (para desarrolladores y agentes de IA)
```

Es **HTML + CSS + JavaScript vanilla**: sin framework y sin paso de build. Todas
las rutas son relativas, así que funciona dentro de `/CONAL-MEDELLIN2026/` en
GitHub Pages sin configurar nada.

> La carpeta `referencias/` está en `.gitignore`: contiene material de trabajo
> (documentos y fotos originales en alta resolución) que no debe publicarse.

Si vas a trabajar el código a fondo, el detalle técnico completo —paleta exacta,
tipografías, lenguaje visual y reglas de implementación— está en **`CLAUDE.md`**.

---

## Licencia

El **código** de este proyecto (HTML, CSS y JavaScript) se publica bajo la
licencia **MIT** (ver el archivo [`LICENSE`](LICENSE)). Puedes reutilizarlo y
adaptarlo —por ejemplo, para la guía de otro capítulo— conservando el aviso de
copyright.

La licencia MIT cubre **solo el código**. No incluye los activos de marca del
evento (el logo de CONAL, el lema, las decoraciones, los colores y la identidad
visual de ANEIAP) ni las fotografías de las personas: esos materiales son
propiedad de sus titulares y no se licencian para reutilización.
