# Abstergo Technology — clean source export

Complete website source, including the Loomic page, original assets, preloader and scroll animations. This export reorganizes the accepted frontend without redesigning it.

## Run locally

Use Node.js 22.13 or newer and pnpm 11.25.0 (the version pinned in `package.json`).

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open the URL printed in the terminal; visit `/loomic` for the Loomic page.

```bash
pnpm build
pnpm start
```

The existing application uses React with Next.js App Router conventions, Vinext/Vite, Tailwind CSS v4, GSAP and Lenis. The custom website components are JavaScript/JSX. Existing starter infrastructure and shared UI utilities include TypeScript; their toolchain is retained.

## Component map

| Location | Responsibility |
| --- | --- |
| `app/page.jsx` | Home page composition and shared state |
| `components/home/sections/` | Home navigation, hero, collections, editorial sections, footer and panels |
| `components/home/hooks/` | Existing home effects, retained in their original order |
| `components/home/Typography.jsx` | Shared home text animation components |
| `components/home/data.js` | Home product stories and image references |
| `components/LoomicExperience.jsx` | Loomic page composition |
| `components/loomic/sections/` | Individual Loomic product and editorial sections |
| `components/loomic/hooks/` | Loomic scroll and reveal effects |
| `components/loomic/data.js` | Loomic chapter navigation and shared constants |
| `components/LoomicHero.jsx` | Hero choreography |
| `components/LoomicMotion.jsx` | Existing GSAP page motion |
| `components/LoomicChair.jsx` | Existing chair animation |
| `components/SitePreloader.jsx` | Shared preloader |
| `components/Commerce.jsx` | Store state and actions |
| `components/commerce/` | Store header, footer, content, views and persistence effects |
| `public/` | Original logos, images and videos |

## Styling

Tailwind v4 is imported in `app/globals.css`. Simple layout declarations are organized into grouped `@apply` utilities in the existing semantic CSS selectors. Complex responsive styles, keyframes, masks, gradients and scroll-controlled CSS variables remain explicit CSS.

Existing class names are deliberately preserved because animation scripts query them. Keep the stylesheet import order and selector order when editing; later rules contain responsive and animation refinements. The refactor adds no extra DOM wrappers.

## Verification

- Identical server-rendered HTML before and after for Home, Loomic, shop, product, cart, contact, repair, checkout and about.
- Equivalent expanded custom CSS selector declarations across the four main stylesheets, including animation keyframes, after normalizing formatting and independent property order.
- All 95 public assets are byte-for-byte unchanged.
- Production build passed.

These are structural/build checks; a new browser-based visual regression run was not performed for this export. Existing animation logic, event handlers, state, dependencies and DOM hooks are retained.

The live site was not modified. Dependencies, build output, Git history, environment files and the hosted project's identity are excluded. The included `.openai/hosting.json` contains only empty optional binding declarations needed by the existing build configuration.

Some laptop product images use the original external image URLs and require network access. Loomic product assets are included locally. Store request forms retain their existing behavior: they prepare downloadable requests rather than sending orders or messages.
