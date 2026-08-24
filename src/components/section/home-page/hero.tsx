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

export const connect = [
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
  const title = [t("title.0"), t("title.1"), t("title.2"), t("title.3")];
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWordIndex((currentIndex) => (currentIndex + 1) % title.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [title.length]);

  return (
    <section className="lg:min-h-[87vh] lg:h-[87vh] h-fit lg:px-12 px-4 font-dm-sans">
      <div className="flex lg:flex-row flex-col w-full items-center justify-center lg:h-full h-screen lg:mt-0 mt-8">
        <div className="lg:w-1/2 w-full h-full flex flex-col items-start justify-center">
          <h1 className="lg:text-[4rem] lg:leading-16 text-[2.3rem] leading-10 font-bold font-sora lg:max-w-fit max-w-[90%] text-balance">
            {title[activeWordIndex]}
          </h1>
          <p className="lg:text-xl text-md mt-3 lg:pr-1 lg:pl-0 pr-2 text-balance font-sora">
            {t("subtitle")}
          </p>
          <div className="flex lg:flex-row flex-col lg:mt-8 mt-6 gap-4 font-sora lg:w-fit w-full">
            <Button className="lg:text-lg text-md w-60 h-12 font-bold uppercase">
              {t("btnCta")}{" "}
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                size={26}
                strokeWidth={2}
              />
            </Button>
            <Button className="text-lg w-60 h-12 font-bold uppercase ">
              {t("viewService")}
            </Button>
          </div>
          <div className="flex flex-col mt-10 gap-2">
            <h3 className="text-xl uppercase font-sora">{t("contact")}</h3>
            <ul className="flex items-center justify-center w-fit gap-4">
              {connect.map((item, i) => (
                <li key={i}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger
                        asChild
                        className="bg-third shadow-shadow hover:shadow-none hover:translate-1 hover:translate-y-1 duration-150 border-2 size-12 flex items-center justify-center"
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
        </div>
        <div className="lg:w-1/2 lg:h-full w-full h-screen   relative flex items-center justify-center">
          <div className="lg:w-[90%] w-full lg:h-[90%] h-[80%] relative z-20">
            <Image
              src={"/home/hero.png"}
              alt="hero-image"
              fill
              sizes="100%"
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 z-10 bg-pink-400 lg:w-[30vw] w-[60vw] h-[20vh] lg:h-[48vh] shadow-shadow border-2" />
          <div className="absolute left-1/2 top-20 -translate-x-1/2 z-0 bg-third lg:w-[27vw] lg:h-[44vh] w-[50vw] h-[20vh] shadow-shadow border-2" />
        </div>
      </div>
    </section>
  );
}
