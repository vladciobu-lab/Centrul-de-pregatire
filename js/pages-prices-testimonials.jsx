// Prices + Testimonials pages.

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

Object.assign(window, { PricesPage, TestimonialsPage });
