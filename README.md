# UniHub Web

Website institucional da **UniHub**, plataforma de formação profissional voltada para capacitação prática e preparação para o mercado de trabalho.

Este repositório contém o **site público institucional**.  
A plataforma educacional (login dos alunos) roda em um sistema separado.

---

# Objetivo do projeto

Criar um site institucional moderno, rápido e fácil de manter que:

- apresente os cursos da UniHub
- explique a proposta educacional
- permita contato comercial
- direcione alunos para a plataforma de ensino

O site **não hospeda o sistema educacional**.  
Ele funciona como **landing + marketing site**.

---

# Stack tecnológica

O projeto segue o mesmo padrão dos sites da Sax:

- **Next.js (App Router)**
- **TypeScript**
- **TailwindCSS**
- **Vercel (deploy)**
- **GitHub (versionamento)**

Objetivo da stack:

- velocidade
- baixo custo
- deploy automático
- manutenção simples

---

# Arquitetura do site

Estrutura planejada de páginas:

/
Home

/cursos
Lista de cursos disponíveis

/sobre
Sobre a UniHub

/empresas
Treinamentos corporativos

/contato
Formulário de contato

---

# Integrações externas

A UniHub possui uma **plataforma educacional separada**.

O botão **Login** redireciona para:

https://app.unihub.com
(ajustar se necessário)

---

# Estrutura do projeto
src
├── app
│   ├── page.tsx
│   ├── cursos
│   ├── sobre
│   ├── empresas
│   └── contato
│
├── components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── CourseCard.tsx
│   └── CTA.tsx
│
└── styles

---

# Padrões de desenvolvimento

Este projeto segue algumas premissas importantes:

### 1 — Simplicidade
Evitar complexidade desnecessária.  
Este é um site institucional, não uma aplicação.

### 2 — Reuso de componentes
Componentes devem ser reutilizáveis.

### 3 — Performance
Evitar bibliotecas pesadas ou scripts externos desnecessários.

### 4 — SEO
Todas as páginas devem possuir:

- title
- description
- OpenGraph
- estrutura semântica

### 5 — Mobile first
O site deve funcionar perfeitamente em mobile.

---

# Deploy

Deploy automático via **Vercel**.

Fluxo:
commit → push → deploy automático

Branch `main` é produção.

---

# Manutenção

Este site é mantido pela equipe da **SAX Group**.

Atualizações são feitas via:

- GitHub
- Vercel
- CI automático

---

# Projetos relacionados

- SAX Group website
- Office Today website
- UniHub education platform




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

