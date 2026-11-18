// Prices + Testimonials pages.

function SubjectCardGrid({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
  }, items.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
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
  }, s.tagline)))));
}
function SubjectsGroupHeading({
  title,
  subtitle
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mb-8"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "serif-h text-3xl md:text-4xl text-bordo-deep mb-2"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "text-ink-muted max-w-2xl leading-relaxed"
  }, subtitle));
}
function SubjectsPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    kicker: "Materii",
    title: "Pe ce materii lucrăm",
    subtitle: "De la primele litere până la Bacalaureat, în grupe mici de 2-3 elevi. Aceleași prețuri pentru toate materiile."
  }), /*#__PURE__*/React.createElement("section", {
    className: "py-12 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Acasă',
      href: 'acasa'
    }, {
      label: 'Materii'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "mt-10"
  }, /*#__PURE__*/React.createElement(SubjectsGroupHeading, {
    title: "Gimnaziu și liceu",
    subtitle: "Pregătire pentru Evaluarea Națională și Bacalaureat, precum și recuperarea capitolelor rămase în urmă."
  }), /*#__PURE__*/React.createElement(SubjectCardGrid, {
    items: window.SUBJECTS
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-24"
  }, /*#__PURE__*/React.createElement(SubjectsGroupHeading, {
    title: "Clasele primare",
    subtitle: "Punem bazele bine de la început: citit, scris și socotit, în ritmul copilului."
  }), /*#__PURE__*/React.createElement(SubjectCardGrid, {
    items: window.PRIMARY_SUBJECTS
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-center mt-14 mb-6"
  }, /*#__PURE__*/React.createElement(Button, {
    href: "contact",
    variant: "primary",
    size: "md"
  }, "Programează ședința gratuită"))));
}
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
  SubjectsPage,
  PricesPage,
  TestimonialsPage
});
