"use client";

import { NavigationIcon, ReplyIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function AdvantagesSection() {
  const t = useTranslations("home.advantages");
  const advantages = Array.from({ length: 4 }, (_, index) => ({
    title: t(`listAdvantages${index + 1}.title`),
    description: t(`listAdvantages${index + 1}.description`),
  }));
  return (
    <section className="w-full font-sora h-[90vh] flex">
      <div className="w-[25%] bg-third border-r-3 flex items-center h-full px-6 relative overflow-hidden">
        <h1 className="flex flex-col items-stretch w-full text-4xl font-medium">
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
      <div className="w-[55%] relative border-r-3 flex items-center justify-center h-full px-4">
        <div className="absolute inset-0 z-0 w-full h-full opacity-50">
          <div className="relative flex w-full h-full">
            <div className="absolute inset-0 z-0 flex flex-col w-full h-full justify-evenly">
              {Array.from({ length: 15 }).map((_, i) => (
                <div className="w-full h-[2.5px] bg-main" key={i}></div>
              ))}
            </div>
            <div className="absolute inset-0 z-0 flex flex-row w-full h-full justify-evenly">
              {Array.from({ length: 15 }).map((_, i) => (
                <div className="w-[2.5px] h-full bg-main" key={i}></div>
              ))}
            </div>
          </div>
        </div>
        <ul className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-8">
          {advantages.map((advantage, i) => (
            <li
              key={i}
              className="flex flex-col justify-center items-center w-[85%] h-[20%] bg-white shadow-shadow hover:shadow-none duration-150 group border-2 relative"
            >
              <div className="absolute flex group-hover:shadow-none duration-150 items-center justify-center w-10 h-10 font-bold border-2 top-4 bg-main -left-6 shadow-shadow">
                {i + 1}
              </div>
              <h2 className="text-2xl text-center px-2">{advantage.title}</h2>
              <p className="text-lg font-public-sans max-w-[90%] text-center text-balance mt-3">
                {advantage.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[20%] bg-pink-400 flex flex-col justify-between h-full px-4 py-6">
        <div className="flex flex-col w-full gap-6 h-fit ">
          <h2 className="text-4xl font-black text-white uppercase">
            {t("cta.title")}
          </h2>
          <Link
            href={"/"}
            className="flex hover:shadow-none duration-150 items-center uppercase px-6 text-lg font-bold border-2 h-14 w-fit bg-main shadow-shadow"
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
        <div className="relative w-full h-[40%]">
          <Image
            src={"/home/computer.png"}
            alt="computer"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            draggable={false}
            onDragStart={(event) => event.preventDefault()}
            className="pointer-events-none select-none object-contain"
          />
        </div>
      </div>
    </section>
  );
}

function StarElement() {
  return (
    <>
      <div className="absolute z-10 top-2 right-2 w-25 h-25 rotate-8">
        <Image
          src={"/home/star.png"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="star"
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
          className="pointer-events-none select-none object-contain"
        />
      </div>
      <div className="absolute z-10 top-23 right-25 w-10 h-10 rotate-45">
        <Image
          src={"/home/star.png"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="star"
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
          className="pointer-events-none select-none object-contain"
        />
      </div>
      <div className="absolute z-10 top-28 right-5 w-17 h-17 -rotate-12">
        <Image
          src={"/home/star.png"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="thunder"
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
          className="pointer-events-none select-none object-contain"
        />
      </div>
      <div className="absolute z-10 -top-30 -left-30 w-70 h-70 select-none rotate-12">
        <Image
          src={"/home/star2.png"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="thunder"
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
          className="pointer-events-none select-none object-contain"
        />
      </div>
      <div className="w-70 h-70 flex items-center -bottom-30 -left-30 justify-center absolute z-10 rotate-45">
        <div className="w-full h-full bg-main shadow-shadow rotate-180 rounded-[50%] border-2"></div>
        <div className="w-30 h-30 absolute bg-third rounded-[50%] border-3"></div>
      </div>
      <div className="absolute z-10 -bottom-10 right-0 w-[11vw] h-[25vh] -rotate-12">
        <Image
          src={"/home/star3.png"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="thunder"
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
          className="pointer-events-none select-none object-contain"
        />
      </div>
    </>
  );
}
