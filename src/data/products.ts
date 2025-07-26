export interface ProductType {
  id: number;
  range: "Premium" | "Regular";
  title: string;
  href: string;
  images: string[];
  type: "lubrication" | "engine-additives" | "fuel-system" | "industrial";
  quantity: string[];
  overview: string;
  benefits: string[];
}

export const PRODUCTS: ProductType[] = [
  {
    id: 1,
    range: "Premium",
    href: "100-power-5w30",
    title: "100 Power 5W30",
    images: ["/images/products/5w30.jpg"],
    type: "engine-additives",
    overview:
      "Experience next-generation engine care with 100 Power 5W30, formulated to meet API SP standards. Designed for modern petrol engines, it delivers exceptional wear protection, cleaner performance, and extended engine life—whether you're navigating city traffic or cruising the highway.\n\n    With Micro-Lubricant Technology, advanced detergency, and superior thermal stability, 100 Power keeps your engine running smoother, quieter, and more efficiently every day.",
    benefits: [
      "Maximize Engine Potential",
      "Quieter Engine, Smoother Operation, Enhanced Comfort",
      "Unmatched Thermal Stability & Extended Oil Drain Intervals",
      "Improves Fuel Efficiency & Reduces Emissions",
      "Extended Component Lifespan & Lower Maintenance Costs",
      "Protection Against Water Contamination in Engine Oil",
    ],
    quantity: ["1 Litre", "4 Litre", "5 Litre", "208 Litre"],
  },
  {
    id: 2,
    range: "Premium",
    title: "100 Power 5W40",
    type: "engine-additives",
    images: ["/images/products/5w40.jpg"],
    href: "100-power-5w40",
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
    quantity: ["1 Litre", "4 Litre", "5 Litre", "208 Litre"],
  },
  {
    id: 3,
    range: "Premium",
    title: "100 Power 10W30",
    type: "engine-additives",
    images: ["/images/products/10w30.jpg"],
    href: "100-power-10w30",
    overview: `Experience next-generation engine care with 100 Power 10W30, formulated to meet API SP standards. Designed for modern petrol engines, it delivers exceptional wear protection, cleaner performance, and extended engine life—whether you're navigating city traffic or cruising the highway.
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
    quantity: ["1 Litre", "4 Litre", "5 Litre", "208 Litre"],
  },
  {
    id: 4,
    range: "Premium",
    title: "100 Power 10W40",
    type: "engine-additives",
    images: ["/images/products/10w40.jpg"],
    href: "100-power-10w40",
    overview: `Experience next-generation engine care with 100 Power 10W40, formulated to meet API SP standards. Designed for modern petrol engines, it delivers exceptional wear protection, cleaner performance, and extended engine life—whether you're navigating city traffic or cruising the highway.
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
    quantity: ["1 Litre", "4 Litre", "5 Litre", "208 Litre"],
  },
  {
    id: 5,
    range: "Premium",
    title: "Fuel Conditioner",
    type: "fuel-system",
    images: ["/images/products/conditioner.jpg"],
    href: "fuel-conditioner",
    overview: `100 Power's Fuel Conditioner is a scientifically formulated additive designed to optimize fuel efficiency and protect engine components. Suitable for both gasoline and diesel engines, it improves combustion, cleans critical parts of the fuel system, and extends the life of stored fuel. This advanced formula removes carbon deposits, lubricates internal components, enhances cold-weather performance, and helps engines run smoother, longer, and more efficiently.`,
    benefits: [
      "Increases fuel economy by up to 20%",
      "Enhances power, mileage, and compression",
      "Cleans injectors, intake valves, ports, valve seats, and combustion chambers",
      "Removes carbon deposits for optimal engine performance",
      "Lubricates injectors, fuel pumps, and piston rings for extended lifespan",
      "Prevents corrosion in the intake and fuel system",
      "Improves cold weather starting and prevents gas line freeze",
      "Compatible with petrol and diesel engines",
      "Extends the life of stored fuel",
      "Maintains effectiveness for up to 1000–1200 km per application",
    ],
    quantity: ["1 Litre", "4 Litre", "5 Litre", "208 Litre"],
  },
  {
    id: 6,
    range: "Premium",
    title: "PG-10 Critical Maintenance Lubricant",
    type: "lubrication",
    images: ["/images/products/power-10.jpg"],
    href: "pg-10",
    overview: `PG-10 is a high-performance maintenance lubricant spray, engineered with nano-penetrating technology and powered by Tirrent Booster. It penetrates deep to eliminate rust, corrosion, and friction at the micro level—making it up to 20 times stronger than traditional sprays. Ideal for both industrial and household use, PG-10 dramatically extends the life and reliability of metal parts, tools, and electrical components—even in extreme conditions.`,
    benefits: [
      "Fast & Deep Penetration into metal surfaces",
      "Breaks down rust and corrosion efficiently",
      "Provides anti-friction and anti-wear protection",
      "Removes carbon deposits for optimal engine performance",
      "Prevents micro-metallurgical welding and metal expansion",
      "Extends tool and equipment life by up to 4-5x",
      "Withstands extreme temperature, dust, and moisture",
      "Increases machining efficiency with up to 200% longer cutting tool life",
      "Protects electrical parts from moisture and corrosion buildup",
      "Keeps mechanisms clean and free from deposits",
      "20x more effective than conventional lubricants",
    ],
    quantity: ["1 Litre", "4 Litre", "5 Litre", "208 Litre"],
  },
  {
    id: 7,
    range: "Premium",
    title: "PG-10 Critical Maintenance Lubricant",
    type: "lubrication",
    images: ["/images/products/power-10.jpg"],
    href: "pg-10",
    overview: `PG-10 is a high-performance maintenance lubricant spray, engineered with nano-penetrating technology and powered by Tirrent Booster. It penetrates deep to eliminate rust, corrosion, and friction at the micro level—making it up to 20 times stronger than traditional sprays. Ideal for both industrial and household use, PG-10 dramatically extends the life and reliability of metal parts, tools, and electrical components—even in extreme conditions.`,
    benefits: [
      "Fast & Deep Penetration into metal surfaces",
      "Breaks down rust and corrosion efficiently",
      "Provides anti-friction and anti-wear protection",
      "Removes carbon deposits for optimal engine performance",
      "Prevents micro-metallurgical welding and metal expansion",
      "Extends tool and equipment life by up to 4-5x",
      "Withstands extreme temperature, dust, and moisture",
      "Increases machining efficiency with up to 200% longer cutting tool life",
      "Protects electrical parts from moisture and corrosion buildup",
      "Keeps mechanisms clean and free from deposits",
      "20x more effective than conventional lubricants",
    ],
    quantity: ["1 Litre", "4 Litre", "5 Litre", "208 Litre"],
  },
];
