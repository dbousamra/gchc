# Gold Coast Heart Care

Marketing website for Gold Coast Heart Care, a private cardiology clinic on the
Gold Coast, Australia. Built with Vite + React + TypeScript.

## Develop

```bash
pnpm install
pnpm dev      # local dev server with HMR
pnpm build    # type-check + production build to dist/
pnpm lint     # eslint
pnpm preview  # serve the production build locally
```

## Deployment

Pushes to `main` are built and published to GitHub Pages by
`.github/workflows/deploy.yml`. The site is served from a project subpath, so
Vite's `base` is set to `/gchc/` in `vite.config.ts`. If a custom domain is
added later, build with `--base=/` (or update `base`) accordingly.
