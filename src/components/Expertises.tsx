import { useMemo, useState } from "react";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { CATEGORIES, EXPERTISES, type Expertise } from "../data/expertises";
import { useReveal } from "../hooks/useReveal";

export default function Expertises() {
  const [activeId, setActiveId] = useState(EXPERTISES[4].id); // Études & Enquêtes par défaut (nouveauté)
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("Toutes");
  const head = useReveal<HTMLDivElement>(0.2);

  const filtered = useMemo(
    () => (category === "Toutes" ? EXPERTISES : EXPERTISES.filter((e) => e.category === category)),
    [category]
  );

  const active: Expertise = EXPERTISES.find((e) => e.id === activeId) ?? EXPERTISES[0];
  const ActiveIcon = active.icon;

  const selectCategory = (c: (typeof CATEGORIES)[number]) => {
    setCategory(c);
    const list = c === "Toutes" ? EXPERTISES : EXPERTISES.filter((e) => e.category === c);
    if (list.length && !list.some((e) => e.id === activeId)) setActiveId(list[0].id);
  };

  return (
    <section id="expertises" className="grain relative overflow-hidden bg-navy-950 py-24 text-white sm:py-32">
      <div className="bg-grid-blue absolute inset-0 opacity-60" />
      <div className="absolute top-0 right-[-15%] h-[500px] w-[500px] rounded-full bg-brand-500/20 blur-[130px]" />
      <div className="absolute bottom-0 left-[-10%] h-[400px] w-[400px] rounded-full bg-sky-glow/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div ref={head.ref} className={`reveal ${head.visible ? "is-visible" : ""} flex flex-wrap items-end justify-between gap-8`}>
          <div>
            <p className="flex items-center gap-3 text-[11px] font-extrabold tracking-[0.3em] text-sky-300">
              <span className="h-[2px] w-10 bg-sky-glow" /> 02 / NOS EXPERTISES
            </p>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] font-extrabold tracking-tight">
              Une vision globale.
              <br />
              <span className="font-serif italic font-normal text-sky-glow">Des actions concrètes.</span>
            </h2>
          </div>
          <p className="max-w-sm leading-relaxed text-slate-400">
            Sept expertises complémentaires, les bons leviers au bon moment.
            <span className="mt-2 block font-semibold text-white">Explorez chaque domaine pour découvrir nos livrables et notre impact.</span>
          </p>
        </div>

        {/* category filter */}
        <div className="mt-12 flex flex-wrap gap-2" role="tablist" aria-label="Filtrer les expertises">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={category === c}
              onClick={() => selectCategory(c)}
              className={`rounded-full border px-5 py-2.5 text-[13px] font-bold transition-all duration-300 ${
                category === c
                  ? "border-brand-400 bg-brand-500 text-white shadow-lg shadow-brand-500/40"
                  : "border-white/15 bg-white/5 text-slate-300 hover:border-white/35 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          {/* list */}
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur">
            {filtered.map((e) => {
              const Icon = e.icon;
              const isActive = e.id === activeId;
              return (
                <button
                  key={e.id}
                  onClick={() => setActiveId(e.id)}
                  onMouseEnter={() => setActiveId(e.id)}
                  className={`group relative flex w-full items-center gap-4 border-b border-white/8 px-6 py-5 text-left transition-all duration-300 last:border-b-0 sm:px-7 ${
                    isActive ? "bg-gradient-to-r from-brand-500/25 to-transparent" : "hover:bg-white/5"
                  }`}
                  aria-pressed={isActive}
                >
                  <span className={`absolute inset-y-0 left-0 w-1 bg-sky-glow transition-transform duration-300 ${isActive ? "scale-y-100" : "scale-y-0"}`} />
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition-all duration-300 ${isActive ? "bg-brand-500 text-white shadow-lg shadow-brand-500/50" : "bg-white/8 text-sky-300 group-hover:bg-white/15"}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2.5">
                      <span className="font-display text-base font-extrabold sm:text-lg">{e.title}</span>
                      {e.featured && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-sky-glow/20 px-2.5 py-0.5 text-[9px] font-extrabold tracking-[0.15em] text-sky-200 uppercase">
                          <Sparkles className="h-3 w-3" /> Nouveau
                        </span>
                      )}
                    </span>
                    <span className="mt-0.5 block truncate text-[13px] text-slate-400">{e.short}</span>
                  </span>
                  <span className="font-display text-sm font-bold text-slate-500">{e.number}</span>
                  <ArrowUpRight className={`h-5 w-5 shrink-0 transition-all duration-300 ${isActive ? "translate-x-0 text-sky-glow opacity-100" : "-translate-x-1 opacity-0"}`} />
                </button>
              );
            })}
          </div>

          {/* detail panel */}
          <div key={active.id} className="fade-slide relative overflow-hidden rounded-[2rem] border border-brand-400/25 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 p-8 sm:p-10">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brand-500/25 blur-[80px]" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-xl shadow-brand-500/40">
                  <ActiveIcon className="h-8 w-8 text-white" />
                </span>
                <span className="rounded-full border border-white/15 px-4 py-1.5 text-[10px] font-extrabold tracking-[0.2em] text-sky-200 uppercase">
                  {active.category}
                </span>
              </div>

              <h3 className="mt-7 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{active.title}</h3>
              <p className="mt-4 leading-relaxed text-slate-300">{active.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {active.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/8 px-3.5 py-1.5 text-xs font-semibold text-slate-200">{t}</span>
                ))}
              </div>

              <p className="mt-8 text-[10px] font-extrabold tracking-[0.25em] text-sky-300 uppercase">Ce que nous livrons</p>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {active.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-glow" />
                    {d}
                  </li>
                ))}
              </ul>

              {/* impact bar */}
              <div className="mt-9 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-end justify-between gap-4">
                  <p className="text-sm font-semibold text-slate-300">{active.impact.label}</p>
                  <p className="font-display text-3xl font-extrabold text-white">
                    {active.impact.value.toLocaleString("fr-FR")}
                    <span className="text-sky-glow">{active.impact.suffix}</span>
                  </p>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="bar-grow h-full rounded-full bg-gradient-to-r from-brand-500 to-sky-glow"
                    style={{ width: `${Math.min(100, (active.impact.value / (active.impact.value > 100 ? 10000 : 100)) * 100)}%` }}
                  />
                </div>
              </div>

              <a
                href="#contact"
                data-expertise={active.title}
                onClick={() => {
                  try {
                    sessionStorage.setItem("orognis-expertise", active.title);
                  } catch { /* noop */ }
                }}
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-navy-900 transition-all duration-300 hover:bg-sky-glow hover:text-navy-950"
              >
                Discuter de cette expertise
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Une expertise vous intéresse ? <a href="#contact" className="font-bold text-sky-300 underline-offset-4 hover:underline">Parlons-en directement</a> — nous répondons sous 24 h ouvrées.
        </p>
      </div>
    </section>
  );
}
