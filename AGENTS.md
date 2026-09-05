# AGENTS.md — Guidelines for AI Coding Agents

File ini berisi panduan, instruksi, dan arsitektur projek yang wajib dipatuhi oleh seluruh AI agent saat membaca, membuat, atau memodifikasi kode di repositori ini.

---

## 1. Project Overview & Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4 / OKLCH Color Palette
- **Animation**: Framer Motion
- **Component Library**: shadcn/ui & Radix UI
- **Icons**: Hugeicons
- **Localization / i18n**: `next-intl` (JSON dictionaries in `locales/`)
- **Package Manager**: `npm` (Do NOT use `pnpm` or `yarn`)

---

## 2. Terminal & Build Commands

Gunakan package manager `npm` untuk seluruh perintah CLI:

```bash
# Development
npm run dev              # Menjalankan server lokal (http://localhost:3000)

# Build & Quality Check
npm run build
npm lint
npm typecheck

# Formatting
npm format

```

---

## 3. Project Directory Structure

├── src/
│ ├── app/ # Next.js App Router pages & API routes
│ │ └── [locale]/ # Dynamic locale route (id, en, de, es)
│ │ ├── layout.tsx # Root layout
│ │ └── page.tsx # Home page
│ ├── components/ # UI Components
│ │ ├── ui/ # Reusable primitive UI components (shadcn)
│ │ ├── common/ # Pecahan component di beberapa section
│ │ ├── layout/ # component yang digunakan di beberapa halaman
│ │ └── sections/ # sections dari halaman (Home, Service, Contact, dan lain-lain)
│ ├── utils/ # Static data & helpers (e.g. service-data.ts, workflow-data.ts)
│ ├── lib/ # Utility functions (utils.ts, cn helper)
│ └── types/ # TypeScript interfaces & types
├── messages/ # Translation JSON dictionaries
│ ├── id.json # Bahasa Indonesia
│ ├── en.json # English
│ ├── de.json # Deutsch
│ └── es.json # Español
├── public/ # Static assets (images, icons, fonts)

---

## 4. Coding Conventions & Code Style

A. TypeScript Rules

- Selalu tentukan tipe data (explicit typing). Dilarang menggunakan any.

- Gunakan interface untuk struktur data komponen/props, dan type untuk union/primitive types.

- Ekspor interface data di file terpisah pada src/types/ jika digunakan lebih dari 1 komponen.

B. Component Patterns

- Gunakan metode pemecah component/atomic design yang sesuai dengan folder yang telah dibuat, yaitu menjadi component-component kecil seperti halaman Home terdapat component dari beberapa section, dan di section terdapat beberapa layout, terus sampai component paling kecil.

- Gunakan Functional Components dengan sintaks export default function ComponentName().

- Pisahkan logika data interaktif dengan visual rendering.

- Tambahkan directive "use client"; HANYA pada komponen yang membutuhkan React State, Effects, Event Handlers, atau Framer Motion.

- Gunakan utilitas cn() dari @/lib/utils untuk penggabungan kelas Tailwind.

Contoh Benar (DO):

```bash
"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  desc: string;
  className?: string;
}

export default function ServiceCard({ title, desc, className }: ServiceCardProps) {
  const t = useTranslations("common");

  return (
    <div className={cn("p-6 border-4 border-black bg-white shadow-shadow", className)}>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-2 text-slate-700">{desc}</p>
    </div>
  );
}
```

Atau Contoh Benar (DO):

```bash
"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  desc: string;
  className?: string;
}

export default function ServiceCard({ title, desc, className }: ServiceCardProps) {
  const t = useTranslations("common");

  return (
    <div className={cn("p-6 border-3 border-black bg-white shadow-shadow", className)}>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-2 text-slate-700">{desc}</p>
    </div>
  );
}
```

Contoh Salah (DON'T):

```bash
// ❌ Jangan gunakan type 'any', jangan inline styles, dan hindari 'use client' jika tidak diperlukan
export const ServiceCard = (props: any) => {
  return (
    <div style={{ padding: '20px', border: '1px solid black' }}>
      <h3>{props.title}</h3>
    </div>
  );
};
```

---

## 5. Localization (i18n) & Data Fetching

- Selalu gunakan next-intl untuk teks yang tampil di layar. Dilarang menguji teks hardcoded di dalam komponen visual.

- Pastikan jika ingin menambah teks baru, cek terlebih dahulu di halaman dan di section apa teks tersebut akan digunakan, seperti teks welcome di letakkan di object home.hero.

- Untuk mengambil data array dari JSON di locales/, gunakan t.raw("key_name") secara instan, bukan memanggil satu per satu berdasarkan indeks.

- Semua kunci i18n baru harus ditambahkan ke seluruh file bahasa (id.json, en.json, de.json, es.json) secara seimbang.

---

## 6. Design System & Styling Guidelines

- Style Theme: Neo Brutalism (Tergantung modul).

- Border: Gunakan border tebal yang konsisten (border-3, atau border-4 border-black).

- Shadow: Gunakan hard box-shadow kaku (misal: shadow-shadow yang sudah di aur di global.css atau shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] atau shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]).

- Color Palette: Gunakan CSS Variables atau nilai OKLCH yang sudah diatur di globals.css(color-main, color-third, color-pink-400).

- Responsive Design: Pendekatan Mobile-First. Pastikan semua komponen rapi di layar kecil (sm:), tablet (md:), dan desktop (lg: / xl:).

---

## 7. Boundaries & Constraints (Strict Rules)

1. NO Hardcoded Credentials: Dilarang memasukkan API key, token, atau URL sensitif secara langsung. Gunakan .env.local.

2. NO Third-party Bloat: Dilarang memasang library npm baru tanpa instruksi eksplisit dari user.

3. DO NOT Touch Configuration Files: Dilarang mengubah next.config.js, tailwind.config.js, tsconfig.json, atau package.json kecuali diminta secara khusus.

4. NO Direct Database/Backend Logic: Projek ini mengandalkan static site generation (SSG) / data JSON lokal dan action triggers (seperti Telegram API / WhatsApp Direct Link). Jangan membuat logika database/CRUD kecuali diinstruksikan.

---

## 8. Git & Commit Guidelines

Gunakan standar Conventional Commits:

- feat: Fitur baru (misal: feat: add FAQ section component)

- fix: Perbaikan bug (misal: fix: resolve mobile overflow in navbar)

- style: Perubahan tampilan/UI (misal: style: update footer colors to OKLCH)

- docs: Perubahan dokumentasi/i18n (misal: docs: update translation strings in es.json)

- refactor: Refaktorisasi kode tanpa mengubah fungsi (misal: refactor: extract workflow data hook)
