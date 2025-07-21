export interface ProductType {
  id: number;
  range: "Premium" | "Regular";
  title: string;
  badge: string;
  href: string;
  type: "lubrication" | "engine-additives" | "fuel-system" | "industrial";
  quantity: string;
}

export const PRODUCTS: ProductType[] = [
  {
    id: 1,
    range: "Premium",
    title: " Motor Oil",
    type: "lubrication",
    badge: "5W-30",
    href: "/",
    quantity: "1L",
  },
  {
    id: 2,
    range: "Regular",
    title: "100 Power Booster",
    type: "fuel-system",
    badge: "Advanced Nano Lubricant technology",
    href: "/",
    quantity: "4L",
  },
  {
    id: 3,
    range: "Regular",
    title: "Fuel Conditioner",
    type: "industrial",
    badge: "5W-30",
    href: "/",
    quantity: "8L",
  },
  {
    id: 4,
    range: "Premium",
    title: "TG-10 Critical Maintenance Lubricant",
    type: "engine-additives",
    badge: "5W-30",
    href: "/",
    quantity: "208L",
  },
  {
    id: 5,
    range: "Regular",
    title: "EP-2 Lithium Complex Grease",
    type: "lubrication",
    badge: "5W-30",
    href: "/",
    quantity: "2L",
  },
];
