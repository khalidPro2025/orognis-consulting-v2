import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

function Word({ children, delay }: { children: string; delay: number }) {
  return (
    <span className="word-mask">
      <span className="word-inner" style={{ animationDelay: `${delay}ms` }}>
        {children}&nbsp;
      </span>
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [par, setPar] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = sectionRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
      setPar({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="accueil" ref={sectionRef} className="grain relative overflow-hidden bg-navy-950 text-white">
      {/* background layers */}
      <div className="bg-grid-blue absolute inset-0 opacity-70" />
      <div className="animate-pulse-glow absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-brand-500/25 blur-[120px]" />
      <div className="absolute bottom-[-30%] left-[-10%] h-[480px] w-[480px] rounded-full bg-sky-glow/15 blur-[110px]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950 to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-5 pt-36 pb-24 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:pt-44 lg:pb-32">
        {/* Copy */}
        <div>
          <p className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-bold tracking-[0.22em] text-sky-200 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-sky-glow" />
            STRATÉGIE · EXPERTISE · IMPACT
          </p>

          <h1 className="font-display text-[clamp(2.9rem,7vw,5.6rem)] leading-[1.02] font-extrabold tracking-tight">
            <Word delay={80}>Les</Word>
            <Word delay={160}>bonnes</Word>
            <Word delay={240}>idées</Word>
            <br />
            <Word delay={320}>méritent</Word>
            <Word delay={400}>de</Word>
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-sky-glow via-brand-300 to-white">
              <Word delay={480}>rayonner.</Word>
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Nous aidons les marques et les organisations à clarifier leur message, renforcer leur présence
            et créer des connexions durables avec leurs publics — de la stratégie à l'impact mesurable.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-brand-500 to-brand-400 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-brand-500/40 transition-all duration-300 hover:scale-[1.03] hover:shadow-brand-400/50"
            >
              Parlons de votre ambition
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href="#expertises" className="group inline-flex items-center gap-2 text-sm font-bold text-white/85 transition hover:text-white">
              <span className="link-sweep">Découvrir nos expertises</span>
              <ArrowDown className="h-4 w-4 text-sky-glow transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </div>

          {/* mini stats */}
          <dl className="mt-14 grid max-w-lg grid-cols-3 divide-x divide-white/10 border-y border-white/10 py-5">
            {[
              ["7", "expertises"],
              ["120+", "projets accompagnés"],
              ["98%", "clients satisfaits"],
            ].map(([v, l]) => (
              <div key={l} className="px-4 first:pl-0">
                <dt className="sr-only">{l}</dt>
                <dd className="font-display text-2xl font-extrabold text-white sm:text-3xl">{v}</dd>
                <dd className="mt-1 text-[11px] font-semibold tracking-wide text-slate-400 uppercase">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Visual — parallax orb system */}
        <div className="relative mx-auto hidden h-[520px] w-full max-w-[520px] items-center justify-center sm:flex" aria-hidden="true">
          <div
            className="relative transition-transform duration-300 ease-out"
            style={{ transform: `translate(${par.x * 18}px, ${par.y * 14}px)` }}
          >
            {/* orbits */}
            <div className="animate-spin-slow absolute top-1/2 left-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12">
              <span className="absolute top-6 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-sky-glow shadow-[0_0_18px_#38BDF8]" />
              <span className="absolute right-10 bottom-16 h-2 w-2 rounded-full bg-brand-300" />
            </div>
            <div className="animate-spin-rev absolute top-1/2 left-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/15">
              <span className="absolute bottom-4 left-8 h-2.5 w-2.5 rounded-full bg-white/80" />
            </div>

            {/* main orb */}
            <div className="animate-float relative z-10 grid h-[250px] w-[250px] place-items-center rounded-full bg-gradient-to-br from-brand-300 via-brand-500 to-navy-700 shadow-[0_40px_100px_rgba(23,105,170,.55)]">
              <span className="absolute inset-3 rounded-full border border-white/25" />
              <span className="font-display text-[120px] leading-none font-extrabold tracking-tighter text-white drop-shadow-lg">O.</span>
              <span className="absolute -right-3 -bottom-2 rounded-full bg-white px-4 py-2 text-[10px] font-extrabold tracking-[0.18em] text-navy-900 shadow-xl">
                MAKE IT MATTER
              </span>
            </div>

            {/* floating tags */}
            <div className="animate-float absolute -left-16 top-8 z-20 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md" style={{ animationDelay: ".6s" }}>
              <p className="text-[9px] font-bold tracking-[0.25em] text-sky-200">IDÉES</p>
              <p className="font-display text-sm font-extrabold">EN MOUVEMENT</p>
            </div>
            <div className="animate-float absolute -right-10 bottom-10 z-20 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md" style={{ animationDelay: "1.2s" }}>
              <p className="text-[9px] font-bold tracking-[0.25em] text-sky-200">IMPACT</p>
              <p className="font-display text-sm font-extrabold">MESURABLE</p>
            </div>
            <span className="animate-spin-slow absolute top-2 right-6 text-3xl text-sky-glow">✳</span>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 pb-8 text-[10px] font-bold tracking-[0.25em] text-slate-500 sm:px-8">
        <span>01 — 03 · FAIRE ÉMERGER VOTRE MARQUE</span>
        <span className="hidden items-center gap-3 sm:flex">
          SCROLL
          <span className="flex h-9 w-5 justify-center rounded-full border border-white/25 pt-1.5">
            <span className="animate-scroll-dot h-1.5 w-1.5 rounded-full bg-sky-glow" />
          </span>
        </span>
      </div>
    </section>
  );
}
