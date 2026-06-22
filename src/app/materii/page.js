import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { materii } from "@/lib/data";

export const metadata = {
  title: "Materii — Centrul de Pregătire Constanța",
  description: "Pregătire pentru Evaluare Națională și Bacalaureat: Română, Matematică, Logică, Istorie, Geografie, Biologie.",
};

export default function MateriiPage() {
  const materiiEN = materii.filter((m) => m.examene.includes("EN"));
  const materiiBAC = materii.filter((m) => m.examene.includes("BAC"));

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">Materiile pe care le predăm</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Pregătire pentru Evaluare Națională (clasa a 8-a) și Bacalaureat (clasa a 12-a),
          dar și recuperare și consolidare pentru orice clasă.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="font-heading text-xl font-semibold mb-6 flex items-center gap-2">
          <span className="rounded-full bg-secondary/10 text-secondary px-3 py-0.5 text-sm">EN</span>
          Evaluare Națională — clasa a 8-a
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {materiiEN.map((materie) => (
            <Card key={materie.slug}>
              <CardHeader>
                <div className={`inline-flex size-10 items-center justify-center rounded-lg text-xl ${materie.culoare} mb-1`}>
                  {materie.icon}
                </div>
                <CardTitle>{materie.titlu}</CardTitle>
                <CardDescription>{materie.descriere}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-heading text-xl font-semibold mb-6 flex items-center gap-2">
          <span className="rounded-full bg-primary/10 text-primary px-3 py-0.5 text-sm">BAC</span>
          Bacalaureat — clasa a 12-a
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {materiiBAC.map((materie) => (
            <Card key={materie.slug}>
              <CardHeader>
                <div className={`inline-flex size-10 items-center justify-center rounded-lg text-xl ${materie.culoare} mb-1`}>
                  {materie.icon}
                </div>
                <CardTitle>{materie.titlu}</CardTitle>
                <CardDescription>{materie.descriere}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-8 text-center">
        <h2 className="font-heading text-xl font-semibold mb-3">Nu găsești materia ta?</h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Contactează-ne — s-ar putea să putem ajuta și pentru alte materii sau clase.
          Prima ședință e gratuită oricum.
        </p>
        <Button asChild>
          <Link href="/contact/">Contactează-ne</Link>
        </Button>
      </section>
    </div>
  );
}
