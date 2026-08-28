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
            className="px-6 py-2 text-lg font-semibold duration-150 border-2 w-fit h-fit bg-third shadow-shadow hover:shadow-none hover:translate-1"
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
            <CardHeader className="w-full px-0 py-3 mx-auto border-b-4">
              <CardTitle className="text-2xl font-black">
                {selectedService.title}
              </CardTitle>
              <div className="text-lg font-bold">
                {selectedService.priceStart} - {selectedService.priceEnd}
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 p-0">
              <div>
                <h3 className="mb-2 text-lg font-bold">{t("features")}:</h3>
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
                <h3 className="mb-2 text-lg font-bold uppercase">
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
        <MiniPageElement />
        <div className="absolute z-0 flex items-center justify-center w-40 h-40 rotate-45 lg:w-70 lg:h-70 lg:-bottom-30 -bottom-22 -right-22 lg:-right-30">
          <div className="w-full h-full bg-pink-400 shadow-shadow rotate-90 rounded-[50%] border-2"></div>
          <div className="lg:w-30 lg:h-30 w-20 h-20 absolute bg-main rounded-[50%] border-3"></div>
        </div>
        <div className="absolute z-0 select-none lg:-bottom-40 lg:-left-30 -bottom-13 -left-13 lg:w-85 lg:h-85 w-25 h-25 rotate-3">
          <Image
            src={"/home/star2.png"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="star-element"
            draggable={false}
            onDragStart={(event) => event.preventDefault()}
            className="object-contain pointer-events-none select-none"
          />
        </div>
      </div>
    </section>
  );
}

export function MiniPageElement() {
  return (
    <>
      <div className="absolute z-0 flex flex-col w-46 bg-white border-2 h-32 top-2 right-8 shadow-shadow rotate-12">
        <div className="flex items-center justify-between w-full h-5 px-2 border-b-2">
          <span className="text-[10px] font-semibold">Lore & Code</span>
          <div className="flex items-center gap-1 w-fit">
            <div className="bg-red-500 rounded-full size-2"></div>
            <div className="bg-yellow-400 rounded-full size-2"></div>
            <div className="bg-green-500 rounded-full size-2"></div>
          </div>
        </div>
        <div className="w-full h-full p-1">
          <div className="relative w-full h-full overflow-hidden rounded-sm">
            <Image
              src={"/home/cars.gif"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="wallpaper"
              draggable={false}
              onDragStart={(event) => event.preventDefault()}
              className="object-cover pointer-events-none select-none"
            />
          </div>
        </div>
      </div>
      <div className="absolute z-10 flex flex-col h-45 bg-white border-2 w-35 -top-4 left-5 shadow-shadow -rotate-20">
        <div className="w-full h-full px-2 pt-2 ">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={
                "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aHRzZHhzd3R0bWt3dm8wNWRrbWRreWEyZW0wazRqNmhvb3J4OWFhaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mj4ruS6mHkdKEdmwc1/giphy.gif"
              }
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="wallpaper"
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              className="object-cover pointer-events-none select-none"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between w-full h-fit px-2 py-2">
          <span className="text-[10px] font-semibold">Lore & Code</span>
        </div>
      </div>
    </>
  );
}
