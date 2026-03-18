import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Illustration */}
        <div className="flex justify-center order-2 md:order-1">
          <Image
            src="/images/section-about.svg"
            alt="Empresa transformada através do conhecimento"
            width={460}
            height={380}
            className="w-full max-w-sm"
          />
        </div>

        {/* Text */}
        <div className="order-1 md:order-2">
          <SectionHeading
            eyebrow="Sobre a UniHub"
            title="Transformando empresas através do conhecimento"
            align="left"
          />
          <div className="mt-6 space-y-4 text-dark/70 leading-relaxed text-base">
            <p>
              No atual cenário empresarial, estar à frente da curva é crucial para manter
              a produtividade. Na UniHub, compreendemos que uma força de trabalho capacitada
              é a chave para uma empresa eficiente, produtiva e bem-sucedida.
            </p>
            <p>
              Por esse motivo, nos empenhamos em ajudar empresas a alcançar seu desempenho
              máximo por meio de um programa de educação corporativa de alta qualidade,
              desenvolvido para as demandas reais do mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
