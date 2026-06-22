import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { articole } from "@/lib/blog";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return articole.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const articol = articole.find((a) => a.slug === params.slug);
  if (!articol) return {};
  return {
    title: `${articol.titlu} — Centrul de Pregătire Constanța`,
    description: articol.descriere,
  };
}

function renderContent(text) {
  const lines = text.split("\n");
  const elements = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="font-heading text-xl font-semibold mt-8 mb-3">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="font-heading text-lg font-semibold mt-6 mb-2">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote key={key++} className="border-l-4 border-primary/30 pl-4 italic text-muted-foreground my-4">
          {line.slice(2)}
        </blockquote>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={key++} className="ml-4 text-muted-foreground list-disc list-inside">
          {line.slice(2)}
        </li>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={key++} className="font-semibold text-foreground mt-4">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.trim() === "---") {
      elements.push(<hr key={key++} className="border-border my-6" />);
    } else if (line.trim() !== "") {
      const rendered = line
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>');
      elements.push(
        <p
          key={key++}
          className="text-muted-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: rendered }}
        />
      );
    }
  }

  return elements;
}

export default function BlogArticolPage({ params }) {
  const articol = articole.find((a) => a.slug === params.slug);
  if (!articol) notFound();

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <Link
        href="/blog/"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
      >
        <ArrowLeft className="size-3.5" /> Înapoi la blog
      </Link>

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-primary/10 text-primary px-3 py-0.5 text-xs">
            {articol.categorie}
          </span>
          <time className="text-xs text-muted-foreground">
            {new Date(articol.data).toLocaleDateString("ro-RO", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
        <h1 className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-4">
          {articol.titlu}
        </h1>
        <p className="text-lg text-muted-foreground">{articol.descriere}</p>
      </header>

      <article className="space-y-3">
        {renderContent(articol.continut)}
      </article>

      <div className="mt-12 rounded-xl border border-border bg-card p-6 text-center">
        <p className="font-heading font-semibold mb-2">Ai nevoie de ajutor personalizat?</p>
        <p className="text-sm text-muted-foreground mb-4">
          Prima ședință e gratuită. Stabilim împreună dacă și cum te putem ajuta.
        </p>
        <Button asChild>
          <Link href="/contact/">Programează ședința gratuită</Link>
        </Button>
      </div>
    </div>
  );
}
