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

export const metadata: Metadata = {
  title: "Lore & Code",
  description: "Lore & Code",
};

export default async function RootLayout(props: LayoutProps<"/[locale]">) {
  const { locale } = await props.params;
  const messages = await getMessages();
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${dm_sans.variable} ${public_sans.variable} ${sora.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <TooltipProvider>{props.children}</TooltipProvider>
        </NextIntlClientProvider>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
