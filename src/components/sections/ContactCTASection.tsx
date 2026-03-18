import Button from "@/components/ui/Button";

export default function ContactCTASection() {
  return (
    <section id="contato-cta" className="py-24 bg-brand-indigo text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-5">
          Vamos Conversar
        </h2>
        <p className="text-white/70 text-base leading-relaxed mb-10">
          Fale com um de nossos especialistas e descubra como a UniHub pode transformar
          a sua organização através de um ecossistema completo de ensino corporativo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contato" variant="white">
            Agende uma demonstração
          </Button>
          <Button href="/como-funciona" variant="outline">
            <span className="text-white">Como funciona</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
