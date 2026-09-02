"use client";

// Zeigt die Antwort des Modells an.
//
// Unter dem Text steht ein Knopf, der die Antwort in die Zwischenablage legt.
// Nach dem Klick bestätigt er das für zwei Sekunden und fällt dann zurück.

import { useState } from "react";

type Props = {
  text: string;
};

export default function Ergebnis({ text }: Props) {
  const [kopiert, setKopiert] = useState(false);

  async function kopieren() {
    try {
      await navigator.clipboard.writeText(text);
      setKopiert(true);
      setTimeout(() => setKopiert(false), 2000);
    } catch {
      setKopiert(false);
    }
  }

  return (
    <section className="mt-10">
      <div className="horizont" />
      <h2 className="neon-cyan mt-5 text-xs font-bold uppercase tracking-[0.24em]">
        Ergebnis
      </h2>
      <p className="mt-4 whitespace-pre-wrap rounded-xl border border-cyan/30 bg-nacht/50 p-6 text-[15px] leading-relaxed text-hell/90">
        {text}
      </p>
      <button
        type="button"
        onClick={kopieren}
        className="mt-5 rounded-full border border-cyan/40 px-7 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan transition hover:border-cyan hover:shadow-[0_0_20px_-6px_rgba(34,230,245,0.9)]"
      >
        {kopiert ? "Kopiert" : "Text kopieren"}
      </button>
    </section>
  );
}
