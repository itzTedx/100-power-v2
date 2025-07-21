export interface ProductType {
  id: number;
  range: "Premium" | "Regular";
  title: string;
  label: string;
  badge: string;
  href: string;
}

export const PRODUCTS: ProductType[] = [
  {
    id: 1,
    range: "Premium",
    title: "X-Power Motor Oil",
    label: "X-Power",
    badge: "5W-30",
    href: "/",
  },
  {
    id: 2,
    range: "Regular",
    title: "100 Power Booster",
    label: "Lubricant",
    badge: "Advanced Nano Lubricant technology",
    href: "/",
  },
  {
    id: 3,
    range: "Regular",
    title: "Fuel Conditioner",
    label: "X-Power",
    badge: "5W-30",
    href: "/",
  },
  {
    id: 4,
    range: "Premium",
    title: "TG-10 Critical Maintenance Lubricant",
    label: "X-Power",
    badge: "5W-30",
    href: "/",
  },
  {
    id: 5,
    range: "Regular",
    title: "EP-2 Lithium Complex Grease",
    label: "X-Power",
    badge: "5W-30",
    href: "/",
  },
];
