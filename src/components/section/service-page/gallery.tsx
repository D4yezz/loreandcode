"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import { EmblaCarouselType } from "embla-carousel";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { ServiceItem } from "@/utils/services-data";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, ViewIcon } from "@hugeicons/core-free-icons";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLenis } from "@/components/providers/LenisProvider";

interface ServiceGalleryProps {
  service: ServiceItem;
}

export default function ServiceGallery({ service }: ServiceGalleryProps) {
  const t = useTranslations("home.serviceDetail");

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [
      AutoPlay({
        delay: 5000,
        stopOnMouseEnter: true,
        stopOnInteraction: true,
      }),
    ],
  );

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState<boolean>(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState<boolean>(true);

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalImageIndex, setModalImageIndex] = useState<number>(0);

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

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

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
  }, [emblaApi, onInit, onSelect]);

  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    if (modalOpen) {
      lenis.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis.start();
      document.body.style.overflow = "auto";
    }
  }, [modalOpen, lenis]);

  const handleImageClick = (idx: number) => {
    setModalImageIndex(idx);
    setModalOpen(true);
  };

  return (
    <section
      id="service-gallery"
      className="flex flex-col gap-6 px-4 md:px-8 lg:px-12 font-sora"
    >
      <header className="flex flex-col gap-1 border-l-4 border-black pl-4">
        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">
          {t("galleryTitle")}
        </h2>
        <p className="text-sm md:text-base font-semibold text-gray-700">
          {t("gallerySubtitle")}
        </p>
      </header>

      {/* Main Embla Carousel Container */}
      <div className="bg-white border-4 border-black p-4 md:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-4">
        <div
          className="relative overflow-hidden border-3 border-black bg-slate-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          ref={emblaRef}
        >
          <div className="flex">
            {service.images.map((imgUrl, idx) => (
              <div
                key={idx}
                className="flex-[0_0_100%] min-w-0 relative aspect-16/10 md:aspect-video cursor-grab active:cursor-grabbing group select-none"
                onClick={() => handleImageClick(idx)}
              >
                <Image
                  src={imgUrl}
                  alt={`${service.title} preview screenshot ${idx + 1}`}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority={idx === 0}
                  className="object-contain transition-transform duration-300 group-hover:scale-[1.01] pointer-events-none"
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                  <span className="bg-main text-black font-black uppercase text-xs md:text-sm px-4 py-2 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2">
                    <HugeiconsIcon
                      icon={ViewIcon}
                      size={18}
                      strokeWidth={2.5}
                    />
                    {t("zoomHint")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls & Dot Indicators */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1">
            {service.images.map((imgUrl, idx) => {
              const isActive = idx === selectedIndex;
              return (
                <button
                  key={idx}
                  onClick={() => scrollTo(idx)}
                  className={`relative w-12 h-9 md:w-16 md:h-12 border-2 border-black overflow-hidden transition-all shrink-0 ${
                    isActive
                      ? "bg-pink-400 border-3 translate-y-0.5"
                      : "bg-white opacity-60 hover:opacity-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <Image
                    src={imgUrl}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button
              size="icon"
              className="w-10 h-10 md:w-12 md:h-12 bg-white text-black border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <span className="font-bold text-sm md:text-base px-2">
              {selectedIndex + 1} / {service.images.length}
            </span>
            <Button
              size="icon"
              className="w-10 h-10 md:w-12 md:h-12 bg-white text-black border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal Zoom */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 md:p-8"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white border-4 border-black p-4 md:p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-5xl w-full max-h-[90vh] flex flex-col gap-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b-3 border-black pb-3">
                <h3 className="text-lg md:text-xl font-black uppercase truncate pr-4">
                  {service.title} ({modalImageIndex + 1} /{" "}
                  {service.images.length})
                </h3>
                <button
                  onClick={() => setModalOpen(false)}
                  className="bg-pink-400 border-2 border-black p-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                >
                  <HugeiconsIcon
                    icon={Cancel01Icon}
                    size={24}
                    strokeWidth={3}
                  />
                </button>
              </div>

              <div className="relative w-full h-[60vh] border-3 border-black bg-slate-100 overflow-hidden">
                <Image
                  src={service.images[modalImageIndex] || service.images[0]}
                  alt={`${service.title} full view`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <div className="flex items-center justify-between gap-4 pt-2">
                <Button
                  onClick={() =>
                    setModalImageIndex((prev) =>
                      prev === 0 ? service.images.length - 1 : prev - 1,
                    )
                  }
                  className="bg-white text-black font-bold border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
                >
                  &larr; Prev
                </Button>
                <span className="font-bold text-sm">
                  {modalImageIndex + 1} of {service.images.length}
                </span>
                <Button
                  onClick={() =>
                    setModalImageIndex((prev) =>
                      prev === service.images.length - 1 ? 0 : prev + 1,
                    )
                  }
                  className="bg-white text-black font-bold border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
                >
                  Next &rarr;
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
