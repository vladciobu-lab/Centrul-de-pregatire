# Cum adaugi un articol nou pe blog

Acest ghid e scris pentru cineva care nu e programator. Urmează pașii de mai jos și articolul tău va apărea pe site automat.

---

## Ce ai nevoie

- Un cont GitHub
- Acces la repository-ul site-ului
- 5-10 minute

---

## Pasul 1: Mergi la folderul blogului pe GitHub

1. Deschide repository-ul pe GitHub în browser
2. Navighează la: `src` → `content` → `blog`
3. Vei vedea articolele existente cu extensia `.md`

---

## Pasul 2: Creează un fișier nou

1. Apasă butonul **"Add file"** → **"Create new file"**
2. Dă-i un nume fișierului în format: `titlul-articolului-cu-liniute.md`
   - Exemplu: `cum-inveti-pentru-bac.md`
   - Folosește doar litere mici, cifre și liniuțe (fără spații, fără diacritice în numele fișierului)

---

## Pasul 3: Scrie articolul

Fiecare articol are două părți:

### Partea 1 — Informații despre articol (frontmatter)

Copiază blocul de mai jos la **începutul fișierului** și completează-l:

```
---
title: "Titlul articolului tău"
description: "O scurtă descriere de 1-2 propoziții care apare în lista de articole"
pubDate: 2026-06-15
author: "Echipa Centrul de Pregătire"
category: "Sfaturi învățare"
image: "/blog/numele-imaginii.jpg"
tags: ["tag1", "tag2", "tag3"]
featured: false
---
```

**Categorii disponibile** (scrie exact cum apare, cu diacritice):
- `Evaluare Națională`
- `Bacalaureat`
- `Sfaturi învățare`
- `Pentru părinți`

**featured**: pune `true` dacă vrei să apară în secțiunea specială de pe pagina principală, `false` pentru articole normale.

**pubDate**: formatul este `AAAA-LL-ZZ` (de exemplu `2026-06-15` pentru 15 iunie 2026).

### Partea 2 — Conținutul articolului

După frontmatter (după ultimele `---`), scrie articolul folosind Markdown:

```markdown
Acesta e un paragraf normal. Scrii text liber.

## Titlu de secțiune mare

### Titlu de subsecțiune

- Bullet point 1
- Bullet point 2
- Bullet point 3

**Text cu bold** și *text italic*.

> Ăsta e un citat sau o notă importantă — apare diferit față de restul textului.
```

---

## Pasul 4: Salvează (commit)

1. Derulează în jos pe pagina de pe GitHub
2. La secțiunea **"Commit new file"**, scrie un mesaj scurt, de exemplu: `Adaug articol despre BAC 2026`
3. Apasă **"Commit new file"**

Articolul va apărea pe site în câteva minute (după ce Vercel face deploy automat).

---

## Exemplu complet de articol

```
---
title: "Cum să te organizezi în săptămâna dinaintea BAC-ului"
description: "Sfaturi practice pentru ultima săptămână înainte de Bacalaureat — ce să faci și ce să eviți."
pubDate: 2026-06-10
author: "Echipa Centrul de Pregătire"
category: "Bacalaureat"
image: "/blog/saptamana-bac.jpg"
tags: ["bacalaureat", "organizare", "stres", "sfaturi"]
featured: false
---

Săptămâna dinaintea BAC-ului e grea pentru toată lumea. Ți-e teamă că n-ai învățat destul, vrei să mai revezi totul, dar nu mai ai timp.

## Ce NU să faci

- Să înveți materie nouă pe care nu ai atins-o deloc
- Să stai treaz toată noaptea înainte de probă
- Să citești forumuri cu "ce credeți că pică"

## Ce să faci în schimb

Revizuiește ce știi deja. Consolidarea e mai valoroasă decât înghițitul de materie nouă.

Dormi. Creierul consolidează informațiile în somn — literalmente.

Mănâncă ceva înainte de examen. Sună banal, dar contează.
```

---

## Imagini pentru articole

Dacă vrei să adaugi o imagine la articol:
1. Adaugă fișierul imagine în folderul `public/blog/` (tot prin GitHub, cu "Add file")
2. Folosește același nume în frontmatter: `image: "/blog/numele-imaginii.jpg"`

Formate acceptate: `.jpg`, `.jpeg`, `.png`, `.webp`

---

## Ai nevoie de ajutor?

Dacă ceva nu merge sau ai o întrebare, scrie-ne și te ajutăm.
