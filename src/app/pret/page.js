import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Prețuri — Centrul de Pregătire Constanța",
  description: "Tarife transparente pentru meditații. Prima ședință gratuită, fără obligații.",
};

export default function PretPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">Prețuri</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Transparent, fără surprize. Prima ședință e gratuită pentru toată lumea.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card>
          <CardHeader>
            <CardTitle>Ședință individuală</CardTitle>
            <CardDescription>O singură ședință, plătită separat</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-heading font-bold text-primary mb-4">
              De discutat <span className="text-base font-normal text-muted-foreground">/ ședință</span>
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "60-90 minute per ședință",
                "Materie și nivel personalizat",
                "Feedback după fiecare ședință",
                "Fără abonament obligatoriu",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle className="size-4 text-secondary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="ring-2 ring-primary/30">
          <CardHeader>
            <div className="inline-flex items-center rounded-full bg-primary/10 text-primary px-2.5 py-0.5 text-xs font-medium mb-1 w-fit">
              Recomandat
            </div>
            <CardTitle>Pachet lunar</CardTitle>
            <CardDescription>4-8 ședințe pe lună, tarif redus</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-heading font-bold text-primary mb-4">
              Negociabil <span className="text-base font-normal text-muted-foreground">/ lună</span>
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "1-2 ședințe pe săptămână",
                "Plan de progres lunar",
                "Disponibilitate mai mare în perioadele de examen",
                "Comunicare continuă cu părinții",
                "Ajustăm frecvența după nevoie",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle className="size-4 text-secondary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-xl border border-border bg-muted/30 p-6 mb-8">
        <h2 className="font-heading font-semibold mb-3">De ce nu afișăm prețuri fixe?</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Tariful depinde de câțiva factori: materia, clasa, frecvența ședințelor și nevoile specifice.
          Preferăm să discutăm după ședința gratuită, când știm exact ce presupune pregătirea —
          astfel ne asigurăm că prețul e corect pentru ambele părți.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mt-2">
          Ce putem promite: nu existe costuri ascunse și nu prelungim nejustificat durata pregătirii.
        </p>
      </div>

      <div className="text-center">
        <p className="text-muted-foreground mb-4">
          Prima ședință e gratuită — vino să ne cunoaștem mai întâi.
        </p>
        <Button asChild size="lg">
          <Link href="/contact/">Programează ședința gratuită</Link>
        </Button>
      </div>
    </div>
  );
}
