import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { Locale } from "@/locale";

import { Product, ProductMetadata } from "./types";

const root = (locale: Locale) =>
  path.join(process.cwd(), "src", "contents", "products", locale);

function resolveRangeKey(
  value?: string
): "Premium" | "Regular" | "Super Premium" | undefined {
  if (!value) return undefined;
  const v = value.toLowerCase().trim();

  // English
  if (v === "regular") return "Regular";
  if (v === "premium") return "Premium";
  if (v === "super premium" || v === "super-premium") return "Super Premium";

  // Arabic common variants
  if (v === "عادي") return "Regular";
  if (v === "ممتاز" || v === "بريميوم") return "Premium";
  if (v === "فائق الممتاز" || v === "سوبر بريميوم") return "Super Premium";

  // Russian
  if (v === "обычный") return "Regular";
  if (v === "премиум") return "Premium";
  if (v === "супер премиум" || v === "суперпремиум") return "Super Premium";

  return undefined;
}

export async function getProductBySlug(
  slug: string,
  { locale }: { locale: Locale }
): Promise<Product | null> {
  try {
    const filePath = path.join(root(locale), `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
    const { data, content } = matter(fileContent);

    const metadata = data as ProductMetadata;

    return {
      metadata: {
        ...metadata,
        slug,
        rangeKey: resolveRangeKey(metadata.range),
      },
      content,
    };
  } catch {
    return null;
  }
}

export async function getProducts({
  limit,
  locale,
}: {
  limit?: number;
  locale: Locale;
}): Promise<ProductMetadata[]> {
  const files = fs.readdirSync(root(locale));

  let products = files.map((file) => getProductMetadata(file, locale));

  // Sort by id in ascending order
  products.sort((a, b) => (a.id ?? 0) - (b.id ?? 0));

  if (limit) {
    return products.slice(0, limit);
  }

  return products;
}

export function getProductMetadata(
  filepath: string,
  locale: Locale
): ProductMetadata & { slug: string } {
  const slug = filepath.replace(/\.mdx$/, "");

  const filePath = path.join(root(locale), filepath);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
  const { data } = matter(fileContent);

  const metadata = data as ProductMetadata;

  return { ...metadata, slug, rangeKey: resolveRangeKey(metadata.range) };
}
