"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import { WorkflowItem } from "@/utils/workflow-data";
import { Tick01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";

export default function CardWorkflow({ data }: { data: WorkflowItem[] }) {
  return (
    <div className="relative flex flex-col gap-8 mt-10 lg:mt-20 lg:gap-0">
      {data.map((item, index: number) => (
        <div
          key={index}
          className="lg:w-[80vw] w-full mx-auto h-fit flex odd:justify-start even:justify-end items-center relative z-20"
        >
          <CardItem
            key={index}
            number={index + 1}
            title={item.title}
            desc={item.desc}
            checklist={item.checklist}
            className={item.className}
            orientation={item.orientation}
          />
        </div>
      ))}
    </div>
  );
}

function CardItem({
  number,
  title,
  desc,
  checklist,
  className,
  orientation,
}: {
  number: number;
  title: string;
  desc: string;
  checklist: string[];
  className: string;
  orientation: "left" | "right";
}) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  return (
    <div
      className={`relative lg:w-[55%] md:w-[70%] w-full lg:h-[31vh] md:h-[25vh] h-[21vh] border-3 border-black flex z-10 overflow-visible shadow-shadow ${className}`}
    >
      {orientation === "left" ? (
        <>
          <div className="absolute -top-4.5 right-[30%] translate-x-1/2 w-7 h-8 bg-background rounded-full z-20" />
          <div className="absolute top-0 right-[30%] translate-x-1/2 w-8 h-4 bg-black rounded-b-full z-10" />
          <div className="absolute -bottom-4.5 right-[30%] translate-x-1/2 w-7 h-8 bg-background rounded-full z-20" />
          <div className="absolute bottom-0 right-[30%] translate-x-1/2 w-8 h-4 bg-black rounded-t-full z-10" />
        </>
      ) : (
        <>
          <div className="absolute -top-4.5 left-[30%] -translate-x-1/2 w-7 h-8 bg-background rounded-full z-20" />
          <div className="absolute top-0 left-[30%] -translate-x-1/2 w-8 h-4 bg-black rounded-b-full z-10" />
          <div className="absolute -bottom-4.5 left-[30%] -translate-x-1/2 w-7 h-8 bg-background rounded-full z-20" />
          <div className="absolute bottom-0 left-[30%] -translate-x-1/2 w-8 h-4 bg-black rounded-t-full z-10" />
        </>
      )}

      <div
        className={`w-[70%] flex flex-col justify-center lg:p-4 p-2 ${orientation === "left" ? "order-1 md:pr-6 pr-4" : "order-2 md:pl-6 pl-4"}`}
      >
        <div className="flex flex-col items-center justify-center w-full h-full gap-2">
          <h2 className="lg:text-xl text-md font-bold lg:w-[95%] w-full bg-white border-2 py-1 px-2">
            {title}
          </h2>
          <p className="lg:text-sm text-xs text-justify lg:w-[95%] w-full bg-white border-2 lg:px-3 p-1 lg:py-2">
            {desc}
          </p>
          {isTablet && (
            <ul className="flex flex-col gap-2 lg:w-[95%] w-full bg-white border-2 p-2">
              {checklist.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-1 text-xs lg:gap-2 md:text-sm"
                >
                  <HugeiconsIcon
                    icon={Tick01Icon}
                    size={isDesktop ? 20 : 18}
                    className="text-main"
                    strokeWidth={2}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div
        className={`w-[30%] h-full border-dashed border-black flex flex-col items-center justify-center relative overflow-hidden ${orientation === "left" ? "order-2 border-l-3" : "order-1 border-r-3"}`}
      >
        <div
          className={`w-4 h-full bg-white z-10 absolute top-0 ${orientation === "left" ? "right-0 border-l-2" : "left-0 border-r-2"}`}
        ></div>
        <div className="w-[60%] h-[60%] flex items-center justify-center">
          <span className="md:text-7xl text-5xl font-bold text-center font-archivo">
            {number}
          </span>
        </div>
        <div
          className={`absolute z-0 md:w-12 md:h-12 w-10 h-10 -top-2 ${orientation === "left" ? "right-0 rotate-8" : "left-0 -rotate-18"}`}
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
        <div
          className={`absolute z-0 md:w-12 md:h-12 w-9 h-9 lg:top-10 top-8 ${orientation === "left" ? "lg:left-0 left-1 rotate-8" : "lg:right-0 right-1 -rotate-18"}`}
        >
          <Image
            src={`/home/eye${orientation === "left" ? "-left" : "-right"}.png`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="eye-image"
            draggable={false}
            onDragStart={(event) => event.preventDefault()}
            className="object-contain pointer-events-none select-none"
          />
        </div>
        <div
          className={`absolute z-0 md:w-20 md:h-20 w-17 h-17 -bottom-4 ${orientation === "left" ? "lg:left-0 left-1 rotate-18" : "lg:right-0 right-1 -rotate-16"}`}
        >
          <Image
            src={`/home/saturn.png`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="saturn-image"
            draggable={false}
            onDragStart={(event) => event.preventDefault()}
            className="object-contain pointer-events-none select-none"
          />
        </div>
      </div>
    </div>
  );
}
