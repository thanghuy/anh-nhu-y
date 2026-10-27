# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page React 19 + TypeScript app built with Vite, deployed to Vercel as a static site. Routing uses `react-router-dom` (`/`, `/gioi-thieu`, `/san-pham`, `/lien-he`); there is no state library or test runner yet. Content mirrors anhnhuy.com; images are hot-linked from its Zyro CDN via `img()` in `src/lib/site.ts`, which also holds shared contact/nav data.

## Commands

```bash
npm run dev       # Vite dev server
npm run build     # tsc -b (type-check) then vite build -> dist/
npm run preview   # serve the production build locally
npm run lint      # oxlint (config in .oxlintrc.json) — not ESLint
```

No test framework is installed. Deploy with `npx vercel` (preview) / `npx vercel --prod`, or connect the repo in the Vercel dashboard.

## Architecture

- `src/main.tsx` mounts `<App />`; all UI lives under `src/`. `index.html` at the repo root is the Vite entry.
- Layout of `src/`: `components/` (shared UI, e.g. `layout/`), `pages/<name>/` (route-level screens), `hooks/`, `lib/` (helpers, `env.ts` for `VITE_*` vars), `types/`, `styles/global.css` (CSS variables, light/dark), `assets/`. Component styles use CSS Modules (`*.module.css`).
- Import from `src/` with the `@/` alias (defined in both `vite.config.ts` and `tsconfig.app.json` `paths`; keep them in sync). Client env vars must be prefixed `VITE_`; see `.env.example`.
- Design tokens live in `src/styles/global.css` (`--color-primary*`, `--radius-card: 12px`, light/dark). Every card must use `Card` (`components/ui/`) / `var(--radius-card)`; change the brand green (from anhnhuy.com) only via the `--color-primary*` / `--color-accent*` tokens. Shared page blocks (page hero, stats, testimonials, CTA band) live in `components/sections/`.
- `.claude/launch.json` defines the `dev` preview server (port 5173).
- Type-checking is split across project references: `tsconfig.app.json` (code in `src/`) and `tsconfig.node.json` (`vite.config.ts`). `npm run build` runs `tsc -b`, so type errors fail the build (and therefore the Vercel deploy).
- `vercel.json` sets the `vite` framework preset, outputs `dist/`, and rewrites every path to `/index.html` so client-side routing works on refresh. Keep that rewrite if a router is added.
