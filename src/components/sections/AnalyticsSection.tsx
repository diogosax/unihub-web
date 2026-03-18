import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

const highlights = [
  {
    title: "Login individual por colaborador",
    description:
      "Cada membro da equipe possui um login único, permitindo o rastreamento personalizado de desempenho e progresso ao longo dos cursos.",
  },
  {
    title: "Métricas para gestores",
    description:
      "Gestores de equipes, departamentos e setores têm acesso a métricas detalhadas apresentadas de forma clara e intuitiva.",
  },
  {
    title: "Relatórios e dashboards",
    description:
      "Relatórios especializados facilitam a gestão eficaz dos administradores, com visão detalhada do progresso e engajamento dos colaboradores.",
  },
];

export default function AnalyticsSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Text */}
        <div>
          <SectionHeading
            eyebrow="Gestão e Analytics"
            title="Jornada colaborativa"
            align="left"
          />
          <div className="mt-8 space-y-6">
            {highlights.map((h) => (
              <div key={h.title} className="flex gap-4">
                <div className="mt-1 shrink-0 w-2 h-2 rounded-full bg-brand-blue" />
                <div>
                  <p className="font-bold text-dark text-sm mb-1">{h.title}</p>
                  <p className="text-sm text-dark/65 leading-relaxed">{h.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/section-analytics.svg"
            alt="Dashboard de analytics e gestão de equipes"
            width={460}
            height={380}
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}
