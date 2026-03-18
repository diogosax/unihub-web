import Image from "next/image";
import Link from "next/link";

const tracks = [
  {
    name: "Essentials",
    color: "#46B4E3",
    illustration: "/images/track-essentials.svg",
    courses: ["Informática Essencial", "Microsoft Office 365", "Google Workspace"],
    description: "Base tecnológica para qualquer posição da empresa.",
  },
  {
    name: "Desenvolvedor de Sistemas",
    color: "#1a73e8",
    illustration: "/images/track-dev.svg",
    courses: ["Desenvolvimento Web", "Desenvolvimento de Apps", "Desenvolvimento de Sistemas"],
    description: "Soluções tecnológicas e inovação para o negócio.",
  },
  {
    name: "Designer Digital",
    color: "#E41663",
    illustration: "/images/track-design.svg",
    courses: ["Design de Imagens na Prática", "Técnicas em Edição de Vídeos", "Design 3D na Prática"],
    description: "Identidade visual e produção de conteúdo criativo.",
  },
  {
    name: "Administração",
    color: "#292E7F",
    illustration: "/images/track-admin.svg",
    courses: ["Gestão Contábil Essencial", "RH e DP Essencial", "Finanças Essencial"],
    description: "Gestão eficiente e sustentabilidade organizacional.",
  },
  {
    name: "Redes e Infraestrutura",
    color: "#F1AA1E",
    illustration: "/images/track-networks.svg",
    courses: ["Cabeamento e Infraestrutura", "Tecnologia Wireless", "Manutenção de Computadores"],
    description: "Conectividade, segurança e desempenho de redes.",
  },
  {
    name: "Vendas e Marketing Digital",
    color: "#E41663",
    illustration: "/images/track-marketing.svg",
    courses: ["Marketing Digital", "Google Ads", "Agente de Vendas"],
    description: "Crescimento, visibilidade de marca e conversão.",
  },
  {
    name: "UniHub Analytics",
    color: "#1a73e8",
    illustration: "/images/track-analytics.svg",
    courses: ["Análise de Dados", "Microsoft Power BI", "Tomada de Decisão"],
    description: "Transforme dados em decisões estratégicas.",
  },
  {
    name: "Soft Skills",
    color: "#46B4E3",
    illustration: "/images/track-softskills.svg",
    courses: ["Liderança", "Trabalho em Equipe", "Comunicação e Criatividade"],
    description: "Competências comportamentais para alta performance.",
  },
];

export default function CourseCategoriesSection() {
  return (
    <section id="cursos" className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3">
            Programa de Carreiras
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark leading-tight mb-4">
            8 carreiras para o futuro da sua empresa
          </h2>
          <p className="text-muted leading-relaxed">
            Organizamos nossos cursos em trilhas de carreira completas, cada uma projetada
            para capacitar equipes em funções específicas — do nível básico até a
            certificação internacional.
          </p>
        </div>

        {/* Track grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tracks.map((track) => (
            <Link
              key={track.name}
              href="/carreiras"
              className="group bg-white rounded-xl border border-border hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 overflow-hidden flex flex-col"
            >
              {/* Colored top strip + illustration */}
              <div
                className="relative h-36 flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: `${track.color}12` }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ backgroundColor: track.color }}
                />
                <Image
                  src={track.illustration}
                  alt={track.name}
                  width={200}
                  height={130}
                  className="w-auto h-28 object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3
                  className="font-extrabold text-sm text-dark mb-2 group-hover:text-brand-primary transition-colors"
                  style={{ color: track.color === "#E41663" ? undefined : undefined }}
                >
                  {track.name}
                </h3>
                <p className="text-xs text-muted leading-relaxed mb-3 flex-1">
                  {track.description}
                </p>
                <ul className="space-y-1 mb-4">
                  {track.courses.map((c) => (
                    <li key={c} className="flex items-start gap-1.5 text-xs text-dark/70">
                      <span className="mt-0.5 shrink-0 w-1 h-1 rounded-full bg-brand-primary inline-block" />
                      {c}
                    </li>
                  ))}
                </ul>
                <span
                  className="text-xs font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  style={{ color: track.color }}
                >
                  Ver carreira
                  <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 01.5-.5h9.793L8.146 4.354a.5.5 0 11.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.293 8.5H1.5A.5.5 0 011 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
