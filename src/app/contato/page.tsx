"use client";

export default function Contato() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#292E7F] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#46B4E3] mb-4">
            Fale Conosco
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Vamos começar!
          </h1>
          <p className="text-white/80 text-base max-w-2xl mx-auto leading-relaxed">
            Descubra como a UniHub Educação pode ser a sua parceira na jornada de
            capacitação e otimização de equipes. Entre em contato conosco e leve
            sua equipe para o próximo nível.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Form */}
          <div>
            <h2 className="text-xl font-extrabold text-[#2d2e32] mb-2">Fale conosco</h2>
            <p className="text-sm text-[#2d2e32]/60 mb-7">
              Preencha o formulário e nossa equipe retornará o mais rápido possível.
            </p>
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-semibold text-[#2d2e32]">
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  className="border border-[#e8e8e8] rounded px-4 py-3 text-sm text-[#2d2e32] placeholder-[#2d2e32]/30 focus:outline-none focus:ring-2 focus:border-transparent transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="company" className="text-sm font-semibold text-[#2d2e32]">
                  Nome da Empresa
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Sua empresa"
                  className="border border-[#e8e8e8] rounded px-4 py-3 text-sm text-[#2d2e32] placeholder-[#2d2e32]/30 focus:outline-none focus:ring-2 focus:border-transparent transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-semibold text-[#2d2e32]">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="border border-[#e8e8e8] rounded px-4 py-3 text-sm text-[#2d2e32] placeholder-[#2d2e32]/30 focus:outline-none focus:ring-2 focus:border-transparent transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-sm font-semibold text-[#2d2e32]">
                  Telefone
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+55 (00) 00000-0000"
                  className="border border-[#e8e8e8] rounded px-4 py-3 text-sm text-[#2d2e32] placeholder-[#2d2e32]/30 focus:outline-none focus:ring-2 focus:border-transparent transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="employees" className="text-sm font-semibold text-[#2d2e32]">
                  Quantidade de colaboradores
                </label>
                <select
                  id="employees"
                  defaultValue=""
                  className="border border-[#e8e8e8] rounded px-4 py-3 text-sm text-[#2d2e32] focus:outline-none focus:ring-2 focus:border-transparent transition bg-white"
                >
                  <option value="" disabled>
                    Selecione uma faixa
                  </option>
                  <option value="1-19">1 a 19 colaboradores</option>
                  <option value="20-99">20 a 99 colaboradores</option>
                  <option value="100+">Mais de 100 colaboradores</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="website" className="text-sm font-semibold text-[#2d2e32]">
                  Website da empresa
                </label>
                <input
                  id="website"
                  type="url"
                  placeholder="https://suaempresa.com.br"
                  className="border border-[#e8e8e8] rounded px-4 py-3 text-sm text-[#2d2e32] placeholder-[#2d2e32]/30 focus:outline-none focus:ring-2 focus:border-transparent transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-semibold text-[#2d2e32]">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Como podemos ajudar a sua empresa?"
                  className="border border-[#e8e8e8] rounded px-4 py-3 text-sm text-[#2d2e32] placeholder-[#2d2e32]/30 focus:outline-none focus:ring-2 focus:border-transparent transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 font-bold rounded text-sm text-white transition-colors"
                style={{ backgroundColor: "#E41663" }}
              >
                Enviar mensagem
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-xl font-extrabold text-[#2d2e32] mb-2">
                Canais de Comunicação
              </h2>
              <p className="text-sm text-[#2d2e32]/60 leading-relaxed">
                Você também pode entrar em contato conosco através dos nossos canais de
                comunicação e redes sociais.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-lg border border-[#e8e8e8] p-5 bg-white">
                <p className="font-semibold text-[#2d2e32] text-sm mb-1">
                  Telefone Comercial
                </p>
                <a
                  href="tel:+5508005917345"
                  className="text-sm font-bold transition-colors"
                  style={{ color: "#292E7F" }}
                >
                  +55 0800 591 7345
                </a>
              </div>

              <div className="rounded-lg border border-[#e8e8e8] p-5 bg-white">
                <p className="font-semibold text-[#2d2e32] text-sm mb-1">LinkedIn</p>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold transition-colors"
                  style={{ color: "#46B4E3" }}
                >
                  UniHub Educação no LinkedIn
                </a>
              </div>
            </div>

            <div className="rounded-lg p-6" style={{ backgroundColor: "#292E7F" }}>
              <p className="font-bold text-white text-sm mb-2">
                Tempo de resposta
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                Nossa equipe entra em contato o mais rápido possível para ajudar com suas
                dúvidas ou solicitações. Para urgências, mencione no campo de mensagem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
