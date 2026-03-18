import Image from "next/image";

const partners = [
  { name: "Apple Swift", src: "/brand/logo-swift.svg",     width: 70,  height: 44 },
  { name: "Microsoft",   src: "/brand/logo-microsoft.svg", width: 120, height: 44 },
  { name: "PMI",         src: "/brand/logo-pmi.svg",       width: 68,  height: 44 },
  { name: "Autodesk",    src: "/brand/logo-autodesk.svg",  width: 108, height: 44 },
  { name: "Adobe",       src: "/brand/logo-adobe.svg",     width: 84,  height: 44 },
];

export default function TrustBar() {
  return (
    <section className="bg-surface border-y border-border py-14" aria-label="Parceiros de certificação">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-muted mb-10">
          Certificações reconhecidas por
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {partners.map((p) => (
            <Image
              key={p.name}
              src={p.src}
              alt={p.name}
              width={p.width}
              height={p.height}
              className="h-9 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
