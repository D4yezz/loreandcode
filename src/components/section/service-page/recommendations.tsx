"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ServiceItem } from "@/utils/services-data";
import { Link } from "@/i18n/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight03Icon, SparklesIcon } from "@hugeicons/core-free-icons";

interface ServiceRecommendationsProps {
  services: ServiceItem[];
}

export default function ServiceRecommendations({
  services,
}: ServiceRecommendationsProps) {
  const t = useTranslations("home.serviceDetail");

  if (!services || services.length === 0) return null;

  return (
    <section
      id="service-recommendations"
      className="px-4 md:px-8 lg:px-12 font-sora py-4"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-4 border-black pb-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-pink-400 border-2 border-black px-3 py-1 font-black text-xs uppercase mb-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
              <HugeiconsIcon icon={SparklesIcon} size={16} strokeWidth={2} />
              <span>Rekomendasi Terbaik</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black uppercase text-black">
              {t("recommendationsTitle")}
            </h2>
          </div>
          <p className="text-sm md:text-base font-semibold text-gray-700 max-w-md">
            {t("recommendationsSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-white w-full border-3 border-black p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all group"
            >
              <div className="flex flex-col gap-4">
                <div className="relative w-full h-58 border-3 overflow-hidden">
                  {item.images[0] ? (
                    <Image
                      src={item.images[0]}
                      alt={item.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-third text-black font-black uppercase text-sm">
                      {item.title}
                    </div>
                  )}
                  <div className="absolute bottom-2 right-2 bg-main border-2 border-black px-2.5 py-1 text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {item.priceStart} - {item.priceEnd}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-black uppercase text-black line-clamp-1 group-hover:text-pink-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-700 mt-2 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t-2 border-slate-200">
                <Link
                  href={`/service/${item.slug}`}
                  className="w-full bg-third text-black font-black uppercase text-sm py-3 px-4 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-main hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  <span>{t("viewDetail")}</span>
                  <HugeiconsIcon
                    icon={ArrowUpRight03Icon}
                    size={18}
                    strokeWidth={2.5}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
