# saskiajung

Portfolio site for Saskia Jung, stylist and creative director.

Built with Next.js 16 (App Router), exported as a fully static site and hosted on
Cloudflare Workers Static Assets.

## Getting started

```bash
npm install
npm run dev
```

## Structure

| Path | Purpose |
| --- | --- |
| `app/` | Routes, root layout, and the design system in `globals.css` |
| `components/` | `Home` (scroll sections), `Navbar` (menu), `Loader`, `Photo` |
| `lib/projects.ts` | Site copy, menu items, and project data |
| `assets/` | Original photography, not deployed |
| `public/images/` | Generated WebP derivatives, deployed |
| `scripts/` | Image optimisation |

## Design system

Tokens live at the top of `app/globals.css`.

- **Type** — Bodoni Moda for display, Jost for interface text, on a fluid
  clamp-based scale (`--type--2` through `--type-7`)
- **Colour** — one ink per project section, written to `--color-page-text` as you
  scroll, over a constant `--color-page-bg`
- **Motion** — `--ease-out` and `--ease-in-out` custom curves; every animation
  collapses under `prefers-reduced-motion`

## Images

Source photography lives in `assets/` and is never served. Running the optimiser
writes WebP derivatives at 480/640/960/1440 into `public/images/`:

```bash
npm run images:optimize
```

`components/Photo.tsx` builds the `srcSet` from those widths. Because the site is
a static export, Next's image optimisation is off and this pipeline replaces it.

Re-run the optimiser after adding or replacing anything in `assets/`.

## Deploying

The site is a static export, so there is no server runtime.

```bash
npm run preview   # build, then serve via wrangler locally
npm run deploy    # build, then publish to Cloudflare
```

`wrangler.jsonc` serves `./out` and falls back to `404.html`. Caching and
security headers are set in `public/_headers`.

First time on a new machine, authenticate with `npx wrangler login`.

## Known gaps

- The menu links to `/work`, `/creative-direction`, `/styling` and `/about`, and
  each homepage image links to `/work/[slug]`. Only `/` is built so far, so those
  routes currently resolve to the 404 page.
- Contact details in `lib/projects.ts` and `metadataBase` in `app/layout.tsx` are
  placeholders.
