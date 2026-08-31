"use client";
import CardWorkflow from "@/components/layout/CardWorkflow";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useWorkflowData } from "@/utils/workflow-data";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { MiniPageElement } from "./service";

export default function WorkflowSection() {
  const t = useTranslations("home.workflow");
  const dataCard = useWorkflowData();
  const isDekstop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px)");

  return (
    <section className="w-full font-sora min-h-screen h-fit flex flex-col p-8 pb-20 justify-center items-center border-t-3 relative overflow-hidden">
      <div className="flex justify-between w-[50vw] h-[10%] absolute z-0 left-1/2 -translate-x-1/2 top-0">
        <div className="w-2 h-full bg-black"></div>
        <div className="w-2 h-full bg-black"></div>
      </div>
      <div className="flex flex-col text-center gap-3 z-10 mt-4 bg-white px-8 py-4 border-3 shadow-shadow">
        <h1 className="text-5xl uppercase font-bold">{t("title")}</h1>
        <p className="text-xl font-medium">{t("subtitle")}</p>
      </div>

      <CardWorkflow data={dataCard} />

      <div className="absolute inset-0 z-0 w-full h-full opacity-20">
        <div className="relative flex w-full h-full">
          <div className="absolute inset-0 z-0 flex flex-col w-full h-full justify-evenly">
            {Array.from({ length: isDekstop ? 45 : 30 }).map((_, i) => (
              <div className="w-full h-[2.5px] bg-main" key={i}></div>
            ))}
          </div>
          <div className="absolute inset-0 z-0 flex flex-row w-full h-full justify-evenly">
            {Array.from({ length: isTablet ? 45 : 30 }).map((_, i) => (
              <div className="w-[2.5px] h-full bg-main" key={i}></div>
            ))}
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
      <div className="absolute bottom-35 flex justify-between w-[90%] left-1/2 -translate-x-1/2 scale-110">
        <MiniPageElement />
      </div>
      <div className="absolute z-0 select-none lg:-top-30 lg:-left-30 -top-13 -left-13 lg:w-70 lg:h-70 w-25 h-25 -rotate-12">
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
      <div className={`absolute z-0 w-10 h-10 top-50 right-110 -rotate-18`}>
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
      <div className={`absolute z-0 w-18 h-18 top-20 right-35 rotate-18`}>
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
      <div className={`absolute z-0 w-[4%] h-[4%] top-80 right-10 rotate-28`}>
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
      <div className="absolute z-0 select-none w-[10%] h-[10%] top-1/3 -left-4 rotate-22">
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
      <div className="absolute z-0 select-none w-[9%] h-[9%] bottom-1/4 -left-8 -rotate-42">
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
        className={`absolute z-0 w-[20%] h-[20%] top-[42%] -right-10 rotate-18`}
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
    </>
  );
}
