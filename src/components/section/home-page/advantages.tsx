"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import { NavigationIcon, ReplyIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function AdvantagesSection() {
  const t = useTranslations("home.advantages");
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  const advantages = Array.from({ length: 4 }, (_, index) => ({
    title: t(`listAdvantages${index + 1}.title`),
    description: t(`listAdvantages${index + 1}.description`),
  }));
  return (
    <section
      id="advantages"
      className="w-full font-sora lg:h-[90vh] h-fit flex lg:flex-row flex-col border-b-3"
    >
      <div className="lg:w-[25%] w-[90%] lg:mx-0 mx-auto lg:mt-0 mt-3 z-10 lg:z-0 lg:shadow-none shadow-shadow bg-third lg:border-r-3 lg:border-0 border-3 flex items-center lg:h-full h-fit px-6 lg:py-0 py-6 relative overflow-hidden">
        <h1 className="relative z-10 flex flex-col items-stretch w-full px-8 md:max-w-[60%] lg:max-w-full max-w-full mx-auto text-3xl font-medium md:text-4xl lg:px-0 lg:static">
          <span className="self-start font-archivo">{t("title")} </span>
          <span className="flex items-center self-end font-bold tracking-tight uppercase">
            <HugeiconsIcon
              icon={ReplyIcon}
              size={38}
              strokeWidth={2}
              className="mb-2 mr-1 rotate-180"
            />
            Lore & Code
          </span>
        </h1>
        <StarElement />
      </div>
      <div className="lg:w-[55%] w-full relative lg:border-r-3 border-r-0 lg:border-b-0 border-b-3 flex items-center justify-center lg:h-full h-fit px-4 lg:py-0 py-6">
        <div className="absolute inset-0 z-0 w-full h-full opacity-50">
          <div className="relative flex w-full h-full">
            <div className="absolute inset-0 z-0 flex flex-col w-full h-full justify-evenly">
              {Array.from({ length: isDesktop ? 20 : 30 }).map((_, i) => (
                <div className="w-full h-[2.5px] bg-main" key={i}></div>
              ))}
            </div>
            <div className="absolute inset-0 z-0 flex flex-row w-full h-full justify-evenly">
              {Array.from({ length: isTablet ? 30 : 15 }).map((_, i) => (
                <div className="w-[2.5px] h-full bg-main" key={i}></div>
              ))}
            </div>
          </div>
        </div>
        <ul className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-8">
          {advantages.map((advantage, i) => (
            <li
              key={i}
              className="flex flex-col justify-center items-center lg:w-[85%] w-[90%] lg:h-[20%] md:h-[15vh] h-[18vh] bg-white shadow-shadow hover:shadow-none duration-150 group border-2 relative"
            >
              <div className="absolute flex items-center justify-center w-10 h-10 font-bold duration-150 border-2 group-hover:shadow-none top-4 bg-main -left-6 shadow-shadow">
                {i + 1}
              </div>
              <h2 className="px-5 text-xl text-center lg:px-2 md:px-8 md:text-2xl lg:text-nowrap text-balance">
                {advantage.title}
              </h2>
              <p className="md:text-lg text-md font-public-sans md:max-w-[90%] max-w-full text-center mt-1.5 text-balance lg:mt-3">
                {advantage.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:w-[20%] w-full bg-pink-400 flex flex-col justify-between lg:items-start items-end lg:h-full h-fit px-4 lg:py-6 py-4">
        <div className="flex flex-col w-full gap-6 h-fit">
          <h2 className="text-4xl font-black text-white uppercase lg:max-w-full md:max-w-[60%] max-w-full">
            {t("cta.title")}
          </h2>
          <Link
            href={"#services"}
            className="flex items-center px-6 text-lg font-bold uppercase duration-150 border-2 hover:shadow-none h-14 w-fit bg-main shadow-shadow"
          >
            {t("cta.btnCta")}
            <HugeiconsIcon
              icon={NavigationIcon}
              fill="#000000"
              color="#00C8F0"
              size={32}
              className="rotate-45"
            />
          </Link>
        </div>
        <div className="relative lg:h-[40%] md:h-[40vh] h-[30vh] w-[70%] lg:w-full lg:mt-0 mt-12">
          <Image
            src={"/home/computer.png"}
            alt="computer"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            draggable={false}
            onDragStart={(event) => event.preventDefault()}
            className="object-contain pointer-events-none select-none"
          />
        </div>
      </div>
    </section>
  );
}

function StarElement() {
  return (
    <>
      <div className="absolute z-0 w-10 h-10 top-2 right-2 lg:w-25 lg:h-25 rotate-8">
        <Image
          src={"/home/star.png"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="star-1"
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
          className="object-contain pointer-events-none select-none"
        />
      </div>
      <div className="absolute z-0 w-5 h-5 rotate-45 lg:w-10 lg:h-10 lg:top-23 lg:right-25 top-2 right-13">
        <Image
          src={"/home/star.png"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="star-2"
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
          className="object-contain pointer-events-none select-none"
        />
      </div>
      <div className="absolute z-0 lg:top-28 lg:right-5 top-8 right-16 lg:w-17 lg:h-17 w-7 h-7 -rotate-12">
        <Image
          src={"/home/star.png"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="star-3"
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
          className="object-contain pointer-events-none select-none"
        />
      </div>
      <div className="absolute z-0 select-none lg:-top-30 lg:-left-30 -top-13 -left-13 lg:w-70 lg:h-70 w-25 h-25 rotate-12">
        <Image
          src={"/home/star2.png"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="star-element-1"
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
          className="object-contain pointer-events-none select-none"
        />
      </div>
      <div className="absolute z-0 flex items-center justify-center w-40 h-40 rotate-45 lg:w-70 lg:h-70 lg:-bottom-30 -bottom-22 -left-22 lg:-left-30">
        <div className="w-full h-full bg-main shadow-shadow rotate-180 rounded-[50%] border-2"></div>
        <div className="lg:w-30 lg:h-30 w-20 h-20 absolute bg-third rounded-[50%] border-3"></div>
      </div>
      <div className="absolute z-0 lg:-bottom-10 -bottom-28 lg:right-0 right-0 w-[11vw] h-[25vh] -rotate-12">
        <Image
          src={"/home/star3.png"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="star-element-2"
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
          className="object-contain pointer-events-none select-none"
        />
      </div>
    </>
  );
}
