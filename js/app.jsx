// App shell: router, Tweaks integration.

const SEO = {
  acasa:             { t: 'Meditații Constanța — Evaluare Națională & Bacalaureat | Centrul de Pregătire', d: 'Meditații în Constanța pentru orice clasă și materie. Pregătire pentru Evaluarea Națională, Bacalaureat și recuperare la materie, la sediu în Constanța. Prima ședință e gratuită.' },
  despre:            { t: 'Despre noi — Cum lucrăm | Centrul de Pregătire Constanța', d: 'Pornim de la nivelul tău real și construim pas cu pas. Lucrăm în grupe mici de 2-3 elevi, la sediul din Constanța, cu plan personalizat pentru fiecare elev.' },
  preturi:           { t: 'Prețuri meditații Constanța | Centrul de Pregătire', d: 'Vezi prețurile pentru meditații în grupe mici de 2-3 elevi. Prima ședință de cunoaștere și testul inițial sunt gratuite.' },
  testimoniale:      { t: 'Testimoniale — Ce spun elevii și părinții | Centrul de Pregătire Constanța', d: 'Rezultate reale și experiențe ale elevilor și părinților care au lucrat cu noi la pregătirea pentru Evaluarea Națională și Bacalaureat.' },
  blog:              { t: 'Blog — Sfaturi pentru elevi și părinți | Centrul de Pregătire Constanța', d: 'Articole practice despre pregătirea pentru examene, metode de învățare și sprijinul părinților în parcursul școlar.' },
  contact:           { t: 'Contact — Programează o ședință gratuită | Centrul de Pregătire Constanța', d: 'Scrie-ne pe WhatsApp sau completează formularul. Sediu: Strada Soveja nr. 90, Constanța. Răspundem în maxim 24 de ore.' },
  confidentialitate: { t: 'Politica de confidențialitate | Centrul de Pregătire Constanța', d: 'Cum colectăm și folosim datele tale, exclusiv pentru a te contacta și a-ți oferi serviciile noastre de meditații.' },
  termeni:           { t: 'Termeni și condiții | Centrul de Pregătire Constanța', d: 'Condițiile de colaborare: ședința gratuită, programare, plată, anulare și reprogramare.' }
};

function applySeo(main) {
  const s = SEO[main] || SEO.acasa;
  document.title = s.t;
  const set = (sel, attr, val) => { const el = document.head.querySelector(sel); if (el) el.setAttribute(attr, val); };
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
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch {}
    return () => window.removeEventListener('message', onMsg);
  }, []);

  function setTweak(key, value) {
    setTweaks(t => {
      const next = { ...t, [key]: value };
      try { window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [key]: value } }, '*'); } catch {}
      return next;
    });
  }

  function closeTweaks() {
    setTweaksOpen(false);
    document.body.classList.remove('tweaks-on');
    try { window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*'); } catch {}
  }

  const parts = route.split('/').filter(Boolean);
  const main = parts[0] || 'acasa';
  const sub = parts[1];

  useEffect(() => { applySeo(main); }, [main]);

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
      page = <HomePage heroVariant={tweaks.hero} />; break;
    case 'despre':
      page = <AboutPage />; break;
    case 'preturi':
      page = <PricesPage />; break;
    case 'testimoniale':
      page = <TestimonialsPage />; break;
    case 'blog':
      nav('acasa'); page = <HomePage heroVariant={tweaks.hero} />; break;
    case 'contact':
      page = <ContactPage />; break;
    case 'confidentialitate':
      page = <PrivacyPage />; break;
    case 'termeni':
      page = <TermsPage />; break;
    default:
      page = <NotFound />;
  }

  return (
    <div className="relative">
      <Header route={route} />
      <main key={route} className="animate-fade-in">{page}</main>
      <Footer />
      <WhatsAppFloat />
      <CookieBanner />
      <TweaksPanel
        visible={tweaksOpen}
        onClose={closeTweaks}
        tweaks={tweaks}
        setTweak={setTweak}
      />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
