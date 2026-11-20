import { useEffect, useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Clock, Mail, MapPin, Send } from "lucide-react";
import { EXPERTISES } from "../data/expertises";
import { useReveal } from "../hooks/useReveal";

const EMAIL = "contact@orognisconsulting.com";

export default function Contact() {
  const head = useReveal<HTMLDivElement>(0.2);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "Conseil & Stratégie", message: "" });

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("orognis-expertise");
      if (saved && EXPERTISES.some((e) => e.title === saved)) {
        setForm((f) => ({ ...f, subject: saved }));
        sessionStorage.removeItem("orognis-expertise");
      }
    } catch { /* noop */ }
  }, []);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Demande de contact — ${form.subject}`);
    const body = encodeURIComponent(
      `Bonjour Orognis Consulting,\n\nNom : ${form.name}\nE-mail : ${form.email}\nBesoin : ${form.subject}\n\nMessage :\n${form.message}\n\n`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputCls =
    "w-full rounded-2xl border border-white/12 bg-white/[0.06] px-5 py-4 text-sm text-white placeholder:text-slate-500 transition focus:border-sky-glow focus:bg-white/10 focus:ring-4 focus:ring-brand-500/20";

  return (
    <section id="contact" className="grain relative overflow-hidden bg-navy-950 py-24 text-white sm:py-32">
      <div className="bg-grid-blue absolute inset-0 opacity-50" />
      <div className="absolute -bottom-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand-500/25 blur-[130px]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div ref={head.ref} className={`reveal ${head.visible ? "is-visible" : ""}`}>
          <p className="flex items-center gap-3 text-[11px] font-extrabold tracking-[0.3em] text-sky-300">
            <span className="h-[2px] w-10 bg-sky-glow" /> 05 / CONTACT
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,4.2rem)] leading-[1.03] font-extrabold tracking-tight">
            Et si on faisait
            <br />
            <span className="font-serif italic font-normal text-sky-glow">parler vos idées ?</span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-slate-400">
            Un projet, une question ou simplement l'envie d'échanger ? Écrivez-nous — nous répondons sous 24 h ouvrées.
          </p>

          <a href={`mailto:${EMAIL}`} className="group mt-9 inline-flex items-center gap-3 border-b-2 border-brand-500 pb-2 font-display text-lg font-bold transition hover:text-sky-300 sm:text-xl">
            <Mail className="h-5 w-5 text-sky-glow" />
            {EMAIL}
            <ArrowUpRight className="h-5 w-5 text-sky-glow transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          <ul className="mt-10 space-y-4 text-sm text-slate-300">
            <li className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/8"><Clock className="h-4 w-4 text-sky-glow" /></span>
              Réponse sous 24 h ouvrées, sans engagement
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/8"><MapPin className="h-4 w-4 text-sky-glow" /></span>
              Accompagnement à distance et sur le terrain
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/8"><CheckCircle2 className="h-4 w-4 text-sky-glow" /></span>
              Premier échange de cadrage offert
            </li>
          </ul>

          <div className="mt-12 hidden overflow-hidden rounded-[2rem] lg:block">
            <img
              src="https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Événement organisé par Orognis Consulting"
              className="h-56 w-full object-cover opacity-90"
              loading="lazy"
            />
          </div>
        </div>

        {/* form */}
        <div className="relative">
          {sent ? (
            <div className="fade-slide flex h-full min-h-[480px] flex-col items-center justify-center rounded-[2rem] border border-brand-400/30 bg-white/[0.05] p-10 text-center backdrop-blur">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-brand-500 shadow-2xl shadow-brand-500/50">
                <CheckCircle2 className="h-10 w-10 text-white" />
              </span>
              <h3 className="mt-7 font-display text-3xl font-extrabold">Message prêt à partir !</h3>
              <p className="mt-3 max-w-sm leading-relaxed text-slate-300">
                Votre messagerie s'est ouverte avec votre demande <strong className="text-white">« {form.subject} »</strong>.
                Il ne reste qu'à l'envoyer — nous revenons vers vous très vite.
              </p>
              <button
                onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "Conseil & Stratégie", message: "" }); }}
                className="mt-8 rounded-full border border-white/25 px-6 py-3 text-sm font-bold transition hover:border-sky-glow hover:text-sky-300"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur sm:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-bold tracking-wide text-slate-300">Votre nom *</label>
                  <input id="name" required value={form.name} onChange={set("name")} placeholder="Nom et prénom" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-bold tracking-wide text-slate-300">Votre e-mail *</label>
                  <input id="email" type="email" required value={form.email} onChange={set("email")} placeholder="vous@entreprise.com" className={inputCls} />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="subject" className="mb-2 block text-xs font-bold tracking-wide text-slate-300">Votre besoin</label>
                <select id="subject" value={form.subject} onChange={set("subject")} className={`${inputCls} appearance-none [&>option]:text-navy-900`}>
                  {EXPERTISES.map((e) => (
                    <option key={e.id} value={e.title}>{e.title}</option>
                  ))}
                  <option value="Autre demande">Autre demande</option>
                </select>
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-xs font-bold tracking-wide text-slate-300">Parlez-nous de votre projet *</label>
                <textarea id="message" rows={5} required value={form.message} onChange={set("message")} placeholder="Quelques mots sur votre projet, vos objectifs, vos délais..." className={`${inputCls} resize-y`} />
              </div>
              <button
                type="submit"
                className="group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-brand-500 to-brand-400 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-brand-500/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-brand-400/50 sm:w-auto"
              >
                Préparer mon message
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>
              <p className="mt-4 text-xs leading-relaxed text-slate-500">
                Le formulaire prépare un e-mail dans votre messagerie. Aucun message n'est stocké sur ce site.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
