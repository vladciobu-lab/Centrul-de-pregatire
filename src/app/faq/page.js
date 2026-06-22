"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { faq } from "@/lib/data";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

function FaqItem({ intrebare, raspuns }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-sm pr-4">{intrebare}</span>
        <ChevronDown
          className={cn("size-4 text-muted-foreground shrink-0 transition-transform", open && "rotate-180")}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3 bg-muted/20">
          {raspuns}
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">Întrebări frecvente</h1>
        <p className="text-muted-foreground text-lg">
          Lucruri pe care ni le întreabă de obicei înainte de prima ședință.
        </p>
      </div>

      <div className="space-y-3">
        {faq.map((item, i) => (
          <FaqItem key={i} intrebare={item.intrebare} raspuns={item.raspuns} />
        ))}
      </div>

      <div className="text-center mt-10">
        <p className="text-muted-foreground mb-4">Nu ai găsit răspunsul? Scrie-ne direct.</p>
        <Button asChild>
          <Link href="/contact/">Contactează-ne</Link>
        </Button>
      </div>
    </div>
  );
}
