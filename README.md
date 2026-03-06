# GeldPsychologie.be — Astro + Markdown

Deze repo is gemigreerd naar **Astro** als basis voor een snelle, SEO-vriendelijke website die makkelijk uitbreidbaar blijft met Codex.

## Stack
- Astro
- Markdown content collections (`src/content/blog`)
- Statische pages voor Home, Tools, Kennis, Methodiek, Coaching en Over

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
- `src/pages/index.astro` → homepage
- `src/pages/tools.astro` → tools overzicht
- `src/pages/kennis/index.astro` + `[slug].astro` → blog listing + detail
- `src/pages/methodiek.astro` → visie en 5 principes
- `src/pages/coaching.astro` → coaching aanbod
- `src/pages/over.astro` → positionering en achtergrond
- `src/content/blog/*.md` → artikels in Markdown

## SEO-focus
- Handmatige title/description/OG tags in `BaseLayout.astro`
- Schone URLs per pagina
- Content workflow: publiceer 1 artikel per week in `src/content/blog`
