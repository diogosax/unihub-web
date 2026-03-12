import Link from "next/link";

const areas = [
  {
    tag: "Tecnologia",
    title: "Desenvolvimento e Engenharia de Software",
    description:
      "Desenvolvimento web, mobile, dados, cloud e segurança. Formação completa para atuar em times de engenharia modernos.",
  },
  {
    tag: "Negócios",
    title: "Gestão e Estratégia de Negócios",
    description:
      "Gestão de projetos, empreendedorismo, análise de negócios e liderança. Prepare-se para papéis estratégicos.",
  },
  {
    tag: "Design",
    title: "Design de Produto e Experiência do Usuário",
    description:
      "Experiência do usuário, design de interfaces, pesquisa com usuário e design thinking.",
  },
  {
    tag: "Marketing",
    title: "Marketing Digital e Crescimento",
    description:
      "SEO, mídia paga, redes sociais, e-mail marketing e analytics. Domine as ferramentas do marketing moderno.",
  },
  {
    tag: "Dados",
    title: "Dados e Inteligência de Negócios",
    description:
      "Python, SQL, visualização de dados e business intelligence. Transforme dados em decisões de negócio.",
  },
  {
    tag: "Carreira",
    title: "Habilidades Profissionais e Liderança",
    description:
      "Comunicação, liderança, produtividade e inteligência emocional. Habilidades que acompanham toda a carreira.",
  },
];

const metodologia = [
  {
    step: "01",
    title: "Conteúdo aplicado ao mercado",
    description:
      "Cada módulo é construído com base nas demandas reais das empresas, em parceria com profissionais ativos na área.",
  },
  {
    step: "02",
    title: "Projetos práticos desde o início",
    description:
      "Você aprende fazendo. Os projetos simulam desafios reais e compõem seu portfólio profissional desde o primeiro módulo.",
  },
  {
    step: "03",
    title: "Trilhas com progressão clara",
    description:
      "O aprendizado é estruturado com progressão definida, do fundamental ao avançado, no seu ritmo.",
  },
  {
    step: "04",
    title: "Comunidade e suporte contínuo",
    description:
      "Acesso a uma comunidade de alunos e profissionais, com fóruns, eventos e acompanhamento ao longo do curso.",
  },
];

const beneficios = [
  "Certificado reconhecido pelo mercado ao concluir o curso",
  "Acesso ao conteúdo após a conclusão",
  "Projetos práticos para compor seu portfólio",
  "Aulas com ritmo de estudo flexível",
  "Suporte de tutores especializados por área",
  "Comunidade ativa de alunos e ex-alunos",
];

export default function Cursos() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
            Formação Profissional
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-5 leading-tight">
            Cursos para quem quer evoluir de verdade
          </h1>
          <p className="text-blue-200 text-base max-w-2xl mx-auto leading-relaxed">
            Escolha sua área, siga uma trilha estruturada e desenvolva as competências que
            o mercado realmente valoriza. Aprenda no seu ritmo, com projetos reais.
          </p>
        </div>
      </section>

      {/* Áreas de formação */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Áreas de formação</h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              Trilhas de aprendizado organizadas por área de atuação profissional.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {areas.map((area) => (
              <div
                key={area.title}
                className="rounded border border-gray-200 p-6 hover:border-blue-300 hover:shadow-sm transition-all bg-white"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 rounded px-2.5 py-1 mb-4 inline-block">
                  {area.tag}
                </span>
                <h3 className="font-bold text-gray-900 mb-2 text-sm leading-snug">
                  {area.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-20 bg-[#f5f7fb]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-800">
              Como funciona
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3">
              Nossa metodologia de aprendizado
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              Um processo pensado para gerar resultado, não só certificado.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {metodologia.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded border border-gray-200 p-6 flex gap-5"
              >
                <span className="text-2xl font-extrabold text-blue-100 leading-none select-none shrink-0 pt-0.5">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-800">
                Benefícios
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3">
                O que você ganha ao estudar na UniHub
              </h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {beneficios.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-sm text-gray-600 bg-[#f5f7fb] rounded border border-gray-200 px-4 py-3"
                >
                  <span className="mt-0.5 text-blue-800 font-bold text-sm leading-none shrink-0">
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            Escolha seu curso e comece hoje
          </h2>
          <p className="text-blue-200 mb-8 max-w-md mx-auto text-sm">
            Acesse a plataforma, explore as trilhas disponíveis e inicie sua formação agora mesmo.
          </p>
          <a
            href="#"
            className="inline-block px-7 py-3 bg-white text-blue-900 font-bold rounded text-sm hover:bg-blue-50 transition-colors"
          >
            Acessar plataforma
          </a>
        </div>
      </section>
    </>
  );
}
