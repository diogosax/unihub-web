import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const logos = [
  { name: "Apple Swift", src: "/brand/logo-swift.svg", width: 70 },
  { name: "Microsoft", src: "/brand/logo-microsoft.svg", width: 110 },
  { name: "PMI", src: "/brand/logo-pmi.svg", width: 60 },
  { name: "Autodesk", src: "/brand/logo-autodesk.svg", width: 100 },
  { name: "Adobe", src: "/brand/logo-adobe.svg", width: 80 },
];

export default function CertificationsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Illustration */}
        <div className="flex justify-center order-2 md:order-1">
          <Image
            src="/images/section-certifications.svg"
            alt="Certificações internacionais"
            width={440}
            height={360}
            className="w-full max-w-sm"
          />
        </div>

        {/* Text */}
        <div className="order-1 md:order-2">
          <SectionHeading
            eyebrow="Certificações"
            title="Certificações Internacionais"
            align="left"
          />
          <div className="mt-6 space-y-4 text-dark/65 leading-relaxed text-base">
            <p>
              Nossos cursos proporcionam uma ampla variedade de certificações
              internacionais, emitidas pelas principais empresas de software profissional
              do mercado.
            </p>
            <p>
              Nosso programa de carreiras possibilita que colaboradores e equipes obtenham
              certificações em soluções digitais essenciais para o funcionamento de uma
              organização qualificada e inovadora.
            </p>
          </div>

          {/* Partner logos */}
          <div className="mt-8 flex flex-wrap gap-6 items-center">
            {logos.map((l) => (
              <Image
                key={l.name}
                src={l.src}
                alt={l.name}
                width={l.width}
                height={36}
                className="h-7 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
              />
            ))}
          </div>

          <div className="mt-8">
            <Button href="/certificacoes" variant="secondary">
              Saiba mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
