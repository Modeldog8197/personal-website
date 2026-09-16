# Avdhoot Gupta — personal portfolio

A React + Vite portfolio about simulation, data analysis, software, and basketball. The interface uses a restrained editorial layout, project-specific SVG illustrations, a working normal-distribution experiment, and an accessible, searchable project collection.

## Development

Use Node.js 22 or later.

```sh
npm ci
npm run dev -- --host 127.0.0.1
```

## Checks

```sh
npm run lint
npm run format:check
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

Browser checks cover desktop and mobile layout, sampling controls, project search, empty states, project notes, repository search, keyboard navigation, and reduced motion. CI runs the same checks. `npm run format` formats the source.

## Editing content

- `portfolio.js`: featured projects, descriptions, technical details, categories, and links.
- `repositories.json`: explicit snapshot of all 39 public repositories returned for Modeldog8197 during this update; no runtime GitHub API dependency.
- `About.jsx`: biography, basketball, and community work.
- `Contact.jsx`: existing public email, GitHub, and LinkedIn addresses.
- `index.css`: responsive layouts, design tokens, print layout, and reduced-motion support.
- `sampling.js`: deterministic Box–Muller normal sampling used by the homepage experiment.

The featured projects group related implementations; the repository archive retains earlier versions and exercises. Local projects without public sources are described without invented links. Data-Maximizer's previous public demo returned 404 during verification, so it has no active demo link.

## Content provenance

Project descriptions were checked against `simulation/sim.js` and `sim-worker.js`, `NBA-API/README.md`, `Biofuel-circle-monte-carlo/02_full_analysis.py`, `signal-bot/main.py`, and the Vivriti and Accounting repositories. The current simulation source contains **10 scenarios**, including product cost. Personal background and local project descriptions use the owner's previously supplied information.

The basketball notes preserve the documented baseline comparison and do not claim predictive superiority. Vivriti is attributed as a team project with chatbot integration. Portfolio illustrations are labeled as illustrations and contain no business results or player statistics. The homepage histogram is computed from actual generated samples; its horizontal scale is −4σ to +4σ, with any outside samples excluded from the drawing but included in the sample mean.

## Build and hosting

`npm run build` produces `dist/`. Serve that directory from an existing static host. Relative Vite asset paths support both a domain root and a repository subdirectory. The HTML entry is `main.jsx` at the repository root; no nonexistent `src/` or `components/` directories are required.

The only external visual dependency is Google Fonts (DM Sans and Manrope); local sans-serif fallbacks remain available when fonts cannot load. The portrait is imported and bundled locally. There is no analytics, contact-form backend, or secret required. Project dashboards may have their own backend availability requirements.
