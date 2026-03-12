import Link from "next/link";

const areas = [
  {
    icon: "💻",
    title: "Tecnologia",
    description:
      "Desenvolvimento web, mobile, dados, cloud e segurança. Formação completa para atuar em times de engenharia modernos.",
  },
  {
    icon: "📊",
    title: "Negócios e Gestão",
    description:
      "Gestão de projetos, empreendedorismo, análise de negócios e liderança. Prepare-se para papéis estratégicos.",
  },
  {
    icon: "🎨",
    title: "Design e UX",
    description:
      "Experiência do usuário, design de interfaces, pesquisa com usuário e design thinking. Crie produtos que as pessoas amam.",
  },
  {
    icon: "📣",
    title: "Marketing Digital",
    description:
      "SEO, mídia paga, redes sociais, e-mail marketing e analytics. Domine as ferramentas do marketing moderno.",
  },
  {
    icon: "🔍",
    title: "Dados e Analytics",
    description:
      "Python, SQL, visualização de dados e business intelligence. Transforme dados em decisões de negócio.",
  },
  {
    icon: "🧠",
    title: "Soft Skills",
    description:
      "Comunicação, liderança, produtividade e inteligência emocional. Habilidades que acompanham toda a carreira.",
  },
];

const metodologia = [
  {
    step: "01",
    title: "Conteúdo aplicado",
    description:
      "Cada módulo é construído com base nas demandas reais do mercado, em parceria com profissionais ativos na área.",
  },
  {
    step: "02",
    title: "Projetos práticos",
    description:
      "Você aprende fazendo. Os projetos simulam desafios reais e compõem seu portfólio profissional desde o início.",
  },
  {
    step: "03",
    title: "Trilhas progressivas",
    description:
      "O aprendizado é estruturado em trilhas com progressão clara, do básico ao avançado, no seu ritmo.",
  },
  {
    step: "04",
    title: "Comunidade e suporte",
    description:
      "Acesso a uma comunidade de alunos e profissionais, com fóruns, eventos e mentorias ao longo do curso.",
  },
];

const beneficios = [
  "Certificado reconhecido pelo mercado ao concluir o curso",
  "Acesso vitalício ao conteúdo após a conclusão",
  "Projetos práticos para compor seu portfólio",
  "Aulas gravadas com ritmo de estudo flexível",
  "Suporte de tutores especializados por área",
  "Comunidade ativa de alunos e ex-alunos",
];

export default function Cursos() {
  return (
    <>
      {/* Hero da página */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
            Formação Profissional
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-5 leading-tight">
            Cursos para quem quer evoluir de verdade
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Escolha sua área, siga uma trilha estruturada e desenvolva as competências que
            o mercado realmente valoriza. Aprenda no seu ritmo, com projetos reais.
          </p>
        </div>
      </section>

      {/* Áreas de formação */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Áreas de formação</h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">
              Trilhas de aprendizado organizadas por área de atuação profissional.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {areas.map((area) => (
              <div
                key={area.title}
                className="rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <span className="text-3xl mb-4 block">{area.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
              Como funciona
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3">
              Nossa metodologia de aprendizado
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">
              Um processo pensado para gerar resultado, não só certificado.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {metodologia.map((item) => (
              <div key={item.step} className="bg-white rounded-xl border border-gray-200 p-6 flex gap-5">
                <span className="text-3xl font-extrabold text-blue-100 leading-none select-none">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
                Benefícios
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3">
                O que você ganha ao estudar na UniHub
              </h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {beneficios.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="mt-0.5 text-blue-600 font-bold text-base leading-none">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            Escolha seu curso e comece hoje
          </h2>
          <p className="text-blue-100 mb-8 max-w-md mx-auto">
            Acesse a plataforma, explore as trilhas disponíveis e inicie sua formação agora mesmo.
          </p>
          <a
            href="#"
            className="inline-block px-7 py-3.5 bg-white text-blue-800 font-bold rounded-lg hover:bg-blue-50 transition-colors text-sm"
          >
            Acessar plataforma
          </a>
        </div>
      </section>
    </>
  );
}
