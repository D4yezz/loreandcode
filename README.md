# Lore & Code

Official website for **Lore & Code**, a web development studio, built as a multi-language company profile and lead-generation site. It showcases services, per-service detail pages with pricing, and a contact flow that falls back to Telegram when the primary submission channel fails.

The interface follows a **Neo-Brutalism** design language — thick borders, hard drop shadows, and a high-contrast OKLCH color palette — applied consistently across every component.

---

## Features

- **Landing & Service Detail Pages** — hero sections, a service catalog, and dedicated detail pages with price ranges per service.
- **Smart Contact Form** — the `service` and `message` fields auto-fill from URL query parameters when a visitor clicks an "Order" / "Consult" CTA on a service page, with a Telegram fallback link if the contact API call fails.
- **Multi-language (i18n)** — powered by `next-intl`, supporting Indonesian (`id`), English (`en`), German (`de`), and Spanish (`es`).
- **Neo-Brutalist Design System** — consistent thick borders, hard shadows, and OKLCH-based color tokens.
- **Analytics** — integrated with Vercel Analytics.
- **Modular Component Architecture** — atomic-style breakdown: `sections` → `layout` → `common` → `ui`.

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org) (App Router) |
| Language | TypeScript (Strict Mode) |
| Styling | Tailwind CSS v4 (OKLCH color palette) |
| Animation | Motion (Framer Motion) |
| UI Components | shadcn/ui & Radix UI |
| Icons | Hugeicons, Lucide, Simple Icons |
| i18n | next-intl |
| Notifications | Sonner (toast) |
| Analytics | Vercel Analytics |
| Package Manager | npm |

> Exact package versions are pinned in [`package.json`](./package.json).

---

## Project Structure

```
loreandcode/
├── public/                    # Static assets (images, icons, fonts)
├── src/
│   ├── app/                   # Next.js App Router: pages & API routes
│   │   ├── [locale]/          # Dynamic locale segment (id, en, de, es)
│   │   │   ├── layout.tsx     # Root layout
│   │   │   └── page.tsx       # Home page
│   │   └── api/
│   │       └── contact/       # Contact form submission endpoint (Telegram integration)
│   ├── components/
│   │   ├── ui/                 # Reusable primitive components (shadcn)
│   │   ├── common/             # Shared fragments used across sections
│   │   ├── layout/             # Components reused across multiple pages
│   │   └── sections/           # Page-level sections (Home, Service, Contact, etc.)
│   ├── i18n/                   # next-intl navigation & routing config
│   ├── constants/               # Shared constants (e.g. Telegram link)
│   ├── utils/                   # Static data & helpers (services-data, etc.)
│   ├── lib/                     # Utility functions (utils.ts, cn helper)
│   └── messages/                 # i18n translation dictionaries
│       ├── id.json
│       ├── en.json
│       ├── de.json
│       └── es.json
├── AGENTS.md                   # Guidelines for AI coding agents
├── CLAUDE.md                   # Points Claude Code to AGENTS.md
├── components.json             # shadcn/ui configuration
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
└── package.json
```

> This layout is reconstructed from the repository's root listing and from import paths used across components (`@/utils/...`, `@/i18n/...`, `@/constants/...`, `@/components/ui/...`). Some nested folders under `src/` are inferred rather than exhaustively verified — feel free to correct any mismatch.

---

## Getting Started

This project uses **npm** exclusively — do not use `pnpm` or `yarn`.

```bash
# 1. Clone the repository
git clone https://github.com/D4yezz/loreandcode.git
cd loreandcode

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local   # then fill in the values, see below

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the result.

### Available Scripts

```bash
npm run dev      # Start the local dev server
npm run build    # Build for production
npm run start    # Run the production build
npm run lint     # Lint the codebase with ESLint
```

---

## Environment Variables

Set these in `.env.local` — never commit real values to the repository:

```env
# Telegram Bot used for contact form notifications
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=

# Public fallback link shown to users if the contact API call fails
NEXT_PUBLIC_TELEGRAM_LINK=
```

---

## Localization (i18n)

- All on-screen text **must** go through `next-intl` — hardcoded strings inside visual components are not allowed.
- New translation keys must be added consistently across every locale file (`id.json`, `en.json`, `de.json`, `es.json`).
- For array data pulled from translation files, use `t.raw("key_name")` directly instead of accessing items one by one by index.

---

## Design System

The interface follows **Neo-Brutalism** principles:

- **Borders**: consistently thick — `border-3` or `border-4 border-black`.
- **Shadows**: hard, non-blurred box shadows, e.g. `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`, `shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`, or the `shadow-shadow` utility defined in `globals.css`.
- **Colors**: driven by CSS variables / OKLCH values defined in `globals.css` (`color-main`, `color-third`, `color-pink-400`, etc.).
- **Responsiveness**: mobile-first — every component should look clean at `sm:`, `md:`, and `lg:`/`xl:` breakpoints.

---

## Coding Conventions

- **TypeScript**: explicit typing is required; `any` is not allowed. Use `interface` for component/props data shapes and `type` for unions or primitives.
- **Components**: functional components using `export default function ComponentName()`, broken down following the atomic structure of the `components/` folder.
- **`"use client"`**: only added to components that require React state, effects, event handlers, or Motion/Framer Motion.
- **Class merging**: always use the `cn()` helper from `@/lib/utils` to combine Tailwind classes.

Full guidelines for AI coding agents working on this repository live in [`AGENTS.md`](./AGENTS.md).

---

## Project Constraints

1. **No hardcoded credentials** — API keys, tokens, or sensitive URLs must live in `.env.local`.
2. **No unnecessary dependencies** — new npm packages are not added without explicit instruction.
3. **Configuration files are off-limits** — `next.config.ts`, `tailwind.config`, `tsconfig.json`, and `package.json` are not modified unless specifically requested.
4. **No database/backend logic** — this project relies on static generation (SSG) with local JSON data and action triggers (Telegram API / WhatsApp direct links); no database or CRUD logic is introduced.

---

## Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Purpose | Example |
|---|---|---|
| `feat` | New feature | `feat: add FAQ section component` |
| `fix` | Bug fix | `fix: resolve mobile overflow in navbar` |
| `style` | Visual/UI changes | `style: update footer colors to OKLCH` |
| `docs` | Documentation/i18n changes | `docs: update translation strings in es.json` |
| `refactor` | Refactor without behavior change | `refactor: extract workflow data hook` |

---

## License

This project is private and proprietary to **Lore & Code**. All rights reserved.

---

## Contact

For questions about this project or to inquire about services, please use the contact form on the website or reach out directly via Telegram.
