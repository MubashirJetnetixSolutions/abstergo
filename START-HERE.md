# Abstergo — Latest Complete Source

Source commit: 94f8a4a6ffd646782726727669b2afd30b66bc88
Exported: 2 November 2026

Extract ALL FOUR ZIPs into the same empty directory. They merge into one Abstergo-Complete folder. Every part is required.

Includes the latest website, 14 Loomic product pages, campaign imagery, transparent Ultra image, single-click navigation fix, review submissions, media upload, author editing, owner moderation/removal, and aligned controls.

## Important hosting distinction
This is the COMPLETE CURRENT HOSTED SOURCE, including its real review backend. It uses Vinext/Cloudflare Workers, D1, R2 and Sites sign-in. It is NOT the old frontend-only Next.js/Vercel export. Do not deploy it directly to Vercel as though the backend were portable. Vercel needs a separate authenticated-session, database and object-storage adapter. Never accept client-supplied identity headers on an untrusted public host.

## Local development
Use Node.js 22.13 or later and pnpm 11.25.0 (the version pinned in package.json).

```bash
corepack enable
corepack prepare pnpm@11.25.0 --activate
pnpm install --frozen-lockfile
pnpm run dev
```

For production compilation:

```bash
pnpm run build
```

The clean export selects the portable execution profile automatically. Checkout-specific execution profiles, dependencies and generated build folders are deliberately excluded.

## Reviews and permissions
- Authentication is supplied by the current Sites host.
- DB is the D1 binding; BUCKET is the R2 media binding.
- REVIEW_OWNER_EMAIL must be configured as a server-side runtime secret for the real owner. The secret value is not included.
- Writer ownership uses the authenticated stable user ID, never an editable form field.
- Only the original writer can edit. Edits return to pending approval.
- Only the configured owner can approve, verify purchases or remove reviews.
- Removal hides the record rather than permanently deleting it.
- Pending media is readable only by the author and owner.
- New reviews and media persist in the hosting storage, not in this ZIP. No customer review records, uploads, credentials or production database contents are exported.
- The local starter has development-only mock authentication. Do not deploy that mock identity outside local development.

The schema migration is in drizzle/0000_lovely_hobgoblin.sql. Hosted Sites applies migrations through its deployment workflow. Local data and production data are separate. Configure local Worker bindings and REVIEW_OWNER_EMAIL before testing review writes locally.

## Checks
The current hosted source compiled successfully before publication. The six review authorization tests pass:

```bash
node --test tests/review-policy.test.mjs
```

## Other forms
Consultation/contact/support forms still prepare downloadable request JSON. They are not connected to email or a CRM. This is separate from the now-persistent review system.
