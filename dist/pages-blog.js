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
  }, "Profesor la Centrul de Pregătire Constanța"))))), /*#__PURE__*/React.createElement("section", {
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
