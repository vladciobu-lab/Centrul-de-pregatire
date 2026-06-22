import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Despre noi — Centrul de Pregătire Constanța",
  description: "Cine suntem, cum gândim pregătirea și ce ne diferențiază de meditațiile clasice.",
};

export default function DespreNoiPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-10">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">Despre noi</h1>
        <p className="text-muted-foreground text-lg">
          Suntem Centrul de Pregătire Constanța — un grup mic de profesori care cred
          că orice elev poate progresa dacă i se explică pe înțelesul lui.
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
        <section>
          <h2 className="font-heading text-xl font-semibold mb-3">De ce am început</h2>
          <p className="text-muted-foreground leading-relaxed">
            Am văzut prea mulți elevi care credeau că "nu sunt buni la matematică" sau că
            "nu au talent la română" — și în realitate aveau pur și simplu goluri din ani anteriori
            pe care nimeni nu le-a identificat și rezolvat la timp.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Centrul de Pregătire a pornit dintr-o convingere simplă: dacă explici corect, de la nivelul
            potrivit, fără să judeci de unde vine elevul, orice materie devine abordabilă.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold mb-3">Cum lucrăm</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-primary font-bold mt-0.5">→</span>
              <span>
                <strong className="text-foreground">Prima ședință gratuită:</strong> discuție, test scurt de nivelul, plan concret.
                Fără obligații de a continua.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold mt-0.5">→</span>
              <span>
                <strong className="text-foreground">Identificăm golurile reale:</strong> nu trecem direct la materia din clasa a 8-a
                dacă baza din clasa a 6-a e șubredă.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold mt-0.5">→</span>
              <span>
                <strong className="text-foreground">Plan realist, nu promisiuni:</strong> spunem sincer ce e fezabil în timp,
                nu ce vrea să audă părintele.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold mt-0.5">→</span>
              <span>
                <strong className="text-foreground">Feedback constant:</strong> părintele știe ce s-a lucrat, ce s-a înțeles
                și ce urmează.
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold mb-3">Ce ne diferențiază</h2>
          <p className="text-muted-foreground leading-relaxed">
            Nu suntem o meditație unde profesorul rezolvă exercițiile la tablă și elevul copiază.
            Nu promitem că transformăm un elev cu 5 în olimpic în 3 săptămâni.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Suntem onești, personalizăm fiecare traseu de pregătire și lucrăm de la nivelul real
            al elevului — nu de la nivelul la care ar fi trebuit să fie.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-heading text-xl font-semibold mb-3">Vino să ne cunoști</h2>
          <p className="text-muted-foreground mb-4">
            Prima ședință e gratuită. Venim fără așteptări și vă lăsăm să decideți dacă
            suntem potrivita pentru voi.
          </p>
          <Button asChild>
            <Link href="/contact/">Programează o ședință gratuită</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
