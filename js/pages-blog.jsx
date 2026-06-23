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
    if (tk.startsWith('**')) parts.push(<strong key={key++}>{tk.slice(2, -2)}</strong>);
    else if (tk.startsWith('`')) parts.push(<code key={key++} className="font-mono text-sm bg-cream-warm px-1.5 py-0.5 rounded text-bordo-deep">{tk.slice(1, -1)}</code>);
    else parts.push(<em key={key++}>{tk.slice(1, -1)}</em>);
    last = m.index + tk.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function MarkdownBody({ source }) {
  const blocks = [];
  const lines = source.split('\n');
  let i = 0;
  let key = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    if (line.startsWith('### ')) { blocks.push(<h3 key={key++}>{renderInline(line.slice(4))}</h3>); i++; continue; }
    if (line.startsWith('## '))  { blocks.push(<h2 key={key++}>{renderInline(line.slice(3))}</h2>); i++; continue; }
    if (line.startsWith('> ')) {
      let q = [line.slice(2)];
      i++;
      while (i < lines.length && lines[i].startsWith('> ')) { q.push(lines[i].slice(2)); i++; }
      blocks.push(<blockquote key={key++}>{renderInline(q.join(' '))}</blockquote>);
      continue;
    }
    if (/^-\s/.test(line) || /^\*\s/.test(line)) {
      const items = [];
      while (i < lines.length && (/^-\s/.test(lines[i]) || /^\*\s/.test(lines[i]))) {
        items.push(lines[i].replace(/^[-*]\s/, ''));
        i++;
      }
      blocks.push(<ul key={key++}>{items.map((it, j) => <li key={j}>{renderInline(it)}</li>)}</ul>);
      continue;
    }
    if (/^\d+\.\s/.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ''));
        i++;
      }
      blocks.push(<ol key={key++} className="list-decimal pl-6 my-4 space-y-1">{items.map((it, j) => <li key={j} className="leading-relaxed pl-2">{renderInline(it)}</li>)}</ol>);
      continue;
    }
    let p = [line];
    i++;
    while (i < lines.length && lines[i].trim() && !/^[#>\-*]|\d+\./.test(lines[i].trim())) {
      p.push(lines[i]);
      i++;
    }
    blocks.push(<p key={key++}>{renderInline(p.join(' '))}</p>);
  }
  return <div className="prose-article">{blocks}</div>;
}

function formatDate(s) {
  const months = ['ianuarie','februarie','martie','aprilie','mai','iunie','iulie','august','septembrie','octombrie','noiembrie','decembrie'];
  const [y, m, d] = s.split('-').map(Number);
  return `${d} ${months[m - 1]} ${y}`;
}

function BlogHubPage() {
  const [filter, setFilter] = useState('toate');
  const categories = ['toate', ...Array.from(new Set(window.BLOG.map(b => b.category)))];
  const list = filter === 'toate' ? window.BLOG : window.BLOG.filter(b => b.category === filter);
  const [featured, ...rest] = list;

  return (
    <>
      <PageHero kicker="Blog" title="Articole de la profesori, pentru elevi și părinți" subtitle="Sfaturi, ghiduri și răspunsuri reale la întrebări reale. Fără SEO sclifosit, fără clișee." />
      <section className="py-12 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto">
        <Breadcrumb items={[{label:'Acasă', href:'acasa'}, {label:'Blog'}]} />

        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map(c => (
            <button key={c} onClick={() => setFilter(c)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all capitalize ${filter === c ? 'bg-bordo text-cream' : 'bg-white text-ink-muted border border-cream-deep hover:border-bordo'}`}>
              {c}
            </button>
          ))}
        </div>

        {featured && (
          <Reveal>
            <a href={'#/blog/' + featured.slug} className="group block mb-10">
              <div className="grid lg:grid-cols-5 gap-6 lg:gap-10 bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all">
                <div className="lg:col-span-2 aspect-video lg:aspect-auto relative">
                  <image-slot id={'blog-cover-' + featured.slug} placeholder={'cover ' + featured.slug} style={{ width:'100%', height:'100%', minHeight:'200px' }}></image-slot>
                </div>
                <div className="lg:col-span-3 p-7 md:p-10 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3 text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-rose/30 text-bordo-deep font-semibold uppercase tracking-wider">{featured.category}</span>
                    <span className="text-ink-muted">{formatDate(featured.date)}</span>
                  </div>
                  <h2 className="serif-h text-3xl md:text-4xl text-bordo-deep mb-3 group-hover:text-bordo transition-colors">{featured.title}</h2>
                  <p className="text-ink-muted leading-relaxed mb-5">{featured.excerpt}</p>
                  <div className="text-sm font-medium text-bordo">Citește articolul →</div>
                </div>
              </div>
            </a>
          </Reveal>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((b, i) => (
            <Reveal key={b.slug} delay={i * 80}>
              <a href={'#/blog/' + b.slug} className="group block h-full">
                <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all h-full flex flex-col">
                  <div className="aspect-[4/3] relative">
                    <image-slot id={'blog-cover-' + b.slug} placeholder={'cover ' + b.slug} style={{ width:'100%', height:'100%' }}></image-slot>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3 text-xs">
                      <span className="px-2 py-0.5 rounded-full bg-cream-warm text-bordo-deep font-medium">{b.category}</span>
                      <span className="text-ink-muted">{formatDate(b.date)}</span>
                    </div>
                    <h3 className="serif-h text-xl text-bordo-deep mb-2 group-hover:text-bordo transition-colors leading-tight">{b.title}</h3>
                    <p className="text-sm text-ink-muted leading-relaxed flex-1">{b.excerpt}</p>
                    <div className="text-sm font-medium text-bordo mt-4">Citește →</div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

function BlogArticlePage({ slug }) {
  const article = window.BLOG.find(b => b.slug === slug);
  const [copied, setCopied] = useState(false);
  if (!article) return <NotFound />;
  const url = window.location.origin + window.location.pathname + '#/blog/' + article.slug;
  const related = window.BLOG.filter(b => b.slug !== article.slug).slice(0, 3);

  return (
    <>
      <section className="bg-cream-warm relative overflow-hidden">
        <div className="absolute inset-0 opacity-25 hatched"></div>
        <div className="relative max-w-3xl mx-auto px-4 md:px-6 pt-12 pb-8 md:pt-16">
          <Breadcrumb items={[{label:'Acasă', href:'acasa'}, {label:'Blog', href:'blog'}, {label:article.title}]} />
          <div className="flex items-center gap-3 mb-4 text-xs">
            <span className="px-2.5 py-1 rounded-full bg-rose/30 text-bordo-deep font-semibold uppercase tracking-wider">{article.category}</span>
            <span className="text-ink-muted">{formatDate(article.date)}</span>
            <span className="text-ink-muted">· {article.author}</span>
          </div>
          <h1 className="serif-h text-4xl md:text-5xl lg:text-6xl text-bordo-deep leading-[1.05] mb-5">{article.title}</h1>
          <p className="text-lg text-ink-muted leading-relaxed">{article.excerpt}</p>
        </div>
      </section>

      <section className="py-10 md:py-14 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="aspect-video rounded-2xl overflow-hidden bg-white shadow-soft mb-10 relative">
            <image-slot id={'blog-hero-' + article.slug} placeholder={'imagine articol ' + article.slug} style={{ width:'100%', height:'100%' }}></image-slot>
          </div>

          <MarkdownBody source={article.body} />

          <div className="mt-14 pt-8 border-t border-cream-deep">
            <div className="text-xs uppercase tracking-wider text-ink-muted font-semibold mb-3">Distribuie articolul</div>
            <div className="flex flex-wrap gap-3">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-soft hover:shadow-card text-sm font-medium text-bordo-deep">
                <span>Facebook</span>
              </a>
              <a href={`https://wa.me/?text=${encodeURIComponent(article.title + ', ' + url)}`} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-soft hover:shadow-card text-sm font-medium text-bordo-deep">
                <span>WhatsApp</span>
              </a>
              <button onClick={() => { navigator.clipboard?.writeText(url); setCopied(true); setTimeout(()=>setCopied(false), 1800); }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-soft hover:shadow-card text-sm font-medium text-bordo-deep">
                <span>{copied ? 'Copiat ✓' : 'Copiază link'}</span>
              </button>
            </div>
          </div>

          <div className="mt-10 bg-cream-warm/50 rounded-2xl p-6 flex items-center gap-4">
            <span className="w-14 h-14 rounded-full bg-rose/30 flex items-center justify-center serif-h text-2xl text-bordo-deep flex-shrink-0">
              {article.author.split(' ').map(p => p[0]).join('')}
            </span>
            <div>
              <div className="font-semibold text-bordo-deep">{article.author}</div>
              <div className="text-sm text-ink-muted">Profesor la Centru de pregătire Constanța</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6 lg:px-10 bg-cream-warm/40">
        <div className="max-w-6xl mx-auto">
          <h3 className="serif-h text-3xl text-bordo-deep mb-8 text-center">Mai citește</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {related.map(b => (
              <a key={b.slug} href={'#/blog/' + b.slug} className="block bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all">
                <div className="text-xs text-bordo-deep font-semibold uppercase tracking-wider mb-2">{b.category}</div>
                <h4 className="serif-h text-xl text-bordo-deep mb-2 leading-tight">{b.title}</h4>
                <p className="text-sm text-ink-muted leading-relaxed line-clamp-3">{b.excerpt}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { BlogHubPage, BlogArticlePage, formatDate });
