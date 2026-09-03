"use client";
import {
  LeftDecoration,
  RightDecoration,
} from "@/components/common/DecorationFaq";
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
    <section
      id="faq"
      className="relative flex flex-col items-center w-full min-h-screen lg:flex-row lg:h-screen bg-background border-b-3 font-sora"
    >
      <div className="lg:w-[40%] w-full lg:h-full h-[80vh] p-8 flex flex-col justify-center lg:gap-12 gap-6 relative lg:border-r-3 lg:border-b-0 border-b-3 bg-pink-400 overflow-hidden">
        <div className="flex flex-col w-full gap-4">
          <div className="z-10 flex items-center justify-center gap-2 px-4 py-2 font-bold border-2 bg-main text-md w-fit shadow-shadow">
            <div className="bg-white border-2 rounded-full size-4"></div>
            {t("badge")}
          </div>
          <h1 className="z-10 text-5xl font-bold text-white">{t("title")}</h1>
        </div>
        <Card className="z-10 gap-0 p-0 bg-white">
          <CardHeader className="flex items-center justify-between px-2 mb-4 border-b-2 bg-main">
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
              className="flex items-center justify-center w-full gap-2 py-2 text-lg font-semibold duration-150 border-2 bg-main hover:bg-third"
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
      <div className="lg:w-[60%] w-full lg:h-full h-screen lg:p-4 flex flex-col items-center justify-center relative overflow-hidden">
        <Accordion
          type="single"
          defaultValue={questions[0].title}
          collapsible
          className="w-full lg:max-w-[80%] max-w-[90%] z-40"
        >
          {questions.map((item, index) => (
            <AccordionItem key={index} value={item.title}>
              <AccordionTrigger className="lg:text-lg text-md">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-sm lg:text-base">
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
