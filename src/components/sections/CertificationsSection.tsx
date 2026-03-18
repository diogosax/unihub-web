import Image from "next/image";
import Button from "@/components/ui/Button";

const certifications = [
  {
    partner: "Microsoft",
    logo: "/brand/logo-microsoft.svg",
    width: 130,
    height: 44,
    description: "Office 365, Azure, Power BI e muito mais — as soluções mais usadas no mundo corporativo.",
    color: "#1a73e8",
  },
  {
    partner: "Adobe",
    logo: "/brand/logo-adobe.svg",
    width: 90,
    height: 44,
    description: "Photoshop, Illustrator, Premiere e o ecossistema criativo completo da Adobe.",
    color: "#E41663",
  },
  {
    partner: "Autodesk",
    logo: "/brand/logo-autodesk.svg",
    width: 120,
    height: 44,
    description: "AutoCAD, Fusion 360 e ferramentas de design técnico e engenharia.",
    color: "#46B4E3",
  },
  {
    partner: "Apple Swift",
    logo: "/brand/logo-swift.svg",
    width: 80,
    height: 44,
    description: "Desenvolvimento iOS e macOS com a linguagem Swift da Apple.",
    color: "#F1AA1E",
  },
  {
    partner: "PMI",
    logo: "/brand/logo-pmi.svg",
    width: 76,
    height: 44,
    description: "Gerenciamento de projetos com a metodologia global do Project Management Institute.",
    color: "#292E7F",
  },
];

export default function CertificationsSection() {
  return (
    <section className="py-20 bg-white" id="certificacoes">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3">
            Credenciais Globais
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark leading-tight mb-4">
            5 certificações internacionais reconhecidas globalmente
          </h2>
          <p className="text-muted leading-relaxed">
            Cada trilha de carreira culmina em uma certificação emitida pelas maiores empresas
            de software e tecnologia do mundo — credenciais que valem no mercado.
          </p>
        </div>

        {/* Certification cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {certifications.map((cert) => (
            <div
              key={cert.partner}
              className="bg-surface rounded-xl border border-border p-7 hover:shadow-md transition-shadow duration-200 flex flex-col gap-5"
            >
              <div className="h-12 flex items-center">
                <Image
                  src={cert.logo}
                  alt={cert.partner}
                  width={cert.width}
                  height={cert.height}
                  className="h-9 w-auto object-contain"
                />
              </div>
              <p className="text-sm text-muted leading-relaxed flex-1">{cert.description}</p>
              <div
                className="h-0.5 w-8 rounded-full"
                style={{ backgroundColor: cert.color }}
              />
            </div>
          ))}

          {/* "+" card hinting at more */}
          <div className="bg-blue-tint rounded-xl border border-brand-primary/20 p-7 flex flex-col items-center justify-center gap-3 text-center">
            <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-brand-primary">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-sm font-bold text-dark">Mais certificações em breve</p>
            <p className="text-xs text-muted leading-relaxed">
              Estamos sempre expandindo nosso portfólio de parceiros internacionais.
            </p>
          </div>
        </div>

        {/* All logos strip */}
        <div className="bg-surface rounded-2xl border border-border py-10 px-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-muted mb-8">
            Parceiros certificadores
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {certifications.map((cert) => (
              <Image
                key={cert.partner}
                src={cert.logo}
                alt={cert.partner}
                width={cert.width}
                height={cert.height}
                className="h-10 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Button href="/certificacoes" variant="outline">
            Ver todas as certificações
          </Button>
        </div>
      </div>
    </section>
  );
}
