"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EmblaCarouselType } from "embla-carousel";
import AutoPlay from "embla-carousel-autoplay";
import { useTranslations } from "next-intl";
import { ServiceItem } from "@/utils/services-data";

type ServiceCarouselProps = {
  service: ServiceItem[];
  setSelectedService: React.Dispatch<React.SetStateAction<ServiceItem | null>>;
};

export default function ServiceCarousel({
  service,
  setSelectedService,
}: ServiceCarouselProps) {
  const t = useTranslations("home.services");
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    AutoPlay({
      delay: 4500,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback(
    (emblaApi: EmblaCarouselType) => {
      const index = emblaApi.selectedScrollSnap();

      setSelectedIndex(index);
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());

      const selectedService = service[index];

      if (selectedService) {
        setSelectedService(selectedService);
      }
    },
    [service, setSelectedService],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const frameId = requestAnimationFrame(() => {
      onInit(emblaApi);
      onSelect(emblaApi);
    });
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);

    return () => {
      cancelAnimationFrame(frameId);
      emblaApi.off("reInit", onInit);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect, selectedIndex, service, setSelectedService]);

  return (
    <div className="relative flex flex-col w-full gap-6 mx-auto">
      <div className="px-1 py-2 -mx-4 overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {service.map((item, index) => (
            <div className="flex-[0_0_100%] min-w-0 px-3" key={index}>
              <Card className="p-0 w-[87%] h-full gap-0 bg-main mx-auto justify-between">
                <CardHeader className="flex items-center justify-between w-full px-4 pt-2 pb-2 bg-white border-b-2 h-fit">
                  <h3 className="text-xl font-bold w-[80%] uppercase">
                    {item.title}
                  </h3>
                  <div className="flex items-center w-[20%] justify-end gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col w-full gap-4 px-4 pt-3 h-fit">
                  <div className="relative w-full h-[50vh] border-2 overflow-hidden">
                    <Image
                      src={`/service/${item.img}/1.png`}
                      fill
                      alt={`Gambar Website ${item.title}`}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col w-full p-4 bg-white border-2 h-fit shadow-shadow">
                    <h3 className="text-3xl font-bold text-balance">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-justify">{item.desc}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between w-full p-4">
                  <span className="px-2 py-1 text-xl font-bold text-black border-2 bg-third shadow-shadow">
                    {item.priceStart} - {item.priceEnd}
                  </span>
                  <Button
                    asChild
                    className="w-[30%] bg-pink-400 text-white font-semibold text-lg shadow-none border-l-2"
                  >
                    <Link href={`/services/${item.id}`}>{t("moreBtn")}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between w-[87%] mx-auto">
        <div className="flex items-center gap-3">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`transition-all border-2 duration-300 rounded-full cursor-pointer ${
                index === selectedIndex
                  ? "w-10 h-4 bg-third"
                  : "w-4 h-4 bg-white hover:bg-pink-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-4 w-fit">
          <Button
            size="icon"
            className="w-12 h-12 border-2 shadow-shadow"
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            size="icon"
            className="w-12 h-12 border-2 shadow-shadow"
            onClick={scrollNext}
            disabled={nextBtnDisabled}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
