# Abstergo Technology

Next.js App Router source for the Abstergo website, including the workstation builder, Loomic, Abstergo Xperience, and the product catalog.

## Run locally

Use Node.js 24 and pnpm 11.25.0.

```sh
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

Open http://localhost:3000. For a production check, run `corepack pnpm build`, then `corepack pnpm start`.

## Deploy from GitHub to Vercel

1. Extract the ZIP. Commit the extracted files, including `.gitignore` and `.nvmrc`, to the root of your GitHub repository. Keep `package.json` and `vercel.json` in the same directory.
2. Import that GitHub repository in Vercel. Use the **Next.js** framework preset and **Node.js 24.x**. If you put the source in a subfolder, set Vercel’s Root Directory to that folder.
3. Deploy. The checked-in `vercel.json` pins the install command and selects the standard Next.js build. Clear conflicting install, build, or output directory overrides on an existing Vercel project.

No environment variables are required to build or run the website. The workstation builder generates a shareable quote request in the browser.

## Loomic reviews

The hosted review service uses Cloudflare D1 and R2 with ChatGPT sign-in. On this Vercel export, review endpoints return an unavailable response and product pages display that status. To enable reviews, connect a verified identity provider and persistent review and media storage. Existing review data and uploaded media are separate from this source package.
