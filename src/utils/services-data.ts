import { useTranslations } from "next-intl";

export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  priceStart: string;
  priceEnd: string;
  features: string[];
  greatFor: string[];
  exampleWeb: string[];
  img: string;
}

export function useServiceData(): ServiceItem[] {
  const t = useTranslations("home.services.items");

  const serviceKeys = ["1", "2", "3", "4"] as const;
  const image = (key: (typeof serviceKeys)[number]): string => {
    switch (key) {
      case "1":
        return "online-invitation";
      case "2":
        return "umkm";
      case "3":
        return "profile-company";
      case "4":
        return "portfolio";
      default:
        throw new Error(`Unknown service key: ${key}`);
    }
  };

  return serviceKeys.map((key) => ({
    id: key,
    title: t(`${key}.title`),
    desc: t(`${key}.desc`),
    priceStart: t(`${key}.priceStart`),
    priceEnd: t(`${key}.priceEnd`),
    features: t.raw(`${key}.features`) as string[],
    greatFor: t.raw(`${key}.greatFor`) as string[],
    exampleWeb: t.raw(`${key}.exampleWeb`) as string[],
    img: image(key),
  }));
}
