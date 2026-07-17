// Site content: subjects, teachers, testimonials, blog, prices.

const SUBJECTS = [{
  slug: 'romana',
  name: 'Limba și Literatura Română',
  short: 'Română',
  tagline: 'De la „nu știu ce să scriu" la eseu care chiar spune ceva.',
  icon: '📖',
  exams: ['EN', 'BAC'],
  en: {
    what: 'Acoperim toată programa de gimnaziu: înțelegerea textului, scriere creativă, gramatică (părți de vorbire, sintaxă), figuri de stil, modurile de expunere.',
    how: 'Începem cu un text împreună, îl citim, îl pufăim, îl întoarcem pe toate părțile până înțelegi exact ce vrea autorul. Apoi exersezi pe subiecte de la examene din anii trecuți.',
    examples: ['Subiectul I, text la prima vedere', 'Compunere despre o întâmplare reală sau imaginară', 'Acordul subiect-predicat când nu e evident', 'Diferența dintre comparație și metaforă']
  },
  bac: {
    what: 'Toată programa de liceu: curentele literare (clasicism → postmodernism), autorii canonici (Eminescu, Caragiale, Rebreanu, Sadoveanu, Călinescu, Blaga, Arghezi, Stănescu și ceilalți), genuri și specii, eseu structurat.',
    how: 'Nu memorăm clișee. Citim textul, vorbim despre el, abia apoi scriem eseul. Așa rămâne ceva în cap și ai ce să livrezi original la examen.',
    examples: ['Eseu despre romanul interbelic („Ion", „Pădurea spânzuraților", „Ultima noapte de dragoste...")', 'Particularitățile unei poezii moderniste', 'Caracterizarea unui personaj din basm cult', 'Subiectul al II-lea, text argumentativ']
  },
  recovery: {
    what: 'Pentru orice clasă, V până la XII. Capitole rămase neînțelese, eseuri care nu îți ies, gramatică care te încurcă, lecturi pe care le-ai sărit și acum nu mai prinzi firul.',
    how: 'Vii cu ce te ține în loc. Lucrăm pe acel capitol până îți intră, apoi recapitulăm cu el la mijloc. Fără să reluăm tot ce ai învățat deja bine.',
    examples: ['Modurile verbale când le-ai pierdut pe la a VII-a', 'Pronumele relativ vs interogativ', 'Cum citești o poezie când nu îți spune nimic', 'Subordonata pe care nu o recunoști']
  }
}, {
  slug: 'matematica',
  name: 'Matematică',
  short: 'Matematică',
  tagline: 'Crezi că matematica nu e pentru tine? Hai să te contrazicem.',
  icon: '📐',
  exams: ['EN', 'BAC'],
  en: {
    what: 'Numere reale, rapoarte și proporții, ecuații și sisteme, funcții, geometria plană (triunghi, patrulater, cerc), arii și volume, statistică simplă.',
    how: 'La fiecare problemă ne uităm întâi ce ne dă, ce ne cere, și ce metodă se potrivește. Cu timpul recunoști tipurile și nu mai blochezi în fața subiectului.',
    examples: ['Subiectul I, exerciții scurte cu variantă', 'Problemă de geometrie cu cerc înscris', 'Funcția de gradul I, graficul și intersecțiile', 'Ecuația de gradul II în Q']
  },
  bac: {
    what: 'Algebră (matrici, determinanți, sisteme), analiză (limite, derivate, integrale), geometrie analitică, combinatorică, numere complexe. Pe profil M1, M2 sau pedagogic, adaptăm.',
    how: 'Pentru fiecare temă: înțelegem ce se întâmplă geometric/intuitiv, apoi formula. Apoi 20-30 de exerciții pe acel tip până devii rapid.',
    examples: ['Integrale prin părți și prin substituție', 'Studiul unei funcții cu derivate', 'Sistem de matrici cu parametru', 'Probabilități în extrageri succesive']
  },
  recovery: {
    what: 'Orice clasă, orice nivel. Pierzi 3 ore din care prinzi o noțiune nouă și nu mai înțelegi nimic după? Așa începem.',
    how: 'Identificăm exact unde s-a rupt firul (uneori e cu 2 ani în urmă). Reparăm acolo, apoi prindem din urmă. Nu sărim peste fundație.',
    examples: ['Fracții care nu îți „intră" de la clasa a V-a', 'Procentele când le calculezi mereu altfel', 'Geometria pe care nu o „vezi"', 'Ecuațiile cu modul']
  }
}, {
  slug: 'logica',
  name: 'Logică, Argumentare și Comunicare',
  short: 'Logică',
  tagline: 'Materia care pare grea pentru că nimeni nu îți spune la ce folosește.',
  icon: '🧠',
  exams: ['BAC'],
  bac: {
    what: 'Tipuri de argumente, raționamentul deductiv și inductiv, propoziții și predicate, silogisme, sofisme. Subiectele de la BAC pe profil uman.',
    how: 'Plecăm de la exemple reale (reclame, discuții, articole) și ajungem la formule. Nu invers. Așa logica devine ceva ce vezi în jurul tău, nu ceva abstract.',
    examples: ['Identificarea premiselor și a concluziei', 'Sofisme frecvente (ad hominem, om de paie)', 'Conversiune și obversiune', 'Silogisme corect formulate vs invalide']
  },
  recovery: {
    what: 'Pentru elevii de liceu care nu „prind" materia din clasă. Recuperare punctuală pe capitolele care te încurcă.',
    how: 'Identificăm capitolul-problemă, lucrăm pe el până îți intră. Apoi facem subiecte tip BAC ca să te asiguri.',
    examples: ['Tabelele de adevăr', 'Argumentarea unei opinii într-un paragraf', 'Identificarea sofismelor în texte date']
  }
}, {
  slug: 'istorie',
  name: 'Istorie',
  short: 'Istorie',
  tagline: 'Dacă o tratezi ca povestire, e ușor. Hai să o tratăm așa.',
  icon: '🏛️',
  exams: ['BAC'],
  bac: {
    what: 'Programa de BAC: spațiul românesc între medieval și modern, secolul XX (cele două războaie, comunismul, 1989), Europa și lumea, instituții.',
    how: 'Construim cronologia ca un fir narativ. De ce s-a întâmplat ceva, nu doar când. Așa rămâne, și ai ce să scrii la eseul de 30 de puncte.',
    examples: ['Eseu despre România în Primul Război Mondial', 'Sursele istorice, analiză și compară', 'Instituțiile statului român modern', 'Războiul Rece și efectele asupra României']
  },
  recovery: {
    what: 'Pentru clasele de liceu. Capitole rămase în urmă, recapitulări înainte de teză, pregătire generală.',
    how: 'Vii cu ce te încurcă, vorbim despre acel context istoric ca despre o poveste, apoi structurăm ce trebuie să știi.',
    examples: ['Constituțiile României', 'Mișcarea pașoptistă pe înțelesul tău', 'România în comunism, etape']
  }
}, {
  slug: 'geografie',
  name: 'Geografie',
  short: 'Geografie',
  tagline: 'Hartă, climă, populație, tot ce pare „învățat pe de rost" are de fapt o logică.',
  icon: '🗺️',
  exams: ['BAC'],
  bac: {
    what: 'Europa și România: relief, climă, hidrografie, vegetație, populație, așezări, economie. Harta, citită corect, nu memorată mecanic.',
    how: 'Lucrăm cu harta în față tot timpul. Înveți să o citești, nu să o memorezi. Diferența se vede la examen, când îți pică un subiect cu hartă mută.',
    examples: ['Identificare unităților de relief pe harta României', 'Climatul temperat-continental, cauze și efecte', 'Bazinele hidrografice principale', 'Populația și migrația post-1990']
  },
  recovery: {
    what: 'Liceu, mai ales clasa a IX-a și a XI-a. Recapitulări pe capitole, ajutor cu tezele, înțelegerea hărții.',
    how: 'Pornim de la capitolul greu, îl facem cu harta și exemple concrete, apoi exersezi.',
    examples: ['Munții Carpați, ce trebuie să știi', 'Statele membre UE, pe regiuni', 'Resursele naturale ale României']
  }
}, {
  slug: 'biologie',
  name: 'Biologie',
  short: 'Biologie',
  tagline: 'Anatomie, genetică, ecologie, explicate ca să-ți rămână, nu ca să le bifezi.',
  icon: '🧬',
  exams: ['BAC'],
  bac: {
    what: 'Programa BAC: anatomia și fiziologia omului (toate sistemele), genetică, ecologie, evoluție. Profil real și uman, adaptăm conținutul.',
    how: 'Pornim de la „cum funcționează" și abia apoi venim cu termenii. Așa rămâne, fiindcă a făcut sens, nu fiindcă l-ai bibilit.',
    examples: ['Sistemul nervos, de la neuron la reflex', 'Genetica, probleme de transmitere a caracterelor', 'Ciclul cardiac pe înțelesul tău', 'Ecosisteme și relații trofice']
  },
  recovery: {
    what: 'Pentru orice clasă, gimnaziu și liceu. Capitole pe care le-ai sărit și acum nu mai prinzi firul.',
    how: 'Reluăm capitolul, facem o schemă vizuală, exersăm. Cu timpul îți construiești în cap harta întregului corp.',
    examples: ['Celula, organite și funcții', 'Reproducerea la plante', 'Sistemul digestiv pas cu pas']
  }
}, {
  slug: 'engleza',
  name: 'Limba Engleză',
  short: 'Engleză',
  tagline: 'De la reguli de gramatică memorate pe de rost la engleză pe care chiar o vorbești.',
  icon: '🇬🇧',
  exams: ['EN', 'BAC'],
  en: {
    what: 'Gramatică (timpuri verbale, condiționale, prepoziții), vocabular tematic, înțelegere de text, scriere de scrisori/eseuri scurte.',
    how: 'Vorbim engleză la fiecare ședință, nu doar despre ea. Exersăm pe texte reale și pe subiecte de la evaluările naționale din anii trecuți.',
    examples: ['Prezent simplu vs continuu, când exact', 'Scrisoare informală după cerințe date', 'Vocabular pentru descrierea unei imagini', 'Comparative și superlative fără greșeli']
  },
  bac: {
    what: 'Toate timpurile verbale, conditionals, reported speech, vocabular avansat, eseu de opinie, înțelegere de text la nivel de BAC.',
    how: 'Lucrăm pe subiecte reale de BAC, corectăm greșelile care revin mereu, și exersăm vorbitul, nu doar scrisul.',
    examples: ['Eseu de opinie structurat', 'Reported speech în context', 'Phrasal verbs frecvente la BAC', 'Conditionals (0, 1, 2, 3) fără confuzii']
  },
  recovery: {
    what: 'Orice clasă. Gramatică rămasă neclară, vocabular sărac, frică de a vorbi.',
    how: 'Pornim de la ce te blochează concret, exersăm oral și scris până devine automat.',
    examples: ['Present Perfect vs Past Simple', 'Prepoziții de loc și timp', 'Vocabular de bază pentru conversație']
  }
}, {
  slug: 'informatica',
  name: 'Informatică',
  short: 'Informatică',
  tagline: 'Programarea pare abstractă doar până scrii primul program care chiar funcționează.',
  icon: '💻',
  exams: ['EN', 'BAC'],
  en: {
    what: 'Algoritmică de bază, pseudocod, noțiuni de programare (C/C++ sau Python, în funcție de programa școlii), structuri de date simple.',
    how: 'Scriem cod de la prima ședință, nu doar teorie. Rezolvăm probleme pas cu pas, de la cele mai simple la cele de evaluare.',
    examples: ['Structuri repetitive (for, while)', 'Șiruri de caractere, operații de bază', 'Funcții simple și recursivitate', 'Probleme tipice de evaluare națională']
  },
  bac: {
    what: 'Programa de BAC la informatică: algoritmi, structuri de date (vectori, matrici, liste), subprograme, recursivitate, fișiere text, pe limbajul studiat (C++/Pascal).',
    how: 'Rezolvăm problemele tip BAC punct cu punct, explicăm logica din spatele fiecărui algoritm, apoi exersezi variante similare.',
    examples: ['Sortare și căutare pe vectori', 'Probleme cu matrici', 'Subprograme cu parametri', 'Prelucrarea fișierelor text']
  },
  recovery: {
    what: 'Pentru orice clasă care a rămas în urmă la programare sau nu înțelege logica algoritmilor.',
    how: 'Reluăm de la noțiunile de bază care lipsesc, scriem cod simplu împreună, apoi urcăm în dificultate.',
    examples: ['Variabile și tipuri de date de la zero', 'Cum gândești un algoritm înainte să scrii cod', 'Depanarea unui program care nu merge']
  }
}];
const TEAM = [{
  id: 'andrei',
  name: 'Andrei P.',
  subject: 'Matematică',
  age: 28,
  bio: 'A făcut Politehnica, a predat la pregătire intensivă 4 ani. Are răbdare cât tot Dobrogea.'
}, {
  id: 'ioana',
  name: 'Ioana M.',
  subject: 'Română & Logică',
  age: 27,
  bio: 'Filologie, masterat în literatură comparată. Crede că orice text are o cheie, doar trebuie găsită.'
}, {
  id: 'tudor',
  name: 'Tudor R.',
  subject: 'Istorie & Geografie',
  age: 31,
  bio: 'Profesor de istorie de 6 ani. Spune că tot ce s-a întâmplat în lume e legat, și o demonstrează la fiecare ședință.'
}, {
  id: 'maria',
  name: 'Maria C.',
  subject: 'Biologie & Matematică (EN)',
  age: 26,
  bio: 'Medicină ani 5, predă paralel pasionată. Explică sistemul nervos cu o foaie A4 și 2 culori.'
}];
const TESTIMONIALS = [{
  id: 't1',
  name: 'Samira Rojin',
  role: 'Elevă',
  subject: 'Logică (BAC)',
  result: 'BAC: 9,15 la logică',
  quote: 'Am luat nota 9,15 in bacalaureat la logică doar datorită ție și nu cred ca as fi reusit sa fac asta fara tine, deoarece nici nu stiam ce fel de materie este logica in prima sedinta de meditatii... indrum cu drag sa mergeti aici. O fata frumoasa, carismatica, isteață si cu foarte multă rabdare. M-as mai intoarce in trecut doar pentru inca cateva sedinte minunate alaturi de tine :)'
}, {
  id: 't2',
  name: 'Sara Al Saleh',
  role: 'Elevă',
  subject: 'Istorie (BAC)',
  quote: 'Raluca este un meditator excelent, m-a ajutat să înțeleg materia la istorie în mai puțin de 4 luni până la BAC. Am primit explicații pe înțelesul meu, fără metoda învechită de învățare. Am văzut în Raluca un mentor dedicat, răbdător, cu o abordare modernă!'
}, {
  id: 't3',
  name: 'Elena Ezariu',
  role: 'Elevă',
  subject: 'Bacalaureat',
  quote: 'Deși m-am alăturat la jumătatea anului, am găsit aici tot sprijinul de care aveam nevoie. Explicațiile sunt clare, atmosfera plăcută, iar la bacalaureat am avut un rezultat foarte bun. Recomand cu drag!'
}, {
  id: 't4',
  name: 'Vlad Malureanu',
  role: 'Elev',
  subject: 'Pregătire BAC',
  quote: 'Nu pot spune decât cuvinte de laudă. Cea mai bună profesoară cu cele mai bune rezultate. Este o experiență unică deoarece lucrează din plăcere și are cele mai bune explicații. Recomand!'
}, {
  id: 't5',
  name: 'Vasile Iulian',
  role: 'Elev',
  subject: 'Meditații',
  quote: 'Recomand cu încredere meditațiile. Materia e predată pe înțeles și se învață foarte repede și ușor.'
}, {
  id: 't6',
  name: 'Livia Nadrag',
  role: 'Local Guide Google',
  subject: 'Meditații',
  quote: 'Nu pot spune decât cuvinte de laudă. Recomand din suflet! Super om, super profesor!'
}, {
  id: 't7',
  name: 'Thelanis',
  role: 'Elev',
  subject: 'Logică (BAC)',
  result: 'Toată materia în 2 luni',
  quote: 'În mai puțin de 2 luni am reușit să învăț toată materia la logică!'
}];
const PRICES = [{
  id: 'individual',
  title: 'O ședință pe săptămână',
  price: '100',
  unit: 'lei / ședință',
  duration: '1h 45 min',
  bullets: ['Grupă mică de 2-3 elevi', 'Materiale incluse, fișe, subiecte', 'Tu alegi ritmul și frecvența'],
  cta: 'Vreau să încerc'
}, {
  id: 'intensiv',
  title: 'Pachet intensiv săptămânal',
  price: '250',
  unit: 'lei / săptămână',
  duration: '3 ședințe a câte 1h 45 min',
  featured: true,
  bullets: ['Pentru cei care au nevoie de progres rapid', 'Grupă mică de 2-3 elevi', 'Decis împreună după ședința de cunoaștere', 'Cu materia structurată săptămânal'],
  cta: 'Spune-mi mai multe'
}, {
  id: 'gratuit',
  title: 'Ședință de cunoaștere',
  price: '0',
  unit: 'gratuit',
  duration: '1h, 1h 45 min',
  badge: 'GRATUIT',
  bullets: ['Test inițial complet pe toată materia', 'Acoperim teoreme, principii, moduri de rezolvare', 'Vedem împreună unde stai și ce ai nevoie', 'Fără obligații, fără costuri'],
  cta: 'Programează acum'
}];
const BLOG = [{
  slug: 'cum-te-apuci-de-invatat',
  title: 'Cum te apuci de învățat când simți că nu mai poți',
  date: '2026-03-12',
  author: 'Ioana M.',
  category: 'Sfaturi învățare',
  excerpt: 'Dacă te uiți la cartea de matematică și simți că ți se face rău, nu ești singur. Hai să vorbim despre ce funcționează când totul pare imposibil.',
  body: `Hai să fim sinceri o secundă. Dacă te-ai uitat la cartea de mate sau la programa de BAC și ți-a venit să închizi laptopul și să nu mai vezi nimic, știm cum e. Și noi am fost acolo. Și mulți dintre elevii noștri au venit prima dată exact din locul ăsta.

## De ce e atât de greu să te apuci

Nu e că ești leneș. Nu e că „nu îți place învățatul". Creierul tău încearcă să te protejeze de ceva care i se pare uriaș și imposibil. E o reacție umană, nu un defect personal.

Problema e că atunci când amâni, lucrul ăla crește. Capitolul rămas neînțeles devine două capitole. Două devin patru. Și după o lună te uiți la materia totală și simți că „nu mai e nimic de făcut".

Vestea bună: **mai e mult de făcut**. Doar trebuie să începi mic.

## Începe ridicol de mic

Serios. Ridicol de mic.

- 15 minute. Nu 2 ore.
- O singură problemă. Nu un capitol.
- O singură formulă. Nu toată algebra.

Lucrul ăsta nu sună impresionant, dar funcționează din două motive. Primul: pleci. E partea cea mai grea. Al doilea: după 15 minute deja ești în ritm și ai chef să mai faci 15.

## Identifică ce nu înțelegi, exact

„Nu înțeleg mate" e prea vag. Nu poți repara așa ceva.

„Nu înțeleg cum se rezolvă ecuațiile de gradul II când b² - 4ac < 0", asta e ceva concret. Asta îți spune exact unde să te uiți. Asta poți cere ajutor cu.

> Pune-ți întrebarea: dacă ar trebui să-i explici asta unui prieten chiar acum, unde te-ai bloca primul?

Acolo e fisura. Acolo trebuie să mergi.

## Nu te uita la cei mai buni din clasă

Comparația cu ceilalți e capcana cea mai mare. Tu ai pornit de unde ai pornit. Ai propriul tău drum. Cineva care pare că „știe tot" probabil are 2 ani de muncă pe care nu îi vezi. Sau pur și simplu îi vine ușor materia asta, dar e încurcat la altă materie unde tu ești OK.

Compară-te cu tine de săptămâna trecută. Atât.

## Cere ajutor mai devreme decât crezi

Cei mai mulți elevi vin la noi când deja sunt panicați și au pierdut luni întregi. E în regulă, lucrăm și de acolo. Dar e mult mai ușor dacă vii când abia a început să se rupă firul.

Nu există o linie după care „e prea târziu". Dar e o linie după care îți cere mult mai puțin efort să recuperezi. Aceea linie e mai aproape decât crezi.

## Concret: ce poți face azi

1. Deschide-ți caietul de la materia care te sperie cel mai tare.
2. Citește titlul ultimei lecții pe care ai înțeles-o complet.
3. Citește titlul primei lecții la care te-ai pierdut.
4. Acolo, exact, e locul de unde trebuie să pornești.

Atât. Mâine te apuci de prima lecție de pe care te-ai pierdut. Și mâine vorbim de mâine.

Dacă vrei ajutor concret, suntem aici. Prima ședință e gratuită, folosim 1-2 ore să vedem împreună exact unde stai și ce poți face. Fără presiune, fără să-ți promitem că „totul va fi bine în 2 săptămâni". Realist și uman.`
}, {
  slug: 'ghidul-parintelui',
  title: 'Ghidul părintelui: ce să faci când copilul „nu înțelege" matematica',
  date: '2026-02-20',
  author: 'Andrei P.',
  category: 'Pentru părinți',
  excerpt: 'Vine acasă cu note mici, zice că „nu pricepe nimic", iar tu nu mai știi cum să-l ajuți fără să te enervezi sau să-l descurajezi. Iată un ghid practic.',
  body: `Ai venit aici pentru că ești îngrijorat. Asta e deja semn bun, copilul tău are pe cineva care îi pasă. Mulți copii nu au asta.

## Primul lucru: nu mai folosi cuvântul „rău" sau „slab"

Știu, e tentant. Vine acasă cu un 4, te enervezi, îi scapă „dar tu chiar nu pricepi nimic". Sau zicând altcuiva la telefon, în prezența lui: „e mai slab la mate". Crede-mă, **aude** și **memorează**.

În câteva luni, copilul tău se va prezenta singur ca „rău la matematică". Și după aia, când stă în fața unei probleme, primul gând va fi: „oricum sunt rău la mate, ce rost are". Și nu va încerca.

Asta e cea mai mare frână pe care o pune un părinte fără să vrea.

## Întreabă-l ce nu înțelege, concret

În loc de „de ce iar 5?" încearcă: „arată-mi un exercițiu de la teză. Care a fost cel mai greu? Ce ți-a venit în cap când l-ai văzut?".

Vei descoperi rapid că:
- Fie nu înțelege un concept de fundament (de la clasa a V-a, a VI-a)
- Fie are o frică concretă (de profesor, de a fi întrebat, de a se face de râs)
- Fie pur și simplu nu și-a făcut temele

Toate trei se rezolvă diferit. Dar întâi trebuie să le identifici.

## Nu îi face tu temele

Tentația e mare. „Hai că ți-o fac eu, oricum nu pricepi, măcar nu mai stăm până la 11". Înțeleg.

Dar dacă faci asta:
- El nu învață nimic
- Tu te enervezi că „de ce trebuie să fac eu mate la 35 de ani"
- Profesorul vede temele perfecte și crede că pricepe, deci accelerează, și el rămâne și mai în urmă

E mai bine să nu facă tema deloc decât să o faci tu pentru el.

## Caută ajutor calificat înainte să fie criză

Dacă vezi că nota scade 2 trimestre la rând la aceeași materie, nu mai aștepta să „treacă de la sine". Nu trece.

Un meditator nu înseamnă că ești părinte rău. Înseamnă că ești părinte atent. Profesoara de la școală are 28 de elevi de explicat și 3 clase paralele. Nu poate să se oprească 20 de minute la fiecare ca să-i explice altfel.

## Ce să cauți la un meditator

- **Test inițial.** Dacă te primește direct la ședință fără să vadă unde stă copilul, e suspect.
- **Onestitate.** Dacă îți promite „nota 10 garantat în 2 luni", fugi. Nimeni nu poate promite asta.
- **Răbdare.** Întreabă-ți copilul după prima ședință cum s-a simțit. Dacă spune că „era nervos că nu pricepeam", nu e omul potrivit.

> Noi facem mereu o ședință de cunoaștere gratuită la început. Nu ca să te convingem, ci ca să fim sinceri unul cu altul de la început.

## Răbdare. Mai multă decât crezi.

Recuperarea durează. Dacă a strâns goluri de 2 ani, nu le acoperă în 4 ședințe. Dar le acoperă în 4 luni, dacă lucrează constant. Asta e investiția, nu doar bani, ci timp și răbdare.

Și un ultim lucru: copilul tău nu e „mai slab" decât cel al vecinilor. Doar a avut un drum diferit. Plecăm de unde e el și ajungem unde trebuie să ajungă.`
}, {
  slug: 'mituri-bacalaureat',
  title: '5 mituri despre Bacalaureat care te sperie degeaba',
  date: '2026-01-15',
  author: 'Tudor R.',
  category: 'Bacalaureat',
  excerpt: 'Circulă tot felul de povești despre BAC: că „te ia pe ce nu te aștepți", că „nu pică nimic din ce ai învățat". Hai să le luăm pe rând.',
  body: `Dacă ești în clasa a XII-a, probabil ai auzit deja multe lucruri despre BAC. Unele sunt adevărate. Multe, nu.

## Mit 1: „Subiectele sunt mereu pe ce nu te aștepți"

Fals. BAC-ul are o programă publică, structurată, predictibilă. Subiectele anilor trecuți sunt disponibile pe site-ul Ministerului. Tipurile de probleme se repetă. Greutatea variază puțin de la an la an, dar structura e aceeași.

Dacă te-ai pregătit pe variantele oficiale și ai înțeles fiecare tip de subiect, **nu o să fii surprins**. Vei recunoaște ce ți se cere.

## Mit 2: „Trebuie să știi totul perfect"

Fals. Pragul de promovare e 5. Pragul de „bine" e 7. Pragul de „foarte bine" e 9. Nu trebuie să iei 10 la toate.

Ce trebuie să faci: să identifici ce poți rezolva sigur, să te asiguri că acele subiecte îți ies, apoi să încerci celelalte. Mulți elevi pierd puncte la lucruri pe care le știu, pentru că s-au panicat și au sărit direct la cele grele.

## Mit 3: „Dacă nu ai luat note bune toată liceala, nu mai ai șanse"

Fals total. Vedem an de an elevi care au avut note de 6-7 toată liceala și au luat 8.50 la BAC. Și invers. Notele de pe parcurs nu garantează nimic.

BAC-ul e o muncă concentrată pe câteva luni. Cei care lucrează serios din februarie-martie, chiar dacă au pornit slab, pot ajunge la note bune. Mai ales dacă au cineva care îi structurează.

## Mit 4: „Nu ai timp să recuperezi după Crăciun"

Fals. Mai ai 5 luni. Cu un ritm de 6-8 ore pe săptămână la materia de bază, plus alte 3-4 la celelalte, recuperezi enorm. Nu „totul", dar destul cât să treci comod.

> Important: planificarea face diferența. Nu sări de la o materie la alta haotic. Stabilește un plan pe luni: în martie facem asta, în aprilie asta, în mai recapitulăm tot.

## Mit 5: „Dacă pici la una, picată tot BAC-ul"

Adevărat doar parțial. Da, trebuie să iei minim 5 la fiecare materie. Dar:
- Ai sesiune de toamnă unde dai doar materia pe care ai picat-o
- Multe facultăți acceptă admiterea pe baza notelor din liceu, fără BAC luat în prima sesiune

Picarea în iunie nu e finalul. E doar o amânare cu 2 luni.

## Concret: ce să faci dacă ești în panică acum

1. Fă un test pe variantele oficiale de anul trecut, **cu cronometru**. Vezi exact unde stai.
2. Identifică 2-3 capitole pe care le poți recupera rapid. Acelea îți aduc cele mai multe puncte cu cel mai mic efort.
3. Lucrează săptămânal pe varianta de examen, nu doar pe teorie.

Și respiră. E un examen. Nu e finalul vieții tale. Indiferent cum iese, ai opțiuni după.`
}, {
  slug: 'calendar-admitere-2026',
  title: 'Calendar admitere liceu 2026, pas cu pas',
  date: '2025-12-08',
  author: 'Ioana M.',
  category: 'Evaluare Națională',
  excerpt: 'Calendarul Evaluării Naționale și al admiterii la liceu pe 2026, explicat pas cu pas. Ce, când și unde, fără birocrațe.',
  body: `Suntem la jumătatea anului școlar și deja se vorbește despre EN și admitere. Hai să punem lucrurile în ordine, ce se întâmplă, când, și ce trebuie să faci tu.

## Cronologie generală (orientativă, pe baza anilor precedenți)

Ministerul publică oficial calendarul în noiembrie-decembrie. Cifrele pot varia cu câteva zile, dar structura rămâne aceeași.

### Mai - iunie 2026
**Simularea EN.** Toate școlile dau o simulare cu subiecte tip examen. E gratuită. **Fă-o serios.** E cel mai bun „raport" pe care îl ai despre cât stai cu materia.

### 22-25 iunie 2026 (aproximativ)
**Evaluarea Națională.** Probele:
- Luni: Limba și Literatura Română
- Miercuri: Matematică
- Vineri: Limba maternă (acolo unde e cazul)

### 28 iunie - 1 iulie 2026
**Afișarea rezultatelor inițiale.** Te uiți pe pagina școlii sau pe edu.ro.

### 1-4 iulie 2026
**Contestațiile.** Dacă crezi că ești subevaluat la o probă, depui contestație. Recorectarea poate să crească sau să scadă nota. Decide-te după ce vezi cu cât ai trecut de prag.

### 5-7 iulie 2026
**Rezultatele finale după contestații.**

### 8-12 iulie 2026
**Completarea fișei de admitere.** Aici alegi tu liceele și specializările în ordinea preferinței. **Asta e momentul critic.** Greșeala aici nu mai are întoarcere.

### 15-17 iulie 2026
**Repartiția computerizată.** Vezi unde ai intrat.

## Sfaturi reale pentru completarea fișei

Asta e partea pe care părinții o subestimează cel mai mult. Nu e doar o formalitate.

**1. Pune mai multe opțiuni decât crezi că ai nevoie.** Câmpul are 100 de poziții. Fă măcar 30-40. Dacă pui doar 5, riști să nu intri nicăieri și să fii repartizat aleator.

**2. Ordinea contează imens.** Calculatorul te repartizează la prima opțiune unde îți permite media. Deci pune-le în **ORDINEA TA DE PREFERINȚĂ**, nu în ordinea mediilor de admitere.

**3. Verifică mediile de admitere din anii trecuți.** Sunt publice. Nu te baza pe „auzeam că X liceu e bun". Uită-te la cifrele reale.

**4. Pune și opțiuni de „rezervă".** Licee cu medii mai mici pe ultimele poziții. Așa nu rămâi pe afară.

## Ce calculează nota finală

Nota de admitere = 80% media EN + 20% media generală claselor V-VIII.

Deci da, EN cântărește mult, dar și ce ai făcut în gimnaziu contează. Și e prea târziu să mai schimbi mediile gimnaziale. **Tot ce mai poți face acum e EN.**

## Ce poți face tu între acum și mai

- **Identifică unde stai.** Fă o simulare cinstită acasă, cu cronometru. Vezi nota.
- **Stabilește unde vrei să ajungi.** Ce medie îți trebuie pentru liceul vizat?
- **Calculează diferența.** Dacă acum iei 6 și vrei 8, ai de muncă, dar e fezabil. Cu 4 luni de lucru serios.
- **Cere ajutor dacă e nevoie.** Cu cât mai devreme, cu atât mai puțin stres pe final.

Programează o ședință de cunoaștere gratuită cu noi dacă vrei să vedem împreună exact unde stai. Facem testul, vorbim cu părinții, vă spunem realist ce se poate face. Fără promisiuni goale.`
}];
window.SUBJECTS = SUBJECTS;
window.TEAM = TEAM;
window.TESTIMONIALS = TESTIMONIALS;
window.PRICES = PRICES;
window.BLOG = BLOG;
