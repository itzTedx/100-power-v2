import { z } from "zod/v4";

export type Product = {
  metadata: ProductMetadata;
  content: string;
};

export type ProductMetadata = {
  id: number;
  title: string;
  slug: string;
  range?: "Premium" | "Regular";
  category: "engine-additives" | "lubrication" | "fuel-system" | "industrial";
  images: string[];
  quantities: string[];
  safetyDs?: string;
  technicalDs?: string;
  meta: {
    title: string;
    description: string;
  };
};
