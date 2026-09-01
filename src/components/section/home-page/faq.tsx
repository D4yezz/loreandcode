"use client";
import {
  LeftDecoration,
  RightDecoration,
} from "@/components/layout/DecorationFaq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import ShapeGrid from "@/components/ui/ShapeGrid";
import {
  Cancel01Icon,
  ChangeScreenModeIcon,
  CircleArrowOutUpLeftIcon,
  MinusIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface FAQItem {
  title: string;
  content: string;
}

export default function FaqSection() {
  const t = useTranslations("home.FAQ");
  const questions = t.raw("questions") as FAQItem[];
  return (
    <section className="flex items-center w-full min-h-screen h-screen relative bg-background border-b-3 font-sora">
      <div className="w-[40%] h-full p-8 flex flex-col justify-center gap-12 relative border-r-3 bg-pink-400 overflow-hidden">
        <div className="flex w-full flex-col gap-4">
          <div className="bg-main text-md font-bold w-fit px-4 py-2 z-10 flex items-center justify-center gap-2 border-2 shadow-shadow">
            <div className="size-4 rounded-full border-2 bg-white"></div>
            {t("badge")}
          </div>
          <h1 className="text-5xl font-bold">{t("title")}</h1>
        </div>
        <Card className="bg-white z-10 p-0 gap-0">
          <CardHeader className="flex justify-between items-center border-b-2 px-2 bg-main mb-4">
            <div className="flex items-center text-md w-fit h-fit">
              <Image
                src="/logo.png"
                alt="logo"
                width={40}
                height={40}
                loading="eager"
              />
              <span className="font-bold tracking-tight uppercase whitespace-nowrap font-sora">
                Lore & Code
              </span>
            </div>
            <div className="flex gap-2 w-fit">
              <HugeiconsIcon icon={MinusIcon} size={18} strokeWidth={2} />
              <HugeiconsIcon
                icon={ChangeScreenModeIcon}
                size={18}
                strokeWidth={2}
              />
              <HugeiconsIcon icon={Cancel01Icon} size={18} strokeWidth={2} />
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <h2 className="text-4xl font-bold">{t("cardHead")}</h2>
            <p className="text-lg max-w-[95%]">{t("subtitle")}</p>
          </CardContent>
          <CardFooter className="p-4">
            <a
              href="#"
              className="w-full flex items-center justify-center gap-2 text-lg font-semibold border-2 py-2 bg-main hover:bg-third duration-150"
            >
              {t("btnCta")}
              <HugeiconsIcon
                icon={CircleArrowOutUpLeftIcon}
                size={20}
                strokeWidth={2}
                className="rotate-90"
              />
            </a>
          </CardFooter>
        </Card>
        <LeftDecoration />
      </div>
      <div className="w-[60%] h-full p-4 flex flex-col items-center justify-center relative overflow-hidden">
        <Accordion
          type="single"
          defaultValue={questions[0].title}
          collapsible
          className="w-full max-w-[80%] z-40"
        >
          {questions.map((item, index) => (
            <AccordionItem key={index} value={item.title}>
              <AccordionTrigger className="text-lg">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-base">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <ShapeGrid
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#61e5ff"
          hoverFillColor="#00C8F0"
          shape="square"
          hoverTrailAmount={0}
        />
        <RightDecoration />
      </div>
    </section>
  );
}
