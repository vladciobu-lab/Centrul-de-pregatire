# Centrul de Pregătire Constanța — Site web

Site-ul oficial al Centrului de Pregătire Constanța, construit cu Astro + Tailwind CSS.

---

## Cuprins

1. [Cum rulezi site-ul local](#1-cum-rulezi-site-ul-local)
2. [Cum adaugi un articol pe blog](#2-cum-adaugi-un-articol-pe-blog)
3. [Cum modifici prețurile](#3-cum-modifici-prețurile)
4. [Cum modifici testimonialele](#4-cum-modifici-testimonialele)
5. [Cum conectezi Formspree (formularul de contact)](#5-cum-conectezi-formspree)
6. [Cum modifici numărul de WhatsApp](#6-cum-modifici-numărul-de-whatsapp)
7. [Cum faci deploy pe Vercel](#7-cum-faci-deploy-pe-vercel)

---

## 1. Cum rulezi site-ul local

### Ce ai nevoie instalat
- **Node.js** (versiunea 18 sau mai nouă) — descarcă de la [nodejs.org](https://nodejs.org)
- **Git** — de la [git-scm.com](https://git-scm.com)

### Pași
```bash
# 1. Intră în folderul proiectului
cd centru-pregatire

# 2. Instalează dependențele (o singură dată)
npm install

# 3. Pornește serverul local
npm run dev
```

Deschide în browser: **http://localhost:4321**

Orice modificare pe care o faci în fișiere apare automat în browser fără să restartezi.

---

## 2. Cum adaugi un articol pe blog

**Calea completă:** `src/content/blog/`

Detalii complete în **BLOG-README.md** din rădăcina proiectului.

### Pe scurt:

1. Creează un fișier nou în `src/content/blog/` cu extensia `.md`
   - Exemplu: `sfaturi-bac-2026.md`
   - Folosește doar litere mici, cifre și liniuțe în numele fișierului

2. Completează informațiile la începutul fișierului:

```markdown
---
title: "Titlul articolului"
description: "Scurtă descriere de 1-2 propoziții"
pubDate: 2026-06-15
author: "Echipa Centrul de Pregătire"
category: "Bacalaureat"
tags: ["tag1", "tag2"]
featured: false
---

Conținutul articolului vine aici...
```

**Categorii disponibile** (exact cum apare, cu diacritice):
- `Evaluare Națională`
- `Bacalaureat`
- `Sfaturi învățare`
- `Pentru părinți`

3. Fă commit și push pe GitHub — articolul apare automat pe site după câteva minute.

---

## 3. Cum modifici prețurile

**Fișier:** `src/pages/preturi.astro`

Caută în fișier textele cu prețurile și modifică-le direct.

**De exemplu**, pentru prețul ședinței individuale, caută `100` și înlocuiește cu noul preț.

Prețurile apar și pe paginile individuale de materii (`src/pages/materii/[slug].astro`) — caută același text acolo.

---

## 4. Cum modifici testimonialele

**Fișier:** `src/lib/data.ts`

Deschide fișierul și găsești array-ul `testimoniale`. Fiecare testimonial are forma:

```typescript
{
  id: 1,
  nume: 'Andrei M.',
  rol: 'Elev, clasa a 8-a',
  materie: 'Matematică',
  rezultat: 'Nota 9.20 la EN',
  citat: 'Textul testimonialului...',
  avatar: null,
  tip: 'elev',   // 'elev', 'parinte' sau 'recuperare'
},
```

Modifică textele direct sau adaugă un testimonial nou în array.

---

## 5. Cum conectezi Formspree

Formularul de contact trimite datele prin [Formspree](https://formspree.io) — un serviciu gratuit.

### Pași:

1. Mergi pe [formspree.io](https://formspree.io) și creează un cont gratuit
2. Apasă **"New Form"** și dă-i un nume (ex: "Contact Centrul de Pregătire")
3. Copiază **ID-ul formularului** (ex: `xpzgebkj`)
4. Deschide fișierul `src/pages/contact.astro`
5. Găsește linia:
   ```
   action="https://formspree.io/f/PLACEHOLDER_FORMSPREE_ID"
   ```
6. Înlocuiește `PLACEHOLDER_FORMSPREE_ID` cu ID-ul tău:
   ```
   action="https://formspree.io/f/xpzgebkj"
   ```
7. Salvează și fă deploy

Mesajele vor ajunge pe email-ul cu care te-ai înregistrat pe Formspree.

---

## 6. Cum modifici numărul de WhatsApp

Numărul de WhatsApp apare în mai multe locuri. Caută în tot proiectul (Ctrl+Shift+F în VS Code):

```
40721628936
```

și înlocuiește cu noul număr (fără `+`, fără spații).

**Fișierele principale:**
- `src/components/WhatsAppButton.astro` — butonul flotant
- `src/components/Footer.astro` — footer
- `src/pages/servicii.astro` — pagina servicii
- `src/pages/contact.astro` — pagina contact

---

## 7. Cum faci deploy pe Vercel

### Prima dată (setup inițial):

1. Mergi pe [vercel.com](https://vercel.com) și conectează-te cu contul GitHub
2. Apasă **"Add New Project"**
3. Importă repository-ul GitHub al site-ului
4. Vercel detectează automat că e Astro — lasă setările implicite
5. Apasă **"Deploy"**

### Pentru actualizări ulterioare:

Orice `git push` pe branch-ul `main` declanșează automat un deploy pe Vercel. Nu trebuie să faci nimic altceva.

### Dacă vrei să setezi domeniul propriu:

În dashboard-ul Vercel, mergi la **Settings → Domains** și adaugă domeniul tău. Vercel îți dă instrucțiuni pentru DNS.

---

## Structura proiectului

```
centru-pregatire/
├── public/
│   └── logo.jpeg              ← Logo-ul centrului
├── src/
│   ├── components/
│   │   ├── Header.astro       ← Navigație cu dropdowns
│   │   ├── Footer.astro       ← Footer complet
│   │   └── WhatsAppButton.astro ← Buton flotant WhatsApp
│   ├── content/
│   │   └── blog/              ← Articolele de blog (fișiere .md)
│   ├── layouts/
│   │   └── Layout.astro       ← Template principal cu SEO
│   ├── lib/
│   │   └── data.ts            ← Testimoniale și date materii
│   ├── pages/
│   │   ├── index.astro        ← Pagina Acasă
│   │   ├── despre.astro
│   │   ├── servicii.astro
│   │   ├── preturi.astro
│   │   ├── testimoniale.astro
│   │   ├── contact.astro
│   │   ├── confidentialitate.astro
│   │   ├── blog/
│   │   │   ├── index.astro    ← Lista articole cu filtre
│   │   │   └── [slug].astro   ← Articol individual
│   │   └── materii/
│   │       ├── index.astro    ← Hub materii
│   │       └── [slug].astro   ← Pagina individuală materie
│   ├── styles/
│   │   └── global.css         ← Stiluri globale + paletă culori
│   └── content.config.ts      ← Schema colecție blog
├── BLOG-README.md             ← Ghid adăugare articole (non-tehnic)
└── astro.config.mjs
```

---

## Comenzi utile

```bash
npm run dev      # Server local de dezvoltare
npm run build    # Build pentru producție
npm run preview  # Preview al build-ului
```
