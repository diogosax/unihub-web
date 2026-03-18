import Image from "next/image";
import Button from "@/components/ui/Button";

const studentFeatures = [
  {
    title: "Dashboard personalizado",
    body: "Cada aluno inicia com um painel que mostra trilhas, cursos e progresso — retomando exatamente do ponto onde parou.",
  },
  {
    title: "Gamificação e conquistas",
    body: "Boletim digital, recompensas e selos visíveis nos certificados emitidos ao concluir cada curso.",
  },
  {
    title: "Interação com orientadores",
    body: "Ambiente interativo com instrutores para esclarecer dúvidas e receber orientações acadêmicas de forma ágil.",
  },
];

const managerFeatures = [
  {
    title: "Overview de engajamento",
    body: "Dashboard dedicado com métricas resumidas de todos os colaboradores cadastrados — de fácil leitura e interpretação.",
  },
  {
    title: "Gestão de trilhas",
    body: "Crie e personalize trilhas de aprendizado por função, equipe ou departamento, alinhadas aos objetivos da empresa.",
  },
  {
    title: "Relatórios e análise",
    body: "Ferramentas para gerar relatórios sobre engajamento, presença, progresso e tempo de uso — ajustando trilhas em tempo real.",
  },
];

export default function PlatformFeaturesSection() {
  return (
    <section className="py-20 bg-white" id="plataforma">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3">
            Ecossistema UniHub
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark leading-tight mb-4">
            Experiência completa para alunos e gestores
          </h2>
          <p className="text-muted leading-relaxed">
            Uma plataforma desenhada para dois perfis essenciais — o colaborador em
            aprendizado e o gestor que precisa de visibilidade e controle.
          </p>
        </div>

        {/* Two panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Student panel */}
          <div className="bg-blue-tint rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center text-white">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-base font-extrabold text-dark">Experiência do Aluno</h3>
            </div>

            <div className="space-y-4 mb-7">
              {studentFeatures.map((f) => (
                <div key={f.title} className="flex gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-dark mb-0.5">{f.title}</p>
                    <p className="text-xs text-muted leading-relaxed">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl overflow-hidden border border-brand-primary/20 shadow-sm">
              <Image
                src="/images/platform-hero.svg"
                alt="Dashboard do aluno — UniHub"
                width={560}
                height={340}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Manager panel */}
          <div className="bg-surface rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-brand-pink flex items-center justify-center text-white">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-base font-extrabold text-dark">Experiência do Gestor</h3>
            </div>

            <div className="space-y-4 mb-7">
              {managerFeatures.map((f) => (
                <div key={f.title} className="flex gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-pink shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-dark mb-0.5">{f.title}</p>
                    <p className="text-xs text-muted leading-relaxed">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl overflow-hidden border border-border shadow-sm">
              <Image
                src="/images/platform-manager.png"
                alt="Dashboard do gestor — UniHub Analytics"
                width={900}
                height={540}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button href="/como-funciona" variant="outline">
            Ver como funciona a plataforma
          </Button>
        </div>
      </div>
    </section>
  );
}
