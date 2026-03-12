import { Mail, Building2, GraduationCap } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "E-mail",
    description: "contato@unihub.com.br", // TODO: replace with real email
  },
  {
    icon: Building2,
    title: "Para empresas",
    description:
      "Quer capacitar sua equipe ou tornar-se parceiro? Mencione que representa uma empresa no formulário.",
  },
  {
    icon: GraduationCap,
    title: "Para estudantes",
    description:
      "Dúvidas sobre cursos, metodologia ou acesso à plataforma? Nossa equipe responde em até 1 dia útil.",
  },
];

export default function Contato() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
            Fale Conosco
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-5 leading-tight">
            Estamos aqui para ajudar
          </h1>
          <p className="text-blue-200 text-base max-w-xl mx-auto leading-relaxed">
            Seja você um estudante com dúvidas sobre os cursos ou uma empresa interessada
            em soluções corporativas, nossa equipe está pronta para conversar.
          </p>
        </div>
      </section>

      {/* Formulário + Info */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Formulário */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Envie uma mensagem</h2>
            <p className="text-sm text-gray-500 mb-7">
              Preencha o formulário e nossa equipe retornará em até 1 dia útil.
            </p>
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-semibold text-gray-700">
                  Nome completo
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  className="border border-gray-300 rounded px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="border border-gray-300 rounded px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="type" className="text-sm font-semibold text-gray-700">
                  Você é
                </label>
                <select
                  id="type"
                  defaultValue=""
                  className="border border-gray-300 rounded px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent transition bg-white"
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option value="student">Estudante / Profissional</option>
                  <option value="company">Empresa / RH</option>
                  <option value="other">Outro</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-sm font-semibold text-gray-700">
                  Assunto
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Ex: Dúvida sobre cursos"
                  className="border border-gray-300 rounded px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Escreva sua mensagem aqui..."
                  className="border border-gray-300 rounded px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-blue-800 text-white font-bold rounded hover:bg-blue-900 transition-colors text-sm w-full"
              >
                Enviar mensagem
              </button>
            </form>
          </div>

          {/* Informações de contato */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Informações de contato</h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Prefere entrar em contato diretamente? Use os canais abaixo.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {contactMethods.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 rounded border border-gray-200 p-5 bg-white"
                >
                  <div className="w-9 h-9 rounded bg-blue-50 flex items-center justify-center shrink-0">
                    <Icon size={18} strokeWidth={1.75} className="text-blue-800" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-0.5">{title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#f5f7fb] border border-gray-200 rounded p-6">
              <p className="text-sm font-semibold text-gray-900 mb-1">Tempo de resposta</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Nossa equipe responde todas as mensagens em até{" "}
                <strong className="text-gray-700">1 dia útil</strong>. Para urgências,
                mencione no assunto da mensagem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
