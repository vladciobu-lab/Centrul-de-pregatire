// Home page with 3 hero variations.

// ---------- Discrete line icons ----------
function Ic({
  name,
  className = 'w-6 h-6',
  strokeWidth = '1.6'
}) {
  const p = {
    edit: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 20h16"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14.5 5.5l4 4L8 20l-4 1 1-4z"
    })),
    cap: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M2 9l10-4 10 4-10 4z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 11v4.5c0 1 2.7 2.2 6 2.2s6-1.2 6-2.2V11"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22 9v5"
    })),
    compass: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("polygon", {
      points: "16 8 13.5 13.5 8 16 10.5 10.5"
    })),
    users: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "8",
      r: "3.2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3.5 19c0-3.2 2.6-5.2 5.5-5.2s5.5 2 5.5 5.2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 6.5a2.7 2.7 0 010 5.2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17.5 13.6c2 .5 3.5 2 3.5 4.4"
    })),
    badge: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "8.5 12 11 14.6 16 9"
    })),
    clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 7 12 12 15.5 14"
    })),
    focus: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 8.5V5.5a1.5 1.5 0 011.5-1.5H8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 4h2.5A1.5 1.5 0 0120 5.5v3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20 15.5v3a1.5 1.5 0 01-1.5 1.5H16"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 20H5.5A1.5 1.5 0 014 18.5v-3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    })),
    teacher: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 8l8-3 8 3-8 3z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20 8v3.5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "14.5",
      r: "2.3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7.5 21c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4"
    })),
    phone: /*#__PURE__*/React.createElement("path", {
      d: "M6 3h3l1.8 5-2.2 1.4a11 11 0 005 5L15 12l5 1.8V17a2 2 0 01-2.2 2A15 15 0 015 5.2 2 2 0 016 3z"
    }),
    mail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "14",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3.5 7.5l8.5 5.5 8.5-5.5"
    })),
    pin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 21s-6-5.3-6-10a6 6 0 1112 0c0 4.7-6 10-6 10z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "11",
      r: "2"
    })),
    arrow: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13 6l6 6-6 6"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    className: className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, p[name]);
}
function HeroEditorial() {
  const PILLS = ['Prima ședință gratuită', 'Test inițial inclus', 'Grupe de 2-3 elevi', 'La sediu, în Constanța'];
  return /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden bg-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-40 -right-24 w-[30rem] h-[30rem] rounded-full bg-rose/15 blur-3xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute -bottom-44 -left-24 w-[30rem] h-[30rem] rounded-full bg-teal/10 blur-3xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative max-w-7xl mx-auto px-4 md:px-6 lg:px-10 pt-10 md:pt-16 pb-14 md:pb-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid lg:grid-cols-12 gap-10 lg:gap-14 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6 text-center lg:text-left"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "serif-h text-6xl md:text-7xl lg:text-[5.5rem] text-bordo-deep mb-6 leading-[0.98]"
  }, "Din complicat,", /*#__PURE__*/React.createElement("br", null), "facem simplu."), /*#__PURE__*/React.createElement("p", {
    className: "text-lg md:text-xl text-ink max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8"
  }, "Meditații în Constanța pentru ", /*#__PURE__*/React.createElement("strong", {
    className: "text-bordo-deep font-semibold"
  }, "Evaluarea Națională"), ", ", /*#__PURE__*/React.createElement("strong", {
    className: "text-bordo-deep font-semibold"
  }, "Bacalaureat"), " și recuperare la materie."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
  }, /*#__PURE__*/React.createElement(Button, {
    href: "contact",
    variant: "primary",
    size: "lg"
  }, "Programează ședința gratuită")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-x-6 gap-y-2.5 justify-center lg:justify-start"
  }, PILLS.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "inline-flex items-center gap-2 text-sm font-medium text-ink-muted"
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "badge",
    className: "w-4 h-4 text-teal"
  }), " ", t)))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-full max-w-md mx-auto lg:max-w-none",
    style: {
      aspectRatio: '4 / 5'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/hero-main.webp",
    alt: "Sesiune de meditații la Centru de pregătire Constanța",
    className: "absolute inset-0 w-full h-full object-cover rounded-3xl",
    fetchpriority: "high"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute -bottom-5 -left-3 md:-left-6 bg-white rounded-2xl px-5 py-4 shadow-card-hover flex items-center gap-3 max-w-[260px]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-10 h-10 rounded-full bg-bordo/10 flex items-center justify-center text-bordo flex-shrink-0"
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "compass",
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] uppercase tracking-wider text-ink-light"
  }, "Sediu"), /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-semibold text-bordo-deep leading-tight"
  }, "Strada Soveja 90, Constanța"))))))));
}
function HeroSplit() {
  return /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden bg-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 md:px-6 lg:px-10 pt-12 md:pt-16 pb-16 md:pb-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid lg:grid-cols-12 gap-10 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flourish text-teal-deep text-xs uppercase tracking-[0.3em] font-medium mb-5",
    style: {
      justifyContent: 'flex-start'
    }
  }, "Meditații · Constanța"), /*#__PURE__*/React.createElement("h1", {
    className: "serif-h text-6xl md:text-7xl lg:text-8xl text-bordo-deep mb-5 leading-[0.95]"
  }, "From 0", /*#__PURE__*/React.createElement("br", null), "to ", /*#__PURE__*/React.createElement("em", {
    className: "text-teal not-italic"
  }, "Hero"), "."), /*#__PURE__*/React.createElement("p", {
    className: "text-lg md:text-xl text-ink-muted max-w-xl leading-relaxed mb-3"
  }, "Meditații care pleacă de unde ești tu. Pentru orice clasă, orice materie."), /*#__PURE__*/React.createElement("p", {
    className: "text-base text-ink-muted/80 italic max-w-xl leading-relaxed mb-8"
  }, "Știm cum e să fii elev. Nu demult eram și noi."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3"
  }, /*#__PURE__*/React.createElement(Button, {
    href: "contact",
    variant: "primary",
    size: "lg"
  }, "Ședință gratuită"), /*#__PURE__*/React.createElement(Button, {
    href: "preturi",
    variant: "outline",
    size: "lg"
  }, "Vezi prețurile"))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aspect-square relative flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo.webp",
    alt: "",
    className: "relative w-[92%] object-contain animate-float"
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute -bottom-6 -left-6 bg-bordo-deep text-cream rounded-2xl p-5 shadow-card-hover max-w-[220px] hidden md:block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif-h text-3xl text-rose mb-1"
  }, "0 lei"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-cream/80"
  }, "prima ședință + test inițial complet")), /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-4 -right-4 bg-teal text-white rounded-2xl px-5 py-3 shadow-card-hover hidden md:block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-wider opacity-80"
  }, "Sediu"), /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-medium"
  }, "Strada Soveja 90, Constanța"))))));
}
function HeroBold() {
  return /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden bg-bordo-deep text-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 opacity-10",
    style: {
      backgroundImage: 'radial-gradient(circle at 1px 1px, #FAF3E7 1px, transparent 0)',
      backgroundSize: '24px 24px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative max-w-6xl mx-auto px-4 md:px-6 lg:px-10 pt-16 md:pt-24 pb-16 md:pb-28"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 mb-10"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-16 h-16 flex-shrink-0",
    style: {
      filter: 'brightness(0) invert(1)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo.webp",
    alt: "",
    className: "w-full h-full object-contain"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flourish text-rose text-xs uppercase tracking-[0.3em] font-medium",
    style: {
      justifyContent: 'flex-start'
    }
  }, "Meditații · Constanța")), /*#__PURE__*/React.createElement("h1", {
    className: "serif-h text-5xl md:text-7xl lg:text-[6rem] text-cream mb-10 leading-[1.02] max-w-5xl"
  }, "De la ", /*#__PURE__*/React.createElement("span", {
    className: "text-rose italic"
  }, "„nu înțeleg nimic\""), " la ", /*#__PURE__*/React.createElement("span", {
    className: "border-b-4 border-rose pb-1"
  }, "„pot să o fac\""), "."), /*#__PURE__*/React.createElement("p", {
    className: "text-xl md:text-2xl text-cream/80 max-w-2xl leading-relaxed mb-3"
  }, "Pentru orice clasă, orice materie. Plecăm de unde ești tu, nu de unde ar trebui să fii."), /*#__PURE__*/React.createElement("p", {
    className: "text-base text-cream/60 italic max-w-2xl leading-relaxed mb-10"
  }, "Nu există elev „slab\", există explicații care nu i s-au potrivit."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3"
  }, /*#__PURE__*/React.createElement(Button, {
    href: "contact",
    variant: "cream",
    size: "lg"
  }, "Programează ședință gratuită"), /*#__PURE__*/React.createElement(Button, {
    href: "despre",
    variant: "ghost",
    size: "lg",
    className: "!text-cream hover:!bg-cream/10"
  }, "Vezi cine suntem →"))));
}
function VideoPrezentare() {
  const [loaded, setLoaded] = React.useState(false);
  const id = 'cHO5VCknWo8';
  return /*#__PURE__*/React.createElement("div", {
    className: "relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-card bg-bordo-deep",
    style: {
      aspectRatio: '9 / 16'
    }
  }, loaded ? /*#__PURE__*/React.createElement("iframe", {
    className: "absolute inset-0 w-full h-full border-0",
    src: 'https://www.youtube.com/embed/' + id + '?rel=0&modestbranding=1&autoplay=1',
    title: "Prezentare Centru de pregătire Constanța",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }) : /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "absolute inset-0 w-full h-full flex items-center justify-center group bg-bordo-deep/10",
    onClick: () => setLoaded(true),
    "aria-label": "Redă videoclipul de prezentare"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/video-prezentare-thumb.jpg",
    alt: "Prezentare Centru de pregătire Constanța",
    className: "absolute inset-0 w-full h-full object-cover",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("span", {
    className: "relative z-10 w-16 h-16 rounded-full bg-white/95 text-bordo-deep flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 group-active:scale-95"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: "w-7 h-7 ml-1",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5.14v13.72a1 1 0 001.54.84l10.5-6.86a1 1 0 000-1.68L9.54 4.3A1 1 0 008 5.14z"
  })))));
}
function _VideoPrezentareOLD_UNUSED() {
  const videoRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);
  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-card bg-bordo-deep",
    style: {
      aspectRatio: '9 / 16'
    }
  }, /*#__PURE__*/React.createElement("video", {
    ref: videoRef,
    className: "absolute inset-0 w-full h-full object-cover",
    src: "assets/prezentare.mp4#t=0.5",
    controls: true,
    playsInline: true,
    preload: "metadata",
    onPlay: () => setPlaying(true),
    onPause: () => setPlaying(false)
  }, "Browserul tău nu suportă redarea video."), !playing && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: play,
    "aria-label": "Redă videoul",
    className: "absolute inset-0 z-10 flex items-center justify-center group cursor-pointer",
    style: {
      background: 'linear-gradient(to bottom, rgba(36,16,19,0.10), rgba(36,16,19,0.35))'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "relative flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute inset-0 rounded-full bg-cream/30 animate-pulse-ring"
  }), /*#__PURE__*/React.createElement("span", {
    className: "relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-cream/95 text-bordo-deep flex items-center justify-center shadow-card-hover transition-transform duration-200 group-hover:scale-105 group-active:scale-95"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: "w-9 h-9 md:w-10 md:h-10 ml-1"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5.14v13.72a1 1 0 0 0 1.54.84l10.5-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14z"
  }))))));
}
function SediuCarousel() {
  const IMAGES = [{
    src: 'assets/sediu-1.webp',
    alt: 'Sala de meditații cu masă și scaune'
  }, {
    src: 'assets/sediu-2.webp',
    alt: 'Sala de studiu cu lumină naturală'
  }, {
    src: 'assets/sediu-3.jpeg',
    alt: 'Holul și intrarea în săli'
  }, {
    src: 'assets/sediu-4.jpg',
    alt: 'Discuție individuală cu o elevă'
  }, {
    src: 'assets/sediu-5.jpg',
    alt: 'Elevi rezolvând exerciții la tablă'
  }, {
    src: 'assets/sediu-6.jpg',
    alt: 'Ședință de pregătire unu la unu'
  }];
  const [i, setI] = React.useState(0);
  const n = IMAGES.length;
  const go = d => setI(p => (p + d + n) % n);
  const at = k => setI(k);
  React.useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % n), 4000);
    return () => clearInterval(t);
  }, [n]);
  const transformFor = rel => {
    if (rel === 0) return 'translate(-50%, -50%) translateX(0) translateZ(60px) rotateY(0deg) scale(1)';
    if (rel === 1) return 'translate(-50%, -50%) translateX(38%) translateZ(-120px) rotateY(-42deg) scale(0.84)';
    return 'translate(-50%, -50%) translateX(-38%) translateZ(-120px) rotateY(42deg) scale(0.84)';
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "relative w-full select-none",
    style: {
      aspectRatio: '5 / 4'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0",
    style: {
      perspective: '1100px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0",
    style: {
      transformStyle: 'preserve-3d'
    }
  }, IMAGES.map((img, k) => {
    const rel = (k - i + n) % n;
    const front = rel === 0;
    return /*#__PURE__*/React.createElement("div", {
      key: img.src,
      className: "absolute top-1/2 left-1/2 overflow-hidden",
      onClick: () => {
        if (!front) at(k);
      },
      style: {
        width: '80%',
        height: '90%',
        borderRadius: 28,
        transform: transformFor(rel),
        transformStyle: 'preserve-3d',
        transition: 'transform 0.75s cubic-bezier(0.65,0,0.35,1), filter 0.6s ease',
        zIndex: front ? 30 : 10,
        cursor: front ? 'default' : 'pointer',
        boxShadow: front ? '0 30px 60px -18px rgba(20,8,10,0.55)' : '0 16px 36px -16px rgba(20,8,10,0.5)',
        filter: front ? 'none' : 'brightness(0.62) saturate(0.9)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img.src,
      alt: img.alt,
      className: "absolute inset-0 w-full h-full object-cover",
      draggable: "false",
      loading: "lazy"
    }));
  }))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => go(-1),
    "aria-label": "Imaginea anterioară",
    className: "absolute left-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-bordo-deep/55 hover:bg-bordo-deep/85 text-cream backdrop-blur-sm flex items-center justify-center transition-colors z-40"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "w-5 h-5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 18l-6-6 6-6"
  }))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => go(1),
    "aria-label": "Imaginea următoare",
    className: "absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-bordo-deep/55 hover:bg-bordo-deep/85 text-cream backdrop-blur-sm flex items-center justify-center transition-colors z-40"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "w-5 h-5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 18l6-6-6-6"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "absolute -bottom-7 left-1/2 -translate-x-1/2 flex gap-2 z-40"
  }, IMAGES.map((_, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    type: "button",
    onClick: () => at(k),
    "aria-label": 'Mergi la imaginea ' + (k + 1),
    className: "h-2 rounded-full transition-transform duration-300",
    style: {
      width: 22,
      transformOrigin: 'left center',
      transform: k === i ? 'scaleX(1)' : 'scaleX(0.36)',
      backgroundColor: k === i ? '#FFFFFF' : 'rgba(255,255,255,0.45)'
    }
  }))));
}
function HomePage({
  heroVariant
}) {
  const HeroComp = heroVariant === 'split' ? HeroSplit : heroVariant === 'bold' ? HeroBold : HeroEditorial;
  const FOR_WHO = [{
    n: '01',
    title: 'Te pregătești de Evaluare Națională?',
    desc: 'Clasele V-VIII. Acoperim toată materia, exersăm subiectele și mergem pe ritmul tău.',
    href: 'materii',
    icon: 'edit',
    accent: '#0A5360',
    tag: 'Clasele V–VIII'
  }, {
    n: '02',
    title: 'Te pregătești de Bacalaureat?',
    desc: 'Clasele IX-XII. Transformăm „nu înțeleg" în „știu să rezolv".',
    href: 'materii',
    icon: 'cap',
    accent: '#2C6E7F',
    tag: 'Clasele IX–XII'
  }, {
    n: '03',
    title: 'Te-ai pierdut undeva prin materie?',
    desc: 'Orice clasă, orice vârstă. Vino pentru câte ședințe ai nevoie, lucrăm exact pe ce te ține în loc.',
    href: 'servicii/recuperare',
    icon: 'compass',
    accent: '#C2A06B',
    tag: 'Orice clasă'
  }];
  const WHY = [{
    title: 'Profesori tineri care înțeleg',
    desc: 'Am trecut prin aceleași etape. Înțelegem provocările pe care le întâmpini.',
    icon: 'teacher'
  }, {
    title: 'Test inițial gratuit',
    desc: 'O evaluare obiectivă a cunoștințelor, ca bază pentru un plan de pregătire personalizat.',
    icon: 'badge'
  }, {
    title: 'Pe ritmul tău, nu pe al școlii',
    desc: 'La școală urmezi ritmul clasei. La noi, lecția urmează ritmul tău.',
    icon: 'clock'
  }, {
    title: 'Grup restrâns, atenție personalizată',
    desc: 'Grupe de 2-3 elevi, pentru ca atenția să fie reală, nu împărțită superficial.',
    icon: 'users'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroComp, null), /*#__PURE__*/React.createElement("section", {
    className: "px-4 md:px-6 lg:px-10 pt-6 pb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid lg:grid-cols-2 gap-8 lg:gap-14 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center lg:text-left"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "serif-h text-4xl md:text-5xl text-bordo-deep mb-5 leading-tight"
  }, "Vezi cum lucrăm, în 40 de secunde"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg leading-relaxed mb-6 max-w-md mx-auto lg:mx-0 font-medium text-ink-muted"
  }, "O ședință arată mai mult decât o sută de promisiuni. Uită-te la atmosferă, la ritm și în felul în care explicăm, apoi decide."), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-3 mb-8 text-left max-w-md mx-auto lg:mx-0"
  }, ['Explicații pe înțelesul tău, nu pe viteză', 'Atmosferă relaxată, fără presiune', 'Săli liniștite, materiale fizice, tablă albă'].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    className: "flex items-start gap-3 text-lg leading-relaxed font-medium text-ink-muted"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-teal mt-0.5 flex-shrink-0"
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "badge",
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("span", null, t)))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3 justify-center lg:justify-start"
  }, /*#__PURE__*/React.createElement(Button, {
    href: "contact",
    variant: "primary",
    size: "lg"
  }, "Programează ședința gratuită"), /*#__PURE__*/React.createElement(Button, {
    href: WHATSAPP_URL,
    variant: "whatsapp",
    size: "lg"
  }, "Scrie pe WhatsApp"))), /*#__PURE__*/React.createElement("div", {
    className: "mx-auto w-full",
    style: {
      maxWidth: '320px'
    }
  }, /*#__PURE__*/React.createElement(VideoPrezentare, null))))), /*#__PURE__*/React.createElement("section", {
    className: "py-20 md:py-28 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "Alege-ți obiectivul",
    subtitle: "Indiferent de unde pleci, mergem împreună până ajungi unde vrei să fii."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-3 gap-x-8 gap-y-14 max-w-6xl mx-auto"
  }, FOR_WHO.map((f, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 100
  }, /*#__PURE__*/React.createElement("div", {
    className: "for-who-col flex flex-col items-center text-center px-4 md:px-8",
    style: {
      '--accent': f.accent
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative mb-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative",
    style: {
      color: '#0A5360'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    name: f.icon,
    className: "w-12 h-12",
    strokeWidth: "1.4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] font-semibold uppercase tracking-[0.16em] mb-3 whitespace-nowrap",
    style: {
      color: '#0A5360'
    }
  }, f.tag), /*#__PURE__*/React.createElement("h3", {
    className: "serif-h text-[1.7rem] leading-snug text-bordo-deep mb-3.5 text-balance md:min-h-[5rem] flex items-center justify-center"
  }, f.title), /*#__PURE__*/React.createElement("p", {
    className: "text-ink-muted leading-relaxed max-w-[20rem]"
  }, f.desc)))))), /*#__PURE__*/React.createElement("section", {
    className: "py-20 md:py-28 px-4 md:px-6 lg:px-10 bg-white relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "De ce noi",
    subtitle: "Suntem o echipă tânără care chiar a trecut prin asta."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto"
  }, WHY.map((w, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-6 h-full shadow-soft border border-bordo/20 hover:border-bordo/40 transition-colors"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center text-teal-deep mb-4"
  }, /*#__PURE__*/React.createElement(Ic, {
    name: w.icon,
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "serif-h text-xl text-bordo-deep mb-2"
  }, w.title), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-ink-muted leading-relaxed"
  }, w.desc))))))), /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden bg-bordo-deep text-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 opacity-[0.07]",
    style: {
      backgroundImage: 'radial-gradient(circle at 1px 1px, #FAF3E7 1px, transparent 0)',
      backgroundSize: '26px 26px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-16 md:py-24"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "serif-h text-4xl md:text-5xl text-cream mb-5 leading-tight"
  }, "Un spațiu făcut pentru concentrare."), /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-cream/80 leading-relaxed mb-8 max-w-lg"
  }, "Săli liniștite, materiale fizice, tablă albă. Pe Strada Soveja nr. 90 vii, te așezi și chiar înțelegi, fără distrageri."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-x-6 gap-y-3 mb-8"
  }, [['clock', 'Luni-Vineri 9:00 - 20:00'], ['clock', 'Sâmbătă 9:00 - 16:00'], ['users', 'Grupe mici de 2-3 elevi']].map(([ic, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "inline-flex items-center gap-2 text-sm text-cream/90"
  }, /*#__PURE__*/React.createElement(Ic, {
    name: ic,
    className: "w-4 h-4 text-rose"
  }), " ", t))), /*#__PURE__*/React.createElement(Button, {
    href: "contact",
    variant: "cream",
    size: "lg"
  }, "Programează ședința gratuită")), /*#__PURE__*/React.createElement("div", {
    className: "relative w-full",
    style: {
      aspectRatio: '5 / 4'
    }
  }, /*#__PURE__*/React.createElement(SediuCarousel, null))))), /*#__PURE__*/React.createElement("section", {
    id: "cum-lucram",
    className: "py-20 md:py-28 px-4 md:px-6 lg:px-10 max-w-6xl mx-auto"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "De la prima discuție la primul progres",
    subtitle: "Fără grabă. Fără presiune. Personalizat pentru tine."
  }), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 md:space-y-10"
  }, [{
    n: '01',
    title: 'Ședință de cunoaștere gratuită + test inițial',
    desc: 'Stăm cât este nevoie, evaluăm cunoștințele și principiile. Vorbim deschis, iar tu decizi dacă suntem compatibili.'
  }, {
    n: '02',
    title: 'Planul de lucru',
    desc: 'Pe baza evaluării, îți spunem ce este de lucrat: cât timp ne trebuie și ce lecții prioritizăm. În funcție de aceste criterii, alegem un plan potrivit pentru tine.'
  }, {
    n: '03',
    title: 'Plecăm la drum fără presiune',
    desc: 'Lucrăm punctele tale slabe. Reluăm de câte ori este necesar și apreciem fiecare progres realizat. Te încurajăm să adresezi orice întrebare.'
  }].map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 120
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-5 md:gap-10 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif-h text-5xl md:text-7xl lg:text-8xl text-rose/60 leading-none w-14 md:w-24 flex-shrink-0"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 pt-2 md:pt-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "serif-h text-2xl md:text-3xl text-bordo-deep mb-2"
  }, s.title), /*#__PURE__*/React.createElement("p", {
    className: "text-ink-muted text-[15px] md:text-base leading-relaxed"
  }, s.desc))))))), /*#__PURE__*/React.createElement("section", {
    className: "py-20 md:py-28 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "Pe ce materii lucrăm"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
  }, window.SUBJECTS.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
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
  }, s.tagline)))))), /*#__PURE__*/React.createElement("section", {
    className: "py-20 md:py-28 px-4 md:px-6 lg:px-10 bg-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "Prețuri transparente",
    subtitle: "Fără surprize, fără costuri ascunse. Aceleași prețuri pentru toate materiile."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-3 gap-6 items-stretch"
  }, window.PRICES.map((p, i) => {
    const label = p.badge ? p.badge : p.featured ? 'Recomandat' : 'Clasic';
    return /*#__PURE__*/React.createElement(Reveal, {
      key: p.id,
      delay: i * 80
    }, /*#__PURE__*/React.createElement("div", {
      className: `relative rounded-3xl p-8 md:p-9 h-full flex flex-col ${p.featured ? 'bg-bordo-deep text-cream shadow-card-hover sm:-translate-y-3' : 'bg-white border border-bordo/12 shadow-soft'}`
    }, /*#__PURE__*/React.createElement("div", {
      className: `text-[11px] uppercase tracking-[0.22em] font-semibold mb-5 ${p.featured ? 'text-rose-soft' : 'text-teal'}`
    }, label), /*#__PURE__*/React.createElement("h3", {
      className: `serif-h text-2xl md:text-[1.7rem] mb-5 leading-snug ${p.featured ? 'text-cream' : 'text-bordo-deep'}`
    }, p.title), /*#__PURE__*/React.createElement("div", {
      className: "flex items-baseline gap-2 mb-1.5"
    }, /*#__PURE__*/React.createElement("span", {
      className: `serif-h text-6xl leading-none ${p.featured ? '' : 'text-bordo'}`,
      style: p.featured ? {
        color: '#FF4D4D'
      } : undefined
    }, p.price), /*#__PURE__*/React.createElement("span", {
      className: `text-sm ${p.featured ? 'text-cream/90' : 'text-ink-muted'}`
    }, p.unit)), /*#__PURE__*/React.createElement("div", {
      className: `text-sm mb-6 ${p.featured ? 'text-cream/85' : 'text-ink-light'}`
    }, p.duration), /*#__PURE__*/React.createElement("div", {
      className: `h-px w-full mb-6 ${p.featured ? 'bg-cream/15' : 'bg-bordo/10'}`
    }), /*#__PURE__*/React.createElement("ul", {
      className: "space-y-3 mb-2"
    }, p.bullets.map(b => /*#__PURE__*/React.createElement("li", {
      key: b,
      className: `flex items-start gap-2.5 text-sm leading-snug ${p.featured ? 'text-cream' : 'text-ink'}`
    }, /*#__PURE__*/React.createElement("span", {
      className: `mt-0.5 flex-shrink-0 ${p.featured ? 'text-rose' : 'text-teal'}`
    }, /*#__PURE__*/React.createElement(Ic, {
      name: "badge",
      className: "w-4 h-4"
    })), /*#__PURE__*/React.createElement("span", null, b))))));
  })))), /*#__PURE__*/React.createElement("section", {
    className: "py-20 md:py-28 px-4 md:px-6 lg:px-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "Ce spun elevii și părinții"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5"
  }, window.TESTIMONIALS.slice(0, 3).map((t, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t.id,
    delay: i * 100
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    t: t
  })))), /*#__PURE__*/React.createElement("div", {
    className: "text-center mt-10"
  }, /*#__PURE__*/React.createElement(Button, {
    href: "testimoniale",
    variant: "outline",
    size: "md"
  }, "Vezi toate testimonialele →")))), /*#__PURE__*/React.createElement("section", {
    className: "py-20 md:py-28 px-4 md:px-6 lg:px-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-5xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-10 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-7 md:p-8 shadow-soft"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "serif-h text-4xl md:text-5xl text-bordo-deep mb-4 leading-tight"
  }, "Hai să vorbim. Prima ședință e gratuită."), /*#__PURE__*/React.createElement("p", {
    className: "text-ink-muted leading-relaxed mb-7"
  }, "Completează formularul sau scrie-ne pe WhatsApp. Stabilim împreună când vii pentru testul inițial."), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 text-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-3 p-4 rounded-xl bg-cream-warm/60"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-bordo mt-0.5 flex-shrink-0"
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "phone",
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-ink-muted text-xs"
  }, "Telefon"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+40721628936",
    className: "text-bordo-deep font-medium hover:text-bordo"
  }, PHONE))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-3 p-4 rounded-xl bg-cream-warm/60"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-bordo mt-0.5 flex-shrink-0"
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "mail",
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-ink-muted text-xs"
  }, "Email"), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${EMAIL}`,
    className: "text-bordo-deep font-medium hover:text-bordo break-all"
  }, EMAIL))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-3 p-4 rounded-xl bg-cream-warm/60"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-bordo mt-0.5 flex-shrink-0"
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "pin",
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-ink-muted text-xs"
  }, "Sediu"), /*#__PURE__*/React.createElement("div", {
    className: "text-bordo-deep font-medium"
  }, ADDRESS)))), /*#__PURE__*/React.createElement("div", {
    className: "aspect-[4/3] rounded-2xl overflow-hidden shadow-soft relative bg-cream-warm mt-4"
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "Centru de pregătire Constanța",
    src: "https://www.google.com/maps?q=Strada+Soveja+90+Constanta&output=embed",
    className: "absolute inset-0 w-full h-full border-0",
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement(ContactForm, {
    compact: true
  })))));
}
Object.assign(window, {
  HomePage
});
