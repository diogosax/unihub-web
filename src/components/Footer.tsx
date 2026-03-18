import Link from "next/link";
import Image from "next/image";

const navColumns = [
  {
    heading: "Carreiras",
    links: [
      { label: "Essentials", href: "/carreiras" },
      { label: "Desenvolvedor de Sistemas", href: "/carreiras" },
      { label: "Designer Digital", href: "/carreiras" },
      { label: "Administração", href: "/carreiras" },
      { label: "Redes e Infraestrutura", href: "/carreiras" },
      { label: "Vendas e Marketing", href: "/carreiras" },
    ],
  },
  {
    heading: "Plataforma",
    links: [
      { label: "Como Funciona", href: "/como-funciona" },
      { label: "Certificações", href: "/certificacoes" },
      { label: "UniHub Analytics", href: "/carreiras" },
      { label: "Planos e Preços", href: "/#precos" },
    ],
  },
  {
    heading: "Empresa",
    links: [
      { label: "Contato", href: "/contato" },
      { label: "Agendar demonstração", href: "/contato" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Top section — light */}
      <div className="bg-surface border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image src="/brand/logo-full.svg" alt="UniHub" width={120} height={43} />
            </div>
            <p className="text-sm text-muted leading-relaxed mb-5">
              Educação Corporativa Interativa.<br />
              Transformando empresas através do conhecimento.
            </p>
            <a
              href="https://linkedin.com/company/unihub-edu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="UniHub no LinkedIn"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-brand-primary transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-bold text-dark uppercase tracking-widest mb-4">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-sm text-muted hover:text-brand-primary transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar — dark */}
      <div className="bg-dark border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Sax Group | UniHub Educação. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-500">made with ❤️ in Tampa</p>
        </div>
      </div>
    </footer>
  );
}
