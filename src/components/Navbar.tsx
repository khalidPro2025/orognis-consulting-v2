import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const LINKS = [
  { label: "L'agence", href: "#agence" },
  { label: "Expertises", href: "#expertises" },
  { label: "Approche", href: "#approche" },
  { label: "Impact", href: "#impact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* scroll progress */}
      <div className="fixed top-0 left-0 z-[60] h-[3px] bg-gradient-to-r from-brand-500 via-sky-glow to-brand-300 transition-[width] duration-150" style={{ width: `${progress}%` }} />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-navy-950/85 backdrop-blur-xl shadow-[0_10px_40px_rgba(3,20,42,.35)] border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#accueil" className="group flex items-center gap-3" aria-label="Orognis Consulting — accueil">
            <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 font-display text-xl font-extrabold text-white shadow-lg shadow-brand-500/40 transition-transform duration-500 group-hover:rotate-[10deg]">
              O
              <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <span className="font-display text-[13px] font-extrabold tracking-[0.18em] text-white">
              OROGNIS
              <span className="ml-1.5 font-medium tracking-[0.18em] text-sky-300">CONSULTING</span>
            </span>
          </a>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Navigation principale">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="link-sweep text-[13px] font-semibold text-white/80 transition-colors hover:text-white">
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-[13px] font-bold text-white shadow-lg shadow-brand-500/40 transition-all duration-300 hover:bg-brand-400 hover:shadow-brand-400/50"
            >
              Parlons de votre projet
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </nav>

          <button
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/20 text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* mobile menu */}
        <div className={`overflow-hidden transition-all duration-500 lg:hidden ${open ? "max-h-96 border-t border-white/10 bg-navy-950/95 backdrop-blur-xl" : "max-h-0"}`}>
          <nav className="flex flex-col gap-1 px-5 py-5" aria-label="Navigation mobile">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-display text-base font-bold text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-3.5 text-sm font-bold text-white"
            >
              Parlons de votre projet <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
