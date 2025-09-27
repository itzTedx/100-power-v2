export type Product = {
  metadata: ProductMetadata;
  content: string;
};

export type ProductMetadata = {
  id: number;
  title: string;
  slug: string;
  range?: string;
  rangeKey?: "Premium" | "Regular" | "Super Premium";
  category: "engine-oil" | "lubrication" | "aviation" | "marine" | "industrial";
  images: string[];
  quantities: string[];
  safetyDs?: string;
  technicalDs?: string;
  meta: {
    title: string;
    description: string;
  };
};
