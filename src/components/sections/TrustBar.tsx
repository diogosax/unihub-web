import Image from "next/image";

const partners = [
  { name: "Apple Swift", src: "/brand/logo-swift.svg", width: 70, height: 40 },
  { name: "Microsoft", src: "/brand/logo-microsoft.svg", width: 110, height: 40 },
  { name: "PMI", src: "/brand/logo-pmi.svg", width: 60, height: 40 },
  { name: "Autodesk", src: "/brand/logo-autodesk.svg", width: 100, height: 40 },
  { name: "Adobe", src: "/brand/logo-adobe.svg", width: 80, height: 40 },
];

export default function TrustBar() {
  return (
    <section className="py-12 bg-surface border-b border-border" aria-label="Parceiros de certificação">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-brand-indigo mb-8">
          Certificações Internacionais
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {partners.map((p) => (
            <Image
              key={p.name}
              src={p.src}
              alt={p.name}
              width={p.width}
              height={p.height}
              className="h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
