import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "white";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-pink text-white hover:bg-brand-pink/90",
  secondary:
    "bg-brand-indigo text-white hover:bg-brand-indigo/90",
  outline:
    "border-2 border-brand-indigo text-brand-indigo hover:bg-brand-indigo hover:text-white",
  white:
    "bg-white text-brand-indigo hover:bg-gray-100",
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded font-bold text-sm transition-colors";
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
