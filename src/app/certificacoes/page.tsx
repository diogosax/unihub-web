import Image from "next/image";
import Link from "next/link";

const certifications = [
  {
    partner: "Microsoft",
    logo: "/brand/logo-microsoft.svg",
    description:
      "Certificações Microsoft para as principais ferramentas da suíte Office 365 e Azure, validando o domínio técnico dos colaboradores nas soluções Microsoft mais utilizadas no mercado.",
  },
  {
    partner: "Adobe",
    logo: "/brand/logo-adobe.svg",
    description:
      "Certificações Adobe para Photoshop, Illustrator, Premiere Pro, After Effects e outras ferramentas da Creative Cloud, reconhecidas mundialmente pela indústria criativa.",
  },
  {
    partner: "Autodesk",
    logo: "/brand/logo-autodesk.svg",
    description:
      "Certificações Autodesk para softwares de design 3D, engenharia e arquitetura, como AutoCAD, 3ds Max e outros produtos essenciais para o setor.",
  },
  {
    partner: "PMI",
    logo: "/brand/logo-pmi.svg",
    description:
      "Certificações PMI (Project Management Institute) para gestão de projetos, incluindo preparação para as principais certificações de gerenciamento reconhecidas globalmente.",
  },
  {
    partner: "Apple Swift",
    logo: "/brand/logo-apple-swift.png",
    description:
      "Certificações no desenvolvimento de aplicativos iOS e macOS com a linguagem Swift da Apple, habilitando colaboradores a criar soluções no ecossistema Apple.",
  },
];

export default function Certificacoes() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#292E7F] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#F1AA1E] mb-4">
            Certificações Internacionais
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Certificações reconhecidas globalmente
          </h1>
          <p className="text-white/80 text-base max-w-2xl mx-auto leading-relaxed">
            Nossos cursos proporcionam uma ampla variedade de certificações internacionais,
            emitidas pelas principais empresas de software profissional do mercado.
          </p>
        </div>
      </section>

      {/* Parceiros */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#2d2e32]">
              Parceiros certificadores
            </h2>
            <p className="text-sm text-[#2d2e32]/60 mt-2 max-w-xl mx-auto">
              Certificações emitidas diretamente pelas empresas detentoras de cada tecnologia.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {certifications.map((cert) => (
              <div
                key={cert.partner}
                className="rounded-lg border border-[#e8e8e8] p-7 bg-white grid grid-cols-1 md:grid-cols-4 gap-6 items-center"
              >
                <div className="flex justify-center md:justify-start">
                  <Image
                    src={cert.logo}
                    alt={cert.partner}
                    width={120}
                    height={50}
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-bold text-[#2d2e32] mb-2">{cert.partner}</h3>
                  <p className="text-sm text-[#2d2e32]/70 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value prop */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#F1AA1E] mb-3">
              Por que certificar sua equipe
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#2d2e32] mb-5 leading-snug">
              Equipes certificadas, empresas mais competitivas
            </h2>
            <p className="text-sm text-[#2d2e32]/70 leading-relaxed mb-4">
              Nosso programa de carreiras possibilita que colaboradores e equipes obtenham
              certificações em soluções digitais essenciais para o funcionamento de uma
              organização qualificada e inovadora.
            </p>
            <p className="text-sm text-[#2d2e32]/70 leading-relaxed mb-8">
              Descubra como nosso programa de certificações internacionais pode fazer a
              diferença para a sua equipe e elevar o nível técnico da sua organização.
            </p>
            <Link
              href="/contato"
              className="inline-block px-6 py-2.5 font-bold rounded text-sm text-white transition-colors"
              style={{ backgroundColor: "#292E7F" }}
            >
              Falar com nossa equipe
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
