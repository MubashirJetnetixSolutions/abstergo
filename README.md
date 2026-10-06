# Abstergo Technology website

Next.js App Router + Tailwind CSS. All application source uses JavaScript/JSX; no TypeScript.

## Run locally

Use Node.js 22 or later. In this folder run:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm run build
npm start
```

## Main files

- `app/page.jsx`: page content, products, interactions and GSAP scroll animations.
- `app/globals.css`: responsive design, portrait slider, background patterns and motion.
- `app/layout.jsx`: English metadata and document layout.
- `public/logo.png`: supplied original company logo.

## Before client launch

- Product imagery currently loads from manufacturer CDN URLs. Internet access is required; check asset usage rights and move approved originals into `public/` if you need self-hosted assets.
- Product names/configurations are showcase examples. Confirm actual inventory, pricing and availability.
- Contact, repair and quote forms prepare requests locally only. They do not send email or store submissions on a server. Connect the client’s backend/email provider before launch.
- Selection state lasts for the current page session.
- Motion respects the visitor’s reduced-motion preference.

The exported project runs with standard Next.js and does not require the hosted preview service.


## Multipage storefront
Routes: /, /shop, /products/1 through /products/4, /cart, /checkout (quote preparation), /repair, /about and /contact. The cart is stored on this device with localStorage. Actual prices, inventory, payment processing and request delivery must be connected before accepting live orders. The quote and contact forms prepare a downloadable JSON request; they do not submit it.
