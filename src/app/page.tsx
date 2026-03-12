import Image from "next/image";
import Link from "next/link";

const certPartners = [
  { name: "Swift", src: "/brand/logo-swift.svg", width: 80 },
  { name: "Microsoft", src: "/brand/logo-microsoft.svg", width: 110 },
  { name: "PMI", src: "/brand/logo-pmi.svg", width: 70 },
  { name: "Autodesk", src: "/brand/logo-autodesk.svg", width: 100 },
  { name: "Adobe", src: "/brand/logo-adobe.svg", width: 80 },
];

const features = [
  {
    accent: "#E41663",
    title: "Educação sob medida",
    description:
      "Oferecemos uma ampla gama de cursos com o conteúdo cuidadosamente desenvolvido para diferentes atividades e posições dentro da sua empresa. Além disso, produzimos cursos específicos para suprir demandas exclusivas de cada organização.",
  },
  {
    accent: "#46B4E3",
    title: "Programa de Carreiras",
    description:
      "Organizamos nossos cursos em formatos de carreiras, permitindo que os alunos se tornem completamente capacitados em profissões como designer digital, desenvolvedor de sistemas, redes e infraestrutura e marketing digital.",
  },
  {
    accent: "#F1AA1E",
    title: "Solução para Skill Gaps",
    description:
      "Nossas soluções são projetadas para solucionar skill gaps, nivelando o conhecimento técnico e certificando equipes inteiras. Capacite seus colaboradores e aumente a eficiência e produtividade da sua empresa.",
  },
  {
    accent: "#292E7F",
    title: "Certificações Internacionais",
    description:
      "Nossos cursos proporcionam uma ampla variedade de certificações internacionais emitidas pelas principais empresas de software profissional: Autodesk, Adobe, Microsoft, Apple e PMI.",
  },
];

const platformHighlights = [
  {
    title: "Jornada colaborativa",
    description:
      "Cada colaborador possui um login único, permitindo o rastreamento personalizado do desempenho e progresso. Os gestores têm acesso a métricas detalhadas apresentadas de forma clara e intuitiva.",
  },
  {
    title: "Aulas eficientes",
    description:
      "Nossas aulas têm duração máxima de 45 minutos, garantindo uma experiência conveniente e produtiva para os colaboradores, sem a necessidade de materiais excessivos ou presença física.",
  },
  {
    title: "Analytics e relatórios",
    description:
      "Ferramentas exclusivas para gerar relatórios detalhados sobre engajamento, presença, progresso e tempo de uso. Informações essenciais para ajustar trilhas e maximizar o desenvolvimento.",
  },
];

const plans = [
  {
    name: "Startup",
    price: "R$ 99,90",
    unit: "/ aluno",
    range: "1 a 19 alunos",
    cta: "Comece Agora",
    highlight: false,
  },
  {
    name: "Business",
    price: "R$ 89,90",
    unit: "/ aluno",
    range: "20 a 99 alunos",
    cta: "Comece Agora",
    highlight: true,
  },
  {
    name: "Big Team",
    price: "R$ 79,90",
    unit: "/ aluno",
    range: "+100 alunos",
    cta: "Comece Agora",
    highlight: false,
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#292E7F] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#46B4E3] mb-4">
              Educação Corporativa Interativa
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              UniHub chegou para transformar a Educação Corporativa
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Descubra como nossos programas de educação corporativa podem elevar o seu
              negócio e como sua equipe pode atingir seu potencial através de uma
              variedade de cursos profissionalizantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/como-funciona"
                className="px-7 py-3 font-bold rounded text-sm text-[#292E7F] bg-white hover:bg-gray-100 transition-colors"
              >
                Saiba mais
              </Link>
              <Link
                href="/contato"
                className="px-7 py-3 font-bold rounded text-sm text-white border border-white/40 hover:bg-white/10 transition-colors"
              >
                Agende uma demonstração
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/home-hero.svg"
              alt="UniHub plataforma"
              width={500}
              height={400}
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* ── Certificações Internacionais ── */}
      <section className="py-14 bg-[#f7f7f7] border-b border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[#292E7F] mb-8">
            Certificações Internacionais
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 grayscale opacity-70">
            {certPartners.map((p) => (
              <Image
                key={p.name}
                src={p.src}
                alt={p.name}
                width={p.width}
                height={40}
                className="h-8 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Transformando empresas ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#2d2e32] mb-5">
              Transformando empresas através do conhecimento
            </h2>
            <p className="text-[#2d2e32]/70 leading-relaxed">
              No atual cenário empresarial, estar à frente da curva é crucial para
              manter a produtividade. Na UniHub, compreendemos que uma força de trabalho
              capacitada é a chave para uma empresa eficiente, produtiva e bem-sucedida.
              Por esse motivo, nos empenhamos em ajudar empresas a alcançar seu
              desempenho máximo por meio de um programa de educação corporativa de alta
              qualidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-lg border border-[#e8e8e8] p-7 bg-white hover:shadow-md transition-shadow"
              >
                <div
                  className="w-1 h-10 rounded mb-5"
                  style={{ backgroundColor: f.accent }}
                />
                <h3 className="font-bold text-[#2d2e32] text-base mb-3">{f.title}</h3>
                <p className="text-sm text-[#2d2e32]/70 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cursos para Carreiras do Futuro ── */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#E41663] mb-3">
              Plataforma
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#2d2e32] mb-5 leading-snug">
              Cursos para Carreiras do Futuro
            </h2>
            <p className="text-sm text-[#2d2e32]/70 leading-relaxed mb-4">
              Descubra como podemos ajudar a sua empresa a desenvolver e elevar posições,
              equipes ou até setores inteiros por meio de uma ampla gama de programas
              educativos adaptados para posições individuais, equipes e até setores inteiros.
            </p>
            <p className="text-sm text-[#2d2e32]/70 leading-relaxed mb-4">
              Oferecemos certificações para as soluções e softwares mais usados do mundo,
              vindos de empresas como Autodesk, Adobe, Microsoft, Apple e PMI.
            </p>
            <p className="text-sm text-[#2d2e32]/70 leading-relaxed mb-8">
              Nossa plataforma simplifica a experiência do aluno, eliminando a necessidade
              de materiais excessivos e a presença física, tornando o aprendizado mais
              acessível e conveniente. Nossas aulas são eficientes, com duração máxima de
              45 minutos.
            </p>
            <Link
              href="/carreiras"
              className="inline-block px-6 py-2.5 font-bold rounded text-sm text-white transition-colors"
              style={{ backgroundColor: "#E41663" }}
            >
              Conhecer cursos
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {platformHighlights.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg border border-[#e8e8e8] px-6 py-5"
              >
                <p className="font-bold text-[#2d2e32] text-sm mb-1">{item.title}</p>
                <p className="text-sm text-[#2d2e32]/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Planos ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#292E7F] mb-3">
              Soluções Completas para Empresas
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#2d2e32]">
              Planos escaláveis para empresas de todos os tamanhos
            </h2>
            <p className="text-sm text-[#2d2e32]/60 mt-3">
              Funcionalidades e ferramentas inclusas em todos os nossos pacotes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-lg border p-8 flex flex-col gap-5 ${
                  plan.highlight
                    ? "border-[#292E7F] shadow-lg"
                    : "border-[#e8e8e8]"
                }`}
              >
                {plan.highlight && (
                  <span
                    className="text-xs font-bold uppercase tracking-wider text-white rounded px-2.5 py-1 w-fit"
                    style={{ backgroundColor: "#292E7F" }}
                  >
                    Mais popular
                  </span>
                )}
                <div>
                  <p className="font-bold text-[#2d2e32] text-lg">{plan.name}</p>
                  <p className="text-xs text-[#2d2e32]/50 mt-0.5">{plan.range}</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-[#2d2e32]">
                    {plan.price}
                  </span>
                  <span className="text-sm text-[#2d2e32]/50">{plan.unit}</span>
                </div>
                <Link
                  href="/contato"
                  className={`w-full text-center px-6 py-2.5 rounded font-bold text-sm transition-colors ${
                    plan.highlight
                      ? "text-white"
                      : "text-[#292E7F] border border-[#292E7F] hover:bg-[#292E7F] hover:text-white"
                  }`}
                  style={plan.highlight ? { backgroundColor: "#292E7F" } : {}}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="py-20 bg-[#292E7F] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            Vamos Conversar
          </h2>
          <p className="text-white/70 text-base mb-10 max-w-xl mx-auto leading-relaxed">
            Fale com um de nossos especialistas e descubra como a UniHub pode transformar
            a sua organização através de um ecossistema completo de ensino corporativo.
          </p>
          <Link
            href="/contato"
            className="inline-block px-8 py-3.5 bg-white font-bold rounded text-sm hover:bg-gray-100 transition-colors"
            style={{ color: "#292E7F" }}
          >
            Agende uma demonstração
          </Link>
        </div>
      </section>
    </>
  );
}
