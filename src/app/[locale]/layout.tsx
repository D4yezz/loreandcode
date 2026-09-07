import type { Metadata } from "next";
import {
  Archivo,
  DM_Sans,
  Geist,
  Geist_Mono,
  Public_Sans,
  Sora,
} from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import LenisProvider from "@/components/providers/LenisProvider";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const dm_sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const public_sans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const siteUrl = "https://loreandcode.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lore & Code | Professional Website Development",
    template: "%s | Lore & Code",
  },
  description:
    "Lore & Code membantu bisnis, UMKM, dan profesional membangun website cepat, responsif, dan SEO-friendly yang memperkuat brand mereka.",
  applicationName: "Lore & Code",
  authors: [{ name: "Lore & Code", url: siteUrl }],
  creator: "Lore & Code",
  publisher: "Lore & Code",
  keywords: [
    "Lore & Code",
    "jasa pembuatan website",
    "web development Indonesia",
    "website UMKM",
    "company profile website",
    "website undangan digital",
    "website portofolio",
    "Next.js website",
    "SEO-friendly website",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lore & Code | Professional Website Development",
    description:
      "Website cepat, responsif, dan SEO-friendly untuk bisnis, UMKM, dan profesional.",
    url: siteUrl,
    siteName: "Lore & Code",
    locale: "id_ID",
    alternateLocale: ["en_US", "de_DE", "es_ES"],
    type: "website",
    images: [
      {
        url: "/og-image.png",
        alt: "Lore & Code - Professional Website Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lore & Code | Professional Website Development",
    description:
      "Website cepat, responsif, dan SEO-friendly untuk bisnis, UMKM, dan profesional.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "XiXiOgj42WUAeVDLJMX3ypKBgp5VqB9-93ZRhWjpKhM",
  },
};

export default async function RootLayout(props: LayoutProps<"/[locale]">) {
  const { locale } = await props.params;
  const messages = await getMessages();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Lore & Code",
    url: siteUrl,
    description:
      "Jasa pembuatan website cepat, responsif, dan SEO-friendly untuk bisnis, UMKM, dan profesional.",
    areaServed: ["Indonesia", "Worldwide"],
    knowsAbout: [
      "Web Development",
      "Next.js",
      "TypeScript",
      "Responsive Web Design",
      "Search Engine Optimization",
    ],
  };

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${dm_sans.variable} ${public_sans.variable} ${sora.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LenisProvider>
          <NextIntlClientProvider messages={messages}>
            <TooltipProvider>
              {props.children}
              <Analytics />
            </TooltipProvider>
          </NextIntlClientProvider>
          <Toaster position="top-center" richColors />
        </LenisProvider>
      </body>
    </html>
  );
}
