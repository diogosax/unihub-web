interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  titleClassName?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  titleClassName = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-widest text-brand-pink mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-extrabold text-dark leading-tight ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-dark/65 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
