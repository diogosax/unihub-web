"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const carreiraGroups = [
  {
    label: "Essentials",
    items: ["Informática Essencial", "Microsoft Office 365", "Google Workspace"],
  },
  {
    label: "Desenvolvedor de Sistemas",
    items: ["Desenvolvimento Web", "Desenvolvimento de Apps", "Desenvolvimento de Sistemas"],
  },
  {
    label: "Designer Digital",
    items: ["Design de Imagens na Prática", "Técnicas em Edição de Vídeos", "Design 3D na Prática"],
  },
  {
    label: "Administração",
    items: ["Gestão Contábil Essencial", "RH e DP Essencial", "Finanças Essencial"],
  },
  {
    label: "Outros",
    items: [
      "Redes e Infraestrutura",
      "Vendas e Marketing Digital",
      "UniHub Analytics",
      "UniHub Soft Skills",
      "Inglês UniHub",
    ],
  },
];

const topLinks = [
  { href: "/como-funciona", label: "Como Funciona" },
  { href: "/certificacoes", label: "Certificações" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" onClick={() => setMobileOpen(false)}>
          <Image
            src="/brand/logo-full.svg"
            alt="UniHub"
            width={140}
            height={50}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navegação principal">
          {/* Carreiras dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 text-sm font-semibold text-dark hover:text-brand-pink transition-colors"
              onClick={() => setCareersOpen((v) => !v)}
              aria-expanded={careersOpen}
              aria-haspopup="true"
            >
              Carreiras
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-4 h-4 transition-transform duration-200 ${careersOpen ? "rotate-180" : ""}`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {careersOpen && (
              <>
                {/* backdrop */}
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setCareersOpen(false)}
                />
                <div className="absolute left-0 top-full mt-2 z-20 bg-white border border-border rounded-xl shadow-xl w-[600px] p-6 grid grid-cols-2 gap-6">
                  {carreiraGroups.map((group) => (
                    <div key={group.label}>
                      <p className="text-xs font-bold uppercase tracking-wider text-brand-pink mb-2">
                        {group.label}
                      </p>
                      <ul className="space-y-1">
                        {group.items.map((item) => (
                          <li key={item}>
                            <Link
                              href="/carreiras"
                              className="text-sm text-dark/70 hover:text-brand-indigo hover:font-semibold transition-colors"
                              onClick={() => setCareersOpen(false)}
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {topLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-semibold text-dark hover:text-brand-pink transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.unihub.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-white px-5 py-2 rounded bg-brand-indigo hover:bg-brand-indigo/90 transition-colors"
          >
            Entrar
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-dark transition-transform duration-200 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-dark transition-opacity duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-dark transition-transform duration-200 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white px-6 py-6 flex flex-col gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-pink mb-3">
              Carreiras
            </p>
            <div className="space-y-4">
              {carreiraGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-xs font-semibold text-dark/50 uppercase tracking-wide mb-1.5">
                    {group.label}
                  </p>
                  <ul className="space-y-1 pl-2">
                    {group.items.map((item) => (
                      <li key={item}>
                        <Link
                          href="/carreiras"
                          className="text-sm text-dark/80 hover:text-brand-indigo"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-4 flex flex-col gap-3">
            {topLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-semibold text-dark hover:text-brand-pink"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>

          <a
            href="https://app.unihub.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-sm font-bold text-white text-center px-5 py-2.5 rounded bg-brand-indigo hover:bg-brand-indigo/90 transition-colors"
          >
            Entrar na plataforma
          </a>
        </div>
      )}
    </header>
  );
}
