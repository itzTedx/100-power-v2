export interface ProductType {
  id: number;
  range: "Premium" | "Regular";
  title: string;
  href: string;
  image: string;
  type: "lubrication" | "engine-additives" | "fuel-system" | "industrial";
  quantity: string[];
  overview: string;
  benefits: string[];
}

export const PRODUCTS: ProductType[] = [
  {
    id: 1,
    range: "Premium",
    href: "/products/100-power-5w30",
    title: "100 Power 5W30",
    image: "/images/products/5w30.jpg",
    type: "engine-additives",
    overview: `Experience next-generation engine care with 100 Power 5W30, formulated to meet API SP standards. Designed for modern petrol engines, it delivers exceptional wear protection, cleaner performance, and extended engine life—whether you're navigating city traffic or cruising the highway.
    \n
    With Micro-Lubricant Technology, advanced detergency, and superior thermal stability, 100 Power keeps your engine running smoother, quieter, and more efficiently every day.`,
    benefits: [
      "Maximize Engine Potential",
      "Quieter Engine, Smoother Operation, Enhanced Comfort",
      "Unmatched Thermal Stability & Extended Oil Drain Intervals",
      "Improves Fuel Efficiency & Reduces Emissions",
      "Extended Component Lifespan & Lower Maintenance Costs",
      "Protection Against Water Contamination in Engine Oil",
    ],
    quantity: ["1L", "4L", "5L", "208L"],
  },
  {
    id: 2,
    range: "Premium",
    title: "100 Power 5W40",
    type: "fuel-system",
    image: "/images/products/5w40.jpg",
    href: "/products/x-power",
    overview: `Experience next-generation engine care with 100 Power 5W40, formulated to meet API SP standards. Designed for modern petrol engines, it delivers exceptional wear protection, cleaner performance, and extended engine life—whether you're navigating city traffic or cruising the highway.
    \n
    With Micro-Lubricant Technology, advanced detergency, and superior thermal stability, 100 Power keeps your engine running smoother, quieter, and more efficiently every day.`,
    benefits: [
      "Maximize Engine Potential",
      "Quieter Engine, Smoother Operation, Enhanced Comfort",
      "Unmatched Thermal Stability & Extended Oil Drain Intervals",
      "Improves Fuel Efficiency & Reduces Emissions",
      "Extended Component Lifespan & Lower Maintenance Costs",
      "Protection Against Water Contamination in Engine Oil",
    ],
    quantity: ["1L", "4L", "5L", "208L"],
  },
  {
    id: 2,
    range: "Premium",
    title: "100 Power 10W30",
    type: "fuel-system",
    image: "/images/products/5w40.jpg",
    href: "/products/x-power",
    overview: `Experience next-generation engine care with 100 Power 5W40, formulated to meet API SP standards. Designed for modern petrol engines, it delivers exceptional wear protection, cleaner performance, and extended engine life—whether you're navigating city traffic or cruising the highway.
    \n
    With Micro-Lubricant Technology, advanced detergency, and superior thermal stability, 100 Power keeps your engine running smoother, quieter, and more efficiently every day.`,
    benefits: [
      "Maximize Engine Potential",
      "Quieter Engine, Smoother Operation, Enhanced Comfort",
      "Unmatched Thermal Stability & Extended Oil Drain Intervals",
      "Improves Fuel Efficiency & Reduces Emissions",
      "Extended Component Lifespan & Lower Maintenance Costs",
      "Protection Against Water Contamination in Engine Oil",
    ],
    quantity: ["1L", "4L", "5L", "208L"],
  },
];
