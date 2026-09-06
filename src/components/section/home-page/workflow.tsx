"use client";
import CardWorkflow from "@/components/common/CardWorkflow";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useWorkflowData } from "@/utils/workflow-data";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { MiniPageElement } from "./service";

export default function WorkflowSection() {
  const t = useTranslations("home.workflow");
  const dataCard = useWorkflowData();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px)");

  return (
    <section
      id="workflow"
      className="relative flex flex-col items-center w-full min-h-screen p-8 pb-20 overflow-hidden font-sora h-fit lg:justify-center border-t-3 border-b-3"
    >
      <div className="flex justify-between w-[50vw] lg:h-[10%] h-[8%] absolute z-0 left-1/2 -translate-x-1/2 top-0">
        <div className="w-2 h-full bg-black"></div>
        <div className="w-2 h-full bg-black"></div>
      </div>
      <div className="z-10 flex flex-col gap-1 px-4 py-4 text-center bg-white lg:gap-3 lg:mt-4 lg:px-8 border-3 shadow-shadow">
        <h1 className="text-2xl font-bold uppercase lg:text-5xl">
          {t("title")}
        </h1>
        <p className="font-medium lg:text-xl text-md lg:text-wrap text-balance">
          {t("subtitle")}
        </p>
      </div>

      <CardWorkflow data={dataCard} />

      <div className="absolute inset-0 z-0 w-full h-full opacity-20">
        <div className="relative flex w-full h-full">
          <div className="absolute inset-0 z-0 flex flex-col w-full h-full justify-evenly">
            {Array.from({ length: isDesktop ? 45 : 45 }).map((_, i) => (
              <div className="w-full h-[2.5px] bg-main" key={i}></div>
            ))}
          </div>
          <div className="absolute inset-0 z-0 flex flex-row w-full h-full justify-evenly">
            {Array.from({ length: isDesktop ? 45 : isTablet ? 20 : 15 }).map(
              (_, i) => (
                <div className="w-[2.5px] h-full bg-main" key={i}></div>
              ),
            )}
          </div>
        </div>
      </div>

      <Decoration />
    </section>
  );
}

function Decoration() {
  return (
    <>
      <div className="absolute z-0 select-none lg:-top-30 lg:-left-30 -top-13 -right-13 lg:w-70 lg:h-70 w-35 h-35 -rotate-12">
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
      <div
        className={`absolute lg:z-0 z-10 lg:w-10 lg:h-10 w-12 h-12 lg:top-50 top-2 lg:left-10 left-1 lg:-rotate-18 rotate-18`}
      >
        <Image
          src={`/home/eye-right.png`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="eye-image"
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
          className="object-contain pointer-events-none select-none"
        />
      </div>
      <div
        className={`absolute lg:z-0 z-10 lg:w-18 lg:h-18 w-14 h-14 top-45 -right-2 lg:top-20 lg:right-20 rotate-18`}
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
        className={`absolute z-0 md:w-[4%] md:h-[4%] w-[15%] h-[15%] lg:top-80 top-3/4 lg:right-10 right-0 rotate-28`}
      >
        <Image
          src={"/home/white-star.png"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="star-image"
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
          className="object-contain pointer-events-none select-none"
        />
      </div>
      <div className="absolute z-0 select-none lg:w-[10%] lg:h-[10%] md:w-[14%] md:h-[14%] w-[25%] h-[25%] lg:top-1/3 top-1/4 -left-4 lg:rotate-22 -rotate-22">
        <Image
          src={"/home/saturn-2.png"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="saturn-2"
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
          className="object-contain pointer-events-none select-none"
        />
      </div>
      <div className="absolute z-0 select-none lg:w-[9%] lg:h-[9%] w-[20%] h-[20%] bottom-1/5 lg:-left-8 -left-5 lg:-rotate-42 rotate-30">
        <Image
          src={"/home/saturn-2.png"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="saturn-2"
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
          className="object-contain pointer-events-none select-none"
        />
      </div>
      <div
        className={`absolute z-0 lg:w-[20%] lg:h-[20%] w-[35%] h-[35%] lg:top-[42%] top-160 lg:-right-10 -right-8 rotate-18`}
      >
        <Image
          src={`/home/computer.png`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="computer"
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
          className="object-contain pointer-events-none select-none"
        />
      </div>

      <div className={`absolute z-0 w-20 h-20 bottom-20 left-70 rotate-28`}>
        <Image
          src={"/home/white-star.png"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="star-image"
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
          className="object-contain pointer-events-none select-none"
        />
      </div>
      <div className="absolute md:bottom-35 bottom-18 flex justify-between md:w-[90%] w-[130%] left-1/2 -translate-x-1/2 md:scale-110 scale-75">
        <MiniPageElement />
      </div>
    </>
  );
}
