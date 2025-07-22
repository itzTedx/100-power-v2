export interface ProductType {
  id: number;
  range: "Premium" | "Regular";
  title: string;
  href: string;
  type: "lubrication" | "engine-additives" | "fuel-system" | "industrial";
  quantity: string[];
  overview?: string;
  benefits?: string[];
}

export const PRODUCTS: ProductType[] = [
  {
    id: 1,
    range: "Premium",
    href: "/products/x-power",
    title: "100 Power 5W30",
    type: "engine-additives",
    overview: `Experience next-generation engine care with 100 Power 5W30, formulated to meet API SP standards. Designed for modern petrol engines, it delivers exceptional wear protection, cleaner performance, and extended engine life—whether you're navigating city traffic or cruising the highway.
    \n
    With Micro-Lubricant Technology, advanced detergency, and superior thermal stability, 100 Power keeps your engine running smoother, quieter, and more efficiently every day.`,
    quantity: ["1L", "4L", "5L", "208L"],
  },
  {
    id: 2,
    range: "Premium",
    title: "100 Power Booster",
    type: "fuel-system",
    href: "/products/x-power",
    quantity: ["1L", "4L", "5L", "208L"],
  },
  {
    id: 3,
    range: "Premium",
    title: "Fuel Conditioner",
    type: "industrial",
    href: "/products/x-power",
    quantity: ["1L", "4L", "5L", "208L"],
  },
  {
    id: 4,
    range: "Premium",
    title: "TG-10 Critical Maintenance Lubricant",
    type: "engine-additives",
    href: "/products/x-power",
    quantity: ["1L", "4L", "5L", "208L"],
  },
  // {
  //   id: 5,
  //   range: "Premium",
  //   title: "EP-2 Lithium Complex Grease",
  //   type: "lubrication",
  //   badge: "5W-30",
  //   href: "/products/x-power",
  //   quantity: ["1L", "4L", "5L", "208L"],
  // },
];
