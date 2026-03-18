import Image from "next/image";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="bg-brand-indigo text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-4">
            Educação Corporativa Interativa
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            UniHub chegou para transformar a{" "}
            <span className="text-brand-blue">Educação Corporativa</span>
          </h1>
          <p className="text-base font-semibold text-white/80 mb-5">
            Transformando empresas através do conhecimento
          </p>
          <p className="text-base text-white/70 leading-relaxed mb-8">
            Descubra como nossos programas de educação corporativa podem elevar o seu
            negócio e como sua equipe pode atingir seu potencial através de uma variedade
            de cursos profissionalizantes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/como-funciona" variant="white">
              Saiba mais
            </Button>
            <Button href="/contato" variant="outline">
              <span className="text-white border-white">Agende uma demonstração</span>
            </Button>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/home-hero.svg"
            alt="Plataforma de educação corporativa UniHub"
            width={520}
            height={420}
            className="w-full max-w-sm md:max-w-md"
            priority
          />
        </div>
      </div>
    </section>
  );
}
