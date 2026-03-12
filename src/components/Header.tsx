import Link from "next/link";

const navLinks = [
  { href: "/cursos", label: "Cursos" },
  { href: "/empresas", label: "Empresas" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-extrabold text-blue-700 tracking-tight hover:text-blue-800 transition-colors"
        >
          UniHub
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <a
          href="#"
          className="text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 transition-colors px-5 py-2 rounded-lg"
        >
          Entrar
        </a>
      </div>
    </header>
  );
}
