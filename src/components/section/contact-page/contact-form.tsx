"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { HugeiconsIcon } from "@hugeicons/react";
import { Chat01Icon } from "@hugeicons/core-free-icons";
import { useServiceData } from "@/utils/services-data";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSearchParams } from "next/navigation";

export default function ContactForm() {
  const t = useTranslations("contactPage");
  const services = useServiceData();
  const searchParams = useSearchParams();

  const queryService = searchParams.get("service") || "";
  const queryMessage = searchParams.get("message") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    if (queryService || queryMessage) {
      const setForm = () => {
        setFormData((prev) => ({
          ...prev,
          service: queryService || prev.service,
          message: queryMessage || prev.message,
        }));
      };
      setForm();
    }
  }, [queryService, queryMessage]);

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [fallbackUrl, setFallbackUrl] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectService = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.fallbackTelegramUrl) {
        setFallbackUrl(result.fallbackTelegramUrl);
      }

      if (response.ok && result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.error || t("form.errorDesc"));
        toast.error(result.error || t("form.errorDesc"));
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage(t("form.errorDesc"));
      toast.error(t("form.errorDesc"));
    }
  };

  return (
    <div className="bg-white border-4 border-black p-6 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative font-sora h-full">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 bg-pink-400 border-2 border-black px-3 py-1 font-black text-xs uppercase mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <HugeiconsIcon icon={Chat01Icon} size={16} strokeWidth={2} />
          <span>{t("form.badge")}</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-black uppercase text-black">
          {t("form.title")}
        </h3>
      </div>

      {status === "success" ? (
        <div className="bg-main border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-black fill-white shrink-0" />
            <div>
              <h4 className="text-xl font-black uppercase">
                {t("form.successTitle")}
              </h4>
              <p className="text-sm font-semibold text-slate-900 mt-1">
                {t("form.successDesc")}
              </p>
            </div>
          </div>
          {fallbackUrl && (
            <a
              href={fallbackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-white text-black font-black uppercase py-3 px-5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-center inline-block"
            >
              {t("form.orTelegramBtn")}
            </a>
          )}
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="text-xs font-black uppercase underline text-left mt-1 hover:text-slate-800"
          >
            {t("form.anotherMessageBtn")}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {status === "error" && (
            <div className="bg-red-200 border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-2">
              <div className="flex items-center gap-2 text-red-900">
                <AlertCircle className="w-6 h-6 shrink-0" />
                <h4 className="font-black uppercase">{t("form.errorTitle")}</h4>
              </div>
              <p className="text-xs font-bold text-red-950">{errorMessage}</p>
              {fallbackUrl && (
                <a
                  href={fallbackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 bg-white text-black font-black uppercase text-xs py-2 px-4 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block text-center"
                >
                  {t("form.orTelegramBtn")}
                </a>
              )}
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="font-black text-sm uppercase tracking-wide flex items-center gap-2"
            >
              <span>{t("form.nameLabel")}</span>
              <span className="text-pink-500 font-bold">*</span>
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder={t("form.namePlaceholder")}
              className="bg-white border-3 border-black p-3.5 font-bold text-black placeholder:text-gray-400 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:bg-yellow-50 focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-black text-sm uppercase tracking-wide flex items-center gap-2"
            >
              <span>{t("form.emailLabel")}</span>
              <span className="text-pink-500 font-bold">*</span>
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder={t("form.emailPlaceholder")}
              className="bg-white border-3 border-black p-3.5 font-bold text-black placeholder:text-gray-400 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:bg-yellow-50 focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="service"
              className="font-black text-sm uppercase tracking-wide"
            >
              {t("form.serviceLabel")}
            </label>
            <Select
              value={formData.service}
              onValueChange={handleSelectService}
            >
              <SelectTrigger className="bg-white border-3 border-black p-3.5 font-bold text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:bg-yellow-50 cursor-pointer transition-all">
                <SelectValue placeholder={t("form.selectServiceDefault")} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {services.map((service, i) => (
                    <SelectItem key={i} value={service.title}>
                      {service.title}
                    </SelectItem>
                  ))}
                  <SelectItem value="Custom Website">
                    {t("form.customWeb")}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="font-black text-sm uppercase tracking-wide flex items-center gap-2"
            >
              <span>{t("form.messageLabel")}</span>
              <span className="text-pink-500 font-bold">*</span>
            </label>
            <Textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder={t("form.messagePlaceholder")}
              className="bg-white border-3 border-black p-3.5 font-bold text-black placeholder:text-gray-400 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:bg-yellow-50 focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all resize-none"
            ></Textarea>
          </div>
          <p className="text-xs font-semibold italic">{t("form.disclaimer")}</p>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-2 bg-main text-black font-black uppercase text-lg py-4 px-6 border-3 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 active:translate-x-1 active:translate-y-1 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              <>
                <span className="inline-block w-5 h-5 border-3 border-black border-t-transparent rounded-full animate-spin"></span>
                <span>{t("form.sendingBtn")}</span>
              </>
            ) : (
              <>
                <span>{t("form.submitBtn")}</span>
                <Send className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
