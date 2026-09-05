"use client";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import {
  ArrowUpRight01Icon,
  Cancel01Icon,
  NavigationIcon,
} from "@hugeicons/core-free-icons";
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
import useMediaQuery from "@/hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { connect } from "@/components/section/home-page/hero";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menu = [
    {
      title: t("home"),
      href: "/",
    },
    {
      title: t("services"),
      href: "#services",
    },
    {
      title: t("faq"),
      href: "#faq",
    },
    {
      title: t("contact"),
      href: "/contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-90 w-full transition-all duration-300 flex items-center justify-end font-public-sans ${isScrolled ? "p-0 lg:py-0 lg:px-10 lg:h-[8vh] h-[7vh]" : "lg:py-4 p-4 lg:px-10 lg:h-[12vh] h-[11vh]"}`}
    >
      <div
        className={`flex items-center justify-between w-full h-full border-black lg:shadow-none shadow-nav bg-background relative ${isScrolled ? "border-b-3 lg:border-3" : "border-3"}`}
      >
        <div className="w-[17%] lg:shadow-nav shadow-none h-full flex items-center justify-center bg-main border-r-3">
          <Link
            href="/"
            className="flex items-center text-lg w-fit h-fit lg:text-xl"
          >
            <Image
              src="/logo.png"
              alt="logo"
              width={60}
              height={60}
              loading="eager"
            />
            {isDesktop && (
              <span className="font-bold tracking-tight uppercase whitespace-nowrap font-sora">
                Lore & Code
              </span>
            )}
          </Link>
        </div>
        {isTablet && !isDesktop && (
          <Link
            href="/"
            className="text-3xl font-bold tracking-tight uppercase whitespace-nowrap font-sora"
          >
            Lore & Code
          </Link>
        )}
        {isDesktop ? (
          <>
            <nav className="h-full w-[65%] flex items-center justify-center shadow-nav">
              <ul className="flex items-center text-xl font-semibold gap-14">
                {menu.map((item, i) => (
                  <li key={i}>
                    <Link href={item.href} className="tracking-wide font-sora">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="w-[23%] flex h-full">
              <LanguageSwitcher />
              <Link
                href={"/contact"}
                className="h-full w-[80%] flex items-center justify-center gap-2 px-4 border-l-3 border-black bg-third uppercase text-lg whitespace-nowrap font-bold font-sora shadow-nav duration-150 hover:shadow-none"
              >
                {t("btnCta")}
                <HugeiconsIcon
                  icon={NavigationIcon}
                  fill="#000000"
                  color="oklch(71.4% 0.203 305.504) "
                  size={26}
                  className="rotate-45"
                />
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="w-[35%] md:w-[20%] flex h-full border-l-3">
              <LanguageSwitcher />
              <button
                onClick={() => setOpen(true)}
                className="flex flex-col items-end justify-center w-1/2 h-full gap-2 px-4 text-xl font-bold uppercase border-black border-l-3 bg-third font-sora"
              >
                <div className="w-[90%] h-1.5 bg-black" />
                <div className="w-[60%] h-1.5 bg-black" />
                <div className="w-[90%] h-1.5 bg-black" />
              </button>
            </div>
            <AnimatePresence>
              {open && (
                <>
                  <motion.div
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 z-50 flex items-center w-screen h-screen bg-black"
                  />

                  <motion.aside
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 left-0 flex flex-col items-center justify-between w-full z-60 bg-main border-b-3"
                  >
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center w-full"
                    >
                      <div className="flex items-center justify-between w-full border-b-4 h-14 bg-background">
                        <Link
                          href="/"
                          className="flex items-center text-lg w-fit h-fit"
                        >
                          <Image
                            src="/logo.png"
                            alt="logo"
                            width={50}
                            height={50}
                            loading="eager"
                          />
                          <span className="font-bold tracking-tight uppercase whitespace-nowrap font-sora">
                            Lore & Code
                          </span>
                        </Link>
                        <button
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-center h-full bg-pink-400 border-l-4 cursor-pointer w-13"
                        >
                          <HugeiconsIcon icon={Cancel01Icon} strokeWidth={4} />
                        </button>
                      </div>
                      <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-start w-full pl-2 pr-4 mt-4 h-fit"
                      >
                        <ul className="flex flex-col items-start w-full gap-2 text-4xl font-semibold text-white">
                          {menu.map((item, i) => (
                            <li key={i} className="flex items-center">
                              <Link
                                href={item.href}
                                className="font-black underline uppercase font-sora whitespace-nowrap decoration-2 decoration-white underline-offset-4"
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.nav>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full pl-2 pr-4 mb-4 mt-10"
                    >
                      <ul className="grid w-full grid-cols-2 gap-2 text-md font-semibold">
                        {connect.map((item, i) => (
                          <li
                            key={i}
                            className="flex w-full gap-2 px-2 py-3 bg-white border-3 last:col-span-2"
                          >
                            <HugeiconsIcon
                              icon={item.icon}
                              size={20}
                              strokeWidth={2}
                            />

                            {item.name}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex w-full"
                    >
                      <Link
                        href={"/contact"}
                        className="flex items-center justify-center w-full h-full gap-2 px-4 py-3 text-lg font-bold uppercase duration-150 border-black border-t-3 bg-third whitespace-nowrap font-sora shadow-nav hover:shadow-none"
                      >
                        {t("btnCta")}
                        <HugeiconsIcon
                          icon={NavigationIcon}
                          fill="#000000"
                          color="oklch(71.4% 0.203 305.504) "
                          size={26}
                          className="rotate-45"
                        />
                      </Link>
                    </motion.div>
                  </motion.aside>
                </>
              )}
            </AnimatePresence>
          </>
        )}
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
        className="lg:w-[20%] w-1/2 h-full lg:border-l-3 lg:shadow-nav shadow-none bg-pink-400 duration-150 hover:shadow-none flex items-center justify-center"
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
