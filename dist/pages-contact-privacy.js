// Contact + Privacy pages.

function ContactForm({
  compact
}) {
  const [form, setForm] = useState({
    nume: '',
    email: '',
    telefon: '',
    materie: '',
    tip: '',
    mesaj: '',
    consimtamant: false
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  function setField(k, v) {
    setForm(f => ({
      ...f,
      [k]: v
    }));
    setErrors(e => ({
      ...e,
      [k]: undefined
    }));
  }
  function validate() {
    const e = {};
    if (!form.nume.trim()) e.nume = 'Spune-ne cum te cheamă';
    if (!form.email.trim()) e.email = 'Avem nevoie să te putem contacta';else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Email-ul nu pare valid';
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
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error('eroare');
      setStatus('success');
      setForm({
        nume: '',
        email: '',
        telefon: '',
        materie: '',
        tip: '',
        mesaj: '',
        consimtamant: false
      });
    } catch {
      setStatus('error');
    }
  }
  return /*#__PURE__*/React.createElement("div", {
    className: `bg-white rounded-2xl p-7 md:p-10 border-l-4 border-bordo ${compact ? 'shadow-soft' : 'shadow-card'}`
  }, /*#__PURE__*/React.createElement("h2", {
    className: "serif-h text-3xl text-bordo-deep mb-2"
  }, "Scrie-ne"), /*#__PURE__*/React.createElement("p", {
    className: "text-ink-muted mb-7 text-[15px]"
  }, "Pe baza mesajului, te contactăm să stabilim ședința de cunoaștere gratuită."), status === 'success' ? /*#__PURE__*/React.createElement("div", {
    className: "text-center py-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 rounded-full bg-teal/20 mx-auto mb-4 flex items-center justify-center text-3xl text-teal-deep"
  }, "✓"), /*#__PURE__*/React.createElement("h3", {
    className: "serif-h text-2xl text-bordo-deep mb-2"
  }, "Mulțumim!"), /*#__PURE__*/React.createElement("p", {
    className: "text-ink-muted mb-5"
  }, "Mesajul a ajuns la noi. Te contactăm în maxim 24 de ore."), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setStatus('idle'),
    variant: "outline"
  }, "Trimite alt mesaj")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "nume"
  }, "Nume *"), /*#__PURE__*/React.createElement("input", {
    id: "nume",
    type: "text",
    className: `input ${errors.nume ? 'error' : ''}`,
    value: form.nume,
    onChange: e => setField('nume', e.target.value),
    placeholder: "Numele tău sau al elevului"
  }), errors.nume && /*#__PURE__*/React.createElement("div", {
    className: "text-bordo text-xs mt-1"
  }, errors.nume)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "telefon"
  }, "Telefon *"), /*#__PURE__*/React.createElement("input", {
    id: "telefon",
    type: "tel",
    className: `input ${errors.telefon ? 'error' : ''}`,
    value: form.telefon,
    onChange: e => setField('telefon', e.target.value),
    placeholder: "07xx xxx xxx"
  }), errors.telefon && /*#__PURE__*/React.createElement("div", {
    className: "text-bordo text-xs mt-1"
  }, errors.telefon))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email"
  }, "Email *"), /*#__PURE__*/React.createElement("input", {
    id: "email",
    type: "email",
    className: `input ${errors.email ? 'error' : ''}`,
    value: form.email,
    onChange: e => setField('email', e.target.value),
    placeholder: "email@exemplu.ro"
  }), errors.email && /*#__PURE__*/React.createElement("div", {
    className: "text-bordo text-xs mt-1"
  }, errors.email)), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "materie"
  }, "Materia *"), /*#__PURE__*/React.createElement("select", {
    id: "materie",
    className: `input ${errors.materie ? 'error' : ''}`,
    value: form.materie,
    onChange: e => setField('materie', e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Alege o materie"), window.SUBJECTS.map(s => /*#__PURE__*/React.createElement("option", {
    key: s.slug,
    value: s.name
  }, s.name)), /*#__PURE__*/React.createElement("option", {
    value: "Mai multe"
  }, "Mai multe materii"), /*#__PURE__*/React.createElement("option", {
    value: "Nu știu încă"
  }, "Nu știu încă")), errors.materie && /*#__PURE__*/React.createElement("div", {
    className: "text-bordo text-xs mt-1"
  }, errors.materie)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "tip"
  }, "Pentru ce *"), /*#__PURE__*/React.createElement("select", {
    id: "tip",
    className: `input ${errors.tip ? 'error' : ''}`,
    value: form.tip,
    onChange: e => setField('tip', e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Alege opțiunea"), /*#__PURE__*/React.createElement("option", {
    value: "EN"
  }, "Evaluare Națională (a VIII-a)"), /*#__PURE__*/React.createElement("option", {
    value: "BAC"
  }, "Bacalaureat"), /*#__PURE__*/React.createElement("option", {
    value: "Recuperare"
  }, "Recuperare la materie"), /*#__PURE__*/React.createElement("option", {
    value: "Altceva"
  }, "Altceva")), errors.tip && /*#__PURE__*/React.createElement("div", {
    className: "text-bordo text-xs mt-1"
  }, errors.tip))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "mesaj"
  }, "Spune-ne despre situație *"), /*#__PURE__*/React.createElement("textarea", {
    id: "mesaj",
    rows: "5",
    className: `input resize-none ${errors.mesaj ? 'error' : ''}`,
    value: form.mesaj,
    onChange: e => setField('mesaj', e.target.value),
    placeholder: "Clasa, ce te încurcă, ce ai încercat deja, când vrei să începem... orice ne-ar ajuta să te înțelegem"
  }), errors.mesaj && /*#__PURE__*/React.createElement("div", {
    className: "text-bordo text-xs mt-1"
  }, errors.mesaj)), status === 'error' && /*#__PURE__*/React.createElement("div", {
    className: "text-bordo text-sm p-3 rounded-lg bg-rose/20"
  }, "A apărut o eroare. Încearcă din nou sau scrie-ne pe WhatsApp."), /*#__PURE__*/React.createElement("label", {
    className: "flex items-start gap-3 pt-1 cursor-pointer select-none"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: form.consimtamant,
    onChange: e => setField('consimtamant', e.target.checked),
    className: "mt-1 w-[18px] h-[18px] flex-shrink-0 accent-bordo cursor-pointer"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-ink-muted leading-relaxed"
  }, "Sunt de acord ca datele introduse să fie folosite pentru a fi contactat(ă), conform ", /*#__PURE__*/React.createElement("a", {
    href: "#/confidentialitate",
    className: "underline hover:text-bordo"
  }, "politicii de confidențialitate"), ". Dacă elevul e minor, confirm că sunt părintele sau tutorele acestuia.")), errors.consimtamant && /*#__PURE__*/React.createElement("div", {
    className: "text-bordo text-xs -mt-1"
  }, errors.consimtamant), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3 pt-2"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: submit,
    disabled: status === 'loading',
    variant: "primary",
    size: "lg",
    className: status === 'loading' ? 'opacity-70 cursor-wait' : ''
  }, status === 'loading' ? 'Se trimite...' : 'Trimite mesajul'), /*#__PURE__*/React.createElement(Button, {
    href: WHATSAPP_URL,
    variant: "whatsapp",
    size: "lg"
  }, "Mai bine pe WhatsApp"))));
}
function ContactPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    kicker: "Contact",
    title: "Hai să vorbim",
    subtitle: "Cel mai rapid e pe WhatsApp. Dar dacă preferi formularul, suntem aici. Răspundem în maxim 24 de ore."
  }), /*#__PURE__*/React.createElement("section", {
    className: "py-12 md:py-16 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Acasă',
      href: 'acasa'
    }, {
      label: 'Contact'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid lg:grid-cols-12 gap-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement(ContactForm, null)), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-bordo-deep text-cream rounded-2xl p-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flourish text-rose text-xs uppercase tracking-[0.3em] mb-4",
    style: {
      justifyContent: 'flex-start'
    }
  }, "Răspundem rapid"), /*#__PURE__*/React.createElement("h3", {
    className: "serif-h text-2xl text-cream mb-4"
  }, "Cel mai rapid pe WhatsApp"), /*#__PURE__*/React.createElement("a", {
    href: WHATSAPP_URL,
    target: "_blank",
    rel: "noopener",
    className: "inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#1ebe57] transition-colors w-full justify-center"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    className: "w-5 h-5 fill-white"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.026 0C7.21 0 0 7.21 0 16.026c0 2.83.755 5.605 2.18 8.026L0 32l8.247-2.155a16 16 0 007.78 1.987c8.815 0 16.026-7.21 16.026-16.026S24.84 0 16.026 0z"
  })), "Scrie pe WhatsApp")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-7 shadow-soft space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-wider text-teal font-semibold mb-1"
  }, "Telefon"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+40721628936",
    className: "text-lg font-medium text-bordo-deep hover:text-bordo"
  }, PHONE)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-wider text-teal font-semibold mb-1"
  }, "Email"), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${EMAIL}`,
    className: "text-bordo-deep hover:text-bordo break-all"
  }, EMAIL)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-wider text-teal font-semibold mb-1"
  }, "Sediu"), /*#__PURE__*/React.createElement("div", {
    className: "text-bordo-deep"
  }, ADDRESS)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-wider text-teal font-semibold mb-1"
  }, "Program"), /*#__PURE__*/React.createElement("div", {
    className: "text-bordo-deep text-sm"
  }, "Luni-Vineri: 9:00 - 20:00"), /*#__PURE__*/React.createElement("div", {
    className: "text-bordo-deep text-sm"
  }, "Sâmbătă: 9:00 - 16:00"), /*#__PURE__*/React.createElement("div", {
    className: "text-ink-muted text-sm"
  }, "Duminică: închis"))), /*#__PURE__*/React.createElement("div", {
    className: "aspect-[4/3] rounded-2xl overflow-hidden shadow-soft relative bg-cream-warm"
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "Centru de pregătire Constanța",
    src: "https://www.google.com/maps?q=Strada+Soveja+90+Constanta&output=embed",
    className: "absolute inset-0 w-full h-full border-0",
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade"
  }))))));
}
function PrivacyPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    kicker: "Legal",
    title: "Politică de confidențialitate",
    subtitle: "Cum tratăm datele tale. Pe scurt și pe înțeles."
  }), /*#__PURE__*/React.createElement("section", {
    className: "py-12 md:py-16 px-4 md:px-6 max-w-3xl mx-auto"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Acasă',
      href: 'acasa'
    }, {
      label: 'Confidențialitate'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "prose-article"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Ultima actualizare:"), " 11 mai 2026"), /*#__PURE__*/React.createElement("p", null, "Centru de pregătire Constanța („noi\") respectă confidențialitatea datelor tale și se conformează Regulamentului General privind Protecția Datelor (GDPR, Regulamentul UE 2016/679) și legislației române aplicabile."), /*#__PURE__*/React.createElement("h2", null, "1. Ce date colectăm"), /*#__PURE__*/React.createElement("p", null, "Atunci când completezi formularul de contact sau ne scrii pe WhatsApp/email, colectăm:"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Numele tău (sau al elevului)"), /*#__PURE__*/React.createElement("li", null, "Adresa de email"), /*#__PURE__*/React.createElement("li", null, "Numărul de telefon"), /*#__PURE__*/React.createElement("li", null, "Informații pe care alegi să le incluzi în mesaj (clasa, materia, situația școlară)")), /*#__PURE__*/React.createElement("h2", null, "2. De ce le folosim"), /*#__PURE__*/React.createElement("p", null, "Folosim aceste date ", /*#__PURE__*/React.createElement("strong", null, "exclusiv pentru"), ":"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "A te contacta pentru programarea ședinței de cunoaștere"), /*#__PURE__*/React.createElement("li", null, "A te informa despre serviciile noastre la cererea ta"), /*#__PURE__*/React.createElement("li", null, "A păstra evidența ședințelor și a programărilor tale"), /*#__PURE__*/React.createElement("li", null, "A respecta obligațiile legale (facturare, contabilitate)")), /*#__PURE__*/React.createElement("p", null, "Nu trimitem newsletter, nu trimitem oferte nesolicitate, nu te abonăm la nimic fără să-ți cerem."), /*#__PURE__*/React.createElement("h2", null, "3. Cu cine partajăm datele"), /*#__PURE__*/React.createElement("p", null, "Nu vindem și nu partajăm datele tale cu terți pentru scopuri de marketing. Datele pot fi accesate de:"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Echipa noastră de profesori, strict pentru organizarea ședințelor"), /*#__PURE__*/React.createElement("li", null, "Furnizorul de servicii email (Formspree), strict pentru transmiterea formularului"), /*#__PURE__*/React.createElement("li", null, "Autorități fiscale, conform legii")), /*#__PURE__*/React.createElement("h2", null, "4. Cât timp păstrăm datele"), /*#__PURE__*/React.createElement("p", null, "Păstrăm datele pentru perioada colaborării și încă ", /*#__PURE__*/React.createElement("strong", null, "3 ani"), " după ultima ședință, pentru obligații legale (contabile, fiscale). După, le ștergem definitiv."), /*#__PURE__*/React.createElement("h2", null, "5. Drepturile tale"), /*#__PURE__*/React.createElement("p", null, "Conform GDPR, ai dreptul:"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Să afli ce date avem despre tine"), /*#__PURE__*/React.createElement("li", null, "Să ne ceri să le corectăm dacă sunt greșite"), /*#__PURE__*/React.createElement("li", null, "Să ne ceri să le ștergem (dacă nu există obligație legală de păstrare)"), /*#__PURE__*/React.createElement("li", null, "Să te opui prelucrării lor"), /*#__PURE__*/React.createElement("li", null, "Să retragi consimțământul oricând")), /*#__PURE__*/React.createElement("p", null, "Pentru oricare dintre acestea, scrie-ne la ", /*#__PURE__*/React.createElement("a", {
    href: `mailto:${EMAIL}`
  }, EMAIL), ". Răspundem în maxim 30 de zile."), /*#__PURE__*/React.createElement("h2", null, "6. Datele elevilor minori"), /*#__PURE__*/React.createElement("p", null, "O parte dintre elevii noștri sunt minori. În aceste cazuri, datele de contact (nume, telefon, email) sunt furnizate de ", /*#__PURE__*/React.createElement("strong", null, "părinte sau de tutorele legal"), ", care își dă consimțământul pentru prelucrarea lor. Nu colectăm în mod intenționat date de la copii fără acordul unui adult responsabil. Despre elev păstrăm doar informațiile strict necesare organizării ședințelor (clasă, materie, nivel). Dacă ești părinte și vrei să vezi, să corectezi sau să ștergi datele copilului tău, scrie-ne la ", /*#__PURE__*/React.createElement("a", {
    href: `mailto:${EMAIL}`
  }, EMAIL), "."), /*#__PURE__*/React.createElement("h2", null, "7. Cookies"), /*#__PURE__*/React.createElement("p", null, "Site-ul nostru folosește cookie-uri tehnice strict necesare pentru funcționare (de exemplu, pentru a memora ce variantă de hero ai selectat, dacă deschizi panoul Tweaks). Nu folosim cookie-uri de tracking sau de publicitate."), /*#__PURE__*/React.createElement("h2", null, "8. Securitate"), /*#__PURE__*/React.createElement("p", null, "Datele transmise prin formular sunt criptate (HTTPS). Le stocăm în servicii cu standarde de securitate recunoscute (Formspree, Google Workspace). Cu toate astea, nu putem garanta 100% securitate, internetul nu permite asta. Dacă afli de o problemă, anunță-ne și acționăm imediat."), /*#__PURE__*/React.createElement("h2", null, "9. Contact pentru întrebări"), /*#__PURE__*/React.createElement("p", null, "Orice întrebare despre datele tale: ", /*#__PURE__*/React.createElement("a", {
    href: `mailto:${EMAIL}`
  }, EMAIL), " sau la telefonul ", PHONE, "."), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-ink-muted italic pt-6"
  }, "Acest document e cât se poate de pe înțeles. Dacă ceva tot nu îți e clar, scrie-ne, îți explicăm."))));
}
function TermsPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    kicker: "Legal",
    title: "Termeni și condiții",
    subtitle: "Cum funcționează colaborarea cu noi. Pe scurt și fără surprize."
  }), /*#__PURE__*/React.createElement("section", {
    className: "py-12 md:py-16 px-4 md:px-6 max-w-3xl mx-auto"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Acasă',
      href: 'acasa'
    }, {
      label: 'Termeni și condiții'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "prose-article"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Ultima actualizare:"), " 2 iunie 2026"), /*#__PURE__*/React.createElement("p", null, "Acești termeni descriu condițiile în care Centru de pregătire Constanța („noi\") oferă servicii de meditații și pregătire școlară. Prin programarea unei ședințe, ești de acord cu cele de mai jos."), /*#__PURE__*/React.createElement("h2", null, "1. Serviciile noastre"), /*#__PURE__*/React.createElement("p", null, "Oferim meditații și pregătire școlară la sediul din Constanța, pentru diverse clase și materii: recuperare la materie, pregătire pentru Evaluarea Națională și Bacalaureat. Lucrăm în grupe restrânse de 2-3 elevi, cu materiale fizice și tablă."), /*#__PURE__*/React.createElement("h2", null, "2. Ședința de cunoaștere gratuită"), /*#__PURE__*/React.createElement("p", null, "Prima ședință, împreună cu testul inițial, este ", /*#__PURE__*/React.createElement("strong", null, "gratuită și fără obligații"), ". Scopul ei e să evaluăm nivelul real al elevului și să stabilim împreună un plan. Nu te obligă să continui colaborarea."), /*#__PURE__*/React.createElement("h2", null, "3. Programare și prezență"), /*#__PURE__*/React.createElement("p", null, "Ședințele se programează din timp, de comun acord. Te rugăm să anunți din timp dacă nu poți ajunge, ca să putem reorganiza grupa și să oferim locul altui elev."), /*#__PURE__*/React.createElement("h2", null, "4. Plata"), /*#__PURE__*/React.createElement("p", null, "Tarifele sunt cele afișate pe pagina ", /*#__PURE__*/React.createElement("a", {
    href: "#/preturi"
  }, "Prețuri"), " și se comunică clar înainte de începerea colaborării. Plata se face conform înțelegerii stabilite la prima ședință (pe ședință sau pe pachet). Eventualele modificări de tarif sunt anunțate din timp și nu afectează ședințele deja plătite."), /*#__PURE__*/React.createElement("h2", null, "5. Anulare și reprogramare"), /*#__PURE__*/React.createElement("p", null, "Poți anula sau reprograma o ședință anunțându-ne cu cel puțin ", /*#__PURE__*/React.createElement("strong", null, "24 de ore înainte"), ", telefonic sau pe WhatsApp. Ședințele anunțate în timp util se reprogramează fără costuri."), /*#__PURE__*/React.createElement("h2", null, "6. Responsabilitățile noastre"), /*#__PURE__*/React.createElement("p", null, "Ne angajăm să oferim pregătire de calitate, cu profesori dedicați și un mediu de învățare potrivit. Rezultatele școlare depind însă de mai mulți factori (implicarea elevului, timpul de studiu acasă), așa că nu putem garanta o anumită notă sau un anumit rezultat la examen."), /*#__PURE__*/React.createElement("h2", null, "7. Responsabilitățile tale"), /*#__PURE__*/React.createElement("p", null, "Pentru rezultate bune, contează prezența constantă, efectuarea temelor recomandate și comunicarea deschisă cu profesorul. Pentru elevii minori, părintele sau tutorele susține colaborarea și ne anunță orice schimbare relevantă."), /*#__PURE__*/React.createElement("h2", null, "8. Modificarea termenilor"), /*#__PURE__*/React.createElement("p", null, "Putem actualiza acești termeni din când în când. Versiunea valabilă e cea publicată pe această pagină, cu data ultimei actualizări de mai sus."), /*#__PURE__*/React.createElement("h2", null, "9. Contact"), /*#__PURE__*/React.createElement("p", null, "Pentru orice întrebare legată de acești termeni: ", /*#__PURE__*/React.createElement("a", {
    href: `mailto:${EMAIL}`
  }, EMAIL), " sau ", PHONE, "."), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-ink-muted italic pt-6"
  }, "Vrem o colaborare clară și corectă. Dacă ceva nu îți e limpede, întreabă-ne oricând."))));
}
Object.assign(window, {
  ContactPage,
  PrivacyPage,
  TermsPage,
  ContactForm
});
