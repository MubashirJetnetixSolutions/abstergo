# Abstergo Technology — client review source

Complete Next.js + Tailwind CSS project in JavaScript/JSX (no TypeScript). Includes the latest published home page, Loomic and all other current routes.

## Run locally
Use Node.js 22.x. Open a terminal in this folder, then run:

```bash
npm ci --include=dev
npm run dev
```

Open http://localhost:3000. For a production build, run `npm run build` then `npm start`. Restart the dev server after replacing the project.

## Vercel
Import this project with the Next.js framework preset. Set the root directory to the folder containing package.json, Node.js to 22.x, install command to `npm ci --include=dev`, and build command to `npm run build`. Leave Output Directory at the Next.js default. Clear any old Vite/Vinext/dist command overrides. No environment variables are required for this frontend.

## Latest home-page review changes
- Client hero, positioning message, six consultation paths and five audience messages.
- Selected for performance, including Dell Precision 7680 and expandable recommendation.
- Refined workstation presentation with transparent product image.
- Readable text on dark showcase panels.
- Abstergo × Loomic logo composition.
- Smooth looping Loomic product slider with fades at both ends and pause control.
- Increased letter spacing in the animated ABSTERGO heading.

The approved Loomic design, product photography, smooth scroll, preloader and sound controls remain included. Loomic uses white, dark and supporting #F5F5F5.

## Source map
- app/page.jsx: current home page and its animation setup.
- app/globals.css: home and shared styles.
- components/LoomicProductSlider.jsx: looping product ribbon.
- components/LoomicExperience.jsx and components/Loomic*.jsx: Loomic page.
- components/brand/: About, Business, Solutions, Contact, Support, Insights and Ultra page components.
- components/Commerce.jsx: catalog, products and cart views.
- lib/content/website.js: shared document-derived content.
- lib/products.js: laptop data.
- public/: local images, logos and video.

## Limits
Forms prepare inquiry details locally; email, payments and order processing need a backend connection. Some original laptop photos use manufacturer URLs and require internet access. Automatic opening sound may wait for the first user interaction.

Production build verified. This ZIP has not been deployed to your Vercel account. Browser visual QA was unavailable due to the preview server conflict.
