// Shared components: Header, Footer, WhatsApp, Button, Card, SectionTitle, etc.
const { useState, useEffect, useRef, useMemo } = React;

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
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return [route, (r) => { window.location.hash = '#/' + r; }];
}

function nav(href) {
  window.location.hash = '#/' + href;
}

// ---------- Reveal on scroll ----------
function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => el.classList.add('in'), delay); io.disconnect(); } },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return <div ref={ref} className={'reveal ' + className}>{children}</div>;
}

// ---------- Buttons ----------
function Button({ children, variant = 'primary', size = 'md', href, onClick, className = '', icon, ...rest }) {
  const base = 'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 whitespace-nowrap';
  const sizes = { sm: 'px-4 py-2 text-sm', md: 'px-5 py-2.5 text-[15px]', lg: 'px-7 py-3.5 text-base' };
  const variants = {
    primary: 'bg-bordo text-cream hover:bg-bordo-deep shadow-soft hover:shadow-card-hover',
    secondary: 'bg-teal text-white hover:bg-teal-deep shadow-soft',
    outline: 'border border-bordo/30 text-bordo hover:bg-bordo hover:text-cream',
    ghost: 'text-bordo hover:bg-bordo/5',
    cream: 'bg-cream-warm text-bordo border border-cream-deep hover:bg-cream-deep',
    whatsapp: 'bg-[#075E54] text-white hover:bg-[#054c44] shadow-soft',
  };
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const content = <>{icon}<span>{children}</span></>;
  if (href) return <a href={href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('#/') ? href : '#/' + href} onClick={onClick} className={cls} {...rest}>{content}</a>;
  return <button onClick={onClick} className={cls} {...rest}>{content}</button>;
}

// ---------- Section Title ----------
function SectionTitle({ kicker, title, subtitle, align = 'center', dark = false }) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} mb-12 md:mb-16`}>
      {kicker && <div className={`flourish mb-4 text-xs uppercase tracking-[0.25em] font-medium ${dark ? 'text-rose' : ''}`}>{kicker}</div>}
      <h2 className={`serif-h text-4xl md:text-5xl lg:text-[3.25rem] mb-4 ${dark ? 'text-cream' : 'text-bordo-deep'}`}>{title}</h2>
      {subtitle && <p className={`text-lg md:text-xl leading-relaxed ${dark ? 'text-cream/80' : 'text-ink-muted'}`}>{subtitle}</p>}
    </div>
  );
}

// ---------- Card ----------
function Card({ children, className = '', hover = true, padded = true }) {
  return (
    <div className={`bg-white rounded-2xl shadow-card ${hover ? 'hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300' : ''} ${padded ? 'p-6 md:p-8' : ''} ${className}`}>
      {children}
    </div>
  );
}

// ---------- Logo ----------
function Logo({ size = 'md', linked = true }) {
  const sizes = { sm: 'h-11 w-11', md: 'h-12 w-12', lg: 'h-20 w-20', xl: 'h-40 w-40' };
  const txt = { sm: 'text-base', md: 'text-lg', lg: 'text-3xl', xl: 'text-5xl' };
  const sub = { sm: 'text-[8px]', md: 'text-[9px]', lg: 'text-xs', xl: 'text-sm' };
  const inner = (
    <span className="flex items-center gap-2.5">
      <span className={`${sizes[size]} relative flex-shrink-0 block`}>
        <img src="assets/logo-emblem.webp" alt="Centru de pregătire Constanța" className="absolute inset-0 w-full h-full object-contain" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`serif-h ${txt[size]} text-bordo-deep leading-[1.05] whitespace-nowrap`}>Centru de pregătire</span>
        <span className={`${sub[size]} uppercase tracking-[0.3em] text-teal-deep font-semibold mt-1`}>Constanța</span>
      </span>
    </span>
  );
  return linked ? <a href="#/acasa" className="flex items-center">{inner}</a> : inner;
}

// ---------- Header ----------
function Header({ route }) {
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(null); setMobileOpen(false); }, [route]);

  const NavLink = ({ to, children, active }) => (
    <a href={'#/' + to} className={`nav-link text-[17px] font-semibold ${active ? 'text-bordo active' : 'text-ink hover:text-bordo'} transition-colors`}>{children}</a>
  );

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-cream/95 backdrop-blur shadow-sm' : 'bg-cream/80 backdrop-blur'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
        <div className="flex items-center justify-between h-[72px]">
          <Logo size="md" />

          <nav className="hidden lg:flex items-center gap-8">
            <NavLink to="acasa" active={route === 'acasa' || route === ''}>Acasă</NavLink>
            <NavLink to="despre" active={route === 'despre'}>Despre</NavLink>
            <NavLink to="preturi" active={route === 'preturi'}>Prețuri</NavLink>
            <NavLink to="contact" active={route === 'contact'}>Contact</NavLink>
          </nav>

          <div className="hidden lg:flex items-center">
            <Button href="contact" variant="primary" size="md">Ședință gratuită</Button>
          </div>

          <button className="lg:hidden p-2 -mr-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Meniu">
            <div className="w-6 h-5 relative">
              <span className={`absolute h-0.5 w-full bg-bordo top-0 transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`absolute h-0.5 w-full bg-bordo top-1/2 -translate-y-1/2 transition-opacity ${mobileOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute h-0.5 w-full bg-bordo bottom-0 transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${mobileOpen ? 'max-h-[calc(100vh-72px)] border-t border-cream-deep' : 'max-h-0'}`}>
        <nav className="px-4 py-4 space-y-1 bg-cream/95 overflow-y-auto max-h-[calc(100vh-72px)]">
          {[{ to: 'acasa', label: 'Acasă' }, { to: 'despre', label: 'Despre' }].map(l => (
            <a key={l.to} href={'#/' + l.to} className="block px-3 py-3 rounded-lg hover:bg-white text-[15px] font-medium text-ink">{l.label}</a>
          ))}
          <a href="#/preturi" className="block px-3 py-3 rounded-lg hover:bg-white text-[15px] font-medium text-ink">Prețuri</a>
          <a href="#/testimoniale" className="block px-3 py-3 rounded-lg hover:bg-white text-[15px] font-medium text-ink">Testimoniale</a>
          <a href="#/contact" className="block px-3 py-3 rounded-lg hover:bg-white text-[15px] font-medium text-ink">Contact</a>
          <div className="pt-3">
            <Button href="contact" variant="primary" size="md" className="w-full">Ședință gratuită</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

// ---------- WhatsApp Floating Button ----------
function WhatsAppFloat() {
  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    const onScroll = () => { if (window.scrollY > 200) { setPulse(true); window.removeEventListener('scroll', onScroll); } };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener" aria-label="Scrie-ne pe WhatsApp"
       className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 group">
      <span className="relative flex">
        {pulse && <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-pulse-ring"></span>}
        <span className="relative w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-card-hover hover:scale-105 transition-transform">
          <svg viewBox="0 0 32 32" className="w-7 h-7 md:w-8 md:h-8 fill-white">
            <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 01-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 01-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.846 2.722.846.93 0 2.96-.83 2.96-2.05.057-.314.057-.643 0-.787-.13-.32-.99-.483-1.245-.572z"/>
            <path d="M16.026 0C7.21 0 0 7.21 0 16.026c0 2.83.755 5.605 2.18 8.026L0 32l8.247-2.155a16 16 0 007.78 1.987c8.815 0 16.026-7.21 16.026-16.026S24.84 0 16.026 0zm0 28.948c-2.49 0-4.93-.673-7.05-1.95l-.502-.302-5.218 1.366L4.65 23l-.33-.518a13.34 13.34 0 01-2.05-7.062c0-7.39 6.026-13.415 13.443-13.415 7.39 0 13.415 6.026 13.415 13.415 0 7.418-6.025 13.444-13.415 13.444z"/>
          </svg>
        </span>
      </span>
    </a>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="relative mt-24 bg-bordo-deep text-cream/90">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-14 h-14 flex-shrink-0 rounded-xl overflow-hidden">
                <img src="assets/logo-emblem.webp" alt="" className="w-full h-full object-contain" />
              </span>
              <div>
                <div className="serif-h text-cream text-lg">Centru de pregătire</div>
                <div className="text-rose text-[10px] uppercase tracking-[0.3em]">Constanța</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-cream/70">
              Meditații care pleacă de unde ești tu. Pentru orice clasă, orice materie, orice nivel. La sediul nostru din Constanța.
            </p>
          </div>

          <div>
            <h3 className="text-cream font-semibold text-sm uppercase tracking-wider mb-4">Navigare</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#/acasa" className="hover:text-rose">Acasă</a></li>
              <li><a href="#/despre" className="hover:text-rose">Despre noi</a></li>
              <li><a href="#/preturi" className="hover:text-rose">Prețuri</a></li>
              <li><a href="#/testimoniale" className="hover:text-rose">Testimoniale</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-cream font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+40721628936" className="hover:text-rose">{PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="hover:text-rose">{EMAIL}</a></li>
              <li className="text-cream/70">{ADDRESS}</li>
              <li className="text-cream/70 pt-2">Luni-Vineri, 9:00 - 20:00<br/>Sâmbătă, 9:00 - 16:00</li>
            </ul>
          </div>

          <div>
            <h4 className="text-cream font-semibold text-sm uppercase tracking-wider mb-4">Urmărește-ne</h4>
            <div className="flex gap-3 mb-6">
              {[
                { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61587062261629' },
                { name: 'Instagram', href: 'https://www.instagram.com/constantameditatii?igsh=MXM1a2I4cjJiMDhqcQ==' },
                { name: 'TikTok', href: 'https://www.tiktok.com/@pregatirebac' },
              ].map(s => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener" className="w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center text-cream/80 hover:text-cream transition-colors text-xs font-medium">
                  {s.name[0]}
                </a>
              ))}
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-sm text-cream hover:text-rose">
              <span className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-4 h-4 fill-white"><path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 01-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 01-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.846 2.722.846.93 0 2.96-.83 2.96-2.05.057-.314.057-.643 0-.787-.13-.32-.99-.483-1.245-.572zM16.026 0C7.21 0 0 7.21 0 16.026c0 2.83.755 5.605 2.18 8.026L0 32l8.247-2.155a16 16 0 007.78 1.987c8.815 0 16.026-7.21 16.026-16.026S24.84 0 16.026 0z"/></svg>
              </span>
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-cream/15 mt-12 pt-6 flex flex-col gap-4 text-xs text-cream/60">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div>© 2026 Centru de pregătire Constanța. Toate drepturile rezervate.</div>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a href="#/confidentialitate" className="hover:text-rose">Politică de confidențialitate</a>
              <a href="#/termeni" className="hover:text-rose">Termeni și condiții</a>
              <a href="#/contact" className="hover:text-rose">Contact</a>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1 border-t border-cream/10 text-cream/80">
            <span>Soluționarea litigiilor:</span>
            <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener" className="hover:text-rose underline">ANPC — SAL</a>
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener" className="hover:text-rose underline">Platforma SOL (UE)</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ---------- Subject Card (compact) ----------
function SubjectCard({ s, dense = false }) {
  return (
    <a href={'#/materii/' + s.slug} className="group block">
      <div className={`bg-white rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 p-6 md:p-7 h-full border border-transparent hover:border-rose/40 flex flex-col`}>
        <div className="flex items-start mb-4">
          <span className="w-12 h-12 rounded-xl bg-cream-warm group-hover:bg-rose/30 flex items-center justify-center text-2xl text-teal-deep transition-colors">{s.icon}</span>
        </div>
        <h3 className="serif-h text-2xl text-bordo-deep mb-2">{s.name}</h3>
        {!dense && <p className="text-sm text-ink-muted leading-relaxed flex-1">{s.tagline}</p>}
        <div className="mt-5 text-sm font-medium text-bordo group-hover:text-teal flex items-center gap-1">
          Vezi detalii <span className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </a>
  );
}

// ---------- Testimonial Card ----------
function TestimonialCard({ t, compact = false }) {
  return (
    <Card className="h-full flex flex-col">
      <svg width="34" height="26" viewBox="0 0 34 26" className="text-rose mb-4 opacity-80">
        <path d="M0 26V14C0 6.268 6.268 0 14 0v6c-4.418 0-8 3.582-8 8h8v12H0zm20 0V14c0-7.732 6.268-14 14-14v6c-4.418 0-8 3.582-8 8h8v12H20z" fill="currentColor"/>
      </svg>
      <p className={`text-ink ${compact ? 'text-[15px]' : 'text-base'} leading-relaxed flex-1`}>{t.quote}</p>
      <div className="mt-5 pt-5 border-t border-cream-deep flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-cream-warm overflow-hidden flex-shrink-0 flex items-center justify-center">
          <image-slot id={'testimonial-' + t.id} shape="circle" placeholder={t.name.split(' ').map(p => p[0]).join('')} style={{ width: '100%', height: '100%' }}></image-slot>
        </div>
        <div className="min-w-0">
          <div className="font-semibold text-sm text-bordo-deep truncate">{t.name}</div>
          <div className="text-xs text-ink-muted truncate">{t.role} • {t.subject}</div>
        </div>
      </div>
    </Card>
  );
}

// ---------- Page Hero ----------
function PageHero({ kicker, title, subtitle, children }) {
  return (
    <section className="relative bg-cream-warm overflow-hidden">
      <div className="absolute inset-0 opacity-30 hatched"></div>
      <div className="relative max-w-5xl mx-auto px-4 md:px-6 lg:px-10 pt-16 pb-16 md:pt-24 md:pb-20 text-center">
        {kicker && <div className="flourish text-teal-deep text-xs uppercase tracking-[0.3em] font-medium mb-5">{kicker}</div>}
        <h1 className="serif-h text-5xl md:text-6xl lg:text-7xl text-bordo-deep mb-5">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl text-ink-muted max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

// ---------- Breadcrumb ----------
function Breadcrumb({ items }) {
  return (
    <nav className="text-xs text-ink-muted flex items-center gap-2 mb-8">
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="opacity-50">›</span>}
          {it.href ? <a href={'#/' + it.href} className="hover:text-bordo">{it.label}</a> : <span className="text-bordo-deep font-medium">{it.label}</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}

// ---------- Price Card ----------
function PriceCard({ p }) {
  return (
    <div className={`relative rounded-2xl p-7 md:p-8 h-full flex flex-col transition-all duration-300 ${p.featured ? 'bg-bordo-deep text-cream shadow-card-hover scale-[1.02] md:-translate-y-2' : 'bg-white shadow-card hover:shadow-card-hover'}`}>
      {p.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-teal text-white text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full">Recomandat</span>
        </div>
      )}
      {p.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-rose text-bordo-deep text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full">{p.badge}</span>
        </div>
      )}
      <h3 className={`serif-h text-2xl mb-1 ${p.featured ? 'text-cream' : 'text-bordo-deep'}`}>{p.title}</h3>
      <div className={`text-sm ${p.featured ? 'text-cream/85' : 'text-ink-muted'} mb-6`}>{p.duration}</div>

      <div className="flex items-baseline gap-2 mb-1">
        <span className={`serif-h text-6xl ${p.featured ? '' : 'text-bordo'}`} style={p.featured ? { color: '#FF4D4D' } : undefined}>{p.price}</span>
        <span className={`text-sm ${p.featured ? 'text-cream/90' : 'text-ink-muted'}`}>{p.unit}</span>
      </div>

      <ul className={`space-y-3 my-7 flex-1 ${p.featured ? 'text-cream' : 'text-ink'}`}>
        {p.bullets.map((b, i) => (
          <li key={i} className="flex gap-2.5 text-[14.5px] leading-relaxed">
            <span className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full ${p.featured ? 'bg-rose' : 'bg-teal'}`}></span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <Button href="contact" variant={p.featured ? 'cream' : (p.id === 'gratuit' ? 'secondary' : 'primary')} className="w-full">{p.cta}</Button>
    </div>
  );
}

// ---------- Tweaks Panel ----------
function TweaksPanel({ visible, onClose, tweaks, setTweak }) {
  if (!visible) return null;

  const Seg = ({ label, k, options }) => (
    <div className="mb-4">
      <div className="text-xs uppercase tracking-wider text-ink-muted mb-2">{label}</div>
      <div className="flex gap-1.5 flex-wrap">
        {options.map(o => {
          const on = (tweaks[k] || options[0].id) === o.id;
          return (
            <button key={o.id} onClick={() => setTweak(k, o.id)}
              className={`px-3 py-2 rounded-lg border text-sm transition-all ${on ? 'border-bordo bg-cream-warm text-bordo-deep font-semibold' : 'border-cream-deep text-ink-muted hover:border-bordo/40'}`}>
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="fixed bottom-24 md:bottom-7 right-5 md:right-28 z-50 w-[320px] max-h-[80vh] overflow-y-auto bg-white rounded-2xl shadow-card-hover border border-cream-deep p-5 animate-fade-up">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-bordo-deep">Tweaks</h4>
        <button onClick={onClose} className="text-ink-muted hover:text-bordo text-xl leading-none">×</button>
      </div>

      <div className="text-[11px] uppercase tracking-[0.18em] text-teal-deep font-semibold mb-3">Lizibilitate</div>
      <Seg label="Fundal" k="bg" options={[
        { id: 'white', label: 'Alb' },
        { id: 'warm', label: 'Crem cald' },
      ]} />
      <Seg label="Font titluri" k="heading" options={[
        { id: 'serif', label: 'Elegant (serif)' },
        { id: 'sans', label: 'Clar (sans)' },
      ]} />
      <Seg label="Text" k="text" options={[
        { id: 'normal', label: 'Normal' },
        { id: 'darker', label: 'Mai închis' },
      ]} />
      <Seg label="Mărime text" k="size" options={[
        { id: 's', label: 'S' },
        { id: 'm', label: 'M' },
        { id: 'l', label: 'L' },
        { id: 'xl', label: 'XL' },
      ]} />

      <div className="text-[11px] uppercase tracking-[0.18em] text-teal-deep font-semibold mb-3 mt-5 pt-5 border-t border-cream-deep">Layout</div>
      <Seg label="Variație Hero (Acasă)" k="hero" options={[
        { id: 'editorial', label: 'Editorial' },
        { id: 'split', label: 'Split' },
        { id: 'bold', label: 'Bold' },
      ]} />
    </div>
  );
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
    } catch (e) { setShow(true); }
  }, []);

  function accept() {
    try { localStorage.setItem('cdp-cookies-ok', '1'); } catch (e) {}
    setShow(false);
  }

  if (!show) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 md:px-6 md:pb-6 animate-fade-up" role="dialog" aria-label="Notificare cookies">
      <div className="max-w-3xl mx-auto bg-bordo-deep text-cream rounded-2xl shadow-card-hover p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4">
        <p className="text-sm leading-relaxed text-cream/85 flex-1">
          Folosim cookie-uri tehnice strict necesare pentru funcționarea site-ului și pentru harta Google integrată. Nu folosim cookie-uri de publicitate sau tracking. Detalii în{' '}
          <a href="#/confidentialitate" className="underline hover:text-rose">politica de confidențialitate</a>.
        </p>
        <div className="flex-shrink-0">
          <button onClick={accept} className="w-full md:w-auto px-6 py-3 rounded-full bg-rose text-bordo-deep font-semibold text-sm hover:bg-cream transition-colors">
            Am înțeles
          </button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  useRoute, nav, Reveal, Button, SectionTitle, Card, Logo, Header,
  WhatsAppFloat, Footer, SubjectCard, TestimonialCard, PageHero, Breadcrumb, PriceCard, TweaksPanel,
  CookieBanner,
  WHATSAPP_URL, PHONE, EMAIL, ADDRESS
});
