# GeldPsychologie.be

Startversie van de website op basis van **Jekyll + Chirpy theme**.

## Lokale development

```bash
bundle install
bundle exec jekyll s
```

Daarna is de site bereikbaar op `http://127.0.0.1:4000`.

## Structuur

- `index.md` → homepage met hero, pijlers, tools, coaching en laatste inzichten.
- `_tabs/` → hoofdnavigatie (Tools, Kennis, Methodiek, Coaching, Over, Contact).
- `_posts/` → kennisartikels.
- `assets/css/override.css` → custom styling voor GeldPsychologie.

## Deployment

Pas in `_config.yml` minimaal deze velden aan voor productie:

- `url`
- `baseurl`
- `social`
- analytics/webmaster verificatie (optioneel)
