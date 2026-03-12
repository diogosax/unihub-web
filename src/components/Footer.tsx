import Link from "next/link";

const navLinks = [
  { href: "/cursos", label: "Cursos" },
  { href: "/empresas", label: "Empresas" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p className="text-xl font-extrabold text-white mb-3">UniHub</p>
          <p className="text-sm leading-relaxed">
            Formação profissional prática e conectada ao mercado. Aprenda com quem entende onde
            você quer chegar.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Navegação
          </p>
          <ul className="flex flex-col gap-2">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Contato
          </p>
          <p className="text-sm leading-relaxed">
            Tem dúvidas ou quer ser parceiro?
          </p>
          <Link
            href="/contato"
            className="inline-block mt-3 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            Fale conosco →
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <p className="text-center text-xs text-gray-600 py-5">
          © {new Date().getFullYear()} UniHub. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
