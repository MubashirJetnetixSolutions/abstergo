# Abstergo Technology — Complete Next.js source

Includes the complete homepage, Loomic and other routes, all 135 public assets, six animated hero text ribbons, Good Times wordmark animation, tablet centering adjustments and Loomic in the brands bar.

## Run locally

Use Node.js 22 or newer.

```sh
npm ci
npm run dev
```

## Deploy on Vercel

Replace the old project with the contents of this folder, including `public`, `package.json` and `package-lock.json`. Keep any private environment settings in Vercel. Do not combine this project with the older partial patches.

Commit all source and public files to GitHub. In Vercel choose the Next.js framework preset, use the folder containing package.json as Root Directory, and keep Output Directory at its default (do not set it to out or dist). Use npm ci to install and npm run build to build. Deploy the new commit.

If the old project had Vite/Cloudflare settings, remove their custom Vercel build/output overrides before deploying this Next.js project.

All image references now resolve to files included under public; no product-image hotlinks are required. The production build passed with all 30 routes. This package contains JavaScript/JSX, CSS and Tailwind setup; no TypeScript source.
