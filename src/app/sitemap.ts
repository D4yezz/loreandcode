import { SERVICE_SLUGS } from "@/utils/services-data";
import { MetadataRoute } from "next";

const BASE_URL = "https://loreandcode.vercel.app";
const LOCALES = ["id", "en", "de", "es"];

const PAGES = ["/", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  PAGES.forEach((page) => {
    LOCALES.forEach((locale) => {
      const url = `${BASE_URL}/${locale}${page}`;

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: page === "" ? "daily" : "weekly",
        priority: page === "" ? 1.0 : 0.8,
        alternates: {
          languages: LOCALES.reduce(
            (acc, loc) => {
              acc[loc] = `${BASE_URL}/${loc}${page}`;
              return acc;
            },
            {} as Record<string, string>,
          ),
        },
      });
    });
  });

  SERVICE_SLUGS.forEach((slug) => {
    LOCALES.forEach((locale) => {
      const url = `${BASE_URL}/${locale}/service/${slug}`;

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
        alternates: {
          languages: LOCALES.reduce(
            (acc, loc) => {
              acc[loc] = `${BASE_URL}/${loc}/service/${slug}`;
              return acc;
            },
            {} as Record<string, string>,
          ),
        },
      });
    });
  });

  return sitemapEntries;
}
