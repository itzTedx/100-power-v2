import type { MetadataRoute } from "next";

import { PRODUCTS } from "@/data/products";

const BASEURL = "https://www.100-power.com";

const uniqueTypes = Array.from(
  new Set(PRODUCTS.map((p) => p.type).filter(Boolean))
);

export default function sitemap(): MetadataRoute.Sitemap {
  const productsCategoriesEntries: MetadataRoute.Sitemap = uniqueTypes.map(
    (type) => ({
      url: `${BASEURL}/products?category=${type}`,
      changeFrequency: "monthly",
      priority: 0.9,
    })
  );

  const productsEntries = PRODUCTS.map((p) => ({
    url: `${BASEURL}/products/${p.href}`,
    priority: 0.9,
  }));

  return [
    {
      url: BASEURL,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${BASEURL}/about`,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${BASEURL}/solutions`,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${BASEURL}/products`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASEURL}/contact`,
      changeFrequency: "yearly",
      priority: 0.7,
    },

    ...productsCategoriesEntries,
    ...productsEntries,
  ];
}
