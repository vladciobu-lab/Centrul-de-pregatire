import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { testimoniale } from "@/lib/data";

export const metadata = {
  title: "Testimoniale — Centrul de Pregătire Constanța",
  description: "Ce spun elevii și părinții despre pregătirea la Centrul de Pregătire Constanța.",
};

const tipLabel = {
  elev: "Elev",
  parinte: "Părinte",
  recuperare: "Recuperare",
};

const tipColor = {
  elev: "bg-secondary/10 text-secondary",
  parinte: "bg-primary/10 text-primary",
  recuperare: "bg-muted text-muted-foreground",
};

export default function TestimonialesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ce spun elevii și părinții</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Povești reale, fără filtre. De la elevi care au venit cu îndoieli și au plecat cu rezultate.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimoniale.map((t) => (
          <Card key={t.id}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-heading font-semibold text-base shrink-0">
                  {t.nume.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{t.nume}</p>
                  <p className="text-xs text-muted-foreground">{t.rol}</p>
                </div>
                <span className={`ml-auto rounded-full px-2.5 py-0.5 text-xs font-medium ${tipColor[t.tip]}`}>
                  {tipLabel[t.tip]}
                </span>
              </div>
              <p className="text-sm text-muted-foreground italic mb-4">"{t.citat}"</p>
              <div className="rounded-lg bg-muted/50 px-3 py-2">
                <p className="text-xs text-muted-foreground">Materie: <strong className="text-foreground">{t.materie}</strong></p>
                <p className="text-xs text-muted-foreground">Rezultat: <strong className="text-primary">{t.rezultat}</strong></p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-4">Vrei să fii următorul pe această listă?</p>
        <Button asChild>
          <Link href="/contact/">Programează ședința gratuită</Link>
        </Button>
      </div>
    </div>
  );
}
