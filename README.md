# Personal Portfolio

This is a personal portfolio and blog theme built around Next.js. It features a modern, clean, and responsive design, perfect for developers or anyone looking to showcase their work and ideas.

## 📚 Tech Stack
Next.js 14+
React 18+
Tailwind CSS 3+
Framer Motion 11+

## ✨ Features
- Dark and light color mode 
- Reusable Components
# Portfolio — Kavindu Aluthwaththa

This repository contains a personal portfolio website built with Next.js, Tailwind CSS and Framer Motion. It showcases projects, experience, and contact information.

## Tech stack
- Next.js 14
- React 18
- Tailwind CSS 3
- Framer Motion

## Features
- Responsive, mobile-first layout
- Dark / light theme support
- Reusable, accessible components
- Project pages and contact form
- Sitemap generation (via `next-sitemap`)

## Requirements
- Node.js 18+ (or a compatible Node 18.x runtime)
- npm (or Yarn) — either package manager works

## Install & run (development)
Clone the repository and install dependencies:

```powershell
git clone https://github.com/KavinduAluthwaththa/Portfolio.git
cd Portfolio
npm install
# or: yarn
```

Start the dev server:

```powershell
npm run dev
# or: yarn dev
```

Open http://localhost:3000 in your browser.

## Build & production
To create a production build and preview the production server:

```powershell
npm run build
npm run start
# or: yarn build && yarn start
```

This project also runs `next-sitemap` after build (see `postbuild` script) to generate a sitemap.

## Available scripts
Taken from `package.json`:

- `npm run dev` — run Next.js in development mode
- `npm run build` — build for production
- `npm run postbuild` — run sitemap generation (runs automatically after `build`)
- `npm run start` — start the production server
- `npm run lint` — run Next.js/ESLint checks

## Project structure (high level)

- `src/components/` — UI and layout components (Navbar, Footer, AnimatedText, etc.)
- `src/pages/` — Next.js pages (index, about, projects, contact, ...)
- `public/` — static assets (images, manifest)
- `styles/` — global and module CSS

## Contributing
Feel free to open issues or submit PRs for bugfixes and enhancements. When contributing, please:

1. Fork the repository
2. Create a feature branch
3. Open a pull request with a clear description of changes

## Notes / Next steps
- Add a license file if you want to make licensing explicit (e.g. MIT).
- Add a brief AUTHORS or CONTACT section with your preferred contact method.

## Contact
If you want to reach me, add your preferred contact details here (email, LinkedIn or GitHub profile).

---

If you'd like, I can also:
- add a small Contributors section or License file,
- generate an example Deployment/VERCEL section, or
- include screenshots and a demo link.

Please tell me how you'd like the contact/license info to appear and I will update the README accordingly.