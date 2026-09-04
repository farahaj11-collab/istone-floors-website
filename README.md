# iStone Floors Website

Marketing website for **iStone Floors** — premium stone, tile and hardwood
flooring, designed, supplied and installed. Built as a fast single-page site
with [Vite](https://vite.dev/), [React](https://react.dev/) and TypeScript.

## Requirements

- Node.js 22.x (pinned toolchain; see `.nvmrc`)
- npm 10.x (bundled with Node 22)

## Getting started

```bash
npm install       # install dependencies
npm run dev       # start the dev server at http://localhost:5173
```

## Available scripts

| Script            | Description                                        |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server (HMR) on port `5173`.    |
| `npm run build`   | Type-check (`tsc -b`) and build for production.    |
| `npm run preview` | Preview the production build on port `4173`.       |
| `npm run lint`    | Run ESLint across the project.                     |

## Project structure

```
index.html              # App entry HTML
public/                 # Static assets (favicon)
src/
  main.tsx              # React entry point
  App.tsx               # Page composition
  index.css             # Global styles & design tokens
  data.ts               # Content (services, gallery, reviews)
  components/           # UI sections (Hero, Services, QuoteForm, …)
```

## Cloud Agent environment

This repository includes a [`.cursor/environment.json`](.cursor/environment.json)
so Cursor Cloud Agents can boot a ready-to-use dev environment:

- `install` runs `npm ci` (falls back to `npm install`) to restore dependencies.
- A `dev` terminal runs `npm run dev` so the site is served on port `5173`.
