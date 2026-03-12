import Link from "next/link";
import { Target, Wrench, Award, Users } from "lucide-react";

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
    icon: Target,
    title: "Foco no mercado",
    description: "Currículo construído com profissionais ativos nas áreas.",
  },
  {
    icon: Wrench,
    title: "Aprendizado prático",
    description: "Projetos reais desde o primeiro módulo.",
  },
  {
    icon: Award,
    title: "Certificado reconhecido",
    description: "Comprove suas competências para recrutadores.",
  },
  {
    icon: Users,
    title: "Comunidade ativa",
    description: "Aprenda junto com outros profissionais em evolução.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36 flex flex-col items-center text-center gap-7">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-300 border border-blue-700 rounded px-4 py-1.5">
            Plataforma de Educação Profissional
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl tracking-tight">
            Formação profissional para o mercado de hoje
          </h1>
          <p className="text-lg md:text-xl text-blue-200 max-w-2xl leading-relaxed font-medium">
            A UniHub oferece cursos práticos com metodologia focada em resultados reais.
            Desenvolva as habilidades que as empresas buscam e avance na sua carreira.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/cursos"
              className="px-7 py-3 bg-white text-blue-900 font-bold rounded text-sm hover:bg-blue-50 transition-colors"
            >
              Ver cursos
            </Link>
            <a
              href="#"
              className="px-7 py-3 border border-blue-500 text-white font-semibold rounded text-sm hover:bg-white/10 transition-colors"
            >
              Entrar
            </a>
          </div>
        </div>
      </section>

      {/* ── Por que a UniHub ── */}
      <section className="py-20 bg-[#f5f7fb]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Por que escolher a UniHub?
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
              Uma plataforma pensada para quem leva a carreira a sério.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded border border-gray-200 p-6 flex flex-col gap-3"
              >
                <div className="w-9 h-9 rounded bg-blue-50 flex items-center justify-center">
                  <Icon size={18} strokeWidth={1.75} className="text-blue-800" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cursos em destaque ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Cursos em destaque</h2>
            <p className="text-gray-500 mt-2 text-sm">
              Conteúdo atualizado, projetos práticos e certificado reconhecido.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.title}
                className="rounded border border-gray-200 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow bg-white"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 rounded px-2.5 py-1 w-fit">
                  {course.tag}
                </span>
                <h3 className="text-base font-bold text-gray-900 leading-snug">{course.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{course.description}</p>
                <div className="flex items-center gap-2 text-xs text-gray-400 pt-3 border-t border-gray-100">
                  <span className="font-medium text-gray-500">{course.duration}</span>
                  <span>·</span>
                  <span>{course.level}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/cursos"
              className="inline-block px-6 py-2.5 border border-blue-800 text-blue-800 font-semibold rounded text-sm hover:bg-blue-800 hover:text-white transition-colors"
            >
              Ver todos os cursos
            </Link>
          </div>
        </div>
      </section>

      {/* ── Para empresas ── */}
      <section className="py-20 bg-[#f5f7fb]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-14">
          <div className="flex-1">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-800">
              Para empresas
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-5 leading-snug">
              Capacite sua equipe com treinamentos sob medida
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4 text-sm">
              A UniHub desenvolve programas corporativos personalizados, alinhados às
              necessidades reais do seu negócio. Do onboarding técnico à formação de
              lideranças, cobrimos todo o ciclo de desenvolvimento profissional.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8 text-sm">
              Trabalhamos com o seu RH e gestores para estruturar trilhas de aprendizado
              que geram resultado mensurável dentro da sua organização.
            </p>
            <Link
              href="/empresas"
              className="inline-block px-6 py-2.5 bg-blue-800 text-white text-sm font-semibold rounded hover:bg-blue-900 transition-colors"
            >
              Conhecer soluções para empresas
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-1 gap-3">
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
                className="bg-white rounded border border-gray-200 px-6 py-5"
              >
                <p className="font-bold text-gray-900 text-sm mb-1">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sobre a UniHub ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-800">
              Sobre a UniHub
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-5 leading-snug">
              Educação com propósito e resultado
            </h2>
            <p className="text-gray-500 leading-relaxed mb-3 text-sm">
              A UniHub nasceu para transformar a forma como profissionais aprendem e como
              empresas encontram talentos preparados. Combinamos metodologia ativa, conteúdo
              relevante e conexão direta com o mercado.
            </p>
            <p className="text-gray-500 leading-relaxed mb-7 text-sm">
              Acreditamos que educação de qualidade deve ser acessível, prática e gerar
              impacto real na trajetória de quem aprende.
            </p>
            <Link
              href="/sobre"
              className="text-sm font-semibold text-blue-800 hover:underline"
            >
              Conheça nossa história
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            Pronto para dar o próximo passo na sua carreira?
          </h2>
          <p className="text-blue-200 text-base mb-10 max-w-xl mx-auto leading-relaxed">
            Explore os cursos disponíveis, conecte-se com empresas parceiras e comece
            hoje mesmo a construir a carreira que você quer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cursos"
              className="px-7 py-3 bg-white text-blue-900 font-bold rounded text-sm hover:bg-blue-50 transition-colors"
            >
              Explorar cursos
            </Link>
            <Link
              href="/contato"
              className="px-7 py-3 border border-blue-500 text-white font-semibold rounded text-sm hover:bg-white/10 transition-colors"
            >
              Falar com a equipe
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
