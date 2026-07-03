// 404 page (subject pages removed).

function NotFound() {
  return /*#__PURE__*/React.createElement("section", {
    className: "min-h-[60vh] flex items-center justify-center px-4 text-center"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "serif-h text-9xl text-rose mb-2"
  }, "404"), /*#__PURE__*/React.createElement("h2", {
    className: "serif-h text-3xl text-bordo-deep mb-3"
  }, "Hmm, nu am găsit pagina."), /*#__PURE__*/React.createElement("p", {
    className: "text-ink-muted mb-7"
  }, "Probabil un link vechi sau o adresă greșită. Hai înapoi acasă."), /*#__PURE__*/React.createElement(Button, {
    href: "acasa",
    variant: "primary"
  }, "Înapoi pe Acasă")));
}
Object.assign(window, {
  NotFound
});