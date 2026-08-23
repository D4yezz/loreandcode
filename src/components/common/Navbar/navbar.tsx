import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const menu = [
    {
      title: t("home"),
      href: "/",
    },
    {
      title: t("services"),
      href: "/services",
    },
    {
      title: t("projects"),
      href: "/projects",
    },
    {
      title: t("faq"),
      href: "/contact",
    },
  ];
  return (
    <header className="w-full py-6 px-8 font-public-sans">
      <div className="w-full h-15 border-2 flex items-center shadow-shadow">
        <div className="w-[15%] h-full flex items-center justify-center bg-purple-500 border-r-2">
          <Link href="/" className="flex items-center w-fit h-fit text-xl">
            <Image
              src="/logo.png"
              alt="logo"
              width={60}
              height={60}
              loading="eager"
            />
            <span className="font-bold uppercase font-archivo">
              Lore & Code
            </span>
          </Link>
        </div>
        <nav className="h-full w-[70%] flex items-center justify-center">
          <ul className="flex items-center gap-14 font-semibold text-xl">
            {menu.map((item, i) => (
              <li key={i}>
                <Link href={item.href} className="tracking-wide font-archivo">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="w-[15%] h-full px-4 border-l-2 bg-main uppercase text-xl font-bold font-archivo">
          {t("btnCta")}
        </button>
      </div>
    </header>
  );
}
