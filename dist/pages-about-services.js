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