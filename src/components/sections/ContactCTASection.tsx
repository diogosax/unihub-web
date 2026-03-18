import Button from "@/components/ui/Button";

export default function ContactCTASection() {
  return (
    <section id="contato-cta" className="py-24 bg-brand-primary">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-4">
          Vamos começar
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5">
          Pronto para transformar sua equipe?
        </h2>
        <p className="text-white/75 text-base leading-relaxed mb-10 max-w-xl mx-auto">
          Fale com um de nossos especialistas e descubra como a UniHub pode capacitar
          cada colaborador com trilhas personalizadas e certificações internacionais.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contato" variant="white">
            Agendar demonstração
          </Button>
          <Button
            href="/como-funciona"
            variant="outline"
            className="border-white/40 text-white hover:bg-white/10 hover:border-white"
          >
            Como funciona
          </Button>
        </div>
      </div>
    </section>
  );
}
