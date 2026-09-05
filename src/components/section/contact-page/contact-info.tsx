"use client";

import { useTranslations } from "next-intl";
import { Mail, Clock, MapPin, Send, ExternalLink } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Instagram,
  GithubIcon,
  NewTwitterIcon,
  MailCheckIcon,
} from "@hugeicons/core-free-icons";

export default function ContactInfo() {
  const t = useTranslations("contactPage.info");

  return (
    <div className="flex flex-col gap-6 font-sora h-full">
      {/* Banner */}
      <div className="bg-third border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden h-[22%] flex items-center">
        <div className="flex items-start gap-4 h-fit">
          <div className="bg-main border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0">
            <HugeiconsIcon icon={MailCheckIcon} />
          </div>

          <div>
            <div className="inline-block bg-white border-2 border-black px-2 py-0.5 font-black text-xs uppercase mb-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {t("badge")}
            </div>
            <h4 className="text-xl font-black uppercase text-black">
              {t("fastResponseTitle")}
            </h4>
            <p className="text-sm font-bold text-slate-800 mt-1 leading-relaxed">
              {t("fastResponseDesc")}
            </p>
          </div>
        </div>
      </div>

      {/* Main Info */}
      <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-5 h-[78%]">
        <h4 className="text-xl font-black uppercase border-b-3 border-black pb-3">
          {t("title")}
        </h4>

        {/* Telegram Card */}
        <div className="bg-main border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white border-2 border-black p-2.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <Send className="w-5 h-5 text-black" />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-slate-800 block">
                {t("telegramTitle")}
              </span>
              <span className="font-black text-lg text-black">
                {t("telegramUsername")}
              </span>
            </div>
          </div>
          <a
            href="https://t.me/loreandcode"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black p-2.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-all shrink-0"
            aria-label="Telegram"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* Email Card */}
        <div className="bg-pink-400 border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="bg-white border-2 border-black p-2.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0">
              <Mail className="w-5 h-5 text-black" />
            </div>
            <div className="overflow-hidden">
              <span className="text-xs font-black uppercase tracking-wider text-slate-800 block">
                {t("emailTitle")}
              </span>
              <span className="font-black text-sm md:text-base text-black truncate block">
                {t("emailAddress")}
              </span>
            </div>
          </div>
          <a
            href={`mailto:${t("emailAddress")}`}
            className="bg-white text-black p-2.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-all shrink-0"
            aria-label="Email"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* Location & Hours */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
          <div className="bg-background border-2 border-black p-3.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="w-4 h-4 text-black shrink-0" />
              <span className="text-xs font-black uppercase text-slate-700">
                {t("locationTitle")}
              </span>
            </div>
            <p className="font-bold text-sm text-black">{t("location")}</p>
          </div>

          <div className="bg-background border-2 border-black p-3.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-black shrink-0" />
              <span className="text-xs font-black uppercase text-slate-700">
                {t("hoursTitle")}
              </span>
            </div>
            <p className="font-bold text-xs md:text-sm text-black">
              {t("hoursDesc")}
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-2 border-t-2 border-black pt-4">
          <span className="text-xs font-black uppercase text-slate-700 block mb-3">
            {t("follow")}
          </span>
          <div className="flex md:gap-3 gap-2 md:flex-row flex-col md:flex-wrap">
            <a
              href="https://www.instagram.com/loreandcode/"
              target="_blank"
              rel="noopener noreferrer"
              className="md:flex-1 bg-main border-2 border-black md:p-2.5 p-2 text-center font-black text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center justify-center gap-2"
            >
              <HugeiconsIcon icon={Instagram} size={20} strokeWidth={2} />
              <span>Instagram</span>
            </a>
            <a
              href="https://github.com/D4yezz/"
              target="_blank"
              rel="noopener noreferrer"
              className="md:flex-1 bg-third border-2 border-black md:p-2.5 p-2 text-center font-black text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center justify-center gap-2"
            >
              <HugeiconsIcon icon={GithubIcon} size={20} strokeWidth={2} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.twitter.com/loreandcode/"
              target="_blank"
              rel="noopener noreferrer"
              className="md:flex-1 bg-pink-400 border-2 border-black md:p-2.5 p-2 text-center font-black text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center justify-center gap-2"
            >
              <HugeiconsIcon icon={NewTwitterIcon} size={20} strokeWidth={2} />
              <span>X / Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
