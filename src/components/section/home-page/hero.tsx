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
import {
  Instagram,
  NewTwitterIcon,
  TelegramIcon,
  Mail01Icon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";
import { useTranslations } from "next-intl";

const connect = [
  {
    name: "@loreandcode",
    link: "https://www.instagram.com/loreandcode/",
    icon: Instagram,
  },
  {
    name: "loreandcode",
    link: "https://www.facebook.com/loreandcode/",
    icon: NewTwitterIcon,
  },
  {
    name: "loreandcode",
    link: "https://www.facebook.com/loreandcode/",
    icon: TelegramIcon,
  },
  {
    name: "loreandcode@gmail.com",
    link: "https://twitter.com/loreandcode/",
    icon: Mail01Icon,
  },
];

export default function HeroSection() {
  const t = useTranslations("home.hero");
  const loopingWord = [
    t("loopingWord.0"),
    t("loopingWord.1"),
    t("loopingWord.2"),
    t("loopingWord.3"),
  ];
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWordIndex(
        (currentIndex) => (currentIndex + 1) % loopingWord.length,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [loopingWord.length]);

  return (
    <section className="min-h-[87vh] h-[87vh] px-12 font-dm-sans border-b-8">
      <div className="flex w-full items-center justify-center h-full">
        <div className="w-1/2 h-full flex flex-col items-start justify-center">
          <h1 className="text-[4rem] leading-16 font-bold font-public-sans">
            {t("title")} <br /> {t("website")} {loopingWord[activeWordIndex]}
          </h1>
          <p className="text-2xl mt-3 pr-5">{t("subtitle")}</p>
          <div className="flex mt-8 gap-4 font-archivo">
            <Button className="text-lg w-60 h-12 font-bold uppercase">
              {t("btnCta")}{" "}
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                size={26}
                strokeWidth={2}
              />
            </Button>
            <Button className="text-lg w-60 h-12 font-bold uppercase">
              {t("viewService")}
            </Button>
          </div>
          <ul className="flex items-center justify-center w-fit gap-4 mt-10">
            {connect.map((item, i) => (
              <li key={i}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger
                      asChild
                      className="bg-third shadow-shadow hover:shadow-none hover:translate-1 hover:translate-y-1 duration-150   border-2 size-12 flex items-center justify-center"
                    >
                      <a href={item.link} target="_blank" rel="noreferrer">
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
        <div className="w-1/2 h-full relative flex items-center justify-center">
          <div className="w-[90%] h-[90%] relative z-20">
            <Image
              src={"/home/hero-image.png"}
              alt="hero-image"
              fill
              sizes="100%"
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 z-10 bg-pink-400 w-[30vw] h-[48vh] shadow-shadow border-2" />
          <div className="absolute left-1/2 top-30 -translate-x-1/2 z-0 bg-third w-[27vw] h-[44vh] shadow-shadow border-2" />
        </div>
      </div>
    </section>
  );
}
