import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { materii, testimoniale } from "@/lib/data";
import { articole } from "@/lib/blog";
import { CheckCircle, Star, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Centrul de Pregătire Constanța — De la 0 la Hero",
  description: "Meditații personalizate pentru Evaluare Națională și Bacalaureat. Matematică, Română și alte materii. Prima ședință gratuită.",
};

export default function HomePage() {
  const featuredArticle = articole.find((a) => a.featured) || articole[0];
  const featuredTestimoniale = testimoniale.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 size-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-10 right-1/4 size-80 rounded-full bg-secondary/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-6">
            <Star className="size-3.5 fill-current" />
            Prima ședință gratuită — fără obligații
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            De la <span className="text-primary">0 la Hero</span>
            <br />
            la orice materie
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Pregătire personalizată pentru Evaluare Națională și Bacalaureat în Constanța.
            Lucrăm de unde ești, nu de unde ar trebui să fii.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <Link href="/contact/">Ședință gratuită →</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/materii/">Vezi materiile</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-10">
          De ce Centrul de Pregătire?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              titlu: "Prima ședință gratuită",
              desc: "Cunoaștem elevul, facem un test scurt, stabilim un plan. Fără presiune, fără obligații.",
            },
            {
              titlu: "Personalizat, nu generic",
              desc: "Nu predăm la tablă pentru 10 elevi. Lucrăm cu fiecare în parte, de unde se află.",
            },
            {
              titlu: "Rezultate reale",
              desc: "Elevi cu 4 la simulare care au luat BAC-ul. Elevi de clasa 5 care au recuperat în 3 ședințe.",
            },
            {
              titlu: "Onestitate totală",
              desc: "Nu promitem note mari ca să luăm banii. Spunem sincer ce e fezabil și în cât timp.",
            },
            {
              titlu: "Orice punct de start",
              desc: "Indiferent de unde ești acum, construim de acolo. Fără judecată, fără comparații.",
            },
            {
              titlu: "Constanța — prezenți fizic",
              desc: "Ședințe față în față, pentru un contact real și o pregătire mai eficientă.",
            },
          ].map((item) => (
            <div key={item.titlu} className="flex gap-3">
              <CheckCircle className="size-5 text-secondary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">{item.titlu}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Materii */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-10">
            Materiile pe care le predăm
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {materii.map((materie) => (
              <Card key={materie.slug}>
                <CardHeader>
                  <div className={`inline-flex size-10 items-center justify-center rounded-lg text-xl ${materie.culoare} mb-1`}>
                    {materie.icon}
                  </div>
                  <CardTitle>{materie.titlu}</CardTitle>
                  <CardDescription>{materie.descriere}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-1.5">
                    {materie.examene.map((ex) => (
                      <span
                        key={ex}
                        className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/materii/">Toate materiile <ArrowRight className="size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimoniale */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-10">
          Ce spun elevii și părinții
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredTestimoniale.map((t) => (
            <Card key={t.id}>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground italic mb-4">"{t.citat}"</p>
                <div className="border-t border-border pt-3 mt-auto">
                  <p className="font-medium text-sm">{t.nume}</p>
                  <p className="text-xs text-muted-foreground">{t.rol}</p>
                  <span className="mt-1.5 inline-block rounded-full bg-primary/10 text-primary px-2 py-0.5 text-xs">
                    {t.rezultat}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link href="/testimoniale/">Toate testimonialele <ArrowRight className="size-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Blog preview */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-10">
            Resurse gratuite
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {articole.slice(0, 2).map((articol) => (
              <Card key={articol.slug}>
                <CardHeader>
                  <span className="text-xs text-muted-foreground">{articol.categorie}</span>
                  <CardTitle className="mt-1">{articol.titlu}</CardTitle>
                  <CardDescription>{articol.descriere}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={`/blog/${articol.slug}/`}
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Citește articolul <ArrowRight className="size-3.5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/blog/">Toate articolele <ArrowRight className="size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">
          Gata să începem?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Prima ședință e gratuită. Vedem unde ești, ce ai nevoie, și dacă putem ajuta.
          Fără presiune, fără obligații.
        </p>
        <Button asChild size="lg">
          <Link href="/contact/">Programează ședința gratuită</Link>
        </Button>
      </section>
    </>
  );
}
