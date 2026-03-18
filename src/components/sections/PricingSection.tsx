import Button from "@/components/ui/Button";

const plans = [
  {
    name: "Startup",
    price: "R$ 99,90",
    unit: "/ aluno / mês",
    audience: "1 a 19 alunos",
    features: [
      "Acesso a todos os cursos",
      "Certificações internacionais",
      "Dashboard do aluno",
      "Suporte por e-mail",
    ],
    cta: "Começar agora",
    highlighted: false,
  },
  {
    name: "Business",
    price: "R$ 89,90",
    unit: "/ aluno / mês",
    audience: "20 a 99 alunos",
    features: [
      "Acesso a todos os cursos",
      "Certificações internacionais",
      "Dashboard do gestor",
      "Relatórios de progresso",
      "Suporte prioritário",
    ],
    cta: "Começar agora",
    highlighted: true,
  },
  {
    name: "Big Team",
    price: "R$ 79,90",
    unit: "/ aluno / mês",
    audience: "+100 alunos",
    features: [
      "Acesso a todos os cursos",
      "Certificações internacionais",
      "Dashboard corporativo",
      "Relatórios avançados",
      "Gerente de conta dedicado",
    ],
    cta: "Falar com vendas",
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section id="precos" className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3">
            Planos
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark leading-tight mb-4">
            Soluções completas para empresas de todos os tamanhos
          </h2>
          <p className="text-muted leading-relaxed">
            Planos escaláveis com todas as funcionalidades incluídas — do primeiro colaborador
            ao time inteiro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl bg-white border flex flex-col p-8 gap-7 ${
                plan.highlighted
                  ? "border-brand-primary shadow-lg ring-1 ring-brand-primary/20 relative"
                  : "border-border"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-wider text-white bg-brand-primary rounded-full px-4 py-1 whitespace-nowrap">
                  Mais popular
                </span>
              )}

              <div>
                <p className="text-lg font-extrabold text-dark">{plan.name}</p>
                <p className="text-xs text-muted mt-0.5">{plan.audience}</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className={`text-3xl font-extrabold ${plan.highlighted ? "text-brand-primary" : "text-dark"}`}>
                  {plan.price}
                </span>
                <span className="text-xs text-muted">{plan.unit}</span>
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-dark/75">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 mt-0.5 shrink-0 text-brand-primary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                href="/contato"
                variant={plan.highlighted ? "primary" : "outline"}
                className="w-full justify-center"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted mt-8">
          Todos os planos incluem acesso às 8 trilhas de carreira e às 5 certificações internacionais.
          <br />
          Tem dúvidas?{" "}
          <a href="/contato" className="text-brand-primary font-semibold hover:underline">
            Fale com nossa equipe.
          </a>
        </p>
      </div>
    </section>
  );
}
