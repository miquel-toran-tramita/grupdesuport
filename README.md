# 👨‍🚀 ASTRO BEDROCK 🪐

Todo lo necesario para llevar a cabo un proyecto web de forma modular

### ⚙️ Tareas:

1.  Dominio canónico configurado en `astro.config.mjs` (`https://grupdesuport.com`).
2.  Decidir si va a ser **Static Site or SSR**, en el caso de ser SSR añadir el adaptador de cloudflare: https://docs.astro.build/es/guides/integrations-guide/cloudflare/
3.  Determinar los colores en variables.scss
4.  ` npm run update 	`
5.  Layout.astro: Cambiar las fuentes (default: Poppins) & defaults.scss cambiar la font-family
6.  Añadir logo a public/assets/favicon.svg

### Dominio en Vercel

Antes de desplegar esta configuración, en los ajustes de dominios del proyecto en Vercel hay que hacer que `grupdesuport.com` sirva el sitio sin redirección y que `www.grupdesuport.com` redirija de forma permanente (301 o 308) a `grupdesuport.com`, conservando las rutas. No deben existir redirecciones en sentido contrario, ya que producirían un bucle. Tras desplegar, comprobar ambos dominios y enviar `https://grupdesuport.com/sitemap-index.xml` a Search Console.

### 🧩 Plugins

#### 🗂️ Astro DB

https://docs.astro.build/en/guides/astro-db/

Installation git merge plugin-astro-db && npm i

#### 🪪 Auth

Installation git merge plugin-auth && npm i

Example to filter access:

const user = Astro.locals.user;
if (!user) return Astro.redirect("/login");

#### 📖 Blog

In progress...

#### 💲E-Commerce

In progress...

## 🖇️ Bibliografía:

- Emojis: https://es.piliapp.com/emoji/list/
- Glassmorphism 1: https://css.glass/
- Glassmorphism 2:https://ui.glass/generator/
- Neumorphism: https://neumorphism.io/#e0e0e0
