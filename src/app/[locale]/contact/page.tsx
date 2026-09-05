"use client";
import { useTranslations } from "next-intl";
import Navbar from "@/components/layout/Navbar/navbar";
import Footer from "@/components/layout/Footer/footer";
import ContactForm from "@/components/section/contact-page/contact-form";
import ContactInfo from "@/components/section/contact-page/contact-info";
import { HugeiconsIcon } from "@hugeicons/react";
import { Chat01Icon } from "@hugeicons/core-free-icons";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function ContactPage() {
  const t = useTranslations("contactPage");
  const isDekstop = useMediaQuery("(min-width: 1024px)");

  return (
    <main className="min-h-screen bg-white font-sora">
      <div className="flex flex-col gap-10 mx-4 my-4 overflow-hidden border-3 lg:mx-10 lg:my-8 bg-background lg:gap-14">
        <Navbar />

        <section className="px-4 mt-22 lg:mt-20 md:px-8 lg:px-12">
          <div className="bg-third border-4 border-black p-6 lg:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
            <div className="absolute z-10 items-center hidden gap-2 px-3 font-black uppercase transform border-2 border-black text-md w-fit h-fit top-4 right-4 md:flex bg-main shadow-shadow rotate-3">
              <Image
                src="/logo.png"
                alt="logo"
                width={45}
                height={45}
                loading="eager"
              />
              <span className="font-bold tracking-tight uppercase whitespace-nowrap font-sora">
                Lore & Code
              </span>
            </div>

            <div className="inline-flex z-10 items-center gap-2 bg-white border-3 border-black px-4 py-1.5 font-black text-sm uppercase mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
              <HugeiconsIcon icon={Chat01Icon} size={18} strokeWidth={2.5} />
              <span>{t("badge")}</span>
            </div>

            <h1 className="z-10 max-w-4xl text-3xl font-black leading-tight tracking-tight text-black uppercase md:text-5xl lg:text-6xl">
              {t("title")}
            </h1>

            <p className="relative z-10 max-w-2xl mt-4 text-base font-bold leading-relaxed md:text-xl text-slate-900">
              {t("subtitle")}
            </p>
            {isDekstop && (
              <div className="absolute z-10 flex flex-col w-54 h-38 bg-white border-2 -bottom-2 right-28 shadow-shadow -rotate-18">
                <div className="flex items-center justify-between w-full h-5 px-2 border-b-2">
                  <span className="text-[10px] font-semibold">Lore & Code</span>
                  <div className="flex items-center gap-1 w-fit">
                    <div className="bg-red-500 border rounded-full size-2"></div>
                    <div className="bg-yellow-400 border rounded-full size-2"></div>
                    <div className="bg-green-500 border rounded-full size-2"></div>
                  </div>
                </div>
                <div className="w-full h-full p-1">
                  <div className="relative w-full h-full overflow-hidden rounded-sm">
                    <Image
                      src={"/home/cars.gif"}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt="wallpaper"
                      draggable={false}
                      onDragStart={(event) => event.preventDefault()}
                      className="object-cover pointer-events-none select-none"
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="absolute z-0 select-none lg:-bottom-30 lg:-right-30 -bottom-20 -right-20 lg:w-90 lg:h-90 w-55 h-55 rotate-12">
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
          </div>
        </section>

        {/* Content Section */}
        <section className="px-4 pb-6 md:px-8 lg:px-12">
          <div className="grid items-start grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="h-full lg:col-span-7">
              <ContactForm />
            </div>
            <div className="h-full lg:col-span-5">
              <ContactInfo />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
