import Link from "next/link";

const courses = [
  {
    tag: "Tecnologia",
    title: "Desenvolvimento Web Full Stack",
    description:
      "Do HTML ao back-end com Node.js. Construa aplicações completas com projetos práticos e mentoria especializada.",
    duration: "6 meses",
    level: "Iniciante ao Avançado",
  },
  {
    tag: "Negócios",
    title: "Gestão de Projetos Ágeis",
    description:
      "Domine Scrum, Kanban e as principais ferramentas de gestão. Prepare-se para liderar equipes de alta performance.",
    duration: "3 meses",
    level: "Intermediário",
  },
  {
    tag: "Design",
    title: "UX/UI para Produtos Digitais",
    description:
      "Crie interfaces centradas no usuário com Figma. Aprenda pesquisa, prototipagem e design system do zero.",
    duration: "4 meses",
    level: "Iniciante",
  },
];

const highlights = [
  {
    icon: "🎯",
    title: "Foco no mercado",
    description: "Currículo construído com profissionais ativos nas áreas.",
  },
  {
    icon: "🛠️",
    title: "Aprendizado prático",
    description: "Projetos reais desde o primeiro módulo.",
  },
  {
    icon: "📜",
    title: "Certificado reconhecido",
    description: "Comprove suas competências para recrutadores.",
  },
  {
    icon: "🤝",
    title: "Comunidade ativa",
    description: "Aprenda junto com outros profissionais em evolução.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36 flex flex-col items-center text-center gap-7">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-300 bg-blue-800/60 border border-blue-600 rounded-full px-4 py-1.5">
            Plataforma de Educação Profissional
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl tracking-tight">
            Formação profissional para o mercado de hoje
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
            A UniHub oferece cursos práticos, com metodologia focada em resultados reais.
            Desenvolva as habilidades que as empresas buscam e avance na sua carreira.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/cursos"
              className="px-7 py-3.5 bg-white text-blue-800 font-bold rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Ver cursos
            </Link>
            <a
              href="#"
              className="px-7 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm"
            >
              Entrar
            </a>
          </div>
        </div>
      </section>

      {/* ── Por que a UniHub ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Por que escolher a UniHub?
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">
              Uma plataforma pensada para quem leva a carreira a sério.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-3"
              >
                <span className="text-2xl">{item.icon}</span>
                <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cursos em destaque ── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Cursos em destaque</h2>
            <p className="text-gray-500 mt-2">
              Conteúdo atualizado, projetos práticos e certificado reconhecido.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.title}
                className="rounded-xl border border-gray-200 p-6 flex flex-col gap-4 hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 rounded-full px-3 py-1 w-fit">
                  {course.tag}
                </span>
                <h3 className="text-base font-bold text-gray-900 leading-snug">{course.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{course.description}</p>
                <div className="flex items-center gap-2 text-xs text-gray-400 pt-3 border-t border-gray-100">
                  <span className="font-medium">{course.duration}</span>
                  <span>·</span>
                  <span>{course.level}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/cursos"
              className="inline-block px-6 py-3 border-2 border-blue-700 text-blue-700 font-semibold rounded-lg hover:bg-blue-700 hover:text-white transition-colors text-sm"
            >
              Ver todos os cursos
            </Link>
          </div>
        </div>
      </section>

      {/* ── Para empresas ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-14">
          <div className="flex-1">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
              Para empresas
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-4 leading-snug">
              Capacite sua equipe com treinamentos sob medida
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              A UniHub desenvolve programas corporativos personalizados, alinhados às
              necessidades reais do seu negócio. Do onboarding técnico à formação de
              lideranças, cobrimos todo o ciclo de desenvolvimento profissional.
            </p>
            <p className="text-gray-500 leading-relaxed mb-7">
              Trabalhe com uma equipe especializada para estruturar trilhas de aprendizado
              que geram resultado mensurável dentro da sua organização.
            </p>
            <Link
              href="/empresas"
              className="inline-block px-6 py-3 bg-blue-700 text-white text-sm font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Conhecer soluções para empresas
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-1 gap-4">
            {[
              {
                title: "Treinamentos técnicos",
                desc: "Tecnologia, dados, produto e outras áreas estratégicas.",
              },
              {
                title: "Desenvolvimento de lideranças",
                desc: "Programas focados em gestão, comunicação e cultura.",
              },
              {
                title: "Onboarding estruturado",
                desc: "Integre novos colaboradores com trilhas padronizadas.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl border border-gray-200 px-6 py-5"
              >
                <p className="font-bold text-gray-900 text-sm mb-1">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sobre a UniHub ── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
              Sobre a UniHub
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-5 leading-snug">
              Educação com propósito e resultado
            </h2>
            <p className="text-gray-500 leading-relaxed mb-3">
              A UniHub nasceu para transformar a forma como profissionais aprendem e como
              empresas encontram talentos preparados. Combinamos metodologia ativa, conteúdo
              relevante e conexão direta com o mercado.
            </p>
            <p className="text-gray-500 leading-relaxed mb-7">
              Acreditamos que educação de qualidade deve ser acessível, prática e gerar
              impacto real na trajetória de quem aprende.
            </p>
            <Link
              href="/sobre"
              className="text-sm font-semibold text-blue-700 hover:underline"
            >
              Conheça nossa história →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            Pronto para dar o próximo passo na sua carreira?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Explore os cursos disponíveis, conecte-se com empresas parceiras e comece
            hoje mesmo a construir a carreira que você quer.
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
              Falar com a equipe
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
