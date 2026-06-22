"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = React.useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    const data = new FormData(e.target);
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">Contactează-ne</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Prima ședință e gratuită. Trimite-ne un mesaj și revenim în aceeași zi (sau pe WhatsApp în câteva minute).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Trimite un mesaj</CardTitle>
          </CardHeader>
          <CardContent>
            {status === "success" ? (
              <div className="text-center py-8">
                <p className="text-lg font-semibold text-primary mb-2">Mesaj trimis!</p>
                <p className="text-muted-foreground">Revenim în câteva ore. Mulțumim!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block" htmlFor="name">
                    Nume și prenume
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 transition-all"
                    placeholder="Ex: Ion Popescu"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 transition-all"
                    placeholder="email@exemplu.ro"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block" htmlFor="telefon">
                    Telefon (opțional)
                  </label>
                  <input
                    id="telefon"
                    name="telefon"
                    type="tel"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 transition-all"
                    placeholder="07XX XXX XXX"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block" htmlFor="clasa">
                    Clasa elevului
                  </label>
                  <select
                    id="clasa"
                    name="clasa"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 transition-all"
                  >
                    <option value="">Selectează clasa</option>
                    {Array.from({ length: 8 }, (_, i) => i + 5).map((c) => (
                      <option key={c} value={c}>Clasa a {c}-a</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block" htmlFor="mesaj">
                    Mesaj
                  </label>
                  <textarea
                    id="mesaj"
                    name="mesaj"
                    rows={4}
                    required
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 transition-all resize-none"
                    placeholder="Spune-ne pe scurt situația și cum te putem ajuta..."
                  />
                </div>
                {status === "error" && (
                  <p className="text-sm text-destructive">
                    Ceva n-a mers. Încearcă din nou sau scrie pe WhatsApp.
                  </p>
                )}
                <Button type="submit" className="w-full" disabled={status === "loading"}>
                  {status === "loading" ? "Se trimite..." : "Trimite mesajul"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Contact info */}
        <div className="space-y-4">
          <Card>
            <CardContent className="pt-5">
              <div className="flex gap-3">
                <MessageCircle className="size-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">WhatsApp</p>
                  <a
                    href="https://wa.me/40700000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    0700 000 000 — răspundem rapid
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-5">
              <div className="flex gap-3">
                <Mail className="size-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Email</p>
                  <a
                    href="mailto:contact@centrupregatire.ro"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    contact@centrupregatire.ro
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-5">
              <div className="flex gap-3">
                <MapPin className="size-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Locație</p>
                  <p className="text-sm text-muted-foreground">Constanța, România</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-5">
              <div className="flex gap-3">
                <Clock className="size-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Program</p>
                  <p className="text-sm text-muted-foreground">Luni – Vineri: 14:00 – 20:00</p>
                  <p className="text-sm text-muted-foreground">Sâmbătă: 10:00 – 15:00</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
            <p className="font-medium text-sm text-primary mb-1">Prima ședință e gratuită</p>
            <p className="text-sm text-muted-foreground">
              Cunoaștem elevul, facem un test scurt de nivel și stabilim împreună un plan.
              Fără presiune, fără obligații de a continua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
