# Abstergo Technology — Complete Next.js Source

Includes Home, Loomic, About, Business, Support, Insights, Contact and product pages. Latest shared header and hover animations included. JavaScript/JSX only.

## Run locally
Use Node.js 22. Extract ALL FOUR ZIP files into the same folder. They merge into one Abstergo-Verified directory.

```bash
npm ci
npm run dev
```

## Production / Vercel
Push the contents of Abstergo-Verified to your repository. Set the Vercel Root Directory to the folder containing package.json. Framework: Next.js. Node: 22.x. Build: npm run build. Output directory: default (do not enter dist or out). No environment variables required for the current frontend.

```bash
npm run build
npm start
```

Do not upload node_modules or .next. If replacing an older local copy, remove its .next folder and run npm ci before building.

## Current functionality
Consultation and support forms prepare downloadable JSON requests; they do not send email or feed a CRM until a real delivery integration is configured. Contact details remain unconfirmed. Product availability and pricing are consultation based. Opening sound is subject to browser autoplay restrictions.

## Validation
Production Next.js build checked on 29 October 2026. All 30 generated routes compiled. Assets are included under public. No universal zero-error guarantee can be made for hosting configuration or third-party changes.
