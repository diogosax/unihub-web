import Link from "next/link";

const navLinks = [
  { href: "/cursos", label: "Cursos" },
  { href: "/empresas", label: "Empresas" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="text-lg font-bold text-blue-600">UniHub</p>
          <p className="text-sm text-gray-500 mt-1 max-w-xs">
            Conectando estudantes a oportunidades reais no mercado profissional.
          </p>
        </div>

        <nav className="flex flex-wrap gap-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-gray-100">
        <p className="text-center text-xs text-gray-400 py-4">
          © {new Date().getFullYear()} UniHub. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
