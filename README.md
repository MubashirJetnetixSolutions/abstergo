# Abstergo — Vercel edition

This package preserves the current site design and latest review controls, using standard Next.js rather than the hosted Cloudflare runtime.

## Replace and run

Extract ALL FOUR ZIPs into the same directory. They merge into `Abstergo-Vercel-Final`. This is a full replacement: remove old application files first, keeping your own backups. Do not merge the old Cloudflare config, build output, or dependencies into this folder.

Run with Node.js 22:

    npm ci
    npm run dev

Production:

    npm run build
    npm start

## GitHub / Vercel

Upload the CONTENTS of `Abstergo-Vercel-Final` to your repository root, including package-lock.json and .gitignore. Remove obsolete old config files such as vite.config.*, wrangler.*, and old build directories from the repo. Do not commit node_modules, .next or secrets.

Vercel settings: Framework Next.js; Root Directory the directory containing package.json (blank if at repository root); Install npm ci; Build npm run build. Leave Output Directory at its framework default. Use Node.js 22. Redeploy the new commit. The code builds without review credentials; reviews require the setup below.

The screenshot shows a failed Vercel check, not its exact build log. This export removes the known Cloudflare/Vinext dependency mismatch; external account/project configuration cannot be verified locally.

## Persistent reviews — one-time Supabase setup

1. Create a Supabase project. Run setup/supabase.sql in its SQL editor. The media bucket is PRIVATE.
2. Add SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY and REVIEW_OWNER_EMAIL to Vercel environment variables. Copy .env.example to .env.local for local testing. Never put the service role key in a NEXT_PUBLIC variable or commit it.
3. In Supabase Auth email settings, enable email sign-in and configure SMTP for production delivery. Set the Magic Link email template to display `{{ .Token }}` so customers receive an email OTP, not just a link. Keep Supabase authentication rate limits enabled.
4. Redeploy after adding environment variables. Visit a product page and sign in with an email code. The owner must sign in using exactly REVIEW_OWNER_EMAIL.
5. Test a customer review, edit it, then sign in as owner to publish, verify the purchase and remove the review. A verified-purchase badge is only set by the owner after checking the purchase.

Reviews are saved in PostgreSQL; photos/videos are private until the review is published. Only the writer can edit, and only the configured owner can approve/remove. New and edited reviews require approval. A sign-in lasts up to one hour; sign in again after expiry. At most four JPG/PNG/WebP/MP4/WebM files, 3 MB combined per submission. This limit keeps multipart uploads suitable for Vercel functions; compress clips before uploading.

No fake reviews are included. With backend settings missing, the review area reports setup is required. Auth/email/database integration must be tested with your own Supabase project; no live credentials are included.

Other existing consultation/contact forms retain their existing behavior; this export does not connect them to a CRM.

## Validation

Run `node --test tests/review-policy.test.mjs` for review permission, visibility, input and same-origin checks. Production build verified with no backend credentials. A successful build does not replace testing production email delivery or your Vercel account settings.
