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
}, {
  id: 't8',
  name: 'Alexia Ors',
  role: 'Elevă',
  subject: 'Logică & Română (BAC)',
  result: 'BAC: 9,45 la logică',
  quote: 'Am luat nota 9,45 la examenul de bacalaureat la Logică și nu cred că aș fi reușit dacă mergeam în altă parte. Mi s-a explicat de fiecare dată când a fost nevoie, până am înțeles. Recomand atât pregătirea la Logică, cât și la Limba și literatura română. Fără ajutorul Ralucăi, nu aș fi reușit niciodată să rețin poeziile și chiar să ajung în punctul de a le înțelege.'
}, {
  id: 't9',
  name: 'Elmas Efetekin',
  role: 'Părinte',
  subject: 'Meditații',
  quote: 'Am ramas foarte mulțumiți ce acest centru. Profesori bine pregătiți din toate punctele de vedere care își fac treaba cu devotament și pasiune. Va multumim mult.'
}, {
  id: 't10',
  name: 'Delia Rusan',
  role: 'Elevă',
  subject: 'Matematică (BAC)',
  quote: 'Cu ajutorul domnului profesor de matematică am reușit să obțin un rezultat peste așteptările mele la examenul de bac. Mulțumesc frumos! Recomand cu drag!'
}, {
  id: 't11',
  name: 'A C',
  role: 'Elevă',
  subject: 'Logică (BAC)',
  result: 'BAC: 9,50 la logică',
  quote: 'Cea mai bună alegere pentru bac! Cu ajutorul doamnei profesoare, am reușit să obțin nota 9,50 la logică! O recomand din tot sufletul pentru că este o persoană super dedicată, implicată și devotată. A fost extrem de răbdătoare ori de câte ori am avut nelămuriri și a transformat studiul într-o experiență relaxată, fără stres. Îi mulțumesc mult pentru tot sprijinul acordat și sunt convinsă că oricine va lucra cu dumneaei va avea parte de rezultate excepționale!!'
}, {
  id: 't12',
  name: 'Ana Maria Zanet',
  role: 'Elevă',
  subject: 'Meditații',
  quote: 'O profesoară dedicată, care explică foarte clar și face orele interesante. O recomand cu încredere! Cea mai bună este!!'
}, {
  id: 't13',
  name: 'Maria Irimia',
  role: 'Elevă',
  subject: 'Logică (BAC)',
  result: 'BAC: 9,90 la logică',
  quote: 'Cu ajutorul doamnei profesoare de Logică, Argumentare și Comunicare am obținut nota 9,90 la proba de bacalaureat. O recomand din tot sufletul! Este o profesoară dedicată, implicată și devotată. Nu urmărește doar să predea materia, ci se asigură că fiecare elev o înțelege cu adevărat. Explică foarte clar și coerent, este calmă și pune accent pe învățarea logică, nu pe memorare. Ori de câte ori am avut nelămuriri sau am avut nevoie de sprijin, m-a îndrumat cu răbdare și mi-a explicat până am înțeles. Îi mulțumesc pentru tot ajutorul oferit și o recomand cu toată încrederea! Sunt convinsă că, alături de dumneaei, rezultatele vor fi foarte exceptionale.'
}, {
  id: 't14',
  name: 'Loredana Vântu',
  role: 'Elevă',
  subject: 'Meditații',
  quote: 'Profesorii sunt tineri, implicați și explică într-un mod ușor de înțeles. Pentru mine a contat mult că nu există presiune sau judecată atunci când greșeam.'
}, {
  id: 't15',
  name: 'Geta Deac',
  role: 'Elevă',
  subject: 'Meditații',
  quote: 'Recomand cu mare drag! Explicațiile sunt foarte clare, iar atmosfera este una calmă și prietenoasă.'
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
// Shared components: Header, Footer, WhatsApp, Button, Card, SectionTitle, etc.
const {
  useState,
  useEffect,
  useRef,
  useMemo
} = React;
const WHATSAPP_URL = 'https://wa.me/40721628936?text=Bun%C4%83!%20Sunt%20interesat%20de%20medita%C8%9Bii%20la%20Centru%20de%20preg%C4%83tire';
const PHONE = '+40 721 628 936';
const EMAIL = 'contact@centrudepregatire.ro';
const ADDRESS = 'Strada Soveja nr. 90, Constanța';

// ---------- Navigation hook ----------
function useRoute() {
  const [route, setRoute] = useState(() => window.location.hash.replace(/^#\/?/, '') || 'acasa');
  useEffect(() => {
    const onHash = () => {
      setRoute(window.location.hash.replace(/^#\/?/, '') || 'acasa');
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return [route, r => {
    window.location.hash = '#/' + r;
  }];
}
function nav(href) {
  window.location.hash = '#/' + href;
}

// ---------- Reveal on scroll ----------
function Reveal({
  children,
  delay = 0,
  className = ''
}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => el.classList.add('in'), delay);
        io.disconnect();
      }
    }, {
      threshold: 0.12
    });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: 'reveal ' + className
  }, children);
}

// ---------- Buttons ----------
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon,
  ...rest
}) {
  const base = 'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 whitespace-nowrap';
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-[15px]',
    lg: 'px-7 py-3.5 text-base'
  };
  const variants = {
    primary: 'bg-bordo text-cream hover:bg-bordo-deep shadow-soft hover:shadow-card-hover',
    secondary: 'bg-teal text-white hover:bg-teal-deep shadow-soft',
    outline: 'border border-bordo/30 text-bordo hover:bg-bordo hover:text-cream',
    ghost: 'text-bordo hover:bg-bordo/5',
    cream: 'bg-cream-warm text-bordo border border-cream-deep hover:bg-cream-deep',
    whatsapp: 'bg-[#075E54] text-white hover:bg-[#054c44] shadow-soft'
  };
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon, /*#__PURE__*/React.createElement("span", null, children));
  if (href) return /*#__PURE__*/React.createElement("a", {
    href: href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('#/') ? href : '#/' + href,
    onClick: onClick,
    className: cls,
    ...rest
  }, content);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    className: cls,
    ...rest
  }, content);
}

// ---------- Section Title ----------
function SectionTitle({
  kicker,
  title,
  subtitle,
  align = 'center',
  dark = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} mb-12 md:mb-16`
  }, kicker && /*#__PURE__*/React.createElement("div", {
    className: `flourish mb-4 text-xs uppercase tracking-[0.25em] font-medium ${dark ? 'text-rose' : ''}`
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    className: `serif-h text-4xl md:text-5xl lg:text-[3.25rem] mb-4 ${dark ? 'text-cream' : 'text-bordo-deep'}`
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    className: `text-lg md:text-xl leading-relaxed ${dark ? 'text-cream/80' : 'text-ink-muted'}`
  }, subtitle));
}

// ---------- Card ----------
function Card({
  children,
  className = '',
  hover = true,
  padded = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `bg-white rounded-2xl shadow-card ${hover ? 'hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300' : ''} ${padded ? 'p-6 md:p-8' : ''} ${className}`
  }, children);
}

// ---------- Logo ----------
function Logo({
  size = 'md',
  linked = true
}) {
  const sizes = {
    sm: 'h-11 w-11',
    md: 'h-12 w-12',
    lg: 'h-20 w-20',
    xl: 'h-40 w-40'
  };
  const txt = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-3xl',
    xl: 'text-5xl'
  };
  const sub = {
    sm: 'text-[8px]',
    md: 'text-[9px]',
    lg: 'text-xs',
    xl: 'text-sm'
  };
  const inner = /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-2.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: `${sizes[size]} relative flex-shrink-0 block`
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-emblem.webp",
    alt: "Centru de pregătire Constanța",
    className: "absolute inset-0 w-full h-full object-contain"
  })), /*#__PURE__*/React.createElement("span", {
    className: "flex flex-col leading-none"
  }, /*#__PURE__*/React.createElement("span", {
    className: `serif-h ${txt[size]} text-bordo-deep leading-[1.05] whitespace-nowrap`
  }, "Centru de pregătire"), /*#__PURE__*/React.createElement("span", {
    className: `${sub[size]} uppercase tracking-[0.3em] text-teal-deep font-semibold mt-1`
  }, "Constanța")));
  return linked ? /*#__PURE__*/React.createElement("a", {
    href: "#/acasa",
    className: "flex items-center"
  }, inner) : inner;
}

// ---------- Header ----------
function Header({
  route
}) {
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
  }, [route]);
  const NavLink = ({
    to,
    children,
    active
  }) => /*#__PURE__*/React.createElement("a", {
    href: '#/' + to,
    className: `nav-link text-[17px] font-semibold ${active ? 'text-bordo active' : 'text-ink hover:text-bordo'} transition-colors`
  }, children);
  return /*#__PURE__*/React.createElement("header", {
    className: `sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-cream/95 backdrop-blur shadow-sm' : 'bg-cream/80 backdrop-blur'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 md:px-6 lg:px-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between h-[72px]"
  }, /*#__PURE__*/React.createElement(Logo, {
    size: "md"
  }), /*#__PURE__*/React.createElement("nav", {
    className: "hidden lg:flex items-center gap-8"
  }, /*#__PURE__*/React.createElement(NavLink, {
    to: "acasa",
    active: route === 'acasa' || route === ''
  }, "Acasă"), /*#__PURE__*/React.createElement(NavLink, {
    to: "despre",
    active: route === 'despre'
  }, "Despre"), /*#__PURE__*/React.createElement(NavLink, {
    to: "preturi",
    active: route === 'preturi'
  }, "Prețuri"), /*#__PURE__*/React.createElement(NavLink, {
    to: "contact",
    active: route === 'contact'
  }, "Contact")), /*#__PURE__*/React.createElement("div", {
    className: "hidden lg:flex items-center"
  }, /*#__PURE__*/React.createElement(Button, {
    href: "contact",
    variant: "primary",
    size: "md"
  }, "Ședință gratuită")), /*#__PURE__*/React.createElement("button", {
    className: "lg:hidden p-2 -mr-2",
    onClick: () => setMobileOpen(!mobileOpen),
    "aria-label": "Meniu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-6 h-5 relative"
  }, /*#__PURE__*/React.createElement("span", {
    className: `absolute h-0.5 w-full bg-bordo top-0 transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`
  }), /*#__PURE__*/React.createElement("span", {
    className: `absolute h-0.5 w-full bg-bordo top-1/2 -translate-y-1/2 transition-opacity ${mobileOpen ? 'opacity-0' : ''}`
  }), /*#__PURE__*/React.createElement("span", {
    className: `absolute h-0.5 w-full bg-bordo bottom-0 transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`
  }))))), /*#__PURE__*/React.createElement("div", {
    className: `lg:hidden overflow-hidden transition-all duration-300 ease-out ${mobileOpen ? 'max-h-[calc(100vh-72px)] border-t border-cream-deep' : 'max-h-0'}`
  }, /*#__PURE__*/React.createElement("nav", {
    className: "px-4 py-4 space-y-1 bg-cream/95 overflow-y-auto max-h-[calc(100vh-72px)]"
  }, [{
    to: 'acasa',
    label: 'Acasă'
  }, {
    to: 'despre',
    label: 'Despre'
  }].map(l => /*#__PURE__*/React.createElement("a", {
    key: l.to,
    href: '#/' + l.to,
    className: "block px-3 py-3 rounded-lg hover:bg-white text-[15px] font-medium text-ink"
  }, l.label)), /*#__PURE__*/React.createElement("a", {
    href: "#/preturi",
    className: "block px-3 py-3 rounded-lg hover:bg-white text-[15px] font-medium text-ink"
  }, "Prețuri"), /*#__PURE__*/React.createElement("a", {
    href: "#/testimoniale",
    className: "block px-3 py-3 rounded-lg hover:bg-white text-[15px] font-medium text-ink"
  }, "Testimoniale"), /*#__PURE__*/React.createElement("a", {
    href: "#/contact",
    className: "block px-3 py-3 rounded-lg hover:bg-white text-[15px] font-medium text-ink"
  }, "Contact"), /*#__PURE__*/React.createElement("div", {
    className: "pt-3"
  }, /*#__PURE__*/React.createElement(Button, {
    href: "contact",
    variant: "primary",
    size: "md",
    className: "w-full"
  }, "Ședință gratuită")))));
}

// ---------- WhatsApp Floating Button ----------
function WhatsAppFloat() {
  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) {
        setPulse(true);
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("a", {
    href: WHATSAPP_URL,
    target: "_blank",
    rel: "noopener",
    "aria-label": "Scrie-ne pe WhatsApp",
    className: "fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "relative flex"
  }, pulse && /*#__PURE__*/React.createElement("span", {
    className: "absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-pulse-ring"
  }), /*#__PURE__*/React.createElement("span", {
    className: "relative w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-card-hover hover:scale-105 transition-transform"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    className: "w-7 h-7 md:w-8 md:h-8 fill-white"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 01-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 01-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.846 2.722.846.93 0 2.96-.83 2.96-2.05.057-.314.057-.643 0-.787-.13-.32-.99-.483-1.245-.572z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.026 0C7.21 0 0 7.21 0 16.026c0 2.83.755 5.605 2.18 8.026L0 32l8.247-2.155a16 16 0 007.78 1.987c8.815 0 16.026-7.21 16.026-16.026S24.84 0 16.026 0zm0 28.948c-2.49 0-4.93-.673-7.05-1.95l-.502-.302-5.218 1.366L4.65 23l-.33-.518a13.34 13.34 0 01-2.05-7.062c0-7.39 6.026-13.415 13.443-13.415 7.39 0 13.415 6.026 13.415 13.415 0 7.418-6.025 13.444-13.415 13.444z"
  })))));
}

// ---------- Footer ----------
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "relative mt-24 bg-bordo-deep text-cream/90"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-14 h-14 flex-shrink-0 rounded-xl overflow-hidden"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-emblem.webp",
    alt: "",
    className: "w-full h-full object-contain"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "serif-h text-cream text-lg"
  }, "Centru de pregătire"), /*#__PURE__*/React.createElement("div", {
    className: "text-rose text-[10px] uppercase tracking-[0.3em]"
  }, "Constanța"))), /*#__PURE__*/React.createElement("p", {
    className: "text-sm leading-relaxed text-cream/70"
  }, "Meditații care pleacă de unde ești tu. Pentru orice clasă, orice materie, orice nivel. La sediul nostru din Constanța.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-cream font-semibold text-sm uppercase tracking-wider mb-4"
  }, "Navigare"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2 text-sm"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#/acasa",
    className: "hover:text-rose"
  }, "Acasă")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#/despre",
    className: "hover:text-rose"
  }, "Despre noi")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#/preturi",
    className: "hover:text-rose"
  }, "Prețuri")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#/testimoniale",
    className: "hover:text-rose"
  }, "Testimoniale")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "text-cream font-semibold text-sm uppercase tracking-wider mb-4"
  }, "Contact"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2 text-sm"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "tel:+40721628936",
    className: "hover:text-rose"
  }, PHONE)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: `mailto:${EMAIL}`,
    className: "hover:text-rose"
  }, EMAIL)), /*#__PURE__*/React.createElement("li", {
    className: "text-cream/70"
  }, ADDRESS), /*#__PURE__*/React.createElement("li", {
    className: "text-cream/70 pt-2"
  }, "Luni-Vineri, 9:00 - 20:00", /*#__PURE__*/React.createElement("br", null), "Sâmbătă, 9:00 - 16:00"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "text-cream font-semibold text-sm uppercase tracking-wider mb-4"
  }, "Urmărește-ne"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3 mb-6"
  }, [{
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61587062261629'
  }, {
    name: 'Instagram',
    href: 'https://www.instagram.com/constantameditatii?igsh=MXM1a2I4cjJiMDhqcQ=='
  }, {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@pregatirebac'
  }].map(s => /*#__PURE__*/React.createElement("a", {
    key: s.name,
    href: s.href,
    target: "_blank",
    rel: "noopener",
    className: "w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center text-cream/80 hover:text-cream transition-colors text-xs font-medium"
  }, s.name[0]))), /*#__PURE__*/React.createElement("a", {
    href: WHATSAPP_URL,
    target: "_blank",
    rel: "noopener",
    className: "inline-flex items-center gap-2 text-sm text-cream hover:text-rose"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    className: "w-4 h-4 fill-white"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 01-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 01-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.846 2.722.846.93 0 2.96-.83 2.96-2.05.057-.314.057-.643 0-.787-.13-.32-.99-.483-1.245-.572zM16.026 0C7.21 0 0 7.21 0 16.026c0 2.83.755 5.605 2.18 8.026L0 32l8.247-2.155a16 16 0 007.78 1.987c8.815 0 16.026-7.21 16.026-16.026S24.84 0 16.026 0z"
  }))), "WhatsApp"))), /*#__PURE__*/React.createElement("div", {
    className: "border-t border-cream/15 mt-12 pt-6 flex flex-col gap-4 text-xs text-cream/60"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("div", null, "© 2026 Centru de pregătire Constanța. Toate drepturile rezervate."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-x-5 gap-y-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/confidentialitate",
    className: "hover:text-rose"
  }, "Politică de confidențialitate"), /*#__PURE__*/React.createElement("a", {
    href: "#/termeni",
    className: "hover:text-rose"
  }, "Termeni și condiții"), /*#__PURE__*/React.createElement("a", {
    href: "#/contact",
    className: "hover:text-rose"
  }, "Contact"))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-x-5 gap-y-2 pt-1 border-t border-cream/10 text-cream/80"
  }, /*#__PURE__*/React.createElement("span", null, "Soluționarea litigiilor:"), /*#__PURE__*/React.createElement("a", {
    href: "https://anpc.ro/ce-este-sal/",
    target: "_blank",
    rel: "noopener",
    className: "hover:text-rose underline"
  }, "ANPC — SAL"), /*#__PURE__*/React.createElement("a", {
    href: "https://ec.europa.eu/consumers/odr",
    target: "_blank",
    rel: "noopener",
    className: "hover:text-rose underline"
  }, "Platforma SOL (UE)")))));
}

// ---------- Subject Card (compact) ----------
function SubjectCard({
  s,
  dense = false
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: '#/materii/' + s.slug,
    className: "group block"
  }, /*#__PURE__*/React.createElement("div", {
    className: `bg-white rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 p-6 md:p-7 h-full border border-transparent hover:border-rose/40 flex flex-col`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start mb-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-12 h-12 rounded-xl bg-cream-warm group-hover:bg-rose/30 flex items-center justify-center text-2xl text-teal-deep transition-colors"
  }, s.icon)), /*#__PURE__*/React.createElement("h3", {
    className: "serif-h text-2xl text-bordo-deep mb-2"
  }, s.name), !dense && /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-ink-muted leading-relaxed flex-1"
  }, s.tagline), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 text-sm font-medium text-bordo group-hover:text-teal flex items-center gap-1"
  }, "Vezi detalii ", /*#__PURE__*/React.createElement("span", {
    className: "transition-transform group-hover:translate-x-1"
  }, "→"))));
}

// ---------- Testimonial Card ----------
function TestimonialCard({
  t,
  compact = false
}) {
  return /*#__PURE__*/React.createElement(Card, {
    className: "h-full flex flex-col"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "34",
    height: "26",
    viewBox: "0 0 34 26",
    className: "text-rose mb-4 opacity-80"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 26V14C0 6.268 6.268 0 14 0v6c-4.418 0-8 3.582-8 8h8v12H0zm20 0V14c0-7.732 6.268-14 14-14v6c-4.418 0-8 3.582-8 8h8v12H20z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("p", {
    className: `text-ink ${compact ? 'text-[15px]' : 'text-base'} leading-relaxed flex-1`
  }, t.quote), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 pt-5 border-t border-cream-deep flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-11 h-11 rounded-full bg-cream-warm overflow-hidden flex-shrink-0 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: 'testimonial-' + t.id,
    shape: "circle",
    placeholder: t.name.split(' ').map(p => p[0]).join(''),
    style: {
      width: '100%',
      height: '100%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-semibold text-sm text-bordo-deep truncate"
  }, t.name), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-ink-muted truncate"
  }, t.role, " • ", t.subject))));
}

// ---------- Page Hero ----------
function PageHero({
  kicker,
  title,
  subtitle,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "relative bg-cream-warm overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 opacity-30 hatched"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative max-w-5xl mx-auto px-4 md:px-6 lg:px-10 pt-16 pb-16 md:pt-24 md:pb-20 text-center"
  }, kicker && /*#__PURE__*/React.createElement("div", {
    className: "flourish text-teal-deep text-xs uppercase tracking-[0.3em] font-medium mb-5"
  }, kicker), /*#__PURE__*/React.createElement("h1", {
    className: "serif-h text-5xl md:text-6xl lg:text-7xl text-bordo-deep mb-5"
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    className: "text-lg md:text-xl text-ink-muted max-w-2xl mx-auto leading-relaxed"
  }, subtitle), children));
}

// ---------- Breadcrumb ----------
function Breadcrumb({
  items
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "text-xs text-ink-muted flex items-center gap-2 mb-8"
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    className: "opacity-50"
  }, "›"), it.href ? /*#__PURE__*/React.createElement("a", {
    href: '#/' + it.href,
    className: "hover:text-bordo"
  }, it.label) : /*#__PURE__*/React.createElement("span", {
    className: "text-bordo-deep font-medium"
  }, it.label))));
}

// ---------- Price Card ----------
function PriceCard({
  p
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `relative rounded-2xl p-7 md:p-8 h-full flex flex-col transition-all duration-300 ${p.featured ? 'bg-bordo-deep text-cream shadow-card-hover scale-[1.02] md:-translate-y-2' : 'bg-white shadow-card hover:shadow-card-hover'}`
  }, p.featured && /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-3 left-1/2 -translate-x-1/2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-teal text-white text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full"
  }, "Recomandat")), p.badge && /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-3 left-1/2 -translate-x-1/2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-rose text-bordo-deep text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full"
  }, p.badge)), /*#__PURE__*/React.createElement("h3", {
    className: `serif-h text-2xl mb-1 ${p.featured ? 'text-cream' : 'text-bordo-deep'}`
  }, p.title), /*#__PURE__*/React.createElement("div", {
    className: `text-sm ${p.featured ? 'text-cream/85' : 'text-ink-muted'} mb-6`
  }, p.duration), /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-2 mb-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: `serif-h text-6xl ${p.featured ? '' : 'text-bordo'}`,
    style: p.featured ? {
      color: '#FF4D4D'
    } : undefined
  }, p.price), /*#__PURE__*/React.createElement("span", {
    className: `text-sm ${p.featured ? 'text-cream/90' : 'text-ink-muted'}`
  }, p.unit)), /*#__PURE__*/React.createElement("ul", {
    className: `space-y-3 my-7 flex-1 ${p.featured ? 'text-cream' : 'text-ink'}`
  }, p.bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    className: "flex gap-2.5 text-[14.5px] leading-relaxed"
  }, /*#__PURE__*/React.createElement("span", {
    className: `mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full ${p.featured ? 'bg-rose' : 'bg-teal'}`
  }), /*#__PURE__*/React.createElement("span", null, b)))), /*#__PURE__*/React.createElement(Button, {
    href: "contact",
    variant: p.featured ? 'cream' : p.id === 'gratuit' ? 'secondary' : 'primary',
    className: "w-full"
  }, p.cta));
}

// ---------- Tweaks Panel ----------
function TweaksPanel({
  visible,
  onClose,
  tweaks,
  setTweak
}) {
  if (!visible) return null;
  const Seg = ({
    label,
    k,
    options
  }) => /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-wider text-ink-muted mb-2"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-1.5 flex-wrap"
  }, options.map(o => {
    const on = (tweaks[k] || options[0].id) === o.id;
    return /*#__PURE__*/React.createElement("button", {
      key: o.id,
      onClick: () => setTweak(k, o.id),
      className: `px-3 py-2 rounded-lg border text-sm transition-all ${on ? 'border-bordo bg-cream-warm text-bordo-deep font-semibold' : 'border-cream-deep text-ink-muted hover:border-bordo/40'}`
    }, o.label);
  })));
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed bottom-24 md:bottom-7 right-5 md:right-28 z-50 w-[320px] max-h-[80vh] overflow-y-auto bg-white rounded-2xl shadow-card-hover border border-cream-deep p-5 animate-fade-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-4"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-semibold text-bordo-deep"
  }, "Tweaks"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "text-ink-muted hover:text-bordo text-xl leading-none"
  }, "×")), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] uppercase tracking-[0.18em] text-teal-deep font-semibold mb-3"
  }, "Lizibilitate"), /*#__PURE__*/React.createElement(Seg, {
    label: "Fundal",
    k: "bg",
    options: [{
      id: 'white',
      label: 'Alb'
    }, {
      id: 'warm',
      label: 'Crem cald'
    }]
  }), /*#__PURE__*/React.createElement(Seg, {
    label: "Font titluri",
    k: "heading",
    options: [{
      id: 'serif',
      label: 'Elegant (serif)'
    }, {
      id: 'sans',
      label: 'Clar (sans)'
    }]
  }), /*#__PURE__*/React.createElement(Seg, {
    label: "Text",
    k: "text",
    options: [{
      id: 'normal',
      label: 'Normal'
    }, {
      id: 'darker',
      label: 'Mai închis'
    }]
  }), /*#__PURE__*/React.createElement(Seg, {
    label: "Mărime text",
    k: "size",
    options: [{
      id: 's',
      label: 'S'
    }, {
      id: 'm',
      label: 'M'
    }, {
      id: 'l',
      label: 'L'
    }, {
      id: 'xl',
      label: 'XL'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] uppercase tracking-[0.18em] text-teal-deep font-semibold mb-3 mt-5 pt-5 border-t border-cream-deep"
  }, "Layout"), /*#__PURE__*/React.createElement(Seg, {
    label: "Variație Hero (Acasă)",
    k: "hero",
    options: [{
      id: 'editorial',
      label: 'Editorial'
    }, {
      id: 'split',
      label: 'Split'
    }, {
      id: 'bold',
      label: 'Bold'
    }]
  }));
}

// ---------- Cookie Banner ----------
function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    try {
      if (!localStorage.getItem('cdp-cookies-ok')) {
        const t = setTimeout(() => setShow(true), 800);
        return () => clearTimeout(t);
      }
    } catch (e) {
      setShow(true);
    }
  }, []);
  function accept() {
    try {
      localStorage.setItem('cdp-cookies-ok', '1');
    } catch (e) {}
    setShow(false);
  }
  if (!show) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 md:px-6 md:pb-6 animate-fade-up",
    role: "dialog",
    "aria-label": "Notificare cookies"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl mx-auto bg-bordo-deep text-cream rounded-2xl shadow-card-hover p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm leading-relaxed text-cream/85 flex-1"
  }, "Folosim cookie-uri tehnice strict necesare pentru funcționarea site-ului și pentru harta Google integrată. Nu folosim cookie-uri de publicitate sau tracking. Detalii în", ' ', /*#__PURE__*/React.createElement("a", {
    href: "#/confidentialitate",
    className: "underline hover:text-rose"
  }, "politica de confidențialitate"), "."), /*#__PURE__*/React.createElement("div", {
    className: "flex-shrink-0"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: accept,
    className: "w-full md:w-auto px-6 py-3 rounded-full bg-rose text-bordo-deep font-semibold text-sm hover:bg-cream transition-colors"
  }, "Am înțeles"))));
}
Object.assign(window, {
  useRoute,
  nav,
  Reveal,
  Button,
  SectionTitle,
  Card,
  Logo,
  Header,
  WhatsAppFloat,
  Footer,
  SubjectCard,
  TestimonialCard,
  PageHero,
  Breadcrumb,
  PriceCard,
  TweaksPanel,
  CookieBanner,
  WHATSAPP_URL,
  PHONE,
  EMAIL,
  ADDRESS
});
// Home page with 3 hero variations.

// ---------- Discrete line icons ----------
function Ic({
  name,
  className = 'w-6 h-6',
  strokeWidth = '1.6'
}) {
  const p = {
    edit: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 20h16"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14.5 5.5l4 4L8 20l-4 1 1-4z"
    })),
    cap: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M2 9l10-4 10 4-10 4z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 11v4.5c0 1 2.7 2.2 6 2.2s6-1.2 6-2.2V11"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22 9v5"
    })),
    compass: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("polygon", {
      points: "16 8 13.5 13.5 8 16 10.5 10.5"
    })),
    users: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "8",
      r: "3.2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3.5 19c0-3.2 2.6-5.2 5.5-5.2s5.5 2 5.5 5.2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 6.5a2.7 2.7 0 010 5.2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17.5 13.6c2 .5 3.5 2 3.5 4.4"
    })),
    badge: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "8.5 12 11 14.6 16 9"
    })),
    clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 7 12 12 15.5 14"
    })),
    focus: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 8.5V5.5a1.5 1.5 0 011.5-1.5H8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 4h2.5A1.5 1.5 0 0120 5.5v3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20 15.5v3a1.5 1.5 0 01-1.5 1.5H16"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 20H5.5A1.5 1.5 0 014 18.5v-3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    })),
    teacher: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 8l8-3 8 3-8 3z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20 8v3.5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "14.5",
      r: "2.3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7.5 21c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4"
    })),
    phone: /*#__PURE__*/React.createElement("path", {
      d: "M6 3h3l1.8 5-2.2 1.4a11 11 0 005 5L15 12l5 1.8V17a2 2 0 01-2.2 2A15 15 0 015 5.2 2 2 0 016 3z"
    }),
    mail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "14",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3.5 7.5l8.5 5.5 8.5-5.5"
    })),
    pin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 21s-6-5.3-6-10a6 6 0 1112 0c0 4.7-6 10-6 10z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "11",
      r: "2"
    })),
    arrow: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13 6l6 6-6 6"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    className: className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, p[name]);
}
function HeroEditorial() {
  const PILLS = ['Prima ședință gratuită', 'Test inițial inclus', 'Grupe de 2-3 elevi', 'La sediu, în Constanța'];
  return /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden bg-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-40 -right-24 w-[30rem] h-[30rem] rounded-full bg-rose/15 blur-3xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute -bottom-44 -left-24 w-[30rem] h-[30rem] rounded-full bg-teal/10 blur-3xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative max-w-7xl mx-auto px-4 md:px-6 lg:px-10 pt-10 md:pt-16 pb-14 md:pb-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid lg:grid-cols-12 gap-10 lg:gap-14 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6 text-center lg:text-left"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "serif-h text-6xl md:text-7xl lg:text-[5.5rem] text-bordo-deep mb-6 leading-[0.98]"
  }, "Din complicat,", /*#__PURE__*/React.createElement("br", null), "facem simplu."), /*#__PURE__*/React.createElement("p", {
    className: "text-lg md:text-xl text-ink max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8"
  }, "Meditații în Constanța pentru ", /*#__PURE__*/React.createElement("strong", {
    className: "text-bordo-deep font-semibold"
  }, "Evaluarea Națională"), ", ", /*#__PURE__*/React.createElement("strong", {
    className: "text-bordo-deep font-semibold"
  }, "Bacalaureat"), " și recuperare la materie."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
  }, /*#__PURE__*/React.createElement(Button, {
    href: "contact",
    variant: "primary",
    size: "lg"
  }, "Programează ședința gratuită")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-x-6 gap-y-2.5 justify-center lg:justify-start"
  }, PILLS.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "inline-flex items-center gap-2 text-sm font-medium text-ink-muted"
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "badge",
    className: "w-4 h-4 text-teal"
  }), " ", t)))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-full max-w-md mx-auto lg:max-w-none",
    style: {
      aspectRatio: '4 / 5'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/hero-main.webp",
    alt: "Sesiune de meditații la Centru de pregătire Constanța",
    className: "absolute inset-0 w-full h-full object-cover rounded-3xl",
    fetchpriority: "high"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute -bottom-5 -left-3 md:-left-6 bg-white rounded-2xl px-5 py-4 shadow-card-hover flex items-center gap-3 max-w-[260px]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-10 h-10 rounded-full bg-bordo/10 flex items-center justify-center text-bordo flex-shrink-0"
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "compass",
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] uppercase tracking-wider text-ink-light"
  }, "Sediu"), /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-semibold text-bordo-deep leading-tight"
  }, "Strada Soveja 90, Constanța"))))))));
}
function HeroSplit() {
  return /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden bg-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 md:px-6 lg:px-10 pt-12 md:pt-16 pb-16 md:pb-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid lg:grid-cols-12 gap-10 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flourish text-teal-deep text-xs uppercase tracking-[0.3em] font-medium mb-5",
    style: {
      justifyContent: 'flex-start'
    }
  }, "Meditații · Constanța"), /*#__PURE__*/React.createElement("h1", {
    className: "serif-h text-6xl md:text-7xl lg:text-8xl text-bordo-deep mb-5 leading-[0.95]"
  }, "From 0", /*#__PURE__*/React.createElement("br", null), "to ", /*#__PURE__*/React.createElement("em", {
    className: "text-teal not-italic"
  }, "Hero"), "."), /*#__PURE__*/React.createElement("p", {
    className: "text-lg md:text-xl text-ink-muted max-w-xl leading-relaxed mb-3"
  }, "Meditații care pleacă de unde ești tu. Pentru orice clasă, orice materie."), /*#__PURE__*/React.createElement("p", {
    className: "text-base text-ink-muted/80 italic max-w-xl leading-relaxed mb-8"
  }, "Știm cum e să fii elev. Nu demult eram și noi."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3"
  }, /*#__PURE__*/React.createElement(Button, {
    href: "contact",
    variant: "primary",
    size: "lg"
  }, "Ședință gratuită"), /*#__PURE__*/React.createElement(Button, {
    href: "preturi",
    variant: "outline",
    size: "lg"
  }, "Vezi prețurile"))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aspect-square relative flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo.webp",
    alt: "",
    className: "relative w-[92%] object-contain animate-float"
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute -bottom-6 -left-6 bg-bordo-deep text-cream rounded-2xl p-5 shadow-card-hover max-w-[220px] hidden md:block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif-h text-3xl text-rose mb-1"
  }, "0 lei"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-cream/80"
  }, "prima ședință + test inițial complet")), /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-4 -right-4 bg-teal text-white rounded-2xl px-5 py-3 shadow-card-hover hidden md:block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-wider opacity-80"
  }, "Sediu"), /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-medium"
  }, "Strada Soveja 90, Constanța"))))));
}
function HeroBold() {
  return /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden bg-bordo-deep text-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 opacity-10",
    style: {
      backgroundImage: 'radial-gradient(circle at 1px 1px, #FAF3E7 1px, transparent 0)',
      backgroundSize: '24px 24px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative max-w-6xl mx-auto px-4 md:px-6 lg:px-10 pt-16 md:pt-24 pb-16 md:pb-28"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 mb-10"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-16 h-16 flex-shrink-0",
    style: {
      filter: 'brightness(0) invert(1)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo.webp",
    alt: "",
    className: "w-full h-full object-contain"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flourish text-rose text-xs uppercase tracking-[0.3em] font-medium",
    style: {
      justifyContent: 'flex-start'
    }
  }, "Meditații · Constanța")), /*#__PURE__*/React.createElement("h1", {
    className: "serif-h text-5xl md:text-7xl lg:text-[6rem] text-cream mb-10 leading-[1.02] max-w-5xl"
  }, "De la ", /*#__PURE__*/React.createElement("span", {
    className: "text-rose italic"
  }, "„nu înțeleg nimic\""), " la ", /*#__PURE__*/React.createElement("span", {
    className: "border-b-4 border-rose pb-1"
  }, "„pot să o fac\""), "."), /*#__PURE__*/React.createElement("p", {
    className: "text-xl md:text-2xl text-cream/80 max-w-2xl leading-relaxed mb-3"
  }, "Pentru orice clasă, orice materie. Plecăm de unde ești tu, nu de unde ar trebui să fii."), /*#__PURE__*/React.createElement("p", {
    className: "text-base text-cream/60 italic max-w-2xl leading-relaxed mb-10"
  }, "Nu există elev „slab\", există explicații care nu i s-au potrivit."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3"
  }, /*#__PURE__*/React.createElement(Button, {
    href: "contact",
    variant: "cream",
    size: "lg"
  }, "Programează ședință gratuită"), /*#__PURE__*/React.createElement(Button, {
    href: "despre",
    variant: "ghost",
    size: "lg",
    className: "!text-cream hover:!bg-cream/10"
  }, "Vezi cine suntem →"))));
}
function VideoPrezentare() {
  const [loaded, setLoaded] = React.useState(false);
  const id = 'cHO5VCknWo8';
  return /*#__PURE__*/React.createElement("div", {
    className: "relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-card bg-bordo-deep",
    style: {
      aspectRatio: '9 / 16'
    }
  }, loaded ? /*#__PURE__*/React.createElement("iframe", {
    className: "absolute inset-0 w-full h-full border-0",
    src: 'https://www.youtube.com/embed/' + id + '?rel=0&modestbranding=1&autoplay=1',
    title: "Prezentare Centru de pregătire Constanța",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }) : /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "absolute inset-0 w-full h-full flex items-center justify-center group bg-bordo-deep/10",
    onClick: () => setLoaded(true),
    "aria-label": "Redă videoclipul de prezentare"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/video-prezentare-thumb.jpg",
    alt: "Prezentare Centru de pregătire Constanța",
    className: "absolute inset-0 w-full h-full object-cover",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("span", {
    className: "relative z-10 w-16 h-16 rounded-full bg-white/95 text-bordo-deep flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 group-active:scale-95"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: "w-7 h-7 ml-1",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5.14v13.72a1 1 0 001.54.84l10.5-6.86a1 1 0 000-1.68L9.54 4.3A1 1 0 008 5.14z"
  })))));
}
function _VideoPrezentareOLD_UNUSED() {
  const videoRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);
  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-card bg-bordo-deep",
    style: {
      aspectRatio: '9 / 16'
    }
  }, /*#__PURE__*/React.createElement("video", {
    ref: videoRef,
    className: "absolute inset-0 w-full h-full object-cover",
    src: "assets/prezentare.mp4#t=0.5",
    controls: true,
    playsInline: true,
    preload: "metadata",
    onPlay: () => setPlaying(true),
    onPause: () => setPlaying(false)
  }, "Browserul tău nu suportă redarea video."), !playing && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: play,
    "aria-label": "Redă videoul",
    className: "absolute inset-0 z-10 flex items-center justify-center group cursor-pointer",
    style: {
      background: 'linear-gradient(to bottom, rgba(36,16,19,0.10), rgba(36,16,19,0.35))'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "relative flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute inset-0 rounded-full bg-cream/30 animate-pulse-ring"
  }), /*#__PURE__*/React.createElement("span", {
    className: "relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-cream/95 text-bordo-deep flex items-center justify-center shadow-card-hover transition-transform duration-200 group-hover:scale-105 group-active:scale-95"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: "w-9 h-9 md:w-10 md:h-10 ml-1"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5.14v13.72a1 1 0 0 0 1.54.84l10.5-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14z"
  }))))));
}
function SediuCarousel() {
  const IMAGES = [{
    src: 'assets/sediu-1.webp',
    alt: 'Sala de meditații cu masă și scaune'
  }, {
    src: 'assets/sediu-2.webp',
    alt: 'Sala de studiu cu lumină naturală'
  }, {
    src: 'assets/sediu-3.jpeg',
    alt: 'Holul și intrarea în săli'
  }, {
    src: 'assets/sediu-4.jpg',
    alt: 'Discuție individuală cu o elevă'
  }, {
    src: 'assets/sediu-5.jpg',
    alt: 'Elevi rezolvând exerciții la tablă'
  }, {
    src: 'assets/sediu-6.jpg',
    alt: 'Ședință de pregătire unu la unu'
  }];
  const [i, setI] = React.useState(0);
  const n = IMAGES.length;
  const go = d => setI(p => (p + d + n) % n);
  const at = k => setI(k);
  React.useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % n), 4000);
    return () => clearInterval(t);
  }, [n]);
  const transformFor = rel => {
    if (rel === 0) return 'translate(-50%, -50%) translateX(0) translateZ(60px) rotateY(0deg) scale(1)';
    if (rel === 1) return 'translate(-50%, -50%) translateX(38%) translateZ(-120px) rotateY(-42deg) scale(0.84)';
    return 'translate(-50%, -50%) translateX(-38%) translateZ(-120px) rotateY(42deg) scale(0.84)';
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "relative w-full select-none",
    style: {
      aspectRatio: '5 / 4'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0",
    style: {
      perspective: '1100px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0",
    style: {
      transformStyle: 'preserve-3d'
    }
  }, IMAGES.map((img, k) => {
    const rel = (k - i + n) % n;
    const front = rel === 0;
    return /*#__PURE__*/React.createElement("div", {
      key: img.src,
      className: "absolute top-1/2 left-1/2 overflow-hidden",
      onClick: () => {
        if (!front) at(k);
      },
      style: {
        width: '80%',
        height: '90%',
        borderRadius: 28,
        transform: transformFor(rel),
        transformStyle: 'preserve-3d',
        transition: 'transform 0.75s cubic-bezier(0.65,0,0.35,1), filter 0.6s ease',
        zIndex: front ? 30 : 10,
        cursor: front ? 'default' : 'pointer',
        boxShadow: front ? '0 30px 60px -18px rgba(20,8,10,0.55)' : '0 16px 36px -16px rgba(20,8,10,0.5)',
        filter: front ? 'none' : 'brightness(0.62) saturate(0.9)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img.src,
      alt: img.alt,
      className: "absolute inset-0 w-full h-full object-cover",
      draggable: "false",
      loading: "lazy"
    }));
  }))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => go(-1),
    "aria-label": "Imaginea anterioară",
    className: "absolute left-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-bordo-deep/55 hover:bg-bordo-deep/85 text-cream backdrop-blur-sm flex items-center justify-center transition-colors z-40"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "w-5 h-5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 18l-6-6 6-6"
  }))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => go(1),
    "aria-label": "Imaginea următoare",
    className: "absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-bordo-deep/55 hover:bg-bordo-deep/85 text-cream backdrop-blur-sm flex items-center justify-center transition-colors z-40"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "w-5 h-5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 18l6-6-6-6"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "absolute -bottom-7 left-1/2 -translate-x-1/2 flex gap-2 z-40"
  }, IMAGES.map((_, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    type: "button",
    onClick: () => at(k),
    "aria-label": 'Mergi la imaginea ' + (k + 1),
    className: "h-2 rounded-full transition-transform duration-300",
    style: {
      width: 22,
      transformOrigin: 'left center',
      transform: k === i ? 'scaleX(1)' : 'scaleX(0.36)',
      backgroundColor: k === i ? '#FFFFFF' : 'rgba(255,255,255,0.45)'
    }
  }))));
}
function HomePage({
  heroVariant
}) {
  const HeroComp = heroVariant === 'split' ? HeroSplit : heroVariant === 'bold' ? HeroBold : HeroEditorial;
  const FOR_WHO = [{
    n: '01',
    title: 'Te pregătești de Evaluare Națională?',
    desc: 'Clasele V-VIII. Acoperim toată materia, exersăm subiectele și mergem pe ritmul tău.',
    href: 'materii',
    icon: 'edit',
    accent: '#0A5360',
    tag: 'Clasele V–VIII'
  }, {
    n: '02',
    title: 'Te pregătești de Bacalaureat?',
    desc: 'Clasele IX-XII. Transformăm „nu înțeleg" în „știu să rezolv".',
    href: 'materii',
    icon: 'cap',
    accent: '#2C6E7F',
    tag: 'Clasele IX–XII'
  }, {
    n: '03',
    title: 'Te-ai pierdut undeva prin materie?',
    desc: 'Orice clasă, orice vârstă. Vino pentru câte ședințe ai nevoie, lucrăm exact pe ce te ține în loc.',
    href: 'servicii/recuperare',
    icon: 'compass',
    accent: '#C2A06B',
    tag: 'Orice clasă'
  }];
  const WHY = [{
    title: 'Profesori tineri care înțeleg',
    desc: 'Am trecut prin aceleași etape. Înțelegem provocările pe care le întâmpini.',
    icon: 'teacher'
  }, {
    title: 'Test inițial gratuit',
    desc: 'O evaluare obiectivă a cunoștințelor, ca bază pentru un plan de pregătire personalizat.',
    icon: 'badge'
  }, {
    title: 'Pe ritmul tău, nu pe al școlii',
    desc: 'La școală urmezi ritmul clasei. La noi, lecția urmează ritmul tău.',
    icon: 'clock'
  }, {
    title: 'Grup restrâns, atenție personalizată',
    desc: 'Grupe de 2-3 elevi, pentru ca atenția să fie reală, nu împărțită superficial.',
    icon: 'users'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroComp, null), /*#__PURE__*/React.createElement("section", {
    className: "px-4 md:px-6 lg:px-10 pt-6 pb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid lg:grid-cols-2 gap-8 lg:gap-14 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center lg:text-left"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "serif-h text-4xl md:text-5xl text-bordo-deep mb-5 leading-tight"
  }, "Vezi cum lucrăm, în 40 de secunde"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg leading-relaxed mb-6 max-w-md mx-auto lg:mx-0 font-medium text-ink-muted"
  }, "O ședință arată mai mult decât o sută de promisiuni. Uită-te la atmosferă, la ritm și în felul în care explicăm, apoi decide."), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-3 mb-8 text-left max-w-md mx-auto lg:mx-0"
  }, ['Explicații pe înțelesul tău, nu pe viteză', 'Atmosferă relaxată, fără presiune', 'Săli liniștite, materiale fizice, tablă albă'].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    className: "flex items-start gap-3 text-lg leading-relaxed font-medium text-ink-muted"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-teal mt-0.5 flex-shrink-0"
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "badge",
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("span", null, t)))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3 justify-center lg:justify-start"
  }, /*#__PURE__*/React.createElement(Button, {
    href: "contact",
    variant: "primary",
    size: "lg"
  }, "Programează ședința gratuită"), /*#__PURE__*/React.createElement(Button, {
    href: WHATSAPP_URL,
    variant: "whatsapp",
    size: "lg"
  }, "Scrie pe WhatsApp"))), /*#__PURE__*/React.createElement("div", {
    className: "mx-auto w-full",
    style: {
      maxWidth: '320px'
    }
  }, /*#__PURE__*/React.createElement(VideoPrezentare, null))))), /*#__PURE__*/React.createElement("section", {
    className: "py-20 md:py-28 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "Alege-ți obiectivul",
    subtitle: "Indiferent de unde pleci, mergem împreună până ajungi unde vrei să fii."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-3 gap-x-8 gap-y-14 max-w-6xl mx-auto"
  }, FOR_WHO.map((f, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 100
  }, /*#__PURE__*/React.createElement("div", {
    className: "for-who-col flex flex-col items-center text-center px-4 md:px-8",
    style: {
      '--accent': f.accent
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative mb-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative",
    style: {
      color: '#0A5360'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    name: f.icon,
    className: "w-12 h-12",
    strokeWidth: "1.4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] font-semibold uppercase tracking-[0.16em] mb-3 whitespace-nowrap",
    style: {
      color: '#0A5360'
    }
  }, f.tag), /*#__PURE__*/React.createElement("h3", {
    className: "serif-h text-[1.7rem] leading-snug text-bordo-deep mb-3.5 text-balance md:min-h-[5rem] flex items-center justify-center"
  }, f.title), /*#__PURE__*/React.createElement("p", {
    className: "text-ink-muted leading-relaxed max-w-[20rem]"
  }, f.desc)))))), /*#__PURE__*/React.createElement("section", {
    className: "py-20 md:py-28 px-4 md:px-6 lg:px-10 bg-white relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "De ce noi",
    subtitle: "Suntem o echipă tânără care chiar a trecut prin asta."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto"
  }, WHY.map((w, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-6 h-full shadow-soft border border-bordo/20 hover:border-bordo/40 transition-colors"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center text-teal-deep mb-4"
  }, /*#__PURE__*/React.createElement(Ic, {
    name: w.icon,
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "serif-h text-xl text-bordo-deep mb-2"
  }, w.title), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-ink-muted leading-relaxed"
  }, w.desc))))))), /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden bg-bordo-deep text-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 opacity-[0.07]",
    style: {
      backgroundImage: 'radial-gradient(circle at 1px 1px, #FAF3E7 1px, transparent 0)',
      backgroundSize: '26px 26px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-16 md:py-24"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "serif-h text-4xl md:text-5xl text-cream mb-5 leading-tight"
  }, "Un spațiu făcut pentru concentrare."), /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-cream/80 leading-relaxed mb-8 max-w-lg"
  }, "Săli liniștite, materiale fizice, tablă albă. Pe Strada Soveja nr. 90 vii, te așezi și chiar înțelegi, fără distrageri."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-x-6 gap-y-3 mb-8"
  }, [['clock', 'Luni-Vineri 9:00 - 20:00'], ['clock', 'Sâmbătă 9:00 - 16:00'], ['users', 'Grupe mici de 2-3 elevi']].map(([ic, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "inline-flex items-center gap-2 text-sm text-cream/90"
  }, /*#__PURE__*/React.createElement(Ic, {
    name: ic,
    className: "w-4 h-4 text-rose"
  }), " ", t))), /*#__PURE__*/React.createElement(Button, {
    href: "contact",
    variant: "cream",
    size: "lg"
  }, "Programează ședința gratuită")), /*#__PURE__*/React.createElement("div", {
    className: "relative w-full",
    style: {
      aspectRatio: '5 / 4'
    }
  }, /*#__PURE__*/React.createElement(SediuCarousel, null))))), /*#__PURE__*/React.createElement("section", {
    id: "cum-lucram",
    className: "py-20 md:py-28 px-4 md:px-6 lg:px-10 max-w-6xl mx-auto"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "De la prima discuție la primul progres",
    subtitle: "Fără grabă. Fără presiune. Personalizat pentru tine."
  }), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 md:space-y-10"
  }, [{
    n: '01',
    title: 'Ședință de cunoaștere gratuită + test inițial',
    desc: 'Stăm cât este nevoie, evaluăm cunoștințele și principiile. Vorbim deschis, iar tu decizi dacă suntem compatibili.'
  }, {
    n: '02',
    title: 'Planul de lucru',
    desc: 'Pe baza evaluării, îți spunem ce este de lucrat: cât timp ne trebuie și ce lecții prioritizăm. În funcție de aceste criterii, alegem un plan potrivit pentru tine.'
  }, {
    n: '03',
    title: 'Plecăm la drum fără presiune',
    desc: 'Lucrăm punctele tale slabe. Reluăm de câte ori este necesar și apreciem fiecare progres realizat. Te încurajăm să adresezi orice întrebare.'
  }].map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 120
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-5 md:gap-10 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif-h text-5xl md:text-7xl lg:text-8xl text-rose/60 leading-none w-14 md:w-24 flex-shrink-0"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 pt-2 md:pt-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "serif-h text-2xl md:text-3xl text-bordo-deep mb-2"
  }, s.title), /*#__PURE__*/React.createElement("p", {
    className: "text-ink-muted text-[15px] md:text-base leading-relaxed"
  }, s.desc))))))), /*#__PURE__*/React.createElement("section", {
    className: "py-20 md:py-28 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "Pe ce materii lucrăm"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
  }, window.SUBJECTS.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.slug,
    delay: i * 60
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl shadow-card p-6 md:p-7 h-full border border-transparent flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start mb-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-12 h-12 rounded-xl bg-cream-warm flex items-center justify-center text-2xl"
  }, s.icon)), /*#__PURE__*/React.createElement("h3", {
    className: "serif-h text-2xl text-bordo-deep mb-2"
  }, s.name), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-ink-muted leading-relaxed flex-1"
  }, s.tagline)))))), /*#__PURE__*/React.createElement("section", {
    className: "py-20 md:py-28 px-4 md:px-6 lg:px-10 bg-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "Prețuri transparente",
    subtitle: "Fără surprize, fără costuri ascunse. Aceleași prețuri pentru toate materiile."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-3 gap-6 items-stretch"
  }, window.PRICES.map((p, i) => {
    const label = p.badge ? p.badge : p.featured ? 'Recomandat' : 'Clasic';
    return /*#__PURE__*/React.createElement(Reveal, {
      key: p.id,
      delay: i * 80
    }, /*#__PURE__*/React.createElement("div", {
      className: `relative rounded-3xl p-8 md:p-9 h-full flex flex-col ${p.featured ? 'bg-bordo-deep text-cream shadow-card-hover sm:-translate-y-3' : 'bg-white border border-bordo/12 shadow-soft'}`
    }, /*#__PURE__*/React.createElement("div", {
      className: `text-[11px] uppercase tracking-[0.22em] font-semibold mb-5 ${p.featured ? 'text-rose-soft' : 'text-teal'}`
    }, label), /*#__PURE__*/React.createElement("h3", {
      className: `serif-h text-2xl md:text-[1.7rem] mb-5 leading-snug ${p.featured ? 'text-cream' : 'text-bordo-deep'}`
    }, p.title), /*#__PURE__*/React.createElement("div", {
      className: "flex items-baseline gap-2 mb-1.5"
    }, /*#__PURE__*/React.createElement("span", {
      className: `serif-h text-6xl leading-none ${p.featured ? '' : 'text-bordo'}`,
      style: p.featured ? {
        color: '#FF4D4D'
      } : undefined
    }, p.price), /*#__PURE__*/React.createElement("span", {
      className: `text-sm ${p.featured ? 'text-cream/90' : 'text-ink-muted'}`
    }, p.unit)), /*#__PURE__*/React.createElement("div", {
      className: `text-sm mb-6 ${p.featured ? 'text-cream/85' : 'text-ink-light'}`
    }, p.duration), /*#__PURE__*/React.createElement("div", {
      className: `h-px w-full mb-6 ${p.featured ? 'bg-cream/15' : 'bg-bordo/10'}`
    }), /*#__PURE__*/React.createElement("ul", {
      className: "space-y-3 mb-2"
    }, p.bullets.map(b => /*#__PURE__*/React.createElement("li", {
      key: b,
      className: `flex items-start gap-2.5 text-sm leading-snug ${p.featured ? 'text-cream' : 'text-ink'}`
    }, /*#__PURE__*/React.createElement("span", {
      className: `mt-0.5 flex-shrink-0 ${p.featured ? 'text-rose' : 'text-teal'}`
    }, /*#__PURE__*/React.createElement(Ic, {
      name: "badge",
      className: "w-4 h-4"
    })), /*#__PURE__*/React.createElement("span", null, b))))));
  })))), /*#__PURE__*/React.createElement("section", {
    className: "py-20 md:py-28 px-4 md:px-6 lg:px-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "Ce spun elevii și părinții"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5"
  }, window.TESTIMONIALS.slice(0, 3).map((t, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t.id,
    delay: i * 100
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    t: t
  })))), /*#__PURE__*/React.createElement("div", {
    className: "text-center mt-10"
  }, /*#__PURE__*/React.createElement(Button, {
    href: "testimoniale",
    variant: "outline",
    size: "md"
  }, "Vezi toate testimonialele →")))), /*#__PURE__*/React.createElement("section", {
    className: "py-20 md:py-28 px-4 md:px-6 lg:px-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-5xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-10 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-7 md:p-8 shadow-soft"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "serif-h text-4xl md:text-5xl text-bordo-deep mb-4 leading-tight"
  }, "Hai să vorbim. Prima ședință e gratuită."), /*#__PURE__*/React.createElement("p", {
    className: "text-ink-muted leading-relaxed mb-7"
  }, "Completează formularul sau scrie-ne pe WhatsApp. Stabilim împreună când vii pentru testul inițial."), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 text-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-3 p-4 rounded-xl bg-cream-warm/60"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-bordo mt-0.5 flex-shrink-0"
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "phone",
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-ink-muted text-xs"
  }, "Telefon"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+40721628936",
    className: "text-bordo-deep font-medium hover:text-bordo"
  }, PHONE))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-3 p-4 rounded-xl bg-cream-warm/60"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-bordo mt-0.5 flex-shrink-0"
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "mail",
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-ink-muted text-xs"
  }, "Email"), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${EMAIL}`,
    className: "text-bordo-deep font-medium hover:text-bordo break-all"
  }, EMAIL))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-3 p-4 rounded-xl bg-cream-warm/60"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-bordo mt-0.5 flex-shrink-0"
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "pin",
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-ink-muted text-xs"
  }, "Sediu"), /*#__PURE__*/React.createElement("div", {
    className: "text-bordo-deep font-medium"
  }, ADDRESS)))), /*#__PURE__*/React.createElement("div", {
    className: "aspect-[4/3] rounded-2xl overflow-hidden shadow-soft relative bg-cream-warm mt-4"
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "Centru de pregătire Constanța",
    src: "https://www.google.com/maps?q=Strada+Soveja+90+Constanta&output=embed",
    className: "absolute inset-0 w-full h-full border-0",
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement(ContactForm, {
    compact: true
  })))));
}
Object.assign(window, {
  HomePage
});
// About + Services pages.

function AboutPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    kicker: "Cine suntem",
    title: "Centru de pregătire Constanța",
    subtitle: "O echipă de profesori dedicați meditațiilor pentru Evaluarea Națională, Bacalaureat și recuperarea materiei."
  }), /*#__PURE__*/React.createElement("section", {
    className: "py-16 md:py-20 px-4 md:px-6 max-w-3xl mx-auto"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Acasă',
      href: 'acasa'
    }, {
      label: 'Despre noi'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 text-[17px] leading-[1.85] text-ink"
  }, /*#__PURE__*/React.createElement("p", null, "Pornim de la un principiu fundamental: ", /*#__PURE__*/React.createElement("strong", null, "nu există elev „slab\""), ". Există etape de învățare rămase în urmă, capitole insuficient consolidate care afectează înțelegerea materiei subsecvente și explicații care nu au fost adaptate stilului cognitiv al elevului. Misiunea noastră este să identificăm corect aceste puncte și să construim pornind de la ele."), /*#__PURE__*/React.createElement("p", null, "Metodologia noastră pleacă de unde ești tu: evaluăm cu sinceritate nivelul real al elevului la începutul colaborării și îl însoțim, pas cu pas, până la obiectivul propus, fie că este vorba despre Evaluarea Națională, Bacalaureat sau recuperarea unor lacune punctuale. Procesul exclude presupunerile, etichetele și etapele „sărite\". Începe întotdeauna cu un test inițial complet și continuă cu un plan personalizat."), /*#__PURE__*/React.createElement("p", null, "Activitatea didactică se desfășoară la sediul din Constanța, în săli dedicate, cu materiale fizice și tablă albă. Lucrăm în grupe restrânse de 2-3 elevi, adaptate atât pentru intervenții punctuale, cât și pentru programe extinse pe durata unui an școlar. Frecvența și intensitatea ședințelor sunt stabilite împreună cu elevul, în funcție de obiective și disponibilitate."))), /*#__PURE__*/React.createElement("section", {
    className: "py-16 md:py-20 px-4 md:px-6 lg:px-10 bg-cream-warm/50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-5xl mx-auto"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "Patru lucruri în care credem"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 gap-5"
  }, [{
    t: 'Nu ne pasă de unde pleci, ne pasă unde ajungi',
    d: 'Punctul de pornire e doar punctul de pornire. Nu îți reproșăm că nu știi ceva. Asta e treaba noastră, să te ducem mai departe.'
  }, {
    t: 'Nu există elev „slab"',
    d: 'Există explicații care nu i s-au potrivit. Treaba noastră e să găsim explicația care funcționează pentru tine.'
  }, {
    t: 'Răbdarea bate inteligența',
    d: 'Cu cât te grăbești mai puțin, cu atât rămâne mai mult. Lucrăm pe înțeles, nu pe viteză.'
  }, {
    t: 'Orice întrebare e binevenită',
    d: 'Nicio întrebare nu e prea simplă. Dacă e în capul tău, are sens să o pui, și să-i dăm un răspuns.'
  }].map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-6 md:p-7 h-full shadow-soft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif-h text-3xl text-rose mb-3"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("h4", {
    className: "serif-h text-xl text-bordo-deep mb-2"
  }, p.t), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-ink-muted leading-relaxed"
  }, p.d))))))), /*#__PURE__*/React.createElement("section", {
    className: "py-16 md:py-20 px-4 md:px-6 max-w-5xl mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-7 md:p-10 shadow-soft border-l-4 border-bordo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-bordo text-4xl flex-shrink-0"
  }, "📍"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "serif-h text-2xl md:text-3xl text-bordo-deep mb-2"
  }, "La sediu, în Constanța"), /*#__PURE__*/React.createElement("p", {
    className: "text-ink-muted leading-relaxed text-[15px] md:text-base mb-3"
  }, ADDRESS, ". Săli liniștite, materiale fizice, tablă albă. Un spațiu dedicat în care te poți concentra, fără distrageri."), /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-ink-muted"
  }, /*#__PURE__*/React.createElement("strong", {
    className: "text-bordo-deep"
  }, "Program:"), " Luni-Vineri 9:00 - 20:00 · Sâmbătă 9:00 - 16:00"))), /*#__PURE__*/React.createElement("div", {
    className: "aspect-[16/9] md:aspect-[2/1] rounded-2xl overflow-hidden shadow-soft relative bg-cream-warm mt-7 md:mt-8"
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "Centru de pregătire Constanța",
    src: "https://www.google.com/maps?q=Strada+Soveja+90+Constanta&output=embed",
    className: "absolute inset-0 w-full h-full border-0",
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade"
  })))));
}
Object.assign(window, {
  AboutPage
});
// 404 page (subject pages removed).

function NotFound() {
  return /*#__PURE__*/React.createElement("section", {
    className: "min-h-[60vh] flex items-center justify-center px-4 text-center"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "serif-h text-9xl text-rose mb-2"
  }, "404"), /*#__PURE__*/React.createElement("h2", {
    className: "serif-h text-3xl text-bordo-deep mb-3"
  }, "Hmm, nu am găsit pagina."), /*#__PURE__*/React.createElement("p", {
    className: "text-ink-muted mb-7"
  }, "Probabil un link vechi sau o adresă greșită. Hai înapoi acasă."), /*#__PURE__*/React.createElement(Button, {
    href: "acasa",
    variant: "primary"
  }, "Înapoi pe Acasă")));
}
Object.assign(window, {
  NotFound
});
// Prices + Testimonials pages.

function PricesPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    kicker: "Prețuri",
    title: "Transparent. Fără surprize.",
    subtitle: "Trei opțiuni. Aceleași prețuri pentru toate materiile, indiferent de format. Tu alegi cum vrei să mergem împreună."
  }), /*#__PURE__*/React.createElement("section", {
    className: "py-12 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Acasă',
      href: 'acasa'
    }, {
      label: 'Prețuri'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-3 gap-6 md:gap-5 mt-10"
  }, window.PRICES.map(p => /*#__PURE__*/React.createElement(PriceCard, {
    key: p.id,
    p: p
  })))));
}
function TestimonialsPage() {
  const [filter, setFilter] = useState('toate');
  const filters = [{
    id: 'toate',
    label: 'Toate'
  }, {
    id: 'elevi',
    label: 'De la elevi',
    match: t => t.role.toLowerCase().includes('elev')
  }, {
    id: 'parinti',
    label: 'De la părinți',
    match: t => t.role.toLowerCase().includes('părinte')
  }, {
    id: 'recuperare',
    label: 'Recuperare',
    match: t => t.subject.toLowerCase().includes('recuperare')
  }];
  const fObj = filters.find(f => f.id === filter);
  const list = filter === 'toate' ? window.TESTIMONIALS : window.TESTIMONIALS.filter(fObj.match);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    kicker: "Ce spun oamenii",
    title: "Cuvinte de la oameni reali",
    subtitle: "Le-am întrebat, ne-au răspuns. Nu am stilizat, nu am cosmetizat, vorbesc așa cum vorbesc oamenii."
  }), /*#__PURE__*/React.createElement("section", {
    className: "py-12 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Acasă',
      href: 'acasa'
    }, {
      label: 'Testimoniale'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 mb-10 justify-center"
  }, filters.map(f => /*#__PURE__*/React.createElement("button", {
    key: f.id,
    onClick: () => setFilter(f.id),
    className: `px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === f.id ? 'bg-bordo text-cream' : 'bg-white text-ink-muted border border-cream-deep hover:border-bordo'}`
  }, f.label))), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5"
  }, list.map((t, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t.id,
    delay: i % 6 * 60
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    t: t
  }))))));
}
Object.assign(window, {
  PricesPage,
  TestimonialsPage
});
// Blog hub + article pages.

// ----- Mini markdown renderer -----
function renderInline(text) {
  const parts = [];
  let remaining = text;
  let key = 0;
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  let last = 0;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const tk = m[0];
    if (tk.startsWith('**')) parts.push(/*#__PURE__*/React.createElement("strong", {
      key: key++
    }, tk.slice(2, -2)));else if (tk.startsWith('`')) parts.push(/*#__PURE__*/React.createElement("code", {
      key: key++,
      className: "font-mono text-sm bg-cream-warm px-1.5 py-0.5 rounded text-bordo-deep"
    }, tk.slice(1, -1)));else parts.push(/*#__PURE__*/React.createElement("em", {
      key: key++
    }, tk.slice(1, -1)));
    last = m.index + tk.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}
function MarkdownBody({
  source
}) {
  const blocks = [];
  const lines = source.split('\n');
  let i = 0;
  let key = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }
    if (line.startsWith('### ')) {
      blocks.push(/*#__PURE__*/React.createElement("h3", {
        key: key++
      }, renderInline(line.slice(4))));
      i++;
      continue;
    }
    if (line.startsWith('## ')) {
      blocks.push(/*#__PURE__*/React.createElement("h2", {
        key: key++
      }, renderInline(line.slice(3))));
      i++;
      continue;
    }
    if (line.startsWith('> ')) {
      let q = [line.slice(2)];
      i++;
      while (i < lines.length && lines[i].startsWith('> ')) {
        q.push(lines[i].slice(2));
        i++;
      }
      blocks.push(/*#__PURE__*/React.createElement("blockquote", {
        key: key++
      }, renderInline(q.join(' '))));
      continue;
    }
    if (/^-\s/.test(line) || /^\*\s/.test(line)) {
      const items = [];
      while (i < lines.length && (/^-\s/.test(lines[i]) || /^\*\s/.test(lines[i]))) {
        items.push(lines[i].replace(/^[-*]\s/, ''));
        i++;
      }
      blocks.push(/*#__PURE__*/React.createElement("ul", {
        key: key++
      }, items.map((it, j) => /*#__PURE__*/React.createElement("li", {
        key: j
      }, renderInline(it)))));
      continue;
    }
    if (/^\d+\.\s/.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ''));
        i++;
      }
      blocks.push(/*#__PURE__*/React.createElement("ol", {
        key: key++,
        className: "list-decimal pl-6 my-4 space-y-1"
      }, items.map((it, j) => /*#__PURE__*/React.createElement("li", {
        key: j,
        className: "leading-relaxed pl-2"
      }, renderInline(it)))));
      continue;
    }
    let p = [line];
    i++;
    while (i < lines.length && lines[i].trim() && !/^[#>\-*]|\d+\./.test(lines[i].trim())) {
      p.push(lines[i]);
      i++;
    }
    blocks.push(/*#__PURE__*/React.createElement("p", {
      key: key++
    }, renderInline(p.join(' '))));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "prose-article"
  }, blocks);
}
function formatDate(s) {
  const months = ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'];
  const [y, m, d] = s.split('-').map(Number);
  return `${d} ${months[m - 1]} ${y}`;
}
function BlogHubPage() {
  const [filter, setFilter] = useState('toate');
  const categories = ['toate', ...Array.from(new Set(window.BLOG.map(b => b.category)))];
  const list = filter === 'toate' ? window.BLOG : window.BLOG.filter(b => b.category === filter);
  const [featured, ...rest] = list;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    kicker: "Blog",
    title: "Articole de la profesori, pentru elevi și părinți",
    subtitle: "Sfaturi, ghiduri și răspunsuri reale la întrebări reale. Fără SEO sclifosit, fără clișee."
  }), /*#__PURE__*/React.createElement("section", {
    className: "py-12 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Acasă',
      href: 'acasa'
    }, {
      label: 'Blog'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 mb-10 justify-center"
  }, categories.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setFilter(c),
    className: `px-4 py-2 rounded-full text-sm font-medium transition-all capitalize ${filter === c ? 'bg-bordo text-cream' : 'bg-white text-ink-muted border border-cream-deep hover:border-bordo'}`
  }, c))), featured && /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("a", {
    href: '#/blog/' + featured.slug,
    className: "group block mb-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid lg:grid-cols-5 gap-6 lg:gap-10 bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-2 aspect-video lg:aspect-auto relative"
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: 'blog-cover-' + featured.slug,
    placeholder: 'cover ' + featured.slug,
    style: {
      width: '100%',
      height: '100%',
      minHeight: '200px'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-3 p-7 md:p-10 lg:p-12 flex flex-col justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-3 text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-full bg-rose/30 text-bordo-deep font-semibold uppercase tracking-wider"
  }, featured.category), /*#__PURE__*/React.createElement("span", {
    className: "text-ink-muted"
  }, formatDate(featured.date))), /*#__PURE__*/React.createElement("h2", {
    className: "serif-h text-3xl md:text-4xl text-bordo-deep mb-3 group-hover:text-bordo transition-colors"
  }, featured.title), /*#__PURE__*/React.createElement("p", {
    className: "text-ink-muted leading-relaxed mb-5"
  }, featured.excerpt), /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-medium text-bordo"
  }, "Citește articolul →"))))), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
  }, rest.map((b, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: b.slug,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("a", {
    href: '#/blog/' + b.slug,
    className: "group block h-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all h-full flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aspect-[4/3] relative"
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: 'blog-cover-' + b.slug,
    placeholder: 'cover ' + b.slug,
    style: {
      width: '100%',
      height: '100%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "p-6 flex flex-col flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mb-3 text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-2 py-0.5 rounded-full bg-cream-warm text-bordo-deep font-medium"
  }, b.category), /*#__PURE__*/React.createElement("span", {
    className: "text-ink-muted"
  }, formatDate(b.date))), /*#__PURE__*/React.createElement("h3", {
    className: "serif-h text-xl text-bordo-deep mb-2 group-hover:text-bordo transition-colors leading-tight"
  }, b.title), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-ink-muted leading-relaxed flex-1"
  }, b.excerpt), /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-medium text-bordo mt-4"
  }, "Citește →")))))))));
}
function BlogArticlePage({
  slug
}) {
  const article = window.BLOG.find(b => b.slug === slug);
  const [copied, setCopied] = useState(false);
  if (!article) return /*#__PURE__*/React.createElement(NotFound, null);
  const url = window.location.origin + window.location.pathname + '#/blog/' + article.slug;
  const related = window.BLOG.filter(b => b.slug !== article.slug).slice(0, 3);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "bg-cream-warm relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 opacity-25 hatched"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative max-w-3xl mx-auto px-4 md:px-6 pt-12 pb-8 md:pt-16"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Acasă',
      href: 'acasa'
    }, {
      label: 'Blog',
      href: 'blog'
    }, {
      label: article.title
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-4 text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-full bg-rose/30 text-bordo-deep font-semibold uppercase tracking-wider"
  }, article.category), /*#__PURE__*/React.createElement("span", {
    className: "text-ink-muted"
  }, formatDate(article.date)), /*#__PURE__*/React.createElement("span", {
    className: "text-ink-muted"
  }, "· ", article.author)), /*#__PURE__*/React.createElement("h1", {
    className: "serif-h text-4xl md:text-5xl lg:text-6xl text-bordo-deep leading-[1.05] mb-5"
  }, article.title), /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-ink-muted leading-relaxed"
  }, article.excerpt))), /*#__PURE__*/React.createElement("section", {
    className: "py-10 md:py-14 px-4 md:px-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aspect-video rounded-2xl overflow-hidden bg-white shadow-soft mb-10 relative"
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: 'blog-hero-' + article.slug,
    placeholder: 'imagine articol ' + article.slug,
    style: {
      width: '100%',
      height: '100%'
    }
  })), /*#__PURE__*/React.createElement(MarkdownBody, {
    source: article.body
  }), /*#__PURE__*/React.createElement("div", {
    className: "mt-14 pt-8 border-t border-cream-deep"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-wider text-ink-muted font-semibold mb-3"
  }, "Distribuie articolul"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    target: "_blank",
    rel: "noopener",
    className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-soft hover:shadow-card text-sm font-medium text-bordo-deep"
  }, /*#__PURE__*/React.createElement("span", null, "Facebook")), /*#__PURE__*/React.createElement("a", {
    href: `https://wa.me/?text=${encodeURIComponent(article.title + ', ' + url)}`,
    target: "_blank",
    rel: "noopener",
    className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-soft hover:shadow-card text-sm font-medium text-bordo-deep"
  }, /*#__PURE__*/React.createElement("span", null, "WhatsApp")), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      navigator.clipboard?.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    },
    className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-soft hover:shadow-card text-sm font-medium text-bordo-deep"
  }, /*#__PURE__*/React.createElement("span", null, copied ? 'Copiat ✓' : 'Copiază link')))), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 bg-cream-warm/50 rounded-2xl p-6 flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-14 h-14 rounded-full bg-rose/30 flex items-center justify-center serif-h text-2xl text-bordo-deep flex-shrink-0"
  }, article.author.split(' ').map(p => p[0]).join('')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-semibold text-bordo-deep"
  }, article.author), /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-ink-muted"
  }, "Profesor la Centru de pregătire Constanța"))))), /*#__PURE__*/React.createElement("section", {
    className: "py-16 px-4 md:px-6 lg:px-10 bg-cream-warm/40"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "serif-h text-3xl text-bordo-deep mb-8 text-center"
  }, "Mai citește"), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-3 gap-5"
  }, related.map(b => /*#__PURE__*/React.createElement("a", {
    key: b.slug,
    href: '#/blog/' + b.slug,
    className: "block bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-bordo-deep font-semibold uppercase tracking-wider mb-2"
  }, b.category), /*#__PURE__*/React.createElement("h4", {
    className: "serif-h text-xl text-bordo-deep mb-2 leading-tight"
  }, b.title), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-ink-muted leading-relaxed line-clamp-3"
  }, b.excerpt)))))));
}
Object.assign(window, {
  BlogHubPage,
  BlogArticlePage,
  formatDate
});
// Contact + Privacy pages.

function ContactForm({
  compact
}) {
  const [form, setForm] = useState({
    nume: '',
    email: '',
    telefon: '',
    materie: '',
    tip: '',
    mesaj: '',
    consimtamant: false
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  function setField(k, v) {
    setForm(f => ({
      ...f,
      [k]: v
    }));
    setErrors(e => ({
      ...e,
      [k]: undefined
    }));
  }
  function validate() {
    const e = {};
    if (!form.nume.trim()) e.nume = 'Spune-ne cum te cheamă';
    if (!form.email.trim()) e.email = 'Avem nevoie să te putem contacta';else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Email-ul nu pare valid';
    if (!form.telefon.trim()) e.telefon = 'Lasă-ne un număr la care te putem suna';
    if (!form.materie) e.materie = 'Alege o materie';
    if (!form.tip) e.tip = 'Spune-ne pentru ce vrei meditațiile';
    if (!form.mesaj.trim() || form.mesaj.trim().length < 5) e.mesaj = 'Scrie-ne câteva cuvinte despre situație';
    if (!form.consimtamant) e.consimtamant = 'Bifează ca să putem să te contactăm';
    setErrors(e);
    return Object.keys(e).length === 0;
  }
  async function submit(ev) {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    const FORMSPREE_ID = 'mrednynr';
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error('eroare');
      setStatus('success');
      setForm({
        nume: '',
        email: '',
        telefon: '',
        materie: '',
        tip: '',
        mesaj: '',
        consimtamant: false
      });
    } catch {
      setStatus('error');
    }
  }
  return /*#__PURE__*/React.createElement("div", {
    className: `bg-white rounded-2xl p-7 md:p-10 border-l-4 border-bordo ${compact ? 'shadow-soft' : 'shadow-card'}`
  }, /*#__PURE__*/React.createElement("h2", {
    className: "serif-h text-3xl text-bordo-deep mb-2"
  }, "Scrie-ne"), /*#__PURE__*/React.createElement("p", {
    className: "text-ink-muted mb-7 text-[15px]"
  }, "Pe baza mesajului, te contactăm să stabilim ședința de cunoaștere gratuită."), status === 'success' ? /*#__PURE__*/React.createElement("div", {
    className: "text-center py-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 rounded-full bg-teal/20 mx-auto mb-4 flex items-center justify-center text-3xl text-teal-deep"
  }, "✓"), /*#__PURE__*/React.createElement("h3", {
    className: "serif-h text-2xl text-bordo-deep mb-2"
  }, "Mulțumim!"), /*#__PURE__*/React.createElement("p", {
    className: "text-ink-muted mb-5"
  }, "Mesajul a ajuns la noi. Te contactăm în maxim 24 de ore."), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setStatus('idle'),
    variant: "outline"
  }, "Trimite alt mesaj")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "nume"
  }, "Nume *"), /*#__PURE__*/React.createElement("input", {
    id: "nume",
    type: "text",
    className: `input ${errors.nume ? 'error' : ''}`,
    value: form.nume,
    onChange: e => setField('nume', e.target.value),
    placeholder: "Numele tău sau al elevului"
  }), errors.nume && /*#__PURE__*/React.createElement("div", {
    className: "text-bordo text-xs mt-1"
  }, errors.nume)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "telefon"
  }, "Telefon *"), /*#__PURE__*/React.createElement("input", {
    id: "telefon",
    type: "tel",
    className: `input ${errors.telefon ? 'error' : ''}`,
    value: form.telefon,
    onChange: e => setField('telefon', e.target.value),
    placeholder: "07xx xxx xxx"
  }), errors.telefon && /*#__PURE__*/React.createElement("div", {
    className: "text-bordo text-xs mt-1"
  }, errors.telefon))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email"
  }, "Email *"), /*#__PURE__*/React.createElement("input", {
    id: "email",
    type: "email",
    className: `input ${errors.email ? 'error' : ''}`,
    value: form.email,
    onChange: e => setField('email', e.target.value),
    placeholder: "email@exemplu.ro"
  }), errors.email && /*#__PURE__*/React.createElement("div", {
    className: "text-bordo text-xs mt-1"
  }, errors.email)), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "materie"
  }, "Materia *"), /*#__PURE__*/React.createElement("select", {
    id: "materie",
    className: `input ${errors.materie ? 'error' : ''}`,
    value: form.materie,
    onChange: e => setField('materie', e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Alege o materie"), window.SUBJECTS.map(s => /*#__PURE__*/React.createElement("option", {
    key: s.slug,
    value: s.name
  }, s.name)), /*#__PURE__*/React.createElement("option", {
    value: "Mai multe"
  }, "Mai multe materii"), /*#__PURE__*/React.createElement("option", {
    value: "Nu știu încă"
  }, "Nu știu încă")), errors.materie && /*#__PURE__*/React.createElement("div", {
    className: "text-bordo text-xs mt-1"
  }, errors.materie)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "tip"
  }, "Pentru ce *"), /*#__PURE__*/React.createElement("select", {
    id: "tip",
    className: `input ${errors.tip ? 'error' : ''}`,
    value: form.tip,
    onChange: e => setField('tip', e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Alege opțiunea"), /*#__PURE__*/React.createElement("option", {
    value: "EN"
  }, "Evaluare Națională (a VIII-a)"), /*#__PURE__*/React.createElement("option", {
    value: "BAC"
  }, "Bacalaureat"), /*#__PURE__*/React.createElement("option", {
    value: "Recuperare"
  }, "Recuperare la materie"), /*#__PURE__*/React.createElement("option", {
    value: "Altceva"
  }, "Altceva")), errors.tip && /*#__PURE__*/React.createElement("div", {
    className: "text-bordo text-xs mt-1"
  }, errors.tip))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "mesaj"
  }, "Spune-ne despre situație *"), /*#__PURE__*/React.createElement("textarea", {
    id: "mesaj",
    rows: "5",
    className: `input resize-none ${errors.mesaj ? 'error' : ''}`,
    value: form.mesaj,
    onChange: e => setField('mesaj', e.target.value),
    placeholder: "Clasa, ce te încurcă, ce ai încercat deja, când vrei să începem... orice ne-ar ajuta să te înțelegem"
  }), errors.mesaj && /*#__PURE__*/React.createElement("div", {
    className: "text-bordo text-xs mt-1"
  }, errors.mesaj)), status === 'error' && /*#__PURE__*/React.createElement("div", {
    className: "text-bordo text-sm p-3 rounded-lg bg-rose/20"
  }, "A apărut o eroare. Încearcă din nou sau scrie-ne pe WhatsApp."), /*#__PURE__*/React.createElement("label", {
    className: "flex items-start gap-3 pt-1 cursor-pointer select-none"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: form.consimtamant,
    onChange: e => setField('consimtamant', e.target.checked),
    className: "mt-1 w-[18px] h-[18px] flex-shrink-0 accent-bordo cursor-pointer"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-ink-muted leading-relaxed"
  }, "Sunt de acord ca datele introduse să fie folosite pentru a fi contactat(ă), conform ", /*#__PURE__*/React.createElement("a", {
    href: "#/confidentialitate",
    className: "underline hover:text-bordo"
  }, "politicii de confidențialitate"), ". Dacă elevul e minor, confirm că sunt părintele sau tutorele acestuia.")), errors.consimtamant && /*#__PURE__*/React.createElement("div", {
    className: "text-bordo text-xs -mt-1"
  }, errors.consimtamant), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3 pt-2"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: submit,
    disabled: status === 'loading',
    variant: "primary",
    size: "lg",
    className: status === 'loading' ? 'opacity-70 cursor-wait' : ''
  }, status === 'loading' ? 'Se trimite...' : 'Trimite mesajul'), /*#__PURE__*/React.createElement(Button, {
    href: WHATSAPP_URL,
    variant: "whatsapp",
    size: "lg"
  }, "Mai bine pe WhatsApp"))));
}
function ContactPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    kicker: "Contact",
    title: "Hai să vorbim",
    subtitle: "Cel mai rapid e pe WhatsApp. Dar dacă preferi formularul, suntem aici. Răspundem în maxim 24 de ore."
  }), /*#__PURE__*/React.createElement("section", {
    className: "py-12 md:py-16 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Acasă',
      href: 'acasa'
    }, {
      label: 'Contact'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid lg:grid-cols-12 gap-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement(ContactForm, null)), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-bordo-deep text-cream rounded-2xl p-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flourish text-rose text-xs uppercase tracking-[0.3em] mb-4",
    style: {
      justifyContent: 'flex-start'
    }
  }, "Răspundem rapid"), /*#__PURE__*/React.createElement("h3", {
    className: "serif-h text-2xl text-cream mb-4"
  }, "Cel mai rapid pe WhatsApp"), /*#__PURE__*/React.createElement("a", {
    href: WHATSAPP_URL,
    target: "_blank",
    rel: "noopener",
    className: "inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#1ebe57] transition-colors w-full justify-center"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    className: "w-5 h-5 fill-white"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.026 0C7.21 0 0 7.21 0 16.026c0 2.83.755 5.605 2.18 8.026L0 32l8.247-2.155a16 16 0 007.78 1.987c8.815 0 16.026-7.21 16.026-16.026S24.84 0 16.026 0z"
  })), "Scrie pe WhatsApp")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-7 shadow-soft space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-wider text-teal font-semibold mb-1"
  }, "Telefon"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+40721628936",
    className: "text-lg font-medium text-bordo-deep hover:text-bordo"
  }, PHONE)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-wider text-teal font-semibold mb-1"
  }, "Email"), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${EMAIL}`,
    className: "text-bordo-deep hover:text-bordo break-all"
  }, EMAIL)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-wider text-teal font-semibold mb-1"
  }, "Sediu"), /*#__PURE__*/React.createElement("div", {
    className: "text-bordo-deep"
  }, ADDRESS)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-wider text-teal font-semibold mb-1"
  }, "Program"), /*#__PURE__*/React.createElement("div", {
    className: "text-bordo-deep text-sm"
  }, "Luni-Vineri: 9:00 - 20:00"), /*#__PURE__*/React.createElement("div", {
    className: "text-bordo-deep text-sm"
  }, "Sâmbătă: 9:00 - 16:00"), /*#__PURE__*/React.createElement("div", {
    className: "text-ink-muted text-sm"
  }, "Duminică: închis"))), /*#__PURE__*/React.createElement("div", {
    className: "aspect-[4/3] rounded-2xl overflow-hidden shadow-soft relative bg-cream-warm"
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "Centru de pregătire Constanța",
    src: "https://www.google.com/maps?q=Strada+Soveja+90+Constanta&output=embed",
    className: "absolute inset-0 w-full h-full border-0",
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade"
  }))))));
}
function PrivacyPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    kicker: "Legal",
    title: "Politică de confidențialitate",
    subtitle: "Cum tratăm datele tale. Pe scurt și pe înțeles."
  }), /*#__PURE__*/React.createElement("section", {
    className: "py-12 md:py-16 px-4 md:px-6 max-w-3xl mx-auto"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Acasă',
      href: 'acasa'
    }, {
      label: 'Confidențialitate'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "prose-article"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Ultima actualizare:"), " 11 mai 2026"), /*#__PURE__*/React.createElement("p", null, "Centru de pregătire Constanța („noi\") respectă confidențialitatea datelor tale și se conformează Regulamentului General privind Protecția Datelor (GDPR, Regulamentul UE 2016/679) și legislației române aplicabile."), /*#__PURE__*/React.createElement("h2", null, "1. Ce date colectăm"), /*#__PURE__*/React.createElement("p", null, "Atunci când completezi formularul de contact sau ne scrii pe WhatsApp/email, colectăm:"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Numele tău (sau al elevului)"), /*#__PURE__*/React.createElement("li", null, "Adresa de email"), /*#__PURE__*/React.createElement("li", null, "Numărul de telefon"), /*#__PURE__*/React.createElement("li", null, "Informații pe care alegi să le incluzi în mesaj (clasa, materia, situația școlară)")), /*#__PURE__*/React.createElement("h2", null, "2. De ce le folosim"), /*#__PURE__*/React.createElement("p", null, "Folosim aceste date ", /*#__PURE__*/React.createElement("strong", null, "exclusiv pentru"), ":"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "A te contacta pentru programarea ședinței de cunoaștere"), /*#__PURE__*/React.createElement("li", null, "A te informa despre serviciile noastre la cererea ta"), /*#__PURE__*/React.createElement("li", null, "A păstra evidența ședințelor și a programărilor tale"), /*#__PURE__*/React.createElement("li", null, "A respecta obligațiile legale (facturare, contabilitate)")), /*#__PURE__*/React.createElement("p", null, "Nu trimitem newsletter, nu trimitem oferte nesolicitate, nu te abonăm la nimic fără să-ți cerem."), /*#__PURE__*/React.createElement("h2", null, "3. Cu cine partajăm datele"), /*#__PURE__*/React.createElement("p", null, "Nu vindem și nu partajăm datele tale cu terți pentru scopuri de marketing. Datele pot fi accesate de:"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Echipa noastră de profesori, strict pentru organizarea ședințelor"), /*#__PURE__*/React.createElement("li", null, "Furnizorul de servicii email (Formspree), strict pentru transmiterea formularului"), /*#__PURE__*/React.createElement("li", null, "Autorități fiscale, conform legii")), /*#__PURE__*/React.createElement("h2", null, "4. Cât timp păstrăm datele"), /*#__PURE__*/React.createElement("p", null, "Păstrăm datele pentru perioada colaborării și încă ", /*#__PURE__*/React.createElement("strong", null, "3 ani"), " după ultima ședință, pentru obligații legale (contabile, fiscale). După, le ștergem definitiv."), /*#__PURE__*/React.createElement("h2", null, "5. Drepturile tale"), /*#__PURE__*/React.createElement("p", null, "Conform GDPR, ai dreptul:"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Să afli ce date avem despre tine"), /*#__PURE__*/React.createElement("li", null, "Să ne ceri să le corectăm dacă sunt greșite"), /*#__PURE__*/React.createElement("li", null, "Să ne ceri să le ștergem (dacă nu există obligație legală de păstrare)"), /*#__PURE__*/React.createElement("li", null, "Să te opui prelucrării lor"), /*#__PURE__*/React.createElement("li", null, "Să retragi consimțământul oricând")), /*#__PURE__*/React.createElement("p", null, "Pentru oricare dintre acestea, scrie-ne la ", /*#__PURE__*/React.createElement("a", {
    href: `mailto:${EMAIL}`
  }, EMAIL), ". Răspundem în maxim 30 de zile."), /*#__PURE__*/React.createElement("h2", null, "6. Datele elevilor minori"), /*#__PURE__*/React.createElement("p", null, "O parte dintre elevii noștri sunt minori. În aceste cazuri, datele de contact (nume, telefon, email) sunt furnizate de ", /*#__PURE__*/React.createElement("strong", null, "părinte sau de tutorele legal"), ", care își dă consimțământul pentru prelucrarea lor. Nu colectăm în mod intenționat date de la copii fără acordul unui adult responsabil. Despre elev păstrăm doar informațiile strict necesare organizării ședințelor (clasă, materie, nivel). Dacă ești părinte și vrei să vezi, să corectezi sau să ștergi datele copilului tău, scrie-ne la ", /*#__PURE__*/React.createElement("a", {
    href: `mailto:${EMAIL}`
  }, EMAIL), "."), /*#__PURE__*/React.createElement("h2", null, "7. Cookies"), /*#__PURE__*/React.createElement("p", null, "Site-ul nostru folosește cookie-uri tehnice strict necesare pentru funcționare (de exemplu, pentru a memora ce variantă de hero ai selectat, dacă deschizi panoul Tweaks). Nu folosim cookie-uri de tracking sau de publicitate."), /*#__PURE__*/React.createElement("h2", null, "8. Securitate"), /*#__PURE__*/React.createElement("p", null, "Datele transmise prin formular sunt criptate (HTTPS). Le stocăm în servicii cu standarde de securitate recunoscute (Formspree, Google Workspace). Cu toate astea, nu putem garanta 100% securitate, internetul nu permite asta. Dacă afli de o problemă, anunță-ne și acționăm imediat."), /*#__PURE__*/React.createElement("h2", null, "9. Contact pentru întrebări"), /*#__PURE__*/React.createElement("p", null, "Orice întrebare despre datele tale: ", /*#__PURE__*/React.createElement("a", {
    href: `mailto:${EMAIL}`
  }, EMAIL), " sau la telefonul ", PHONE, "."), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-ink-muted italic pt-6"
  }, "Acest document e cât se poate de pe înțeles. Dacă ceva tot nu îți e clar, scrie-ne, îți explicăm."))));
}
function TermsPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    kicker: "Legal",
    title: "Termeni și condiții",
    subtitle: "Cum funcționează colaborarea cu noi. Pe scurt și fără surprize."
  }), /*#__PURE__*/React.createElement("section", {
    className: "py-12 md:py-16 px-4 md:px-6 max-w-3xl mx-auto"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Acasă',
      href: 'acasa'
    }, {
      label: 'Termeni și condiții'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "prose-article"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Ultima actualizare:"), " 2 iunie 2026"), /*#__PURE__*/React.createElement("p", null, "Acești termeni descriu condițiile în care Centru de pregătire Constanța („noi\") oferă servicii de meditații și pregătire școlară. Prin programarea unei ședințe, ești de acord cu cele de mai jos."), /*#__PURE__*/React.createElement("h2", null, "1. Serviciile noastre"), /*#__PURE__*/React.createElement("p", null, "Oferim meditații și pregătire școlară la sediul din Constanța, pentru diverse clase și materii: recuperare la materie, pregătire pentru Evaluarea Națională și Bacalaureat. Lucrăm în grupe restrânse de 2-3 elevi, cu materiale fizice și tablă."), /*#__PURE__*/React.createElement("h2", null, "2. Ședința de cunoaștere gratuită"), /*#__PURE__*/React.createElement("p", null, "Prima ședință, împreună cu testul inițial, este ", /*#__PURE__*/React.createElement("strong", null, "gratuită și fără obligații"), ". Scopul ei e să evaluăm nivelul real al elevului și să stabilim împreună un plan. Nu te obligă să continui colaborarea."), /*#__PURE__*/React.createElement("h2", null, "3. Programare și prezență"), /*#__PURE__*/React.createElement("p", null, "Ședințele se programează din timp, de comun acord. Te rugăm să anunți din timp dacă nu poți ajunge, ca să putem reorganiza grupa și să oferim locul altui elev."), /*#__PURE__*/React.createElement("h2", null, "4. Plata"), /*#__PURE__*/React.createElement("p", null, "Tarifele sunt cele afișate pe pagina ", /*#__PURE__*/React.createElement("a", {
    href: "#/preturi"
  }, "Prețuri"), " și se comunică clar înainte de începerea colaborării. Plata se face conform înțelegerii stabilite la prima ședință (pe ședință sau pe pachet). Eventualele modificări de tarif sunt anunțate din timp și nu afectează ședințele deja plătite."), /*#__PURE__*/React.createElement("h2", null, "5. Anulare și reprogramare"), /*#__PURE__*/React.createElement("p", null, "Poți anula sau reprograma o ședință anunțându-ne cu cel puțin ", /*#__PURE__*/React.createElement("strong", null, "24 de ore înainte"), ", telefonic sau pe WhatsApp. Ședințele anunțate în timp util se reprogramează fără costuri."), /*#__PURE__*/React.createElement("h2", null, "6. Responsabilitățile noastre"), /*#__PURE__*/React.createElement("p", null, "Ne angajăm să oferim pregătire de calitate, cu profesori dedicați și un mediu de învățare potrivit. Rezultatele școlare depind însă de mai mulți factori (implicarea elevului, timpul de studiu acasă), așa că nu putem garanta o anumită notă sau un anumit rezultat la examen."), /*#__PURE__*/React.createElement("h2", null, "7. Responsabilitățile tale"), /*#__PURE__*/React.createElement("p", null, "Pentru rezultate bune, contează prezența constantă, efectuarea temelor recomandate și comunicarea deschisă cu profesorul. Pentru elevii minori, părintele sau tutorele susține colaborarea și ne anunță orice schimbare relevantă."), /*#__PURE__*/React.createElement("h2", null, "8. Modificarea termenilor"), /*#__PURE__*/React.createElement("p", null, "Putem actualiza acești termeni din când în când. Versiunea valabilă e cea publicată pe această pagină, cu data ultimei actualizări de mai sus."), /*#__PURE__*/React.createElement("h2", null, "9. Contact"), /*#__PURE__*/React.createElement("p", null, "Pentru orice întrebare legată de acești termeni: ", /*#__PURE__*/React.createElement("a", {
    href: `mailto:${EMAIL}`
  }, EMAIL), " sau ", PHONE, "."), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-ink-muted italic pt-6"
  }, "Vrem o colaborare clară și corectă. Dacă ceva nu îți e limpede, întreabă-ne oricând."))));
}
Object.assign(window, {
  ContactPage,
  PrivacyPage,
  TermsPage,
  ContactForm
});
// App shell: router, Tweaks integration.

const SEO = {
  acasa: {
    t: 'Meditații Constanța — Evaluare Națională & Bacalaureat | Centru de pregătire',
    d: 'Meditații în Constanța pentru orice clasă și materie. Pregătire pentru Evaluarea Națională, Bacalaureat și recuperare la materie, la sediu în Constanța. Prima ședință e gratuită.'
  },
  despre: {
    t: 'Despre noi — Cum lucrăm | Centru de pregătire Constanța',
    d: 'Pornim de la nivelul tău real și construim pas cu pas. Lucrăm în grupe mici de 2-3 elevi, la sediul din Constanța, cu plan personalizat pentru fiecare elev.'
  },
  preturi: {
    t: 'Prețuri meditații Constanța | Centru de pregătire',
    d: 'Vezi prețurile pentru meditații în grupe mici de 2-3 elevi. Prima ședință de cunoaștere și testul inițial sunt gratuite.'
  },
  testimoniale: {
    t: 'Testimoniale — Ce spun elevii și părinții | Centru de pregătire Constanța',
    d: 'Rezultate reale și experiențe ale elevilor și părinților care au lucrat cu noi la pregătirea pentru Evaluarea Națională și Bacalaureat.'
  },
  blog: {
    t: 'Blog — Sfaturi pentru elevi și părinți | Centru de pregătire Constanța',
    d: 'Articole practice despre pregătirea pentru examene, metode de învățare și sprijinul părinților în parcursul școlar.'
  },
  contact: {
    t: 'Contact — Programează o ședință gratuită | Centru de pregătire Constanța',
    d: 'Scrie-ne pe WhatsApp sau completează formularul. Sediu: Strada Soveja nr. 90, Constanța. Răspundem în maxim 24 de ore.'
  },
  confidentialitate: {
    t: 'Politica de confidențialitate | Centru de pregătire Constanța',
    d: 'Cum colectăm și folosim datele tale, exclusiv pentru a te contacta și a-ți oferi serviciile noastre de meditații.'
  },
  termeni: {
    t: 'Termeni și condiții | Centru de pregătire Constanța',
    d: 'Condițiile de colaborare: ședința gratuită, programare, plată, anulare și reprogramare.'
  }
};
function applySeo(main) {
  const s = SEO[main] || SEO.acasa;
  document.title = s.t;
  const set = (sel, attr, val) => {
    const el = document.head.querySelector(sel);
    if (el) el.setAttribute(attr, val);
  };
  set('meta[name="description"]', 'content', s.d);
  set('meta[property="og:title"]', 'content', s.t);
  set('meta[property="og:description"]', 'content', s.d);
  set('meta[name="twitter:title"]', 'content', s.t);
  set('meta[name="twitter:description"]', 'content', s.d);
  set('link[rel="canonical"]', 'href', 'https://centrudepregatire.ro/#/' + (main || 'acasa'));
}
const TWEAK_DEFAULTS = {
  "hero": "editorial",
  "bg": "white",
  "heading": "serif",
  "text": "normal",
  "size": "m"
};
function App() {
  const [route, setRoute] = useRoute();
  const [tweaks, setTweaks] = useState(TWEAK_DEFAULTS);
  const [tweaksOpen, setTweaksOpen] = useState(false);
  useEffect(() => {
    function onMsg(ev) {
      const d = ev?.data;
      if (!d || typeof d !== 'object') return;
      if (d.type === '__activate_edit_mode') {
        setTweaksOpen(true);
        document.body.classList.add('tweaks-on');
      } else if (d.type === '__deactivate_edit_mode') {
        setTweaksOpen(false);
        document.body.classList.remove('tweaks-on');
      }
    }
    window.addEventListener('message', onMsg);
    try {
      window.parent.postMessage({
        type: '__edit_mode_available'
      }, '*');
    } catch {}
    return () => window.removeEventListener('message', onMsg);
  }, []);
  function setTweak(key, value) {
    setTweaks(t => {
      const next = {
        ...t,
        [key]: value
      };
      try {
        window.parent.postMessage({
          type: '__edit_mode_set_keys',
          edits: {
            [key]: value
          }
        }, '*');
      } catch {}
      return next;
    });
  }
  function closeTweaks() {
    setTweaksOpen(false);
    document.body.classList.remove('tweaks-on');
    try {
      window.parent.postMessage({
        type: '__edit_mode_dismissed'
      }, '*');
    } catch {}
  }
  const parts = route.split('/').filter(Boolean);
  const main = parts[0] || 'acasa';
  const sub = parts[1];
  useEffect(() => {
    applySeo(main);
  }, [main]);
  useEffect(() => {
    const el = document.documentElement;
    el.dataset.bg = tweaks.bg || 'white';
    el.dataset.heading = tweaks.heading || 'serif';
    el.dataset.text = tweaks.text || 'normal';
    el.dataset.size = tweaks.size || 'm';
  }, [tweaks.bg, tweaks.heading, tweaks.text, tweaks.size]);
  let page;
  switch (main) {
    case '':
    case 'acasa':
      page = /*#__PURE__*/React.createElement(HomePage, {
        heroVariant: tweaks.hero
      });
      break;
    case 'despre':
      page = /*#__PURE__*/React.createElement(AboutPage, null);
      break;
    case 'preturi':
      page = /*#__PURE__*/React.createElement(PricesPage, null);
      break;
    case 'testimoniale':
      page = /*#__PURE__*/React.createElement(TestimonialsPage, null);
      break;
    case 'blog':
      nav('acasa');
      page = /*#__PURE__*/React.createElement(HomePage, {
        heroVariant: tweaks.hero
      });
      break;
    case 'contact':
      page = /*#__PURE__*/React.createElement(ContactPage, null);
      break;
    case 'confidentialitate':
      page = /*#__PURE__*/React.createElement(PrivacyPage, null);
      break;
    case 'termeni':
      page = /*#__PURE__*/React.createElement(TermsPage, null);
      break;
    default:
      page = /*#__PURE__*/React.createElement(NotFound, null);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(Header, {
    route: route
  }), /*#__PURE__*/React.createElement("main", {
    key: route,
    className: "animate-fade-in"
  }, page), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(WhatsAppFloat, null), /*#__PURE__*/React.createElement(CookieBanner, null), /*#__PURE__*/React.createElement(TweaksPanel, {
    visible: tweaksOpen,
    onClose: closeTweaks,
    tweaks: tweaks,
    setTweak: setTweak
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
