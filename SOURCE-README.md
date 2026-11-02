# Abstergo Technology — complete website source

Includes the complete Abstergo website, the Loomic page, product assets, logos, and scroll animation code. The marked charger detail image has been reduced and fitted inside its column.

## Run locally

Requirements: Node.js 22.13 or newer and pnpm (see package.json for the packageManager version).

```bash
pnpm install
pnpm dev
```

Open the local URL printed in the terminal, then visit `/loomic`.

```bash
pnpm build
pnpm start
```

The existing project uses React/Next.js conventions with Vinext/Vite and Cloudflare deployment tooling. Application pages are in `app/`; Loomic animation components and styles are in `components/`; assets are in `public/loomic/`. Some starter infrastructure and UI utilities use TypeScript; the custom Loomic page is JavaScript/JSX.

## Loomic files

- `components/LoomicExperience.jsx`: page content, logo zoom and hero scroll scenes.
- `components/LoomicMotion.jsx`: GSAP scroll animations and cinematic charger sequence.
- `components/loomic-experience.css`: responsive layout and visual effects.
- `components/LoomicLogo.jsx`: scalable logo.
- `public/loomic/`: product imagery and Loomic logo.

Dependencies, generated build output, Git history, local environment files, credentials, and the hosted project's identity are excluded from this ZIP. No credentials are required for the product showcase; connected services, if configured later, require your own environment settings.
