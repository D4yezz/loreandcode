# Lore & Code — Company Profile & Jasa Website

Website resmi **Lore & Code**, sebuah studio jasa pembuatan website dengan gaya visual **Neo-Brutalism**. Menampilkan daftar layanan, detail tiap layanan, dan form kontak yang terintegrasi dengan fallback ke Telegram, dibangun dengan Next.js App Router dan mendukung multi-bahasa (ID, EN, DE, ES).

---

## ✨ Fitur Utama

- **Landing Page & Service Detail** — Hero section, daftar layanan, dan halaman detail per layanan lengkap dengan rentang harga.
- **Form Kontak Pintar** — Auto-fill field `service` & `message` dari query parameter saat user klik CTA "Order" / "Consult" di halaman layanan, dengan fallback link ke Telegram jika pengiriman via API gagal.
- **Multi-language (i18n)** — Didukung `next-intl` dengan 4 bahasa: Indonesia (`id`), Inggris (`en`), Jerman (`de`), Spanyol (`es`).
- **Desain Neo-Brutalism** — Border tebal, hard shadow, dan palet warna OKLCH yang konsisten di seluruh komponen.
- **Komponen Modular** — Struktur atomic design: `sections` → `layout` → `common` → `ui`.

---

## 🛠️ Tech Stack

| Kategori        | Teknologi                                      |
| --------------- | ---------------------------------------------- |
| Framework       | [Next.js 15+](https://nextjs.org) (App Router) |
| Bahasa          | TypeScript (Strict Mode)                       |
| Styling         | Tailwind CSS v4 (OKLCH Color Palette)          |
| Animasi         | Framer Motion / Motion                         |
| Komponen UI     | shadcn/ui & Radix UI                           |
| Ikon            | Hugeicons, Lucide, Simple Icons                |
| i18n            | next-intl                                      |
| Notifikasi      | Sonner (toast)                                 |
| Package Manager | npm                                            |

---

## 📁 Struktur Direktori

```
├── src/
│   ├── app/                 # Next.js App Router: pages & API routes
│   │   └── [locale]/        # Dynamic locale route (id, en, de, es)
│   │       ├── layout.tsx   # Root layout
│   │       └── page.tsx     # Home page
│   ├── components/
│   │   ├── ui/               # Reusable primitive components (shadcn)
│   │   ├── common/            # Pecahan component di beberapa section
│   │   ├── layout/             # Component yang dipakai di banyak halaman
│   │   └── sections/          # Section per halaman (Home, Service, Contact, dll)
│   ├── utils/                # Static data & helpers (services-data.ts, dll)
│   ├── lib/                  # Fungsi utilitas (utils.ts, cn helper)
│   └── types/                # TypeScript interfaces & types
├── messages/                 # Kamus terjemahan
│   ├── id.json
│   ├── en.json
│   ├── de.json
│   └── es.json
└── public/                   # Aset statis (gambar, ikon, font)
```

---

## 🚀 Instalasi & Menjalankan Proyek

Pastikan menggunakan **npm** (bukan `pnpm`/`yarn`).

```bash
# 1. Clone repository
git clone https://github.com/D4yezz/loreandcode.git
cd loreandcode

# 2. Install dependencies
npm install

# 3. Siapkan environment variables
cp .env.example .env.local   # sesuaikan isinya (lihat bagian Environment Variables)

# 4. Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya.

### Perintah Lain

```bash
npm run build      # Build untuk production
npm run start       # Menjalankan hasil build
npm run lint         # Cek kualitas kode dengan ESLint
```

---

## 🔐 Environment Variables

Sesuaikan dengan kredensial masing-masing (jangan pernah commit nilai asli ke repo):

```env
# Telegram Bot untuk notifikasi form kontak
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=

# Link fallback Telegram (jika API gagal)
NEXT_PUBLIC_TELEGRAM_LINK=
```

---

## 🌍 Localization (i18n)

- Semua teks yang tampil di layar **wajib** menggunakan `next-intl` — dilarang hardcode teks langsung di komponen.
- Setiap penambahan key terjemahan baru harus ditambahkan secara seimbang ke seluruh file: `id.json`, `en.json`, `de.json`, `es.json`.
- Untuk data array dari JSON, gunakan `t.raw("key_name")`, bukan pemanggilan indeks satu per satu.

---

## 🎨 Design System

Gaya visual mengikuti prinsip **Neo-Brutalism**:

- **Border**: konsisten tebal — `border-3` atau `border-4 border-black`.
- **Shadow**: hard box-shadow kaku, contoh `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]` atau class `shadow-shadow` bawaan `globals.css`.
- **Warna**: menggunakan CSS variables / OKLCH yang sudah didefinisikan di `globals.css` (`color-main`, `color-third`, `color-pink-400`, dst).
- **Responsive**: pendekatan mobile-first — rapi di `sm:`, `md:`, dan `lg:`/`xl:`.

---

## 📐 Konvensi Kode

- **TypeScript**: explicit typing wajib, dilarang menggunakan `any`. Gunakan `interface` untuk props/struktur data, `type` untuk union/primitive.
- **Komponen**: functional component (`export default function ComponentName()`), dipecah mengikuti atomic design sesuai struktur folder.
- **"use client"**: hanya ditambahkan pada komponen yang butuh state, effect, event handler, atau Framer Motion.
- **Class Tailwind**: gunakan helper `cn()` dari `@/lib/utils` untuk penggabungan class.

Panduan lengkap untuk AI coding agent tersedia di [`AGENTS.md`](./AGENTS.md).

---

## 🚧 Batasan Proyek

1. Tidak ada kredensial hardcoded — semua rahasia disimpan di `.env.local`.
2. Tidak menambah dependency baru tanpa instruksi eksplisit.
3. File konfigurasi (`next.config.ts`, `tailwind.config`, `tsconfig.json`, `package.json`) tidak diubah kecuali diminta secara khusus.
4. Proyek murni SSG / data JSON lokal + action trigger (Telegram/WhatsApp) — tidak ada logic database/CRUD.

---

## 📝 Commit Convention

Menggunakan [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix     | Kegunaan                   | Contoh                                        |
| ---------- | -------------------------- | --------------------------------------------- |
| `feat`     | Fitur baru                 | `feat: add FAQ section component`             |
| `fix`      | Perbaikan bug              | `fix: resolve mobile overflow in navbar`      |
| `style`    | Perubahan tampilan/UI      | `style: update footer colors to OKLCH`        |
| `docs`     | Dokumentasi/i18n           | `docs: update translation strings in es.json` |
| `refactor` | Refaktor tanpa ubah fungsi | `refactor: extract workflow data hook`        |

---

## 📄 Lisensi

Proyek ini bersifat privat dan merupakan properti dari **Lore & Code**. Seluruh hak cipta dilindungi.

---

## 📬 Kontak

Untuk pertanyaan terkait proyek atau pemesanan jasa, silakan hubungi melalui form kontak di website atau langsung via Telegram.
