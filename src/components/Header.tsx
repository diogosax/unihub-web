import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/carreiras", label: "Carreiras" },
  { href: "/como-funciona", label: "Como Funciona" },
  { href: "/certificacoes", label: "Certificações" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-[#e8e8e8]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/brand/logo-full.svg"
            alt="UniHub"
            width={140}
            height={50}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-semibold text-[#2d2e32] hover:text-[#E41663] transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <a
          href="#"
          className="text-sm font-bold text-white px-5 py-2 rounded transition-colors"
          style={{ backgroundColor: "#292E7F" }}
        >
          Entrar
        </a>
      </div>
    </header>
  );
}
