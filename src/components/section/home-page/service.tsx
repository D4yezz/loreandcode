"use client";
import { Link } from "@/i18n/navigation";
import ServiceCarousel from "@/components/layout/CarouselService";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { ServiceItem, useServiceData } from "@/utils/services-data";
import { Badge } from "@/components/ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick01Icon } from "@hugeicons/core-free-icons";
import Image from "next/image";

export default function ServiceSection() {
  const t = useTranslations("home.services");
  const services = useServiceData();

  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    services[0] || null,
  );

  return (
    <section className="flex w-full h-[115vh] font-sora">
      <div className="w-[60%] h-full flex flex-col gap-8 pt-8 px-4">
        <div className="flex items-center justify-between px-10">
          <h1 className="text-4xl font-bold">{t("title")}</h1>
          <Link
            href="/services"
            className="px-6 py-2 text-lg font-semibold border-2 w-fit h-fit bg-third shadow-shadow hover:shadow-none duration-150 hover:translate-1"
          >
            {t("cta")}
          </Link>
        </div>
        <ServiceCarousel
          service={services}
          setSelectedService={setSelectedService}
        />
      </div>
      <div className="w-[40%] h-full bg-main border-l-3 flex flex-col items-center justify-center py-4 relative overflow-hidden">
        {selectedService ? (
          <Card className="border-2 bg-white max-h-full w-[80%] mx-auto shadow-shadow flex flex-col p-6 z-30">
            <CardHeader className="border-b-4 mx-auto px-0 py-3 w-full">
              <CardTitle className="text-2xl font-black">
                {selectedService.title}
              </CardTitle>
              <div className="font-bold text-lg">
                {selectedService.priceStart} - {selectedService.priceEnd}
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 p-0">
              <div>
                <h3 className="font-bold text-lg mb-2">{t("features")}:</h3>
                <ul className="flex flex-col gap-2">
                  {selectedService.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <HugeiconsIcon
                        icon={Tick01Icon}
                        size={20}
                        className="text-main"
                        strokeWidth={2}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 uppercase">
                  {t("greatFor")}:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.greatFor.map((item, idx) => (
                    <Badge
                      key={idx}
                      className="bg-pink-400 text-black border-2 border-black font-semibold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="p-4">Pilih layanan untuk melihat detail</div>
        )}
        <div className="absolute border-2 z-20 w-10 h-10 -top-6 -left-6 lg:w-20 lg:h-20 bg-third rotate-6"></div>
        <div className="absolute border-2 z-10 lg:top-9 lg:left-8 top-8 left-16 lg:w-12 lg:h-12 w-7 h-7 bg-third -rotate-6"></div>
        <div className="absolute border-2 z-0 w-7 h-7 lg:top-5 lg:left-16 top-2 left-13 bg-third -rotate-12"></div>
        <div className="absolute border-2 z-0 w-9 h-9 lg:top-18 lg:left-5 top-2 left-13 bg-third rotate-17"></div>
        <div className="absolute z-0 flex items-center justify-center w-40 h-40 rotate-45 lg:w-70 lg:h-70 lg:-bottom-30 -bottom-22 -right-22 lg:-right-30">
          <div className="w-full h-full bg-pink-400 shadow-shadow rotate-90 rounded-[50%] border-2"></div>
          <div className="lg:w-30 lg:h-30 w-20 h-20 absolute bg-main rounded-[50%] border-3"></div>
        </div>
        <div className="absolute z-0 select-none lg:-bottom-40 lg:-left-30 -bottom-13 -left-13 lg:w-85 lg:h-85 w-25 h-25 rotate-3">
          <Image
            src={"/home/star2.png"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="thunder"
            draggable={false}
            onDragStart={(event) => event.preventDefault()}
            className="object-contain pointer-events-none select-none"
          />
        </div>
      </div>
    </section>
  );
}
