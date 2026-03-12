import Link from "next/link";

const solucoes = [
  {
    icon: "🎯",
    title: "Capacitação de equipes",
    description:
      "Desenvolvemos trilhas de aprendizado personalizadas para as áreas técnicas e de negócios da sua empresa. Cada programa é alinhado às metas e ao contexto da organização.",
  },
  {
    icon: "🛠️",
    title: "Treinamentos sob medida",
    description:
      "Elaboramos conteúdos exclusivos para as necessidades específicas do seu time. Do diagnóstico ao acompanhamento, cuidamos de todo o processo de capacitação.",
  },
  {
    icon: "🤝",
    title: "Parcerias educacionais",
    description:
      "Empresas parceiras da UniHub têm acesso preferencial a talentos formados pela plataforma, além de condições especiais para treinamentos contínuos.",
  },
  {
    icon: "📈",
    title: "Onboarding estruturado",
    description:
      "Integre novos colaboradores de forma eficiente com trilhas de onboarding padronizadas, reduzindo o tempo de adaptação e aumentando a retenção.",
  },
];

const diferenciais = [
  "Diagnóstico das necessidades da equipe antes da elaboração do programa",
  "Conteúdo desenvolvido por especialistas com experiência de mercado",
  "Formatos flexíveis: presencial, online ao vivo ou gravado",
  "Relatórios de progresso e engajamento da equipe",
  "Suporte dedicado durante toda a execução do programa",
  "Certificação UniHub para colaboradores concluintes",
];

export default function Empresas() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
            Soluções Corporativas
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-5 leading-tight">
            Desenvolva o potencial da sua equipe
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            A UniHub oferece programas de capacitação corporativa para empresas que querem
            investir no crescimento das suas equipes com conteúdo prático e relevante.
          </p>
          <div className="mt-8">
            <Link
              href="/contato"
              className="inline-block px-7 py-3.5 bg-white text-blue-800 font-bold rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Falar com nossa equipe
            </Link>
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
              O que oferecemos
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3">
              Capacitação de equipes
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">
              Soluções educacionais pensadas para o contexto corporativo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solucoes.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-gray-200 p-7 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2 text-base">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treinamentos sob medida — destaque */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-14">
          <div className="flex-1">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
              Metodologia
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-5 leading-snug">
              Treinamentos construídos para o seu negócio
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Nenhuma empresa é igual a outra. Por isso, nossos programas são desenvolvidos
              após um processo de diagnóstico que identifica as lacunas reais de conhecimento
              e as metas de desempenho da sua equipe.
            </p>
            <p className="text-gray-500 leading-relaxed mb-7">
              Trabalhamos em conjunto com o seu RH e gestores para garantir que o conteúdo
              seja aplicável desde o primeiro módulo.
            </p>
            <Link
              href="/contato"
              className="inline-block px-6 py-3 bg-blue-700 text-white text-sm font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Solicitar proposta
            </Link>
          </div>
          <div className="flex-1">
            <ul className="flex flex-col gap-3">
              {diferenciais.map((d) => (
                <li key={d} className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg px-5 py-4">
                  <span className="text-blue-600 font-bold text-base leading-none mt-0.5">✓</span>
                  <span className="text-sm text-gray-600 leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Parcerias educacionais */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
              Parcerias educacionais
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-5 leading-snug">
              Seja uma empresa parceira da UniHub
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Empresas parceiras têm acesso a uma rede de profissionais em formação,
              podendo participar de processos seletivos com talentos qualificados e
              alinhados às demandas do mercado.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Além disso, parceiros recebem condições diferenciadas para programas de
              capacitação interna e têm visibilidade para estudantes ativos na plataforma.
            </p>
            <Link
              href="/contato"
              className="inline-block px-6 py-3 border-2 border-blue-700 text-blue-700 font-semibold rounded-lg hover:bg-blue-700 hover:text-white transition-colors text-sm"
            >
              Entrar em contato
            </Link>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            Pronto para investir na sua equipe?
          </h2>
          <p className="text-blue-100 mb-8 max-w-md mx-auto">
            Entre em contato com nossa equipe e descubra como a UniHub pode
            apoiar o desenvolvimento profissional da sua empresa.
          </p>
          <Link
            href="/contato"
            className="inline-block px-7 py-3.5 bg-white text-blue-800 font-bold rounded-lg hover:bg-blue-50 transition-colors text-sm"
          >
            Falar com um consultor
          </Link>
        </div>
      </section>
    </>
  );
}
