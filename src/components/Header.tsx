import Link from "next/link";

const navLinks = [
  { href: "/cursos", label: "Cursos" },
  { href: "/empresas", label: "Empresas" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-extrabold tracking-tight text-blue-800 hover:text-blue-900 transition-colors"
        >
          UniHub
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-semibold text-gray-600 hover:text-blue-800 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <a
          href="#"
          className="text-sm font-semibold text-white bg-blue-800 hover:bg-blue-900 transition-colors px-5 py-2 rounded"
        >
          Entrar
        </a>
      </div>
    </header>
  );
}
