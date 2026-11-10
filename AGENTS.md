# Centru de pregătire Constanța — centrudepregatire.ro

Site de prezentare pentru un centru de meditații din Constanța. Conținutul e în română.

## Regula de aur

Când schimbi oferta, prețurile, contactul sau programul, actualizezi în același commit conținutul, JSON-LD-ul, llms.txt și sitemap-ul. Domeniul e centrudepregatire.ro, fără L.

Concret, în același commit:
- `js/data.jsx` / componentele JSX (conținutul vizibil)
- `docs/index.html` — blocul `<script type="application/ld+json">` din `<head>`
- `docs/llms.txt`
- `docs/sitemap.xml` — `<lastmod>` cu data zilei
- apoi `npm run build` (regenerează bundle-ul și HTML-ul pre-randat)

## Stack

- React 18.3.1 (UMD, fișiere locale în `docs/dist/`), fără bundler.
- JSX compilat cu Babel (`@babel/preset-react`, runtime classic), concatenat și minificat cu terser în `docs/dist/bundle.min.js`.
- Tailwind 3 precompilat, CSS-ul e inline în `<style>` din `docs/index.html`.
- Rutare pe hash (`#/contact`, `#/preturi`...), deci există un singur URL real: `https://centrudepregatire.ro/`.
- Pre-randare la build: `scripts/build.mjs` rulează bundle-ul în Node, randează pagina Acasă cu `react-dom/server` și o scrie în `<div id="root">` între `<!--prerender:start-->` și `<!--prerender:end-->`. În browser, `createRoot` înlocuiește HTML-ul pre-randat cu aceeași pagină. Crawlerele fără JS văd tot textul.

## Structură

- `docs/` — **singurul folder public** (GitHub Pages servește doar `/docs`). Tot ce e aici e accesibil pe internet.
  - `index.html` — pagina (head cu meta + JSON-LD, conținut pre-randat — nu edita manual între markerii prerender)
  - `dist/` — `bundle.min.js` (generat), `react*.production.min.js`
  - `assets/` — imagini; `og-image.jpg` (1200×630) și `logo-512.jpg` folosite în meta/JSON-LD
  - `robots.txt`, `sitemap.xml`, `llms.txt`, `CNAME`, `.nojekyll`
- `js/*.jsx` — sursele React (nepublice)
- `dist/` (rădăcină) — fișiere intermediare de build (nepublice)
- `scripts/build.mjs` — build + pre-randare + verificări (JSON-LD valid, prețurile din `data.jsx` apar în JSON-LD, fără domeniul greșit)
- `scripts/og-image.mjs` — regenerează `docs/assets/og-image.jpg` din logo
- `AGENTS.md`, `CLAUDE.md` — doar pentru agenți, NU le pune în `docs/`

## Unde stă conținutul

- Materii, prețuri (`PRICES`), testimoniale, blog: `js/data.jsx`
- Telefon, email, adresă (`PHONE`, `EMAIL`, `ADDRESS`), link-uri sociale, program în footer: `js/components.jsx`
- Program și contact și în: `js/pages-contact-privacy.jsx`, `js/pages-about-services.jsx`, `js/pages-home.jsx`
- Titluri/descrieri per pagină (setate din JS): `SEO` în `js/app.jsx`
- Meta, Open Graph, JSON-LD: `docs/index.html` (`<head>`)
- Rezumat pentru AI: `docs/llms.txt`

## Comenzi

```sh
npm install            # o singură dată (babel, terser, react, react-dom, sharp)
npm run build          # = node scripts/build.mjs
npx http-server docs   # sau: npx serve docs  -> verificare locală
curl -s http://localhost:8080/ | grep "Soveja"   # conținutul trebuie să apară fără JS
```

## Deploy

GitHub Pages, repo `git@github.com:vladciobu-lab/Centrul-de-pregatire.git`, branch `gh-pages`, folder `/docs`, domeniu custom din `docs/CNAME`.

```sh
npm run build
git add -A
git commit -m "..."
git push origin gh-pages
```

Site-ul e live în ~1 minut după push. Nu există CI; build-ul se face local și rezultatul (`docs/`) se comite.
