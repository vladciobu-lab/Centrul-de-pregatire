// Site content: subjects, teachers, testimonials, blog, prices.

const SUBJECTS = [{
  slug: 'romana',
  name: 'Limba È™i Literatura RomÃ¢nÄƒ',
  short: 'RomÃ¢nÄƒ',
  tagline: 'De la â€žnu È™tiu ce sÄƒ scriu" la eseu care chiar spune ceva.',
  icon: 'ðŸ“–',
  exams: ['EN', 'BAC'],
  en: {
    what: 'Acoperim toatÄƒ programa de gimnaziu: Ã®nÈ›elegerea textului, scriere creativÄƒ, gramaticÄƒ (pÄƒrÈ›i de vorbire, sintaxÄƒ), figuri de stil, modurile de expunere.',
    how: 'ÃŽncepem cu un text Ã®mpreunÄƒ, Ã®l citim, Ã®l pufÄƒim, Ã®l Ã®ntoarcem pe toate pÄƒrÈ›ile pÃ¢nÄƒ Ã®nÈ›elegi exact ce vrea autorul. Apoi exersezi pe subiecte de la examene din anii trecuÈ›i.',
    examples: ['Subiectul I, text la prima vedere', 'Compunere despre o Ã®ntÃ¢mplare realÄƒ sau imaginarÄƒ', 'Acordul subiect-predicat cÃ¢nd nu e evident', 'DiferenÈ›a dintre comparaÈ›ie È™i metaforÄƒ']
  },
  bac: {
    what: 'ToatÄƒ programa de liceu: curentele literare (clasicism â†’ postmodernism), autorii canonici (Eminescu, Caragiale, Rebreanu, Sadoveanu, CÄƒlinescu, Blaga, Arghezi, StÄƒnescu È™i ceilalÈ›i), genuri È™i specii, eseu structurat.',
    how: 'Nu memorÄƒm cliÈ™ee. Citim textul, vorbim despre el, abia apoi scriem eseul. AÈ™a rÄƒmÃ¢ne ceva Ã®n cap È™i ai ce sÄƒ livrezi original la examen.',
    examples: ['Eseu despre romanul interbelic (â€žIon", â€žPÄƒdurea spÃ¢nzuraÈ›ilor", â€žUltima noapte de dragoste...")', 'ParticularitÄƒÈ›ile unei poezii moderniste', 'Caracterizarea unui personaj din basm cult', 'Subiectul al II-lea, text argumentativ']
  },
  recovery: {
    what: 'Pentru orice clasÄƒ, V pÃ¢nÄƒ la XII. Capitole rÄƒmase neÃ®nÈ›elese, eseuri care nu Ã®È›i ies, gramaticÄƒ care te Ã®ncurcÄƒ, lecturi pe care le-ai sÄƒrit È™i acum nu mai prinzi firul.',
    how: 'Vii cu ce te È›ine Ã®n loc. LucrÄƒm pe acel capitol pÃ¢nÄƒ Ã®È›i intrÄƒ, apoi recapitulÄƒm cu el la mijloc. FÄƒrÄƒ sÄƒ reluÄƒm tot ce ai Ã®nvÄƒÈ›at deja bine.',
    examples: ['Modurile verbale cÃ¢nd le-ai pierdut pe la a VII-a', 'Pronumele relativ vs interogativ', 'Cum citeÈ™ti o poezie cÃ¢nd nu Ã®È›i spune nimic', 'Subordonata pe care nu o recunoÈ™ti']
  }
}, {
  slug: 'matematica',
  name: 'MatematicÄƒ',
  short: 'MatematicÄƒ',
  tagline: 'Crezi cÄƒ matematica nu e pentru tine? Hai sÄƒ te contrazicem.',
  icon: 'ðŸ“',
  exams: ['EN', 'BAC'],
  en: {
    what: 'Numere reale, rapoarte È™i proporÈ›ii, ecuaÈ›ii È™i sisteme, funcÈ›ii, geometria planÄƒ (triunghi, patrulater, cerc), arii È™i volume, statisticÄƒ simplÄƒ.',
    how: 'La fiecare problemÄƒ ne uitÄƒm Ã®ntÃ¢i ce ne dÄƒ, ce ne cere, È™i ce metodÄƒ se potriveÈ™te. Cu timpul recunoÈ™ti tipurile È™i nu mai blochezi Ã®n faÈ›a subiectului.',
    examples: ['Subiectul I, exerciÈ›ii scurte cu variantÄƒ', 'ProblemÄƒ de geometrie cu cerc Ã®nscris', 'FuncÈ›ia de gradul I, graficul È™i intersecÈ›iile', 'EcuaÈ›ia de gradul II Ã®n Q']
  },
  bac: {
    what: 'AlgebrÄƒ (matrici, determinanÈ›i, sisteme), analizÄƒ (limite, derivate, integrale), geometrie analiticÄƒ, combinatoricÄƒ, numere complexe. Pe profil M1, M2 sau pedagogic, adaptÄƒm.',
    how: 'Pentru fiecare temÄƒ: Ã®nÈ›elegem ce se Ã®ntÃ¢mplÄƒ geometric/intuitiv, apoi formula. Apoi 20-30 de exerciÈ›ii pe acel tip pÃ¢nÄƒ devii rapid.',
    examples: ['Integrale prin pÄƒrÈ›i È™i prin substituÈ›ie', 'Studiul unei funcÈ›ii cu derivate', 'Sistem de matrici cu parametru', 'ProbabilitÄƒÈ›i Ã®n extrageri succesive']
  },
  recovery: {
    what: 'Orice clasÄƒ, orice nivel. Pierzi 3 ore din care prinzi o noÈ›iune nouÄƒ È™i nu mai Ã®nÈ›elegi nimic dupÄƒ? AÈ™a Ã®ncepem.',
    how: 'IdentificÄƒm exact unde s-a rupt firul (uneori e cu 2 ani Ã®n urmÄƒ). ReparÄƒm acolo, apoi prindem din urmÄƒ. Nu sÄƒrim peste fundaÈ›ie.',
    examples: ['FracÈ›ii care nu Ã®È›i â€žintrÄƒ" de la clasa a V-a', 'Procentele cÃ¢nd le calculezi mereu altfel', 'Geometria pe care nu o â€žvezi"', 'EcuaÈ›iile cu modul']
  }
}, {
  slug: 'logica',
  name: 'LogicÄƒ, Argumentare È™i Comunicare',
  short: 'LogicÄƒ',
  tagline: 'Materia care pare grea pentru cÄƒ nimeni nu Ã®È›i spune la ce foloseÈ™te.',
  icon: 'ðŸ§ ',
  exams: ['BAC'],
  bac: {
    what: 'Tipuri de argumente, raÈ›ionamentul deductiv È™i inductiv, propoziÈ›ii È™i predicate, silogisme, sofisme. Subiectele de la BAC pe profil uman.',
    how: 'PlecÄƒm de la exemple reale (reclame, discuÈ›ii, articole) È™i ajungem la formule. Nu invers. AÈ™a logica devine ceva ce vezi Ã®n jurul tÄƒu, nu ceva abstract.',
    examples: ['Identificarea premiselor È™i a concluziei', 'Sofisme frecvente (ad hominem, om de paie)', 'Conversiune È™i obversiune', 'Silogisme corect formulate vs invalide']
  },
  recovery: {
    what: 'Pentru elevii de liceu care nu â€žprind" materia din clasÄƒ. Recuperare punctualÄƒ pe capitolele care te Ã®ncurcÄƒ.',
    how: 'IdentificÄƒm capitolul-problemÄƒ, lucrÄƒm pe el pÃ¢nÄƒ Ã®È›i intrÄƒ. Apoi facem subiecte tip BAC ca sÄƒ te asiguri.',
    examples: ['Tabelele de adevÄƒr', 'Argumentarea unei opinii Ã®ntr-un paragraf', 'Identificarea sofismelor Ã®n texte date']
  }
}, {
  slug: 'istorie',
  name: 'Istorie',
  short: 'Istorie',
  tagline: 'DacÄƒ o tratezi ca povestire, e uÈ™or. Hai sÄƒ o tratÄƒm aÈ™a.',
  icon: 'ðŸ›ï¸',
  exams: ['BAC'],
  bac: {
    what: 'Programa de BAC: spaÈ›iul romÃ¢nesc Ã®ntre medieval È™i modern, secolul XX (cele douÄƒ rÄƒzboaie, comunismul, 1989), Europa È™i lumea, instituÈ›ii.',
    how: 'Construim cronologia ca un fir narativ. De ce s-a Ã®ntÃ¢mplat ceva, nu doar cÃ¢nd. AÈ™a rÄƒmÃ¢ne, È™i ai ce sÄƒ scrii la eseul de 30 de puncte.',
    examples: ['Eseu despre RomÃ¢nia Ã®n Primul RÄƒzboi Mondial', 'Sursele istorice, analizÄƒ È™i comparÄƒ', 'InstituÈ›iile statului romÃ¢n modern', 'RÄƒzboiul Rece È™i efectele asupra RomÃ¢niei']
  },
  recovery: {
    what: 'Pentru clasele de liceu. Capitole rÄƒmase Ã®n urmÄƒ, recapitulÄƒri Ã®nainte de tezÄƒ, pregÄƒtire generalÄƒ.',
    how: 'Vii cu ce te Ã®ncurcÄƒ, vorbim despre acel context istoric ca despre o poveste, apoi structurÄƒm ce trebuie sÄƒ È™tii.',
    examples: ['ConstituÈ›iile RomÃ¢niei', 'MiÈ™carea paÈ™optistÄƒ pe Ã®nÈ›elesul tÄƒu', 'RomÃ¢nia Ã®n comunism, etape']
  }
}, {
  slug: 'geografie',
  name: 'Geografie',
  short: 'Geografie',
  tagline: 'HartÄƒ, climÄƒ, populaÈ›ie, tot ce pare â€žÃ®nvÄƒÈ›at pe de rost" are de fapt o logicÄƒ.',
  icon: 'ðŸ—ºï¸',
  exams: ['BAC'],
  bac: {
    what: 'Europa È™i RomÃ¢nia: relief, climÄƒ, hidrografie, vegetaÈ›ie, populaÈ›ie, aÈ™ezÄƒri, economie. Harta, cititÄƒ corect, nu memoratÄƒ mecanic.',
    how: 'LucrÄƒm cu harta Ã®n faÈ›Äƒ tot timpul. ÃŽnveÈ›i sÄƒ o citeÈ™ti, nu sÄƒ o memorezi. DiferenÈ›a se vede la examen, cÃ¢nd Ã®È›i picÄƒ un subiect cu hartÄƒ mutÄƒ.',
    examples: ['Identificare unitÄƒÈ›ilor de relief pe harta RomÃ¢niei', 'Climatul temperat-continental, cauze È™i efecte', 'Bazinele hidrografice principale', 'PopulaÈ›ia È™i migraÈ›ia post-1990']
  },
  recovery: {
    what: 'Liceu, mai ales clasa a IX-a È™i a XI-a. RecapitulÄƒri pe capitole, ajutor cu tezele, Ã®nÈ›elegerea hÄƒrÈ›ii.',
    how: 'Pornim de la capitolul greu, Ã®l facem cu harta È™i exemple concrete, apoi exersezi.',
    examples: ['MunÈ›ii CarpaÈ›i, ce trebuie sÄƒ È™tii', 'Statele membre UE, pe regiuni', 'Resursele naturale ale RomÃ¢niei']
  }
}, {
  slug: 'biologie',
  name: 'Biologie',
  short: 'Biologie',
  tagline: 'Anatomie, geneticÄƒ, ecologie, explicate ca sÄƒ-È›i rÄƒmÃ¢nÄƒ, nu ca sÄƒ le bifezi.',
  icon: 'ðŸ§¬',
  exams: ['BAC'],
  bac: {
    what: 'Programa BAC: anatomia È™i fiziologia omului (toate sistemele), geneticÄƒ, ecologie, evoluÈ›ie. Profil real È™i uman, adaptÄƒm conÈ›inutul.',
    how: 'Pornim de la â€žcum funcÈ›ioneazÄƒ" È™i abia apoi venim cu termenii. AÈ™a rÄƒmÃ¢ne, fiindcÄƒ a fÄƒcut sens, nu fiindcÄƒ l-ai bibilit.',
    examples: ['Sistemul nervos, de la neuron la reflex', 'Genetica, probleme de transmitere a caracterelor', 'Ciclul cardiac pe Ã®nÈ›elesul tÄƒu', 'Ecosisteme È™i relaÈ›ii trofice']
  },
  recovery: {
    what: 'Pentru orice clasÄƒ, gimnaziu È™i liceu. Capitole pe care le-ai sÄƒrit È™i acum nu mai prinzi firul.',
    how: 'ReluÄƒm capitolul, facem o schemÄƒ vizualÄƒ, exersÄƒm. Cu timpul Ã®È›i construieÈ™ti Ã®n cap harta Ã®ntregului corp.',
    examples: ['Celula, organite È™i funcÈ›ii', 'Reproducerea la plante', 'Sistemul digestiv pas cu pas']
  }
}];
const TEAM = [{
  id: 'andrei',
  name: 'Andrei P.',
  subject: 'MatematicÄƒ',
  age: 28,
  bio: 'A fÄƒcut Politehnica, a predat la pregÄƒtire intensivÄƒ 4 ani. Are rÄƒbdare cÃ¢t tot Dobrogea.'
}, {
  id: 'ioana',
  name: 'Ioana M.',
  subject: 'RomÃ¢nÄƒ & LogicÄƒ',
  age: 27,
  bio: 'Filologie, masterat Ã®n literaturÄƒ comparatÄƒ. Crede cÄƒ orice text are o cheie, doar trebuie gÄƒsitÄƒ.'
}, {
  id: 'tudor',
  name: 'Tudor R.',
  subject: 'Istorie & Geografie',
  age: 31,
  bio: 'Profesor de istorie de 6 ani. Spune cÄƒ tot ce s-a Ã®ntÃ¢mplat Ã®n lume e legat, È™i o demonstreazÄƒ la fiecare È™edinÈ›Äƒ.'
}, {
  id: 'maria',
  name: 'Maria C.',
  subject: 'Biologie & MatematicÄƒ (EN)',
  age: 26,
  bio: 'MedicinÄƒ ani 5, predÄƒ paralel pasionatÄƒ. ExplicÄƒ sistemul nervos cu o foaie A4 È™i 2 culori.'
}];
const TESTIMONIALS = [{
  id: 't1',
  name: 'Samira Rojin',
  role: 'ElevÄƒ',
  subject: 'LogicÄƒ (BAC)',
  result: 'BAC: 9,15 la logicÄƒ',
  quote: 'Am luat nota 9,15 in bacalaureat la logicÄƒ doar datoritÄƒ È›ie È™i nu cred ca as fi reusit sa fac asta fara tine, deoarece nici nu stiam ce fel de materie este logica in prima sedinta de meditatii... indrum cu drag sa mergeti aici. O fata frumoasa, carismatica, isteaÈ›Äƒ si cu foarte multÄƒ rabdare. M-as mai intoarce in trecut doar pentru inca cateva sedinte minunate alaturi de tine :)'
}, {
  id: 't2',
  name: 'Sara Al Saleh',
  role: 'ElevÄƒ',
  subject: 'Istorie (BAC)',
  quote: 'Raluca este un meditator excelent, m-a ajutat sÄƒ Ã®nÈ›eleg materia la istorie Ã®n mai puÈ›in de 4 luni pÃ¢nÄƒ la BAC. Am primit explicaÈ›ii pe Ã®nÈ›elesul meu, fÄƒrÄƒ metoda Ã®nvechitÄƒ de Ã®nvÄƒÈ›are. Am vÄƒzut Ã®n Raluca un mentor dedicat, rÄƒbdÄƒtor, cu o abordare modernÄƒ!'
}, {
  id: 't3',
  name: 'Elena Ezariu',
  role: 'ElevÄƒ',
  subject: 'Bacalaureat',
  quote: 'DeÈ™i m-am alÄƒturat la jumÄƒtatea anului, am gÄƒsit aici tot sprijinul de care aveam nevoie. ExplicaÈ›iile sunt clare, atmosfera plÄƒcutÄƒ, iar la bacalaureat am avut un rezultat foarte bun. Recomand cu drag!'
}, {
  id: 't4',
  name: 'Vlad Malureanu',
  role: 'Elev',
  subject: 'PregÄƒtire BAC',
  quote: 'Nu pot spune decÃ¢t cuvinte de laudÄƒ. Cea mai bunÄƒ profesoarÄƒ cu cele mai bune rezultate. Este o experienÈ›Äƒ unicÄƒ deoarece lucreazÄƒ din plÄƒcere È™i are cele mai bune explicaÈ›ii. Recomand!'
}, {
  id: 't5',
  name: 'Vasile Iulian',
  role: 'Elev',
  subject: 'MeditaÈ›ii',
  quote: 'Recomand cu Ã®ncredere meditaÈ›iile. Materia e predatÄƒ pe Ã®nÈ›eles È™i se Ã®nvaÈ›Äƒ foarte repede È™i uÈ™or.'
}, {
  id: 't6',
  name: 'Livia Nadrag',
  role: 'Local Guide Google',
  subject: 'MeditaÈ›ii',
  quote: 'Nu pot spune decÃ¢t cuvinte de laudÄƒ. Recomand din suflet! Super om, super profesor!'
}, {
  id: 't7',
  name: 'Thelanis',
  role: 'Elev',
  subject: 'LogicÄƒ (BAC)',
  result: 'ToatÄƒ materia Ã®n 2 luni',
  quote: 'ÃŽn mai puÈ›in de 2 luni am reuÈ™it sÄƒ Ã®nvÄƒÈ› toatÄƒ materia la logicÄƒ!'
}];
const PRICES = [{
  id: 'individual',
  title: 'O È™edinÈ›Äƒ pe sÄƒptÄƒmÃ¢nÄƒ',
  price: '100',
  unit: 'lei / È™edinÈ›Äƒ',
  duration: '1h 45 min',
  bullets: ['GrupÄƒ micÄƒ de 2-3 elevi', 'Materiale incluse, fiÈ™e, subiecte', 'Tu alegi ritmul È™i frecvenÈ›a'],
  cta: 'Vreau sÄƒ Ã®ncerc'
}, {
  id: 'intensiv',
  title: 'Pachet intensiv sÄƒptÄƒmÃ¢nal',
  price: '250',
  unit: 'lei / sÄƒptÄƒmÃ¢nÄƒ',
  duration: '3 È™edinÈ›e a cÃ¢te 1h 45 min',
  featured: true,
  bullets: ['Pentru cei care au nevoie de progres rapid', 'GrupÄƒ micÄƒ de 2-3 elevi', 'Decis Ã®mpreunÄƒ dupÄƒ È™edinÈ›a de cunoaÈ™tere', 'Cu materia structuratÄƒ sÄƒptÄƒmÃ¢nal'],
  cta: 'Spune-mi mai multe'
}, {
  id: 'gratuit',
  title: 'È˜edinÈ›Äƒ de cunoaÈ™tere',
  price: '0',
  unit: 'gratuit',
  duration: '1h, 1h 45 min',
  badge: 'GRATUIT',
  bullets: ['Test iniÈ›ial complet pe toatÄƒ materia', 'Acoperim teoreme, principii, moduri de rezolvare', 'Vedem Ã®mpreunÄƒ unde stai È™i ce ai nevoie', 'FÄƒrÄƒ obligaÈ›ii, fÄƒrÄƒ costuri'],
  cta: 'ProgrameazÄƒ acum'
}];
const BLOG = [{
  slug: 'cum-te-apuci-de-invatat',
  title: 'Cum te apuci de Ã®nvÄƒÈ›at cÃ¢nd simÈ›i cÄƒ nu mai poÈ›i',
  date: '2026-03-12',
  author: 'Ioana M.',
  category: 'Sfaturi Ã®nvÄƒÈ›are',
  excerpt: 'DacÄƒ te uiÈ›i la cartea de matematicÄƒ È™i simÈ›i cÄƒ È›i se face rÄƒu, nu eÈ™ti singur. Hai sÄƒ vorbim despre ce funcÈ›ioneazÄƒ cÃ¢nd totul pare imposibil.',
  body: `Hai sÄƒ fim sinceri o secundÄƒ. DacÄƒ te-ai uitat la cartea de mate sau la programa de BAC È™i È›i-a venit sÄƒ Ã®nchizi laptopul È™i sÄƒ nu mai vezi nimic, È™tim cum e. È˜i noi am fost acolo. È˜i mulÈ›i dintre elevii noÈ™tri au venit prima datÄƒ exact din locul Äƒsta.

## De ce e atÃ¢t de greu sÄƒ te apuci

Nu e cÄƒ eÈ™ti leneÈ™. Nu e cÄƒ â€žnu Ã®È›i place Ã®nvÄƒÈ›atul". Creierul tÄƒu Ã®ncearcÄƒ sÄƒ te protejeze de ceva care i se pare uriaÈ™ È™i imposibil. E o reacÈ›ie umanÄƒ, nu un defect personal.

Problema e cÄƒ atunci cÃ¢nd amÃ¢ni, lucrul Äƒla creÈ™te. Capitolul rÄƒmas neÃ®nÈ›eles devine douÄƒ capitole. DouÄƒ devin patru. È˜i dupÄƒ o lunÄƒ te uiÈ›i la materia totalÄƒ È™i simÈ›i cÄƒ â€žnu mai e nimic de fÄƒcut".

Vestea bunÄƒ: **mai e mult de fÄƒcut**. Doar trebuie sÄƒ Ã®ncepi mic.

## ÃŽncepe ridicol de mic

Serios. Ridicol de mic.

- 15 minute. Nu 2 ore.
- O singurÄƒ problemÄƒ. Nu un capitol.
- O singurÄƒ formulÄƒ. Nu toatÄƒ algebra.

Lucrul Äƒsta nu sunÄƒ impresionant, dar funcÈ›ioneazÄƒ din douÄƒ motive. Primul: pleci. E partea cea mai grea. Al doilea: dupÄƒ 15 minute deja eÈ™ti Ã®n ritm È™i ai chef sÄƒ mai faci 15.

## IdentificÄƒ ce nu Ã®nÈ›elegi, exact

â€žNu Ã®nÈ›eleg mate" e prea vag. Nu poÈ›i repara aÈ™a ceva.

â€žNu Ã®nÈ›eleg cum se rezolvÄƒ ecuaÈ›iile de gradul II cÃ¢nd bÂ² - 4ac < 0", asta e ceva concret. Asta Ã®È›i spune exact unde sÄƒ te uiÈ›i. Asta poÈ›i cere ajutor cu.

> Pune-È›i Ã®ntrebarea: dacÄƒ ar trebui sÄƒ-i explici asta unui prieten chiar acum, unde te-ai bloca primul?

Acolo e fisura. Acolo trebuie sÄƒ mergi.

## Nu te uita la cei mai buni din clasÄƒ

ComparaÈ›ia cu ceilalÈ›i e capcana cea mai mare. Tu ai pornit de unde ai pornit. Ai propriul tÄƒu drum. Cineva care pare cÄƒ â€žÈ™tie tot" probabil are 2 ani de muncÄƒ pe care nu Ã®i vezi. Sau pur È™i simplu Ã®i vine uÈ™or materia asta, dar e Ã®ncurcat la altÄƒ materie unde tu eÈ™ti OK.

ComparÄƒ-te cu tine de sÄƒptÄƒmÃ¢na trecutÄƒ. AtÃ¢t.

## Cere ajutor mai devreme decÃ¢t crezi

Cei mai mulÈ›i elevi vin la noi cÃ¢nd deja sunt panicaÈ›i È™i au pierdut luni Ã®ntregi. E Ã®n regulÄƒ, lucrÄƒm È™i de acolo. Dar e mult mai uÈ™or dacÄƒ vii cÃ¢nd abia a Ã®nceput sÄƒ se rupÄƒ firul.

Nu existÄƒ o linie dupÄƒ care â€že prea tÃ¢rziu". Dar e o linie dupÄƒ care Ã®È›i cere mult mai puÈ›in efort sÄƒ recuperezi. Aceea linie e mai aproape decÃ¢t crezi.

## Concret: ce poÈ›i face azi

1. Deschide-È›i caietul de la materia care te sperie cel mai tare.
2. CiteÈ™te titlul ultimei lecÈ›ii pe care ai Ã®nÈ›eles-o complet.
3. CiteÈ™te titlul primei lecÈ›ii la care te-ai pierdut.
4. Acolo, exact, e locul de unde trebuie sÄƒ porneÈ™ti.

AtÃ¢t. MÃ¢ine te apuci de prima lecÈ›ie de pe care te-ai pierdut. È˜i mÃ¢ine vorbim de mÃ¢ine.

DacÄƒ vrei ajutor concret, suntem aici. Prima È™edinÈ›Äƒ e gratuitÄƒ, folosim 1-2 ore sÄƒ vedem Ã®mpreunÄƒ exact unde stai È™i ce poÈ›i face. FÄƒrÄƒ presiune, fÄƒrÄƒ sÄƒ-È›i promitem cÄƒ â€žtotul va fi bine Ã®n 2 sÄƒptÄƒmÃ¢ni". Realist È™i uman.`
}, {
  slug: 'ghidul-parintelui',
  title: 'Ghidul pÄƒrintelui: ce sÄƒ faci cÃ¢nd copilul â€žnu Ã®nÈ›elege" matematica',
  date: '2026-02-20',
  author: 'Andrei P.',
  category: 'Pentru pÄƒrinÈ›i',
  excerpt: 'Vine acasÄƒ cu note mici, zice cÄƒ â€žnu pricepe nimic", iar tu nu mai È™tii cum sÄƒ-l ajuÈ›i fÄƒrÄƒ sÄƒ te enervezi sau sÄƒ-l descurajezi. IatÄƒ un ghid practic.',
  body: `Ai venit aici pentru cÄƒ eÈ™ti Ã®ngrijorat. Asta e deja semn bun, copilul tÄƒu are pe cineva care Ã®i pasÄƒ. MulÈ›i copii nu au asta.

## Primul lucru: nu mai folosi cuvÃ¢ntul â€žrÄƒu" sau â€žslab"

È˜tiu, e tentant. Vine acasÄƒ cu un 4, te enervezi, Ã®i scapÄƒ â€ždar tu chiar nu pricepi nimic". Sau zicÃ¢nd altcuiva la telefon, Ã®n prezenÈ›a lui: â€že mai slab la mate". Crede-mÄƒ, **aude** È™i **memoreazÄƒ**.

ÃŽn cÃ¢teva luni, copilul tÄƒu se va prezenta singur ca â€žrÄƒu la matematicÄƒ". È˜i dupÄƒ aia, cÃ¢nd stÄƒ Ã®n faÈ›a unei probleme, primul gÃ¢nd va fi: â€žoricum sunt rÄƒu la mate, ce rost are". È˜i nu va Ã®ncerca.

Asta e cea mai mare frÃ¢nÄƒ pe care o pune un pÄƒrinte fÄƒrÄƒ sÄƒ vrea.

## ÃŽntreabÄƒ-l ce nu Ã®nÈ›elege, concret

ÃŽn loc de â€žde ce iar 5?" Ã®ncearcÄƒ: â€žaratÄƒ-mi un exerciÈ›iu de la tezÄƒ. Care a fost cel mai greu? Ce È›i-a venit Ã®n cap cÃ¢nd l-ai vÄƒzut?".

Vei descoperi rapid cÄƒ:
- Fie nu Ã®nÈ›elege un concept de fundament (de la clasa a V-a, a VI-a)
- Fie are o fricÄƒ concretÄƒ (de profesor, de a fi Ã®ntrebat, de a se face de rÃ¢s)
- Fie pur È™i simplu nu È™i-a fÄƒcut temele

Toate trei se rezolvÄƒ diferit. Dar Ã®ntÃ¢i trebuie sÄƒ le identifici.

## Nu Ã®i face tu temele

TentaÈ›ia e mare. â€žHai cÄƒ È›i-o fac eu, oricum nu pricepi, mÄƒcar nu mai stÄƒm pÃ¢nÄƒ la 11". ÃŽnÈ›eleg.

Dar dacÄƒ faci asta:
- El nu Ã®nvaÈ›Äƒ nimic
- Tu te enervezi cÄƒ â€žde ce trebuie sÄƒ fac eu mate la 35 de ani"
- Profesorul vede temele perfecte È™i crede cÄƒ pricepe, deci accelereazÄƒ, È™i el rÄƒmÃ¢ne È™i mai Ã®n urmÄƒ

E mai bine sÄƒ nu facÄƒ tema deloc decÃ¢t sÄƒ o faci tu pentru el.

## CautÄƒ ajutor calificat Ã®nainte sÄƒ fie crizÄƒ

DacÄƒ vezi cÄƒ nota scade 2 trimestre la rÃ¢nd la aceeaÈ™i materie, nu mai aÈ™tepta sÄƒ â€žtreacÄƒ de la sine". Nu trece.

Un meditator nu Ã®nseamnÄƒ cÄƒ eÈ™ti pÄƒrinte rÄƒu. ÃŽnseamnÄƒ cÄƒ eÈ™ti pÄƒrinte atent. Profesoara de la È™coalÄƒ are 28 de elevi de explicat È™i 3 clase paralele. Nu poate sÄƒ se opreascÄƒ 20 de minute la fiecare ca sÄƒ-i explice altfel.

## Ce sÄƒ cauÈ›i la un meditator

- **Test iniÈ›ial.** DacÄƒ te primeÈ™te direct la È™edinÈ›Äƒ fÄƒrÄƒ sÄƒ vadÄƒ unde stÄƒ copilul, e suspect.
- **Onestitate.** DacÄƒ Ã®È›i promite â€žnota 10 garantat Ã®n 2 luni", fugi. Nimeni nu poate promite asta.
- **RÄƒbdare.** ÃŽntreabÄƒ-È›i copilul dupÄƒ prima È™edinÈ›Äƒ cum s-a simÈ›it. DacÄƒ spune cÄƒ â€žera nervos cÄƒ nu pricepeam", nu e omul potrivit.

> Noi facem mereu o È™edinÈ›Äƒ de cunoaÈ™tere gratuitÄƒ la Ã®nceput. Nu ca sÄƒ te convingem, ci ca sÄƒ fim sinceri unul cu altul de la Ã®nceput.

## RÄƒbdare. Mai multÄƒ decÃ¢t crezi.

Recuperarea dureazÄƒ. DacÄƒ a strÃ¢ns goluri de 2 ani, nu le acoperÄƒ Ã®n 4 È™edinÈ›e. Dar le acoperÄƒ Ã®n 4 luni, dacÄƒ lucreazÄƒ constant. Asta e investiÈ›ia, nu doar bani, ci timp È™i rÄƒbdare.

È˜i un ultim lucru: copilul tÄƒu nu e â€žmai slab" decÃ¢t cel al vecinilor. Doar a avut un drum diferit. PlecÄƒm de unde e el È™i ajungem unde trebuie sÄƒ ajungÄƒ.`
}, {
  slug: 'mituri-bacalaureat',
  title: '5 mituri despre Bacalaureat care te sperie degeaba',
  date: '2026-01-15',
  author: 'Tudor R.',
  category: 'Bacalaureat',
  excerpt: 'CirculÄƒ tot felul de poveÈ™ti despre BAC: cÄƒ â€žte ia pe ce nu te aÈ™tepÈ›i", cÄƒ â€žnu picÄƒ nimic din ce ai Ã®nvÄƒÈ›at". Hai sÄƒ le luÄƒm pe rÃ¢nd.',
  body: `DacÄƒ eÈ™ti Ã®n clasa a XII-a, probabil ai auzit deja multe lucruri despre BAC. Unele sunt adevÄƒrate. Multe, nu.

## Mit 1: â€žSubiectele sunt mereu pe ce nu te aÈ™tepÈ›i"

Fals. BAC-ul are o programÄƒ publicÄƒ, structuratÄƒ, predictibilÄƒ. Subiectele anilor trecuÈ›i sunt disponibile pe site-ul Ministerului. Tipurile de probleme se repetÄƒ. Greutatea variazÄƒ puÈ›in de la an la an, dar structura e aceeaÈ™i.

DacÄƒ te-ai pregÄƒtit pe variantele oficiale È™i ai Ã®nÈ›eles fiecare tip de subiect, **nu o sÄƒ fii surprins**. Vei recunoaÈ™te ce È›i se cere.

## Mit 2: â€žTrebuie sÄƒ È™tii totul perfect"

Fals. Pragul de promovare e 5. Pragul de â€žbine" e 7. Pragul de â€žfoarte bine" e 9. Nu trebuie sÄƒ iei 10 la toate.

Ce trebuie sÄƒ faci: sÄƒ identifici ce poÈ›i rezolva sigur, sÄƒ te asiguri cÄƒ acele subiecte Ã®È›i ies, apoi sÄƒ Ã®ncerci celelalte. MulÈ›i elevi pierd puncte la lucruri pe care le È™tiu, pentru cÄƒ s-au panicat È™i au sÄƒrit direct la cele grele.

## Mit 3: â€žDacÄƒ nu ai luat note bune toatÄƒ liceala, nu mai ai È™anse"

Fals total. Vedem an de an elevi care au avut note de 6-7 toatÄƒ liceala È™i au luat 8.50 la BAC. È˜i invers. Notele de pe parcurs nu garanteazÄƒ nimic.

BAC-ul e o muncÄƒ concentratÄƒ pe cÃ¢teva luni. Cei care lucreazÄƒ serios din februarie-martie, chiar dacÄƒ au pornit slab, pot ajunge la note bune. Mai ales dacÄƒ au cineva care Ã®i structureazÄƒ.

## Mit 4: â€žNu ai timp sÄƒ recuperezi dupÄƒ CrÄƒciun"

Fals. Mai ai 5 luni. Cu un ritm de 6-8 ore pe sÄƒptÄƒmÃ¢nÄƒ la materia de bazÄƒ, plus alte 3-4 la celelalte, recuperezi enorm. Nu â€žtotul", dar destul cÃ¢t sÄƒ treci comod.

> Important: planificarea face diferenÈ›a. Nu sÄƒri de la o materie la alta haotic. StabileÈ™te un plan pe luni: Ã®n martie facem asta, Ã®n aprilie asta, Ã®n mai recapitulÄƒm tot.

## Mit 5: â€žDacÄƒ pici la una, picatÄƒ tot BAC-ul"

AdevÄƒrat doar parÈ›ial. Da, trebuie sÄƒ iei minim 5 la fiecare materie. Dar:
- Ai sesiune de toamnÄƒ unde dai doar materia pe care ai picat-o
- Multe facultÄƒÈ›i acceptÄƒ admiterea pe baza notelor din liceu, fÄƒrÄƒ BAC luat Ã®n prima sesiune

Picarea Ã®n iunie nu e finalul. E doar o amÃ¢nare cu 2 luni.

## Concret: ce sÄƒ faci dacÄƒ eÈ™ti Ã®n panicÄƒ acum

1. FÄƒ un test pe variantele oficiale de anul trecut, **cu cronometru**. Vezi exact unde stai.
2. IdentificÄƒ 2-3 capitole pe care le poÈ›i recupera rapid. Acelea Ã®È›i aduc cele mai multe puncte cu cel mai mic efort.
3. LucreazÄƒ sÄƒptÄƒmÃ¢nal pe varianta de examen, nu doar pe teorie.

È˜i respirÄƒ. E un examen. Nu e finalul vieÈ›ii tale. Indiferent cum iese, ai opÈ›iuni dupÄƒ.`
}, {
  slug: 'calendar-admitere-2026',
  title: 'Calendar admitere liceu 2026, pas cu pas',
  date: '2025-12-08',
  author: 'Ioana M.',
  category: 'Evaluare NaÈ›ionalÄƒ',
  excerpt: 'Calendarul EvaluÄƒrii NaÈ›ionale È™i al admiterii la liceu pe 2026, explicat pas cu pas. Ce, cÃ¢nd È™i unde, fÄƒrÄƒ birocraÈ›e.',
  body: `Suntem la jumÄƒtatea anului È™colar È™i deja se vorbeÈ™te despre EN È™i admitere. Hai sÄƒ punem lucrurile Ã®n ordine, ce se Ã®ntÃ¢mplÄƒ, cÃ¢nd, È™i ce trebuie sÄƒ faci tu.

## Cronologie generalÄƒ (orientativÄƒ, pe baza anilor precedenÈ›i)

Ministerul publicÄƒ oficial calendarul Ã®n noiembrie-decembrie. Cifrele pot varia cu cÃ¢teva zile, dar structura rÄƒmÃ¢ne aceeaÈ™i.

### Mai - iunie 2026
**Simularea EN.** Toate È™colile dau o simulare cu subiecte tip examen. E gratuitÄƒ. **FÄƒ-o serios.** E cel mai bun â€žraport" pe care Ã®l ai despre cÃ¢t stai cu materia.

### 22-25 iunie 2026 (aproximativ)
**Evaluarea NaÈ›ionalÄƒ.** Probele:
- Luni: Limba È™i Literatura RomÃ¢nÄƒ
- Miercuri: MatematicÄƒ
- Vineri: Limba maternÄƒ (acolo unde e cazul)

### 28 iunie - 1 iulie 2026
**AfiÈ™area rezultatelor iniÈ›iale.** Te uiÈ›i pe pagina È™colii sau pe edu.ro.

### 1-4 iulie 2026
**ContestaÈ›iile.** DacÄƒ crezi cÄƒ eÈ™ti subevaluat la o probÄƒ, depui contestaÈ›ie. Recorectarea poate sÄƒ creascÄƒ sau sÄƒ scadÄƒ nota. Decide-te dupÄƒ ce vezi cu cÃ¢t ai trecut de prag.

### 5-7 iulie 2026
**Rezultatele finale dupÄƒ contestaÈ›ii.**

### 8-12 iulie 2026
**Completarea fiÈ™ei de admitere.** Aici alegi tu liceele È™i specializÄƒrile Ã®n ordinea preferinÈ›ei. **Asta e momentul critic.** GreÈ™eala aici nu mai are Ã®ntoarcere.

### 15-17 iulie 2026
**RepartiÈ›ia computerizatÄƒ.** Vezi unde ai intrat.

## Sfaturi reale pentru completarea fiÈ™ei

Asta e partea pe care pÄƒrinÈ›ii o subestimeazÄƒ cel mai mult. Nu e doar o formalitate.

**1. Pune mai multe opÈ›iuni decÃ¢t crezi cÄƒ ai nevoie.** CÃ¢mpul are 100 de poziÈ›ii. FÄƒ mÄƒcar 30-40. DacÄƒ pui doar 5, riÈ™ti sÄƒ nu intri nicÄƒieri È™i sÄƒ fii repartizat aleator.

**2. Ordinea conteazÄƒ imens.** Calculatorul te repartizeazÄƒ la prima opÈ›iune unde Ã®È›i permite media. Deci pune-le Ã®n **ORDINEA TA DE PREFERINÈšÄ‚**, nu Ã®n ordinea mediilor de admitere.

**3. VerificÄƒ mediile de admitere din anii trecuÈ›i.** Sunt publice. Nu te baza pe â€žauzeam cÄƒ X liceu e bun". UitÄƒ-te la cifrele reale.

**4. Pune È™i opÈ›iuni de â€žrezervÄƒ".** Licee cu medii mai mici pe ultimele poziÈ›ii. AÈ™a nu rÄƒmÃ¢i pe afarÄƒ.

## Ce calculeazÄƒ nota finalÄƒ

Nota de admitere = 80% media EN + 20% media generalÄƒ claselor V-VIII.

Deci da, EN cÃ¢ntÄƒreÈ™te mult, dar È™i ce ai fÄƒcut Ã®n gimnaziu conteazÄƒ. È˜i e prea tÃ¢rziu sÄƒ mai schimbi mediile gimnaziale. **Tot ce mai poÈ›i face acum e EN.**

## Ce poÈ›i face tu Ã®ntre acum È™i mai

- **IdentificÄƒ unde stai.** FÄƒ o simulare cinstitÄƒ acasÄƒ, cu cronometru. Vezi nota.
- **StabileÈ™te unde vrei sÄƒ ajungi.** Ce medie Ã®È›i trebuie pentru liceul vizat?
- **CalculeazÄƒ diferenÈ›a.** DacÄƒ acum iei 6 È™i vrei 8, ai de muncÄƒ, dar e fezabil. Cu 4 luni de lucru serios.
- **Cere ajutor dacÄƒ e nevoie.** Cu cÃ¢t mai devreme, cu atÃ¢t mai puÈ›in stres pe final.

ProgrameazÄƒ o È™edinÈ›Äƒ de cunoaÈ™tere gratuitÄƒ cu noi dacÄƒ vrei sÄƒ vedem Ã®mpreunÄƒ exact unde stai. Facem testul, vorbim cu pÄƒrinÈ›ii, vÄƒ spunem realist ce se poate face. FÄƒrÄƒ promisiuni goale.`
}];
window.SUBJECTS = SUBJECTS;
window.TEAM = TEAM;
window.TESTIMONIALS = TESTIMONIALS;
window.PRICES = PRICES;
window.BLOG = BLOG;

import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
// Shared components: Header, Footer, WhatsApp, Button, Card, SectionTitle, etc.
const {
  useState,
  useEffect,
  useRef,
  useMemo
} = React;
const WHATSAPP_URL = 'https://wa.me/40721628936?text=Bun%C4%83!%20Sunt%20interesat%20de%20medita%C8%9Bii%20la%20Centrul%20de%20Preg%C4%83tire';
const PHONE = '+40 721 628 936';
const EMAIL = 'contact@centruldepregatire.ro';
const ADDRESS = 'Strada Soveja nr. 90, ConstanÈ›a';

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
  return /*#__PURE__*/_jsxDEV("div", {
    ref: ref,
    className: 'reveal ' + className,
    children: children
  }, void 0, false);
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
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#1ebe57] shadow-soft'
  };
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const content = /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [icon, /*#__PURE__*/_jsxDEV("span", {
      children: children
    }, void 0, false)]
  }, void 0, true);
  if (href) return /*#__PURE__*/_jsxDEV("a", {
    href: href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('#/') ? href : '#/' + href,
    onClick: onClick,
    className: cls,
    ...rest,
    children: content
  }, void 0, false);
  return /*#__PURE__*/_jsxDEV("button", {
    onClick: onClick,
    className: cls,
    ...rest,
    children: content
  }, void 0, false);
}

// ---------- Section Title ----------
function SectionTitle({
  kicker,
  title,
  subtitle,
  align = 'center',
  dark = false
}) {
  return /*#__PURE__*/_jsxDEV("div", {
    className: `max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} mb-12 md:mb-16`,
    children: [kicker && /*#__PURE__*/_jsxDEV("div", {
      className: `flourish mb-4 text-xs uppercase tracking-[0.25em] font-medium ${dark ? 'text-rose' : ''}`,
      children: kicker
    }, void 0, false), /*#__PURE__*/_jsxDEV("h2", {
      className: `serif-h text-4xl md:text-5xl lg:text-[3.25rem] mb-4 ${dark ? 'text-cream' : 'text-bordo-deep'}`,
      children: title
    }, void 0, false), subtitle && /*#__PURE__*/_jsxDEV("p", {
      className: `text-lg md:text-xl leading-relaxed ${dark ? 'text-cream/80' : 'text-ink-muted'}`,
      children: subtitle
    }, void 0, false)]
  }, void 0, true);
}

// ---------- Card ----------
function Card({
  children,
  className = '',
  hover = true,
  padded = true
}) {
  return /*#__PURE__*/_jsxDEV("div", {
    className: `bg-white rounded-2xl shadow-card ${hover ? 'hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300' : ''} ${padded ? 'p-6 md:p-8' : ''} ${className}`,
    children: children
  }, void 0, false);
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
  const inner = /*#__PURE__*/_jsxDEV("span", {
    className: "flex items-center gap-2.5",
    children: [/*#__PURE__*/_jsxDEV("span", {
      className: `${sizes[size]} relative flex-shrink-0 block`,
      children: /*#__PURE__*/_jsxDEV("img", {
        src: "assets/logo-emblem.png",
        alt: "Centrul de PregÄƒtire ConstanÈ›a",
        className: "absolute inset-0 w-full h-full object-contain"
      }, void 0, false)
    }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
      className: "flex flex-col leading-none",
      children: [/*#__PURE__*/_jsxDEV("span", {
        className: `serif-h ${txt[size]} text-bordo-deep leading-[1.05] whitespace-nowrap`,
        children: "Centrul de PregÄƒtire"
      }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
        className: `${sub[size]} uppercase tracking-[0.3em] text-teal-deep font-semibold mt-1`,
        children: "ConstanÈ›a"
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
  return linked ? /*#__PURE__*/_jsxDEV("a", {
    href: "#/acasa",
    className: "flex items-center",
    children: inner
  }, void 0, false) : inner;
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
  }) => /*#__PURE__*/_jsxDEV("a", {
    href: '#/' + to,
    className: `nav-link text-[17px] font-semibold ${active ? 'text-bordo active' : 'text-ink hover:text-bordo'} transition-colors`,
    children: children
  }, void 0, false);
  return /*#__PURE__*/_jsxDEV("header", {
    className: `sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-cream/95 backdrop-blur shadow-sm' : 'bg-cream/80 backdrop-blur'}`,
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "max-w-7xl mx-auto px-4 md:px-6 lg:px-10",
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "flex items-center justify-between h-[72px]",
        children: [/*#__PURE__*/_jsxDEV(Logo, {
          size: "md"
        }, void 0, false), /*#__PURE__*/_jsxDEV("nav", {
          className: "hidden lg:flex items-center gap-8",
          children: [/*#__PURE__*/_jsxDEV(NavLink, {
            to: "acasa",
            active: route === 'acasa' || route === '',
            children: "AcasÄƒ"
          }, void 0, false), /*#__PURE__*/_jsxDEV(NavLink, {
            to: "despre",
            active: route === 'despre',
            children: "Despre"
          }, void 0, false), /*#__PURE__*/_jsxDEV(NavLink, {
            to: "preturi",
            active: route === 'preturi',
            children: "PreÈ›uri"
          }, void 0, false), /*#__PURE__*/_jsxDEV(NavLink, {
            to: "contact",
            active: route === 'contact',
            children: "Contact"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "hidden lg:flex items-center",
          children: /*#__PURE__*/_jsxDEV(Button, {
            href: "contact",
            variant: "primary",
            size: "md",
            children: "È˜edinÈ›Äƒ gratuitÄƒ"
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
          className: "lg:hidden p-2 -mr-2",
          onClick: () => setMobileOpen(!mobileOpen),
          "aria-label": "Meniu",
          children: /*#__PURE__*/_jsxDEV("div", {
            className: "w-6 h-5 relative",
            children: [/*#__PURE__*/_jsxDEV("span", {
              className: `absolute h-0.5 w-full bg-bordo top-0 transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`
            }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
              className: `absolute h-0.5 w-full bg-bordo top-1/2 -translate-y-1/2 transition-opacity ${mobileOpen ? 'opacity-0' : ''}`
            }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
              className: `absolute h-0.5 w-full bg-bordo bottom-0 transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`
            }, void 0, false)]
          }, void 0, true)
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: `lg:hidden overflow-hidden transition-all duration-300 ease-out ${mobileOpen ? 'max-h-[calc(100vh-72px)] border-t border-cream-deep' : 'max-h-0'}`,
      children: /*#__PURE__*/_jsxDEV("nav", {
        className: "px-4 py-4 space-y-1 bg-cream/95 overflow-y-auto max-h-[calc(100vh-72px)]",
        children: [[{
          to: 'acasa',
          label: 'AcasÄƒ'
        }, {
          to: 'despre',
          label: 'Despre'
        }].map(l => /*#__PURE__*/_jsxDEV("a", {
          href: '#/' + l.to,
          className: "block px-3 py-3 rounded-lg hover:bg-white text-[15px] font-medium text-ink",
          children: l.label
        }, l.to, false)), /*#__PURE__*/_jsxDEV("a", {
          href: "#/preturi",
          className: "block px-3 py-3 rounded-lg hover:bg-white text-[15px] font-medium text-ink",
          children: "PreÈ›uri"
        }, void 0, false), /*#__PURE__*/_jsxDEV("a", {
          href: "#/testimoniale",
          className: "block px-3 py-3 rounded-lg hover:bg-white text-[15px] font-medium text-ink",
          children: "Testimoniale"
        }, void 0, false), /*#__PURE__*/_jsxDEV("a", {
          href: "#/contact",
          className: "block px-3 py-3 rounded-lg hover:bg-white text-[15px] font-medium text-ink",
          children: "Contact"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "pt-3",
          children: /*#__PURE__*/_jsxDEV(Button, {
            href: "contact",
            variant: "primary",
            size: "md",
            className: "w-full",
            children: "È˜edinÈ›Äƒ gratuitÄƒ"
          }, void 0, false)
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false)]
  }, void 0, true);
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
  return /*#__PURE__*/_jsxDEV("a", {
    href: WHATSAPP_URL,
    target: "_blank",
    rel: "noopener",
    "aria-label": "Scrie-ne pe WhatsApp",
    className: "fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 group",
    children: /*#__PURE__*/_jsxDEV("span", {
      className: "relative flex",
      children: [pulse && /*#__PURE__*/_jsxDEV("span", {
        className: "absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-pulse-ring"
      }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
        className: "relative w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-card-hover hover:scale-105 transition-transform",
        children: /*#__PURE__*/_jsxDEV("svg", {
          viewBox: "0 0 32 32",
          className: "w-7 h-7 md:w-8 md:h-8 fill-white",
          children: [/*#__PURE__*/_jsxDEV("path", {
            d: "M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 01-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 01-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.846 2.722.846.93 0 2.96-.83 2.96-2.05.057-.314.057-.643 0-.787-.13-.32-.99-.483-1.245-.572z"
          }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
            d: "M16.026 0C7.21 0 0 7.21 0 16.026c0 2.83.755 5.605 2.18 8.026L0 32l8.247-2.155a16 16 0 007.78 1.987c8.815 0 16.026-7.21 16.026-16.026S24.84 0 16.026 0zm0 28.948c-2.49 0-4.93-.673-7.05-1.95l-.502-.302-5.218 1.366L4.65 23l-.33-.518a13.34 13.34 0 01-2.05-7.062c0-7.39 6.026-13.415 13.443-13.415 7.39 0 13.415 6.026 13.415 13.415 0 7.418-6.025 13.444-13.415 13.444z"
          }, void 0, false)]
        }, void 0, true)
      }, void 0, false)]
    }, void 0, true)
  }, void 0, false);
}

// ---------- Footer ----------
function Footer() {
  return /*#__PURE__*/_jsxDEV("footer", {
    className: "relative mt-24 bg-bordo-deep text-cream/90",
    children: /*#__PURE__*/_jsxDEV("div", {
      className: "max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-16",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16",
        children: [/*#__PURE__*/_jsxDEV("div", {
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center gap-3 mb-4",
            children: [/*#__PURE__*/_jsxDEV("span", {
              className: "w-14 h-14 flex-shrink-0",
              style: {
                filter: 'brightness(0) invert(1)'
              },
              children: /*#__PURE__*/_jsxDEV("img", {
                src: "assets/logo.png",
                alt: "",
                className: "w-full h-full object-contain"
              }, void 0, false)
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "serif-h text-cream text-lg",
                children: "Centrul de PregÄƒtire"
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                className: "text-rose text-[10px] uppercase tracking-[0.3em]",
                children: "ConstanÈ›a"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
            className: "text-sm leading-relaxed text-cream/70",
            children: "MeditaÈ›ii care pleacÄƒ de unde eÈ™ti tu. Pentru orice clasÄƒ, orice materie, orice nivel. La sediul nostru din ConstanÈ›a."
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          children: [/*#__PURE__*/_jsxDEV("h4", {
            className: "text-cream font-semibold text-sm uppercase tracking-wider mb-4",
            children: "Navigare"
          }, void 0, false), /*#__PURE__*/_jsxDEV("ul", {
            className: "space-y-2 text-sm",
            children: [/*#__PURE__*/_jsxDEV("li", {
              children: /*#__PURE__*/_jsxDEV("a", {
                href: "#/acasa",
                className: "hover:text-rose",
                children: "AcasÄƒ"
              }, void 0, false)
            }, void 0, false), /*#__PURE__*/_jsxDEV("li", {
              children: /*#__PURE__*/_jsxDEV("a", {
                href: "#/despre",
                className: "hover:text-rose",
                children: "Despre noi"
              }, void 0, false)
            }, void 0, false), /*#__PURE__*/_jsxDEV("li", {
              children: /*#__PURE__*/_jsxDEV("a", {
                href: "#/preturi",
                className: "hover:text-rose",
                children: "PreÈ›uri"
              }, void 0, false)
            }, void 0, false), /*#__PURE__*/_jsxDEV("li", {
              children: /*#__PURE__*/_jsxDEV("a", {
                href: "#/testimoniale",
                className: "hover:text-rose",
                children: "Testimoniale"
              }, void 0, false)
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          children: [/*#__PURE__*/_jsxDEV("h4", {
            className: "text-cream font-semibold text-sm uppercase tracking-wider mb-4",
            children: "Contact"
          }, void 0, false), /*#__PURE__*/_jsxDEV("ul", {
            className: "space-y-2 text-sm",
            children: [/*#__PURE__*/_jsxDEV("li", {
              children: /*#__PURE__*/_jsxDEV("a", {
                href: "tel:+40721628936",
                className: "hover:text-rose",
                children: PHONE
              }, void 0, false)
            }, void 0, false), /*#__PURE__*/_jsxDEV("li", {
              children: /*#__PURE__*/_jsxDEV("a", {
                href: `mailto:${EMAIL}`,
                className: "hover:text-rose",
                children: EMAIL
              }, void 0, false)
            }, void 0, false), /*#__PURE__*/_jsxDEV("li", {
              className: "text-cream/70",
              children: ADDRESS
            }, void 0, false), /*#__PURE__*/_jsxDEV("li", {
              className: "text-cream/70 pt-2",
              children: ["Luni-Vineri, 9:00 - 20:00", /*#__PURE__*/_jsxDEV("br", {}, void 0, false), "SÃ¢mbÄƒtÄƒ, 9:00 - 16:00"]
            }, void 0, true)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          children: [/*#__PURE__*/_jsxDEV("h4", {
            className: "text-cream font-semibold text-sm uppercase tracking-wider mb-4",
            children: "UrmÄƒreÈ™te-ne"
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "flex gap-3 mb-6",
            children: ['Facebook', 'Instagram', 'TikTok'].map(s => /*#__PURE__*/_jsxDEV("a", {
              href: "#",
              target: "_blank",
              rel: "noopener",
              className: "w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center text-cream/80 hover:text-cream transition-colors text-xs font-medium",
              children: s[0]
            }, s, false))
          }, void 0, false), /*#__PURE__*/_jsxDEV("a", {
            href: WHATSAPP_URL,
            target: "_blank",
            rel: "noopener",
            className: "inline-flex items-center gap-2 text-sm text-cream hover:text-rose",
            children: [/*#__PURE__*/_jsxDEV("span", {
              className: "w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center",
              children: /*#__PURE__*/_jsxDEV("svg", {
                viewBox: "0 0 32 32",
                className: "w-4 h-4 fill-white",
                children: /*#__PURE__*/_jsxDEV("path", {
                  d: "M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 01-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 01-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.846 2.722.846.93 0 2.96-.83 2.96-2.05.057-.314.057-.643 0-.787-.13-.32-.99-.483-1.245-.572zM16.026 0C7.21 0 0 7.21 0 16.026c0 2.83.755 5.605 2.18 8.026L0 32l8.247-2.155a16 16 0 007.78 1.987c8.815 0 16.026-7.21 16.026-16.026S24.84 0 16.026 0z"
                }, void 0, false)
              }, void 0, false)
            }, void 0, false), "WhatsApp"]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "border-t border-cream/15 mt-12 pt-6 flex flex-col gap-4 text-xs text-cream/60",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-3",
          children: [/*#__PURE__*/_jsxDEV("div", {
            children: "Â© 2026 Centrul de PregÄƒtire ConstanÈ›a. Toate drepturile rezervate."
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "flex flex-wrap gap-x-5 gap-y-2",
            children: [/*#__PURE__*/_jsxDEV("a", {
              href: "#/confidentialitate",
              className: "hover:text-rose",
              children: "PoliticÄƒ de confidenÈ›ialitate"
            }, void 0, false), /*#__PURE__*/_jsxDEV("a", {
              href: "#/termeni",
              className: "hover:text-rose",
              children: "Termeni È™i condiÈ›ii"
            }, void 0, false), /*#__PURE__*/_jsxDEV("a", {
              href: "#/contact",
              className: "hover:text-rose",
              children: "Contact"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "flex flex-wrap gap-x-5 gap-y-2 pt-1 border-t border-cream/10 text-cream/50",
          children: [/*#__PURE__*/_jsxDEV("span", {
            children: "SoluÈ›ionarea litigiilor:"
          }, void 0, false), /*#__PURE__*/_jsxDEV("a", {
            href: "https://anpc.ro/ce-este-sal/",
            target: "_blank",
            rel: "noopener",
            className: "hover:text-rose underline",
            children: "ANPC â€” SAL"
          }, void 0, false), /*#__PURE__*/_jsxDEV("a", {
            href: "https://ec.europa.eu/consumers/odr",
            target: "_blank",
            rel: "noopener",
            className: "hover:text-rose underline",
            children: "Platforma SOL (UE)"
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true)]
    }, void 0, true)
  }, void 0, false);
}

// ---------- Subject Card (compact) ----------
function SubjectCard({
  s,
  dense = false
}) {
  return /*#__PURE__*/_jsxDEV("a", {
    href: '#/materii/' + s.slug,
    className: "group block",
    children: /*#__PURE__*/_jsxDEV("div", {
      className: `bg-white rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 p-6 md:p-7 h-full border border-transparent hover:border-rose/40 flex flex-col`,
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "flex items-start mb-4",
        children: /*#__PURE__*/_jsxDEV("span", {
          className: "w-12 h-12 rounded-xl bg-cream-warm group-hover:bg-rose/30 flex items-center justify-center text-2xl text-teal-deep transition-colors",
          children: s.icon
        }, void 0, false)
      }, void 0, false), /*#__PURE__*/_jsxDEV("h3", {
        className: "serif-h text-2xl text-bordo-deep mb-2",
        children: s.name
      }, void 0, false), !dense && /*#__PURE__*/_jsxDEV("p", {
        className: "text-sm text-ink-muted leading-relaxed flex-1",
        children: s.tagline
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "mt-5 text-sm font-medium text-bordo group-hover:text-teal flex items-center gap-1",
        children: ["Vezi detalii ", /*#__PURE__*/_jsxDEV("span", {
          className: "transition-transform group-hover:translate-x-1",
          children: "â†’"
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true)
  }, void 0, false);
}

// ---------- Testimonial Card ----------
function TestimonialCard({
  t,
  compact = false
}) {
  return /*#__PURE__*/_jsxDEV(Card, {
    className: "h-full flex flex-col",
    children: [/*#__PURE__*/_jsxDEV("svg", {
      width: "34",
      height: "26",
      viewBox: "0 0 34 26",
      className: "text-rose mb-4 opacity-80",
      children: /*#__PURE__*/_jsxDEV("path", {
        d: "M0 26V14C0 6.268 6.268 0 14 0v6c-4.418 0-8 3.582-8 8h8v12H0zm20 0V14c0-7.732 6.268-14 14-14v6c-4.418 0-8 3.582-8 8h8v12H20z",
        fill: "currentColor"
      }, void 0, false)
    }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
      className: `text-ink ${compact ? 'text-[15px]' : 'text-base'} leading-relaxed flex-1`,
      children: t.quote
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: "mt-5 pt-5 border-t border-cream-deep flex items-center gap-3",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "w-11 h-11 rounded-full bg-cream-warm overflow-hidden flex-shrink-0 flex items-center justify-center",
        children: /*#__PURE__*/_jsxDEV("image-slot", {
          id: 'testimonial-' + t.id,
          shape: "circle",
          placeholder: t.name.split(' ').map(p => p[0]).join(''),
          style: {
            width: '100%',
            height: '100%'
          }
        }, void 0, false)
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "min-w-0",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "font-semibold text-sm text-bordo-deep truncate",
          children: t.name
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "text-xs text-ink-muted truncate",
          children: [t.role, " â€¢ ", t.subject]
        }, void 0, true)]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true);
}

// ---------- Page Hero ----------
function PageHero({
  kicker,
  title,
  subtitle,
  children
}) {
  return /*#__PURE__*/_jsxDEV("section", {
    className: "relative bg-cream-warm overflow-hidden",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "absolute inset-0 opacity-30 hatched"
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: "relative max-w-5xl mx-auto px-4 md:px-6 lg:px-10 pt-16 pb-16 md:pt-24 md:pb-20 text-center",
      children: [kicker && /*#__PURE__*/_jsxDEV("div", {
        className: "flourish text-teal-deep text-xs uppercase tracking-[0.3em] font-medium mb-5",
        children: kicker
      }, void 0, false), /*#__PURE__*/_jsxDEV("h1", {
        className: "serif-h text-5xl md:text-6xl lg:text-7xl text-bordo-deep mb-5",
        children: title
      }, void 0, false), subtitle && /*#__PURE__*/_jsxDEV("p", {
        className: "text-lg md:text-xl text-ink-muted max-w-2xl mx-auto leading-relaxed",
        children: subtitle
      }, void 0, false), children]
    }, void 0, true)]
  }, void 0, true);
}

// ---------- Breadcrumb ----------
function Breadcrumb({
  items
}) {
  return /*#__PURE__*/_jsxDEV("nav", {
    className: "text-xs text-ink-muted flex items-center gap-2 mb-8",
    children: items.map((it, i) => /*#__PURE__*/_jsxDEV(React.Fragment, {
      children: [i > 0 && /*#__PURE__*/_jsxDEV("span", {
        className: "opacity-50",
        children: "â€º"
      }, void 0, false), it.href ? /*#__PURE__*/_jsxDEV("a", {
        href: '#/' + it.href,
        className: "hover:text-bordo",
        children: it.label
      }, void 0, false) : /*#__PURE__*/_jsxDEV("span", {
        className: "text-bordo-deep font-medium",
        children: it.label
      }, void 0, false)]
    }, i, true))
  }, void 0, false);
}

// ---------- Price Card ----------
function PriceCard({
  p
}) {
  return /*#__PURE__*/_jsxDEV("div", {
    className: `relative rounded-2xl p-7 md:p-8 h-full flex flex-col transition-all duration-300 ${p.featured ? 'bg-bordo-deep text-cream shadow-card-hover scale-[1.02] md:-translate-y-2' : 'bg-white shadow-card hover:shadow-card-hover'}`,
    children: [p.featured && /*#__PURE__*/_jsxDEV("div", {
      className: "absolute -top-3 left-1/2 -translate-x-1/2",
      children: /*#__PURE__*/_jsxDEV("span", {
        className: "bg-teal text-white text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full",
        children: "Recomandat"
      }, void 0, false)
    }, void 0, false), p.badge && /*#__PURE__*/_jsxDEV("div", {
      className: "absolute -top-3 left-1/2 -translate-x-1/2",
      children: /*#__PURE__*/_jsxDEV("span", {
        className: "bg-rose text-bordo-deep text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full",
        children: p.badge
      }, void 0, false)
    }, void 0, false), /*#__PURE__*/_jsxDEV("h3", {
      className: `serif-h text-2xl mb-1 ${p.featured ? 'text-cream' : 'text-bordo-deep'}`,
      children: p.title
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: `text-sm ${p.featured ? 'text-cream/85' : 'text-ink-muted'} mb-6`,
      children: p.duration
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: "flex items-baseline gap-2 mb-1",
      children: [/*#__PURE__*/_jsxDEV("span", {
        className: `serif-h text-6xl ${p.featured ? '' : 'text-bordo'}`,
        style: p.featured ? {
          color: '#FF4D4D'
        } : undefined,
        children: p.price
      }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
        className: `text-sm ${p.featured ? 'text-cream/90' : 'text-ink-muted'}`,
        children: p.unit
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("ul", {
      className: `space-y-3 my-7 flex-1 ${p.featured ? 'text-cream' : 'text-ink'}`,
      children: p.bullets.map((b, i) => /*#__PURE__*/_jsxDEV("li", {
        className: "flex gap-2.5 text-[14.5px] leading-relaxed",
        children: [/*#__PURE__*/_jsxDEV("span", {
          className: `mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full ${p.featured ? 'bg-rose' : 'bg-teal'}`
        }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
          children: b
        }, void 0, false)]
      }, i, true))
    }, void 0, false), /*#__PURE__*/_jsxDEV(Button, {
      href: "contact",
      variant: p.featured ? 'cream' : p.id === 'gratuit' ? 'secondary' : 'primary',
      className: "w-full",
      children: p.cta
    }, void 0, false)]
  }, void 0, true);
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
  }) => /*#__PURE__*/_jsxDEV("div", {
    className: "mb-4",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "text-xs uppercase tracking-wider text-ink-muted mb-2",
      children: label
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: "flex gap-1.5 flex-wrap",
      children: options.map(o => {
        const on = (tweaks[k] || options[0].id) === o.id;
        return /*#__PURE__*/_jsxDEV("button", {
          onClick: () => setTweak(k, o.id),
          className: `px-3 py-2 rounded-lg border text-sm transition-all ${on ? 'border-bordo bg-cream-warm text-bordo-deep font-semibold' : 'border-cream-deep text-ink-muted hover:border-bordo/40'}`,
          children: o.label
        }, o.id, false);
      })
    }, void 0, false)]
  }, void 0, true);
  return /*#__PURE__*/_jsxDEV("div", {
    className: "fixed bottom-24 md:bottom-7 right-5 md:right-28 z-50 w-[320px] max-h-[80vh] overflow-y-auto bg-white rounded-2xl shadow-card-hover border border-cream-deep p-5 animate-fade-up",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "flex items-center justify-between mb-4",
      children: [/*#__PURE__*/_jsxDEV("h4", {
        className: "font-semibold text-bordo-deep",
        children: "Tweaks"
      }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
        onClick: onClose,
        className: "text-ink-muted hover:text-bordo text-xl leading-none",
        children: "Ã—"
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "text-[11px] uppercase tracking-[0.18em] text-teal-deep font-semibold mb-3",
      children: "Lizibilitate"
    }, void 0, false), /*#__PURE__*/_jsxDEV(Seg, {
      label: "Fundal",
      k: "bg",
      options: [{
        id: 'white',
        label: 'Alb'
      }, {
        id: 'warm',
        label: 'Crem cald'
      }]
    }, void 0, false), /*#__PURE__*/_jsxDEV(Seg, {
      label: "Font titluri",
      k: "heading",
      options: [{
        id: 'serif',
        label: 'Elegant (serif)'
      }, {
        id: 'sans',
        label: 'Clar (sans)'
      }]
    }, void 0, false), /*#__PURE__*/_jsxDEV(Seg, {
      label: "Text",
      k: "text",
      options: [{
        id: 'normal',
        label: 'Normal'
      }, {
        id: 'darker',
        label: 'Mai Ã®nchis'
      }]
    }, void 0, false), /*#__PURE__*/_jsxDEV(Seg, {
      label: "MÄƒrime text",
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
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: "text-[11px] uppercase tracking-[0.18em] text-teal-deep font-semibold mb-3 mt-5 pt-5 border-t border-cream-deep",
      children: "Layout"
    }, void 0, false), /*#__PURE__*/_jsxDEV(Seg, {
      label: "VariaÈ›ie Hero (AcasÄƒ)",
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
    }, void 0, false)]
  }, void 0, true);
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
  return /*#__PURE__*/_jsxDEV("div", {
    className: "fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 md:px-6 md:pb-6 animate-fade-up",
    role: "dialog",
    "aria-label": "Notificare cookies",
    children: /*#__PURE__*/_jsxDEV("div", {
      className: "max-w-3xl mx-auto bg-bordo-deep text-cream rounded-2xl shadow-card-hover p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4",
      children: [/*#__PURE__*/_jsxDEV("p", {
        className: "text-sm leading-relaxed text-cream/85 flex-1",
        children: ["Folosim cookie-uri tehnice strict necesare pentru funcÈ›ionarea site-ului È™i pentru harta Google integratÄƒ. Nu folosim cookie-uri de publicitate sau tracking. Detalii Ã®n", ' ', /*#__PURE__*/_jsxDEV("a", {
          href: "#/confidentialitate",
          className: "underline hover:text-rose",
          children: "politica de confidenÈ›ialitate"
        }, void 0, false), "."]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "flex-shrink-0",
        children: /*#__PURE__*/_jsxDEV("button", {
          onClick: accept,
          className: "w-full md:w-auto px-6 py-3 rounded-full bg-rose text-bordo-deep font-semibold text-sm hover:bg-cream transition-colors",
          children: "Am Ã®nÈ›eles"
        }, void 0, false)
      }, void 0, false)]
    }, void 0, true)
  }, void 0, false);
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

import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
// Home page with 3 hero variations.

// ---------- Discrete line icons ----------
function Ic({
  name,
  className = 'w-6 h-6',
  strokeWidth = '1.6'
}) {
  const p = {
    edit: /*#__PURE__*/_jsxDEV(_Fragment, {
      children: [/*#__PURE__*/_jsxDEV("path", {
        d: "M4 20h16"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "M14.5 5.5l4 4L8 20l-4 1 1-4z"
      }, void 0, false)]
    }, void 0, true),
    cap: /*#__PURE__*/_jsxDEV(_Fragment, {
      children: [/*#__PURE__*/_jsxDEV("path", {
        d: "M2 9l10-4 10 4-10 4z"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "M6 11v4.5c0 1 2.7 2.2 6 2.2s6-1.2 6-2.2V11"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "M22 9v5"
      }, void 0, false)]
    }, void 0, true),
    compass: /*#__PURE__*/_jsxDEV(_Fragment, {
      children: [/*#__PURE__*/_jsxDEV("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }, void 0, false), /*#__PURE__*/_jsxDEV("polygon", {
        points: "16 8 13.5 13.5 8 16 10.5 10.5"
      }, void 0, false)]
    }, void 0, true),
    users: /*#__PURE__*/_jsxDEV(_Fragment, {
      children: [/*#__PURE__*/_jsxDEV("circle", {
        cx: "9",
        cy: "8",
        r: "3.2"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "M3.5 19c0-3.2 2.6-5.2 5.5-5.2s5.5 2 5.5 5.2"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "M16 6.5a2.7 2.7 0 010 5.2"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "M17.5 13.6c2 .5 3.5 2 3.5 4.4"
      }, void 0, false)]
    }, void 0, true),
    badge: /*#__PURE__*/_jsxDEV(_Fragment, {
      children: [/*#__PURE__*/_jsxDEV("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }, void 0, false), /*#__PURE__*/_jsxDEV("polyline", {
        points: "8.5 12 11 14.6 16 9"
      }, void 0, false)]
    }, void 0, true),
    clock: /*#__PURE__*/_jsxDEV(_Fragment, {
      children: [/*#__PURE__*/_jsxDEV("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }, void 0, false), /*#__PURE__*/_jsxDEV("polyline", {
        points: "12 7 12 12 15.5 14"
      }, void 0, false)]
    }, void 0, true),
    focus: /*#__PURE__*/_jsxDEV(_Fragment, {
      children: [/*#__PURE__*/_jsxDEV("path", {
        d: "M4 8.5V5.5a1.5 1.5 0 011.5-1.5H8"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "M16 4h2.5A1.5 1.5 0 0120 5.5v3"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "M20 15.5v3a1.5 1.5 0 01-1.5 1.5H16"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "M8 20H5.5A1.5 1.5 0 014 18.5v-3"
      }, void 0, false), /*#__PURE__*/_jsxDEV("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      }, void 0, false)]
    }, void 0, true),
    teacher: /*#__PURE__*/_jsxDEV(_Fragment, {
      children: [/*#__PURE__*/_jsxDEV("path", {
        d: "M4 8l8-3 8 3-8 3z"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "M20 8v3.5"
      }, void 0, false), /*#__PURE__*/_jsxDEV("circle", {
        cx: "12",
        cy: "14.5",
        r: "2.3"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "M7.5 21c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4"
      }, void 0, false)]
    }, void 0, true),
    phone: /*#__PURE__*/_jsxDEV("path", {
      d: "M6 3h3l1.8 5-2.2 1.4a11 11 0 005 5L15 12l5 1.8V17a2 2 0 01-2.2 2A15 15 0 015 5.2 2 2 0 016 3z"
    }, void 0, false),
    mail: /*#__PURE__*/_jsxDEV(_Fragment, {
      children: [/*#__PURE__*/_jsxDEV("rect", {
        x: "3",
        y: "5",
        width: "18",
        height: "14",
        rx: "2"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "M3.5 7.5l8.5 5.5 8.5-5.5"
      }, void 0, false)]
    }, void 0, true),
    pin: /*#__PURE__*/_jsxDEV(_Fragment, {
      children: [/*#__PURE__*/_jsxDEV("path", {
        d: "M12 21s-6-5.3-6-10a6 6 0 1112 0c0 4.7-6 10-6 10z"
      }, void 0, false), /*#__PURE__*/_jsxDEV("circle", {
        cx: "12",
        cy: "11",
        r: "2"
      }, void 0, false)]
    }, void 0, true),
    arrow: /*#__PURE__*/_jsxDEV(_Fragment, {
      children: [/*#__PURE__*/_jsxDEV("path", {
        d: "M5 12h14"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "M13 6l6 6-6 6"
      }, void 0, false)]
    }, void 0, true)
  };
  return /*#__PURE__*/_jsxDEV("svg", {
    viewBox: "0 0 24 24",
    className: className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: p[name]
  }, void 0, false);
}
function HeroEditorial() {
  const PILLS = ['Prima È™edinÈ›Äƒ gratuitÄƒ', 'Test iniÈ›ial inclus', 'Grupe de 2-3 elevi', 'La sediu, Ã®n ConstanÈ›a'];
  return /*#__PURE__*/_jsxDEV("section", {
    className: "relative overflow-hidden bg-cream",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "absolute -top-40 -right-24 w-[30rem] h-[30rem] rounded-full bg-rose/15 blur-3xl"
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: "absolute -bottom-44 -left-24 w-[30rem] h-[30rem] rounded-full bg-teal/10 blur-3xl"
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: "relative max-w-7xl mx-auto px-4 md:px-6 lg:px-10 pt-10 md:pt-16 pb-14 md:pb-20",
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "grid lg:grid-cols-12 gap-10 lg:gap-14 items-center",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "lg:col-span-6 text-center lg:text-left",
          children: [/*#__PURE__*/_jsxDEV("h1", {
            className: "serif-h text-6xl md:text-7xl lg:text-[5.5rem] text-bordo-deep mb-6 leading-[0.98]",
            children: ["Din complicat,", /*#__PURE__*/_jsxDEV("br", {}, void 0, false), "facem simplu."]
          }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
            className: "text-lg md:text-xl text-ink max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8",
            children: ["MeditaÈ›ii Ã®n ConstanÈ›a pentru ", /*#__PURE__*/_jsxDEV("strong", {
              className: "text-bordo-deep font-semibold",
              children: "Evaluarea NaÈ›ionalÄƒ"
            }, void 0, false), ", ", /*#__PURE__*/_jsxDEV("strong", {
              className: "text-bordo-deep font-semibold",
              children: "Bacalaureat"
            }, void 0, false), " È™i recuperare la materie."]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8",
            children: /*#__PURE__*/_jsxDEV(Button, {
              href: "contact",
              variant: "primary",
              size: "lg",
              children: "ProgrameazÄƒ È™edinÈ›a gratuitÄƒ"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "flex flex-wrap gap-x-6 gap-y-2.5 justify-center lg:justify-start",
            children: PILLS.map(t => /*#__PURE__*/_jsxDEV("span", {
              className: "inline-flex items-center gap-2 text-sm font-medium text-ink-muted",
              children: [/*#__PURE__*/_jsxDEV(Ic, {
                name: "badge",
                className: "w-4 h-4 text-teal"
              }, void 0, false), " ", t]
            }, t, true))
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "lg:col-span-6",
          children: /*#__PURE__*/_jsxDEV("div", {
            className: "relative w-full max-w-md mx-auto lg:max-w-none",
            style: {
              aspectRatio: '4 / 5'
            },
            children: [/*#__PURE__*/_jsxDEV("image-slot", {
              id: "hero-main",
              shape: "rounded",
              radius: "24",
              placeholder: "Trage o pozÄƒ aici (ex. o È™edinÈ›Äƒ la sediu sau profesorii)",
              style: {
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%'
              }
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "absolute -bottom-5 -left-3 md:-left-6 bg-white rounded-2xl px-5 py-4 shadow-card-hover flex items-center gap-3 max-w-[260px]",
              children: [/*#__PURE__*/_jsxDEV("span", {
                className: "w-10 h-10 rounded-full bg-bordo/10 flex items-center justify-center text-bordo flex-shrink-0",
                children: /*#__PURE__*/_jsxDEV(Ic, {
                  name: "compass",
                  className: "w-5 h-5"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                className: "text-left",
                children: [/*#__PURE__*/_jsxDEV("div", {
                  className: "text-[11px] uppercase tracking-wider text-ink-light",
                  children: "Sediu"
                }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                  className: "text-sm font-semibold text-bordo-deep leading-tight",
                  children: "Strada Soveja 90, ConstanÈ›a"
                }, void 0, false)]
              }, void 0, true)]
            }, void 0, true)]
          }, void 0, true)
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false)]
  }, void 0, true);
}
function HeroSplit() {
  return /*#__PURE__*/_jsxDEV("section", {
    className: "relative overflow-hidden bg-cream",
    children: /*#__PURE__*/_jsxDEV("div", {
      className: "max-w-7xl mx-auto px-4 md:px-6 lg:px-10 pt-12 md:pt-16 pb-16 md:pb-20",
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "grid lg:grid-cols-12 gap-10 items-center",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "lg:col-span-7",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "flourish text-teal-deep text-xs uppercase tracking-[0.3em] font-medium mb-5",
            style: {
              justifyContent: 'flex-start'
            },
            children: "MeditaÈ›ii Â· ConstanÈ›a"
          }, void 0, false), /*#__PURE__*/_jsxDEV("h1", {
            className: "serif-h text-6xl md:text-7xl lg:text-8xl text-bordo-deep mb-5 leading-[0.95]",
            children: ["From 0", /*#__PURE__*/_jsxDEV("br", {}, void 0, false), "to ", /*#__PURE__*/_jsxDEV("em", {
              className: "text-teal not-italic",
              children: "Hero"
            }, void 0, false), "."]
          }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
            className: "text-lg md:text-xl text-ink-muted max-w-xl leading-relaxed mb-3",
            children: "MeditaÈ›ii care pleacÄƒ de unde eÈ™ti tu. Pentru orice clasÄƒ, orice materie."
          }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
            className: "text-base text-ink-muted/80 italic max-w-xl leading-relaxed mb-8",
            children: "È˜tim cum e sÄƒ fii elev. Nu demult eram È™i noi."
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "flex flex-wrap gap-3",
            children: [/*#__PURE__*/_jsxDEV(Button, {
              href: "contact",
              variant: "primary",
              size: "lg",
              children: "È˜edinÈ›Äƒ gratuitÄƒ"
            }, void 0, false), /*#__PURE__*/_jsxDEV(Button, {
              href: "preturi",
              variant: "outline",
              size: "lg",
              children: "Vezi preÈ›urile"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "lg:col-span-5 relative",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "aspect-square relative flex items-center justify-center",
            children: /*#__PURE__*/_jsxDEV("img", {
              src: "assets/logo.png",
              alt: "",
              className: "relative w-[92%] object-contain animate-float"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "absolute -bottom-6 -left-6 bg-bordo-deep text-cream rounded-2xl p-5 shadow-card-hover max-w-[220px] hidden md:block",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "serif-h text-3xl text-rose mb-1",
              children: "0 lei"
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "text-xs text-cream/80",
              children: "prima È™edinÈ›Äƒ + test iniÈ›ial complet"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "absolute -top-4 -right-4 bg-teal text-white rounded-2xl px-5 py-3 shadow-card-hover hidden md:block",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "text-xs uppercase tracking-wider opacity-80",
              children: "Sediu"
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "text-sm font-medium",
              children: "Strada Soveja 90, ConstanÈ›a"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true)
    }, void 0, false)
  }, void 0, false);
}
function HeroBold() {
  return /*#__PURE__*/_jsxDEV("section", {
    className: "relative overflow-hidden bg-bordo-deep text-cream",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "absolute inset-0 opacity-10",
      style: {
        backgroundImage: 'radial-gradient(circle at 1px 1px, #FAF3E7 1px, transparent 0)',
        backgroundSize: '24px 24px'
      }
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: "relative max-w-6xl mx-auto px-4 md:px-6 lg:px-10 pt-16 md:pt-24 pb-16 md:pb-28",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "flex items-center gap-4 mb-10",
        children: [/*#__PURE__*/_jsxDEV("span", {
          className: "w-16 h-16 flex-shrink-0",
          style: {
            filter: 'brightness(0) invert(1)'
          },
          children: /*#__PURE__*/_jsxDEV("img", {
            src: "assets/logo.png",
            alt: "",
            className: "w-full h-full object-contain"
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "flourish text-rose text-xs uppercase tracking-[0.3em] font-medium",
          style: {
            justifyContent: 'flex-start'
          },
          children: "MeditaÈ›ii Â· ConstanÈ›a"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("h1", {
        className: "serif-h text-5xl md:text-7xl lg:text-[6rem] text-cream mb-10 leading-[1.02] max-w-5xl",
        children: ["De la ", /*#__PURE__*/_jsxDEV("span", {
          className: "text-rose italic",
          children: "â€žnu Ã®nÈ›eleg nimic\""
        }, void 0, false), " la ", /*#__PURE__*/_jsxDEV("span", {
          className: "border-b-4 border-rose pb-1",
          children: "â€žpot sÄƒ o fac\""
        }, void 0, false), "."]
      }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
        className: "text-xl md:text-2xl text-cream/80 max-w-2xl leading-relaxed mb-3",
        children: "Pentru orice clasÄƒ, orice materie. PlecÄƒm de unde eÈ™ti tu, nu de unde ar trebui sÄƒ fii."
      }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
        className: "text-base text-cream/60 italic max-w-2xl leading-relaxed mb-10",
        children: "Nu existÄƒ elev â€žslab\", existÄƒ explicaÈ›ii care nu i s-au potrivit."
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "flex flex-wrap gap-3",
        children: [/*#__PURE__*/_jsxDEV(Button, {
          href: "contact",
          variant: "cream",
          size: "lg",
          children: "ProgrameazÄƒ È™edinÈ›Äƒ gratuitÄƒ"
        }, void 0, false), /*#__PURE__*/_jsxDEV(Button, {
          href: "despre",
          variant: "ghost",
          size: "lg",
          className: "!text-cream hover:!bg-cream/10",
          children: "Vezi cine suntem â†’"
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true);
}
function VideoPrezentare() {
  return /*#__PURE__*/_jsxDEV("div", {
    className: "relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-card bg-bordo-deep",
    style: {
      aspectRatio: '9 / 16'
    },
    children: /*#__PURE__*/_jsxDEV("iframe", {
      className: "absolute inset-0 w-full h-full border-0",
      src: "https://www.youtube.com/embed/jwFqOM7dfCY?rel=0&modestbranding=1",
      title: "Prezentare Centrul de PregÄƒtire ConstanÈ›a",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true
    }, void 0, false)
  }, void 0, false);
}
function _VideoPrezentareOLD_UNUSED() {
  const videoRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);
  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
  };
  return /*#__PURE__*/_jsxDEV("div", {
    className: "relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-card bg-bordo-deep",
    style: {
      aspectRatio: '9 / 16'
    },
    children: [/*#__PURE__*/_jsxDEV("video", {
      ref: videoRef,
      className: "absolute inset-0 w-full h-full object-cover",
      src: "assets/prezentare.mp4#t=0.5",
      controls: true,
      playsInline: true,
      preload: "metadata",
      onPlay: () => setPlaying(true),
      onPause: () => setPlaying(false),
      children: "Browserul tÄƒu nu suportÄƒ redarea video."
    }, void 0, false), !playing && /*#__PURE__*/_jsxDEV("button", {
      type: "button",
      onClick: play,
      "aria-label": "RedÄƒ videoul",
      className: "absolute inset-0 z-10 flex items-center justify-center group cursor-pointer",
      style: {
        background: 'linear-gradient(to bottom, rgba(36,16,19,0.10), rgba(36,16,19,0.35))'
      },
      children: /*#__PURE__*/_jsxDEV("span", {
        className: "relative flex items-center justify-center",
        children: [/*#__PURE__*/_jsxDEV("span", {
          className: "absolute inset-0 rounded-full bg-cream/30 animate-pulse-ring"
        }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
          className: "relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-cream/95 text-bordo-deep flex items-center justify-center shadow-card-hover transition-transform duration-200 group-hover:scale-105 group-active:scale-95",
          children: /*#__PURE__*/_jsxDEV("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: "w-9 h-9 md:w-10 md:h-10 ml-1",
            children: /*#__PURE__*/_jsxDEV("path", {
              d: "M8 5.14v13.72a1 1 0 0 0 1.54.84l10.5-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14z"
            }, void 0, false)
          }, void 0, false)
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false)]
  }, void 0, true);
}
function SediuCarousel() {
  const IMAGES = [{
    src: 'assets/sediu-1.webp',
    alt: 'Sala de meditaÈ›ii cu masÄƒ È™i scaune'
  }, {
    src: 'assets/sediu-2.webp',
    alt: 'Sala de studiu cu luminÄƒ naturalÄƒ'
  }, {
    src: 'assets/sediu-3.jpeg',
    alt: 'Holul È™i intrarea Ã®n sÄƒli'
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
  return /*#__PURE__*/_jsxDEV("div", {
    className: "relative w-full select-none",
    style: {
      aspectRatio: '5 / 4'
    },
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "absolute inset-0",
      style: {
        perspective: '1100px'
      },
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "absolute inset-0",
        style: {
          transformStyle: 'preserve-3d'
        },
        children: IMAGES.map((img, k) => {
          const rel = (k - i + n) % n;
          const front = rel === 0;
          return /*#__PURE__*/_jsxDEV("div", {
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
              transition: 'transform 0.75s cubic-bezier(0.65,0,0.35,1), box-shadow 0.6s ease, filter 0.6s ease',
              zIndex: front ? 30 : 10,
              cursor: front ? 'default' : 'pointer',
              boxShadow: front ? '0 30px 60px -18px rgba(20,8,10,0.55)' : '0 16px 36px -16px rgba(20,8,10,0.5)',
              filter: front ? 'none' : 'brightness(0.62) saturate(0.9)'
            },
            children: /*#__PURE__*/_jsxDEV("img", {
              src: img.src,
              alt: img.alt,
              className: "absolute inset-0 w-full h-full object-cover",
              draggable: "false"
            }, void 0, false)
          }, img.src, false);
        })
      }, void 0, false)
    }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
      type: "button",
      onClick: () => go(-1),
      "aria-label": "Imaginea anterioarÄƒ",
      className: "absolute left-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-bordo-deep/55 hover:bg-bordo-deep/85 text-cream backdrop-blur-sm flex items-center justify-center transition-colors z-40",
      children: /*#__PURE__*/_jsxDEV("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "w-5 h-5",
        children: /*#__PURE__*/_jsxDEV("path", {
          d: "M15 18l-6-6 6-6"
        }, void 0, false)
      }, void 0, false)
    }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
      type: "button",
      onClick: () => go(1),
      "aria-label": "Imaginea urmÄƒtoare",
      className: "absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-bordo-deep/55 hover:bg-bordo-deep/85 text-cream backdrop-blur-sm flex items-center justify-center transition-colors z-40",
      children: /*#__PURE__*/_jsxDEV("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "w-5 h-5",
        children: /*#__PURE__*/_jsxDEV("path", {
          d: "M9 18l6-6-6-6"
        }, void 0, false)
      }, void 0, false)
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: "absolute -bottom-7 left-1/2 -translate-x-1/2 flex gap-2 z-40",
      children: IMAGES.map((_, k) => /*#__PURE__*/_jsxDEV("button", {
        type: "button",
        onClick: () => at(k),
        "aria-label": 'Mergi la imaginea ' + (k + 1),
        className: "h-2 rounded-full transition-all duration-300",
        style: {
          width: k === i ? 22 : 8,
          backgroundColor: k === i ? '#FFFFFF' : 'rgba(255,255,255,0.45)'
        }
      }, k, false))
    }, void 0, false)]
  }, void 0, true);
}
function HomePage({
  heroVariant
}) {
  const HeroComp = heroVariant === 'split' ? HeroSplit : heroVariant === 'bold' ? HeroBold : HeroEditorial;
  const FOR_WHO = [{
    n: '01',
    title: 'Te pregÄƒteÈ™ti de Evaluare NaÈ›ionalÄƒ?',
    desc: 'Clasele V-VIII. Acoperim toatÄƒ materia, exersÄƒm subiectele È™i mergem pe ritmul tÄƒu.',
    href: 'materii',
    icon: 'edit',
    accent: '#0A5360',
    tag: 'Clasele Vâ€“VIII'
  }, {
    n: '02',
    title: 'Te pregÄƒteÈ™ti de Bacalaureat?',
    desc: 'Clasele IX-XII. TransformÄƒm â€žnu Ã®nÈ›eleg" Ã®n â€žÈ™tiu sÄƒ rezolv".',
    href: 'materii',
    icon: 'cap',
    accent: '#2C6E7F',
    tag: 'Clasele IXâ€“XII'
  }, {
    n: '03',
    title: 'Te-ai pierdut undeva prin materie?',
    desc: 'Orice clasÄƒ, orice vÃ¢rstÄƒ. Vino pentru cÃ¢te È™edinÈ›e ai nevoie, lucrÄƒm exact pe ce te È›ine Ã®n loc.',
    href: 'servicii/recuperare',
    icon: 'compass',
    accent: '#C2A06B',
    tag: 'Orice clasÄƒ'
  }];
  const WHY = [{
    title: 'Profesori tineri care Ã®nÈ›eleg',
    desc: 'Am trecut prin aceleaÈ™i etape. ÃŽnÈ›elegem provocÄƒrile pe care le Ã®ntÃ¢mpini.',
    icon: 'teacher'
  }, {
    title: 'Test iniÈ›ial gratuit',
    desc: 'O evaluare obiectivÄƒ a cunoÈ™tinÈ›elor, ca bazÄƒ pentru un plan de pregÄƒtire personalizat.',
    icon: 'badge'
  }, {
    title: 'Pe ritmul tÄƒu, nu pe al È™colii',
    desc: 'La È™coalÄƒ urmezi ritmul clasei. La noi, lecÈ›ia urmeazÄƒ ritmul tÄƒu.',
    icon: 'clock'
  }, {
    title: 'Grup restrÃ¢ns, atenÈ›ie personalizatÄƒ',
    desc: 'Grupe de 2-3 elevi, pentru ca atenÈ›ia sÄƒ fie realÄƒ, nu Ã®mpÄƒrÈ›itÄƒ superficial.',
    icon: 'users'
  }];
  return /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV(HeroComp, {}, void 0, false), /*#__PURE__*/_jsxDEV("section", {
      className: "px-4 md:px-6 lg:px-10 pt-6 pb-4",
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "max-w-6xl mx-auto",
        children: /*#__PURE__*/_jsxDEV("div", {
          className: "grid lg:grid-cols-2 gap-8 lg:gap-14 items-center",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "text-center lg:text-left",
            children: [/*#__PURE__*/_jsxDEV("h2", {
              className: "serif-h text-4xl md:text-5xl text-bordo-deep mb-5 leading-tight",
              children: "Vezi cum lucrÄƒm, Ã®n 40 de secunde"
            }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
              className: "text-lg leading-relaxed mb-6 max-w-md mx-auto lg:mx-0 font-medium text-ink-muted",
              children: "O È™edinÈ›Äƒ aratÄƒ mai mult decÃ¢t o sutÄƒ de promisiuni. UitÄƒ-te la atmosferÄƒ, la ritm È™i Ã®n felul Ã®n care explicÄƒm, apoi decide."
            }, void 0, false), /*#__PURE__*/_jsxDEV("ul", {
              className: "space-y-3 mb-8 text-left max-w-md mx-auto lg:mx-0",
              children: ['ExplicaÈ›ii pe Ã®nÈ›elesul tÄƒu, nu pe vitezÄƒ', 'AtmosferÄƒ relaxatÄƒ, fÄƒrÄƒ presiune', 'SÄƒli liniÈ™tite, materiale fizice, tablÄƒ albÄƒ'].map(t => /*#__PURE__*/_jsxDEV("li", {
                className: "flex items-start gap-3 text-lg leading-relaxed font-medium text-ink-muted",
                children: [/*#__PURE__*/_jsxDEV("span", {
                  className: "text-teal mt-0.5 flex-shrink-0",
                  children: /*#__PURE__*/_jsxDEV(Ic, {
                    name: "badge",
                    className: "w-5 h-5"
                  }, void 0, false)
                }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                  children: t
                }, void 0, false)]
              }, t, true))
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "flex flex-wrap gap-3 justify-center lg:justify-start",
              children: [/*#__PURE__*/_jsxDEV(Button, {
                href: "contact",
                variant: "primary",
                size: "lg",
                children: "ProgrameazÄƒ È™edinÈ›a gratuitÄƒ"
              }, void 0, false), /*#__PURE__*/_jsxDEV(Button, {
                href: WHATSAPP_URL,
                variant: "whatsapp",
                size: "lg",
                children: "Scrie pe WhatsApp"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "mx-auto w-full",
            style: {
              maxWidth: '320px'
            },
            children: /*#__PURE__*/_jsxDEV(VideoPrezentare, {}, void 0, false)
          }, void 0, false)]
        }, void 0, true)
      }, void 0, false)
    }, void 0, false), /*#__PURE__*/_jsxDEV("section", {
      className: "py-20 md:py-28 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto",
      children: [/*#__PURE__*/_jsxDEV(SectionTitle, {
        title: "Alege-È›i obiectivul",
        subtitle: "Indiferent de unde pleci, mergem Ã®mpreunÄƒ pÃ¢nÄƒ ajungi unde vrei sÄƒ fii."
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "grid md:grid-cols-3 gap-x-8 gap-y-14 max-w-6xl mx-auto",
        children: FOR_WHO.map((f, i) => /*#__PURE__*/_jsxDEV(Reveal, {
          delay: i * 100,
          children: /*#__PURE__*/_jsxDEV("div", {
            className: "for-who-col flex flex-col items-center text-center px-4 md:px-8",
            style: {
              '--accent': f.accent
            },
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "relative mb-7",
              children: /*#__PURE__*/_jsxDEV("div", {
                className: "relative",
                style: {
                  color: '#0A5360'
                },
                children: /*#__PURE__*/_jsxDEV(Ic, {
                  name: f.icon,
                  className: "w-12 h-12",
                  strokeWidth: "1.4"
                }, void 0, false)
              }, void 0, false)
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "text-[11px] font-semibold uppercase tracking-[0.16em] mb-3 whitespace-nowrap",
              style: {
                color: '#0A5360'
              },
              children: f.tag
            }, void 0, false), /*#__PURE__*/_jsxDEV("h3", {
              className: "serif-h text-[1.7rem] leading-snug text-bordo-deep mb-3.5 text-balance md:min-h-[5rem] flex items-center justify-center",
              children: f.title
            }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
              className: "text-ink-muted leading-relaxed max-w-[20rem]",
              children: f.desc
            }, void 0, false)]
          }, void 0, true)
        }, i, false))
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("section", {
      className: "py-20 md:py-28 px-4 md:px-6 lg:px-10 bg-white relative",
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "max-w-7xl mx-auto",
        children: [/*#__PURE__*/_jsxDEV(SectionTitle, {
          title: "De ce noi",
          subtitle: "Suntem o echipÄƒ tÃ¢nÄƒrÄƒ care chiar a trecut prin asta."
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto",
          children: WHY.map((w, i) => /*#__PURE__*/_jsxDEV(Reveal, {
            delay: i * 80,
            children: /*#__PURE__*/_jsxDEV("div", {
              className: "bg-white rounded-2xl p-6 h-full shadow-soft border border-bordo/20 hover:border-bordo/40 transition-colors",
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center text-teal-deep mb-4",
                children: /*#__PURE__*/_jsxDEV(Ic, {
                  name: w.icon,
                  className: "w-6 h-6"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsxDEV("h4", {
                className: "serif-h text-xl text-bordo-deep mb-2",
                children: w.title
              }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                className: "text-sm text-ink-muted leading-relaxed",
                children: w.desc
              }, void 0, false)]
            }, void 0, true)
          }, i, false))
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false), /*#__PURE__*/_jsxDEV("section", {
      className: "relative overflow-hidden bg-bordo-deep text-cream",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "absolute inset-0 opacity-[0.07]",
        style: {
          backgroundImage: 'radial-gradient(circle at 1px 1px, #FAF3E7 1px, transparent 0)',
          backgroundSize: '26px 26px'
        }
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "relative max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-16 md:py-24",
        children: /*#__PURE__*/_jsxDEV("div", {
          className: "grid lg:grid-cols-2 gap-10 lg:gap-16 items-center",
          children: [/*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("h2", {
              className: "serif-h text-4xl md:text-5xl text-cream mb-5 leading-tight",
              children: "Un spaÈ›iu fÄƒcut pentru concentrare."
            }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
              className: "text-lg text-cream/80 leading-relaxed mb-8 max-w-lg",
              children: "SÄƒli liniÈ™tite, materiale fizice, tablÄƒ albÄƒ. Pe Strada Soveja nr. 90 vii, te aÈ™ezi È™i chiar Ã®nÈ›elegi, fÄƒrÄƒ distrageri."
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "flex flex-wrap gap-x-6 gap-y-3 mb-8",
              children: [['clock', 'Luni-Vineri 9:00 - 20:00'], ['clock', 'SÃ¢mbÄƒtÄƒ 9:00 - 16:00'], ['users', 'Grupe mici de 2-3 elevi']].map(([ic, t]) => /*#__PURE__*/_jsxDEV("span", {
                className: "inline-flex items-center gap-2 text-sm text-cream/90",
                children: [/*#__PURE__*/_jsxDEV(Ic, {
                  name: ic,
                  className: "w-4 h-4 text-rose"
                }, void 0, false), " ", t]
              }, t, true))
            }, void 0, false), /*#__PURE__*/_jsxDEV(Button, {
              href: "contact",
              variant: "cream",
              size: "lg",
              children: "ProgrameazÄƒ È™edinÈ›a gratuitÄƒ"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "relative w-full",
            style: {
              aspectRatio: '5 / 4'
            },
            children: /*#__PURE__*/_jsxDEV(SediuCarousel, {}, void 0, false)
          }, void 0, false)]
        }, void 0, true)
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("section", {
      id: "cum-lucram",
      className: "py-20 md:py-28 px-4 md:px-6 lg:px-10 max-w-6xl mx-auto",
      children: [/*#__PURE__*/_jsxDEV(SectionTitle, {
        title: "De la prima discuÈ›ie la primul progres",
        subtitle: "FÄƒrÄƒ grabÄƒ. FÄƒrÄƒ presiune. Personalizat pentru tine."
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "space-y-6 md:space-y-10",
        children: [{
          n: '01',
          title: 'È˜edinÈ›Äƒ de cunoaÈ™tere gratuitÄƒ + test iniÈ›ial',
          desc: 'StÄƒm cÃ¢t este nevoie, evaluÄƒm cunoÈ™tinÈ›ele È™i principiile. Vorbim deschis, iar tu decizi dacÄƒ suntem compatibili.'
        }, {
          n: '02',
          title: 'Planul de lucru',
          desc: 'Pe baza evaluÄƒrii, Ã®È›i spunem ce este de lucrat: cÃ¢t timp ne trebuie È™i ce lecÈ›ii prioritizÄƒm. ÃŽn funcÈ›ie de aceste criterii, alegem un plan potrivit pentru tine.'
        }, {
          n: '03',
          title: 'PlecÄƒm la drum fÄƒrÄƒ presiune',
          desc: 'LucrÄƒm punctele tale slabe. ReluÄƒm de cÃ¢te ori este necesar È™i apreciem fiecare progres realizat. Te Ã®ncurajÄƒm sÄƒ adresezi orice Ã®ntrebare.'
        }].map((s, i) => /*#__PURE__*/_jsxDEV(Reveal, {
          delay: i * 120,
          children: /*#__PURE__*/_jsxDEV("div", {
            className: "flex gap-5 md:gap-10 items-start",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "serif-h text-5xl md:text-7xl lg:text-8xl text-rose/60 leading-none w-14 md:w-24 flex-shrink-0",
              children: s.n
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "flex-1 pt-2 md:pt-4",
              children: [/*#__PURE__*/_jsxDEV("h3", {
                className: "serif-h text-2xl md:text-3xl text-bordo-deep mb-2",
                children: s.title
              }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                className: "text-ink-muted text-[15px] md:text-base leading-relaxed",
                children: s.desc
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true)
        }, i, false))
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("section", {
      className: "py-20 md:py-28 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto",
      children: [/*#__PURE__*/_jsxDEV(SectionTitle, {
        title: "Pe ce materii lucrÄƒm"
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
        children: window.SUBJECTS.map((s, i) => /*#__PURE__*/_jsxDEV(Reveal, {
          delay: i * 60,
          children: /*#__PURE__*/_jsxDEV("div", {
            className: "bg-white rounded-2xl shadow-card p-6 md:p-7 h-full border border-transparent flex flex-col",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "flex items-start mb-4",
              children: /*#__PURE__*/_jsxDEV("span", {
                className: "w-12 h-12 rounded-xl bg-cream-warm flex items-center justify-center text-2xl",
                children: s.icon
              }, void 0, false)
            }, void 0, false), /*#__PURE__*/_jsxDEV("h3", {
              className: "serif-h text-2xl text-bordo-deep mb-2",
              children: s.name
            }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
              className: "text-sm text-ink-muted leading-relaxed flex-1",
              children: s.tagline
            }, void 0, false)]
          }, void 0, true)
        }, s.slug, false))
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("section", {
      className: "py-20 md:py-28 px-4 md:px-6 lg:px-10 bg-white",
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "max-w-6xl mx-auto",
        children: [/*#__PURE__*/_jsxDEV(SectionTitle, {
          title: "PreÈ›uri transparente",
          subtitle: "FÄƒrÄƒ surprize, fÄƒrÄƒ costuri ascunse. AceleaÈ™i preÈ›uri pentru toate materiile."
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "grid sm:grid-cols-3 gap-6 items-stretch",
          children: window.PRICES.map((p, i) => {
            const label = p.badge ? p.badge : p.featured ? 'Recomandat' : 'Clasic';
            return /*#__PURE__*/_jsxDEV(Reveal, {
              delay: i * 80,
              children: /*#__PURE__*/_jsxDEV("div", {
                className: `relative rounded-3xl p-8 md:p-9 h-full flex flex-col ${p.featured ? 'bg-bordo-deep text-cream shadow-card-hover sm:-translate-y-3' : 'bg-white border border-bordo/12 shadow-soft'}`,
                children: [/*#__PURE__*/_jsxDEV("div", {
                  className: `text-[11px] uppercase tracking-[0.22em] font-semibold mb-5 ${p.featured ? 'text-rose-soft' : 'text-teal'}`,
                  children: label
                }, void 0, false), /*#__PURE__*/_jsxDEV("h3", {
                  className: `serif-h text-2xl md:text-[1.7rem] mb-5 leading-snug ${p.featured ? 'text-cream' : 'text-bordo-deep'}`,
                  children: p.title
                }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                  className: "flex items-baseline gap-2 mb-1.5",
                  children: [/*#__PURE__*/_jsxDEV("span", {
                    className: `serif-h text-6xl leading-none ${p.featured ? '' : 'text-bordo'}`,
                    style: p.featured ? {
                      color: '#FF4D4D'
                    } : undefined,
                    children: p.price
                  }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                    className: `text-sm ${p.featured ? 'text-cream/90' : 'text-ink-muted'}`,
                    children: p.unit
                  }, void 0, false)]
                }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
                  className: `text-sm mb-6 ${p.featured ? 'text-cream/85' : 'text-ink-light'}`,
                  children: p.duration
                }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                  className: `h-px w-full mb-6 ${p.featured ? 'bg-cream/15' : 'bg-bordo/10'}`
                }, void 0, false), /*#__PURE__*/_jsxDEV("ul", {
                  className: "space-y-3 mb-2",
                  children: p.bullets.map(b => /*#__PURE__*/_jsxDEV("li", {
                    className: `flex items-start gap-2.5 text-sm leading-snug ${p.featured ? 'text-cream' : 'text-ink'}`,
                    children: [/*#__PURE__*/_jsxDEV("span", {
                      className: `mt-0.5 flex-shrink-0 ${p.featured ? 'text-rose' : 'text-teal'}`,
                      children: /*#__PURE__*/_jsxDEV(Ic, {
                        name: "badge",
                        className: "w-4 h-4"
                      }, void 0, false)
                    }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                      children: b
                    }, void 0, false)]
                  }, b, true))
                }, void 0, false)]
              }, void 0, true)
            }, p.id, false);
          })
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "text-center mt-12",
          children: /*#__PURE__*/_jsxDEV(Button, {
            href: "preturi",
            variant: "primary",
            size: "lg",
            children: "Vezi toate preÈ›urile â†’"
          }, void 0, false)
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false), /*#__PURE__*/_jsxDEV("section", {
      className: "py-20 md:py-28 px-4 md:px-6 lg:px-10",
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "max-w-7xl mx-auto",
        children: [/*#__PURE__*/_jsxDEV(SectionTitle, {
          title: "Ce spun elevii È™i pÄƒrinÈ›ii"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5",
          children: window.TESTIMONIALS.slice(0, 3).map((t, i) => /*#__PURE__*/_jsxDEV(Reveal, {
            delay: i * 100,
            children: /*#__PURE__*/_jsxDEV(TestimonialCard, {
              t: t
            }, void 0, false)
          }, t.id, false))
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "text-center mt-10",
          children: /*#__PURE__*/_jsxDEV(Button, {
            href: "testimoniale",
            variant: "outline",
            size: "md",
            children: "Vezi toate testimonialele â†’"
          }, void 0, false)
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false), /*#__PURE__*/_jsxDEV("section", {
      className: "py-20 md:py-28 px-4 md:px-6 lg:px-10",
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "max-w-5xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-10 items-start",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "lg:col-span-5",
          children: /*#__PURE__*/_jsxDEV("div", {
            className: "bg-white rounded-2xl p-7 md:p-8 shadow-soft",
            children: [/*#__PURE__*/_jsxDEV("h2", {
              className: "serif-h text-4xl md:text-5xl text-bordo-deep mb-4 leading-tight",
              children: "Hai sÄƒ vorbim. Prima È™edinÈ›Äƒ e gratuitÄƒ."
            }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
              className: "text-ink-muted leading-relaxed mb-7",
              children: "CompleteazÄƒ formularul sau scrie-ne pe WhatsApp. Stabilim Ã®mpreunÄƒ cÃ¢nd vii pentru testul iniÈ›ial."
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "space-y-3 text-sm",
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "flex items-start gap-3 p-4 rounded-xl bg-cream-warm/60",
                children: [/*#__PURE__*/_jsxDEV("span", {
                  className: "text-bordo mt-0.5 flex-shrink-0",
                  children: /*#__PURE__*/_jsxDEV(Ic, {
                    name: "phone",
                    className: "w-5 h-5"
                  }, void 0, false)
                }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                  children: [/*#__PURE__*/_jsxDEV("div", {
                    className: "text-ink-muted text-xs",
                    children: "Telefon"
                  }, void 0, false), /*#__PURE__*/_jsxDEV("a", {
                    href: "tel:+40721628936",
                    className: "text-bordo-deep font-medium hover:text-bordo",
                    children: PHONE
                  }, void 0, false)]
                }, void 0, true)]
              }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
                className: "flex items-start gap-3 p-4 rounded-xl bg-cream-warm/60",
                children: [/*#__PURE__*/_jsxDEV("span", {
                  className: "text-bordo mt-0.5 flex-shrink-0",
                  children: /*#__PURE__*/_jsxDEV(Ic, {
                    name: "mail",
                    className: "w-5 h-5"
                  }, void 0, false)
                }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                  children: [/*#__PURE__*/_jsxDEV("div", {
                    className: "text-ink-muted text-xs",
                    children: "Email"
                  }, void 0, false), /*#__PURE__*/_jsxDEV("a", {
                    href: `mailto:${EMAIL}`,
                    className: "text-bordo-deep font-medium hover:text-bordo break-all",
                    children: EMAIL
                  }, void 0, false)]
                }, void 0, true)]
              }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
                className: "flex items-start gap-3 p-4 rounded-xl bg-cream-warm/60",
                children: [/*#__PURE__*/_jsxDEV("span", {
                  className: "text-bordo mt-0.5 flex-shrink-0",
                  children: /*#__PURE__*/_jsxDEV(Ic, {
                    name: "pin",
                    className: "w-5 h-5"
                  }, void 0, false)
                }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                  children: [/*#__PURE__*/_jsxDEV("div", {
                    className: "text-ink-muted text-xs",
                    children: "Sediu"
                  }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                    className: "text-bordo-deep font-medium",
                    children: ADDRESS
                  }, void 0, false)]
                }, void 0, true)]
              }, void 0, true)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "aspect-[4/3] rounded-2xl overflow-hidden shadow-soft relative bg-cream-warm mt-4",
              children: /*#__PURE__*/_jsxDEV("iframe", {
                title: "Centrul de PregÄƒtire ConstanÈ›a",
                src: "https://www.google.com/maps?q=Strada+Soveja+90+Constanta&output=embed",
                className: "absolute inset-0 w-full h-full border-0",
                loading: "lazy",
                referrerPolicy: "no-referrer-when-downgrade"
              }, void 0, false)
            }, void 0, false)]
          }, void 0, true)
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "lg:col-span-7",
          children: /*#__PURE__*/_jsxDEV(ContactForm, {
            compact: true
          }, void 0, false)
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false)]
  }, void 0, true);
}
Object.assign(window, {
  HomePage
});

import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
// About + Services pages.

function AboutPage() {
  return /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV(PageHero, {
      kicker: "Cine suntem",
      title: "Centrul de PregÄƒtire ConstanÈ›a",
      subtitle: "O echipÄƒ de profesori dedicaÈ›i meditaÈ›iilor pentru Evaluarea NaÈ›ionalÄƒ, Bacalaureat È™i recuperarea materiei."
    }, void 0, false), /*#__PURE__*/_jsxDEV("section", {
      className: "py-16 md:py-20 px-4 md:px-6 max-w-3xl mx-auto",
      children: [/*#__PURE__*/_jsxDEV(Breadcrumb, {
        items: [{
          label: 'AcasÄƒ',
          href: 'acasa'
        }, {
          label: 'Despre noi'
        }]
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "space-y-6 text-[17px] leading-[1.85] text-ink",
        children: [/*#__PURE__*/_jsxDEV("p", {
          children: ["Pornim de la un principiu fundamental: ", /*#__PURE__*/_jsxDEV("strong", {
            children: "nu existÄƒ elev â€žslab\""
          }, void 0, false), ". ExistÄƒ etape de Ã®nvÄƒÈ›are rÄƒmase Ã®n urmÄƒ, capitole insuficient consolidate care afecteazÄƒ Ã®nÈ›elegerea materiei subsecvente È™i explicaÈ›ii care nu au fost adaptate stilului cognitiv al elevului. Misiunea noastrÄƒ este sÄƒ identificÄƒm corect aceste puncte È™i sÄƒ construim pornind de la ele."]
        }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
          children: "Metodologia noastrÄƒ pleacÄƒ de unde eÈ™ti tu: evaluÄƒm cu sinceritate nivelul real al elevului la Ã®nceputul colaborÄƒrii È™i Ã®l Ã®nsoÈ›im, pas cu pas, pÃ¢nÄƒ la obiectivul propus, fie cÄƒ este vorba despre Evaluarea NaÈ›ionalÄƒ, Bacalaureat sau recuperarea unor lacune punctuale. Procesul exclude presupunerile, etichetele È™i etapele â€žsÄƒrite\". ÃŽncepe Ã®ntotdeauna cu un test iniÈ›ial complet È™i continuÄƒ cu un plan personalizat."
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          children: "Activitatea didacticÄƒ se desfÄƒÈ™oarÄƒ la sediul din ConstanÈ›a, Ã®n sÄƒli dedicate, cu materiale fizice È™i tablÄƒ albÄƒ. LucrÄƒm Ã®n grupe restrÃ¢nse de 2-3 elevi, adaptate atÃ¢t pentru intervenÈ›ii punctuale, cÃ¢t È™i pentru programe extinse pe durata unui an È™colar. FrecvenÈ›a È™i intensitatea È™edinÈ›elor sunt stabilite Ã®mpreunÄƒ cu elevul, Ã®n funcÈ›ie de obiective È™i disponibilitate."
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("section", {
      className: "py-16 md:py-20 px-4 md:px-6 lg:px-10 bg-cream-warm/50",
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "max-w-5xl mx-auto",
        children: [/*#__PURE__*/_jsxDEV(SectionTitle, {
          title: "Patru lucruri Ã®n care credem"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "grid sm:grid-cols-2 gap-5",
          children: [{
            t: 'Nu ne pasÄƒ de unde pleci, ne pasÄƒ unde ajungi',
            d: 'Punctul de pornire e doar punctul de pornire. Nu Ã®È›i reproÈ™Äƒm cÄƒ nu È™tii ceva. Asta e treaba noastrÄƒ, sÄƒ te ducem mai departe.'
          }, {
            t: 'Nu existÄƒ elev â€žslab"',
            d: 'ExistÄƒ explicaÈ›ii care nu i s-au potrivit. Treaba noastrÄƒ e sÄƒ gÄƒsim explicaÈ›ia care funcÈ›ioneazÄƒ pentru tine.'
          }, {
            t: 'RÄƒbdarea bate inteligenÈ›a',
            d: 'Cu cÃ¢t te grÄƒbeÈ™ti mai puÈ›in, cu atÃ¢t rÄƒmÃ¢ne mai mult. LucrÄƒm pe Ã®nÈ›eles, nu pe vitezÄƒ.'
          }, {
            t: 'Orice Ã®ntrebare e binevenitÄƒ',
            d: 'Nicio Ã®ntrebare nu e prea simplÄƒ. DacÄƒ e Ã®n capul tÄƒu, are sens sÄƒ o pui, È™i sÄƒ-i dÄƒm un rÄƒspuns.'
          }].map((p, i) => /*#__PURE__*/_jsxDEV(Reveal, {
            delay: i * 80,
            children: /*#__PURE__*/_jsxDEV("div", {
              className: "bg-white rounded-2xl p-6 md:p-7 h-full shadow-soft",
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "serif-h text-3xl text-rose mb-3",
                children: String(i + 1).padStart(2, '0')
              }, void 0, false), /*#__PURE__*/_jsxDEV("h4", {
                className: "serif-h text-xl text-bordo-deep mb-2",
                children: p.t
              }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                className: "text-sm text-ink-muted leading-relaxed",
                children: p.d
              }, void 0, false)]
            }, void 0, true)
          }, i, false))
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false), /*#__PURE__*/_jsxDEV("section", {
      className: "py-16 md:py-20 px-4 md:px-6 max-w-5xl mx-auto",
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "bg-white rounded-2xl p-7 md:p-10 shadow-soft border-l-4 border-bordo",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "flex items-start gap-5",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "text-bordo text-4xl flex-shrink-0",
            children: "ðŸ“"
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("h4", {
              className: "serif-h text-2xl md:text-3xl text-bordo-deep mb-2",
              children: "La sediu, Ã®n ConstanÈ›a"
            }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
              className: "text-ink-muted leading-relaxed text-[15px] md:text-base mb-3",
              children: [ADDRESS, ". SÄƒli liniÈ™tite, materiale fizice, tablÄƒ albÄƒ. Un spaÈ›iu dedicat Ã®n care te poÈ›i concentra, fÄƒrÄƒ distrageri."]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "text-sm text-ink-muted",
              children: [/*#__PURE__*/_jsxDEV("strong", {
                className: "text-bordo-deep",
                children: "Program:"
              }, void 0, false), " Luni-Vineri 9:00 - 20:00 Â· SÃ¢mbÄƒtÄƒ 9:00 - 16:00"]
            }, void 0, true)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "aspect-[16/9] md:aspect-[2/1] rounded-2xl overflow-hidden shadow-soft relative bg-cream-warm mt-7 md:mt-8",
          children: /*#__PURE__*/_jsxDEV("iframe", {
            title: "Centrul de PregÄƒtire ConstanÈ›a",
            src: "https://www.google.com/maps?q=Strada+Soveja+90+Constanta&output=embed",
            className: "absolute inset-0 w-full h-full border-0",
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade"
          }, void 0, false)
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false)]
  }, void 0, true);
}
Object.assign(window, {
  AboutPage
});

import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
// 404 page (subject pages removed).

function NotFound() {
  return /*#__PURE__*/_jsxDEV("section", {
    className: "min-h-[60vh] flex items-center justify-center px-4 text-center",
    children: /*#__PURE__*/_jsxDEV("div", {
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "serif-h text-9xl text-rose mb-2",
        children: "404"
      }, void 0, false), /*#__PURE__*/_jsxDEV("h2", {
        className: "serif-h text-3xl text-bordo-deep mb-3",
        children: "Hmm, nu am gÄƒsit pagina."
      }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
        className: "text-ink-muted mb-7",
        children: "Probabil un link vechi sau o adresÄƒ greÈ™itÄƒ. Hai Ã®napoi acasÄƒ."
      }, void 0, false), /*#__PURE__*/_jsxDEV(Button, {
        href: "acasa",
        variant: "primary",
        children: "ÃŽnapoi pe AcasÄƒ"
      }, void 0, false)]
    }, void 0, true)
  }, void 0, false);
}
Object.assign(window, {
  NotFound
});

import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
// Prices + Testimonials pages.

function PricesPage() {
  return /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV(PageHero, {
      kicker: "PreÈ›uri",
      title: "Transparent. FÄƒrÄƒ surprize.",
      subtitle: "Trei opÈ›iuni. AceleaÈ™i preÈ›uri pentru toate materiile, indiferent de format. Tu alegi cum vrei sÄƒ mergem Ã®mpreunÄƒ."
    }, void 0, false), /*#__PURE__*/_jsxDEV("section", {
      className: "py-12 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto",
      children: [/*#__PURE__*/_jsxDEV(Breadcrumb, {
        items: [{
          label: 'AcasÄƒ',
          href: 'acasa'
        }, {
          label: 'PreÈ›uri'
        }]
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "grid md:grid-cols-3 gap-6 md:gap-5 mt-10",
        children: window.PRICES.map(p => /*#__PURE__*/_jsxDEV(PriceCard, {
          p: p
        }, p.id, false))
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "mt-12 max-w-4xl mx-auto bg-white rounded-2xl p-7 md:p-9 shadow-soft border-l-4 border-teal",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "text-xs uppercase tracking-wider text-teal font-semibold mb-3",
          children: "MenÈ›iune importantÄƒ"
        }, void 0, false), /*#__PURE__*/_jsxDEV("h3", {
          className: "serif-h text-2xl md:text-3xl text-bordo-deep mb-3",
          children: "Nu suntem obligaÈ›i sÄƒ facem abonament."
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "text-[16px] leading-relaxed text-ink",
          children: ["PoÈ›i veni pentru ", /*#__PURE__*/_jsxDEV("strong", {
            children: "1 È™edinÈ›Äƒ"
          }, void 0, false), ", pentru ", /*#__PURE__*/_jsxDEV("strong", {
            children: "3 È™edinÈ›e"
          }, void 0, false), ", sau pentru ", /*#__PURE__*/_jsxDEV("strong", {
            children: "tot anul"
          }, void 0, false), ". ", /*#__PURE__*/_jsxDEV("span", {
            className: "text-bordo-deep font-semibold",
            children: "Tu decizi."
          }, void 0, false), " FÄƒrÄƒ minim, fÄƒrÄƒ penalitÄƒÈ›i, fÄƒrÄƒ â€žpachete\" inflexibile. PlÄƒteÈ™ti pe ce faci, atÃ¢t."]
        }, void 0, true)]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true);
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
    label: 'De la pÄƒrinÈ›i',
    match: t => t.role.toLowerCase().includes('pÄƒrinte')
  }, {
    id: 'recuperare',
    label: 'Recuperare',
    match: t => t.subject.toLowerCase().includes('recuperare')
  }];
  const fObj = filters.find(f => f.id === filter);
  const list = filter === 'toate' ? window.TESTIMONIALS : window.TESTIMONIALS.filter(fObj.match);
  return /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV(PageHero, {
      kicker: "Ce spun oamenii",
      title: "Cuvinte de la oameni reali",
      subtitle: "Le-am Ã®ntrebat, ne-au rÄƒspuns. Nu am stilizat, nu am cosmetizat, vorbesc aÈ™a cum vorbesc oamenii."
    }, void 0, false), /*#__PURE__*/_jsxDEV("section", {
      className: "py-12 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto",
      children: [/*#__PURE__*/_jsxDEV(Breadcrumb, {
        items: [{
          label: 'AcasÄƒ',
          href: 'acasa'
        }, {
          label: 'Testimoniale'
        }]
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "flex flex-wrap gap-2 mb-10 justify-center",
        children: filters.map(f => /*#__PURE__*/_jsxDEV("button", {
          onClick: () => setFilter(f.id),
          className: `px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === f.id ? 'bg-bordo text-cream' : 'bg-white text-ink-muted border border-cream-deep hover:border-bordo'}`,
          children: f.label
        }, f.id, false))
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5",
        children: list.map((t, i) => /*#__PURE__*/_jsxDEV(Reveal, {
          delay: i % 6 * 60,
          children: /*#__PURE__*/_jsxDEV(TestimonialCard, {
            t: t
          }, void 0, false)
        }, t.id, false))
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
}
Object.assign(window, {
  PricesPage,
  TestimonialsPage
});

import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
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
    if (tk.startsWith('**')) parts.push(/*#__PURE__*/_jsxDEV("strong", {
      children: tk.slice(2, -2)
    }, key++, false));else if (tk.startsWith('`')) parts.push(/*#__PURE__*/_jsxDEV("code", {
      className: "font-mono text-sm bg-cream-warm px-1.5 py-0.5 rounded text-bordo-deep",
      children: tk.slice(1, -1)
    }, key++, false));else parts.push(/*#__PURE__*/_jsxDEV("em", {
      children: tk.slice(1, -1)
    }, key++, false));
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
      blocks.push(/*#__PURE__*/_jsxDEV("h3", {
        children: renderInline(line.slice(4))
      }, key++, false));
      i++;
      continue;
    }
    if (line.startsWith('## ')) {
      blocks.push(/*#__PURE__*/_jsxDEV("h2", {
        children: renderInline(line.slice(3))
      }, key++, false));
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
      blocks.push(/*#__PURE__*/_jsxDEV("blockquote", {
        children: renderInline(q.join(' '))
      }, key++, false));
      continue;
    }
    if (/^-\s/.test(line) || /^\*\s/.test(line)) {
      const items = [];
      while (i < lines.length && (/^-\s/.test(lines[i]) || /^\*\s/.test(lines[i]))) {
        items.push(lines[i].replace(/^[-*]\s/, ''));
        i++;
      }
      blocks.push(/*#__PURE__*/_jsxDEV("ul", {
        children: items.map((it, j) => /*#__PURE__*/_jsxDEV("li", {
          children: renderInline(it)
        }, j, false))
      }, key++, false));
      continue;
    }
    if (/^\d+\.\s/.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ''));
        i++;
      }
      blocks.push(/*#__PURE__*/_jsxDEV("ol", {
        className: "list-decimal pl-6 my-4 space-y-1",
        children: items.map((it, j) => /*#__PURE__*/_jsxDEV("li", {
          className: "leading-relaxed pl-2",
          children: renderInline(it)
        }, j, false))
      }, key++, false));
      continue;
    }
    let p = [line];
    i++;
    while (i < lines.length && lines[i].trim() && !/^[#>\-*]|\d+\./.test(lines[i].trim())) {
      p.push(lines[i]);
      i++;
    }
    blocks.push(/*#__PURE__*/_jsxDEV("p", {
      children: renderInline(p.join(' '))
    }, key++, false));
  }
  return /*#__PURE__*/_jsxDEV("div", {
    className: "prose-article",
    children: blocks
  }, void 0, false);
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
  return /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV(PageHero, {
      kicker: "Blog",
      title: "Articole de la profesori, pentru elevi È™i pÄƒrinÈ›i",
      subtitle: "Sfaturi, ghiduri È™i rÄƒspunsuri reale la Ã®ntrebÄƒri reale. FÄƒrÄƒ SEO sclifosit, fÄƒrÄƒ cliÈ™ee."
    }, void 0, false), /*#__PURE__*/_jsxDEV("section", {
      className: "py-12 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto",
      children: [/*#__PURE__*/_jsxDEV(Breadcrumb, {
        items: [{
          label: 'AcasÄƒ',
          href: 'acasa'
        }, {
          label: 'Blog'
        }]
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "flex flex-wrap gap-2 mb-10 justify-center",
        children: categories.map(c => /*#__PURE__*/_jsxDEV("button", {
          onClick: () => setFilter(c),
          className: `px-4 py-2 rounded-full text-sm font-medium transition-all capitalize ${filter === c ? 'bg-bordo text-cream' : 'bg-white text-ink-muted border border-cream-deep hover:border-bordo'}`,
          children: c
        }, c, false))
      }, void 0, false), featured && /*#__PURE__*/_jsxDEV(Reveal, {
        children: /*#__PURE__*/_jsxDEV("a", {
          href: '#/blog/' + featured.slug,
          className: "group block mb-10",
          children: /*#__PURE__*/_jsxDEV("div", {
            className: "grid lg:grid-cols-5 gap-6 lg:gap-10 bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "lg:col-span-2 aspect-video lg:aspect-auto relative",
              children: /*#__PURE__*/_jsxDEV("image-slot", {
                id: 'blog-cover-' + featured.slug,
                placeholder: 'cover ' + featured.slug,
                style: {
                  width: '100%',
                  height: '100%',
                  minHeight: '200px'
                }
              }, void 0, false)
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "lg:col-span-3 p-7 md:p-10 lg:p-12 flex flex-col justify-center",
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "flex items-center gap-3 mb-3 text-xs",
                children: [/*#__PURE__*/_jsxDEV("span", {
                  className: "px-2.5 py-1 rounded-full bg-rose/30 text-bordo-deep font-semibold uppercase tracking-wider",
                  children: featured.category
                }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                  className: "text-ink-muted",
                  children: formatDate(featured.date)
                }, void 0, false)]
              }, void 0, true), /*#__PURE__*/_jsxDEV("h2", {
                className: "serif-h text-3xl md:text-4xl text-bordo-deep mb-3 group-hover:text-bordo transition-colors",
                children: featured.title
              }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                className: "text-ink-muted leading-relaxed mb-5",
                children: featured.excerpt
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                className: "text-sm font-medium text-bordo",
                children: "CiteÈ™te articolul â†’"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true)
        }, void 0, false)
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
        children: rest.map((b, i) => /*#__PURE__*/_jsxDEV(Reveal, {
          delay: i * 80,
          children: /*#__PURE__*/_jsxDEV("a", {
            href: '#/blog/' + b.slug,
            className: "group block h-full",
            children: /*#__PURE__*/_jsxDEV("div", {
              className: "bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all h-full flex flex-col",
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "aspect-[4/3] relative",
                children: /*#__PURE__*/_jsxDEV("image-slot", {
                  id: 'blog-cover-' + b.slug,
                  placeholder: 'cover ' + b.slug,
                  style: {
                    width: '100%',
                    height: '100%'
                  }
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                className: "p-6 flex flex-col flex-1",
                children: [/*#__PURE__*/_jsxDEV("div", {
                  className: "flex items-center gap-2 mb-3 text-xs",
                  children: [/*#__PURE__*/_jsxDEV("span", {
                    className: "px-2 py-0.5 rounded-full bg-cream-warm text-bordo-deep font-medium",
                    children: b.category
                  }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                    className: "text-ink-muted",
                    children: formatDate(b.date)
                  }, void 0, false)]
                }, void 0, true), /*#__PURE__*/_jsxDEV("h3", {
                  className: "serif-h text-xl text-bordo-deep mb-2 group-hover:text-bordo transition-colors leading-tight",
                  children: b.title
                }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                  className: "text-sm text-ink-muted leading-relaxed flex-1",
                  children: b.excerpt
                }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                  className: "text-sm font-medium text-bordo mt-4",
                  children: "CiteÈ™te â†’"
                }, void 0, false)]
              }, void 0, true)]
            }, void 0, true)
          }, void 0, false)
        }, b.slug, false))
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
}
function BlogArticlePage({
  slug
}) {
  const article = window.BLOG.find(b => b.slug === slug);
  const [copied, setCopied] = useState(false);
  if (!article) return /*#__PURE__*/_jsxDEV(NotFound, {}, void 0, false);
  const url = window.location.origin + window.location.pathname + '#/blog/' + article.slug;
  const related = window.BLOG.filter(b => b.slug !== article.slug).slice(0, 3);
  return /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV("section", {
      className: "bg-cream-warm relative overflow-hidden",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "absolute inset-0 opacity-25 hatched"
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "relative max-w-3xl mx-auto px-4 md:px-6 pt-12 pb-8 md:pt-16",
        children: [/*#__PURE__*/_jsxDEV(Breadcrumb, {
          items: [{
            label: 'AcasÄƒ',
            href: 'acasa'
          }, {
            label: 'Blog',
            href: 'blog'
          }, {
            label: article.title
          }]
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "flex items-center gap-3 mb-4 text-xs",
          children: [/*#__PURE__*/_jsxDEV("span", {
            className: "px-2.5 py-1 rounded-full bg-rose/30 text-bordo-deep font-semibold uppercase tracking-wider",
            children: article.category
          }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
            className: "text-ink-muted",
            children: formatDate(article.date)
          }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
            className: "text-ink-muted",
            children: ["Â· ", article.author]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("h1", {
          className: "serif-h text-4xl md:text-5xl lg:text-6xl text-bordo-deep leading-[1.05] mb-5",
          children: article.title
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "text-lg text-ink-muted leading-relaxed",
          children: article.excerpt
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("section", {
      className: "py-10 md:py-14 px-4 md:px-6",
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "max-w-3xl mx-auto",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "aspect-video rounded-2xl overflow-hidden bg-white shadow-soft mb-10 relative",
          children: /*#__PURE__*/_jsxDEV("image-slot", {
            id: 'blog-hero-' + article.slug,
            placeholder: 'imagine articol ' + article.slug,
            style: {
              width: '100%',
              height: '100%'
            }
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsxDEV(MarkdownBody, {
          source: article.body
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "mt-14 pt-8 border-t border-cream-deep",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "text-xs uppercase tracking-wider text-ink-muted font-semibold mb-3",
            children: "Distribuie articolul"
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "flex flex-wrap gap-3",
            children: [/*#__PURE__*/_jsxDEV("a", {
              href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
              target: "_blank",
              rel: "noopener",
              className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-soft hover:shadow-card text-sm font-medium text-bordo-deep",
              children: /*#__PURE__*/_jsxDEV("span", {
                children: "Facebook"
              }, void 0, false)
            }, void 0, false), /*#__PURE__*/_jsxDEV("a", {
              href: `https://wa.me/?text=${encodeURIComponent(article.title + ', ' + url)}`,
              target: "_blank",
              rel: "noopener",
              className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-soft hover:shadow-card text-sm font-medium text-bordo-deep",
              children: /*#__PURE__*/_jsxDEV("span", {
                children: "WhatsApp"
              }, void 0, false)
            }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
              onClick: () => {
                navigator.clipboard?.writeText(url);
                setCopied(true);
                setTimeout(() => setCopied(false), 1800);
              },
              className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-soft hover:shadow-card text-sm font-medium text-bordo-deep",
              children: /*#__PURE__*/_jsxDEV("span", {
                children: copied ? 'Copiat âœ“' : 'CopiazÄƒ link'
              }, void 0, false)
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "mt-10 bg-cream-warm/50 rounded-2xl p-6 flex items-center gap-4",
          children: [/*#__PURE__*/_jsxDEV("span", {
            className: "w-14 h-14 rounded-full bg-rose/30 flex items-center justify-center serif-h text-2xl text-bordo-deep flex-shrink-0",
            children: article.author.split(' ').map(p => p[0]).join('')
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "font-semibold text-bordo-deep",
              children: article.author
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "text-sm text-ink-muted",
              children: "Profesor la Centrul de PregÄƒtire ConstanÈ›a"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true)
    }, void 0, false), /*#__PURE__*/_jsxDEV("section", {
      className: "py-16 px-4 md:px-6 lg:px-10 bg-cream-warm/40",
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "max-w-6xl mx-auto",
        children: [/*#__PURE__*/_jsxDEV("h3", {
          className: "serif-h text-3xl text-bordo-deep mb-8 text-center",
          children: "Mai citeÈ™te"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "grid md:grid-cols-3 gap-5",
          children: related.map(b => /*#__PURE__*/_jsxDEV("a", {
            href: '#/blog/' + b.slug,
            className: "block bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "text-xs text-bordo-deep font-semibold uppercase tracking-wider mb-2",
              children: b.category
            }, void 0, false), /*#__PURE__*/_jsxDEV("h4", {
              className: "serif-h text-xl text-bordo-deep mb-2 leading-tight",
              children: b.title
            }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
              className: "text-sm text-ink-muted leading-relaxed line-clamp-3",
              children: b.excerpt
            }, void 0, false)]
          }, b.slug, true))
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false)]
  }, void 0, true);
}
Object.assign(window, {
  BlogHubPage,
  BlogArticlePage,
  formatDate
});

import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
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
    if (!form.nume.trim()) e.nume = 'Spune-ne cum te cheamÄƒ';
    if (!form.email.trim()) e.email = 'Avem nevoie sÄƒ te putem contacta';else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Email-ul nu pare valid';
    if (!form.telefon.trim()) e.telefon = 'LasÄƒ-ne un numÄƒr la care te putem suna';
    if (!form.materie) e.materie = 'Alege o materie';
    if (!form.tip) e.tip = 'Spune-ne pentru ce vrei meditaÈ›iile';
    if (!form.mesaj.trim() || form.mesaj.trim().length < 5) e.mesaj = 'Scrie-ne cÃ¢teva cuvinte despre situaÈ›ie';
    if (!form.consimtamant) e.consimtamant = 'BifeazÄƒ ca sÄƒ putem sÄƒ te contactÄƒm';
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
  return /*#__PURE__*/_jsxDEV("div", {
    className: `bg-white rounded-2xl p-7 md:p-10 border-l-4 border-bordo ${compact ? 'shadow-soft' : 'shadow-card'}`,
    children: [/*#__PURE__*/_jsxDEV("h2", {
      className: "serif-h text-3xl text-bordo-deep mb-2",
      children: "Scrie-ne"
    }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
      className: "text-ink-muted mb-7 text-[15px]",
      children: "Pe baza mesajului, te contactÄƒm sÄƒ stabilim È™edinÈ›a de cunoaÈ™tere gratuitÄƒ."
    }, void 0, false), status === 'success' ? /*#__PURE__*/_jsxDEV("div", {
      className: "text-center py-8",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "w-16 h-16 rounded-full bg-teal/20 mx-auto mb-4 flex items-center justify-center text-3xl text-teal-deep",
        children: "âœ“"
      }, void 0, false), /*#__PURE__*/_jsxDEV("h3", {
        className: "serif-h text-2xl text-bordo-deep mb-2",
        children: "MulÈ›umim!"
      }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
        className: "text-ink-muted mb-5",
        children: "Mesajul a ajuns la noi. Te contactÄƒm Ã®n maxim 24 de ore."
      }, void 0, false), /*#__PURE__*/_jsxDEV(Button, {
        onClick: () => setStatus('idle'),
        variant: "outline",
        children: "Trimite alt mesaj"
      }, void 0, false)]
    }, void 0, true) : /*#__PURE__*/_jsxDEV("form", {
      onSubmit: submit,
      className: "space-y-4",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "grid md:grid-cols-2 gap-4",
        children: [/*#__PURE__*/_jsxDEV("div", {
          children: [/*#__PURE__*/_jsxDEV("label", {
            htmlFor: "nume",
            children: "Nume *"
          }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
            id: "nume",
            type: "text",
            className: `input ${errors.nume ? 'error' : ''}`,
            value: form.nume,
            onChange: e => setField('nume', e.target.value),
            placeholder: "Numele tÄƒu sau al elevului"
          }, void 0, false), errors.nume && /*#__PURE__*/_jsxDEV("div", {
            className: "text-bordo text-xs mt-1",
            children: errors.nume
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          children: [/*#__PURE__*/_jsxDEV("label", {
            htmlFor: "telefon",
            children: "Telefon *"
          }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
            id: "telefon",
            type: "tel",
            className: `input ${errors.telefon ? 'error' : ''}`,
            value: form.telefon,
            onChange: e => setField('telefon', e.target.value),
            placeholder: "07xx xxx xxx"
          }, void 0, false), errors.telefon && /*#__PURE__*/_jsxDEV("div", {
            className: "text-bordo text-xs mt-1",
            children: errors.telefon
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        children: [/*#__PURE__*/_jsxDEV("label", {
          htmlFor: "email",
          children: "Email *"
        }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
          id: "email",
          type: "email",
          className: `input ${errors.email ? 'error' : ''}`,
          value: form.email,
          onChange: e => setField('email', e.target.value),
          placeholder: "email@exemplu.ro"
        }, void 0, false), errors.email && /*#__PURE__*/_jsxDEV("div", {
          className: "text-bordo text-xs mt-1",
          children: errors.email
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "grid md:grid-cols-2 gap-4",
        children: [/*#__PURE__*/_jsxDEV("div", {
          children: [/*#__PURE__*/_jsxDEV("label", {
            htmlFor: "materie",
            children: "Materia *"
          }, void 0, false), /*#__PURE__*/_jsxDEV("select", {
            id: "materie",
            className: `input ${errors.materie ? 'error' : ''}`,
            value: form.materie,
            onChange: e => setField('materie', e.target.value),
            children: [/*#__PURE__*/_jsxDEV("option", {
              value: "",
              children: "Alege o materie"
            }, void 0, false), window.SUBJECTS.map(s => /*#__PURE__*/_jsxDEV("option", {
              value: s.name,
              children: s.name
            }, s.slug, false)), /*#__PURE__*/_jsxDEV("option", {
              value: "Mai multe",
              children: "Mai multe materii"
            }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
              value: "Nu È™tiu Ã®ncÄƒ",
              children: "Nu È™tiu Ã®ncÄƒ"
            }, void 0, false)]
          }, void 0, true), errors.materie && /*#__PURE__*/_jsxDEV("div", {
            className: "text-bordo text-xs mt-1",
            children: errors.materie
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          children: [/*#__PURE__*/_jsxDEV("label", {
            htmlFor: "tip",
            children: "Pentru ce *"
          }, void 0, false), /*#__PURE__*/_jsxDEV("select", {
            id: "tip",
            className: `input ${errors.tip ? 'error' : ''}`,
            value: form.tip,
            onChange: e => setField('tip', e.target.value),
            children: [/*#__PURE__*/_jsxDEV("option", {
              value: "",
              children: "Alege opÈ›iunea"
            }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
              value: "EN",
              children: "Evaluare NaÈ›ionalÄƒ (a VIII-a)"
            }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
              value: "BAC",
              children: "Bacalaureat"
            }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
              value: "Recuperare",
              children: "Recuperare la materie"
            }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
              value: "Altceva",
              children: "Altceva"
            }, void 0, false)]
          }, void 0, true), errors.tip && /*#__PURE__*/_jsxDEV("div", {
            className: "text-bordo text-xs mt-1",
            children: errors.tip
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        children: [/*#__PURE__*/_jsxDEV("label", {
          htmlFor: "mesaj",
          children: "Spune-ne despre situaÈ›ie *"
        }, void 0, false), /*#__PURE__*/_jsxDEV("textarea", {
          id: "mesaj",
          rows: "5",
          className: `input resize-none ${errors.mesaj ? 'error' : ''}`,
          value: form.mesaj,
          onChange: e => setField('mesaj', e.target.value),
          placeholder: "Clasa, ce te Ã®ncurcÄƒ, ce ai Ã®ncercat deja, cÃ¢nd vrei sÄƒ Ã®ncepem... orice ne-ar ajuta sÄƒ te Ã®nÈ›elegem"
        }, void 0, false), errors.mesaj && /*#__PURE__*/_jsxDEV("div", {
          className: "text-bordo text-xs mt-1",
          children: errors.mesaj
        }, void 0, false)]
      }, void 0, true), status === 'error' && /*#__PURE__*/_jsxDEV("div", {
        className: "text-bordo text-sm p-3 rounded-lg bg-rose/20",
        children: "A apÄƒrut o eroare. ÃŽncearcÄƒ din nou sau scrie-ne pe WhatsApp."
      }, void 0, false), /*#__PURE__*/_jsxDEV("label", {
        className: "flex items-start gap-3 pt-1 cursor-pointer select-none",
        children: [/*#__PURE__*/_jsxDEV("input", {
          type: "checkbox",
          checked: form.consimtamant,
          onChange: e => setField('consimtamant', e.target.checked),
          className: "mt-1 w-[18px] h-[18px] flex-shrink-0 accent-bordo cursor-pointer"
        }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
          className: "text-xs text-ink-muted leading-relaxed",
          children: ["Sunt de acord ca datele introduse sÄƒ fie folosite pentru a fi contactat(Äƒ), conform ", /*#__PURE__*/_jsxDEV("a", {
            href: "#/confidentialitate",
            className: "underline hover:text-bordo",
            children: "politicii de confidenÈ›ialitate"
          }, void 0, false), ". DacÄƒ elevul e minor, confirm cÄƒ sunt pÄƒrintele sau tutorele acestuia."]
        }, void 0, true)]
      }, void 0, true), errors.consimtamant && /*#__PURE__*/_jsxDEV("div", {
        className: "text-bordo text-xs -mt-1",
        children: errors.consimtamant
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "flex flex-wrap gap-3 pt-2",
        children: [/*#__PURE__*/_jsxDEV(Button, {
          onClick: submit,
          disabled: status === 'loading',
          variant: "primary",
          size: "lg",
          className: status === 'loading' ? 'opacity-70 cursor-wait' : '',
          children: status === 'loading' ? 'Se trimite...' : 'Trimite mesajul'
        }, void 0, false), /*#__PURE__*/_jsxDEV(Button, {
          href: WHATSAPP_URL,
          variant: "whatsapp",
          size: "lg",
          children: "Mai bine pe WhatsApp"
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true);
}
function ContactPage() {
  return /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV(PageHero, {
      kicker: "Contact",
      title: "Hai sÄƒ vorbim",
      subtitle: "Cel mai rapid e pe WhatsApp. Dar dacÄƒ preferi formularul, suntem aici. RÄƒspundem Ã®n maxim 24 de ore."
    }, void 0, false), /*#__PURE__*/_jsxDEV("section", {
      className: "py-12 md:py-16 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto",
      children: [/*#__PURE__*/_jsxDEV(Breadcrumb, {
        items: [{
          label: 'AcasÄƒ',
          href: 'acasa'
        }, {
          label: 'Contact'
        }]
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "grid lg:grid-cols-12 gap-10",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "lg:col-span-7",
          children: /*#__PURE__*/_jsxDEV(ContactForm, {}, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "lg:col-span-5 space-y-4",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "bg-bordo-deep text-cream rounded-2xl p-7",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "flourish text-rose text-xs uppercase tracking-[0.3em] mb-4",
              style: {
                justifyContent: 'flex-start'
              },
              children: "RÄƒspundem rapid"
            }, void 0, false), /*#__PURE__*/_jsxDEV("h3", {
              className: "serif-h text-2xl text-cream mb-4",
              children: "Cel mai rapid pe WhatsApp"
            }, void 0, false), /*#__PURE__*/_jsxDEV("a", {
              href: WHATSAPP_URL,
              target: "_blank",
              rel: "noopener",
              className: "inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#1ebe57] transition-colors w-full justify-center",
              children: [/*#__PURE__*/_jsxDEV("svg", {
                viewBox: "0 0 32 32",
                className: "w-5 h-5 fill-white",
                children: /*#__PURE__*/_jsxDEV("path", {
                  d: "M16.026 0C7.21 0 0 7.21 0 16.026c0 2.83.755 5.605 2.18 8.026L0 32l8.247-2.155a16 16 0 007.78 1.987c8.815 0 16.026-7.21 16.026-16.026S24.84 0 16.026 0z"
                }, void 0, false)
              }, void 0, false), "Scrie pe WhatsApp"]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "bg-white rounded-2xl p-7 shadow-soft space-y-4",
            children: [/*#__PURE__*/_jsxDEV("div", {
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "text-xs uppercase tracking-wider text-teal font-semibold mb-1",
                children: "Telefon"
              }, void 0, false), /*#__PURE__*/_jsxDEV("a", {
                href: "tel:+40721628936",
                className: "text-lg font-medium text-bordo-deep hover:text-bordo",
                children: PHONE
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "text-xs uppercase tracking-wider text-teal font-semibold mb-1",
                children: "Email"
              }, void 0, false), /*#__PURE__*/_jsxDEV("a", {
                href: `mailto:${EMAIL}`,
                className: "text-bordo-deep hover:text-bordo break-all",
                children: EMAIL
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "text-xs uppercase tracking-wider text-teal font-semibold mb-1",
                children: "Sediu"
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                className: "text-bordo-deep",
                children: ADDRESS
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "text-xs uppercase tracking-wider text-teal font-semibold mb-1",
                children: "Program"
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                className: "text-bordo-deep text-sm",
                children: "Luni-Vineri: 9:00 - 20:00"
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                className: "text-bordo-deep text-sm",
                children: "SÃ¢mbÄƒtÄƒ: 9:00 - 16:00"
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                className: "text-ink-muted text-sm",
                children: "DuminicÄƒ: Ã®nchis"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "aspect-[4/3] rounded-2xl overflow-hidden shadow-soft relative bg-cream-warm",
            children: /*#__PURE__*/_jsxDEV("iframe", {
              title: "Centrul de PregÄƒtire ConstanÈ›a",
              src: "https://www.google.com/maps?q=Strada+Soveja+90+Constanta&output=embed",
              className: "absolute inset-0 w-full h-full border-0",
              loading: "lazy",
              referrerPolicy: "no-referrer-when-downgrade"
            }, void 0, false)
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true);
}
function PrivacyPage() {
  return /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV(PageHero, {
      kicker: "Legal",
      title: "PoliticÄƒ de confidenÈ›ialitate",
      subtitle: "Cum tratÄƒm datele tale. Pe scurt È™i pe Ã®nÈ›eles."
    }, void 0, false), /*#__PURE__*/_jsxDEV("section", {
      className: "py-12 md:py-16 px-4 md:px-6 max-w-3xl mx-auto",
      children: [/*#__PURE__*/_jsxDEV(Breadcrumb, {
        items: [{
          label: 'AcasÄƒ',
          href: 'acasa'
        }, {
          label: 'ConfidenÈ›ialitate'
        }]
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "prose-article",
        children: [/*#__PURE__*/_jsxDEV("p", {
          children: [/*#__PURE__*/_jsxDEV("strong", {
            children: "Ultima actualizare:"
          }, void 0, false), " 11 mai 2026"]
        }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
          children: "Centrul de PregÄƒtire ConstanÈ›a (â€žnoi\") respectÄƒ confidenÈ›ialitatea datelor tale È™i se conformeazÄƒ Regulamentului General privind ProtecÈ›ia Datelor (GDPR, Regulamentul UE 2016/679) È™i legislaÈ›iei romÃ¢ne aplicabile."
        }, void 0, false), /*#__PURE__*/_jsxDEV("h2", {
          children: "1. Ce date colectÄƒm"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          children: "Atunci cÃ¢nd completezi formularul de contact sau ne scrii pe WhatsApp/email, colectÄƒm:"
        }, void 0, false), /*#__PURE__*/_jsxDEV("ul", {
          children: [/*#__PURE__*/_jsxDEV("li", {
            children: "Numele tÄƒu (sau al elevului)"
          }, void 0, false), /*#__PURE__*/_jsxDEV("li", {
            children: "Adresa de email"
          }, void 0, false), /*#__PURE__*/_jsxDEV("li", {
            children: "NumÄƒrul de telefon"
          }, void 0, false), /*#__PURE__*/_jsxDEV("li", {
            children: "InformaÈ›ii pe care alegi sÄƒ le incluzi Ã®n mesaj (clasa, materia, situaÈ›ia È™colarÄƒ)"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("h2", {
          children: "2. De ce le folosim"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          children: ["Folosim aceste date ", /*#__PURE__*/_jsxDEV("strong", {
            children: "exclusiv pentru"
          }, void 0, false), ":"]
        }, void 0, true), /*#__PURE__*/_jsxDEV("ul", {
          children: [/*#__PURE__*/_jsxDEV("li", {
            children: "A te contacta pentru programarea È™edinÈ›ei de cunoaÈ™tere"
          }, void 0, false), /*#__PURE__*/_jsxDEV("li", {
            children: "A te informa despre serviciile noastre la cererea ta"
          }, void 0, false), /*#__PURE__*/_jsxDEV("li", {
            children: "A pÄƒstra evidenÈ›a È™edinÈ›elor È™i a programÄƒrilor tale"
          }, void 0, false), /*#__PURE__*/_jsxDEV("li", {
            children: "A respecta obligaÈ›iile legale (facturare, contabilitate)"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
          children: "Nu trimitem newsletter, nu trimitem oferte nesolicitate, nu te abonÄƒm la nimic fÄƒrÄƒ sÄƒ-È›i cerem."
        }, void 0, false), /*#__PURE__*/_jsxDEV("h2", {
          children: "3. Cu cine partajÄƒm datele"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          children: "Nu vindem È™i nu partajÄƒm datele tale cu terÈ›i pentru scopuri de marketing. Datele pot fi accesate de:"
        }, void 0, false), /*#__PURE__*/_jsxDEV("ul", {
          children: [/*#__PURE__*/_jsxDEV("li", {
            children: "Echipa noastrÄƒ de profesori, strict pentru organizarea È™edinÈ›elor"
          }, void 0, false), /*#__PURE__*/_jsxDEV("li", {
            children: "Furnizorul de servicii email (Formspree), strict pentru transmiterea formularului"
          }, void 0, false), /*#__PURE__*/_jsxDEV("li", {
            children: "AutoritÄƒÈ›i fiscale, conform legii"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("h2", {
          children: "4. CÃ¢t timp pÄƒstrÄƒm datele"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          children: ["PÄƒstrÄƒm datele pentru perioada colaborÄƒrii È™i Ã®ncÄƒ ", /*#__PURE__*/_jsxDEV("strong", {
            children: "3 ani"
          }, void 0, false), " dupÄƒ ultima È™edinÈ›Äƒ, pentru obligaÈ›ii legale (contabile, fiscale). DupÄƒ, le È™tergem definitiv."]
        }, void 0, true), /*#__PURE__*/_jsxDEV("h2", {
          children: "5. Drepturile tale"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          children: "Conform GDPR, ai dreptul:"
        }, void 0, false), /*#__PURE__*/_jsxDEV("ul", {
          children: [/*#__PURE__*/_jsxDEV("li", {
            children: "SÄƒ afli ce date avem despre tine"
          }, void 0, false), /*#__PURE__*/_jsxDEV("li", {
            children: "SÄƒ ne ceri sÄƒ le corectÄƒm dacÄƒ sunt greÈ™ite"
          }, void 0, false), /*#__PURE__*/_jsxDEV("li", {
            children: "SÄƒ ne ceri sÄƒ le È™tergem (dacÄƒ nu existÄƒ obligaÈ›ie legalÄƒ de pÄƒstrare)"
          }, void 0, false), /*#__PURE__*/_jsxDEV("li", {
            children: "SÄƒ te opui prelucrÄƒrii lor"
          }, void 0, false), /*#__PURE__*/_jsxDEV("li", {
            children: "SÄƒ retragi consimÈ›ÄƒmÃ¢ntul oricÃ¢nd"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
          children: ["Pentru oricare dintre acestea, scrie-ne la ", /*#__PURE__*/_jsxDEV("a", {
            href: `mailto:${EMAIL}`,
            children: EMAIL
          }, void 0, false), ". RÄƒspundem Ã®n maxim 30 de zile."]
        }, void 0, true), /*#__PURE__*/_jsxDEV("h2", {
          children: "6. Datele elevilor minori"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          children: ["O parte dintre elevii noÈ™tri sunt minori. ÃŽn aceste cazuri, datele de contact (nume, telefon, email) sunt furnizate de ", /*#__PURE__*/_jsxDEV("strong", {
            children: "pÄƒrinte sau de tutorele legal"
          }, void 0, false), ", care Ã®È™i dÄƒ consimÈ›ÄƒmÃ¢ntul pentru prelucrarea lor. Nu colectÄƒm Ã®n mod intenÈ›ionat date de la copii fÄƒrÄƒ acordul unui adult responsabil. Despre elev pÄƒstrÄƒm doar informaÈ›iile strict necesare organizÄƒrii È™edinÈ›elor (clasÄƒ, materie, nivel). DacÄƒ eÈ™ti pÄƒrinte È™i vrei sÄƒ vezi, sÄƒ corectezi sau sÄƒ È™tergi datele copilului tÄƒu, scrie-ne la ", /*#__PURE__*/_jsxDEV("a", {
            href: `mailto:${EMAIL}`,
            children: EMAIL
          }, void 0, false), "."]
        }, void 0, true), /*#__PURE__*/_jsxDEV("h2", {
          children: "7. Cookies"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          children: "Site-ul nostru foloseÈ™te cookie-uri tehnice strict necesare pentru funcÈ›ionare (de exemplu, pentru a memora ce variantÄƒ de hero ai selectat, dacÄƒ deschizi panoul Tweaks). Nu folosim cookie-uri de tracking sau de publicitate."
        }, void 0, false), /*#__PURE__*/_jsxDEV("h2", {
          children: "8. Securitate"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          children: "Datele transmise prin formular sunt criptate (HTTPS). Le stocÄƒm Ã®n servicii cu standarde de securitate recunoscute (Formspree, Google Workspace). Cu toate astea, nu putem garanta 100% securitate, internetul nu permite asta. DacÄƒ afli de o problemÄƒ, anunÈ›Äƒ-ne È™i acÈ›ionÄƒm imediat."
        }, void 0, false), /*#__PURE__*/_jsxDEV("h2", {
          children: "9. Contact pentru Ã®ntrebÄƒri"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          children: ["Orice Ã®ntrebare despre datele tale: ", /*#__PURE__*/_jsxDEV("a", {
            href: `mailto:${EMAIL}`,
            children: EMAIL
          }, void 0, false), " sau la telefonul ", PHONE, "."]
        }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
          className: "text-sm text-ink-muted italic pt-6",
          children: "Acest document e cÃ¢t se poate de pe Ã®nÈ›eles. DacÄƒ ceva tot nu Ã®È›i e clar, scrie-ne, Ã®È›i explicÄƒm."
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true);
}
function TermsPage() {
  return /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV(PageHero, {
      kicker: "Legal",
      title: "Termeni È™i condiÈ›ii",
      subtitle: "Cum funcÈ›ioneazÄƒ colaborarea cu noi. Pe scurt È™i fÄƒrÄƒ surprize."
    }, void 0, false), /*#__PURE__*/_jsxDEV("section", {
      className: "py-12 md:py-16 px-4 md:px-6 max-w-3xl mx-auto",
      children: [/*#__PURE__*/_jsxDEV(Breadcrumb, {
        items: [{
          label: 'AcasÄƒ',
          href: 'acasa'
        }, {
          label: 'Termeni È™i condiÈ›ii'
        }]
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "prose-article",
        children: [/*#__PURE__*/_jsxDEV("p", {
          children: [/*#__PURE__*/_jsxDEV("strong", {
            children: "Ultima actualizare:"
          }, void 0, false), " 2 iunie 2026"]
        }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
          children: "AceÈ™ti termeni descriu condiÈ›iile Ã®n care Centrul de PregÄƒtire ConstanÈ›a (â€žnoi\") oferÄƒ servicii de meditaÈ›ii È™i pregÄƒtire È™colarÄƒ. Prin programarea unei È™edinÈ›e, eÈ™ti de acord cu cele de mai jos."
        }, void 0, false), /*#__PURE__*/_jsxDEV("h2", {
          children: "1. Serviciile noastre"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          children: "Oferim meditaÈ›ii È™i pregÄƒtire È™colarÄƒ la sediul din ConstanÈ›a, pentru diverse clase È™i materii: recuperare la materie, pregÄƒtire pentru Evaluarea NaÈ›ionalÄƒ È™i Bacalaureat. LucrÄƒm Ã®n grupe restrÃ¢nse de 2-3 elevi, cu materiale fizice È™i tablÄƒ."
        }, void 0, false), /*#__PURE__*/_jsxDEV("h2", {
          children: "2. È˜edinÈ›a de cunoaÈ™tere gratuitÄƒ"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          children: ["Prima È™edinÈ›Äƒ, Ã®mpreunÄƒ cu testul iniÈ›ial, este ", /*#__PURE__*/_jsxDEV("strong", {
            children: "gratuitÄƒ È™i fÄƒrÄƒ obligaÈ›ii"
          }, void 0, false), ". Scopul ei e sÄƒ evaluÄƒm nivelul real al elevului È™i sÄƒ stabilim Ã®mpreunÄƒ un plan. Nu te obligÄƒ sÄƒ continui colaborarea."]
        }, void 0, true), /*#__PURE__*/_jsxDEV("h2", {
          children: "3. Programare È™i prezenÈ›Äƒ"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          children: "È˜edinÈ›ele se programeazÄƒ din timp, de comun acord. Te rugÄƒm sÄƒ anunÈ›i din timp dacÄƒ nu poÈ›i ajunge, ca sÄƒ putem reorganiza grupa È™i sÄƒ oferim locul altui elev."
        }, void 0, false), /*#__PURE__*/_jsxDEV("h2", {
          children: "4. Plata"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          children: ["Tarifele sunt cele afiÈ™ate pe pagina ", /*#__PURE__*/_jsxDEV("a", {
            href: "#/preturi",
            children: "PreÈ›uri"
          }, void 0, false), " È™i se comunicÄƒ clar Ã®nainte de Ã®nceperea colaborÄƒrii. Plata se face conform Ã®nÈ›elegerii stabilite la prima È™edinÈ›Äƒ (pe È™edinÈ›Äƒ sau pe pachet). Eventualele modificÄƒri de tarif sunt anunÈ›ate din timp È™i nu afecteazÄƒ È™edinÈ›ele deja plÄƒtite."]
        }, void 0, true), /*#__PURE__*/_jsxDEV("h2", {
          children: "5. Anulare È™i reprogramare"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          children: ["PoÈ›i anula sau reprograma o È™edinÈ›Äƒ anunÈ›Ã¢ndu-ne cu cel puÈ›in ", /*#__PURE__*/_jsxDEV("strong", {
            children: "24 de ore Ã®nainte"
          }, void 0, false), ", telefonic sau pe WhatsApp. È˜edinÈ›ele anunÈ›ate Ã®n timp util se reprogrameazÄƒ fÄƒrÄƒ costuri."]
        }, void 0, true), /*#__PURE__*/_jsxDEV("h2", {
          children: "6. ResponsabilitÄƒÈ›ile noastre"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          children: "Ne angajÄƒm sÄƒ oferim pregÄƒtire de calitate, cu profesori dedicaÈ›i È™i un mediu de Ã®nvÄƒÈ›are potrivit. Rezultatele È™colare depind Ã®nsÄƒ de mai mulÈ›i factori (implicarea elevului, timpul de studiu acasÄƒ), aÈ™a cÄƒ nu putem garanta o anumitÄƒ notÄƒ sau un anumit rezultat la examen."
        }, void 0, false), /*#__PURE__*/_jsxDEV("h2", {
          children: "7. ResponsabilitÄƒÈ›ile tale"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          children: "Pentru rezultate bune, conteazÄƒ prezenÈ›a constantÄƒ, efectuarea temelor recomandate È™i comunicarea deschisÄƒ cu profesorul. Pentru elevii minori, pÄƒrintele sau tutorele susÈ›ine colaborarea È™i ne anunÈ›Äƒ orice schimbare relevantÄƒ."
        }, void 0, false), /*#__PURE__*/_jsxDEV("h2", {
          children: "8. Modificarea termenilor"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          children: "Putem actualiza aceÈ™ti termeni din cÃ¢nd Ã®n cÃ¢nd. Versiunea valabilÄƒ e cea publicatÄƒ pe aceastÄƒ paginÄƒ, cu data ultimei actualizÄƒri de mai sus."
        }, void 0, false), /*#__PURE__*/_jsxDEV("h2", {
          children: "9. Contact"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          children: ["Pentru orice Ã®ntrebare legatÄƒ de aceÈ™ti termeni: ", /*#__PURE__*/_jsxDEV("a", {
            href: `mailto:${EMAIL}`,
            children: EMAIL
          }, void 0, false), " sau ", PHONE, "."]
        }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
          className: "text-sm text-ink-muted italic pt-6",
          children: "Vrem o colaborare clarÄƒ È™i corectÄƒ. DacÄƒ ceva nu Ã®È›i e limpede, Ã®ntreabÄƒ-ne oricÃ¢nd."
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true);
}
Object.assign(window, {
  ContactPage,
  PrivacyPage,
  TermsPage,
  ContactForm
});

import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
// App shell: router, Tweaks integration.

const SEO = {
  acasa: {
    t: 'MeditaÈ›ii ConstanÈ›a â€” Evaluare NaÈ›ionalÄƒ & Bacalaureat | Centrul de PregÄƒtire',
    d: 'MeditaÈ›ii Ã®n ConstanÈ›a pentru orice clasÄƒ È™i materie. PregÄƒtire pentru Evaluarea NaÈ›ionalÄƒ, Bacalaureat È™i recuperare la materie, la sediu Ã®n ConstanÈ›a. Prima È™edinÈ›Äƒ e gratuitÄƒ.'
  },
  despre: {
    t: 'Despre noi â€” Cum lucrÄƒm | Centrul de PregÄƒtire ConstanÈ›a',
    d: 'Pornim de la nivelul tÄƒu real È™i construim pas cu pas. LucrÄƒm Ã®n grupe mici de 2-3 elevi, la sediul din ConstanÈ›a, cu plan personalizat pentru fiecare elev.'
  },
  preturi: {
    t: 'PreÈ›uri meditaÈ›ii ConstanÈ›a | Centrul de PregÄƒtire',
    d: 'Vezi preÈ›urile pentru meditaÈ›ii Ã®n grupe mici de 2-3 elevi. Prima È™edinÈ›Äƒ de cunoaÈ™tere È™i testul iniÈ›ial sunt gratuite.'
  },
  testimoniale: {
    t: 'Testimoniale â€” Ce spun elevii È™i pÄƒrinÈ›ii | Centrul de PregÄƒtire ConstanÈ›a',
    d: 'Rezultate reale È™i experienÈ›e ale elevilor È™i pÄƒrinÈ›ilor care au lucrat cu noi la pregÄƒtirea pentru Evaluarea NaÈ›ionalÄƒ È™i Bacalaureat.'
  },
  blog: {
    t: 'Blog â€” Sfaturi pentru elevi È™i pÄƒrinÈ›i | Centrul de PregÄƒtire ConstanÈ›a',
    d: 'Articole practice despre pregÄƒtirea pentru examene, metode de Ã®nvÄƒÈ›are È™i sprijinul pÄƒrinÈ›ilor Ã®n parcursul È™colar.'
  },
  contact: {
    t: 'Contact â€” ProgrameazÄƒ o È™edinÈ›Äƒ gratuitÄƒ | Centrul de PregÄƒtire ConstanÈ›a',
    d: 'Scrie-ne pe WhatsApp sau completeazÄƒ formularul. Sediu: Strada Soveja nr. 90, ConstanÈ›a. RÄƒspundem Ã®n maxim 24 de ore.'
  },
  confidentialitate: {
    t: 'Politica de confidenÈ›ialitate | Centrul de PregÄƒtire ConstanÈ›a',
    d: 'Cum colectÄƒm È™i folosim datele tale, exclusiv pentru a te contacta È™i a-È›i oferi serviciile noastre de meditaÈ›ii.'
  },
  termeni: {
    t: 'Termeni È™i condiÈ›ii | Centrul de PregÄƒtire ConstanÈ›a',
    d: 'CondiÈ›iile de colaborare: È™edinÈ›a gratuitÄƒ, programare, platÄƒ, anulare È™i reprogramare.'
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
  set('link[rel="canonical"]', 'href', 'https://centruldepregatire.ro/#/' + (main || 'acasa'));
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
      page = /*#__PURE__*/_jsxDEV(HomePage, {
        heroVariant: tweaks.hero
      }, void 0, false);
      break;
    case 'despre':
      page = /*#__PURE__*/_jsxDEV(AboutPage, {}, void 0, false);
      break;
    case 'preturi':
      page = /*#__PURE__*/_jsxDEV(PricesPage, {}, void 0, false);
      break;
    case 'testimoniale':
      page = /*#__PURE__*/_jsxDEV(TestimonialsPage, {}, void 0, false);
      break;
    case 'blog':
      nav('acasa');
      page = /*#__PURE__*/_jsxDEV(HomePage, {
        heroVariant: tweaks.hero
      }, void 0, false);
      break;
    case 'contact':
      page = /*#__PURE__*/_jsxDEV(ContactPage, {}, void 0, false);
      break;
    case 'confidentialitate':
      page = /*#__PURE__*/_jsxDEV(PrivacyPage, {}, void 0, false);
      break;
    case 'termeni':
      page = /*#__PURE__*/_jsxDEV(TermsPage, {}, void 0, false);
      break;
    default:
      page = /*#__PURE__*/_jsxDEV(NotFound, {}, void 0, false);
  }
  return /*#__PURE__*/_jsxDEV("div", {
    className: "relative",
    children: [/*#__PURE__*/_jsxDEV(Header, {
      route: route
    }, void 0, false), /*#__PURE__*/_jsxDEV("main", {
      className: "animate-fade-in",
      children: page
    }, route, false), /*#__PURE__*/_jsxDEV(Footer, {}, void 0, false), /*#__PURE__*/_jsxDEV(WhatsAppFloat, {}, void 0, false), /*#__PURE__*/_jsxDEV(CookieBanner, {}, void 0, false), /*#__PURE__*/_jsxDEV(TweaksPanel, {
      visible: tweaksOpen,
      onClose: closeTweaks,
      tweaks: tweaks,
      setTweak: setTweak
    }, void 0, false)]
  }, void 0, true);
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/_jsxDEV(App, {}, void 0, false));

