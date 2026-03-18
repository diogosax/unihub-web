import SectionHeading from "@/components/ui/SectionHeading";
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
    cta: "Comece Agora",
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
    cta: "Comece Agora",
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
    cta: "Comece Agora",
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section id="precos" className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <SectionHeading
            eyebrow="Planos"
            title="Soluções Completas para Empresas"
            subtitle="Planos escaláveis para empresas de todos os tamanhos, com funcionalidades e ferramentas inclusas em todos os pacotes."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border bg-white p-8 flex flex-col gap-6 ${
                plan.highlighted
                  ? "border-brand-indigo shadow-lg ring-1 ring-brand-indigo/20"
                  : "border-border"
              }`}
            >
              {plan.highlighted && (
                <span className="text-xs font-bold uppercase tracking-wider text-white bg-brand-indigo rounded px-2.5 py-1 w-fit">
                  Mais popular
                </span>
              )}

              <div>
                <p className="text-lg font-extrabold text-dark">{plan.name}</p>
                <p className="text-xs text-dark/50 mt-0.5">{plan.audience}</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-dark">{plan.price}</span>
                <span className="text-xs text-dark/50">{plan.unit}</span>
              </div>

              <ul className="flex flex-col gap-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-dark/70">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 mt-0.5 shrink-0 text-brand-blue"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414L9 14.414 5.293 10.707a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                href="/contato"
                variant={plan.highlighted ? "secondary" : "outline"}
                className="w-full justify-center"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
