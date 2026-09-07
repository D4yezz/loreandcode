"use client";

import { useTranslations } from "next-intl";
import Navbar from "@/components/layout/Navbar/navbar";
import Footer from "@/components/layout/Footer/footer";
import { Link } from "@/i18n/navigation";
import { AlertTriangle, Home, Layers } from "lucide-react";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <main className="bg-white font-sora min-h-screen flex flex-col justify-between">
      <div className="border-3 lg:mx-10 mx-4 lg:my-8 my-4 bg-background flex flex-col min-h-[90vh] justify-between overflow-hidden">
        <Navbar />

        {/* 404 Hero Section */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 text-center my-8">
          <div className="max-w-2xl w-full bg-white border-4 border-black p-8 md:p-12 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative">
            {/* Sticker Badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-pink-400 border-3 border-black px-4 py-1.5 font-black text-xs md:text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 whitespace-nowrap transform -rotate-2">
              <AlertTriangle className="w-4 h-4 text-black fill-yellow-300 shrink-0" />
              <span>{t("badge")}</span>
            </div>

            {/* Giant 404 Typography */}
            <div className="relative my-4">
              <h1 className="text-8xl md:text-9xl font-black tracking-tighter text-black selection:bg-pink-400 select-none">
                404
              </h1>
              <div className="w-full bg-main border-2 border-black py-1 font-black text-sm uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 max-w-xs mx-auto -mt-6">
                Page Not Found
              </div>
            </div>

            <h2 className="text-2xl md:text-4xl font-black uppercase text-black mt-6">
              {t("title")}
            </h2>

            <p className="text-gray-800 font-bold text-base md:text-lg mt-3 leading-relaxed max-w-lg mx-auto">
              {t("subtitle")}
            </p>

            {/* CTA Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="w-full sm:w-auto bg-main text-black font-black uppercase text-base md:text-lg py-3.5 px-6 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                <span>{t("backHome")}</span>
              </Link>

              <Link
                href="/#services"
                className="w-full sm:w-auto bg-third text-black font-black uppercase text-base md:text-lg py-3.5 px-6 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                <Layers className="w-5 h-5" />
                <span>{t("viewServices")}</span>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
