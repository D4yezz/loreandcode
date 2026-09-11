import { useTranslations } from "next-intl";

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  desc: string;
  priceStart: string;
  priceEnd: string;
  features: string[];
  greatFor: string[];
  exampleWeb: string[];
  img: string;
  imagesCount: number;
  images: string[];
}

type ServiceTranslations = {
  (key: string): string;
  raw(key: string): unknown;
};

export const SERVICE_CONFIGS = [
  {
    id: "1",
    slug: "digital-invitation",
    folder: "online-invitation",
    imagesCount: 7,
  },
  { id: "2", slug: "website-business-profile", folder: "umkm", imagesCount: 8 },
  {
    id: "3",
    slug: "company-profile",
    folder: "profile-company",
    imagesCount: 8,
  },
  { id: "4", slug: "portfolio-blog", folder: "portfolio", imagesCount: 8 },
] as const;

export const SERVICE_SLUGS = SERVICE_CONFIGS.map((c) => c.slug);

export function useServiceData(): ServiceItem[] {
  const t = useTranslations("home.services.items");

  return SERVICE_CONFIGS.map((config) => {
    const key = config.id;
    const images = Array.from(
      { length: config.imagesCount },
      (_, i) => `/service/${config.folder}/${i + 1}.png`,
    );

    return {
      id: key,
      slug: config.slug,
      title: t(`${key}.title`),
      desc: t(`${key}.desc`),
      priceStart: t(`${key}.priceStart`),
      priceEnd: t(`${key}.priceEnd`),
      features: t.raw(`${key}.features`) as string[],
      greatFor: t.raw(`${key}.greatFor`) as string[],
      exampleWeb: t.raw(`${key}.exampleWeb`) as string[],
      img: config.folder,
      imagesCount: config.imagesCount,
      images,
    };
  });
}

export function useServiceBySlug(slug: string): ServiceItem | undefined {
  const services = useServiceData();
  return services.find(
    (s) => s.slug.toLowerCase() === slug.toLowerCase() || s.id === slug,
  );
}
export function getServiceItemServer(
  slug: string,
  tItems: ServiceTranslations,
): ServiceItem | undefined {
  const config = SERVICE_CONFIGS.find(
    (c) => c.slug.toLowerCase() === slug.toLowerCase() || c.id === slug,
  );
  if (!config) return undefined;
  const key = config.id;
  const images = Array.from(
    { length: config.imagesCount },
    (_, i) => `/service/${config.folder}/${i + 1}.png`,
  );
  return {
    id: key,
    slug: config.slug,
    title: tItems(`${key}.title`),
    desc: tItems(`${key}.desc`),
    priceStart: tItems(`${key}.priceStart`),
    priceEnd: tItems(`${key}.priceEnd`),
    features: tItems.raw(`${key}.features`) as string[],
    greatFor: tItems.raw(`${key}.greatFor`) as string[],
    exampleWeb: tItems.raw(`${key}.exampleWeb`) as string[],
    img: config.folder,
    imagesCount: config.imagesCount,
    images,
  };
}

export function getRecommendedServicesServer(
  currentSlug: string,
  tItems: ServiceTranslations,
): ServiceItem[] {
  const configs = SERVICE_CONFIGS.filter(
    (c) =>
      c.slug.toLowerCase() !== currentSlug.toLowerCase() &&
      c.id !== currentSlug,
  );

  return configs.map((config) => {
    const key = config.id;
    const images = Array.from(
      { length: config.imagesCount },
      (_, i) => `/service/${config.folder}/${i + 1}.png`,
    );
    return {
      id: key,
      slug: config.slug,
      title: tItems(`${key}.title`),
      desc: tItems(`${key}.desc`),
      priceStart: tItems(`${key}.priceStart`),
      priceEnd: tItems(`${key}.priceEnd`),
      features: tItems.raw(`${key}.features`) as string[],
      greatFor: tItems.raw(`${key}.greatFor`) as string[],
      exampleWeb: tItems.raw(`${key}.exampleWeb`) as string[],
      img: config.folder,
      imagesCount: config.imagesCount,
      images,
    };
  });
}
