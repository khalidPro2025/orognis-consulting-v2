import { ArrowUp, ArrowUpRight } from "lucide-react";
import { EXPERTISES } from "../data/expertises";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-10 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <a href="#accueil" className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 font-display text-2xl font-extrabold shadow-lg shadow-brand-500/40">O</span>
              <span className="font-display text-sm font-extrabold tracking-[0.18em]">
                OROGNIS <span className="font-medium text-sky-300">CONSULTING</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm leading-relaxed text-slate-400">
              La communication qui fait avancer. Stratégie, création, digital, études, campagnes et formation — un seul partenaire pour votre impact.
            </p>
            <a href="#contact" className="group mt-6 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-bold shadow-lg shadow-brand-500/40 transition hover:bg-brand-400">
              Démarrer un projet
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          <nav aria-label="Expertises">
            <p className="text-[11px] font-extrabold tracking-[0.3em] text-sky-300">EXPERTISES</p>
            <ul className="mt-5 space-y-3">
              {EXPERTISES.map((e) => (
                <li key={e.id}>
                  <a href="#expertises" className="text-sm text-slate-400 transition hover:text-white">{e.title}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Navigation">
            <p className="text-[11px] font-extrabold tracking-[0.3em] text-sky-300">NAVIGATION</p>
            <ul className="mt-5 space-y-3">
              {[
                ["L'agence", "#agence"],
                ["Notre approche", "#approche"],
                ["Impact & preuves", "#impact"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-sm text-slate-400 transition hover:text-white">{label}</a>
                </li>
              ))}
            </ul>
            <a href="#accueil" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-sky-300">
              Retour en haut <ArrowUp className="h-4 w-4" />
            </a>
          </nav>
        </div>

        <p className="pointer-events-none mt-14 text-center font-display text-[clamp(3rem,11vw,9rem)] leading-none font-extrabold tracking-tight text-white/[0.05] select-none" aria-hidden="true">
          OROGNIS
        </p>

        <div className="mt-4 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row">
          <span>© {year} Orognis Consulting. Tous droits réservés.</span>
          <span>Donnons de l'impact à vos idées.</span>
        </div>
      </div>
    </footer>
  );
}
