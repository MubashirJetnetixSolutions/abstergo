# Abstergo Technology — complete Next.js source

This is the full current website, including all latest Loomic changes. Use this complete project in a fresh folder. It replaces the earlier Vinext/Cloudflare export and the small patch ZIPs.

## Requirements

- Node.js 22.x (verified with Node.js 22.23.3)
- npm

All application code is JavaScript/JSX. There are no TypeScript files or required Cloudflare, Vinext, Wrangler, Bash or pnpm scripts.

## Run locally

Open a terminal in the folder containing this README and `package.json`:

```bash
npm ci --include=dev
npm run dev
```

Open http://localhost:3000 and http://localhost:3000/loomic.

For a production build:

```bash
npm run build
npm start
```

Stop the dev server before starting the production server on the same port. When changing source, rebuild before using `npm start`.

## Deploy on Vercel

Push the contents of this folder to your GitHub repository and import it into Vercel.

| Setting | Value |
| --- | --- |
| Framework Preset | Next.js |
| Root Directory | The folder containing `package.json` |
| Node.js Version | 22.x |
| Install Command | `npm ci --include=dev` |
| Build Command | `npm run build` |
| Output Directory | Default Next.js output (`.next`); leave the override off |

`vercel.json` supplies the framework, install and build settings. `package-lock.json` pins the dependency tree. If reusing an existing Vercel project, clear old Vinext/Vite/Cloudflare command overrides and any `dist` or `dist/client` Output Directory override. If this folder sits inside another repository folder, select this folder as the Vercel Root Directory.

No environment variables are needed for the current frontend. Do not upload `node_modules`, `.next` or local `.env` files; Vercel installs and builds the source.

Official setup references:
- https://vercel.com/docs/frameworks/full-stack/nextjs
- https://vercel.com/docs/builds/configure-a-build
- https://nextjs.org/docs/app/getting-started/deploying

## Included updates

- Full multi-page Abstergo website, catalog, product routes, cart and request pages.
- Loomic Jet Black / Graphite / Steel Gray / Silver / Cool Light Gray / Pearl White palette.
- Voltis Power Ultra first, with best-seller presentation and additional imagery.
- Voltis Power Pro second, with transparent product views and no gallery card backgrounds.
- Scroll animations, logo intro, shared preloader and jet-black statement strip.
- Persistent headers across all pages.
- New Loomic opening sound, mute preference and user-gesture fallback for blocked autoplay.
- Your supplied favicon everywhere except Loomic, which uses an invisible icon.
- Original local images and video assets.

The original catalog behavior is retained: forms prepare downloadable requests; this export does not add an order-processing, email or payments backend. Some laptop imagery retains the original external manufacturer URLs and needs internet access.

## Source map

| Location | Responsibility |
| --- | --- |
| `app/` | Routes, layout, metadata and global styles |
| `components/home/sections/` | Individual home page sections |
| `components/home/hooks/` | Home animation effects |
| `components/loomic/sections/` | Individual Loomic product/editorial sections |
| `components/loomic/hooks/` | Shared Loomic scroll behavior |
| `components/commerce/` | Store views, shared components and cart persistence |
| `components/LoomicHero.jsx` | Hero product sequence |
| `components/LoomicMotion.jsx` | GSAP motion choreography |
| `components/LoomicSound.jsx` | Opening sound and control |
| `components/SiteEnhancements.jsx` | Header measurement and route-aware favicon/sound |
| `lib/products.js` | Laptop catalog data |
| `public/` | Images, logos, video and favicon |

Existing semantic class names and CSS order are intentional animation hooks. Tailwind v4 is loaded through PostCSS; gradients, masks and keyframes remain in readable CSS files.

## Validation

- Fresh npm dependency install and `npm ci` completed.
- Standard `next build` passed on Node.js 22.23.3.
- Home, Loomic, about, cart, checkout, contact, repair, shop and all four product pages prerendered successfully.
- Nine server-rendered page states matched the current live source exactly after component extraction.
- Loomic best-seller content and route-specific favicon metadata verified in the Next.js prerender output.
- Build artifacts, dependencies, old hosting tooling and TypeScript are excluded from the ZIP.

This package was checked locally; it has not been deployed into your Vercel account. Browser-based visual/audio QA was unavailable here.


## Current version — 20 October 2026

White primary, dark secondary, with #B8BDC0 / #B9BFBE gradients on supporting gray panels. Both reclining comfort scenes remain dark. Includes the solid light sticky header, black header logo, readable text colors, smooth scrolling, product animations and opening sound controls.

Extract BOTH ZIPs into the SAME location so the Abstergo-Loomic folders merge. Run commands in that merged folder. On Vercel choose Next.js, Node 22.x, npm ci --include=dev, npm run build; leave Output Directory at default.
