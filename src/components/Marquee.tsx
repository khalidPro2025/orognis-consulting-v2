const WORDS = [
  "Conseil & Stratégie",
  "Presse & Media Training",
  "Communication Digitale",
  "Événementiel",
  "Études & Enquêtes",
  "Campagnes & Influence",
  "Capacity Building",
];

export default function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="relative overflow-hidden border-y border-navy-800/10 bg-ice-50 py-5" aria-hidden="true">
      <div className="animate-marquee flex w-max items-center gap-10 pr-10">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-display text-sm font-extrabold tracking-[0.2em] text-navy-800 uppercase">{w}</span>
            <span className="text-lg text-brand-500">✳</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ice-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ice-50 to-transparent" />
    </div>
  );
}
