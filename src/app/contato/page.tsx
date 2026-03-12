"use client";
export default function Contato() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
            Fale Conosco
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-5 leading-tight">
            Estamos aqui para ajudar
          </h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto leading-relaxed">
            Seja você um estudante com dúvidas sobre os cursos ou uma empresa
            interessada em soluções corporativas, nossa equipe está pronta para conversar.
          </p>
        </div>
      </section>

      {/* Formulário + Info */}
      <section className="py-20">
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
                  className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
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
                  className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="type" className="text-sm font-semibold text-gray-700">
                  Você é
                </label>
                <select
                  id="type"
                  defaultValue=""
                  className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
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
                  className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
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
                  className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3.5 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors text-sm w-full"
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

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-5">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">E-mail</p>
                  <p className="text-sm text-gray-500">
                    {/* TODO: replace with real email */}
                    contato@unihub.com.br
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-5">
                <span className="text-2xl">🏢</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">Para empresas</p>
                  <p className="text-sm text-gray-500">
                    Quer capacitar sua equipe ou se tornar parceiro? Entre em contato pelo
                    formulário ao lado e mencione que representa uma empresa.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-5">
                <span className="text-2xl">🎓</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">Para estudantes</p>
                  <p className="text-sm text-gray-500">
                    Tem dúvidas sobre cursos, metodologia ou acesso à plataforma? Nossa equipe
                    de suporte responde em até 1 dia útil.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
              <p className="text-sm font-semibold text-blue-800 mb-1">Tempo de resposta</p>
              <p className="text-sm text-blue-700 leading-relaxed">
                Nossa equipe responde todas as mensagens em até{" "}
                <strong>1 dia útil</strong>. Para urgências, mencione no assunto da mensagem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
