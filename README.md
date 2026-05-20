# Full Stack Developer Portfolio

A modern, professional portfolio website built with Next.js (App Router), TypeScript, Tailwind CSS, GSAP, and next-themes. Designed with a premium dark-first aesthetic inspired by the [Figma Portfolio Community template](https://www.figma.com/design/cQhY06BbX1Dj49rTjiHv98/Personal-website-%7C-Portfolio--Community-).

## Features

- **Dark / Light mode** — Dark mode default via `next-themes`
- **Responsive** — Mobile, tablet, and desktop layouts
- **Animations** — GSAP scroll reveals and hero entrance animations
- **Project filtering** — Filter featured projects by technology
- **Animated counters** — Stats animate on scroll
- **Sticky navbar** — Active section highlighting and mobile menu
- **Accessibility** — Semantic HTML, skip link, ARIA labels, keyboard focus styles
- **SEO** — Metadata, Open Graph, Twitter cards, `robots.txt`, `sitemap.xml`

## Tech Stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) v4
- [GSAP](https://gsap.com/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm (or yarn / pnpm)

### Installation

```bash
git clone <your-repo-url>
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

## Customization

### Personal Information

Edit `src/data/site.ts` for name, tagline, contact details, and social links.

### Projects, Skills, Experience, Education

| File | Content |
|------|---------|
| `src/data/projects.ts` | Featured projects |
| `src/data/skills.ts` | Skills and proficiency |
| `src/data/experience.ts` | Work history |
| `src/data/education.ts` | Education entries |
| `src/data/navigation.ts` | Navbar links |

### Images

Replace placeholder assets in `public/images/`:

- `hero-avatar.svg` — Hero portrait
- `about-image.svg` — About section image
- `projects/*.svg` — Project thumbnails
- `og-image.svg` — Social share image (1200×630 recommended as PNG for best compatibility)

### Resume

Replace `public/resume.pdf` with your actual resume PDF.

### Site URL

Set your production URL for SEO:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

Update `siteUrl` in `src/data/site.ts` as well.

## Project Structure

```
src/
├── app/                 # App Router pages, layout, global styles
├── components/
│   ├── layout/          # Navbar, Footer, ThemeToggle, etc.
│   ├── providers/       # ThemeProvider
│   ├── sections/      # Page sections (Hero, About, …)
│   └── ui/            # Reusable UI components
├── data/                # Content data files
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and metadata
└── types/               # TypeScript interfaces
public/
├── images/              # Static images
└── resume.pdf
```

## Deployment (Vercel)

1. Push the repository to GitHub.
2. Import the project on [Vercel](https://vercel.com).
3. Add environment variable `NEXT_PUBLIC_SITE_URL` with your production URL.
4. Deploy — Vercel auto-detects Next.js settings.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm start` | Run production server |
| `npm run lint` | Run ESLint |

## License

MIT — customize freely for your personal portfolio.
