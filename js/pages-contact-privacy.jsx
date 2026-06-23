// Contact + Privacy pages.

function ContactForm({ compact }) {
  const [form, setForm] = useState({ nume: '', email: '', telefon: '', materie: '', tip: '', mesaj: '', consimtamant: false });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  function setField(k, v) {
    setForm(f => ({ ...f, [k]: v }));
    setErrors(e => ({ ...e, [k]: undefined }));
  }

  function validate() {
    const e = {};
    if (!form.nume.trim()) e.nume = 'Spune-ne cum te cheamă';
    if (!form.email.trim()) e.email = 'Avem nevoie să te putem contacta';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Email-ul nu pare valid';
    if (!form.telefon.trim()) e.telefon = 'Lasă-ne un număr la care te putem suna';
    if (!form.materie) e.materie = 'Alege o materie';
    if (!form.tip) e.tip = 'Spune-ne pentru ce vrei meditațiile';
    if (!form.mesaj.trim() || form.mesaj.trim().length < 5) e.mesaj = 'Scrie-ne câteva cuvinte despre situație';
    if (!form.consimtamant) e.consimtamant = 'Bifează ca să putem să te contactăm';
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
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error('eroare');
      setStatus('success');
      setForm({ nume: '', email: '', telefon: '', materie: '', tip: '', mesaj: '', consimtamant: false });
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className={`bg-white rounded-2xl p-7 md:p-10 border-l-4 border-bordo ${compact ? 'shadow-soft' : 'shadow-card'}`}>
      <h2 className="serif-h text-3xl text-bordo-deep mb-2">Scrie-ne</h2>
      <p className="text-ink-muted mb-7 text-[15px]">Pe baza mesajului, te contactăm să stabilim ședința de cunoaștere gratuită.</p>

      {status === 'success' ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full bg-teal/20 mx-auto mb-4 flex items-center justify-center text-3xl text-teal-deep">✓</div>
          <h3 className="serif-h text-2xl text-bordo-deep mb-2">Mulțumim!</h3>
          <p className="text-ink-muted mb-5">Mesajul a ajuns la noi. Te contactăm în maxim 24 de ore.</p>
          <Button onClick={() => setStatus('idle')} variant="outline">Trimite alt mesaj</Button>
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nume">Nume *</label>
              <input id="nume" type="text" className={`input ${errors.nume ? 'error' : ''}`} value={form.nume} onChange={e => setField('nume', e.target.value)} placeholder="Numele tău sau al elevului" />
              {errors.nume && <div className="text-bordo text-xs mt-1">{errors.nume}</div>}
            </div>
            <div>
              <label htmlFor="telefon">Telefon *</label>
              <input id="telefon" type="tel" className={`input ${errors.telefon ? 'error' : ''}`} value={form.telefon} onChange={e => setField('telefon', e.target.value)} placeholder="07xx xxx xxx" />
              {errors.telefon && <div className="text-bordo text-xs mt-1">{errors.telefon}</div>}
            </div>
          </div>

          <div>
            <label htmlFor="email">Email *</label>
            <input id="email" type="email" className={`input ${errors.email ? 'error' : ''}`} value={form.email} onChange={e => setField('email', e.target.value)} placeholder="email@exemplu.ro" />
            {errors.email && <div className="text-bordo text-xs mt-1">{errors.email}</div>}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="materie">Materia *</label>
              <select id="materie" className={`input ${errors.materie ? 'error' : ''}`} value={form.materie} onChange={e => setField('materie', e.target.value)}>
                <option value="">Alege o materie</option>
                {window.SUBJECTS.map(s => <option key={s.slug} value={s.name}>{s.name}</option>)}
                <option value="Mai multe">Mai multe materii</option>
                <option value="Nu știu încă">Nu știu încă</option>
              </select>
              {errors.materie && <div className="text-bordo text-xs mt-1">{errors.materie}</div>}
            </div>
            <div>
              <label htmlFor="tip">Pentru ce *</label>
              <select id="tip" className={`input ${errors.tip ? 'error' : ''}`} value={form.tip} onChange={e => setField('tip', e.target.value)}>
                <option value="">Alege opțiunea</option>
                <option value="EN">Evaluare Națională (a VIII-a)</option>
                <option value="BAC">Bacalaureat</option>
                <option value="Recuperare">Recuperare la materie</option>
                <option value="Altceva">Altceva</option>
              </select>
              {errors.tip && <div className="text-bordo text-xs mt-1">{errors.tip}</div>}
            </div>
          </div>

          <div>
            <label htmlFor="mesaj">Spune-ne despre situație *</label>
            <textarea id="mesaj" rows="5" className={`input resize-none ${errors.mesaj ? 'error' : ''}`} value={form.mesaj} onChange={e => setField('mesaj', e.target.value)} placeholder="Clasa, ce te încurcă, ce ai încercat deja, când vrei să începem... orice ne-ar ajuta să te înțelegem"></textarea>
            {errors.mesaj && <div className="text-bordo text-xs mt-1">{errors.mesaj}</div>}
          </div>

          {status === 'error' && <div className="text-bordo text-sm p-3 rounded-lg bg-rose/20">A apărut o eroare. Încearcă din nou sau scrie-ne pe WhatsApp.</div>}

          <label className="flex items-start gap-3 pt-1 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={form.consimtamant}
              onChange={e => setField('consimtamant', e.target.checked)}
              className="mt-1 w-[18px] h-[18px] flex-shrink-0 accent-bordo cursor-pointer"
            />
            <span className="text-xs text-ink-muted leading-relaxed">
              Sunt de acord ca datele introduse să fie folosite pentru a fi contactat(ă), conform <a href="#/confidentialitate" className="underline hover:text-bordo">politicii de confidențialitate</a>. Dacă elevul e minor, confirm că sunt părintele sau tutorele acestuia.
            </span>
          </label>
          {errors.consimtamant && <div className="text-bordo text-xs -mt-1">{errors.consimtamant}</div>}

          <div className="flex flex-wrap gap-3 pt-2">
            <Button onClick={submit} disabled={status === 'loading'} variant="primary" size="lg" className={status === 'loading' ? 'opacity-70 cursor-wait' : ''}>
              {status === 'loading' ? 'Se trimite...' : 'Trimite mesajul'}
            </Button>
            <Button href={WHATSAPP_URL} variant="whatsapp" size="lg">Mai bine pe WhatsApp</Button>
          </div>
        </form>
      )}
    </div>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero kicker="Contact" title="Hai să vorbim" subtitle="Cel mai rapid e pe WhatsApp. Dar dacă preferi formularul, suntem aici. Răspundem în maxim 24 de ore." />
      <section className="py-12 md:py-16 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto">
        <Breadcrumb items={[{label:'Acasă', href:'acasa'}, {label:'Contact'}]} />

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-bordo-deep text-cream rounded-2xl p-7">
              <div className="flourish text-rose text-xs uppercase tracking-[0.3em] mb-4" style={{justifyContent:'flex-start'}}>Răspundem rapid</div>
              <h3 className="serif-h text-2xl text-cream mb-4">Cel mai rapid pe WhatsApp</h3>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#1ebe57] transition-colors w-full justify-center">
                <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white"><path d="M16.026 0C7.21 0 0 7.21 0 16.026c0 2.83.755 5.605 2.18 8.026L0 32l8.247-2.155a16 16 0 007.78 1.987c8.815 0 16.026-7.21 16.026-16.026S24.84 0 16.026 0z"/></svg>
                Scrie pe WhatsApp
              </a>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-soft space-y-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-teal font-semibold mb-1">Telefon</div>
                <a href="tel:+40721628936" className="text-lg font-medium text-bordo-deep hover:text-bordo">{PHONE}</a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-teal font-semibold mb-1">Email</div>
                <a href={`mailto:${EMAIL}`} className="text-bordo-deep hover:text-bordo break-all">{EMAIL}</a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-teal font-semibold mb-1">Sediu</div>
                <div className="text-bordo-deep">{ADDRESS}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-teal font-semibold mb-1">Program</div>
                <div className="text-bordo-deep text-sm">Luni-Vineri: 9:00 - 20:00</div>
                <div className="text-bordo-deep text-sm">Sâmbătă: 9:00 - 16:00</div>
                <div className="text-ink-muted text-sm">Duminică: închis</div>
              </div>
            </div>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft relative bg-cream-warm">
              <iframe
                title="Centru de pregătire Constanța"
                src="https://www.google.com/maps?q=Strada+Soveja+90+Constanta&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PrivacyPage() {
  return (
    <>
      <PageHero kicker="Legal" title="Politică de confidențialitate" subtitle="Cum tratăm datele tale. Pe scurt și pe înțeles." />
      <section className="py-12 md:py-16 px-4 md:px-6 max-w-3xl mx-auto">
        <Breadcrumb items={[{label:'Acasă', href:'acasa'}, {label:'Confidențialitate'}]} />
        <div className="prose-article">
          <p><strong>Ultima actualizare:</strong> 11 mai 2026</p>

          <p>Centru de pregătire Constanța („noi") respectă confidențialitatea datelor tale și se conformează Regulamentului General privind Protecția Datelor (GDPR, Regulamentul UE 2016/679) și legislației române aplicabile.</p>

          <h2>1. Ce date colectăm</h2>
          <p>Atunci când completezi formularul de contact sau ne scrii pe WhatsApp/email, colectăm:</p>
          <ul>
            <li>Numele tău (sau al elevului)</li>
            <li>Adresa de email</li>
            <li>Numărul de telefon</li>
            <li>Informații pe care alegi să le incluzi în mesaj (clasa, materia, situația școlară)</li>
          </ul>

          <h2>2. De ce le folosim</h2>
          <p>Folosim aceste date <strong>exclusiv pentru</strong>:</p>
          <ul>
            <li>A te contacta pentru programarea ședinței de cunoaștere</li>
            <li>A te informa despre serviciile noastre la cererea ta</li>
            <li>A păstra evidența ședințelor și a programărilor tale</li>
            <li>A respecta obligațiile legale (facturare, contabilitate)</li>
          </ul>
          <p>Nu trimitem newsletter, nu trimitem oferte nesolicitate, nu te abonăm la nimic fără să-ți cerem.</p>

          <h2>3. Cu cine partajăm datele</h2>
          <p>Nu vindem și nu partajăm datele tale cu terți pentru scopuri de marketing. Datele pot fi accesate de:</p>
          <ul>
            <li>Echipa noastră de profesori, strict pentru organizarea ședințelor</li>
            <li>Furnizorul de servicii email (Formspree), strict pentru transmiterea formularului</li>
            <li>Autorități fiscale, conform legii</li>
          </ul>

          <h2>4. Cât timp păstrăm datele</h2>
          <p>Păstrăm datele pentru perioada colaborării și încă <strong>3 ani</strong> după ultima ședință, pentru obligații legale (contabile, fiscale). După, le ștergem definitiv.</p>

          <h2>5. Drepturile tale</h2>
          <p>Conform GDPR, ai dreptul:</p>
          <ul>
            <li>Să afli ce date avem despre tine</li>
            <li>Să ne ceri să le corectăm dacă sunt greșite</li>
            <li>Să ne ceri să le ștergem (dacă nu există obligație legală de păstrare)</li>
            <li>Să te opui prelucrării lor</li>
            <li>Să retragi consimțământul oricând</li>
          </ul>
          <p>Pentru oricare dintre acestea, scrie-ne la <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Răspundem în maxim 30 de zile.</p>

          <h2>6. Datele elevilor minori</h2>
          <p>O parte dintre elevii noștri sunt minori. În aceste cazuri, datele de contact (nume, telefon, email) sunt furnizate de <strong>părinte sau de tutorele legal</strong>, care își dă consimțământul pentru prelucrarea lor. Nu colectăm în mod intenționat date de la copii fără acordul unui adult responsabil. Despre elev păstrăm doar informațiile strict necesare organizării ședințelor (clasă, materie, nivel). Dacă ești părinte și vrei să vezi, să corectezi sau să ștergi datele copilului tău, scrie-ne la <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>

          <h2>7. Cookies</h2>
          <p>Site-ul nostru folosește cookie-uri tehnice strict necesare pentru funcționare (de exemplu, pentru a memora ce variantă de hero ai selectat, dacă deschizi panoul Tweaks). Nu folosim cookie-uri de tracking sau de publicitate.</p>

          <h2>8. Securitate</h2>
          <p>Datele transmise prin formular sunt criptate (HTTPS). Le stocăm în servicii cu standarde de securitate recunoscute (Formspree, Google Workspace). Cu toate astea, nu putem garanta 100% securitate, internetul nu permite asta. Dacă afli de o problemă, anunță-ne și acționăm imediat.</p>

          <h2>9. Contact pentru întrebări</h2>
          <p>Orice întrebare despre datele tale: <a href={`mailto:${EMAIL}`}>{EMAIL}</a> sau la telefonul {PHONE}.</p>

          <p className="text-sm text-ink-muted italic pt-6">Acest document e cât se poate de pe înțeles. Dacă ceva tot nu îți e clar, scrie-ne, îți explicăm.</p>
        </div>
      </section>
    </>
  );
}

function TermsPage() {
  return (
    <>
      <PageHero kicker="Legal" title="Termeni și condiții" subtitle="Cum funcționează colaborarea cu noi. Pe scurt și fără surprize." />
      <section className="py-12 md:py-16 px-4 md:px-6 max-w-3xl mx-auto">
        <Breadcrumb items={[{label:'Acasă', href:'acasa'}, {label:'Termeni și condiții'}]} />
        <div className="prose-article">
          <p><strong>Ultima actualizare:</strong> 2 iunie 2026</p>

          <p>Acești termeni descriu condițiile în care Centru de pregătire Constanța („noi") oferă servicii de meditații și pregătire școlară. Prin programarea unei ședințe, ești de acord cu cele de mai jos.</p>

          <h2>1. Serviciile noastre</h2>
          <p>Oferim meditații și pregătire școlară la sediul din Constanța, pentru diverse clase și materii: recuperare la materie, pregătire pentru Evaluarea Națională și Bacalaureat. Lucrăm în grupe restrânse de 2-3 elevi, cu materiale fizice și tablă.</p>

          <h2>2. Ședința de cunoaștere gratuită</h2>
          <p>Prima ședință, împreună cu testul inițial, este <strong>gratuită și fără obligații</strong>. Scopul ei e să evaluăm nivelul real al elevului și să stabilim împreună un plan. Nu te obligă să continui colaborarea.</p>

          <h2>3. Programare și prezență</h2>
          <p>Ședințele se programează din timp, de comun acord. Te rugăm să anunți din timp dacă nu poți ajunge, ca să putem reorganiza grupa și să oferim locul altui elev.</p>

          <h2>4. Plata</h2>
          <p>Tarifele sunt cele afișate pe pagina <a href="#/preturi">Prețuri</a> și se comunică clar înainte de începerea colaborării. Plata se face conform înțelegerii stabilite la prima ședință (pe ședință sau pe pachet). Eventualele modificări de tarif sunt anunțate din timp și nu afectează ședințele deja plătite.</p>

          <h2>5. Anulare și reprogramare</h2>
          <p>Poți anula sau reprograma o ședință anunțându-ne cu cel puțin <strong>24 de ore înainte</strong>, telefonic sau pe WhatsApp. Ședințele anunțate în timp util se reprogramează fără costuri.</p>

          <h2>6. Responsabilitățile noastre</h2>
          <p>Ne angajăm să oferim pregătire de calitate, cu profesori dedicați și un mediu de învățare potrivit. Rezultatele școlare depind însă de mai mulți factori (implicarea elevului, timpul de studiu acasă), așa că nu putem garanta o anumită notă sau un anumit rezultat la examen.</p>

          <h2>7. Responsabilitățile tale</h2>
          <p>Pentru rezultate bune, contează prezența constantă, efectuarea temelor recomandate și comunicarea deschisă cu profesorul. Pentru elevii minori, părintele sau tutorele susține colaborarea și ne anunță orice schimbare relevantă.</p>

          <h2>8. Modificarea termenilor</h2>
          <p>Putem actualiza acești termeni din când în când. Versiunea valabilă e cea publicată pe această pagină, cu data ultimei actualizări de mai sus.</p>

          <h2>9. Contact</h2>
          <p>Pentru orice întrebare legată de acești termeni: <a href={`mailto:${EMAIL}`}>{EMAIL}</a> sau {PHONE}.</p>

          <p className="text-sm text-ink-muted italic pt-6">Vrem o colaborare clară și corectă. Dacă ceva nu îți e limpede, întreabă-ne oricând.</p>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { ContactPage, PrivacyPage, TermsPage, ContactForm });
