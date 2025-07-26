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
    title: "POWER 5W20",
    type: "engine-additives",
    images: ["/images/products/5w20.jpg"],
    href: "power-5w20",
    overview: `Engineered to meet the latest API SP standards, this advanced motor oil is tailored for modern petrol engines—offering outstanding wear protection, cleaner operation, and longer engine life whether you're stuck in city traffic or driving long highway stretches.

    Powered by Micro-Lubricant Technology, enhanced detergents, and superior thermal stability, POWER 5W20 ensures your engine runs smoother, quieter, and more efficiently—every mile, every day.`,
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
    href: "power-5w30",
    title: "POWER 5W30",
    images: ["/images/products/5w30.jpg"],
    type: "engine-additives",
    overview:
      "Experience next-generation engine care with POWER 5W30, formulated to meet API SP standards. Designed for modern petrol engines, it delivers exceptional wear protection, cleaner performance, and extended engine life—whether you're navigating city traffic or cruising the highway.\n\n    With Micro-Lubricant Technology, advanced detergency, and superior thermal stability, Power keeps your engine running smoother, quieter, and more efficiently every day.",
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
    title: "POWER 5W40",
    type: "engine-additives",
    images: ["/images/products/5w40.jpg"],
    href: "power-5w40",
    overview: `Experience next-generation engine care with POWER 5W40, formulated to meet API SP standards. Designed for modern petrol engines, it delivers exceptional wear protection, cleaner performance, and extended engine life—whether you're navigating city traffic or cruising the highway.
    \n
    With Micro-Lubricant Technology, advanced detergency, and superior thermal stability, POWER keeps your engine running smoother, quieter, and more efficiently every day.`,
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
    title: "POWER 10W30",
    type: "engine-additives",
    images: ["/images/products/10w30.jpg"],
    href: "power-10w30",
    overview: `Experience next-generation engine care with POWER 10W30, formulated to meet API SP standards. Designed for modern petrol engines, it delivers exceptional wear protection, cleaner performance, and extended engine life—whether you're navigating city traffic or cruising the highway.
    \n
    With Micro-Lubricant Technology, advanced detergency, and superior thermal stability, POWER keeps your engine running smoother, quieter, and more efficiently every day.`,
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
    title: "POWER 10W40",
    type: "engine-additives",
    images: ["/images/products/10w40.jpg"],
    href: "power-10w40",
    overview: `Experience next-generation engine care with POWER 10W40, formulated to meet API SP standards. Designed for modern petrol engines, it delivers exceptional wear protection, cleaner performance, and extended engine life—whether you're navigating city traffic or cruising the highway.
    \n
    With Micro-Lubricant Technology, advanced detergency, and superior thermal stability, POWER keeps your engine running smoother, quieter, and more efficiently every day.`,
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
    title: "POWER 75W90",
    type: "engine-additives",
    images: ["/images/products/75W90.jpg"],
    href: "power-75w90",
    overview: `Formulated for high-performance manual transmissions and differentials, this fully synthetic gear oil offers outstanding load-bearing capability, smooth shifting, and long-lasting protection in extreme conditions.

    With advanced friction modifiers and thermal stability, POWER 75W90 reduces wear, resists breakdown, and maintains optimal performance—whether you're tackling tough terrain or highway cruising. Engineered to meet or exceed industry specifications, it's the smart choice for durability and drivetrain efficiency.`,
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
    title: "POWER 85W90",
    type: "engine-additives",
    images: ["/images/products/85W90.jpg"],
    href: "power-85w90",
    overview: `POWER 85W90 is a high-performance mineral-based gear oil designed for manual transmissions, axles, and differentials in commercial and passenger vehicles. Formulated with extreme pressure (EP) additives, it provides excellent protection against gear wear, corrosion, and oxidation—even under high torque and load conditions.

    Whether you're hauling heavy loads or navigating daily commutes, POWER 85W90 ensures consistent gear performance, long service life, and reliable protection across a wide range of operating conditions.`,
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
    title: "POWER 0W20",
    type: "engine-additives",
    images: ["/images/products/0w20.jpg"],
    href: "power-0w20",
    overview: `POWER 0W20 is a high-performance mineral-based gear oil designed for manual transmissions, axles, and differentials in commercial and passenger vehicles. Formulated with extreme pressure (EP) additives, it provides excellent protection against gear wear, corrosion, and oxidation—even under high torque and load conditions.

    Whether you're hauling heavy loads or navigating daily commutes, POWER 0W20 ensures consistent gear performance, long service life, and reliable protection across a wide range of operating conditions.`,
    benefits: [
      "Reliable Gear Protection Under High Load & Torque",
      "Smooth Operation for Manual Transmissions & Differentials",
      "Strong Resistance to Oxidation & Oil Degradation",
      "Protects Against Rust, Corrosion & Metal Fatigue",
      "Maintains Viscosity Stability Across Temperature Swings",
      "Extended Gear Life & Reduced Maintenance Costs",
    ],
    quantity: ["1 Litre", "4 Litres", "5 Litres", "208 Litres"],
  },
  {
    range: "Premium",
    title: "POWER 0W30",
    type: "engine-additives",
    images: ["/images/products/0w30.jpg"],
    href: "power-0w30",
    overview: `POWER 0W30 is a high-performance mineral-based gear oil designed for manual transmissions, axles, and differentials in commercial and passenger vehicles. Formulated with extreme pressure (EP) additives, it provides excellent protection against gear wear, corrosion, and oxidation—even under high torque and load conditions.

    Whether you're hauling heavy loads or navigating daily commutes, POWER 0W30 ensures consistent gear performance, long service life, and reliable protection across a wide range of operating conditions.`,
    benefits: [
      "Reliable Gear Protection Under High Load & Torque",
      "Smooth Operation for Manual Transmissions & Differentials",
      "Strong Resistance to Oxidation & Oil Degradation",
      "Protects Against Rust, Corrosion & Metal Fatigue",
      "Maintains Viscosity Stability Across Temperature Swings",
      "Extended Gear Life & Reduced Maintenance Costs",
    ],
    quantity: ["1 Litre", "4 Litres", "5 Litres", "208 Litres"],
  },
  {
    range: "Premium",
    title: "POWER 20W40",
    type: "engine-additives",
    images: ["/images/products/20w40.jpg"],
    href: "power-20w40",
    overview: `POWER 20W40 is a high-performance mineral-based gear oil designed for manual transmissions, axles, and differentials in commercial and passenger vehicles. Formulated with extreme pressure (EP) additives, it provides excellent protection against gear wear, corrosion, and oxidation—even under high torque and load conditions.

    Whether you're hauling heavy loads or navigating daily commutes, POWER 20W40 ensures consistent gear performance, long service life, and reliable protection across a wide range of operating conditions.`,
    benefits: [
      "Reliable Gear Protection Under High Load & Torque",
      "Smooth Operation for Manual Transmissions & Differentials",
      "Strong Resistance to Oxidation & Oil Degradation",
      "Protects Against Rust, Corrosion & Metal Fatigue",
      "Maintains Viscosity Stability Across Temperature Swings",
      "Extended Gear Life & Reduced Maintenance Costs",
    ],
    quantity: ["1 Litre", "4 Litres", "5 Litres", "208 Litres"],
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
    title: "POWER-10 Critical Maintenance Lubricant",
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
  {
    range: "Premium",
    title: "POWER BOOSTER Advanced Nano Lubricant",
    type: "lubrication",
    images: ["/images/products/power-10.jpg"],
    href: "power-booster",
    overview: `POWER Booster is a cutting-edge engine oil additive designed to enhance engine efficiency, dramatically reduce metal wear, and extend engine life. Utilizing advanced Tirrent NanoParticle Technology, it forms a friction-reducing protective layer on metal surfaces—lowering heat, noise, and emissions while improving fuel combustion.

Suitable for both gasoline (petroleum) and diesel engines, POWER Booster combines nano-lubrication with a micro-metallurgical process that creates a new, hardened metal layer up to 15 times more wear-resistant than the original. This innovative technology ensures exceptional durability and superior performance across a wide range of industries.`,
    benefits: [
      "Significantly Reduces Metal Wear and Friction",
      "Extends Engine and Machine Life up to 7 Times",
      "Improves Fuel Combustion and Engine Efficiency",
      "Lowers Heat, Noise, and Harmful Emissions",
      "Creates a Durable, Hardened Protective Metal Layer",
      "Protects Engine During Oil or Coolant Loss",
      "Increases Service Intervals up to 3 Times",
    ],
    quantity: ["1 Litre", "4 Litre", "5 Litre", "208 Litre"],
  },

  {
    range: "Premium",
    title: "POWER Hydraulic ISO 68",
    type: "industrial",
    images: ["/images/products/hydraulic-iso-68.jpg"],
    href: "power-booster",
    overview: `POWER Hydraulic ISO 68 is a premium anti-wear hydraulic oil engineered for modern hydraulic systems requiring reliable performance and protection. Formulated to meet the latest AW (anti-wear) standards, it ensures smooth cold starts, exceptional thermal stability, and superior wear protection—whether in industrial machinery or heavy-duty equipment operating under demanding conditions.

    Enhanced with Micro-Lubricant Technology and high-performance detergents, POWER Hydraulic ISO 68 keeps systems cleaner, reduces sludge and deposits, and helps improve operational efficiency. Its robust formulation offers consistent, long-lasting performance while minimizing maintenance needs and extending equipment life.`,
    benefits: [
      "Maximizes Hydraulic System Efficiency and Longevity",
      "Smooth Operation and Quieter Equipment Performance",
      "Outstanding Thermal Stability and Oxidation Resistance",
      "Improves Fuel Efficiency and Operating Precision",
      "Reduces Exhaust Emissions and Environmental Impact",
      "Protects Against Wear, Corrosion, and Metal Fatigue",
      "Extended Oil Drain Intervals and Lower Maintenance Costs",
      "Strong Resistance to Water Contamination in Hydraulic Systems",
    ],
    quantity: ["1 Litre", "4 Litre", "5 Litre", "208 Litre"],
  },

  {
    range: "Premium",
    title: "ATF DEX III - Automatic Transmission Fluid",
    type: "engine-additives",
    images: ["/images/products/atf-dex-iii.jpg"],
    href: "atf-dex-iii",
    overview: `POWER ATF DEX III is a high-performance automatic transmission fluid designed to meet the requirements of Dexron III and other major OEM specifications. It delivers smooth gear shifting, enhanced transmission protection, and reliable performance in a wide range of automatic transmissions, power steering systems, and hydraulic applications.

    Formulated with premium base oils, anti-wear additives, and oxidation stabilizers, POWER ATF DEX III ensures long service life, thermal stability, and protection against deposit formation. Whether in daily driving or heavy-duty commercial use, it provides consistent operation, reduces friction and wear, and helps prevent overheating—even in extreme conditions.`,
    benefits: [
      "Ensures Smooth and Consistent Gear Shifting",
      "Protects Transmission Against Wear and Oxidation",
      "Maintains Viscosity and Stability in Extreme Temperatures",
      "Reduces Friction and Improves Power Transfer Efficiency",
      "Prevents Sludge and Varnish Buildup for Cleaner Operation",
      "Supports Longer Transmission Life and Lower Maintenance Costs",
      "Compatible with a Wide Range of Automatic Transmissions and Power Steering Systems",
      "Resists Foaming and Fluid Breakdown Under High Stress",
    ],
    quantity: ["1 Litre", "4 Litre"],
  },
  {
    range: "Premium",
    title: "ATF DEX IV - Automatic Transmission Fluid",
    type: "engine-additives",
    images: [
      "/images/products/atf-dex-iv.jpg",
      "/images/products/atf-dex-iv.jpg",
    ],
    href: "atf-dex-iv",
    overview: `POWER ATF DEX IV is a high-performance automatic transmission fluid designed to meet the requirements of Dexron IV and other major OEM specifications. It delivers smooth gear shifting, enhanced transmission protection, and reliable performance in a wide range of automatic transmissions, power steering systems, and hydraulic applications.

    Formulated with premium base oils, anti-wear additives, and oxidation stabilizers, POWER ATF DEX IV ensures long service life, thermal stability, and protection against deposit formation. Whether in daily driving or heavy-duty commercial use, it provides consistent operation, reduces friction and wear, and helps prevent overheating—even in extreme conditions.`,
    benefits: [
      "Ensures Smooth and Consistent Gear Shifting",
      "Protects Transmission Against Wear and Oxidation",
      "Maintains Viscosity and Stability in Extreme Temperatures",
      "Reduces Friction and Improves Power Transfer Efficiency",
      "Prevents Sludge and Varnish Buildup for Cleaner Operation",
      "Supports Longer Transmission Life and Lower Maintenance Costs",
      "Compatible with a Wide Range of Automatic Transmissions and Power Steering Systems",
      "Resists Foaming and Fluid Breakdown Under High Stress",
    ],
    quantity: ["1 Litre", "4 Litre"],
  },
];
