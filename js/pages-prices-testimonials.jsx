// Prices + Testimonials pages.

function SubjectCardGrid({ items }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((s, i) => (
        <Reveal key={s.slug} delay={i * 60}>
          <div className="bg-white rounded-2xl shadow-card p-6 md:p-7 h-full border border-transparent flex flex-col">
            <div className="flex items-start mb-4">
              <span className="w-12 h-12 rounded-xl bg-cream-warm flex items-center justify-center text-2xl">{s.icon}</span>
            </div>
            <h3 className="serif-h text-2xl text-bordo-deep mb-2">{s.name}</h3>
            <p className="text-sm text-ink-muted leading-relaxed flex-1">{s.tagline}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function SubjectsGroupHeading({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h2 className="serif-h text-3xl md:text-4xl text-bordo-deep mb-2">{title}</h2>
      <p className="text-ink-muted max-w-2xl leading-relaxed">{subtitle}</p>
    </div>
  );
}

function SubjectsPage() {
  return (
    <>
      <PageHero kicker="Materii" title="Pe ce materii lucrăm" subtitle="De la primele litere până la Bacalaureat, în grupe mici de 2-3 elevi. Aceleași prețuri pentru toate materiile." />
      <section className="py-12 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto">
        <Breadcrumb items={[{label:'Acasă', href:'acasa'}, {label:'Materii'}]} />
        <div className="mt-10">
          <SubjectsGroupHeading title="Gimnaziu și liceu" subtitle="Pregătire pentru Evaluarea Națională și Bacalaureat, plus recuperare pe capitolele rămase în urmă." />
          <SubjectCardGrid items={window.SUBJECTS} />
        </div>
        <div className="mt-24">
          <SubjectsGroupHeading title="Clasele primare" subtitle="Punem bazele bine de la început: citit, scris și socotit, în ritmul copilului." />
          <SubjectCardGrid items={window.PRIMARY_SUBJECTS} />
        </div>
        <div className="text-center mt-14 mb-6">
          <Button href="contact" variant="primary" size="md">Programează ședința gratuită</Button>
        </div>
      </section>
    </>
  );
}

function PricesPage() {
  return (
    <>
      <PageHero kicker="Prețuri" title="Transparent. Fără surprize." subtitle="Trei opțiuni. Aceleași prețuri pentru toate materiile, indiferent de format. Tu alegi cum vrei să mergem împreună." />
      <section className="py-12 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto">
        <Breadcrumb items={[{label:'Acasă', href:'acasa'}, {label:'Prețuri'}]} />
        <div className="grid md:grid-cols-3 gap-6 md:gap-5 mt-10">
          {window.PRICES.map(p => <PriceCard key={p.id} p={p} />)}
        </div>

      </section>
    </>
  );
}

function TestimonialsPage() {
  const [filter, setFilter] = useState('toate');
  const filters = [
    { id: 'toate', label: 'Toate' },
    { id: 'elevi', label: 'De la elevi', match: t => t.role.toLowerCase().includes('elev') },
    { id: 'parinti', label: 'De la părinți', match: t => t.role.toLowerCase().includes('părinte') },
    { id: 'recuperare', label: 'Recuperare', match: t => t.subject.toLowerCase().includes('recuperare') },
  ];
  const fObj = filters.find(f => f.id === filter);
  const list = filter === 'toate' ? window.TESTIMONIALS : window.TESTIMONIALS.filter(fObj.match);

  return (
    <>
      <PageHero kicker="Ce spun oamenii" title="Cuvinte de la oameni reali" subtitle="Le-am întrebat, ne-au răspuns. Nu am stilizat, nu am cosmetizat, vorbesc așa cum vorbesc oamenii." />
      <section className="py-12 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto">
        <Breadcrumb items={[{label:'Acasă', href:'acasa'}, {label:'Testimoniale'}]} />

        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {filters.map(f => (
            <button key={f.id} onClick={() => setFilter(f.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === f.id ? 'bg-bordo text-cream' : 'bg-white text-ink-muted border border-cream-deep hover:border-bordo'}`}>
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((t, i) => (
            <Reveal key={t.id} delay={(i % 6) * 60}><TestimonialCard t={t} /></Reveal>
          ))}
        </div>

      </section>
    </>
  );
}

Object.assign(window, { SubjectsPage, PricesPage, TestimonialsPage });
