const steps = [
  {
    number: "01",
    color: "bg-brand-primary",
    title: "Diagnóstico de Competências",
    body: "Identificamos as lacunas de habilidades de cada colaborador com base no seu cargo, departamento e objetivos da empresa.",
  },
  {
    number: "02",
    color: "bg-brand-teal",
    title: "Trilha Personalizada",
    body: "A plataforma monta automaticamente uma jornada de aprendizado sob medida — cursos, módulos e conteúdos alinhados ao perfil de cada pessoa.",
  },
  {
    number: "03",
    color: "bg-brand-pink",
    title: "Capacitação Prática",
    body: "Aulas objetivas de até 45 min, gamificação, boletim digital e interação com orientadores para garantir engajamento e resultado real.",
  },
  {
    number: "04",
    color: "bg-brand-yellow",
    title: "Certificação Internacional",
    body: "Ao concluir a trilha, o colaborador obtém selos e certificações reconhecidas globalmente — Microsoft, Adobe, Autodesk, Apple e PMI.",
  },
];

export default function AnalyticsSection() {
  return (
    <section className="py-20 bg-blue-tint" id="jornada">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3">
            Aprendizado Inteligente
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark leading-tight mb-4">
            Jornadas personalizadas para cada colaborador
          </h2>
          <p className="text-muted leading-relaxed">
            Nossa plataforma identifica o nível atual de cada pessoa e constrói um caminho
            de aprendizado único — do diagnóstico à certificação internacional.
          </p>
        </div>

        {/* Step flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative bg-white rounded-2xl p-7 border border-border shadow-sm">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-6 border-t-2 border-dashed border-border z-10" />
              )}

              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl text-white text-sm font-extrabold mb-5 ${step.color}`}>
                {step.number}
              </div>

              <h3 className="text-sm font-extrabold text-dark mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom concept note */}
        <div className="mt-12 bg-white rounded-2xl border border-brand-primary/20 p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6 text-brand-primary">
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm font-extrabold text-dark mb-1">
              Trilhas adaptadas por função e equipe
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Gestores configuram trilhas específicas por departamento. A plataforma aprende com o progresso de cada colaborador e sugere os próximos passos automaticamente.
            </p>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary bg-blue-tint px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary inline-block" />
              Em breve: IA adaptativa
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
