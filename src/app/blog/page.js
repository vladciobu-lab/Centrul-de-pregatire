import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { articole } from "@/lib/blog";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blog — Centrul de Pregătire Constanța",
  description: "Articole și ghiduri gratuite despre pregătirea pentru Evaluare Națională, Bacalaureat și tehnici de învățare.",
};

export default function BlogPage() {
  const sorted = [...articole].sort((a, b) => new Date(b.data) - new Date(a.data));

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-10">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">Blog</h1>
        <p className="text-muted-foreground text-lg">
          Articole gratuite despre pregătire, tehnici de învățare și tot ce ține de examene.
        </p>
      </div>

      <div className="space-y-4">
        {sorted.map((articol) => (
          <Card key={articol.slug}>
            <CardHeader>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-muted-foreground">{articol.categorie}</span>
                <span className="text-xs text-muted-foreground">·</span>
                <time className="text-xs text-muted-foreground">
                  {new Date(articol.data).toLocaleDateString("ro-RO", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <CardTitle className="text-lg">{articol.titlu}</CardTitle>
              <CardDescription>{articol.descriere}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {articol.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${articol.slug}/`}
                  className="text-sm text-primary hover:underline inline-flex items-center gap-1 shrink-0"
                >
                  Citește <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
