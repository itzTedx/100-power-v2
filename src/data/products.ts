export interface ProductType {
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
    range: "Premium",
    title: "100 Power 5W20",
    type: "engine-additives",
    images: ["/images/products/5w20.jpg"],
    href: "100-power-5w20",
    overview: `Engineered to meet the latest API SP standards, this advanced motor oil is tailored for modern petrol engines—offering outstanding wear protection, cleaner operation, and longer engine life whether you're stuck in city traffic or driving long highway stretches.

    Powered by Micro-Lubricant Technology, enhanced detergents, and superior thermal stability, 100 Power 5W20 ensures your engine runs smoother, quieter, and more efficiently—every mile, every day.`,
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
    range: "Premium",
    title: "100 Power 75W90",
    type: "engine-additives",
    images: ["/images/products/75w90.jpg"],
    href: "100-power-75w90",
    overview: `Formulated for high-performance manual transmissions and differentials, this fully synthetic gear oil offers outstanding load-bearing capability, smooth shifting, and long-lasting protection in extreme conditions.

    With advanced friction modifiers and thermal stability, 100 Power 75W90 reduces wear, resists breakdown, and maintains optimal performance—whether you're tackling tough terrain or highway cruising. Engineered to meet or exceed industry specifications, it's the smart choice for durability and drivetrain efficiency.`,
    benefits: [
      "Superior Gear Protection Under High Loads",
      "Smooth Shifting in Both Cold and Hot Conditions",
      "Exceptional Thermal Stability & Oxidation Resistance",
      "Extended Drain Intervals for Reduced Maintenance",
      "Reduces Friction, Enhancing Drivetrain Efficiency",
      "Prevents Rust, Corrosion & Wear in Critical Components",
    ],
    quantity: ["1 Litre", "4 Litre"],
  },
  {
    range: "Premium",
    title: "100 Power 85W90",
    type: "engine-additives",
    images: ["/images/products/85W90.jpg"],
    href: "100-power-85w90",
    overview: `100 Power 85W90 is a high-performance mineral-based gear oil designed for manual transmissions, axles, and differentials in commercial and passenger vehicles. Formulated with extreme pressure (EP) additives, it provides excellent protection against gear wear, corrosion, and oxidation—even under high torque and load conditions.

    Whether you're hauling heavy loads or navigating daily commutes, 100 Power 85W90 ensures consistent gear performance, long service life, and reliable protection across a wide range of operating conditions.`,
    benefits: [
      "Reliable Gear Protection Under High Load & Torque",
      "Smooth Operation for Manual Transmissions & Differentials",
      "Strong Resistance to Oxidation & Oil Degradation",
      "Protects Against Rust, Corrosion & Metal Fatigue",
      "Maintains Viscosity Stability Across Temperature Swings",
      "Extended Gear Life & Reduced Maintenance Costs",
    ],
    quantity: ["1 Litre", "4 Litre"],
  },

  {
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
    range: "Premium",
    title: "Power-10 Critical Maintenance Lubricant",
    type: "lubrication",
    images: ["/images/products/power-10.jpg"],
    href: "power-10",
    overview: `Power-10 is a high-performance maintenance lubricant spray, engineered with nano-penetrating technology and powered by Tirrent Booster. It penetrates deep to eliminate rust, corrosion, and friction at the micro level—making it up to 20 times stronger than traditional sprays. Ideal for both industrial and household use, Power-10 dramatically extends the life and reliability of metal parts, tools, and electrical components—even in extreme conditions.`,
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
