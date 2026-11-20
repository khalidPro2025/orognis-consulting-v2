import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, TrendingUp } from "lucide-react";
import { TESTIMONIALS } from "../data/expertises";
import { useReveal } from "../hooks/useReveal";

const SECTORS = ["Institutions publiques", "ONG & fondations", "Marques & retail", "Entreprises & PME", "Éducation & formation", "Santé & social"];

export default function Impact() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const head = useReveal<HTMLDivElement>(0.2);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(t);
  }, [paused]);

  const t = TESTIMONIALS[index];

  return (
    <section id="impact" className="grain relative overflow-hidden bg-navy-950 py-24 text-white sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="animate-pulse-glow absolute top-1/3 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand-500/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div ref={head.ref} className={`reveal ${head.visible ? "is-visible" : ""} text-center`}>
          <p className="flex items-center justify-center gap-3 text-[11px] font-extrabold tracking-[0.3em] text-sky-300">
            <span className="h-[2px] w-10 bg-sky-glow" /> 04 / IMPACT & PREUVES <span className="h-[2px] w-10 bg-sky-glow" />
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] font-extrabold tracking-tight">
            Des résultats qui
            <span className="font-serif italic font-normal text-sky-glow"> parlent d'eux-mêmes.</span>
          </h2>
        </div>

        {/* sectors marquee */}
        <div className="mt-12 overflow-hidden" aria-hidden="true">
          <div className="animate-marquee-slow flex w-max gap-3 pr-3">
            {[...SECTORS, ...SECTORS].map((s, i) => (
              <span key={i} className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-[13px] font-semibold whitespace-nowrap text-slate-200">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* testimonial slider */}
        <div
          className="relative mx-auto mt-14 max-w-4xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote className="absolute -top-8 left-1/2 h-16 w-16 -translate-x-1/2 text-brand-500/30" />
          <div key={index} className="fade-slide rounded-[2.5rem] border border-white/10 bg-white/[0.05] px-7 py-12 text-center backdrop-blur sm:px-14">
            <p className="font-serif text-2xl leading-snug italic sm:text-[2rem]">« {t.quote} »</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <div>
                <p className="font-display font-extrabold">{t.name}</p>
                <p className="text-sm text-slate-400">{t.org}</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/20 px-4 py-2 text-sm font-bold text-sky-200">
                <TrendingUp className="h-4 w-4" /> {t.metric}
              </span>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => setIndex((index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition hover:border-brand-400 hover:bg-brand-500"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Aller au témoignage ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-500 ${i === index ? "w-9 bg-sky-glow" : "w-2.5 bg-white/25 hover:bg-white/50"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setIndex((index + 1) % TESTIMONIALS.length)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition hover:border-brand-400 hover:bg-brand-500"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* big statement */}
        <div className="mt-20 text-center">
          <p className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-tight font-extrabold tracking-tight">
            Une communication qui a du sens.
            <br />
            <span className="text-outline">Et surtout, qui produit de l'effet.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
