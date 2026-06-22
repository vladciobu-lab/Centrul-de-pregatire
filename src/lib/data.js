export const testimoniale = [
  {
    id: 1,
    nume: "Andrei M.",
    rol: "Elev, clasa a 8-a",
    materie: "Matematică",
    rezultat: "Nota 9.20 la EN",
    citat:
      "Sincer, în martie eram convins că nu iau Evaluarea la matematică. Nu înțelegeam geometria deloc și nici nu mai îndrăzneam să ridic mâna la ore. Am venit la Centrul de Pregătire mai mult ca să mai câștig timp. Și cumva... am și câștigat și am înțeles. Am luat 9.20. Nici eu nu credeam.",
    tip: "elev",
  },
  {
    id: 2,
    nume: "Maria D.",
    rol: "Elevă, clasa a 12-a",
    materie: "Română",
    rezultat: "BAC promovat cu 8.40 la Română",
    citat:
      "Mă temeam cel mai mult de eseul argumentativ. Nu știam cum să structurez ideile și ieșea haotic. Am lucrat câteva săptămâni pe structura eseului și pe modele de argumentare. La BAC am scris îngrijit și coerent — eram atât de mândră de mine după examen. Nu m-a lăsat nimeni să cred că nu pot, chiar și când eu nu credeam.",
    tip: "elev",
  },
  {
    id: 3,
    nume: "Vlad T.",
    rol: "Elev, clasa a 12-a",
    materie: "Matematică",
    rezultat: "BAC promovat, nota 7.80",
    citat:
      "Eram cel care la simulare luase 4.20 și renunțase psihic la matematică. Am venit la meditații fără mari speranțe. Ceea ce m-a surprins a fost că nimeni nu m-a tratat de sus — pur și simplu mi-au explicat de la zero, fără să facă un caz din faptul că nu știam lucruri pe care ar fi trebuit să le știu. Am luat 7.80 la BAC.",
    tip: "elev",
  },
  {
    id: 4,
    nume: "Elena P.",
    rol: "Mamă, fiica în clasa a 9-a",
    materie: "Matematică",
    rezultat: "Recuperare completă capitol funcții",
    citat:
      "Fiica mea a venit de la examenul de admitere la liceu destul de demoralizată și în prima lună de liceu a rămas în urmă la matematică. Am venit la centru nu știind la ce să mă aștept. Ceea ce m-a convins a fost ședința de cunoaștere — am văzut exact ce nu înțelege și de ce, și a ieșit cu un plan concret. Acum merge la matematică fără frică.",
    tip: "parinte",
  },
  {
    id: 5,
    nume: "Cristina M.",
    rol: "Mamă, fiu în clasa a 7-a",
    materie: "Română",
    rezultat: "Îmbunătățit notele de la 5 la 7",
    citat:
      "Fiul meu nu era interesat de română deloc — spunea că nu îi place și că nu înțelege de ce trebuie să analizeze texte. La Centrul de Pregătire ceva s-a schimbat. Nu știu ce au făcut altfel, dar a venit acasă și mi-a povestit despre romanul pe care îl studiaseră. Asta mi s-a părut un miracol pentru el.",
    tip: "parinte",
  },
  {
    id: 6,
    nume: "Bogdan I.",
    rol: "Tată, fiică în clasa a 8-a",
    materie: "Matematică și Română",
    rezultat: "EN trecut cu medii peste 7",
    citat:
      "Am venit în februarie, destul de târziu. Eram îngrijorat că nu e destul timp. Mi s-a spus sincer că e strâns, dar că se poate face ceva. Mi-a plăcut că nu mi-au promis note mari ca să iau banii — au spus exact ce pot și ce nu pot în 4 luni. Fiica mea a trecut Evaluarea, ceea ce era obiectivul.",
    tip: "parinte",
  },
  {
    id: 7,
    nume: "Ioana C.",
    rol: "Elevă, clasa a 6-a",
    materie: "Matematică",
    rezultat: "Recuperat capitolul fracții și proporții",
    citat:
      "Rămăsesem cu o gaură la fracții din clasa a 5-a și nu am spus nimănui, că mi se părea rușinos. Profa de la școală mergea prea repede și îmi era teamă să întreb. Aici am putut să întreb orice, de câte ori era nevoie. Am înțeles până la urmă, și acum mă descurc singură.",
    tip: "recuperare",
  },
  {
    id: 8,
    nume: "Mihai S.",
    rol: "Elev, clasa a 5-a",
    materie: "Matematică",
    rezultat: "Nota 9 la lucrare după 3 ședințe",
    citat:
      "La mine a fost simplu: nu înțelesesem ecuațiile și de acolo nu mai prea urmăream nimic. Am venit la 3 ședințe, am înțeles ecuațiile de la capăt, și am luat 9 la lucrarea de la școală. Nu credeam că se poate atât de repede.",
    tip: "recuperare",
  },
];

export const materii = [
  {
    slug: "romana",
    titlu: "Limba și Literatura Română",
    icon: "📖",
    culoare: "bg-primary/10 text-primary",
    descriere: "Analiză literară, eseuri, gramatică — pentru EN și BAC.",
    examene: ["EN", "BAC"],
  },
  {
    slug: "matematica",
    titlu: "Matematică",
    icon: "🔢",
    culoare: "bg-secondary/10 text-secondary",
    descriere: "De la fracții la funcții — lucrăm de unde ai nevoie.",
    examene: ["EN", "BAC"],
  },
  {
    slug: "logica",
    titlu: "Logică, Argumentare și Comunicare",
    icon: "🧠",
    culoare: "bg-primary/10 text-primary",
    descriere: "Materie de BAC mai puțin familiară, dar abordabilă.",
    examene: ["BAC"],
  },
  {
    slug: "istorie",
    titlu: "Istorie",
    icon: "🏛️",
    culoare: "bg-secondary/10 text-secondary",
    descriere: "Perioade, evenimente, eseuri — structurate clar.",
    examene: ["BAC"],
  },
  {
    slug: "geografie",
    titlu: "Geografie",
    icon: "🗺️",
    culoare: "bg-primary/10 text-primary",
    descriere: "Hărți, procese fizice, geografie umană — fără tocit pe de rost.",
    examene: ["BAC"],
  },
  {
    slug: "biologie",
    titlu: "Biologie",
    icon: "🌿",
    culoare: "bg-secondary/10 text-secondary",
    descriere: "Celulă, genetică, anatomie — înțeles, nu memorat.",
    examene: ["BAC"],
  },
];

export const faq = [
  {
    intrebare: "De unde începem dacă elevul e mult în urmă?",
    raspuns:
      "Începem cu o ședință gratuită de cunoaștere și un test inițial scurt. Nu ca să judecăm, ci ca să vedem exact unde se află. Pornind de acolo, construim un plan realist — ce se poate face și în cât timp.",
  },
  {
    intrebare: "Cum funcționează ședința gratuită?",
    raspuns:
      "Prima ședință e gratuită și fără obligații. Discutăm cu elevul (și cu părintele dacă vrea), facem un test scurt și stabilim împreună dacă și cum putem ajuta. Nu există presiune să continuați.",
  },
  {
    intrebare: "Lucrați și cu elevi de gimnaziu, nu doar liceu?",
    raspuns:
      "Da. Lucrăm cu elevi din clasele 5-12. Pregătirea pentru EN la clasa a 8-a, recuperare în orice clasă, sau pregătire din timp — toate sunt binevenite.",
  },
  {
    intrebare: "Ce se întâmplă dacă elevul nu progresează?",
    raspuns:
      "Dacă după câteva ședințe nu vedem progres, discutăm deschis. Uneori ajustăm abordarea, alteori recunoaștem că nu suntem potrivirea corectă — și spunem asta sincer, fără să prelungim inutil.",
  },
  {
    intrebare: "Puteți garanta o notă minimă?",
    raspuns:
      "Nu garantăm note — pentru că nu există garanții în niciun domeniu unde depinde și de efortul elevului. Ce putem garanta: pregătire serioasă, feedback constant, și onestitate despre ce e realist.",
  },
  {
    intrebare: "Cum se plătește și câte ședințe pe săptămână?",
    raspuns:
      "Plata se face per ședință sau lunar, în funcție de preferință. Numărul de ședințe depinde de nevoie — de obicei 1-2 pe săptămână, mai frecvent în perioada de dinaintea examenelor.",
  },
];
