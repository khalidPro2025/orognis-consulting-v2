import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { PROCESS_STEPS } from "../data/expertises";
import { useReveal } from "../hooks/useReveal";

export default function Approche() {
  const [active, setActive] = useState(0);
  const head = useReveal<HTMLDivElement>(0.2);
  const step = PROCESS_STEPS[active];

  return (
    <section id="approche" className="relative overflow-hidden bg-ice-50 py-24 sm:py-32">
      <div className="bg-grid-light absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div ref={head.ref} className={`reveal ${head.visible ? "is-visible" : ""} text-center`}>
          <p className="flex items-center justify-center gap-3 text-[11px] font-extrabold tracking-[0.3em] text-brand-500">
            <span className="h-[2px] w-10 bg-brand-500" /> 03 / NOTRE APPROCHE <span className="h-[2px] w-10 bg-brand-500" />
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] font-extrabold tracking-tight text-navy-900">
            Écouter. Comprendre.
            <br />
            <span className="font-serif italic font-normal text-brand-500">Imaginer. Déployer.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-500">
            Pas de recette toute faite. Nous partons de vos enjeux pour concevoir une communication juste, lisible et utile.
          </p>
        </div>

        {/* stepper */}
        <div className="relative mt-16">
          <div className="absolute top-[26px] right-[12%] left-[12%] hidden h-[2px] bg-brand-500/15 lg:block" />
          <div
            className="absolute top-[26px] left-[12%] hidden h-[2px] bg-gradient-to-r from-brand-500 to-sky-glow transition-all duration-700 lg:block"
            style={{ width: `calc(${(active / (PROCESS_STEPS.length - 1)) * 76}% )` }}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((s, i) => {
              const isActive = i === active;
              const isDone = i < active;
              return (
                <button
                  key={s.number}
                  onClick={() => setActive(i)}
                  className={`group relative rounded-[1.75rem] border p-6 text-left transition-all duration-500 ${
                    isActive
                      ? "border-brand-500 bg-navy-950 text-white shadow-2xl shadow-brand-500/25 lg:-translate-y-2"
                      : "border-brand-500/15 bg-white hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-xl hover:shadow-brand-500/10"
                  }`}
                  aria-pressed={isActive}
                >
                  <span
                    className={`relative z-10 grid h-[52px] w-[52px] place-items-center rounded-full font-display text-sm font-extrabold transition-all duration-500 ${
                      isActive
                        ? "bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-lg shadow-brand-500/50"
                        : isDone
                          ? "bg-brand-500 text-white"
                          : "bg-ice-100 text-brand-600 group-hover:bg-brand-500 group-hover:text-white"
                    }`}
                  >
                    {isDone ? <Check className="h-5 w-5" /> : s.number}
                  </span>
                  <span className={`mt-5 block font-display text-xl font-extrabold ${isActive ? "text-white" : "text-navy-900"}`}>{s.title}</span>
                  <span className={`mt-1 block text-[11px] font-bold tracking-[0.18em] uppercase ${isActive ? "text-sky-300" : "text-brand-500"}`}>{s.duration}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* detail */}
        <div key={step.number} className="fade-slide mt-6 grid gap-8 rounded-[2rem] border border-brand-500/15 bg-white p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-display text-5xl font-extrabold text-brand-500/15">{step.number}</p>
            <h3 className="mt-2 font-display text-2xl font-extrabold text-navy-900 sm:text-3xl">{step.title} — {step.duration}</h3>
            <p className="mt-3 max-w-2xl leading-relaxed text-slate-500">{step.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {step.points.map((p) => (
                <li key={p} className="inline-flex items-center gap-2 rounded-full bg-ice-100 px-4 py-2 text-[13px] font-semibold text-navy-800">
                  <Check className="h-4 w-4 text-brand-500" /> {p}
                </li>
              ))}
            </ul>
          </div>
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-brand-500 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-brand-500/35 transition-all duration-300 hover:bg-brand-400"
          >
            Démarrer à l'étape {step.number}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
