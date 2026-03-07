# GeldPsychologie.be — Astro

Deze repository draait volledig op **Astro** en bevat geen Jekyll/Chirpy-structuur meer.

## Development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Structuur
- `src/pages/index.astro` → Home
- `src/pages/tools.astro` → Tools
- `src/pages/kennis/index.astro` + `[slug].astro` → Kennis (blog)
- `src/pages/methodiek.astro` → Methodiek
- `src/pages/coaching.astro` → Coaching
- `src/pages/over.astro` → Over
- `src/content/blog/*.md` → artikels

## GitHub Pages
- Site URL: `https://vjo18.github.io`
- Base path: `/geldpsychologie/`
- Deploy workflow: `.github/workflows/deploy-astro.yml`
