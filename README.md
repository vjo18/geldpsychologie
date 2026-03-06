# GeldPsychologie.be — Astro + Markdown

Deze repo gebruikt nu **Astro** als website-engine (niet meer Chirpy als render-engine).

## Waarom je nog de oude Chirpy-look kan zien
Als GitHub Pages nog via Jekyll workflow publiceert, zie je de oude sidebar-layout.
Daarom staat er nu een aparte Astro deploy workflow in:
- `.github/workflows/deploy-astro.yml`

Vanaf de volgende deploy op `main` wordt de site uit `dist/` gepubliceerd.

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

## SEO-focus
- Handmatige `title`, `description`, `og:*` in `BaseLayout.astro`
- Schone URLs per pagina
- Wekelijkse contentflow via Markdown in `src/content/blog`
