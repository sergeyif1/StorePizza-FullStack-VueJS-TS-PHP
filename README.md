<h1 align="center">Hi there, I'm Sergey!
            <img src="./imges/Hi.gif" height="32" alt="Hi" />
        </h1>
<h3 align="center">This is an application for my portfolio</h3> 
<h3 align="center">👀 What is this and what is it for?</h3>

<p>This is an attempt to structure the project's space using technologies that are new to me.</p>

<br>[🌐 Project Deployment](https://storepizza-fullstack-vuejs.vercel.app/)

<br><p>For now, the project isn't being maintained and developed due to objective circumstances</p>
<br><p>Here's what I used</p>

---

### 1. **Project Structure**
The project follows a typical Vue application structure using Vite. Key directories and files include:
- **`.vscode/`** — VS Code editor configuration.
- **`dist/`** — build output files (ignored in the repository).
- **`node_modules/`** — dependencies installed via npm.
- **`public/`** — static files copied as-is into the final build.
- **`src/`** — main application code:
  - **`assets/`** — contains styles and media files. For example, `index.css` holds global styles.
  - **`components/`** — Vue components:
    - **`ui/button/`** — `Button` component (a UI element likely styled with TailwindCSS).
    - **`HelloWorld.vue`** — a test or demo component.
  - **`lib/`** — may contain helper modules or libraries (e.g., `utils.ts` for utility functions).
  - **`App.vue`** — root Vue component.
  - **`main.ts`** — entry point where the app is created and mounted.
- **`tailwind.config.js`** —  TailwindCSS configuration (for customization if needed).
- **`vite.config.ts`** — Vite configuration file.
- **`package.json`** — lists dependencies and npm scripts.

---

### 2. **Configuration**
#### Vite (in vite.config.ts)::
- **Vue plugin**: `@vitejs/plugin-vue` enables handling `.vue` files.
- **PostCSS**: configured to use `tailwindcss` and `autoprefixer`.
- **Alias `@`**: points to the `src`, folder to simplify imports (e.g., `@/components/ui/button`).
  
#### Dependencies (in`package.json`):
- **Production dependencies**:
  - **Vue 3**: framework for building user interfaces.
  - **TailwindCSS**: utility-first CSS framework for styling.
  - **TailwindCSS-plugins**: e.g., `tailwindcss-animate` for animations.
  - **Lucide Vue**: icon set.
  - **Radix Vue**: UI component primitives.
- **Dev dependencies**:
  - **Vite**: bundler and dev server.
  - **TypeScript**: used for type checking.
  - **Vue TSC**: type-checking tool for Vue components.
  - **PostCSS** && **Autoprefixer**: CSS processing tools.

#### Build and scripts:
- **`dev`**: runs Vite dev server.
- **`build`**: performs type checking and builds the project.
- **`preview`**:previews the built project.
---

### 3. **Functionality**
Main application:
- **`App.vue`**: 
  - Imports the `Button` component from UI components.
  - Template renders `<Button>` with the text “Button”.
- **`main.ts`**:
  - Creates the Vue app based on `App.vue` and mounts it to the DOM element with `id="app"`.

#### Possible features:
1. **UI Components**:
   - `Button` imported from `@/components/ui/button`. is likely a reusable, TailwindCSS-styled component.
   - UI components may provide customizable, styled elements.

2. **Global styles**:
   - `./assets/index.css` includes TailwindCSS styles and possibly additional custom styles.

3. **TypeScript support**:
   - The project is set up for strict typing, improving code readability and reliability.

4. **TailwindCSS**:
   - TailwindCSS Used for styling and adding animations via the `tailwindcss-animate` plugin.

5. **Vite**:
   - Provides fast development with hot module replacement, making it easy to modify and debug the project.

---
        
<h3 align="center">Support</h3>
        <p><strong>Е-Mail:</strong> <a href="mailto:sergeyif1@gmail.com" class="link">sergeyif1@gmail.com</a></p>