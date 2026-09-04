"use client";

import { useTranslations } from "next-intl";
import { ServiceItem } from "@/utils/services-data";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight03Icon } from "@hugeicons/core-free-icons";

interface ServiceCtaBannerProps {
  service: ServiceItem;
}

export default function ServiceCtaBanner({ service }: ServiceCtaBannerProps) {
  const t = useTranslations("home.serviceDetail");

  const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
    `Halo Lore & Code, saya tertarik untuk memesan ${service.title}. Boleh minta informasi lebih lanjut?`,
  )}`;

  return (
    <section id="service-cta" className="px-4 md:px-8 lg:px-12 font-sora">
      <div className="bg-main border-4 border-black p-8 lg:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">
            {t("headingBanner")}
          </h2>
          <p className="text-base md:text-lg font-semibold text-slate-900">
            {t("subHeadingBanner1")} {service.title} {t("subHeadingBanner2")}
          </p>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black font-black uppercase text-lg py-4 px-8 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-2 whitespace-nowrap"
        >
          <span>{t("orderCta")}</span>
          <HugeiconsIcon
            icon={ArrowUpRight03Icon}
            size={24}
            strokeWidth={2.5}
          />
        </a>
      </div>
    </section>
  );
}
