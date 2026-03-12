import Image from "next/image";
import Link from "next/link";

const studentFeatures = [
  {
    title: "Dashboard e Progresso",
    description:
      "Cada aluno inicia sua jornada com um Dashboard personalizado que apresenta todas as trilhas e cursos selecionados pelo gestor da organização. Neste espaço, o aluno pode facilmente acompanhar seu progresso, visualizar os cursos e trilhas disponíveis e retomar a partir da última aula assistida.",
  },
  {
    title: "Interatividade com Orientadores",
    description:
      "Proporcionamos um ambiente interativo onde os alunos podem interagir diretamente com orientadores e instrutores, visualizar os níveis alcançados e o progresso nos cursos e trilhas atuais, além de esclarecer dúvidas e receber orientações acadêmicas de forma ágil e eficiente.",
  },
  {
    title: "Boletim e Gamificação",
    description:
      "Os alunos têm acesso a um boletim digital detalhado, fornecendo informações sobre seu desempenho, conquistas e recompensas. Implementamos elementos de gamificação para tornar o processo de aprendizado mais envolvente e motivador.",
  },
];

const managerFeatures = [
  {
    title: "Overview de Engajamento",
    description:
      "Gestores têm acesso a um dashboard especializado com informações detalhadas sobre o engajamento geral de todos os alunos cadastrados. O dashboard de engajamento apresenta dados resumidos de fácil entendimento, incluindo indicadores de desempenho que permitem avaliar o impacto do programa de aprendizado.",
  },
  {
    title: "Gerenciamento de Alunos e Equipes",
    description:
      "As empresas participantes têm acesso a uma plataforma robusta que permite a gestão eficiente de acessos, trilhas de aprendizado e cursos. Com funcionalidades avançadas, é possível monitorar o progresso individual de alunos ou equipes e personalizar trilhas para diferentes grupos.",
  },
  {
    title: "Gestão de Trilhas Personalizadas",
    description:
      "Os gestores têm acesso a ferramentas avançadas para criar e personalizar trilhas de aprendizado alinhadas aos objetivos de educação corporativa de cada empresa, além de acompanhar a eficiência e o progresso dos alunos nessas trilhas.",
  },
  {
    title: "Ferramentas de Análise e Relatórios",
    description:
      "Gestores têm acesso a ferramentas exclusivas para gerar relatórios detalhados sobre todas as principais métricas de engajamento, presença, progresso, tempo de uso e outros dados essenciais, permitindo ajustar trilhas para maximizar o desenvolvimento dos colaboradores.",
  },
];

export default function ComoFunciona() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#292E7F] text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#46B4E3] mb-4">
              Ecossistema UniHub
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Descubra como funciona o nosso ecossistema exclusivo
            </h1>
            <p className="text-white/80 leading-relaxed">
              Uma experiência educacional completa e interativa, focada em facilitar o
              aprendizado e o desenvolvimento profissional de equipes inteiras.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/como-funciona-hero.svg"
              alt="Como funciona a UniHub"
              width={480}
              height={380}
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Experiência para alunos */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E41663] mb-3">
              Alunos
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#2d2e32]">
              Conheça a Experiência para Alunos
            </h2>
            <p className="text-sm text-[#2d2e32]/60 mt-2 max-w-2xl">
              Oferecemos uma experiência educacional completa e interativa para nossos
              alunos, focada em facilitar o aprendizado e o desenvolvimento profissional.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {studentFeatures.map((f) => (
              <div
                key={f.title}
                className="rounded-lg border border-[#e8e8e8] p-6 bg-white"
              >
                <div
                  className="w-1 h-8 rounded mb-4"
                  style={{ backgroundColor: "#E41663" }}
                />
                <h3 className="font-bold text-[#2d2e32] text-sm mb-2">{f.title}</h3>
                <p className="text-sm text-[#2d2e32]/70 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics visual */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/images/analytics-section-1.svg"
              alt="Analytics UniHub"
              width={480}
              height={360}
              className="w-full max-w-md"
            />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#46B4E3] mb-3">
              UniHub Analytics
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#2d2e32] mb-5 leading-snug">
              Conheça a Experiência para Gestores
            </h2>
            <p className="text-sm text-[#2d2e32]/70 leading-relaxed mb-6">
              Também oferecemos uma experiência direta e simplificada para os gestores de
              cada organização. Tenha visibilidade total sobre o engajamento, o progresso
              e o desempenho da sua equipe em tempo real.
            </p>
            <Link
              href="/contato"
              className="inline-block px-6 py-2.5 font-bold rounded text-sm text-white transition-colors"
              style={{ backgroundColor: "#46B4E3" }}
            >
              Solicitar acesso
            </Link>
          </div>
        </div>
      </section>

      {/* Experiência para gestores */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#46B4E3] mb-3">
              Gestores
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#2d2e32]">
              Ferramentas para gestão eficaz
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {managerFeatures.map((f) => (
              <div
                key={f.title}
                className="rounded-lg border border-[#e8e8e8] p-6 bg-white"
              >
                <div
                  className="w-1 h-8 rounded mb-4"
                  style={{ backgroundColor: "#46B4E3" }}
                />
                <h3 className="font-bold text-[#2d2e32] text-sm mb-2">{f.title}</h3>
                <p className="text-sm text-[#2d2e32]/70 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#292E7F] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            Veja o ecossistema UniHub em ação
          </h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto text-sm leading-relaxed">
            Agende uma demonstração com nossa equipe e descubra como a UniHub pode
            transformar a educação corporativa da sua empresa.
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
