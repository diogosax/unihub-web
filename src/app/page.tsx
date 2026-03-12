import Image from "next/image";
import Link from "next/link";

const certPartners = [
  { name: "Swift", src: "/brand/logo-swift.svg", width: 100 },
  { name: "Microsoft", src: "/brand/logo-microsoft.svg", width: 140 },
  { name: "PMI", src: "/brand/logo-pmi.svg", width: 88 },
  { name: "Autodesk", src: "/brand/logo-autodesk.svg", width: 126 },
  { name: "Adobe", src: "/brand/logo-adobe.svg", width: 100 },
];

const howItWorksSteps = [
  {
    number: "01",
    title: "Diagnóstico da equipe",
    description:
      "Avaliamos as necessidades da sua organização e mapeamos os skill gaps existentes para definir a trilha de capacitação mais adequada.",
  },
  {
    number: "02",
    title: "Trilhas de aprendizado",
    description:
      "Cada colaborador recebe uma trilha personalizada com aulas de até 45 minutos, acompanhamento de gestores e gamificação integrada.",
  },
  {
    number: "03",
    title: "Certificação e resultados",
    description:
      "Ao concluir os cursos, colaboradores recebem certificações internacionais reconhecidas pelo mercado e gestores acompanham os resultados em tempo real.",
  },
];

const features = [
  {
    accent: "#e22664",
    title: "Educação sob medida",
    description:
      "Oferecemos uma ampla gama de cursos com o conteúdo cuidadosamente desenvolvido para diferentes atividades e posições dentro da sua empresa. Além disso, produzimos cursos específicos para suprir demandas exclusivas de cada organização.",
  },
  {
    accent: "#45b6e5",
    title: "Programa de Carreiras",
    description:
      "Organizamos nossos cursos em formatos de carreiras, permitindo que os alunos se tornem completamente capacitados em profissões como designer digital, desenvolvedor de sistemas, redes e infraestrutura e marketing digital.",
  },
  {
    accent: "#eead32",
    title: "Solução para Skill Gaps",
    description:
      "Nossas soluções são projetadas para solucionar skill gaps, nivelando o conhecimento técnico e certificando equipes inteiras. Capacite seus colaboradores e aumente a eficiência e produtividade da sua empresa.",
  },
  {
    accent: "#e22664",
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
      <section
        className="text-white overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #45b6e5, #2c8fbe)",
          minHeight: "65vh",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[65vh]">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-white/80 mb-4">
              Educação Corporativa Interativa
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              A plataforma que transforma educação corporativa em vantagem
              competitiva
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Programas de capacitação, trilhas de carreira e certificações
              internacionais para empresas que querem evoluir sua equipe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contato"
                className="px-7 py-3 font-bold rounded text-sm text-white transition-colors"
                style={{ backgroundColor: "#e22664" }}
              >
                Agendar demonstração
              </Link>
              <Link
                href="/como-funciona"
                className="px-7 py-3 font-bold rounded text-sm text-white border border-white/50 hover:bg-white/10 transition-colors"
              >
                Saiba mais
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

      {/* ── Como funciona — 3 passos ── */}
      <section className="py-16 bg-white border-b border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[#45b6e5] mb-10">
            Como funciona
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howItWorksSteps.map((step) => (
              <div key={step.number} className="flex flex-col gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-extrabold shrink-0"
                  style={{ backgroundColor: "#e22664" }}
                >
                  {step.number}
                </div>
                <div>
                  <h3 className="font-bold text-[#2d2e32] text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#2d2e32]/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certificações Internacionais ── */}
      <section className="py-14 bg-[#f7f7f7] border-b border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[#45b6e5] mb-10">
            Certificações Internacionais
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 grayscale opacity-60">
            {certPartners.map((p) => (
              <Image
                key={p.name}
                src={p.src}
                alt={p.name}
                width={p.width}
                height={56}
                className="h-12 md:h-14 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Transformando empresas ── */}
      <section className="py-24 bg-white">
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
      <section className="py-24 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#e22664] mb-3">
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
              style={{ backgroundColor: "#e22664" }}
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
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#45b6e5] mb-3">
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
                    ? "border-[#e22664] shadow-lg"
                    : "border-[#e8e8e8]"
                }`}
              >
                {plan.highlight && (
                  <span
                    className="text-xs font-bold uppercase tracking-wider text-white rounded px-2.5 py-1 w-fit"
                    style={{ backgroundColor: "#e22664" }}
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
                      : "text-[#e22664] border border-[#e22664] hover:bg-[#e22664] hover:text-white"
                  }`}
                  style={plan.highlight ? { backgroundColor: "#e22664" } : {}}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section
        className="py-20 text-white"
        style={{ background: "linear-gradient(135deg, #45b6e5, #2c8fbe)" }}
      >
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
            style={{ color: "#e22664" }}
          >
            Agende uma demonstração
          </Link>
        </div>
      </section>
    </>
  );
}
