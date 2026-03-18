import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "white";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
}

const styles: Record<Variant, string> = {
  primary:
    "bg-brand-primary text-white hover:bg-brand-primary/90",
  secondary:
    "bg-brand-pink text-white hover:bg-brand-pink/90",
  outline:
    "border-2 border-brand-primary text-brand-primary bg-white hover:bg-brand-primary hover:text-white",
  ghost:
    "text-brand-primary hover:underline",
  white:
    "bg-white text-brand-primary hover:bg-gray-100",
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-md font-bold text-sm transition-all duration-200";
  const cls = `${base} ${styles[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
