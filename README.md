# Kavindu Aluthwaththa - Portfolio

A modern, glass-first portfolio built on Next.js 15 (App Router), TypeScript, MDX and shadcn/ui. Designed for a mixed audience of recruiters, freelance clients, and the dev community, with a Linear/Vercel-inspired aesthetic.

> **Live:** [kavindualuthwaththa.com](https://kavindualuthwaththa.com)

## Tech stack

- **Framework:** Next.js 15 (App Router, RSC)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3 + design tokens, shadcn/ui (`new-york`)
- **Content:** MDX via [Velite](https://velite.js.org/) with typed (zod) frontmatter
- **Motion:** [`motion`](https://motion.dev) (Framer Motion successor) - reduced-motion aware
- **Forms:** zod + Sonner toasts, Formspree as the email transport
- **Search:** [`cmdk`](https://cmdk.paco.me/) command palette (Ctrl/Cmd-K)
- **Fonts:** [Geist Sans](https://vercel.com/font) + Geist Mono
- **Analytics:** Vercel Analytics + Speed Insights
- **SEO:** Native Next sitemap/robots, dynamic OG image generation, Person JSON-LD

## Project structure

```
src/
  app/                      Next.js App Router pages and API routes
    api/og/                 Dynamic OG image generation
    api/contact/            Server route for the contact form
    projects/[slug]/        MDX-rendered case studies
    writing/[slug]/         MDX-rendered essays
  components/
    chrome/                 FloatingNav, Footer, CommandPalette, PageTransition
    primitives/             GlassCard, AuroraBackground, TechChip, Mdx, etc
    sections/               Composed page sections (BentoHero, Timeline, etc)
    ui/                     shadcn primitives (button, dialog, command, ...)
  content/data/             Typed site config, skills, experience, education
  lib/                      schemas, utils
  styles/                   global stylesheet (tokens, aurora, scrollbar)
content/                    MDX source
  projects/                 One file per case study
  writing/                  One file per essay
public/                     Static assets (favicons, manifest, project covers)
.velite/                    Auto-generated typed content collections
```

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
```

## Production build

```bash
npm run build        # Builds Velite collections then Next.js
npm run start        # Serves the production build locally
npm run lint         # ESLint
```

## Adding a new case study

1. Create `content/projects/<slug>.mdx`
2. Use the schema in [`velite.config.ts`](velite.config.ts) for frontmatter (title, summary, role, stack, year, type, featured, links, metrics).
3. Drop a cover image somewhere under `public/` and reference it from frontmatter as a relative path.
4. Body markdown is your case study - I keep them structured as Problem / My role / Architecture / Key decisions / Outcome.

Velite type-checks the frontmatter at build time and regenerates `.velite/index.d.ts`, so the new project shows up in `projects` immediately.

## Adding a new essay

Same flow under `content/writing/<slug>.mdx`. Required frontmatter is `title`, `summary`, `date`, optional `tags` and `published`.

## Environment variables

Optional - the contact form falls back to a hard-coded Formspree endpoint if you don't set this.

```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/<your-form-id>
```

## Deploying

This site is built for Vercel (Next.js App Router + Edge OG images). Any host that supports Next.js 15 will work.

## License

Personal portfolio - all rights reserved on the content. Code patterns are free to learn from.
