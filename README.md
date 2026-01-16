# DevGenius

**Manga Creator AI** es una aplicación web que te permite generar tus propios mangas en un instante. Puedes elegir el genero que desees y tu decidiras que hacer el personaje y que pasa en la historia. La IA seguirá creando el manga contigo.

![Vista previa del proyecto](/public/home-web.png)
![Vista previa del proyecto](/public/main-web.png)

---

## 🚀 Cómo iniciar el proyecto

1. Clona el repositorio:

   ```bash
   https://github.com/Fenix-Quiroz/DevGenius.git
   ```

2. En la terminal ejecuta :

```bash
  npm install
```

y después

```bash
npm run dev
```

## 🧰 Tecnologías utilizadas

1. **Gemini API** – Utilizada para integrar inteligencia artificial en la aplicación.
2. **React** – Librería para construir interfaces de usuario.
3. **Vite** – Herramienta de desarrollo y empaquetado rápida para proyectos modernos.
4. **AIsdk de Vercel** – SDK para integrar inteligencia artificial en la aplicación.
5. **Tailwind CSS** – Heramienta para estilizar mas rápido y fácil.
6. **React-Toastify** – Librería para mostrar notificaciones de manera fácil.
7. **React-Syntax-Highlighter** – Librería para resaltar la sintaxis de fragmentos de código.
9. **ai-sdk.dev/elements** – AI Elements es una biblioteca de componentes y un registro personalizado basado en shadcn/ui para ayudarte a crear aplicaciones nativas de IA más rápido. Ofrece componentes prediseñados como conversaciones, mensajes y más..

### 🔑 Configuración de la API de Gemini

Para usar la inteligencia artificial de Gemini, asegúrate de tener una API Key válida. Puedes obtenerla desde [Google AI Studio](https://aistudio.google.com/app/apikey).

Una vez obtenida, crea un archivo `.env` en la raíz del proyecto y añade:

```env
GOOGLE_GENERATIVE_AI_API_KEY=tu_clave_aquí
```
