"use client";

import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { ServiceItem } from "@/utils/services-data";
import { Badge } from "@/components/ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft02Icon,
  ArrowUpRight03Icon,
} from "@hugeicons/core-free-icons";

interface ServiceHeroProps {
  service: ServiceItem;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  const t = useTranslations("home.serviceDetail");
  const locale = useLocale();
  const isIndonesian = locale === "id";

  const bookingMessage = isIndonesian
    ? `Halo Lore & Code, saya tertarik untuk memesan ${service.title}. Boleh minta informasi lebih lanjut?`
    : `Hello Lore & Code, I am interested in ordering ${service.title}. Could you provide more information?`;

  const consultationMessage = isIndonesian
    ? `Halo Lore & Code, saya butuh konsultasi mengenai projek seperti ${service.title}. Boleh minta informasi lebih lanjut?`
    : `Hello Lore & Code, I would like a consultation about a project like ${service.title}. Could you provide more information?`;

  const bookingContactUrl = `/contact?service=${encodeURIComponent(
    service.title,
  )}&message=${encodeURIComponent(bookingMessage)}`;

  const consultationContactUrl = `/contact?service=${encodeURIComponent(
    service.title,
  )}&message=${encodeURIComponent(consultationMessage)}`;

  return (
    <section
      id="service-hero"
      className="flex flex-col gap-6 lg:gap-8 pt-22 lg:pt-20 px-4 md:px-8 lg:px-12"
    >
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center justify-between gap-4"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border-3 border-black text-black font-bold text-sm md:text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
        >
          <HugeiconsIcon icon={ArrowLeft02Icon} size={20} strokeWidth={2.5} />
          <span>{t("backHome")}</span>
        </Link>
        <Badge className="bg-pink-400 text-black border-2 border-black font-bold text-xs md:text-sm px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase">
          {t("serviceBadge")}
        </Badge>
      </nav>

      <header className="bg-white border-4 border-black p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="flex flex-col gap-4 lg:max-w-[60%] max-w-full">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-balance font-sora">
              {service.title}
            </h1>
            <p className="text-base md:text-lg lg:text-xl font-medium text-slate-800 leading-relaxed font-sora">
              {service.desc}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <div className="bg-third text-black border-3 border-black px-4 py-2 text-lg md:text-xl font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                {t("pricingLabel")}: {service.priceStart} - {service.priceEnd}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-55">
            <Link
              href={bookingContactUrl}
              // href={bookingUrl}
              // target="_blank"
              // rel="noopener noreferrer"
              className="bg-main text-black text-center font-black uppercase py-3 px-6 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              <span>{t("orderCta")}</span>
              <HugeiconsIcon
                icon={ArrowUpRight03Icon}
                size={22}
                strokeWidth={2.5}
              />
            </Link>
            <Link
              href={consultationContactUrl}
              // href={consultationUrl}
              // target="_blank"
              // rel="noopener noreferrer"
              className="bg-pink-400 text-black text-center font-bold text-sm py-3 px-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              {t("consultCta")}
            </Link>
          </div>
        </div>
      </header>
    </section>
  );
}
