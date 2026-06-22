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
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mt-12 max-w-4xl mx-auto bg-white rounded-2xl p-7 md:p-9 shadow-soft border-l-4 border-teal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-wider text-teal font-semibold mb-3"
  }, "Mențiune importantă"), /*#__PURE__*/React.createElement("h3", {
    className: "serif-h text-2xl md:text-3xl text-bordo-deep mb-3"
  }, "Nu suntem obligați să facem abonament."), /*#__PURE__*/React.createElement("p", {
    className: "text-[16px] leading-relaxed text-ink"
  }, "Poți veni pentru ", /*#__PURE__*/React.createElement("strong", null, "1 ședință"), ", pentru ", /*#__PURE__*/React.createElement("strong", null, "3 ședințe"), ", sau pentru ", /*#__PURE__*/React.createElement("strong", null, "tot anul"), ". ", /*#__PURE__*/React.createElement("span", {
    className: "text-bordo-deep font-semibold"
  }, "Tu decizi."), " Fără minim, fără penalități, fără „pachete\" inflexibile. Plătești pe ce faci, atât."))));
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
