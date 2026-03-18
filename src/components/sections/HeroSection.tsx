import Image from "next/image";
import Button from "@/components/ui/Button";

const stats = [
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    ),
    label: "5 certificações internacionais",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
          clipRule="evenodd"
        />
      </svg>
    ),
    label: "Aulas de até 45 min",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
      </svg>
    ),
    label: "Dashboard para gestores",
  },
];

export default function HeroSection() {
  return (
    <section
      className="bg-gradient-to-br from-white via-white to-blue-tint overflow-hidden"
      aria-label="Introdução UniHub"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* ── Text column ── */}
        <div>
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-primary bg-blue-tint px-3 py-1 rounded-full mb-6">
            Educação Corporativa Interativa
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold text-dark leading-[1.1] mb-4">
            UniHub chegou para transformar a{" "}
            <span className="text-brand-primary">Educação Corporativa</span>
          </h1>

          <p className="text-base md:text-lg font-semibold text-muted mb-4 leading-snug">
            Transformando empresas através do conhecimento
          </p>

          <p className="text-base text-muted leading-relaxed mb-8 max-w-lg">
            Descubra como nossos programas de educação corporativa podem elevar o seu
            negócio e capacitar cada colaborador ao máximo potencial através de trilhas
            profissionalizantes com certificações internacionais.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Button href="/contato" variant="primary" className="px-7 py-3.5">
              Agendar demonstração
            </Button>
            <Button href="/como-funciona" variant="outline" className="px-7 py-3.5">
              Como funciona
            </Button>
          </div>

          {/* Stat chips */}
          <div className="flex flex-wrap gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-1.5 text-xs font-semibold text-dark bg-white border border-border rounded-full px-3 py-1.5 shadow-sm"
              >
                <span className="text-brand-primary">{s.icon}</span>
                {s.label}
              </div>
            ))}
          </div>
        </div>

        {/* ── Illustration column ── */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/home-hero.svg"
            alt="Plataforma de educação corporativa UniHub"
            width={560}
            height={460}
            className="w-full max-w-[480px] md:max-w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
