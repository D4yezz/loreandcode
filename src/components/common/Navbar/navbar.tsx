"use client";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { MoveUpRightIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    <header className="w-full h-[13vh] flex items-center justify-end px-8 font-public-sans">
      <div className="w-full h-15 border-2 border-black flex items-center">
        <div className="w-[15%] shadow-nav h-full flex items-center justify-center bg-main border-r-2">
          <Link href="/" className="flex items-center w-fit h-fit text-xl">
            <Image
              src="/logo.png"
              alt="logo"
              width={60}
              height={60}
              loading="eager"
            />
            <span className="font-bold uppercase font-archivo tracking-tight">
              Lore & Code
            </span>
          </Link>
        </div>
        <nav className="h-full w-[67%] flex items-center justify-center shadow-nav">
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
        <div className="w-[23%] flex h-full">
          <LanguageSwitcher />
          <button className="h-full w-[80%] flex items-center justify-center gap-2 px-4 border-l-2 border-black bg-third  uppercase text-xl font-bold font-archivo shadow-nav duration-150 hover:shadow-none">
            {t("btnCta")}
            <HugeiconsIcon icon={MoveUpRightIcon} strokeWidth={1} />
          </button>
        </div>
      </div>
    </header>
  );
}

function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const changeLanguage = (newLocale: string) => {
    router.replace(pathname, {
      locale: newLocale,
    });
  };
  const languages = [
    {
      value: "id",
      label: "Indonesia",
      image: "https://flagcdn.com/w160/id.png",
    },
    {
      value: "en",
      label: "English",
      image: "https://flagcdn.com/w160/gb.png",
    },
    {
      value: "de",
      label: "Deutsch",
      image: "https://flagcdn.com/w160/de.png",
    },
    {
      value: "es",
      label: "Espanol",
      image: "https://flagcdn.com/w160/es.png",
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="w-[20%] h-full shadow-nav bg-pink-400 duration-150 hover:shadow-none flex items-center justify-center"
        asChild
      >
        <button>
          <Avatar>
            <AvatarImage
              src={`https://flagcdn.com/w160/${locale === "en" ? "gb" : locale}.png`}
              alt={locale}
            />
            <AvatarFallback>{locale}</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {languages.map((language, i) => (
            <DropdownMenuItem
              key={i}
              onClick={() => changeLanguage(language.value)}
              className="w-full"
            >
              <Avatar className="size-8">
                <AvatarImage src={language.image} alt={language.label} />
                <AvatarFallback>{language.label}</AvatarFallback>
              </Avatar>
              {language.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
