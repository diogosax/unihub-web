# UniHub Website

Official website for **UniHub**, rebuilt with **Next.js** and deployed on **Vercel**.

This project replaces the previous website hosted on **Duda**, with the goal of reducing recurring platform costs while preserving performance, SEO, visual identity, and commercial effectiveness.

---

## Project Goal

Rebuild the UniHub institutional website using a modern web stack while keeping the strongest parts of the legacy site:

- brand identity
- service and course positioning
- educational value proposition
- sales-oriented structure
- SEO and marketing foundations

The legacy Duda site is stored in this repository as a **reference backup** and must be treated as a source of inspiration only, not as implementation code.

---

## Current Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Vercel**
- **GitHub**

---

## Repository Purpose

This repository is the main codebase for the new UniHub website.

It includes:

- the current Next.js application
- the legacy Duda backup for reference
- project context for design and implementation decisions

---

## Legacy Reference

The folder `unihub-backup/` contains a structured export of the previous UniHub website from Duda.

It is included only as a **reference source** for:

- homepage structure
- visual hierarchy
- marketing copy
- course and service positioning
- illustrations
- logos and trust elements
- general brand direction

### Important

The Duda code must **not** be copied literally into the new application.

Do **not** reuse:

- Duda runtime scripts
- Duda widgets
- Duda-specific layout/runtime logic
- legacy implementation patterns

Use the backup only to extract:

- content
- hierarchy
- section order
- messaging
- design cues
- available assets

---

## Key Legacy Files

### Homepage reference
- `unihub-backup/Pages/home/index.html`
- `unihub-backup/Pages/home/style.css`

### Main visual assets
Reference images and illustrations are available in:
- `unihub-backup/Resources/images/`

---

## Business Context

UniHub is an institutional and marketing website for the UniHub brand.

Its goals are to:

- present courses and training tracks
- explain how UniHub works
- support commercial and institutional positioning
- capture leads and contact opportunities
- direct users to the educational platform when needed

### Important

This website is **not** the student platform itself.

The learning platform runs separately.

The website should function as:
- institutional presence
- marketing website
- landing structure for courses and corporate training

---

## Planned Information Architecture

Main page structure currently expected:

- `/` — Home
- `/cursos` — Courses
- `/sobre` — About UniHub
- `/empresas` — Corporate training
- `/contato` — Contact

This can evolve if the legacy backup suggests a better structure.

---

## External Integration

UniHub has a separate educational platform.

The **Login** button should redirect users to:

- `https://app.unihub.com`

Adjust later if needed.

---

## Development Workflow

This project follows a collaborative workflow across planning and implementation.

### Strategy and architecture
Handled through:
- Diogo Santana
- ChatGPT

Typical responsibilities:
- project direction
- site structure
- content strategy
- UX and business positioning
- technical planning

### Code implementation
Handled through:
- Claude Code

Typical responsibilities:
- frontend implementation
- component architecture
- Tailwind styling
- responsive behavior
- page reconstruction from approved references

---

## Language Rules

To keep the workflow consistent:

- **Strategic discussions:** Portuguese
- **Technical prompts for Claude:** English
- **Code:** English
- **Commit messages:** English
- **Website content/UI:** Portuguese

---

## Rebuild Principles

The new website should:

- feel modern, educational, and trustworthy
- be fully responsive
- preserve strong commercial and institutional clarity
- use clean semantic HTML
- prioritize performance
- be easy to expand into internal pages later
- avoid dependence on old builder/platform patterns

---

## SEO and Content Expectations

All major pages should be prepared for:

- strong titles
- descriptions
- semantic structure
- Open Graph support
- future landing page expansion

---

## Deploy

Deploy is handled through **Vercel**.

Flow:
commit → push → automatic deploy

Branch `main` is production.

---

## Maintenance

This site is maintained by the **SAX Group** team.

Updates are handled via:

- GitHub
- Vercel
- controlled iteration with ChatGPT and Claude Code

---

## Related Projects

- SAX Group website
- Office Today website
- UniHub education platform
