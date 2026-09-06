"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HugeiconsIcon } from "@hugeicons/react";
import { NavigationIcon } from "@hugeicons/core-free-icons";
import { useTranslations } from "next-intl";
import { connect } from "@/constants/connect-data";

const IMAGES = [
  "/online-invitation/1.png",
  "/umkm/2.png",
  "/umkm/1.png",
  "/profile-company/1.png",
  "/portfolio/1.png",
];
const TITLE_KEYS = ["title.4", "title.1", "title.2", "title.3", "title.0"];
export default function HeroSection() {
  const t = useTranslations("home.hero");
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % TITLE_KEYS.length);
      setActiveImage((prev) => (prev + 1) % IMAGES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="lg:min-h-screen h-fit lg:px-0 px-4 font-dm-sans relative overflow-hidden"
    >
      <div className="flex flex-col items-center w-full h-fit mt-24 lg:h-full lg:mt-20 relative z-20 gap-10">
        <div className="flex flex-col items-center justify-center w-full h-fit lg:w-full">
          <h1 className="md:text-[4rem] md:leading-16 text-center text-[2.5rem] leading-10 font-bold font-sora lg:max-w-[70%] max-w-full text-balance">
            {t(TITLE_KEYS[activeWordIndex])}
          </h1>
          <p className="mt-3 md:text-lg text-md text-center text-balance font-sora lg:max-w-[50%] max-w-full">
            {t("subtitle")}
          </p>
          <div className="flex flex-col justify-center w-full gap-4 mt-6 md:flex-row lg:mt-8 font-sora lg:w-fit">
            <Button
              className="h-12 text-lg font-bold uppercase md:w-80 w-full"
              asChild
            >
              <a href="#services">
                {t("viewService")}
                <HugeiconsIcon
                  icon={NavigationIcon}
                  fill="#000000"
                  color="#00C8F0"
                  size={24}
                  className="rotate-45"
                />
              </a>
            </Button>
            <Button className="h-12 font-bold uppercase lg:text-lg text-md md:w-80 w-full">
              <a href="#workflow">{t("btnCta")}</a>
            </Button>
          </div>
          <div className="flex flex-col gap-2 mt-10">
            <h3 className="text-xl uppercase text-center font-sora">
              {t("contact")}
            </h3>
            <ul className="flex items-center justify-center gap-4 w-fit">
              {connect.map((item, i) => (
                <li key={i}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger
                        asChild
                        className="flex items-center justify-center duration-150 border-2 bg-third shadow-shadow hover:shadow-none hover:translate-1 hover:translate-y-1 size-12"
                      >
                        <a
                          href={item.link}
                          title={item.title}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <HugeiconsIcon
                            icon={item.icon}
                            size={24}
                            color="currentColor"
                            strokeWidth={2}
                          />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent
                        side="bottom"
                        sideOffset={10}
                        className="bg-third"
                      >
                        <p>{item.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative flex items-start justify-center w-full h-fit lg:pb-0 pb-8 lg:w-full lg:h-[70vh]">
          <div className="z-20 flex flex-col aspect-video lg:w-[70%] w-full bg-white border-3 shadow-shadow hover:-translate-y-20 hover:scale-105 duration-500 ease-in-out">
            <div className="flex items-center justify-between w-full lg:h-7 h-6 px-2 border-b-3">
              <span className="lg:text-lg text-md font-bold uppercase font-sora">
                Lore & Code
              </span>
              <div className="flex items-center gap-1 w-fit">
                <div className="bg-red-500 border rounded-full size-3"></div>
                <div className="bg-yellow-400 border rounded-full size-3"></div>
                <div className="bg-green-500 border rounded-full size-3"></div>
              </div>
            </div>
            <div className="w-full h-full p-1">
              <div className="relative w-full h-full">
                <Image
                  src={`/service${IMAGES[activeImage]}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  alt="hero-image"
                  draggable={false}
                  onDragStart={(event) => event.preventDefault()}
                  className="object-center pointer-events-none select-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute lg:z-0 z-10 lg:w-15 lg:h-15 w-12 h-12 lg:top-17 lg:left-10 lg:-rotate-18 rotate-18`}
      >
        <Image
          src={`/home/star.png`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="stars"
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
          className="object-contain pointer-events-none select-none"
        />
      </div>
      <div
        className={`absolute lg:z-0 z-10 lg:w-17 lg:h-17 w-12 h-12 lg:top-20 lg:right-10 lg:-rotate-18 rotate-18`}
      >
        <Image
          src={`/home/eye-left.png`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="eye-image"
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
          className="object-contain pointer-events-none select-none"
        />
      </div>
      <div
        className={`absolute lg:z-0 z-10 lg:w-15 lg:h-15 w-12 h-12 lg:bottom-2 lg:right-10 lg:rotate-18 rotate-18`}
      >
        <Image
          src={`/home/eye-left.png`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="eye-image"
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
          className="object-contain pointer-events-none select-none"
        />
      </div>
      <div
        className={`absolute lg:z-0 z-10 lg:w-25 lg:h-25 w-12 h-12 lg:bottom-2 lg:left-6 lg:-rotate-18 rotate-18`}
      >
        <Image
          src={`/home/saturn-2.png`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="saturn"
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
          className="object-contain pointer-events-none select-none"
        />
      </div>
      <div
        className={`absolute lg:z-0 z-10 lg:w-15 lg:h-15 w-12 h-12 lg:bottom-12 lg:left-1/3 lg:-rotate-18 rotate-18`}
      >
        <Image
          src={`/home/star.png`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="star"
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
          className="object-contain pointer-events-none select-none"
        />
      </div>
    </section>
  );
}
