import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/carreiras", label: "Carreiras" },
  { href: "/como-funciona", label: "Como Funciona" },
  { href: "/certificacoes", label: "Certificações" },
  { href: "/contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#2d2e32] text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <Image
              src="/brand/logo-full.svg"
              alt="UniHub"
              width={120}
              height={43}
            />
          </div>
          <p className="text-sm leading-relaxed">
            Educação Corporativa Interativa. Transformando empresas através do
            conhecimento.
          </p>
          <p className="text-sm mt-3">
            <a
              href="tel:+5508005917345"
              className="hover:text-white transition-colors"
            >
              +55 0800 591 7345
            </a>
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-xs font-bold text-white uppercase tracking-widest mb-4">
            Navegação
          </p>
          <ul className="flex flex-col gap-2.5">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-sm hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-bold text-white uppercase tracking-widest mb-4">
            Contato
          </p>
          <p className="text-sm leading-relaxed mb-3">
            Agende uma demonstração e descubra como a UniHub pode transformar
            sua organização.
          </p>
          <Link
            href="/contato"
            className="text-sm font-semibold hover:text-white transition-colors"
            style={{ color: "#45b6e5" }}
          >
            Agendar demonstração
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="text-center text-xs text-gray-600 py-5">
          © {new Date().getFullYear()} Sax Group | UniHub Educação. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
