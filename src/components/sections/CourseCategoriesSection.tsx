import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const categories = [
  {
    title: "Essentials",
    description: "Informática Essencial, Microsoft Office 365 e Google Workspace.",
    color: "#46B4E3",
  },
  {
    title: "Desenvolvedor de Sistemas",
    description: "Desenvolvimento Web, de Apps e de Sistemas.",
    color: "#E41663",
  },
  {
    title: "Designer Digital",
    description: "Design de Imagens na Prática, Edição de Vídeos e Design 3D.",
    color: "#F1AA1E",
  },
  {
    title: "Administração",
    description: "Gestão Contábil, RH e DP Essencial, Finanças Essencial.",
    color: "#292E7F",
  },
  {
    title: "Redes e Infraestrutura",
    description: "Fundamentos e práticas de infraestrutura de TI corporativa.",
    color: "#46B4E3",
  },
  {
    title: "Vendas e Marketing Digital",
    description: "Estratégias de vendas, marketing digital e growth.",
    color: "#E41663",
  },
];

export default function CourseCategoriesSection() {
  return (
    <section id="cursos" className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          {/* Text + illustration */}
          <div>
            <SectionHeading
              eyebrow="Programa de Carreiras"
              title="Educação sob medida para cada posição"
              subtitle="Organizamos nossos cursos em formatos de carreiras, permitindo que colaboradores se tornem completamente capacitados em profissões como designer digital, desenvolvedor de sistemas e muito mais."
              align="left"
            />
            <p className="mt-4 text-base text-dark/65 leading-relaxed">
              Cada curso é projetado para se conectar com outros dentro da mesma trilha,
              aumentando a flexibilidade e reduzindo a curva de aprendizado. Além disso,
              oferecemos soluções personalizadas para atender às demandas específicas de
              cada organização.
            </p>
            <div className="mt-8">
              <Button href="/carreiras" variant="primary">
                Ver todos os cursos
              </Button>
            </div>
            <div className="mt-10 flex justify-start">
              <Image
                src="/images/section-careers.svg"
                alt="Programa de carreiras UniHub"
                width={340}
                height={280}
                className="w-full max-w-xs"
              />
            </div>
          </div>

          {/* Category cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href="/carreiras"
                className="group bg-white rounded-lg border border-border p-5 hover:shadow-md transition-shadow"
              >
                <div
                  className="w-8 h-1 rounded mb-4"
                  style={{ backgroundColor: cat.color }}
                />
                <h3 className="font-bold text-dark text-sm mb-2 group-hover:text-brand-pink transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-dark/60 leading-relaxed">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
