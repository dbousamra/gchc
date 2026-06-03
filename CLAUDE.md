# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

`gchc` is a freshly scaffolded **Vite + React 19 + TypeScript** single-page app. As of this writing it is the unmodified Vite starter template (`src/App.tsx` is the default landing page) — there is no application-specific architecture yet. Treat this as a greenfield project: structure and conventions are still to be established.

## Commands

Uses **pnpm** (see `packageManager` in `package.json`).

- `pnpm dev` — start the Vite dev server with HMR
- `pnpm build` — type-check the whole project (`tsc -b`) then produce a production build (`vite build`)
- `pnpm lint` — run ESLint over the repo
- `pnpm preview` — serve the production build locally

There is no test runner configured yet.

## Build / type-checking layout

TypeScript uses project references (`tsconfig.json` references `tsconfig.app.json` for `src/` and `tsconfig.node.json` for Vite config). Because of this, `pnpm build` runs `tsc -b` rather than a plain `tsc`. When adding a test runner or other tool that needs its own compilation context, extend this reference structure rather than collapsing it into one tsconfig.

## Linting

`eslint.config.js` is flat-config and currently extends only the `recommended` (non-type-aware) tiers. The README documents how to upgrade to type-aware rules (`recommendedTypeChecked` / `strictTypeChecked`) and React-specific plugins if stricter checking is wanted — this has not been done.

## Entry points

- `index.html` mounts `#root` and loads `src/main.tsx`
- `src/main.tsx` renders `<App />` inside `<StrictMode>`
- Static assets in `public/` are served at the root path (e.g. `/icons.svg`); assets imported from `src/assets/` are processed by Vite
