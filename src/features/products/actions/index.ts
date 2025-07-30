import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { Product, ProductMetadata } from "./types";

const root = path.join(process.cwd(), "src", "contents", "products");

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const filePath = path.join(root, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
    const { data, content } = matter(fileContent);

    return { metadata: { ...(data as ProductMetadata), slug }, content };
  } catch {
    return null;
  }
}

export async function getProducts(limit?: number): Promise<ProductMetadata[]> {
  const files = fs.readdirSync(root);

  let products = files.map((file) => getProductMetadata(file));

  // Sort by id in ascending order
  products.sort((a, b) => (a.id ?? 0) - (b.id ?? 0));

  if (limit) {
    return products.slice(0, limit);
  }

  return products;
}

export function getProductMetadata(
  filepath: string
): ProductMetadata & { slug: string } {
  const slug = filepath.replace(/\.mdx$/, "");
  const filePath = path.join(root, filepath);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
  const { data } = matter(fileContent);

  return { ...(data as ProductMetadata), slug };
}
