const pillars = [
  {
    color: "bg-brand-primary",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    stat: "5 certificações",
    heading: "Certificações Internacionais",
    body: "Microsoft, Adobe, Autodesk, Apple e PMI. Credenciais reconhecidas globalmente para elevar o nível técnico da sua equipe.",
  },
  {
    color: "bg-brand-pink",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    stat: "8 carreiras",
    heading: "Programa de Carreiras",
    body: "Trilhas completas por função: Developer, Designer, Administração, Analytics, Marketing e muito mais.",
  },
  {
    color: "bg-brand-teal",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path d="M21 21l-4.35-4.35" />
        <circle cx="11" cy="11" r="8" />
        <path d="M11 8v3l2 2" />
      </svg>
    ),
    stat: "Analytics completo",
    heading: "Visibilidade para Gestores",
    body: "Dashboards em tempo real, relatórios de progresso por colaborador, equipe ou setor, e trilhas personalizáveis.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white" id="sobre">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark leading-tight mb-4">
            Transformando empresas através do{" "}
            <span className="text-brand-primary">conhecimento</span>
          </h2>
          <p className="text-muted leading-relaxed">
            Na UniHub, compreendemos que uma força de trabalho capacitada é a chave para
            uma empresa eficiente, produtiva e bem-sucedida. Por isso, entregamos educação
            corporativa de alta qualidade com estrutura, resultado e escala.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.heading}
              className="bg-surface rounded-xl border border-border p-8 hover:shadow-md transition-shadow duration-200"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl text-white mb-5 ${p.color}`}>
                {p.icon}
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted mb-1">
                {p.stat}
              </p>
              <h3 className="text-base font-extrabold text-dark mb-3">{p.heading}</h3>
              <p className="text-sm text-muted leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
