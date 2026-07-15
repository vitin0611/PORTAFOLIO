# Portafolio — Seguridad Informática

Sitio web de portafolio personal con temática de terminal/pentester.

## Estructura del proyecto

```
portfolio/
├── index.html        # Estructura y contenido del sitio
├── css/
│   └── styles.css    # Todos los estilos
├── js/
│   └── script.js     # Animación de terminal + lógica del formulario
├── assets/            # Coloca aquí tu foto, CV en PDF, etc.
└── README.md
```

## Cómo verlo localmente

Solo abre `index.html` en tu navegador (doble clic), o usa un servidor local:

```bash
# con Python
python3 -m http.server 8000
# luego visita http://localhost:8000
```

## Cómo personalizarlo

- **Nombre y rol:** edita el arreglo `heroLines` al inicio de `js/script.js`.
- **Sección "Sobre mí":** edita los párrafos y la tabla de habilidades en `index.html` (sección `id="about"`).
- **Proyectos:** cada proyecto es un bloque `<div class="finding">` en la sección `id="projects"`. Copia uno para añadir más.
- **Certificaciones:** cada fila `<div class="cert-row">` en la sección `id="certs"`. Actualiza los `href="#"` con los enlaces reales a tus credenciales.
- **Contacto:** actualiza el correo, LinkedIn y GitHub en la sección `id="contact"`.
- **CV en PDF:** coloca tu CV en `assets/` y enlázalo desde el botón "Descargar CV" en `index.html`.
- **Colores:** todos los colores están centralizados como variables CSS al inicio de `css/styles.css` (bloque `:root`).

## Publicarlo gratis (GitHub Pages)

1. Sube esta carpeta a un repositorio en GitHub.
2. Ve a **Settings → Pages**.
3. En "Branch", selecciona `main` y la carpeta `/root`.
4. Guarda. Tu sitio quedará en `https://tu-usuario.github.io/nombre-del-repo/`.

## Conectar el formulario de contacto

El formulario actual solo muestra una alerta. Para recibir mensajes reales sin backend, puedes usar:
- [Formspree](https://formspree.io) (gratis, solo necesitas cambiar el `<form>` y el `action`)
- [EmailJS](https://www.emailjs.com) (envía correos directo desde JavaScript)
