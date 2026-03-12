import Link from "next/link";

const valores = [
  {
    icon: "🎯",
    title: "Resultado acima do certificado",
    description:
      "Formamos profissionais que entram no mercado prontos para gerar impacto, não apenas com um papel na mão.",
  },
  {
    icon: "🤝",
    title: "Parceria com o mercado",
    description:
      "Desenvolvemos nossos currículos em conjunto com empresas e profissionais ativos, garantindo relevância real.",
  },
  {
    icon: "🌍",
    title: "Acesso democrático",
    description:
      "Acreditamos que educação de qualidade não deve ser privilégio de poucos. Trabalhamos para ampliar o acesso.",
  },
  {
    icon: "🔄",
    title: "Aprendizado contínuo",
    description:
      "O mercado muda rápido. Atualizamos nossos conteúdos constantemente para que você esteja sempre à frente.",
  },
];

const pilares = [
  {
    title: "Prática desde o início",
    description:
      "Cada curso começa com projetos reais. Não acreditamos em teoria sem aplicação. O aprendizado acontece na prática.",
  },
  {
    title: "Currículo construído com o mercado",
    description:
      "Nossas trilhas são desenvolvidas com a participação de profissionais que trabalham nas áreas que ensinamos.",
  },
  {
    title: "Comunidade como parte do ensino",
    description:
      "Aprender junto acelera o processo. Nossa comunidade de alunos e mentores é parte essencial da experiência UniHub.",
  },
];

export default function Sobre() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
            Sobre a UniHub
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-5 leading-tight">
            Educação profissional com propósito
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            A UniHub é uma plataforma de formação profissional criada para conectar
            pessoas ao mercado de trabalho por meio de educação prática, relevante
            e acessível.
          </p>
        </div>
      </section>

      {/* O que é a UniHub */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
              Quem somos
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-5 leading-snug">
              Uma plataforma criada para transformar carreiras
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              A UniHub nasceu da percepção de que existe uma lacuna entre o que é ensinado
              nas instituições tradicionais e o que as empresas realmente precisam. Criamos
              uma plataforma onde o aprendizado é orientado por demandas reais do mercado,
              com conteúdo atualizado e projetos práticos.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Atendemos tanto estudantes que querem iniciar uma nova carreira quanto
              profissionais que buscam se atualizar ou se especializar. E para empresas,
              oferecemos programas de capacitação que desenvolvem equipes de forma eficiente
              e mensurável.
            </p>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">Missão</span>
            <h3 className="text-xl font-bold text-gray-900 mt-3 mb-4">
              Democratizar a formação profissional de qualidade
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Nossa missão é tornar o aprendizado profissional acessível, prático e
              conectado ao mercado real. Queremos que qualquer pessoa, independente
              de onde está, possa desenvolver as habilidades necessárias para crescer
              na sua carreira.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">Visão</span>
            <h3 className="text-xl font-bold text-gray-900 mt-3 mb-4">
              Ser a principal referência em educação profissional no Brasil
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Acreditamos em um futuro onde a formação profissional é contínua,
              personalizada e integrada ao mundo corporativo. Trabalhamos para
              construir esse futuro todos os dias, com cada aluno e empresa parceira.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa abordagem */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
              Nossa abordagem
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3">
              Como pensamos a educação profissional
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">
              Três pilares que guiam tudo o que desenvolvemos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pilares.map((p) => (
              <div key={p.title} className="rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
              Valores
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3">
              O que nos guia
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {valores.map((v) => (
              <div key={v.title} className="bg-white rounded-xl border border-gray-200 p-6">
                <span className="text-3xl mb-4 block">{v.icon}</span>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            Faça parte da UniHub
          </h2>
          <p className="text-blue-100 mb-8 max-w-md mx-auto">
            Seja como aluno ou empresa parceira, queremos construir esse caminho junto com você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cursos"
              className="px-7 py-3.5 bg-white text-blue-800 font-bold rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Explorar cursos
            </Link>
            <Link
              href="/contato"
              className="px-7 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm"
            >
              Falar conosco
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
