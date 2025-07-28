export interface ProductType {
  range: "Premium" | "Regular";
  title: string;
  href: string;
  images: string[];
  type: "lubrication" | "engine-additives" | "fuel-system" | "industrial";
  quantity: string[];
  overview: string;
  benefits: string[];
  advantages: {
    title: string;
    description: string;
  }[];
  usages: {
    title: string;
    description: string;
  }[];
  direction: {
    title: string;
    description: string;
  }[];
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
    advantages: [
      {
        title: "Superior Wear Protection",
        description:
          "Forms a micro-layer on engine components to reduce friction and metal contact, providing lasting protection during cold starts and high-stress driving.",
      },
      {
        title: "Enhanced Engine Efficiency",
        description:
          "Reduces internal drag for improved fuel economy, smoother acceleration, and optimal power delivery.",
      },
      {
        title: "Prolonged Engine Life",
        description:
          "Minimizes wear and maintains component integrity, extending the lifespan of the engine even under demanding conditions.",
      },
      {
        title: "Exceptional Cleanliness",
        description:
          "Advanced detergents break down sludge and deposits, keeping the engine clean and performing at its best.",
      },
      {
        title: "Cooler Operating Temperatures",
        description:
          "Reduces friction-generated heat, helping the engine run cooler and preventing thermal breakdown.",
      },
      {
        title: "Reliable Cold Start Protection",
        description:
          "Instant lubrication at startup ensures critical parts are protected during the most vulnerable moments.",
      },
      {
        title: "Lower Emissions",
        description:
          "Cleaner combustion and reduced sludge formation help minimize exhaust emissions for a more eco-friendly drive.",
      },
      {
        title: "Water Contamination Resistance",
        description:
          "Protects the engine against performance loss caused by water ingress or condensation in the oil.",
      },
    ],

    usages: [
      {
        title: "Passenger Cars & SUVs",
        description:
          "Enhances fuel efficiency, performance, and engine longevity in daily-use vehicles.",
      },
      {
        title: "Commercial Vehicles & Trucks",
        description:
          "Withstands high-load operations and supports longer oil drain intervals for better uptime.",
      },
      {
        title: "Motorcycles & Scooters",
        description:
          "Reduces friction and noise while improving responsiveness in smaller engines.",
      },
      {
        title: "Heavy Machinery & Equipment",
        description:
          "Ensures durability and performance under extreme heat and pressure in construction and industrial settings.",
      },
      {
        title: "High-Performance & Racing Vehicles",
        description:
          "Delivers stable lubrication and power output at high RPMs and elevated temperatures.",
      },
      {
        title: "Extreme Weather Conditions",
        description:
          "Maintains optimal viscosity and protection in both hot and cold environments.",
      },
    ],

    direction: [
      {
        title: "Check Compatibility",
        description:
          "Refer to your vehicle's manual to ensure Power 5W30 API SP meets the recommended specifications.",
      },
      {
        title: "Drain Old Oil",
        description:
          "Completely remove the old engine oil to prevent contamination and maintain optimal performance.",
      },
      {
        title: "Replace Oil Filter",
        description:
          "Always install a new oil filter before adding fresh oil for best results.",
      },
      {
        title: "Add Power Oil",
        description:
          "Pour the recommended quantity of Power 5W30 into the engine through the filler cap.",
      },
      {
        title: "Check Oil Level",
        description:
          "Use the dipstick to verify oil level and adjust as necessary before starting the engine.",
      },
      {
        title: "Run & Inspect",
        description:
          "Start the engine and let it idle briefly to circulate the oil, then check for leaks.",
      },
      {
        title: "Monitor Regularly",
        description:
          "Check oil levels periodically and top up if needed. Follow scheduled oil change intervals for extended engine life.",
      },
    ],
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
    advantages: [
      {
        title: "Advanced Friction Reduction",
        description:
          "Engineered with cutting-edge additives to reduce metal-to-metal contact, ensuring smoother engine operation and improved fuel efficiency.",
      },
      {
        title: "Enhanced Wear Protection",
        description:
          "Forms a resilient protective layer that safeguards engine parts during high-load conditions and cold starts, extending engine life.",
      },
      {
        title: "Cleaner Engine Performance",
        description:
          "Keeps critical engine components clean with superior detergent technology that removes sludge, varnish, and deposits.",
      },
      {
        title: "Thermal Stability",
        description:
          "Maintains consistent viscosity across extreme temperatures, preventing oil breakdown and ensuring reliable performance.",
      },
      {
        title: "Fuel Economy Boost",
        description:
          "Optimized for efficiency, POWER 5W30 minimizes energy loss within the engine, improving mileage and overall performance.",
      },
    ],

    usages: [
      {
        title: "Modern Petrol Engines",
        description:
          "Ideal for modern petrol engines requiring API SP specifications, delivering top-tier protection and cleanliness.",
      },
      {
        title: "High-Performance Vehicles",
        description:
          "Delivers reliable lubrication under extreme stress and high RPMs in performance-focused applications.",
      },
      {
        title: "City Driving Conditions",
        description:
          "Protects against wear in frequent stop-and-go traffic, short trips, and urban environments.",
      },
      {
        title: "Temperature Extremes",
        description:
          "Performs efficiently in both hot climates and freezing conditions thanks to its optimized viscosity profile.",
      },
    ],

    direction: [
      {
        title: "Ensure Specification Match",
        description:
          "Verify that POWER 5W30 meets or exceeds the requirements listed in your vehicle owner’s manual.",
      },
      {
        title: "Drain Existing Oil",
        description:
          "Completely remove used engine oil and dispose of it safely to prevent contamination.",
      },
      {
        title: "Install New Oil Filter",
        description:
          "Always replace the oil filter during every oil change to ensure optimal flow and cleanliness.",
      },
      {
        title: "Refill with POWER 5W30",
        description:
          "Add the recommended quantity of POWER 5W30 oil using the engine fill cap.",
      },
      {
        title: "Routine Checks",
        description:
          "Monitor oil level and condition regularly. Follow manufacturer’s service schedule for consistent engine health.",
      },
    ],
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
    advantages: [
      {
        title: "Superior Wear Protection",
        description:
          "Forms a micro-layer on engine components to reduce friction and metal contact, providing lasting protection during cold starts and high-stress driving.",
      },
      {
        title: "Enhanced Engine Efficiency",
        description:
          "Reduces internal drag for improved fuel economy, smoother acceleration, and optimal power delivery.",
      },
      {
        title: "Prolonged Engine Life",
        description:
          "Minimizes wear and maintains component integrity, extending the lifespan of the engine even under demanding conditions.",
      },
      {
        title: "Exceptional Cleanliness",
        description:
          "Advanced detergents break down sludge and deposits, keeping the engine clean and performing at its best.",
      },
      {
        title: "Cooler Operating Temperatures",
        description:
          "Reduces friction-generated heat, helping the engine run cooler and preventing thermal breakdown.",
      },
      {
        title: "Reliable Cold Start Protection",
        description:
          "Instant lubrication at startup ensures critical parts are protected during the most vulnerable moments.",
      },
      {
        title: "Lower Emissions",
        description:
          "Cleaner combustion and reduced sludge formation help minimize exhaust emissions for a more eco-friendly drive.",
      },
      {
        title: "Water Contamination Resistance",
        description:
          "Protects the engine against performance loss caused by water ingress or condensation in the oil.",
      },
    ],

    usages: [
      {
        title: "Passenger Cars & SUVs",
        description:
          "Enhances fuel efficiency, performance, and engine longevity in daily-use vehicles.",
      },
      {
        title: "Commercial Vehicles & Trucks",
        description:
          "Withstands high-load operations and supports longer oil drain intervals for better uptime.",
      },
      {
        title: "Motorcycles & Scooters",
        description:
          "Reduces friction and noise while improving responsiveness in smaller engines.",
      },
      {
        title: "Heavy Machinery & Equipment",
        description:
          "Ensures durability and performance under extreme heat and pressure in construction and industrial settings.",
      },
      {
        title: "High-Performance & Racing Vehicles",
        description:
          "Delivers stable lubrication and power output at high RPMs and elevated temperatures.",
      },
      {
        title: "Extreme Weather Conditions",
        description:
          "Maintains optimal viscosity and protection in both hot and cold environments.",
      },
    ],

    direction: [
      {
        title: "Check Compatibility",
        description:
          "Refer to your vehicle's manual to ensure Power 5W30 API SP meets the recommended specifications.",
      },
      {
        title: "Drain Old Oil",
        description:
          "Completely remove the old engine oil to prevent contamination and maintain optimal performance.",
      },
      {
        title: "Replace Oil Filter",
        description:
          "Always install a new oil filter before adding fresh oil for best results.",
      },
      {
        title: "Add Power Oil",
        description:
          "Pour the recommended quantity of Power 5W30 into the engine through the filler cap.",
      },
      {
        title: "Check Oil Level",
        description:
          "Use the dipstick to verify oil level and adjust as necessary before starting the engine.",
      },
      {
        title: "Run & Inspect",
        description:
          "Start the engine and let it idle briefly to circulate the oil, then check for leaks.",
      },
      {
        title: "Monitor Regularly",
        description:
          "Check oil levels periodically and top up if needed. Follow scheduled oil change intervals for extended engine life.",
      },
    ],
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
    advantages: [
      {
        title: "Superior Wear Protection",
        description:
          "Forms a micro-layer on engine components to reduce friction and metal contact, providing lasting protection during cold starts and high-stress driving.",
      },
      {
        title: "Enhanced Engine Efficiency",
        description:
          "Reduces internal drag for improved fuel economy, smoother acceleration, and optimal power delivery.",
      },
      {
        title: "Prolonged Engine Life",
        description:
          "Minimizes wear and maintains component integrity, extending the lifespan of the engine even under demanding conditions.",
      },
      {
        title: "Exceptional Cleanliness",
        description:
          "Advanced detergents break down sludge and deposits, keeping the engine clean and performing at its best.",
      },
      {
        title: "Cooler Operating Temperatures",
        description:
          "Reduces friction-generated heat, helping the engine run cooler and preventing thermal breakdown.",
      },
      {
        title: "Reliable Cold Start Protection",
        description:
          "Instant lubrication at startup ensures critical parts are protected during the most vulnerable moments.",
      },
      {
        title: "Lower Emissions",
        description:
          "Cleaner combustion and reduced sludge formation help minimize exhaust emissions for a more eco-friendly drive.",
      },
      {
        title: "Water Contamination Resistance",
        description:
          "Protects the engine against performance loss caused by water ingress or condensation in the oil.",
      },
    ],

    usages: [
      {
        title: "Passenger Cars & SUVs",
        description:
          "Enhances fuel efficiency, performance, and engine longevity in daily-use vehicles.",
      },
      {
        title: "Commercial Vehicles & Trucks",
        description:
          "Withstands high-load operations and supports longer oil drain intervals for better uptime.",
      },
      {
        title: "Motorcycles & Scooters",
        description:
          "Reduces friction and noise while improving responsiveness in smaller engines.",
      },
      {
        title: "Heavy Machinery & Equipment",
        description:
          "Ensures durability and performance under extreme heat and pressure in construction and industrial settings.",
      },
      {
        title: "High-Performance & Racing Vehicles",
        description:
          "Delivers stable lubrication and power output at high RPMs and elevated temperatures.",
      },
      {
        title: "Extreme Weather Conditions",
        description:
          "Maintains optimal viscosity and protection in both hot and cold environments.",
      },
    ],

    direction: [
      {
        title: "Check Compatibility",
        description:
          "Refer to your vehicle's manual to ensure Power 5W30 API SP meets the recommended specifications.",
      },
      {
        title: "Drain Old Oil",
        description:
          "Completely remove the old engine oil to prevent contamination and maintain optimal performance.",
      },
      {
        title: "Replace Oil Filter",
        description:
          "Always install a new oil filter before adding fresh oil for best results.",
      },
      {
        title: "Add Power Oil",
        description:
          "Pour the recommended quantity of Power 5W30 into the engine through the filler cap.",
      },
      {
        title: "Check Oil Level",
        description:
          "Use the dipstick to verify oil level and adjust as necessary before starting the engine.",
      },
      {
        title: "Run & Inspect",
        description:
          "Start the engine and let it idle briefly to circulate the oil, then check for leaks.",
      },
      {
        title: "Monitor Regularly",
        description:
          "Check oil levels periodically and top up if needed. Follow scheduled oil change intervals for extended engine life.",
      },
    ],
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
    advantages: [
      {
        title: "Superior Wear Protection",
        description:
          "Forms a micro-layer on engine components to reduce friction and metal contact, providing lasting protection during cold starts and high-stress driving.",
      },
      {
        title: "Enhanced Engine Efficiency",
        description:
          "Reduces internal drag for improved fuel economy, smoother acceleration, and optimal power delivery.",
      },
      {
        title: "Prolonged Engine Life",
        description:
          "Minimizes wear and maintains component integrity, extending the lifespan of the engine even under demanding conditions.",
      },
      {
        title: "Exceptional Cleanliness",
        description:
          "Advanced detergents break down sludge and deposits, keeping the engine clean and performing at its best.",
      },
      {
        title: "Cooler Operating Temperatures",
        description:
          "Reduces friction-generated heat, helping the engine run cooler and preventing thermal breakdown.",
      },
      {
        title: "Reliable Cold Start Protection",
        description:
          "Instant lubrication at startup ensures critical parts are protected during the most vulnerable moments.",
      },
      {
        title: "Lower Emissions",
        description:
          "Cleaner combustion and reduced sludge formation help minimize exhaust emissions for a more eco-friendly drive.",
      },
      {
        title: "Water Contamination Resistance",
        description:
          "Protects the engine against performance loss caused by water ingress or condensation in the oil.",
      },
    ],

    usages: [
      {
        title: "Passenger Cars & SUVs",
        description:
          "Enhances fuel efficiency, performance, and engine longevity in daily-use vehicles.",
      },
      {
        title: "Commercial Vehicles & Trucks",
        description:
          "Withstands high-load operations and supports longer oil drain intervals for better uptime.",
      },
      {
        title: "Motorcycles & Scooters",
        description:
          "Reduces friction and noise while improving responsiveness in smaller engines.",
      },
      {
        title: "Heavy Machinery & Equipment",
        description:
          "Ensures durability and performance under extreme heat and pressure in construction and industrial settings.",
      },
      {
        title: "High-Performance & Racing Vehicles",
        description:
          "Delivers stable lubrication and power output at high RPMs and elevated temperatures.",
      },
      {
        title: "Extreme Weather Conditions",
        description:
          "Maintains optimal viscosity and protection in both hot and cold environments.",
      },
    ],

    direction: [
      {
        title: "Check Compatibility",
        description:
          "Refer to your vehicle's manual to ensure Power 5W30 API SP meets the recommended specifications.",
      },
      {
        title: "Drain Old Oil",
        description:
          "Completely remove the old engine oil to prevent contamination and maintain optimal performance.",
      },
      {
        title: "Replace Oil Filter",
        description:
          "Always install a new oil filter before adding fresh oil for best results.",
      },
      {
        title: "Add Power Oil",
        description:
          "Pour the recommended quantity of Power 5W30 into the engine through the filler cap.",
      },
      {
        title: "Check Oil Level",
        description:
          "Use the dipstick to verify oil level and adjust as necessary before starting the engine.",
      },
      {
        title: "Run & Inspect",
        description:
          "Start the engine and let it idle briefly to circulate the oil, then check for leaks.",
      },
      {
        title: "Monitor Regularly",
        description:
          "Check oil levels periodically and top up if needed. Follow scheduled oil change intervals for extended engine life.",
      },
    ],
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
    advantages: [
      {
        title: "Extreme Pressure Protection",
        description:
          "Formulated with EP additives to protect gear components from wear, pitting, and scoring under high torque and load conditions.",
      },
      {
        title: "Smooth Gear Shifting",
        description:
          "Ensures responsive and smooth gear engagement, even in cold temperatures or high-stress applications.",
      },
      {
        title: "Oxidation & Thermal Stability",
        description:
          "Prevents oil breakdown at high operating temperatures, extending lubricant life and maintaining performance.",
      },
      {
        title: "Rust and Corrosion Inhibition",
        description:
          "Guards against moisture-induced rust and corrosion, prolonging the service life of gears and bearings.",
      },
      {
        title: "Fuel Efficiency",
        description:
          "Reduces frictional losses in gearboxes, leading to improved drivetrain efficiency and fuel economy.",
      },
    ],

    usages: [
      {
        title: "Manual Transmissions",
        description:
          "Recommended for manual gearboxes requiring 75W90 GL-4 or GL-5 gear oil specifications.",
      },
      {
        title: "Differentials & Axles",
        description:
          "Ideal for high-performance or heavy-duty axles exposed to shock loads and extreme pressure.",
      },
      {
        title: "Commercial Fleets",
        description:
          "Perfect for trucks, buses, and utility vehicles operating under severe driving conditions.",
      },
      {
        title: "Off-Road & 4WD",
        description:
          "Protects gear systems in off-road, agriculture, and construction equipment under rugged terrain.",
      },
      {
        title: "High-Temperature Environments",
        description:
          "Maintains stability and fluidity even in high ambient or engine-generated heat zones.",
      },
    ],

    direction: [
      {
        title: "Confirm Compatibility",
        description:
          "Check your vehicle owner’s manual or service guide to ensure POWER 75W90 meets required gear oil specifications.",
      },
      {
        title: "Drain Old Gear Oil",
        description:
          "Completely drain the old gear oil from the transmission or differential and clean the drain plug.",
      },
      {
        title: "Inspect for Wear",
        description:
          "Examine drained oil and magnet for signs of metal particles—potential indicators of gear wear.",
      },
      {
        title: "Refill Properly",
        description:
          "Fill with POWER 75W90 to the recommended level using the proper fill port until oil begins to seep out slightly.",
      },
      {
        title: "Scheduled Maintenance",
        description:
          "Follow manufacturer’s gear oil change intervals to maintain optimal gear performance and longevity.",
      },
    ],
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
    advantages: [
      {
        title: "Extreme Pressure Protection",
        description:
          "Formulated with EP additives to protect gear components from wear, pitting, and scoring under high torque and load conditions.",
      },
      {
        title: "Smooth Gear Shifting",
        description:
          "Ensures responsive and smooth gear engagement, even in cold temperatures or high-stress applications.",
      },
      {
        title: "Oxidation & Thermal Stability",
        description:
          "Prevents oil breakdown at high operating temperatures, extending lubricant life and maintaining performance.",
      },
      {
        title: "Rust and Corrosion Inhibition",
        description:
          "Guards against moisture-induced rust and corrosion, prolonging the service life of gears and bearings.",
      },
      {
        title: "Fuel Efficiency",
        description:
          "Reduces frictional losses in gearboxes, leading to improved drivetrain efficiency and fuel economy.",
      },
    ],

    usages: [
      {
        title: "Manual Transmissions",
        description:
          "Recommended for manual gearboxes requiring 75W90 GL-4 or GL-5 gear oil specifications.",
      },
      {
        title: "Differentials & Axles",
        description:
          "Ideal for high-performance or heavy-duty axles exposed to shock loads and extreme pressure.",
      },
      {
        title: "Commercial Fleets",
        description:
          "Perfect for trucks, buses, and utility vehicles operating under severe driving conditions.",
      },
      {
        title: "Off-Road & 4WD",
        description:
          "Protects gear systems in off-road, agriculture, and construction equipment under rugged terrain.",
      },
      {
        title: "High-Temperature Environments",
        description:
          "Maintains stability and fluidity even in high ambient or engine-generated heat zones.",
      },
    ],

    direction: [
      {
        title: "Confirm Compatibility",
        description:
          "Check your vehicle owner’s manual or service guide to ensure POWER 75W90 meets required gear oil specifications.",
      },
      {
        title: "Drain Old Gear Oil",
        description:
          "Completely drain the old gear oil from the transmission or differential and clean the drain plug.",
      },
      {
        title: "Inspect for Wear",
        description:
          "Examine drained oil and magnet for signs of metal particles—potential indicators of gear wear.",
      },
      {
        title: "Refill Properly",
        description:
          "Fill with POWER 75W90 to the recommended level using the proper fill port until oil begins to seep out slightly.",
      },
      {
        title: "Scheduled Maintenance",
        description:
          "Follow manufacturer’s gear oil change intervals to maintain optimal gear performance and longevity.",
      },
    ],
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
    advantages: [
      {
        title: "Ultimate Fuel Economy",
        description:
          "Engineered for reduced viscosity and low-friction operation, improving overall fuel efficiency and performance.",
      },
      {
        title: "Instant Cold Start Protection",
        description:
          "Flows quickly at low temperatures to protect vital engine components during startup, reducing wear and tear.",
      },
      {
        title: "Advanced Wear Protection",
        description:
          "Forms a durable micro-lubricating layer to shield engine parts from metal-to-metal contact under high pressure.",
      },
      {
        title: "Low Emission Performance",
        description:
          "Helps reduce oil consumption and exhaust emissions while maintaining optimal engine cleanliness.",
      },
      {
        title: "High-Temperature Stability",
        description:
          "Resists thermal breakdown and oxidation, ensuring consistent lubrication in extreme driving conditions.",
      },
    ],

    usages: [
      {
        title: "Modern Passenger Cars",
        description:
          "Designed for late-model vehicles that require low-viscosity engine oils such as 0W20 for enhanced efficiency.",
      },
      {
        title: "Hybrid Engines",
        description:
          "Ideal for hybrid vehicles that demand high-performance lubricants with low volatility.",
      },
      {
        title: "Stop-and-Go Traffic",
        description:
          "Protects against wear and heat buildup in urban environments with frequent starts and stops.",
      },
      {
        title: "All-Season Driving",
        description:
          "Performs reliably across extreme temperature ranges, from freezing cold to intense heat.",
      },
      {
        title: "Eco-Friendly Applications",
        description:
          "Supports fuel economy standards and environmental regulations for reduced carbon footprint.",
      },
    ],

    direction: [
      {
        title: "Verify Manufacturer Specifications",
        description:
          "Check your vehicle manual to ensure POWER 0W20 meets or exceeds the required oil grade and standards.",
      },
      {
        title: "Drain Used Oil",
        description:
          "Warm up engine slightly, then completely drain old oil and replace the oil filter before refilling.",
      },
      {
        title: "Use Proper Quantity",
        description:
          "Fill with POWER 0W20 up to the specified level using a calibrated dipstick or digital indicator.",
      },
      {
        title: "Inspect for Leaks",
        description:
          "After filling, run the engine and inspect the oil pan and filter area for any signs of leakage.",
      },
      {
        title: "Follow Maintenance Schedule",
        description:
          "Adhere to the oil change intervals recommended by the vehicle manufacturer for maximum performance.",
      },
    ],
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
    advantages: [
      {
        title: "Ultimate Fuel Economy",
        description:
          "Engineered for reduced viscosity and low-friction operation, improving overall fuel efficiency and performance.",
      },
      {
        title: "Instant Cold Start Protection",
        description:
          "Flows quickly at low temperatures to protect vital engine components during startup, reducing wear and tear.",
      },
      {
        title: "Advanced Wear Protection",
        description:
          "Forms a durable micro-lubricating layer to shield engine parts from metal-to-metal contact under high pressure.",
      },
      {
        title: "Low Emission Performance",
        description:
          "Helps reduce oil consumption and exhaust emissions while maintaining optimal engine cleanliness.",
      },
      {
        title: "High-Temperature Stability",
        description:
          "Resists thermal breakdown and oxidation, ensuring consistent lubrication in extreme driving conditions.",
      },
    ],

    usages: [
      {
        title: "Modern Passenger Cars",
        description:
          "Designed for late-model vehicles that require low-viscosity engine oils such as 0W20 for enhanced efficiency.",
      },
      {
        title: "Hybrid Engines",
        description:
          "Ideal for hybrid vehicles that demand high-performance lubricants with low volatility.",
      },
      {
        title: "Stop-and-Go Traffic",
        description:
          "Protects against wear and heat buildup in urban environments with frequent starts and stops.",
      },
      {
        title: "All-Season Driving",
        description:
          "Performs reliably across extreme temperature ranges, from freezing cold to intense heat.",
      },
      {
        title: "Eco-Friendly Applications",
        description:
          "Supports fuel economy standards and environmental regulations for reduced carbon footprint.",
      },
    ],

    direction: [
      {
        title: "Verify Manufacturer Specifications",
        description:
          "Check your vehicle manual to ensure POWER 0W20 meets or exceeds the required oil grade and standards.",
      },
      {
        title: "Drain Used Oil",
        description:
          "Warm up engine slightly, then completely drain old oil and replace the oil filter before refilling.",
      },
      {
        title: "Use Proper Quantity",
        description:
          "Fill with POWER 0W20 up to the specified level using a calibrated dipstick or digital indicator.",
      },
      {
        title: "Inspect for Leaks",
        description:
          "After filling, run the engine and inspect the oil pan and filter area for any signs of leakage.",
      },
      {
        title: "Follow Maintenance Schedule",
        description:
          "Adhere to the oil change intervals recommended by the vehicle manufacturer for maximum performance.",
      },
    ],
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
    advantages: [
      {
        title: "Balanced Viscosity for All Conditions",
        description:
          "Maintains optimal flow and film strength across a wide temperature range, ensuring consistent performance in both hot and cold climates.",
      },
      {
        title: "Enhanced Engine Cleanliness",
        description:
          "Detergent and dispersant additives help prevent the buildup of sludge and deposits, keeping the engine running smoother for longer.",
      },
      {
        title: "Extended Engine Life",
        description:
          "Provides robust protection against wear and corrosion, even in older engines or under high-load operations.",
      },
      {
        title: "Thermal Stability",
        description:
          "Resists oxidation and breakdown at high temperatures, maintaining oil integrity during long drives and heavy-duty use.",
      },
      {
        title: "Reduced Oil Consumption",
        description:
          "Formulated to minimize evaporation loss and reduce oil top-ups, contributing to longer maintenance intervals.",
      },
    ],

    usages: [
      {
        title: "Light and Medium-Duty Vehicles",
        description:
          "Ideal for cars, vans, and pickups requiring 20W40 multigrade oil for balanced lubrication and protection.",
      },
      {
        title: "Older Model Engines",
        description:
          "Well-suited for engines with higher mileage that benefit from slightly thicker oil to maintain compression and reduce leaks.",
      },
      {
        title: "Hot Weather Conditions",
        description:
          "Performs effectively in tropical or high-temperature environments without thinning or breaking down.",
      },
      {
        title: "Motorcycles and 3-Wheelers",
        description:
          "Compatible with 4-stroke engines, offering strong shear stability and clutch protection where applicable.",
      },
      {
        title: "Stop-and-Go City Driving",
        description:
          "Delivers reliable wear protection and cooling in urban traffic with frequent acceleration and deceleration.",
      },
    ],

    direction: [
      {
        title: "Consult Owner’s Manual",
        description:
          "Ensure POWER 20W40 is recommended for your engine before use. Follow manufacturer’s specifications and intervals.",
      },
      {
        title: "Drain Used Oil Completely",
        description:
          "Warm engine slightly and drain all old oil. Replace oil filter to prevent contamination of fresh oil.",
      },
      {
        title: "Fill with Recommended Quantity",
        description:
          "Use a funnel to pour in POWER 20W40 carefully. Do not overfill—check dipstick levels as you go.",
      },
      {
        title: "Run Engine Briefly",
        description:
          "Start the engine and let it idle for a few minutes. Check for leaks and recheck oil levels once the engine cools.",
      },
      {
        title: "Dispose Responsibly",
        description:
          "Recycle used oil and filters at designated collection centers to protect the environment and comply with regulations.",
      },
    ],
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
    advantages: [
      {
        title: "Improves Fuel Efficiency",
        description:
          "Optimizes combustion by cleaning fuel injectors and preventing deposits, resulting in better mileage and engine performance.",
      },
      {
        title: "Protects Fuel System",
        description:
          "Prevents corrosion and wear in fuel lines, pumps, and injectors, extending the lifespan of critical components.",
      },
      {
        title: "Reduces Emissions",
        description:
          "Enhances fuel burn efficiency, lowering harmful exhaust emissions for a cleaner, greener operation.",
      },
      {
        title: "Prevents Fuel Degradation",
        description:
          "Stabilizes fuel during storage, reducing oxidation and contamination that can cause engine problems.",
      },
      {
        title: "Improves Cold Start Performance",
        description:
          "Helps prevent fuel gelling and freezing in cold temperatures, ensuring reliable engine starts in harsh conditions.",
      },
    ],

    usages: [
      {
        title: "Gasoline and Diesel Engines",
        description:
          "Suitable for all types of petrol and diesel engines in cars, trucks, motorcycles, and generators.",
      },
      {
        title: "Heavy-Duty Vehicles",
        description:
          "Ideal for trucks, buses, and construction equipment operating under high load and severe conditions.",
      },
      {
        title: "Marine Applications",
        description:
          "Protects fuel systems in boats and marine engines from corrosion and deposits caused by saltwater exposure.",
      },
      {
        title: "Seasonal Storage",
        description:
          "Prepares fuel for long-term storage to maintain quality and prevent degradation during off-seasons.",
      },
      {
        title: "Cold Climate Use",
        description:
          "Prevents fuel-related start-up issues in low temperatures, improving reliability in winter conditions.",
      },
    ],

    direction: [
      {
        title: "Add to Fuel Tank",
        description:
          "Pour the recommended dose of Fuel Conditioner directly into the fuel tank before refueling for best results.",
      },
      {
        title: "Use Regularly",
        description:
          "Add with every tank fill-up or as recommended in the product guidelines to maintain optimal fuel system health.",
      },
      {
        title: "Follow Vehicle Manual",
        description:
          "Check vehicle manufacturer recommendations to ensure compatibility and avoid overdosing.",
      },
      {
        title: "Store Properly",
        description:
          "Keep the conditioner in a cool, dry place away from direct sunlight and extreme temperatures.",
      },
      {
        title: "Avoid Contamination",
        description:
          "Use clean measuring tools and close container tightly after each use to maintain product integrity.",
      },
    ],
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
    advantages: [
      {
        title: "Breaks Rust Instantly",
        description:
          "Dissolves rust and corrosion with powerful nano-penetrants, restoring function to seized or oxidized components quickly.",
      },
      {
        title: "Extreme Anti-Wear Formula",
        description:
          "Reduces friction and wear even under high-stress conditions, extending tool and machinery life by up to 5X.",
      },
      {
        title: "Moisture & Corrosion Resistance",
        description:
          "Forms a protective barrier that resists moisture, humidity, and corrosive elements in any environment.",
      },
      {
        title: "Micro-Weld Prevention",
        description:
          "Prevents microscopic metallurgical fusion between metal surfaces, improving performance and safety.",
      },
      {
        title: "Temperature-Resilient Performance",
        description:
          "Performs reliably in harsh environments—from high heat to dusty and damp conditions.",
      },
    ],

    usages: [
      {
        title: "Industrial Machinery",
        description:
          "Ideal for maintaining heavy equipment, hydraulic systems, motors, chains, and tools exposed to high loads or harsh conditions.",
      },
      {
        title: "Automotive and Transport",
        description:
          "Restores smooth operation in engines, brake parts, bolts, and suspension systems affected by rust and friction.",
      },
      {
        title: "Home & Workshop Maintenance",
        description:
          "Perfect for door hinges, locks, hand tools, garden equipment, and other household or garage repairs.",
      },
      {
        title: "Electrical Components",
        description:
          "Protects sensitive parts from moisture and corrosion, ensuring longer service life and safer operation.",
      },
    ],
    direction: [
      {
        title: "Shake Well Before Use",
        description:
          "Ensure contents are evenly mixed before spraying to maximize performance.",
      },
      {
        title: "Spray Directly On Target Area",
        description:
          "Apply a generous amount to rusted, jammed, or friction-prone parts. Let it soak for a few moments.",
      },
      {
        title: "Do Not Wipe Immediately",
        description:
          "Allow the product to penetrate deeply. For best results, leave a thin protective layer.",
      },
      {
        title: "Repeat as Needed",
        description:
          "In high-stress or dirty environments, reapply periodically to maintain optimal protection.",
      },
    ],
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
    advantages: [
      {
        title: "Micro-Metallic Surface Protection",
        description:
          "Forms a nano-engineered layer on metal surfaces that withstands extreme pressure, friction, and heat, ensuring long-term component durability.",
      },
      {
        title: "Extended Engine & Equipment Life",
        description:
          "Reduces metal-to-metal contact and wear by up to 98%, significantly increasing the service life of engines and mechanical parts.",
      },
      {
        title: "Reduced Friction & Heat",
        description:
          "Cuts internal friction by up to 95%, lowering operating temperatures and boosting fuel efficiency and power output.",
      },
      {
        title: "Increased Oil Change Intervals",
        description:
          "Stabilizes oil performance and chemistry, allowing extended service intervals by up to 3 times.",
      },
      {
        title: "Backup Protection in Oil Loss",
        description:
          "Retains protective film even during temporary oil or coolant loss, minimizing engine seizure risk.",
      },
      {
        title: "Cold Start Efficiency",
        description:
          "Delivers immediate lubrication during cold starts, reducing initial wear and improving startup reliability.",
      },
      {
        title: "Improved Combustion & Torque",
        description:
          "Enhances compression and fuel burn, resulting in better throttle response and higher engine torque.",
      },
    ],

    usages: [
      {
        title: "Gasoline & Diesel Engines",
        description:
          "Protects and boosts performance in all passenger cars, SUVs, light trucks, and diesel engines.",
      },
      {
        title: "Commercial Vehicles & Fleets",
        description:
          "Extends service life and reduces downtime in trucks, buses, and logistics vehicles under heavy-duty cycles.",
      },
      {
        title: "Construction & Agricultural Machinery",
        description:
          "Delivers outstanding wear resistance and lubrication under extreme load and operating conditions.",
      },
      {
        title: "Generators & Stationary Engines",
        description:
          "Improves efficiency and ensures continuous operation for generators and fixed industrial motors.",
      },
      {
        title: "Hydraulic & Industrial Systems",
        description:
          "Enhances load-bearing capacity and reduces mechanical wear in manufacturing and hydraulic equipment.",
      },
      {
        title: "Motorcycles & Small Engines",
        description:
          "Improves gear smoothness, reduces noise, and protects smaller engines from premature wear.",
      },
    ],

    direction: [
      {
        title: "Shake Well Before Use",
        description:
          "Ensure the additive is thoroughly mixed before applying to oil systems.",
      },
      {
        title: "Determine Correct Dosage",
        description:
          "Use 5–10% of total oil volume depending on engine condition and application.",
      },
      {
        title: "Add to Oil Reservoir",
        description:
          "Pour directly into the oil tank when engine is warm for optimal blending.",
      },
      {
        title: "Run Engine Briefly",
        description:
          "Let the engine idle for 5–10 minutes to circulate and activate the additive.",
      },
      {
        title: "Suitable for All Oil Types",
        description:
          "Compatible with synthetic, semi-synthetic, and mineral oils across all engine types.",
      },
      {
        title: "Use with Each Oil Change",
        description:
          "Reapply POWER BOOSTER at every oil change to maintain peak protection and performance.",
      },
    ],
  },

  {
    range: "Premium",
    title: "POWER Hydraulic ISO 68",
    type: "industrial",
    images: ["/images/products/hydraulic-iso-68.jpg"],
    href: "power-hydraulic-iso-68",
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
    advantages: [
      {
        title: "Superior Wear Protection",
        description:
          "Fortified with anti-wear additives that shield components against friction and heavy load conditions, extending equipment life.",
      },
      {
        title: "Enhanced Thermal Stability",
        description:
          "Maintains consistent viscosity and lubrication performance even in high-temperature environments, reducing breakdown risk.",
      },
      {
        title: "Smooth Cold Start Performance",
        description:
          "Optimized fluidity ensures efficient hydraulic response during low temperatures and initial start-ups.",
      },
      {
        title: "Excellent Oxidation Resistance",
        description:
          "Minimizes sludge, varnish, and deposit formation for cleaner, longer-running systems.",
      },
      {
        title: "Micro-Lubricant Technology",
        description:
          "Delivers a protective film that reduces micro-metal friction and prolongs operational stability.",
      },
      {
        title: "Extended Service Intervals",
        description:
          "Formulated to last longer between changes, reducing maintenance downtime and cost.",
      },
      {
        title: "Anti-Foaming and Rust Inhibitors",
        description:
          "Prevents air entrapment and corrosion to maintain consistent pressure and protect internal components.",
      },
    ],

    usages: [
      {
        title: "Hydraulic Equipment",
        description:
          "Designed for use in all types of hydraulic systems, including mobile, industrial, and heavy-duty applications.",
      },
      {
        title: "Construction & Mining Machinery",
        description:
          "Ideal for excavators, bulldozers, loaders, and other equipment operating under extreme pressures and dirt-heavy environments.",
      },
      {
        title: "Industrial Manufacturing Units",
        description:
          "Supports presses, injection molding machines, and other industrial setups requiring consistent hydraulic fluid performance.",
      },
      {
        title: "Agricultural Equipment",
        description:
          "Ensures smooth operation of tractors, harvesters, and loaders in varied temperature and load conditions.",
      },
      {
        title: "Forklifts & Material Handling",
        description:
          "Provides clean, responsive performance in warehouse and distribution center vehicles.",
      },
      {
        title: "Marine and Offshore Systems",
        description:
          "Resists water contamination and maintains lubrication under humid, salty conditions.",
      },
    ],

    direction: [
      {
        title: "Check Compatibility",
        description:
          "Always refer to your equipment manufacturer’s specifications before use.",
      },
      {
        title: "Drain Existing Fluid",
        description:
          "Fully remove old hydraulic oil to prevent contamination and mixing issues.",
      },
      {
        title: "Clean Filters & Reservoirs",
        description:
          "Inspect and clean filters, tanks, and lines before refilling with new fluid.",
      },
      {
        title: "Pour as Recommended",
        description:
          "Add the correct volume of oil based on system capacity and application.",
      },
      {
        title: "Run System Briefly",
        description:
          "Operate equipment briefly to circulate the oil, then check levels and top up if needed.",
      },
      {
        title: "Regular Monitoring",
        description:
          "Monitor oil quality and level periodically, especially under heavy-duty usage.",
      },
    ],
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
    advantages: [
      {
        title: "Enhanced Wear Protection",
        description:
          "Provides superior protection against wear and tear in automatic transmission components, extending service life.",
      },
      {
        title: "Smooth Gear Shifting",
        description:
          "Ensures consistent and smooth gear engagement under both normal and heavy-duty operating conditions.",
      },
      {
        title: "High Thermal Stability",
        description:
          "Maintains performance at elevated temperatures, reducing oxidation and preventing sludge formation.",
      },
      {
        title: "Improved Oxidation Resistance",
        description:
          "Delivers long-lasting fluid stability and performance, even in extended drain intervals.",
      },
      {
        title: "Seal Conditioning Formula",
        description:
          "Preserves and conditions internal transmission seals, helping prevent leaks and component degradation.",
      },
      {
        title: "Multipurpose Applications",
        description:
          "Suitable for use in transmissions, power steering systems, and hydraulic applications requiring DEXRON III fluid.",
      },
    ],

    usages: [
      {
        title: "Automatic Transmissions",
        description:
          "Formulated for older model vehicles and heavy-duty transmissions requiring DEXRON III performance.",
      },
      {
        title: "Power Steering Units",
        description:
          "Compatible with systems requiring ATF-type fluid, ensuring smooth and reliable steering response.",
      },
      {
        title: "Hydraulic Systems",
        description:
          "Effective for mobile or industrial hydraulic applications where ATF-type fluid is specified.",
      },
      {
        title: "Commercial and Passenger Vehicles",
        description:
          "Delivers dependable performance in taxis, fleet cars, buses, and trucks operating under diverse conditions.",
      },
      {
        title: "Off-Road & Agricultural Equipment",
        description:
          "Protects transmission systems in tractors and construction vehicles exposed to high loads and dusty environments.",
      },
    ],

    direction: [
      {
        title: "Check OEM Specifications",
        description:
          "Always verify that DEXRON III is the recommended fluid for the vehicle or equipment.",
      },
      {
        title: "Drain Old Fluid Thoroughly",
        description:
          "Fully drain old ATF before filling to prevent compatibility issues and ensure peak performance.",
      },
      {
        title: "Fill to Correct Level",
        description:
          "Use dipstick or sight gauge to ensure proper fluid level according to manufacturer guidelines.",
      },
      {
        title: "Warm Up Transmission",
        description:
          "Operate engine briefly to circulate fluid and allow accurate level check and optimal flow.",
      },
      {
        title: "Recheck After Operation",
        description:
          "Inspect fluid condition and level after vehicle use to ensure stability and system integrity.",
      },
    ],
  },
  {
    range: "Premium",
    title: "ATF DEX IV - Automatic Transmission Fluid",
    type: "engine-additives",
    images: ["/images/products/atf-dex-iv.jpg"],
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
    advantages: [
      {
        title: "Enhanced Wear Protection",
        description:
          "Provides superior protection against wear and tear in automatic transmission components, extending service life.",
      },
      {
        title: "Smooth Gear Shifting",
        description:
          "Ensures consistent and smooth gear engagement under both normal and heavy-duty operating conditions.",
      },
      {
        title: "High Thermal Stability",
        description:
          "Maintains performance at elevated temperatures, reducing oxidation and preventing sludge formation.",
      },
      {
        title: "Improved Oxidation Resistance",
        description:
          "Delivers long-lasting fluid stability and performance, even in extended drain intervals.",
      },
      {
        title: "Seal Conditioning Formula",
        description:
          "Preserves and conditions internal transmission seals, helping prevent leaks and component degradation.",
      },
      {
        title: "Multipurpose Applications",
        description:
          "Suitable for use in transmissions, power steering systems, and hydraulic applications requiring DEXRON III fluid.",
      },
    ],

    usages: [
      {
        title: "Automatic Transmissions",
        description:
          "Formulated for older model vehicles and heavy-duty transmissions requiring DEXRON III performance.",
      },
      {
        title: "Power Steering Units",
        description:
          "Compatible with systems requiring ATF-type fluid, ensuring smooth and reliable steering response.",
      },
      {
        title: "Hydraulic Systems",
        description:
          "Effective for mobile or industrial hydraulic applications where ATF-type fluid is specified.",
      },
      {
        title: "Commercial and Passenger Vehicles",
        description:
          "Delivers dependable performance in taxis, fleet cars, buses, and trucks operating under diverse conditions.",
      },
      {
        title: "Off-Road & Agricultural Equipment",
        description:
          "Protects transmission systems in tractors and construction vehicles exposed to high loads and dusty environments.",
      },
    ],
    direction: [
      {
        title: "Check OEM Specifications",
        description:
          "Always verify that DEXRON III is the recommended fluid for the vehicle or equipment.",
      },
      {
        title: "Drain Old Fluid Thoroughly",
        description:
          "Fully drain old ATF before filling to prevent compatibility issues and ensure peak performance.",
      },
      {
        title: "Fill to Correct Level",
        description:
          "Use dipstick or sight gauge to ensure proper fluid level according to manufacturer guidelines.",
      },
      {
        title: "Warm Up Transmission",
        description:
          "Operate engine briefly to circulate fluid and allow accurate level check and optimal flow.",
      },
      {
        title: "Recheck After Operation",
        description:
          "Inspect fluid condition and level after vehicle use to ensure stability and system integrity.",
      },
    ],
  },
  {
    range: "Premium",
    title: "ATF WS - Automatic Transmission Fluid",
    type: "engine-additives",
    images: ["/images/products/atf-ws.jpg"],
    href: "atf-iv",
    overview: `POWER ATF WS is a fully synthetic, low-viscosity automatic transmission fluid formulated to meet the stringent requirements of Toyota WS (World Standard) and other modern automatic transmission systems. It offers exceptional thermal and oxidative stability, friction durability, and precise shifting performance—making it ideal for high-efficiency, electronically controlled transmissions.

    Engineered with advanced friction modifiers, anti-wear agents, and long-life additives, POWER ATF WS enhances fuel economy, extends transmission service life, and maintains smooth operation under both normal and extreme conditions. Its low-viscosity formula ensures rapid fluid flow at cold start and stable performance at high temperatures.`,
    benefits: [
      "Smooth, Precise Shifting with Minimal Shudder",
      "Formulated for Modern Low-Viscosity Transmission Systems",
      "Outstanding Oxidation and Thermal Stability",
      "Improves Fuel Efficiency and Reduces Power Loss",
      "Superior Protection Against Wear and Friction",
      "Prevents Varnish and Sludge Formation for Cleaner Operation",
      "Extended Fluid Life and Longer Drain Intervals",
      "Fully Compatible with Toyota WS and Equivalent ATF Systems",
    ],
    quantity: ["1 Litre", "4 Litre"],
    advantages: [
      {
        title: "Fuel-Efficient Low Viscosity Formula",
        description:
          "Designed with lower viscosity for improved fuel economy and faster transmission response, especially in modern vehicles.",
      },
      {
        title: "Enhanced Frictional Stability",
        description:
          "Delivers consistent shift quality and protects against gear slippage throughout the fluid’s life cycle.",
      },
      {
        title: "Superior Oxidation Resistance",
        description:
          "Minimizes sludge and varnish buildup even under high-temperature operating conditions.",
      },
      {
        title: "Extended Drain Intervals",
        description:
          "Maintains long-term performance and reliability, supporting longer change intervals and reduced service costs.",
      },
      {
        title: "Optimal Seal Compatibility",
        description:
          "Preserves seal integrity and reduces the risk of leaks in advanced transmission systems.",
      },
      {
        title: "Smooth & Silent Shifting",
        description:
          "Provides excellent anti-shudder durability and smooth gear engagement for a quieter ride.",
      },
    ],

    usages: [
      {
        title: "Modern Automatic Transmissions",
        description:
          "Specifically engineered for late-model automatic transmissions requiring low-viscosity WS-type fluid.",
      },
      {
        title: "Hybrid Vehicles",
        description:
          "Supports hybrid drive systems where energy efficiency and thermal stability are critical.",
      },
      {
        title: "Passenger Cars & SUVs",
        description:
          "Ideal for high-performance and fuel-efficient vehicles from leading automotive brands.",
      },
      {
        title: "Urban & Stop-and-Go Driving",
        description:
          "Excels in traffic conditions where smooth low-speed gear changes are essential.",
      },
      {
        title: "Cold Weather Performance",
        description:
          "Offers quick circulation and reliable protection during cold starts and winter driving.",
      },
    ],

    direction: [
      {
        title: "Use Only in WS-Specified Systems",
        description:
          "Ensure compatibility with WS (World Standard) transmission systems as per OEM recommendation.",
      },
      {
        title: "Do Not Mix with Other ATFs",
        description:
          "ATF WS is not backward compatible with older ATF types and should not be mixed.",
      },
      {
        title: "Drain and Refill Procedure",
        description:
          "Follow vehicle service manual for proper fluid replacement to maintain warranty and performance.",
      },
      {
        title: "Warm Up Before Level Check",
        description:
          "Check and adjust fluid level only when the transmission is at operating temperature.",
      },
      {
        title: "Monitor for Performance Changes",
        description:
          "Regularly observe shifting quality and fluid condition to determine service intervals.",
      },
    ],
  },
  {
    range: "Premium",
    title: "EP-2 Lithium Complex Grease",
    type: "engine-additives",
    images: ["/images/products/ep-2.jpg"],
    href: "ep-2",
    overview: `POWER EP-2 Lithium Complex Grease is a high-performance, multi-purpose lubricant designed for heavy-duty industrial, automotive, and construction applications. Formulated with lithium complex thickener, premium base oils, and extreme pressure (EP) additives, it delivers superior protection under high load, high temperature, and harsh environmental conditions.

    Ideal for bearings, chassis points, and other critical components, POWER EP-2 offers outstanding water resistance, oxidation stability, and mechanical shear stability—ensuring extended service life and reduced maintenance downtime in even the most demanding operations.`,
    benefits: [
      "Exceptional Load-Carrying Capacity and EP Protection",
      "Withstands High Temperatures Without Melting or Breaking Down",
      "Excellent Water Resistance for Wet and Humid Environments",
      "Protects Against Rust, Corrosion, and Oxidation",
      "Outstanding Mechanical Stability Under Vibration and Shock",
      "Reduces Wear and Extends Equipment Life",
      "Suitable for High-Speed and Heavy-Duty Applications",
      "Long Service Intervals and Reduced Re-Greasing Frequency",
    ],
    quantity: ["500 G", "1 KG", "16 KG", "208 KG"],
    advantages: [
      {
        title: "Superior Wear Protection",
        description:
          "Forms a micro-layer on engine components to reduce friction and metal contact, providing lasting protection during cold starts and high-stress driving.",
      },
      {
        title: "Enhanced Engine Efficiency",
        description:
          "Reduces internal drag for improved fuel economy, smoother acceleration, and optimal power delivery.",
      },
      {
        title: "Prolonged Engine Life",
        description:
          "Minimizes wear and maintains component integrity, extending the lifespan of the engine even under demanding conditions.",
      },
      {
        title: "Exceptional Cleanliness",
        description:
          "Advanced detergents break down sludge and deposits, keeping the engine clean and performing at its best.",
      },
      {
        title: "Cooler Operating Temperatures",
        description:
          "Reduces friction-generated heat, helping the engine run cooler and preventing thermal breakdown.",
      },
      {
        title: "Reliable Cold Start Protection",
        description:
          "Instant lubrication at startup ensures critical parts are protected during the most vulnerable moments.",
      },
      {
        title: "Lower Emissions",
        description:
          "Cleaner combustion and reduced sludge formation help minimize exhaust emissions for a more eco-friendly drive.",
      },
      {
        title: "Water Contamination Resistance",
        description:
          "Protects the engine against performance loss caused by water ingress or condensation in the oil.",
      },
    ],

    usages: [
      {
        title: "Passenger Cars & SUVs",
        description:
          "Enhances fuel efficiency, performance, and engine longevity in daily-use vehicles.",
      },
      {
        title: "Commercial Vehicles & Trucks",
        description:
          "Withstands high-load operations and supports longer oil drain intervals for better uptime.",
      },
      {
        title: "Motorcycles & Scooters",
        description:
          "Reduces friction and noise while improving responsiveness in smaller engines.",
      },
      {
        title: "Heavy Machinery & Equipment",
        description:
          "Ensures durability and performance under extreme heat and pressure in construction and industrial settings.",
      },
      {
        title: "High-Performance & Racing Vehicles",
        description:
          "Delivers stable lubrication and power output at high RPMs and elevated temperatures.",
      },
      {
        title: "Extreme Weather Conditions",
        description:
          "Maintains optimal viscosity and protection in both hot and cold environments.",
      },
    ],

    direction: [
      {
        title: "Select Proper Equipment",
        description:
          "Use a clean grease gun or lubrication fitting compatible with the application point.",
      },
      {
        title: "Clean Application Area",
        description:
          "Remove old grease and clean the fitting or bearing housing to prevent contamination.",
      },
      {
        title: "Apply Grease",
        description:
          "Pump grease slowly until clean grease appears or reaches specified quantity per manufacturer guidelines.",
      },
      {
        title: "Distribute Evenly",
        description:
          "Operate equipment briefly to distribute grease evenly across bearing surfaces.",
      },
      {
        title: "Wipe Excess",
        description:
          "Remove excess grease from fittings to prevent dirt accumulation and contamination.",
      },
      {
        title: "Monitor Performance",
        description:
          "Check for proper lubrication and re-grease according to maintenance schedule.",
      },
      {
        title: "Follow Service Intervals",
        description:
          "Adhere to manufacturer's greasing intervals based on operating conditions and equipment usage.",
      },
    ],
  },
  {
    range: "Regular",
    title: "Power 0W20",
    type: "engine-additives",
    images: ["/images/products/regular/0w20-regular.jpg"],
    href: "power-0w20-regular",
    overview: `Power 0W20 is a reliable engine oil engineered to deliver consistent performance for daily drivers. Developed to meet SP standards, this lubricant ensures smoother cold starts, steady protection against wear, and improved cleanliness for petrol engines in routine operating conditions.
  
  With optimized thermal stability and enhanced detergents, it helps maintain engine efficiency, reduces buildup of deposits, and provides dependable lubrication across varying temperatures. Ideal for city commutes, light-duty vehicles, and standard driving cycles.`,
    benefits: [
      "Reliable Cold Start Performance",
      "Improved Fuel Efficiency for Daily Use",
      "Reduces Friction and Enhances Engine Smoothness",
      "Protects Against Sludge and Varnish Formation",
      "Keeps Engine Clean for Optimal Performance",
      "Helps Minimize Exhaust Emissions",
      "Steady Lubrication in Normal Driving Conditions",
      "Supports Extended Oil Drain Intervals with Regular Use",
    ],
    quantity: ["1 L", "4 L", "5 L", "20 L", "208 L"],
    advantages: [
      {
        title: "Superior Wear Protection",
        description:
          "Forms a protective micro-layer that reduces metal-to-metal contact during daily use, helping extend engine life and reduce maintenance.",
      },
      {
        title: "Enhanced Engine Efficiency",
        description:
          "Minimizes internal friction for smoother acceleration and consistent fuel economy during regular driving.",
      },
      {
        title: "Prolonged Engine Life",
        description:
          "Offers stable lubrication and protection across standard operating conditions, ensuring your engine lasts longer.",
      },
      {
        title: "Exceptional Cleanliness",
        description:
          "Helps prevent sludge and carbon buildup with effective detergent additives that keep the engine cleaner.",
      },
      {
        title: "Cooler Operation",
        description:
          "Reduces internal friction to lower engine temperature and prevent premature breakdown of oil.",
      },
      {
        title: "Reliable Cold Start Protection",
        description:
          "Ensures quick oil circulation at startup, reducing engine wear in the most vulnerable phase.",
      },
      {
        title: "Lower Emissions",
        description:
          "Cleaner burn and fewer residues help reduce harmful exhaust emissions.",
      },
      {
        title: "Water Contamination Resistance",
        description:
          "Helps protect against the effects of moisture and condensation buildup inside the engine.",
      },
    ],
    usages: [
      {
        title: "Passenger Cars & SUVs",
        description:
          "Ideal for everyday driving, supporting clean engine operation and fuel savings.",
      },
      {
        title: "Commercial Vehicles & Trucks",
        description:
          "Delivers stable performance for light-duty commercial use and urban logistics fleets.",
      },
      {
        title: "Motorcycles & Scooters",
        description:
          "Provides smooth operation and reduced engine noise in compact two-wheeler engines.",
      },
      {
        title: "Heavy Machinery & Equipment",
        description:
          "Suitable for general-purpose machinery operating under moderate load conditions.",
      },
      {
        title: "High-Performance & Racing Vehicles",
        description:
          "While designed for regular use, it offers dependable lubrication in warm-up and normal speed ranges.",
      },
      {
        title: "Extreme Weather Conditions",
        description:
          "Maintains performance across temperature fluctuations common in daily driving environments.",
      },
    ],
    direction: [
      {
        title: "Check Compatibility",
        description:
          "Refer to your vehicle's manual to confirm Power 0W20 meets the required specifications.",
      },
      {
        title: "Drain Old Oil",
        description:
          "Fully remove the used oil to prevent contamination and maximize new oil performance.",
      },
      {
        title: "Replace Oil Filter",
        description:
          "Install a new oil filter to maintain engine cleanliness and protection.",
      },
      {
        title: "Add Power Oil",
        description:
          "Pour the appropriate amount of Power 0W20 into the engine following your vehicle's oil capacity guidelines.",
      },
      {
        title: "Check Oil Level",
        description:
          "Use the dipstick to verify correct oil level after filling, and adjust if needed.",
      },
      {
        title: "Run & Inspect",
        description:
          "Start the engine and allow it to idle to circulate the oil. Inspect for leaks before driving.",
      },
      {
        title: "Monitor Regularly",
        description:
          "Regularly check oil levels and follow recommended oil change intervals to ensure consistent performance.",
      },
    ],
  },
  {
    range: "Regular",
    title: "Power 0W30",
    type: "engine-additives",
    images: ["/images/products/regular/0w30-regular.jpg"],
    href: "power-0w30-regular",
    overview: `Power 0W30 is a reliable synthetic engine oil formulated for consistent protection and performance in everyday driving. Designed for modern petrol engines, it ensures efficient cold starts, stable thermal performance, and reduced wear under normal driving loads.
  
  Built with detergent additives and smooth-flow technology, Power 0W30 helps maintain engine cleanliness and fuel economy, making it an ideal choice for drivers seeking affordable and effective lubrication for regular urban and highway use.`,
    benefits: [
      "Smooth and Quick Cold Start Lubrication",
      "Efficient Performance in Daily City and Highway Driving",
      "Improves Fuel Economy Under Normal Conditions",
      "Protects Engine Against Sludge, Varnish, and Deposits",
      "Maintains Engine Cleanliness Over Time",
      "Reduces Friction and Minimizes Component Wear",
      "Stable Viscosity for Year-Round Use",
      "Extended Oil Drain Intervals for Standard Vehicles",
    ],
    quantity: ["1 L", "4 L", "5 L", "20 L", "208 L"],
    advantages: [
      {
        title: "Reliable Wear Protection",
        description:
          "Provides a protective layer that minimizes friction between engine parts, reducing long-term wear during normal driving conditions.",
      },
      {
        title: "Fuel Efficiency Boost",
        description:
          "Helps lower internal resistance, improving fuel economy and enabling smoother performance over time.",
      },
      {
        title: "Longer Engine Life",
        description:
          "Keeps internal parts protected and free from buildup, contributing to longer operational lifespan.",
      },
      {
        title: "Clean Engine Technology",
        description:
          "Special detergents help reduce carbon buildup, keeping the engine cleaner and enhancing combustion performance.",
      },
      {
        title: "Heat Control",
        description:
          "Supports consistent operating temperatures and resists oil thickening in moderate to high-heat environments.",
      },
      {
        title: "Cold Weather Start-Up",
        description:
          "Maintains fluidity at low temperatures for quick circulation and immediate protection after ignition.",
      },
      {
        title: "Eco-Conscious Performance",
        description:
          "Helps reduce emissions by maintaining cleaner combustion and reducing sludge formation.",
      },
      {
        title: "Moisture Resistance",
        description:
          "Protects against performance loss due to condensation or water intrusion into the oil system.",
      },
    ],
    usages: [
      {
        title: "Passenger Cars & SUVs",
        description:
          "Ideal for modern engines requiring smooth daily driving and dependable cold start performance.",
      },
      {
        title: "Commercial Vehicles & Trucks",
        description:
          "Supports light commercial use with dependable lubrication and extended service life.",
      },
      {
        title: "Motorcycles & Scooters",
        description:
          "Delivers responsive engine feel and quieter operation in two-wheelers using compatible engines.",
      },
      {
        title: "Heavy Machinery & Equipment",
        description:
          "Applicable for general machinery operating under light to moderate industrial conditions.",
      },
      {
        title: "High-Performance & Racing Vehicles",
        description:
          "Supports warm-up cycles and light-duty performance usage—not intended for full track conditions.",
      },
      {
        title: "Extreme Weather Conditions",
        description:
          "Performs reliably in both hot summers and cool winter mornings with stable viscosity control.",
      },
    ],
    direction: [
      {
        title: "Check Compatibility",
        description:
          "Verify Power 0W30 meets your vehicle's oil specification using the owner's manual.",
      },
      {
        title: "Drain Old Oil",
        description:
          "Completely remove old oil before pouring new oil to avoid cross-contamination.",
      },
      {
        title: "Replace Oil Filter",
        description:
          "Use a fresh oil filter to improve filtration efficiency and engine cleanliness.",
      },
      {
        title: "Add Power Oil",
        description:
          "Carefully add the correct amount of Power 0W30 engine oil through the oil filler cap.",
      },
      {
        title: "Check Oil Level",
        description:
          "Use the dipstick to measure oil level and adjust as necessary before starting the engine.",
      },
      {
        title: "Run & Inspect",
        description:
          "Start the engine and allow it to idle to ensure oil circulates fully—check for leaks.",
      },
      {
        title: "Monitor Regularly",
        description:
          "Inspect oil levels periodically and follow recommended intervals for oil replacement.",
      },
    ],
  },
  {
    range: "Regular",
    title: "Power 5W20",
    type: "engine-additives",
    images: ["/images/products/regular/5w20-regular.jpg"],
    href: "power-5w20-regular",
    overview: `Power 5W20 is a reliable engine oil engineered to deliver consistent performance for daily drivers. Developed to meet SP standards, this lubricant ensures smoother cold starts, steady protection against wear, and improved cleanliness for petrol engines in routine operating conditions.
  
  With optimized thermal stability and enhanced detergents, it helps maintain engine efficiency, reduces buildup of deposits, and provides dependable lubrication across varying temperatures. Ideal for city commutes, light-duty vehicles, and standard driving cycles.`,
    benefits: [
      "Reliable Cold Start Performance",
      "Improved Fuel Efficiency for Daily Use",
      "Reduces Friction and Enhances Engine Smoothness",
      "Protects Against Sludge and Varnish Formation",
      "Keeps Engine Clean for Optimal Performance",
      "Helps Minimize Exhaust Emissions",
      "Steady Lubrication in Normal Driving Conditions",
      "Supports Extended Oil Drain Intervals with Regular Use",
    ],
    quantity: ["1 L", "4 L", "5 L", "20 L", "208 L"],
    advantages: [
      {
        title: "Superior Wear Protection",
        description:
          "Forms a protective micro-layer that reduces metal-to-metal contact during daily use, helping extend engine life and reduce maintenance.",
      },
      {
        title: "Enhanced Engine Efficiency",
        description:
          "Minimizes internal friction for smoother acceleration and consistent fuel economy during regular driving.",
      },
      {
        title: "Prolonged Engine Life",
        description:
          "Offers stable lubrication and protection across standard operating conditions, ensuring your engine lasts longer.",
      },
      {
        title: "Exceptional Cleanliness",
        description:
          "Helps prevent sludge and carbon buildup with effective detergent additives that keep the engine cleaner.",
      },
      {
        title: "Cooler Operation",
        description:
          "Reduces internal friction to lower engine temperature and prevent premature breakdown of oil.",
      },
      {
        title: "Reliable Cold Start Protection",
        description:
          "Ensures quick oil circulation at startup, reducing engine wear in the most vulnerable phase.",
      },
      {
        title: "Lower Emissions",
        description:
          "Cleaner burn and fewer residues help reduce harmful exhaust emissions.",
      },
      {
        title: "Water Contamination Resistance",
        description:
          "Helps protect against the effects of moisture and condensation buildup inside the engine.",
      },
    ],
    usages: [
      {
        title: "Passenger Cars & SUVs",
        description:
          "Ideal for everyday driving, supporting clean engine operation and fuel savings.",
      },
      {
        title: "Commercial Vehicles & Trucks",
        description:
          "Delivers stable performance for light-duty commercial use and urban logistics fleets.",
      },
      {
        title: "Motorcycles & Scooters",
        description:
          "Provides smooth operation and reduced engine noise in compact two-wheeler engines.",
      },
      {
        title: "Heavy Machinery & Equipment",
        description:
          "Suitable for general-purpose machinery operating under moderate load conditions.",
      },
      {
        title: "High-Performance & Racing Vehicles",
        description:
          "While designed for regular use, it offers dependable lubrication in warm-up and normal speed ranges.",
      },
      {
        title: "Extreme Weather Conditions",
        description:
          "Maintains performance across temperature fluctuations common in daily driving environments.",
      },
    ],
    direction: [
      {
        title: "Check Compatibility",
        description:
          "Refer to your vehicle's manual to confirm Power 5W20 meets the required specifications.",
      },
      {
        title: "Drain Old Oil",
        description:
          "Fully remove the used oil to prevent contamination and maximize new oil performance.",
      },
      {
        title: "Replace Oil Filter",
        description:
          "Install a new oil filter to maintain engine cleanliness and protection.",
      },
      {
        title: "Add Power Oil",
        description:
          "Pour the appropriate amount of Power 5W20 into the engine following your vehicle's oil capacity guidelines.",
      },
      {
        title: "Check Oil Level",
        description:
          "Use the dipstick to verify correct oil level after filling, and adjust if needed.",
      },
      {
        title: "Run & Inspect",
        description:
          "Start the engine and allow it to idle to circulate the oil. Inspect for leaks before driving.",
      },
      {
        title: "Monitor Regularly",
        description:
          "Regularly check oil levels and follow recommended oil change intervals to ensure consistent performance.",
      },
    ],
  },
  {
    range: "Regular",
    title: "Power 5W30",
    type: "engine-additives",
    images: ["/images/products/regular/5w30-regular.jpg"],
    href: "power-5w30-regular",
    overview: `Power 5W30 is a reliable synthetic engine oil formulated for consistent protection and performance in everyday driving. Designed for modern petrol engines, it ensures efficient cold starts, stable thermal performance, and reduced wear under normal driving loads.
  
  Built with detergent additives and smooth-flow technology, Power 5W30 helps maintain engine cleanliness and fuel economy, making it an ideal choice for drivers seeking affordable and effective lubrication for regular urban and highway use.`,
    benefits: [
      "Smooth and Quick Cold Start Lubrication",
      "Efficient Performance in Daily City and Highway Driving",
      "Improves Fuel Economy Under Normal Conditions",
      "Protects Engine Against Sludge, Varnish, and Deposits",
      "Maintains Engine Cleanliness Over Time",
      "Reduces Friction and Minimizes Component Wear",
      "Stable Viscosity for Year-Round Use",
      "Extended Oil Drain Intervals for Standard Vehicles",
    ],
    quantity: ["1 L", "4 L", "5 L", "20 L", "208 L"],
    advantages: [
      {
        title: "Reliable Wear Protection",
        description:
          "Provides a protective layer that minimizes friction between engine parts, reducing long-term wear during normal driving conditions.",
      },
      {
        title: "Fuel Efficiency Boost",
        description:
          "Helps lower internal resistance, improving fuel economy and enabling smoother performance over time.",
      },
      {
        title: "Longer Engine Life",
        description:
          "Keeps internal parts protected and free from buildup, contributing to longer operational lifespan.",
      },
      {
        title: "Clean Engine Technology",
        description:
          "Special detergents help reduce carbon buildup, keeping the engine cleaner and enhancing combustion performance.",
      },
      {
        title: "Heat Control",
        description:
          "Supports consistent operating temperatures and resists oil thickening in moderate to high-heat environments.",
      },
      {
        title: "Cold Weather Start-Up",
        description:
          "Maintains fluidity at low temperatures for quick circulation and immediate protection after ignition.",
      },
      {
        title: "Eco-Conscious Performance",
        description:
          "Helps reduce emissions by maintaining cleaner combustion and reducing sludge formation.",
      },
      {
        title: "Moisture Resistance",
        description:
          "Protects against performance loss due to condensation or water intrusion into the oil system.",
      },
    ],
    usages: [
      {
        title: "Passenger Cars & SUVs",
        description:
          "Ideal for modern engines requiring smooth daily driving and dependable cold start performance.",
      },
      {
        title: "Commercial Vehicles & Trucks",
        description:
          "Supports light commercial use with dependable lubrication and extended service life.",
      },
      {
        title: "Motorcycles & Scooters",
        description:
          "Delivers responsive engine feel and quieter operation in two-wheelers using compatible engines.",
      },
      {
        title: "Heavy Machinery & Equipment",
        description:
          "Applicable for general machinery operating under light to moderate industrial conditions.",
      },
      {
        title: "High-Performance & Racing Vehicles",
        description:
          "Supports warm-up cycles and light-duty performance usage—not intended for full track conditions.",
      },
      {
        title: "Extreme Weather Conditions",
        description:
          "Performs reliably in both hot summers and cool winter mornings with stable viscosity control.",
      },
    ],
    direction: [
      {
        title: "Check Compatibility",
        description:
          "Verify Power 5W30 meets your vehicle's oil specification using the owner's manual.",
      },
      {
        title: "Drain Old Oil",
        description:
          "Completely remove old oil before pouring new oil to avoid cross-contamination.",
      },
      {
        title: "Replace Oil Filter",
        description:
          "Use a fresh oil filter to improve filtration efficiency and engine cleanliness.",
      },
      {
        title: "Add Power Oil",
        description:
          "Carefully add the correct amount of Power 5W30 engine oil through the oil filler cap.",
      },
      {
        title: "Check Oil Level",
        description:
          "Use the dipstick to measure oil level and adjust as necessary before starting the engine.",
      },
      {
        title: "Run & Inspect",
        description:
          "Start the engine and allow it to idle to ensure oil circulates fully—check for leaks.",
      },
      {
        title: "Monitor Regularly",
        description:
          "Inspect oil levels periodically and follow recommended intervals for oil replacement.",
      },
    ],
  },

  {
    range: "Regular",
    title: "Power 10W30",
    type: "engine-additives",
    images: ["/images/products/regular/10w30-regular.jpg"],
    href: "power-10w30-regular",
    overview: `Power 10W30 is a reliable engine oil engineered to deliver consistent performance for daily drivers. Developed to meet SP standards, this lubricant ensures smoother cold starts, steady protection against wear, and improved cleanliness for petrol engines in routine operating conditions.
  
  With optimized thermal stability and enhanced detergents, it helps maintain engine efficiency, reduces buildup of deposits, and provides dependable lubrication across varying temperatures. Ideal for city commutes, light-duty vehicles, and standard driving cycles.`,
    benefits: [
      "Reliable Cold Start Performance",
      "Improved Fuel Efficiency for Daily Use",
      "Reduces Friction and Enhances Engine Smoothness",
      "Protects Against Sludge and Varnish Formation",
      "Keeps Engine Clean for Optimal Performance",
      "Helps Minimize Exhaust Emissions",
      "Steady Lubrication in Normal Driving Conditions",
      "Supports Extended Oil Drain Intervals with Regular Use",
    ],
    quantity: ["1 L", "4 L", "5 L", "20 L", "208 L"],
    advantages: [
      {
        title: "Superior Wear Protection",
        description:
          "Forms a protective micro-layer that reduces metal-to-metal contact during daily use, helping extend engine life and reduce maintenance.",
      },
      {
        title: "Enhanced Engine Efficiency",
        description:
          "Minimizes internal friction for smoother acceleration and consistent fuel economy during regular driving.",
      },
      {
        title: "Prolonged Engine Life",
        description:
          "Offers stable lubrication and protection across standard operating conditions, ensuring your engine lasts longer.",
      },
      {
        title: "Exceptional Cleanliness",
        description:
          "Helps prevent sludge and carbon buildup with effective detergent additives that keep the engine cleaner.",
      },
      {
        title: "Cooler Operation",
        description:
          "Reduces internal friction to lower engine temperature and prevent premature breakdown of oil.",
      },
      {
        title: "Reliable Cold Start Protection",
        description:
          "Ensures quick oil circulation at startup, reducing engine wear in the most vulnerable phase.",
      },
      {
        title: "Lower Emissions",
        description:
          "Cleaner burn and fewer residues help reduce harmful exhaust emissions.",
      },
      {
        title: "Water Contamination Resistance",
        description:
          "Helps protect against the effects of moisture and condensation buildup inside the engine.",
      },
    ],
    usages: [
      {
        title: "Passenger Cars & SUVs",
        description:
          "Ideal for everyday driving, supporting clean engine operation and fuel savings.",
      },
      {
        title: "Commercial Vehicles & Trucks",
        description:
          "Delivers stable performance for light-duty commercial use and urban logistics fleets.",
      },
      {
        title: "Motorcycles & Scooters",
        description:
          "Provides smooth operation and reduced engine noise in compact two-wheeler engines.",
      },
      {
        title: "Heavy Machinery & Equipment",
        description:
          "Suitable for general-purpose machinery operating under moderate load conditions.",
      },
      {
        title: "High-Performance & Racing Vehicles",
        description:
          "While designed for regular use, it offers dependable lubrication in warm-up and normal speed ranges.",
      },
      {
        title: "Extreme Weather Conditions",
        description:
          "Maintains performance across temperature fluctuations common in daily driving environments.",
      },
    ],
    direction: [
      {
        title: "Check Compatibility",
        description:
          "Refer to your vehicle's manual to confirm Power 10W30 meets the required specifications.",
      },
      {
        title: "Drain Old Oil",
        description:
          "Fully remove the used oil to prevent contamination and maximize new oil performance.",
      },
      {
        title: "Replace Oil Filter",
        description:
          "Install a new oil filter to maintain engine cleanliness and protection.",
      },
      {
        title: "Add Power Oil",
        description:
          "Pour the appropriate amount of Power 10W30 into the engine following your vehicle's oil capacity guidelines.",
      },
      {
        title: "Check Oil Level",
        description:
          "Use the dipstick to verify correct oil level after filling, and adjust if needed.",
      },
      {
        title: "Run & Inspect",
        description:
          "Start the engine and allow it to idle to circulate the oil. Inspect for leaks before driving.",
      },
      {
        title: "Monitor Regularly",
        description:
          "Regularly check oil levels and follow recommended oil change intervals to ensure consistent performance.",
      },
    ],
  },
  {
    range: "Regular",
    title: "Power 10W40",
    type: "engine-additives",
    images: ["/images/products/regular/10w40-regular.jpg"],
    href: "power-10w40-regular",
    overview: `Power 10W40 is a reliable synthetic engine oil formulated for consistent protection and performance in everyday driving. Designed for modern petrol engines, it ensures efficient cold starts, stable thermal performance, and reduced wear under normal driving loads.
  
  Built with detergent additives and smooth-flow technology, Power 10W40 helps maintain engine cleanliness and fuel economy, making it an ideal choice for drivers seeking affordable and effective lubrication for regular urban and highway use.`,
    benefits: [
      "Smooth and Quick Cold Start Lubrication",
      "Efficient Performance in Daily City and Highway Driving",
      "Improves Fuel Economy Under Normal Conditions",
      "Protects Engine Against Sludge, Varnish, and Deposits",
      "Maintains Engine Cleanliness Over Time",
      "Reduces Friction and Minimizes Component Wear",
      "Stable Viscosity for Year-Round Use",
      "Extended Oil Drain Intervals for Standard Vehicles",
    ],
    quantity: ["1 L", "4 L", "5 L", "20 L", "208 L"],
    advantages: [
      {
        title: "Reliable Wear Protection",
        description:
          "Provides a protective layer that minimizes friction between engine parts, reducing long-term wear during normal driving conditions.",
      },
      {
        title: "Fuel Efficiency Boost",
        description:
          "Helps lower internal resistance, improving fuel economy and enabling smoother performance over time.",
      },
      {
        title: "Longer Engine Life",
        description:
          "Keeps internal parts protected and free from buildup, contributing to longer operational lifespan.",
      },
      {
        title: "Clean Engine Technology",
        description:
          "Special detergents help reduce carbon buildup, keeping the engine cleaner and enhancing combustion performance.",
      },
      {
        title: "Heat Control",
        description:
          "Supports consistent operating temperatures and resists oil thickening in moderate to high-heat environments.",
      },
      {
        title: "Cold Weather Start-Up",
        description:
          "Maintains fluidity at low temperatures for quick circulation and immediate protection after ignition.",
      },
      {
        title: "Eco-Conscious Performance",
        description:
          "Helps reduce emissions by maintaining cleaner combustion and reducing sludge formation.",
      },
      {
        title: "Moisture Resistance",
        description:
          "Protects against performance loss due to condensation or water intrusion into the oil system.",
      },
    ],
    usages: [
      {
        title: "Passenger Cars & SUVs",
        description:
          "Ideal for modern engines requiring smooth daily driving and dependable cold start performance.",
      },
      {
        title: "Commercial Vehicles & Trucks",
        description:
          "Supports light commercial use with dependable lubrication and extended service life.",
      },
      {
        title: "Motorcycles & Scooters",
        description:
          "Delivers responsive engine feel and quieter operation in two-wheelers using compatible engines.",
      },
      {
        title: "Heavy Machinery & Equipment",
        description:
          "Applicable for general machinery operating under light to moderate industrial conditions.",
      },
      {
        title: "High-Performance & Racing Vehicles",
        description:
          "Supports warm-up cycles and light-duty performance usage—not intended for full track conditions.",
      },
      {
        title: "Extreme Weather Conditions",
        description:
          "Performs reliably in both hot summers and cool winter mornings with stable viscosity control.",
      },
    ],
    direction: [
      {
        title: "Check Compatibility",
        description:
          "Verify Power 10W40 meets your vehicle's oil specification using the owner's manual.",
      },
      {
        title: "Drain Old Oil",
        description:
          "Completely remove old oil before pouring new oil to avoid cross-contamination.",
      },
      {
        title: "Replace Oil Filter",
        description:
          "Use a fresh oil filter to improve filtration efficiency and engine cleanliness.",
      },
      {
        title: "Add Power Oil",
        description:
          "Carefully add the correct amount of Power 10W40 engine oil through the oil filler cap.",
      },
      {
        title: "Check Oil Level",
        description:
          "Use the dipstick to measure oil level and adjust as necessary before starting the engine.",
      },
      {
        title: "Run & Inspect",
        description:
          "Start the engine and allow it to idle to ensure oil circulates fully—check for leaks.",
      },
      {
        title: "Monitor Regularly",
        description:
          "Inspect oil levels periodically and follow recommended intervals for oil replacement.",
      },
    ],
  },
];
