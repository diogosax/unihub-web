import Link from "next/link";

const courses = [
  {
    tag: "Tecnologia",
    title: "Desenvolvimento Web Full Stack",
    description:
      "Aprenda HTML, CSS, JavaScript, React e Node.js do zero ao avançado com projetos reais.",
    duration: "6 meses",
    level: "Iniciante",
  },
  {
    tag: "Negócios",
    title: "Gestão de Projetos Ágeis",
    description:
      "Domine Scrum, Kanban e as principais ferramentas de gestão utilizadas pelo mercado.",
    duration: "3 meses",
    level: "Intermediário",
  },
  {
    tag: "Design",
    title: "UX/UI Design para Produtos Digitais",
    description:
      "Crie interfaces centradas no usuário com Figma, pesquisa e prototipagem profissional.",
    duration: "4 meses",
    level: "Iniciante",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center gap-6">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            Plataforma de Educação Profissional
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">
            Aprenda as habilidades que o mercado realmente exige
          </h1>
          <p className="text-lg text-blue-100 max-w-xl">
            A UniHub conecta estudantes a cursos práticos e empresas que contratam. Evolua sua
            carreira com quem entende o mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Link
              href="/cursos"
              className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Ver cursos
            </Link>
            <a
              href="#"
              className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Entrar
            </a>
          </div>
        </div>
      </section>

      {/* Cursos em destaque */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Cursos em destaque</h2>
            <p className="text-gray-500 mt-2">
              Conteúdo atualizado, projetos práticos e certificado reconhecido.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.title}
                className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 bg-blue-50 rounded-full px-3 py-1 w-fit">
                  {course.tag}
                </span>
                <h3 className="text-base font-bold text-gray-900">{course.title}</h3>
                <p className="text-sm text-gray-500 flex-1">{course.description}</p>
                <div className="flex items-center gap-3 text-xs text-gray-400 pt-2 border-t border-gray-100">
                  <span>{course.duration}</span>
                  <span>·</span>
                  <span>{course.level}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/cursos"
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              Ver todos os cursos →
            </Link>
          </div>
        </div>
      </section>

      {/* Para empresas */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Para empresas
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-4">
              Capacite sua equipe com treinamentos sob medida
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Oferecemos programas corporativos personalizados para desenvolver as competências
              que seu time precisa. Do onboarding técnico ao desenvolvimento de lideranças.
            </p>
            <Link
              href="/empresas"
              className="inline-block px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Saiba mais
            </Link>
          </div>
          <div className="flex-1 bg-blue-50 rounded-2xl p-10 text-center">
            <p className="text-4xl font-extrabold text-blue-600">+200</p>
            <p className="text-gray-500 text-sm mt-1">empresas parceiras</p>
            <p className="text-4xl font-extrabold text-blue-600 mt-6">+15k</p>
            <p className="text-gray-500 text-sm mt-1">profissionais formados</p>
            <p className="text-4xl font-extrabold text-blue-600 mt-6">92%</p>
            <p className="text-gray-500 text-sm mt-1">taxa de empregabilidade</p>
          </div>
        </div>
      </section>

      {/* Sobre a UniHub */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Sobre a UniHub
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-4">
            Educação com propósito e resultado
          </h2>
          <p className="text-gray-500 leading-relaxed">
            A UniHub nasceu para transformar a forma como profissionais aprendem e como
            empresas encontram talentos. Acreditamos que a educação de qualidade deve ser
            acessível, prática e conectada ao mercado real.
          </p>
          <Link
            href="/sobre"
            className="inline-block mt-6 text-sm font-semibold text-blue-600 hover:underline"
          >
            Conheça nossa história →
          </Link>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-blue-600 rounded-2xl px-8 py-14 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
              Pronto para dar o próximo passo?
            </h2>
            <p className="text-blue-100 mb-8 max-w-md mx-auto">
              Explore os cursos, conecte-se com empresas e comece hoje mesmo a construir a
              carreira que você quer.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/cursos"
                className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Explorar cursos
              </Link>
              <a
                href="#"
                className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Criar conta grátis
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
