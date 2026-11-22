import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useReveal, useCounter, formatNumber } from "../hooks/useReveal";

const STATS = [
  { value: 120, suffix: "+", label: "projets accompagnés", decimals: 0 },
  { value: 8500, suffix: "+", label: "répondants enquêtés / an", decimals: 0 },
  { value: 640, suffix: "+", label: "apprenants formés", decimals: 0 },
  { value: 98, suffix: "%", label: "de clients satisfaits", decimals: 0 },
];

const VALUES = [
  "Réflexion stratégique avant tout",
  "Créativité ancrée dans vos enjeux",
  "Maîtrise des outils digitaux",
  "Impact mesuré, résultats suivis",
];

function Stat({ value, suffix, label, decimals, start }: (typeof STATS)[number] & { start: boolean }) {
  const v = useCounter(value, start);
  return (
    <div className="group rounded-3xl border border-brand-500/15 bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-500/40 hover:shadow-xl hover:shadow-brand-500/10">
      <p className="font-display text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">
        {formatNumber(v, decimals)}
        <span className="text-brand-500">{suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium text-slate-500">{label}</p>
    </div>
  );
}

export default function Agence() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.25);
  const head = useReveal<HTMLDivElement>(0.2);

  return (
    <section id="agence" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="bg-grid-light absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div ref={head.ref} className={`reveal ${head.visible ? "is-visible" : ""}`}>
          <p className="flex items-center gap-3 text-[11px] font-extrabold tracking-[0.3em] text-brand-500">
            <span className="h-[2px] w-10 bg-brand-500" /> 01 / QUI SOMMES-NOUS
          </p>
        </div>

        <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1.2fr_.8fr]">
          <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] font-extrabold tracking-tight text-navy-900">
            Nous transformons
            <br />
            les <span className="font-serif italic font-normal text-brand-500">messages</span> en
            <br />
            <span className="text-outline-blue">mouvement.</span>
          </h2>
          <div className="space-y-5">
            <p className="text-lg leading-relaxed font-medium text-navy-800">
              Orognis Consulting est un cabinet de conseil en Communication & Stratégie d’influence qui associe réflexion stratégique,
              créativité et maîtrise des outils digitaux.
            </p>
            <p className="leading-relaxed text-slate-500">
              De la première idée à sa mise en œuvre, nous construisons des dispositifs cohérents
              pour faire entendre votre voix, valoriser votre différence et accompagner vos objectifs.
            </p>
            <a href="#contact" className="group inline-flex items-center gap-2 border-b-2 border-brand-500 pb-1.5 text-sm font-bold text-navy-900 transition hover:text-brand-500">
              Construisons quelque chose ensemble
              <ArrowUpRight className="h-4 w-4 text-brand-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* images + values */}
        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          <div className="group relative overflow-hidden rounded-[2rem] lg:col-span-7">
            <img
              src="https://images.pexels.com/photos/7693692/pexels-photo-7693692.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt="Équipe Orognis en session de stratégie"
              className="h-[340px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[420px]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-7">
              <p className="text-[10px] font-extrabold tracking-[0.3em] text-sky-300">NOTRE MÉTIER</p>
              <p className="mt-2 max-w-md font-display text-xl leading-snug font-bold text-white sm:text-2xl">
                Faire entendre votre voix, valoriser votre différence.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src="https://images.pexels.com/photos/7794060/pexels-photo-7794060.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Réunion stratégique avec l'équipe"
                className="h-[200px] w-full object-cover sm:h-[220px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-500/20 mix-blend-multiply" />
            </div>
            <ul className="grid flex-1 gap-3 rounded-[2rem] bg-navy-950 p-7">
              {VALUES.map((v) => (
                <li key={v} className="flex items-center gap-3 text-sm font-semibold text-white/90">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-sky-glow" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* stats */}
        <div ref={ref} className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} start={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
