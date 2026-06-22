// 404 page (subject pages removed).

function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 text-center">
      <div>
        <div className="serif-h text-9xl text-rose mb-2">404</div>
        <h2 className="serif-h text-3xl text-bordo-deep mb-3">Hmm, nu am găsit pagina.</h2>
        <p className="text-ink-muted mb-7">Probabil un link vechi sau o adresă greșită. Hai înapoi acasă.</p>
        <Button href="acasa" variant="primary">Înapoi pe Acasă</Button>
      </div>
    </section>
  );
}

Object.assign(window, { NotFound });
