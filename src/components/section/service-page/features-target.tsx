"use client";

import { useTranslations } from "next-intl";
import { ServiceItem } from "@/utils/services-data";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick01Icon, ArrowUpRight03Icon } from "@hugeicons/core-free-icons";

interface ServiceFeaturesTargetProps {
  service: ServiceItem;
}

export default function ServiceFeaturesTarget({ service }: ServiceFeaturesTargetProps) {
  const t = useTranslations("home.serviceDetail");

  return (
    <section id="service-features" className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-8 lg:px-12 font-sora">
      {/* Features Checklist */}
      <article className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 flex flex-col gap-6">
        <header className="border-b-4 border-black pb-4">
          <h2 className="text-xl md:text-3xl font-black uppercase tracking-tight">
            {t("featuresTitle")}
          </h2>
        </header>
        <ul className="flex flex-col gap-3">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base font-semibold">
              <div className="bg-main border-2 border-black p-1 shrink-0 mt-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <HugeiconsIcon icon={Tick01Icon} size={18} strokeWidth={3} className="text-black" />
              </div>
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </article>

      {/* Target Audience & Live Demos */}
      <div className="flex flex-col gap-8">
        {/* Target Audience / Great For */}
        <article className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 flex flex-col gap-6">
          <header className="border-b-4 border-black pb-4">
            <h2 className="text-xl md:text-3xl font-black uppercase tracking-tight">
              {t("greatForTitle")}
            </h2>
          </header>
          <div className="flex flex-wrap gap-3">
            {service.greatFor.map((item, idx) => {
              const colors = [
                "bg-pink-400 text-black",
                "bg-third text-black",
                "bg-main text-black",
              ];
              const colorClass = colors[idx % colors.length];
              return (
                <span
                  key={idx}
                  className={`${colorClass} border-2 border-black px-3 py-1.5 font-bold text-sm md:text-base shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`}
                >
                  {item}
                </span>
              );
            })}
          </div>
        </article>

        {/* Live Demo Examples if present */}
        {service.exampleWeb && service.exampleWeb.length > 0 && (
          <article className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 flex flex-col gap-4">
            <header className="border-b-4 border-black pb-3">
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight">
                {t("exampleWebTitle")}
              </h2>
            </header>
            <div className="flex flex-col gap-3 pt-2">
              {service.exampleWeb.map((url, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-third text-black border-3 border-black p-3 font-bold text-sm md:text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-between gap-2"
                >
                  <span className="truncate">{url}</span>
                  <HugeiconsIcon icon={ArrowUpRight03Icon} size={20} strokeWidth={2.5} />
                </a>
              ))}
            </div>
          </article>
        )}
      </div>
    </section>
  );
}
