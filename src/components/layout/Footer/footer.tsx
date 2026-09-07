"use client";
import { LINKS } from "@/constants/links";
import { Link, usePathname } from "@/i18n/navigation";
import {
  ArrowUpRight03Icon,
  GithubIcon,
  Instagram,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const nav = useTranslations("Navbar");
  const t = useTranslations("footer");
  const pathname = usePathname();
  const menu = [
    {
      title: nav("home"),
      href: pathname === "/" ? "#hero" : "/",
    },
    {
      title: nav("services"),
      href: "/#services",
    },
    {
      title: nav("faq"),
      href: "/#faq",
    },
    {
      title: nav("contact"),
      href: pathname === "/contact" ? "#hero" : "/contact",
    },
  ];
  return (
    <footer className="w-full bg-background border-black text-black overflow-hidden font-sora border-t-3">
      <div className="border-b-3 border-black bg-third p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6 relative">
        <div className="absolute top-4 right-10 hidden lg:block">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2"
            className="animate-spin-slow"
          >
            <path
              d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"
              fill="white"
            />
          </svg>
        </div>

        <h2 className="text-3xl whitespace-nowrap md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-center lg:text-left z-10">
          {t("cta.titleLine1")} <br />{" "}
          <span className="bg-white border-2 border-black px-2 mt-2 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {t("cta.titleLine2")}
          </span>
        </h2>

        <Link
          href="/contact"
          className="bg-main text-black text-xl font-black uppercase lg:py-4 py-3 flex items-center justify-center gap-2 lg:px-8 px-6 border-3 border-black shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all z-10"
        >
          {t("cta.btn")}{" "}
          <HugeiconsIcon icon={ArrowUpRight03Icon} size={24} strokeWidth={2} />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-4 lg:p-12">
        <div className="lg:col-span-1">
          <h3 className="text-3xl font-black uppercase bg-third text-black inline-block px-3 py-1 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4 transform -rotate-2">
            Lore & Code
          </h3>
          <p className="font-semibold text-lg leading-relaxed mt-2">
            {t("brand.descBefore")}{" "}
            <span className="underline decoration-4 decoration-pink-400">
              {t("brand.highlight")}
            </span>{" "}
            {t("brand.descAfter")}
          </p>
        </div>

        <div>
          <h4 className="text-xl font-black border-b-4 border-black mb-4 pb-1 inline-block uppercase">
            {t("headings.navigation")}
          </h4>
          <ul className="flex flex-col gap-3 font-bold text-lg">
            {menu.map((item, i) => (
              <li key={i}>
                {item.href.includes("#") ? (
                  <a
                    href={item.href}
                    className="hover:bg-main hover:px-2 transition-all duration-200 border-l-4 border-transparent hover:border-black"
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:bg-main hover:px-2 transition-all duration-200 border-l-4 border-transparent hover:border-black"
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-black border-b-4 border-black mb-4 pb-1 inline-block uppercase">
            {t("headings.contact")}
          </h4>
          <ul className="flex flex-col gap-4 font-bold">
            <li>
              <span className="text-sm uppercase tracking-wider text-gray-700 block">
                {t("contact.telegram")}
              </span>
              <a
                href={LINKS.telegram}
                className="bg-white border-2 border-black px-2 py-1 inline-block mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-pink-400 hover:text-black transition-colors"
              >
                {LINKS.telegram.replace("https://t.me/", "@")}
              </a>
            </li>
            <li>
              <span className="text-sm uppercase tracking-wider text-gray-700 block">
                {t("contact.email")}
              </span>
              <a
                href={`mailto:${LINKS.email}`}
                className="bg-white border-2 border-black px-2 py-1 inline-block mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-main hover:text-black transition-colors break-all"
              >
                {LINKS.email}
              </a>
            </li>
            <li className="mt-2 flex items-center gap-2">
              <span className="w-3 h-3 bg-black rounded-full inline-block"></span>
              {t("contact.location")}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-black border-b-4 border-black mb-4 pb-1 inline-block uppercase">
            {t("headings.social")}
          </h4>
          <div className="flex flex-wrap gap-4">
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-main border-3 border-black shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center font-black text-lg"
            >
              <HugeiconsIcon icon={Instagram} size={24} strokeWidth={2} />
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-third border-3 border-black shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center font-black text-lg"
            >
              <HugeiconsIcon icon={GithubIcon} size={24} strokeWidth={2} />
            </a>
            <a
              href={LINKS.x}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-pink-400 border-3 border-black shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center font-black text-lg"
            >
              <HugeiconsIcon icon={NewTwitterIcon} size={24} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t-3 border-black bg-white p-4 flex  justify-between items-center font-bold text-sm lg:text-base">
        <p className="flex items-center gap-2">
          © {new Date().getFullYear()} Lore & Code.{" "}
          <span className="hidden lg:inline">{t("bottom.rights")}</span>
        </p>
        <p className="bg-main text-black border-3 px-3 py-1">
          {t("bottom.createdBy")} <a href="https://www.dayezzz.my.id">Dias</a>
        </p>
      </div>
    </footer>
  );
}
