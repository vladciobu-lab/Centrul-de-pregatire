import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <p className="font-heading font-semibold text-primary mb-2">Centrul de Pregătire Constanța</p>
          <p className="text-sm text-muted-foreground">
            Meditații personalizate pentru Evaluare Națională și Bacalaureat.
          </p>
        </div>

        <div>
          <p className="font-medium text-sm mb-3">Pagini</p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-primary transition-colors">Acasă</Link></li>
            <li><Link href="/materii/" className="hover:text-primary transition-colors">Materii</Link></li>
            <li><Link href="/despre-noi/" className="hover:text-primary transition-colors">Despre noi</Link></li>
            <li><Link href="/blog/" className="hover:text-primary transition-colors">Blog</Link></li>
            <li><Link href="/contact/" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-sm mb-3">Contact</p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>Constanța, România</li>
            <li>
              <a href="https://wa.me/40700000000" className="hover:text-primary transition-colors">
                WhatsApp: 0700 000 000
              </a>
            </li>
            <li>
              <a href="mailto:contact@centrupregatire.ro" className="hover:text-primary transition-colors">
                contact@centrupregatire.ro
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-4">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Centrul de Pregătire Constanța. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
}
