# iStone Floors Website

Marketing website for **iStone Floors** — a premium flooring company offering
hardwood, luxury vinyl, porcelain tile, and natural stone, from design through
installation.

Built with [Vite](https://vite.dev/), [React](https://react.dev/), and
TypeScript.

## Prerequisites

- Node.js 20+ (developed on Node 22)
- npm 10+

## Getting started

```bash
npm ci        # install dependencies (use `npm install` if lockfile is stale)
npm run dev   # start the dev server at http://localhost:5173
```

## Available scripts

| Command             | Description                                        |
| ------------------- | -------------------------------------------------- |
| `npm run dev`       | Start the Vite dev server with hot module reload.  |
| `npm run build`     | Type-check and produce a production build in `dist`.|
| `npm run preview`   | Preview the production build locally (port 4173).  |
| `npm run lint`      | Run ESLint over the project.                       |
| `npm run typecheck` | Run the TypeScript compiler with no emit.          |

## Project structure

```
src/
  components/     # UI sections (Navbar, Hero, Collections, QuoteForm, ...)
  data.ts         # Collections, services, and testimonial content
  App.tsx         # Page composition
  index.css       # Design system + component styles
```

## Key features

- Responsive, modern landing page with a warm, premium design system.
- Collection showcase with per-material accents and live pricing.
- Interactive **free quote** form with client-side validation and a live
  cost estimate (materials + installation) that confirms on submit.
