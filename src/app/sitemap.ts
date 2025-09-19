import type { MetadataRoute } from "next";

import { getProducts } from "@/features/products/actions";
import { Locale } from "@/locale";
import { routing } from "@/locale/routing";

const BASEURL = "https://www.100poweruae.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locales = routing.locales as ReadonlyArray<Locale>;

  // Static pages per locale
  const staticPaths = [
    "",
    "about",
    "solutions",
    "products",
    "contact",
  ] as const;

  const staticEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${BASEURL}/${locale}${path ? `/${path}` : ""}`,
      changeFrequency: (path === "products"
        ? "monthly"
        : "yearly") as MetadataRoute.Sitemap[number]["changeFrequency"],
      priority: path === "" ? 1 : path === "products" ? 0.8 : 0.8,
    }))
  );

  // Product detail pages per locale
  const productsByLocale = await Promise.all(
    locales.map(async (locale) => {
      const products = await getProducts({ locale });
      return products.map((p) => ({
        url: `${BASEURL}/${locale}/products/${p.slug}`,
        changeFrequency:
          "monthly" as MetadataRoute.Sitemap[number]["changeFrequency"],
        priority: 0.9,
      }));
    })
  );

  return [...staticEntries, ...productsByLocale.flat()];
}
