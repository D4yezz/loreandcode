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
  ThreadsIcon,
} from "@hugeicons/core-free-icons";
import { useTranslations } from "next-intl";

export const connect = [
  {
    name: "@loreandcode",
    title: "Instagram",
    link: "https://www.instagram.com/loreandcode/",
    icon: Instagram,
  },
  {
    name: "@loreandcode",
    title: "Threads",
    link: "https://www.instagram.com/loreandcode/",
    icon: ThreadsIcon,
  },
  {
    name: "loreandcode",
    title: "Twitter",
    link: "https://www.facebook.com/loreandcode/",
    icon: NewTwitterIcon,
  },
  {
    name: "loreandcode",
    title: "Telegram",
    link: "https://www.facebook.com/loreandcode/",
    icon: TelegramIcon,
  },
  {
    name: "loreandcode@gmail.com",
    title: "Email",
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
      <div className="flex flex-col items-center justify-center w-full h-screen mt-8 lg:flex-row lg:h-full lg:mt-0">
        <div className="flex flex-col items-start justify-center w-full h-full lg:w-1/2">
          <h1 className="md:text-[4rem] md:leading-16 text-[2.3rem] leading-10 font-bold font-sora lg:max-w-fit max-w-[90%] text-balance">
            {title[activeWordIndex]}
          </h1>
          <p className="pr-2 mt-3 md:text-xl text-md lg:pr-1 lg:pl-0 text-balance font-sora">
            {t("subtitle")}
          </p>
          <div className="flex flex-col w-full gap-4 mt-6 lg:flex-row lg:mt-8 font-sora lg:w-fit">
            <Button className="h-12 font-bold uppercase lg:text-lg text-md w-60">
              {t("btnCta")}{" "}
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                size={26}
                strokeWidth={2}
              />
            </Button>
            <Button className="h-12 text-lg font-bold uppercase w-60 ">
              {t("viewService")}
            </Button>
          </div>
          <div className="flex flex-col gap-2 mt-10">
            <h3 className="text-xl uppercase font-sora">{t("contact")}</h3>
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
        <div className="relative flex items-center justify-center w-full h-screen lg:w-1/2 lg:h-full">
          <div className="lg:w-[90%] w-full lg:h-[90%] md:h-full h-[90%] relative z-20">
            <Image
              src={"/home/hero.png"}
              alt="hero-image"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              draggable={false}
              onDragStart={(event) => event.preventDefault()}
              className="object-contain pointer-events-none select-none"
            />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 z-10 bg-pink-400 lg:w-[30vw] w-[80%] h-[55%] lg:h-[48vh] shadow-shadow border-2" />
          <div className="absolute left-1/2 lg:top-20 top-10 -translate-x-1/2 z-0 bg-third lg:w-[27vw] lg:h-[44vh] w-[70%] h-[70%] shadow-shadow border-2" />
        </div>
      </div>
    </section>
  );
}
