import Link from "next/link";

const solucoes = [
  {
    title: "Capacitação de equipes",
    description:
      "Desenvolvemos trilhas de aprendizado personalizadas para as áreas técnicas e de negócios da sua empresa. Cada programa é alinhado às metas e ao contexto da organização.",
  },
  {
    title: "Treinamentos sob medida",
    description:
      "Elaboramos conteúdos exclusivos para as necessidades específicas do seu time. Do diagnóstico ao acompanhamento, cuidamos de todo o processo de capacitação.",
  },
  {
    title: "Parcerias educacionais",
    description:
      "Empresas parceiras da UniHub têm acesso preferencial a talentos formados pela plataforma, além de condições especiais para treinamentos contínuos.",
  },
  {
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
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
            Soluções Corporativas
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-5 leading-tight">
            Desenvolva o potencial da sua equipe
          </h1>
          <p className="text-blue-200 text-base max-w-2xl mx-auto leading-relaxed">
            A UniHub oferece programas de capacitação corporativa para empresas que querem
            investir no crescimento das suas equipes com conteúdo prático e relevante.
          </p>
          <div className="mt-8">
            <Link
              href="/contato"
              className="inline-block px-7 py-3 bg-white text-blue-900 font-bold rounded text-sm hover:bg-blue-50 transition-colors"
            >
              Falar com nossa equipe
            </Link>
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-800">
              O que oferecemos
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3">
              Capacitação de equipes
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              Soluções educacionais pensadas para o contexto corporativo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {solucoes.map((s) => (
              <div
                key={s.title}
                className="rounded border border-gray-200 p-7 hover:border-blue-300 hover:shadow-sm transition-all bg-white"
              >
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treinamentos sob medida */}
      <section className="py-20 bg-[#f5f7fb]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-14">
          <div className="flex-1">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-800">
              Metodologia
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-5 leading-snug">
              Treinamentos construídos para o seu negócio
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4 text-sm">
              Nenhuma empresa é igual a outra. Por isso, nossos programas são desenvolvidos
              após um processo de diagnóstico que identifica as lacunas reais de conhecimento
              e as metas de desempenho da sua equipe.
            </p>
            <p className="text-gray-500 leading-relaxed mb-7 text-sm">
              Trabalhamos em conjunto com o seu RH e gestores para garantir que o conteúdo
              seja aplicável desde o primeiro módulo.
            </p>
            <Link
              href="/contato"
              className="inline-block px-6 py-2.5 bg-blue-800 text-white text-sm font-semibold rounded hover:bg-blue-900 transition-colors"
            >
              Solicitar proposta
            </Link>
          </div>
          <div className="flex-1">
            <ul className="flex flex-col gap-3">
              {diferenciais.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-3 bg-white border border-gray-200 rounded px-5 py-4"
                >
                  <span className="text-blue-800 font-bold text-sm leading-none shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-sm text-gray-600 leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Parcerias educacionais */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-800">
              Parcerias educacionais
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-5 leading-snug">
              Seja uma empresa parceira da UniHub
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4 text-sm">
              Empresas parceiras têm acesso a uma rede de profissionais em formação,
              podendo participar de processos seletivos com talentos qualificados e
              alinhados às demandas do mercado.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8 text-sm">
              Além disso, parceiros recebem condições diferenciadas para programas de
              capacitação interna e têm visibilidade para estudantes ativos na plataforma.
            </p>
            <Link
              href="/contato"
              className="inline-block px-6 py-2.5 border border-blue-800 text-blue-800 font-semibold rounded text-sm hover:bg-blue-800 hover:text-white transition-colors"
            >
              Entrar em contato
            </Link>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            Pronto para investir na sua equipe?
          </h2>
          <p className="text-blue-200 mb-8 max-w-md mx-auto text-sm">
            Entre em contato com nossa equipe e descubra como a UniHub pode
            apoiar o desenvolvimento profissional da sua empresa.
          </p>
          <Link
            href="/contato"
            className="inline-block px-7 py-3 bg-white text-blue-900 font-bold rounded text-sm hover:bg-blue-50 transition-colors"
          >
            Falar com um consultor
          </Link>
        </div>
      </section>
    </>
  );
}
