# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

`gchc` is the marketing website for **GC HeartCare**, a private cardiology practice at Gold Coast Private Hospital, Southport. It's a **Vite + React 19 + TypeScript** single-page app — one long scrolling landing page with anchor-linked sections (no router). It reproduces the content/functionality of the legacy site at gcheartcare.com with a fresher design.

### Architecture
- `src/App.tsx` composes the page from section components in `src/components/`, in people-first order: `Header`, `Hero`, `Location`, `Story` (clinic story with real practice photos), `Doctors` (editorial rows with large portraits), `Credentials`, `Team`, `Services`, `Conditions`, `Info` (patients + referrers), `Contact`, `Footer`.
- `src/content.ts` is the single source of truth for all copy/data (practice details, nav, services, doctors, team, etc.). **Edit content here, not in components.**
- `src/icons.tsx` holds the inline SVG icon set (stroke-based, `currentColor`).
- `src/hooks.ts` has `useReveal` (IntersectionObserver scroll-in animations via the `.reveal` class) and `useScrolled`.
- `src/index.css` is the whole design system: CSS variables + all section styles, class-based (no CSS modules / no Tailwind). Aesthetic is calm "clinical luxury" — lilac paper, deep aubergine ink, muted amethyst accent (matches the mauve logo); fonts are Fraunces (display) + Hanken Grotesk (body), loaded in `index.html`.
- Photography: `public/img-echo.jpg`, `img-suite.jpg`, `img-reception.jpg` are real practice photos pulled from the legacy Wix site's 2020 shoot. `public/avatars/*` are **stock placeholder portraits at 900×1125 — swap for real headshots** (none exist on the legacy site).
- The contact form is static-friendly: it composes a `mailto:` on submit (no backend).

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
