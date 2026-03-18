import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    title: "Cursos corporativos completos",
    description:
      "Oferecemos cursos adaptados para posições individuais, equipes e até setores inteiros da sua organização.",
    color: "#E41663",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
        <path d="M16 3.5l1.5 1.5L20 2" />
      </svg>
    ),
    title: "Certificações internacionais",
    description:
      "Certifique sua equipe com as principais certificações do mercado: Autodesk, Adobe, Microsoft, Apple e PMI.",
    color: "#46B4E3",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Plataforma 100% online",
    description:
      "Nossa plataforma elimina a necessidade de materiais físicos ou presença presencial. Aprenda de qualquer lugar.",
    color: "#F1AA1E",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15 15" />
      </svg>
    ),
    title: "Aulas de até 45 minutos",
    description:
      "Aulas eficientes com duração máxima de 45 minutos, garantindo aprendizado conveniente e produtivo.",
    color: "#292E7F",
  },
];

export default function PlatformFeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <SectionHeading
            eyebrow="Plataforma"
            title="Elevando habilidades técnicas"
            subtitle="Descubra como podemos ajudar a sua empresa a desenvolver posições, equipes ou até setores inteiros por meio de programas educativos de alta qualidade."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-surface rounded-lg border border-border p-6 flex flex-col gap-4"
            >
              <div style={{ color: f.color }}>{f.icon}</div>
              <h3 className="font-bold text-dark text-sm leading-snug">{f.title}</h3>
              <p className="text-xs text-dark/60 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className="flex justify-center">
            <Image
              src="/images/section-features.svg"
              alt="Habilidades técnicas em evolução"
              width={420}
              height={340}
              className="w-full max-w-sm"
            />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-dark mb-4">
              Cursos para Carreiras do Futuro
            </h3>
            <p className="text-dark/65 leading-relaxed mb-4">
              Além dos cursos por área, oferecemos idiomas como inglês corporativo e
              treinamento em ferramentas essenciais para design, desenvolvimento e
              gerenciamento de projetos.
            </p>
            <p className="text-dark/65 leading-relaxed mb-8">
              Explore nossos cursos e capacite sua equipe para alcançar o seu potencial,
              impulsionando o sucesso do seu negócio.
            </p>
            <Button href="/carreiras" variant="primary">
              Conheça nossos cursos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
