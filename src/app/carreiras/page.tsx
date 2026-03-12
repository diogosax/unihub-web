import Link from "next/link";

const carreiras = [
  {
    accent: "#e22664",
    name: "Designer Digital",
    description:
      "O designer digital é o arquiteto da experiência do usuário, o profissional por trás da primeira impressão que sua marca deixa no mundo online. Com seu talento, cria não apenas interfaces, imagens ou ilustrações atraentes, mas experiências cativantes que fidelizam clientes.",
    cursos: [
      "Design de Imagens na Prática",
      "Técnicas em Edição de Vídeos",
      "Design 3D na Prática",
    ],
  },
  {
    accent: "#45b6e5",
    name: "Desenvolvedor de Sistemas",
    description:
      "Desenvolvedores capacitados são essenciais para a transformação digital das empresas. Formamos profissionais completos em desenvolvimento web, mobile e de sistemas, preparados para os desafios do mercado de tecnologia.",
    cursos: [
      "Desenvolvimento Web",
      "Desenvolvimento de Apps",
      "Desenvolvimento de Sistemas",
    ],
  },
  {
    accent: "#eead32",
    name: "Administração",
    description:
      "Profissionais de administração com conhecimento técnico atualizado são fundamentais para o funcionamento eficiente de qualquer organização. Nossas trilhas cobrem as principais áreas de gestão.",
    cursos: [
      "Gestão Contábil Essencial",
      "RH e DP Essencial",
      "Finanças Essencial",
      "Redes e Infraestrutura",
      "Vendas e Marketing Digital",
    ],
  },
];

const essentials = [
  {
    name: "Informática Essencial",
    description:
      "Fundamentos de informática para colaboradores que precisam dominar as ferramentas digitais básicas do dia a dia profissional.",
  },
  {
    name: "Microsoft Office 365",
    description:
      "Domine o ecossistema Microsoft: Word, Excel, PowerPoint, Teams e muito mais. Certificação Microsoft incluída.",
  },
  {
    name: "Google Workspace",
    description:
      "Produtividade com Google Docs, Sheets, Slides, Meet e toda a suíte Google para equipes modernas.",
  },
  {
    name: "UniHub Soft Skills",
    description:
      "Comunicação, liderança, inteligência emocional e habilidades interpessoais essenciais para o ambiente corporativo.",
  },
  {
    name: "Inglês UniHub",
    description:
      "Inglês corporativo para aprimorar a comunicação global da sua equipe em reuniões, e-mails e apresentações.",
  },
  {
    name: "UniHub Analytics",
    description:
      "Análise de dados e business intelligence para equipes que precisam transformar dados em decisões estratégicas.",
  },
];

export default function Carreiras() {
  return (
    <>
      {/* Hero */}
      <section
        className="text-white py-20"
        style={{ background: "linear-gradient(135deg, #45b6e5, #2c8fbe)" }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-white/80 mb-4">
            Programa de Carreiras
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Carreiras completas para o mercado de hoje
          </h1>
          <p className="text-white/80 text-base max-w-2xl mx-auto leading-relaxed">
            Organizamos nossos cursos em formatos de carreiras, permitindo que os
            colaboradores se tornem completamente capacitados em uma variedade de
            profissões na indústria.
          </p>
        </div>
      </section>

      {/* Carreiras */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#e22664] mb-3">
              Trilhas de Carreira
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#2d2e32]">
              Escolha a trilha certa para sua equipe
            </h2>
            <p className="text-sm text-[#2d2e32]/60 mt-2 max-w-xl mx-auto">
              Cada carreira conecta múltiplos cursos em uma jornada de aprendizado
              estruturada e progressiva.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {carreiras.map((c) => (
              <div
                key={c.name}
                className="rounded-lg border border-[#e8e8e8] p-8 bg-white grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-1.5 h-7 rounded"
                      style={{ backgroundColor: c.accent }}
                    />
                    <h3 className="font-extrabold text-[#2d2e32] text-lg">{c.name}</h3>
                  </div>
                  <p className="text-sm text-[#2d2e32]/70 leading-relaxed">{c.description}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#2d2e32]/40 mb-3">
                    Cursos incluídos
                  </p>
                  <ul className="flex flex-col gap-2">
                    {c.cursos.map((curso) => (
                      <li
                        key={curso}
                        className="flex items-center gap-2 text-sm text-[#2d2e32]/80"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: c.accent }}
                        />
                        {curso}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essentials */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#45b6e5] mb-3">
              Essentials
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#2d2e32]">
              Cursos Essenciais
            </h2>
            <p className="text-sm text-[#2d2e32]/60 mt-2 max-w-xl mx-auto">
              Cursos de ferramentas e habilidades fundamentais para qualquer colaborador,
              independente da área de atuação.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {essentials.map((e) => (
              <div
                key={e.name}
                className="rounded-lg border border-[#e8e8e8] p-6 bg-white hover:border-[#e22664]/30 hover:shadow-sm transition-all"
              >
                <h3 className="font-bold text-[#2d2e32] text-sm mb-2">{e.name}</h3>
                <p className="text-sm text-[#2d2e32]/70 leading-relaxed">{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#e22664] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            Pronto para capacitar sua equipe?
          </h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto text-sm leading-relaxed">
            Fale com nossa equipe e descubra qual trilha faz mais sentido para as
            necessidades da sua empresa.
          </p>
          <Link
            href="/contato"
            className="inline-block px-8 py-3.5 bg-white font-bold rounded text-sm hover:bg-gray-100 transition-colors"
            style={{ color: "#e22664" }}
          >
            Falar com especialista
          </Link>
        </div>
      </section>
    </>
  );
}
