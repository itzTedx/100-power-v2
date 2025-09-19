export interface ProductType {
  range: "Premium" | "Regular";
  title: string;
  href: string;
  images: string[];
  type: "lubrication" | "engine-additives" | "fuel-system" | "industrial";
  quantity: string[];
  overview: string;
  benefits: string[];
  safetyDs?: string;
  technicalDs?: string;
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
    quantity: ["1 L", "4 L", "5 L", "208 L"],
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
    quantity: ["1 L", "4 L", "5 L", "208 L"],
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
    quantity: ["1 L", "4 L", "5 L", "208 L"],
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
    quantity: ["1 L", "4 L", "5 L", "208 L"],
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
    safetyDs: "/datasheet/MSDS-10W40.pdf",
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
    quantity: ["1 L", "4 L", "5 L", "208 L"],
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
    quantity: ["1 L", "4 L"],
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
    quantity: ["1 L", "4 L"],
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
    safetyDs: "/datasheet/MSDS-OW20.pdf",
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
    quantity: ["1 L", "4 L", "5 L", "208 L"],
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
    quantity: ["1 L", "4 L", "5 L", "208 L"],
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
    quantity: ["1 L", "4 L", "20 L", "208 L"],
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
    title: "POWER 20W50",
    type: "engine-additives",
    images: ["/images/products/20w50.jpg"],
    href: "power-20w50",
    overview: `POWER 20W50 is a high-performance mineral-based gear oil designed for manual transmissions, axles, and differentials in commercial and passenger vehicles. Formulated with extreme pressure (EP) additives, it provides excellent protection against gear wear, corrosion, and oxidation—even under high torque and load conditions.

    Whether you're hauling heavy loads or navigating daily commutes, POWER 20W50 ensures consistent gear performance, long service life, and reliable protection across a wide range of operating conditions.`,
    benefits: [
      "Reliable Gear Protection Under High Load & Torque",
      "Smooth Operation for Manual Transmissions & Differentials",
      "Strong Resistance to Oxidation & Oil Degradation",
      "Protects Against Rust, Corrosion & Metal Fatigue",
      "Maintains Viscosity Stability Across Temperature Swings",
      "Extended Gear Life & Reduced Maintenance Costs",
    ],
    quantity: ["1 L", "4 L", "20 L", "208 L"],
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
          "Ideal for cars, vans, and pickups requiring 20W50 multigrade oil for balanced lubrication and protection.",
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
          "Ensure POWER 20W50 is recommended for your engine before use. Follow manufacturer’s specifications and intervals.",
      },
      {
        title: "Drain Used Oil Completely",
        description:
          "Warm engine slightly and drain all old oil. Replace oil filter to prevent contamination of fresh oil.",
      },
      {
        title: "Fill with Recommended Quantity",
        description:
          "Use a funnel to pour in POWER 20W50 carefully. Do not overfill—check dipstick levels as you go.",
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
    quantity: ["350 ML", "1 L", "5 L", "20 L", "208 L"],
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
    overview:
      "Power-10 is a high-performance maintenance lubricant spray, engineered with nano-penetrating technology and powered by Power Booster. It penetrates deep to eliminate rust, corrosion, and friction at the micro level—making it up to 20 times stronger than traditional sprays. Ideal for both industrial and household use, Power-10 dramatically extends the life and reliability of metal parts, tools, and electrical components—even in extreme conditions.",
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
    quantity: ["300 ML", "1 L", "5 L", "16 L", "208 L"],
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
    images: ["/images/products/power-booster.jpg"],
    href: "power-booster",
    overview: `POWER Booster is a complementary additive package that, through a micro-metallurgical
      process, forms (from the original metal) a durable, polished-like micro-layer of metal that
      dramatically resists wear, extreme pressure, and excessive temperature. Metal surfaces
      remain treated at all times, which provides for immediate start-up lubrication. Friction is
      reduced by up to 95% and wear by up to 96%, which results in an estimated extension of
      the engine’s equipment's life of up to 10 times and an oil service life of up to 2-3 times,
      plus a major improvement in performance and fuel economy.
    `,
    benefits: [
      "Fuel Consumption: Reduces fuel usage by 15-25%",
      "Wear Reduction: Decreases wear by over 96%",
      "Extended Oil Change Intervals: Increases intervals by 2-3 times",
      "Longer Equipment Life: Extends the service life by 5-8 times",
      "Reduced Friction: Reduces metal-to-metal friction by up to 95%",
      "Operational Cost Reduction: Cuts maintenance costs by up to 65%",
      "Increased Productivity: Reduces downtime by up to 90%",
      "Cleaner Emissions: Significant reduction in pollutant emissions",
      "Reduced Waste Oil: Minimizes waste oil volumes",
      "Less Replacement Parts: Considerably reduces the need for equipment replacements",
    ],
    quantity: ["350 ML", "1 L", "5 L", "16 L", "208 L"],
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
        title: "Diesel & Gasoline Engines",
        description: "Add 5% of total engine oil capacity.",
      },
      {
        title: "Post-Service Application",
        description:
          "Mix directly with engine oil after servicing for best performance.",
      },
      {
        title: "Industrial Equipment",
        description:
          "Use 5–10% by volume in tractors, pumps, and construction machines.",
      },
      {
        title: "Oil Tank Application",
        description:
          "Add directly to the oil tank before operation to boost efficiency and protection.",
      },
      {
        title: "Challenging Environments",
        description:
          "Helps during cold starts, high-stress workloads, and extreme temperature environments.",
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
    quantity: ["1 L", "5 L", "20 L", "208 L"],
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
    quantity: ["1 L", "4 L"],
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
    quantity: ["1 L", "4 L"],
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
    quantity: ["1 L", "4 L"],
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
    type: "lubrication",
    images: ["/images/products/ep-2.jpg"],
    href: "ep-2",
    overview: `POWER EP-2 Lithium Complex Grease, a high-performance solution for machinery
      operating under extreme pressure. Engineered for superior protection against dust, dirt,
      sludge, water, and extreme temperatures in high temperatures. A Military-grade grease
      built to last in heat, dust and pressure to ensure long-lasting reliability and durability. Ep-2
      grease is specially designed for mining, industrial, construction and automotive
      applications that deliver unmatched resilience and performance. The ultimate protection
      against dust and contamination which reduces your bearing failures due to dust
      contamination and extends the bearing life up to 3 times.`,
    benefits: [
      "Extended Maintenance Intervals: Reduces maintenance frequency and downtime by up to 3-5 times, significantly lowering costs",
      "Enhanced Equipment Protection: Minimizes wear and tear, ensuring smoother operation and extended service life for bearings, gears, and moving parts",
      "Energy Efficiency: Reduces equipment temperature, vibration, and noise levels, leading to more efficient operations",
      "Durability in Extreme Conditions: Performs exceptionally in environments with high pressure, moisture, dust, and high temperatures",
    ],
    quantity: ["500 G", "1 KG", "16 KG", "208 KG"],
    advantages: [
      {
        title: "Military-Grade Durability",
        description:
          "Engineered to withstand extreme heat, pressure, and dust, ensuring long-lasting performance in demanding environments.",
      },
      {
        title: "Contaminant Resistance",
        description:
          "Protects against dust, dirt, sludge, and water, reducing bearing failures caused by environmental contaminants.",
      },
      {
        title: "Extended Bearing Life",
        description:
          "Extends the lifespan of bearings up to 3 times by minimizing wear and providing consistent lubrication.",
      },
      {
        title: "High-Pressure Performance",
        description:
          "Delivers exceptional protection and stability for equipment operating under extreme pressure conditions.",
      },
      {
        title: "Reduced Maintenance Downtime",
        description:
          "Increases service intervals by 3–5 times, significantly lowering maintenance frequency and operational costs.",
      },
    ],

    usages: [
      {
        title: "Surface Preparation",
        description: "Ensure surfaces are clean and free of contaminants.",
      },
      {
        title: "Application",
        description:
          "Apply POWER EP-2 Lithium Complex Grease directly to bearings, gears, or other metal surfaces using standard grease applicators.",
      },
      {
        title: "Amount",
        description:
          "Make sure the appropriate amount of grease is applied to all necessary areas.",
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
    safetyDs: "/datasheet/MSDS-OW20.pdf",
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
    images: ["/images/products/regular/0w30-Regular.jpg"],
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
    title: "POWER 5W40",
    type: "engine-additives",
    images: ["/images/products/regular/5w40-regular.jpg"],
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
    quantity: ["1 L", "4 L", "5 L", "208 L"],
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
    safetyDs: "/datasheet/MSDS-10W40.pdf",
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
    quantity: ["1 L", "4 L", "5 L", "208 L"],
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
  {
    range: "Regular",
    title: "Power 20W40",
    type: "engine-additives",
    images: ["/images/products/regular/20w40-regular.jpg"],
    href: "power-20w40-regular",
    overview: `Power 20W40 is a dependable regular-grade engine oil formulated for everyday petrol and light‑duty diesel engines. Featuring Micro‑Lubricant Technology and meeting industry-standard specifications, it provides consistent cold start performance, excellent wear protection, and thermal stability under standard driving conditions.
  
  Enhanced with detergent additives, Power 20W40 helps reduce sludge and deposit build‑up, supports fuel efficiency, and ensures smooth operation in urban miles and moderate highway use.`,
    benefits: [
      "Smooth Cold Start Lubrication",
      "Effective Wear Protection in Daily Use",
      "Protects Against Sludge, Deposits, and Carbon Build‑Up",
      "Ensures Stable Viscosity in Normal Operating Temperatures",
      "Improves Fuel Economy under Regular Driving Cycles",
      "Supports Longer Drain Intervals with Routine Use",
      "Resists Oxidation and Thermal Breakdown",
      "Helps Minimize Exhaust Emissions",
    ],
    quantity: ["1 L", "4 L", "20 L", "208 L"],
    advantages: [
      {
        title: "Consistent Wear Protection",
        description:
          "Forms a protective micro‑film on engine components to reduce friction and minimize engine wear during standard driving.",
      },
      {
        title: "Enhanced Efficiency",
        description:
          "Reduces internal drag by maintaining smooth oil flow, promoting smoother operation and fuel savings even in stop‑and‑go traffic.",
      },
      {
        title: "Extended Engine Longevity",
        description:
          "Prevents buildup and reduced wear contribute to longer service life under normal use.",
      },
      {
        title: "Engine Cleanliness",
        description:
          "Incorporates advanced detergents that break down sludge and residue, keeping engine internals clean and efficient.",
      },
      {
        title: "Thermal Stability",
        description:
          "Maintains oil performance and viscosity under typical engine operating temperatures.",
      },
      {
        title: "Reliable Cold Weather Performance",
        description:
          "Remains fluid enough in cooler temperatures to ensure immediate protection on startup.",
      },
      {
        title: "Reduced Emissions",
        description:
          "Cleaner combustion and lower deposits help limit harmful exhaust emissions.",
      },
      {
        title: "Moisture Resistance",
        description:
          "Helps prevent performance degradation from condensation or minor water ingress into the oil system.",
      },
    ],
    usages: [
      {
        title: "Passenger Cars & SUVs",
        description:
          "Ideal for daily‑use petrol and light diesel engines, offering dependable protection and smooth performance.",
      },
      {
        title: "Commercial Vehicles & Light Trucks",
        description:
          "Suited for light-duty fleet and delivery vehicles operating under moderate conditions.",
      },
      {
        title: "Motorcycles & Scooters (where applicable)",
        description:
          "Provides smooth operation and reduced noise, when compatible with engine design.",
      },
      {
        title: "Heavy Machinery & Equipment",
        description:
          "Fit for general-purpose equipment in moderate industrial use.",
      },
      {
        title: "High‑Performance & Racing Vehicles (light use)",
        description:
          "Not designed for extreme track conditions, but offers reliable warm‑up lubrication and standard performance.",
      },
      {
        title: "Extreme Weather Conditions",
        description:
          "Maintains consistent viscosity in both hot summer drives and cooler weather start‑ups.",
      },
    ],
    direction: [
      {
        title: "Check Compatibility",
        description:
          "Refer to your owner’s manual to confirm Power 20W40 meets recommended oil grade specifications.",
      },
      {
        title: "Drain Old Oil",
        description:
          "Completely remove the used oil to avoid contamination before filling with new oil.",
      },
      {
        title: "Replace Oil Filter",
        description:
          "Always install a new filter to maintain filtration efficiency and engine cleanliness.",
      },
      {
        title: "Add Power Oil",
        description:
          "Pour the correct amount of Power 20W40 into the engine as per manufacturer’s oil capacity.",
      },
      {
        title: "Check Oil Level",
        description:
          "After filling, use the dipstick to verify and adjust the oil level before starting the engine.",
      },
      {
        title: "Run & Inspect",
        description:
          "Start the engine and allow it to idle briefly to ensure full oil circulation—then check for any leaks.",
      },
      {
        title: "Monitor Regularly",
        description:
          "Check oil levels periodically and adhere to recommended service intervals for consistent protection.",
      },
    ],
  },
  {
    range: "Regular",
    title: "Power 20W50",
    type: "engine-additives",
    images: ["/images/products/regular/20w50-regular.jpg"],
    href: "power-20w50-regular",
    overview: `Power 20W50 is a durable, multi-grade engine oil crafted for consistent protection in older engines, light diesel vehicles, and machines operating under moderate to heavy loads. Its thicker viscosity ensures solid film strength at higher temperatures, while additives provide effective wear resistance and cleanliness over time.
  
  Engineered for dependable performance, Power 20W50 minimizes friction, supports smoother operation, and reduces engine noise—making it ideal for vehicles that require stable lubrication in hot climates or under higher stress conditions.`,
    benefits: [
      "Enhanced Protection for Older Engines",
      "Stable Viscosity at High Operating Temperatures",
      "Improves Seal Conditioning and Reduces Oil Consumption",
      "Resists Oxidation, Sludge, and Thermal Breakdown",
      "Reduces Engine Noise and Improves Smoothness",
      "Maintains Cleanliness for Longer Engine Life",
      "Supports High-Load and High-Mileage Operation",
      "Helps Prevent Wear in Heavily Used Engines",
    ],
    quantity: ["1 L", "4 L", "20 L", "208 L"],
    advantages: [
      {
        title: "Heavy-Duty Wear Resistance",
        description:
          "Provides a thicker oil film that protects older engine parts and prevents metal-to-metal contact under heavy loads.",
      },
      {
        title: "Heat-Endurance Formula",
        description:
          "Maintains stability and resists thinning even in hot environments, ideal for longer drives or warmer climates.",
      },
      {
        title: "Optimized for Aging Engines",
        description:
          "Fills larger tolerances in worn-out engines and helps reduce oil burn-off and leaks.",
      },
      {
        title: "Engine Cleanliness Support",
        description:
          "Formulated with cleaning agents that reduce sludge formation and maintain internal engine hygiene.",
      },
      {
        title: "Noise and Vibration Reduction",
        description:
          "Thicker oil layer helps dampen engine noise and reduce harshness during operation.",
      },
      {
        title: "Cold Start Reliability",
        description:
          "Though thicker, it retains good pumpability for effective lubrication during startup in moderate climates.",
      },
      {
        title: "Low Emission Contribution",
        description:
          "Supports better combustion in older engines by minimizing oil breakdown and reducing deposits.",
      },
      {
        title: "Moisture Barrier",
        description:
          "Guards against corrosion caused by condensation, especially in engines with irregular use.",
      },
    ],
    usages: [
      {
        title: "Older Passenger Vehicles",
        description:
          "Recommended for high-mileage engines that need thicker protection and oil consumption control.",
      },
      {
        title: "Light Trucks & Pickups",
        description:
          "Handles everyday hauling and commercial use with reliable thermal resistance.",
      },
      {
        title: "Motorcycles with Compatible Engines",
        description:
          "Provides smooth performance and reduced friction in compatible air-cooled engines.",
      },
      {
        title: "Heavy Machinery & Generators",
        description:
          "Suitable for equipment that operates in hot environments and under constant load.",
      },
      {
        title: "Off-Road & Utility Vehicles",
        description:
          "Withstands dust, heat, and tough terrain while maintaining lubrication integrity.",
      },
      {
        title: "Hot Climates",
        description:
          "Performs well in regions with consistently high ambient temperatures.",
      },
    ],
    direction: [
      {
        title: "Check Compatibility",
        description:
          "Ensure Power 20W50 is the correct grade for your engine by checking the vehicle's service manual.",
      },
      {
        title: "Drain Old Oil",
        description:
          "Thoroughly drain used oil before filling to maintain proper performance of the new oil.",
      },
      {
        title: "Replace Oil Filter",
        description:
          "Install a new filter to ensure debris-free circulation and improved engine longevity.",
      },
      {
        title: "Add Power Oil",
        description:
          "Pour Power 20W50 slowly through the filler cap, following manufacturer-recommended capacity.",
      },
      {
        title: "Check Oil Level",
        description:
          "After filling, confirm oil level using the dipstick and adjust if needed.",
      },
      {
        title: "Run & Inspect",
        description:
          "Start the engine and let it idle briefly. Watch for leaks and confirm proper oil pressure.",
      },
      {
        title: "Monitor Regularly",
        description:
          "Check oil levels periodically and top up as necessary. Follow service intervals for optimal results.",
      },
    ],
  },
  {
    range: "Regular",
    title: "Power 75W90",
    type: "engine-additives",
    images: ["/images/products/regular/75w90-regular.jpg"],
    href: "power-75w90-regular",
    overview: `Power 75W90 is a high-performance gear oil designed for everyday applications in manual transmissions, differentials, and axle systems. Offering reliable protection under standard driving conditions, this GL-5 rated lubricant delivers smooth gear shifting, reduces wear, and ensures stable performance in both high-load and varying temperature environments.
  
  Blended with anti-wear and EP (extreme pressure) additives, Power 75W90 helps prevent scuffing, gear pitting, and breakdowns in conventional gear systems, making it ideal for regular use in passenger vehicles, light trucks, and commercial fleets.`,
    benefits: [
      "Smooth Gear Shifting and Reduced Friction",
      "Protects Gears Against Wear and Pitting",
      "Maintains Performance in High and Low Temperatures",
      "Compatible with Most Manual Transmissions and Differentials",
      "Prevents Foaming and Ensures Stable Lubrication",
      "Excellent Thermal and Oxidation Stability",
      "Minimizes Gear Noise and Vibration",
      "Extends Service Life of Transmission Components",
    ],
    quantity: ["1 L", "4 L"],
    advantages: [
      {
        title: "Reliable EP Protection",
        description:
          "Enhanced with Extreme Pressure additives to prevent surface fatigue and wear in heavily loaded gear teeth.",
      },
      {
        title: "Temperature Stability",
        description:
          "Maintains consistent viscosity in both hot and cold climates for year-round use.",
      },
      {
        title: "Corrosion and Rust Prevention",
        description:
          "Forms a protective barrier that shields metal surfaces from oxidation and moisture-related damage.",
      },
      {
        title: "Reduced Gear Noise",
        description:
          "Smoothens metal interaction to reduce whining or grinding sounds in gear systems.",
      },
      {
        title: "Longer Drain Intervals",
        description:
          "Maintains oil integrity over time, reducing the frequency of gear oil changes in normal conditions.",
      },
      {
        title: "Anti-Foaming Properties",
        description:
          "Prevents oil aeration and ensures complete gear coverage during high-speed rotation.",
      },
      {
        title: "Friction Control",
        description:
          "Lowers internal drag and improves transmission response and fuel economy.",
      },
      {
        title: "Multi-Vehicle Compatibility",
        description:
          "Formulated for a wide range of vehicles requiring GL-5 level protection in gear applications.",
      },
    ],
    usages: [
      {
        title: "Manual Transmissions",
        description:
          "Ideal for vehicles with manual gearboxes requiring smooth shifts and durability under load.",
      },
      {
        title: "Differentials & Axles",
        description:
          "Provides strong protection and lubrication for rear axles and limited-slip differentials.",
      },
      {
        title: "Light Trucks & Pickups",
        description:
          "Ensures quiet and reliable operation under city and utility driving cycles.",
      },
      {
        title: "Commercial & Fleet Vehicles",
        description:
          "Supports long-term operation with reduced wear and extended oil life in transmission systems.",
      },
      {
        title: "Off-Road & Utility Equipment",
        description:
          "Resists breakdown and maintains gear performance in rugged environments and high torque conditions.",
      },
      {
        title: "Cold Weather Conditions",
        description:
          "Remains fluid at low temperatures for reliable cold starts and uninterrupted gear protection.",
      },
    ],
    direction: [
      {
        title: "Check Compatibility",
        description:
          "Refer to your vehicle or equipment manual to verify GL-5 and 75W90 compatibility before use.",
      },
      {
        title: "Drain Old Gear Oil",
        description:
          "Completely remove old gear oil to prevent contamination and ensure fresh performance.",
      },
      {
        title: "Inspect Drain Plug",
        description:
          "Clean magnetic drain plugs of any metal particles or debris before reinstalling.",
      },
      {
        title: "Add Power 75W90",
        description:
          "Use a pump or squeeze bottle to fill the gearbox or differential with the recommended amount of Power 75W90.",
      },
      {
        title: "Fill to Level Plug",
        description:
          "Stop filling when the oil reaches the bottom edge of the level plug hole unless otherwise specified.",
      },
      {
        title: "Seal and Run",
        description:
          "Tighten all plugs securely and run the system briefly to circulate oil—then recheck levels.",
      },
      {
        title: "Regular Monitoring",
        description:
          "Periodically check oil condition and level, especially before long trips or heavy usage cycles.",
      },
    ],
  },
  {
    range: "Regular",
    title: "Power 85W90",
    type: "engine-additives",
    images: ["/images/products/regular/85w90-regular.jpg"],
    href: "power-85w90-regular",
    overview: `Power 85W90 is a heavy-duty gear oil formulated for use in manual transmissions, differentials, and axle assemblies operating under moderate to severe load conditions. It provides strong film strength, excellent load-carrying capabilities, and long-lasting protection against wear, oxidation, and corrosion.
  
  Designed to meet the needs of both commercial and passenger vehicles, this GL-5 rated oil ensures consistent performance and thermal stability, even in high-stress or fluctuating temperature environments. Power 85W90 helps reduce maintenance costs while maximizing gear and bearing life.`,
    benefits: [
      "Excellent Load-Bearing and Shock Protection",
      "Reduces Wear on Gears, Bearings, and Shafts",
      "Resists Thermal Breakdown and Oxidation",
      "Minimizes Gear Whine and Vibration",
      "Protects Against Rust, Corrosion, and Sludge Formation",
      "Stable Lubrication in Wide Temperature Ranges",
      "Ensures Long Oil and Component Life",
      "Works with Most Gear Systems Requiring GL-5",
    ],
    quantity: ["1 L", "4 L"],
    advantages: [
      {
        title: "Robust Gear Protection",
        description:
          "Formulated with anti-wear and EP (Extreme Pressure) additives to guard against metal-to-metal contact under load.",
      },
      {
        title: "Oxidation Resistance",
        description:
          "Slows oil thickening and sludge buildup, maintaining clean and efficient system operation.",
      },
      {
        title: "Wide Temperature Operating Range",
        description:
          "Performs reliably in both hot and cold conditions, maintaining fluidity and protection.",
      },
      {
        title: "Corrosion Inhibition",
        description:
          "Prevents rust and corrosion of internal gear components during extended service intervals.",
      },
      {
        title: "Reduced Gear Noise",
        description:
          "Cushions gear contact to minimize noise and harshness, especially in commercial applications.",
      },
      {
        title: "Anti-Foaming Additives",
        description:
          "Prevents aeration and ensures full gear coverage even under high agitation or rotation.",
      },
      {
        title: "Long-Lasting Lubrication",
        description:
          "Extends drain intervals and reduces downtime, especially for fleet and utility vehicles.",
      },
      {
        title: "High Compatibility",
        description:
          "Compatible with most hypoid, spiral-bevel, and worm gear differentials used in trucks and machinery.",
      },
    ],
    usages: [
      {
        title: "Differentials & Axles",
        description:
          "Designed for use in hypoid and spiral bevel gear axles requiring GL-5 grade oil.",
      },
      {
        title: "Manual Gearboxes",
        description:
          "Delivers smooth shifting and protection for transmissions operating under load.",
      },
      {
        title: "Heavy-Duty Vehicles",
        description:
          "Ideal for trucks, buses, and off-road equipment exposed to high torque and load conditions.",
      },
      {
        title: "Agricultural & Construction Equipment",
        description:
          "Withstands dirt, moisture, and harsh environments in tractors, loaders, and excavators.",
      },
      {
        title: "Passenger & Utility Vehicles",
        description:
          "Protects drive systems in everyday vehicles requiring 85W90 GL-5 gear oil.",
      },
      {
        title: "Mixed Fleet Operations",
        description:
          "Simplifies lubrication management across a variety of vehicles and equipment types.",
      },
    ],
    direction: [
      {
        title: "Confirm Oil Spec",
        description:
          "Refer to your owner’s manual to confirm that 85W90 GL-5 gear oil is recommended.",
      },
      {
        title: "Drain Existing Oil",
        description:
          "Remove the old oil completely and inspect for any signs of contamination or metal particles.",
      },
      {
        title: "Clean Fill & Drain Points",
        description:
          "Wipe down fittings and remove any buildup before introducing fresh oil.",
      },
      {
        title: "Add Power 85W90",
        description:
          "Pour in the required amount until the oil reaches the level plug, using a pump if necessary.",
      },
      {
        title: "Recheck After Operation",
        description:
          "Run the system briefly and check for leaks or drops in fluid level after initial use.",
      },
      {
        title: "Top Off as Needed",
        description:
          "If fluid levels are low after settling, top off to ensure full lubrication coverage.",
      },
      {
        title: "Inspect Periodically",
        description:
          "Regularly monitor fluid condition and top off or change oil at manufacturer-recommended intervals.",
      },
    ],
  },
  {
    range: "Regular",
    title: "Power ATF DEX III",
    type: "engine-additives",
    images: ["/images/products/regular/atf-dex-iii-regular.jpg"],
    href: "power-atf-dex-iii-regular",
    overview: `Power ATF DEX III is a high-performance automatic transmission fluid formulated to meet the requirements of General Motors DEXRON®-III and other manufacturer specifications. It delivers reliable performance, smooth shifting, and robust wear protection in automatic transmissions, power steering systems, and certain hydraulic applications.
  
  Engineered with premium base oils and advanced additives, Power ATF DEX III ensures thermal stability, resistance to oxidation, and excellent shear stability for extended service life. Ideal for use in both older and modern automatic transmissions, it provides consistent performance in a wide range of operating conditions.`,
    benefits: [
      "Ensures Smooth Gear Shifting and Clutch Operation",
      "Excellent Oxidation and Thermal Stability",
      "Reduces Wear and Extends Transmission Life",
      "Maintains Fluid Viscosity Under Heat and Stress",
      "Protects Against Rust, Corrosion, and Foam Formation",
      "Compatible with Most Seals and Gaskets",
      "Provides Consistent Frictional Properties",
      "Suitable for Power Steering and Hydraulic Systems",
    ],
    quantity: ["1 L", "4 L"],
    advantages: [
      {
        title: "Smooth Transmission Operation",
        description:
          "Delivers consistent shift performance and reduces shudder and slip in automatic transmissions.",
      },
      {
        title: "Thermal and Oxidation Stability",
        description:
          "Maintains performance under high-temperature operation, extending drain intervals and protecting components.",
      },
      {
        title: "Superior Anti-Wear Protection",
        description:
          "Guards internal transmission parts against wear, scoring, and deposit buildup.",
      },
      {
        title: "Seal Compatibility",
        description:
          "Helps condition seals to prevent leaks and maintain long-term reliability.",
      },
      {
        title: "Multi-System Use",
        description:
          "Suitable for power steering units and some hydraulic systems requiring DEXRON®-III specification.",
      },
      {
        title: "Low Temperature Fluidity",
        description:
          "Ensures responsive cold-weather performance and reliable start-up protection.",
      },
      {
        title: "Friction Stability",
        description:
          "Provides consistent frictional characteristics over the fluid’s lifetime for smooth engagement.",
      },
      {
        title: "Extended Service Life",
        description:
          "Engineered for long drain intervals, reducing service frequency and operational costs.",
      },
    ],
    usages: [
      {
        title: "Automatic Transmissions",
        description:
          "Designed for use in vehicles requiring DEXRON®-III or earlier fluids for smooth gear shifts and durability.",
      },
      {
        title: "Power Steering Systems",
        description:
          "Ensures smooth and quiet operation in compatible power steering setups.",
      },
      {
        title: "Hydraulic Systems",
        description:
          "Applicable in certain hydraulic systems where an ATF DEX III fluid is recommended.",
      },
      {
        title: "Passenger and Commercial Vehicles",
        description:
          "Suitable for a wide range of vehicles including sedans, vans, SUVs, and light trucks.",
      },
      {
        title: "Off-Highway Equipment",
        description:
          "Can be used in construction and agricultural machinery requiring DEX III performance.",
      },
      {
        title: "Industrial Machinery",
        description:
          "Recommended for certain light-duty industrial and mobile hydraulic systems compatible with DEX III fluids.",
      },
    ],
    direction: [
      {
        title: "Check Manufacturer's Spec",
        description:
          "Verify that your vehicle or equipment requires DEXRON®-III or compatible ATF fluid before use.",
      },
      {
        title: "Drain Old Fluid",
        description:
          "Safely remove the existing fluid from the transmission, power steering, or hydraulic reservoir.",
      },
      {
        title: "Inspect for Debris",
        description:
          "Check for metal shavings, discoloration, or signs of fluid contamination.",
      },
      {
        title: "Refill with Power ATF DEX III",
        description:
          "Add the appropriate quantity using the manufacturer’s fill port and recommended level check method.",
      },
      {
        title: "Run the System",
        description:
          "Operate the vehicle or system briefly to circulate new fluid and check for proper operation.",
      },
      {
        title: "Recheck Levels",
        description:
          "After initial circulation, check the fluid level again and top up if needed.",
      },
      {
        title: "Regular Monitoring",
        description:
          "Inspect the fluid periodically for condition and top off or replace at scheduled intervals.",
      },
    ],
  },
  {
    range: "Regular",
    title: "ATF DEX IV Regular",
    type: "engine-additives",
    images: ["/images/products/regular/atf-dex-iv-regular.jpg"],
    href: "atf-dex-iv-regular",
    overview: `ATF DEX IV Regular is a premium automatic transmission fluid specially formulated 
    to meet the performance requirements of modern automatic transmissions. It ensures smooth 
    shifting, superior oxidation resistance, and excellent wear protection, helping prolong transmission life.`,
    benefits: [
      "Provides smooth and consistent gear shifting",
      "Protects against wear, corrosion, and sludge buildup",
      "Maintains fluid stability under high temperature and pressure",
      "Enhances transmission durability and performance",
      "Compatible with a wide range of automatic transmissions requiring DEX fluids",
    ],
    quantity: ["1 L", "4 L"],
    advantages: [
      {
        title: "Advanced Wear Protection",
        description:
          "Formulated with high-performance additives to minimize wear and extend transmission life.",
      },
      {
        title: "Thermal and Oxidation Stability",
        description:
          "Resists fluid breakdown and sludge formation at elevated temperatures, ensuring consistent performance.",
      },
      {
        title: "Smooth Shifting Performance",
        description:
          "Enhances transmission responsiveness and reduces gear shift shock for a comfortable drive.",
      },
      {
        title: "Corrosion and Rust Inhibition",
        description:
          "Protects internal transmission components from corrosion and rust during extended use.",
      },
      {
        title: "Wide Application Range",
        description:
          "Suitable for many automatic transmissions specifying DEX IV or earlier standards.",
      },
      {
        title: "Extended Service Intervals",
        description:
          "Maintains fluid integrity over long drain intervals, reducing maintenance frequency.",
      },
    ],
    usages: [
      {
        title: "Automatic Transmissions",
        description:
          "Ideal for passenger cars and light trucks equipped with automatic transmissions requiring DEX IV or III fluids.",
      },
      {
        title: "Power Steering Systems",
        description:
          "Can be used in power steering systems where the manufacturer recommends DEX-type fluids.",
      },
      {
        title: "Hydraulic Systems",
        description:
          "Applicable for certain hydraulic systems compatible with automatic transmission fluids.",
      },
    ],
    direction: [
      {
        title: "Verify Compatibility",
        description:
          "Always check the vehicle owner's manual to confirm the recommended transmission fluid type.",
      },
      {
        title: "Drain Old Fluid",
        description:
          "Completely drain the existing transmission fluid before refilling to avoid contamination.",
      },
      {
        title: "Clean Transmission System",
        description:
          "Ensure the transmission system is clean and free from dirt or debris before adding new fluid.",
      },
      {
        title: "Add ATF DEX IV Regular",
        description:
          "Pour the fluid slowly to the correct level as specified by the vehicle manufacturer.",
      },
      {
        title: "Check Fluid Level",
        description:
          "After refilling, check and adjust the fluid level according to the transmission specifications.",
      },
      {
        title: "Monitor for Leaks",
        description:
          "Inspect for leaks or abnormal operation during initial use and after regular intervals.",
      },
      {
        title: "Routine Maintenance",
        description:
          "Replace transmission fluid at intervals recommended by the vehicle manufacturer for optimal performance.",
      },
    ],
  },
  {
    range: "Regular",
    title: "ATF WS Regular",
    type: "engine-additives",
    images: ["/images/products/regular/atf-ws-regular.jpg"],
    href: "atf-ws-regular",
    overview: `ATF WS Regular is a specialized automatic transmission fluid formulated to meet the stringent 
    requirements of modern vehicles equipped with Toyota WS (World Standard) transmissions. It delivers 
    excellent friction stability, smooth shifting, and reliable protection against wear and oxidation.`,
    benefits: [
      "Meets Toyota WS specification for automatic transmissions",
      "Ensures smooth and precise gear shifts",
      "Provides superior wear and corrosion protection",
      "Maintains fluid stability under high thermal and mechanical stress",
      "Enhances transmission durability and fuel efficiency",
      "Compatible with vehicles requiring Toyota WS ATF",
    ],
    quantity: ["1 L", "4 L"],
    advantages: [
      {
        title: "Optimized Friction Characteristics",
        description:
          "Delivers stable friction performance to prevent shudder and ensure smooth gear engagement.",
      },
      {
        title: "Thermal and Oxidation Resistance",
        description:
          "Formulated to resist thermal degradation and oxidation, prolonging fluid life and transmission health.",
      },
      {
        title: "Wear and Corrosion Protection",
        description:
          "Protects transmission components against wear, rust, and corrosion for extended service intervals.",
      },
      {
        title: "Fuel Efficiency Enhancement",
        description:
          "Designed to reduce frictional losses, contributing to improved fuel economy.",
      },
      {
        title: "Wide Temperature Range Performance",
        description:
          "Maintains fluidity and protective properties in both hot and cold operating conditions.",
      },
      {
        title: "Extended Fluid Life",
        description:
          "Supports longer drain intervals without compromising transmission performance or protection.",
      },
    ],
    usages: [
      {
        title: "Toyota WS Transmission Models",
        description:
          "Specifically designed for use in Toyota automatic transmissions requiring WS specification fluids.",
      },
      {
        title: "Power Steering Systems",
        description:
          "Suitable for power steering systems where WS fluid compatibility is specified.",
      },
      {
        title: "Other Compatible Transmissions",
        description:
          "Can be used in other automatic transmissions recommending WS or equivalent fluids.",
      },
    ],
    direction: [
      {
        title: "Confirm Fluid Specification",
        description:
          "Refer to the vehicle’s owner manual to verify the requirement for Toyota WS transmission fluid.",
      },
      {
        title: "Drain Old Transmission Fluid",
        description:
          "Completely remove the existing fluid before refilling to prevent mixing incompatible fluids.",
      },
      {
        title: "Clean Transmission System",
        description:
          "Ensure the transmission system is clean and free from contaminants prior to refilling.",
      },
      {
        title: "Refill with ATF WS Regular",
        description:
          "Add the specified quantity of ATF WS fluid to the transmission as per manufacturer guidelines.",
      },
      {
        title: "Check and Adjust Fluid Level",
        description:
          "Verify and adjust the fluid level after refilling to ensure optimal transmission performance.",
      },
      {
        title: "Inspect for Leaks and Performance",
        description:
          "Monitor transmission operation for leaks or irregular shifting after fluid replacement.",
      },
      {
        title: "Routine Fluid Maintenance",
        description:
          "Follow recommended service intervals for fluid changes to maintain transmission longevity.",
      },
    ],
  },
  {
    range: "Regular",
    title: "Hydraulic ISO 68 Regular",
    type: "industrial",
    images: ["/images/products/regular/hydraulic-iso-68-regular.jpg"],
    href: "hydraulic-iso-68-regular",
    overview: `Hydraulic ISO 68 Regular is a high-performance hydraulic oil formulated to provide excellent 
    lubrication and protection for hydraulic systems operating under moderate to severe conditions. 
    It offers superior anti-wear, oxidation stability, and corrosion resistance, ensuring smooth system operation.`,
    benefits: [
      "Excellent anti-wear and load-carrying capabilities",
      "Protects against rust, corrosion, and foam formation",
      "Maintains viscosity and lubrication under high pressure and temperature",
      "Superior oxidation stability for extended oil life",
      "Ensures smooth and efficient hydraulic system performance",
      "Compatible with a wide range of hydraulic pumps and components",
    ],
    quantity: ["1 L", "5 L", "20 L", "208 L"],
    advantages: [
      {
        title: "Anti-Wear Protection",
        description:
          "Formulated with advanced additives to minimize wear on hydraulic components, prolonging system life.",
      },
      {
        title: "Oxidation and Thermal Stability",
        description:
          "Resists breakdown under high temperature conditions, reducing sludge and deposits formation.",
      },
      {
        title: "Corrosion and Rust Inhibition",
        description:
          "Prevents corrosion of metal surfaces, protecting system components during operation and downtime.",
      },
      {
        title: "Foam Suppression",
        description:
          "Minimizes foam formation to maintain consistent hydraulic pressure and system responsiveness.",
      },
      {
        title: "Wide Temperature Performance",
        description:
          "Maintains optimal viscosity for smooth operation across a broad temperature range.",
      },
      {
        title: "Excellent Water Separation",
        description:
          "Quickly separates from water contamination, preserving oil performance and system reliability.",
      },
    ],
    usages: [
      {
        title: "Industrial Hydraulic Systems",
        description:
          "Ideal for use in hydraulic equipment in manufacturing plants and heavy machinery.",
      },
      {
        title: "Mobile Hydraulic Equipment",
        description:
          "Suitable for construction, agricultural, and mining equipment operating in demanding conditions.",
      },
      {
        title: "Hydraulic Pumps and Valves",
        description:
          "Protects pumps, valves, and cylinders by providing stable lubrication and reducing wear.",
      },
      {
        title: "Presses and Injection Molding Machines",
        description:
          "Ensures consistent performance in high-pressure hydraulic applications.",
      },
    ],
    direction: [
      {
        title: "Check Equipment Specifications",
        description:
          "Confirm that ISO 68 hydraulic oil is recommended for your system before use.",
      },
      {
        title: "Drain Existing Fluid",
        description:
          "Completely drain the old hydraulic oil and inspect the system for contamination or wear.",
      },
      {
        title: "Clean Reservoir and Components",
        description:
          "Ensure the hydraulic reservoir and components are clean prior to refilling with new oil.",
      },
      {
        title: "Refill with Hydraulic ISO 68 Regular",
        description:
          "Pour in the recommended quantity of oil, ensuring proper filtration during filling.",
      },
      {
        title: "Monitor Fluid Level and Condition",
        description:
          "Regularly check oil levels and condition, topping off or changing oil as needed.",
      },
      {
        title: "Routine System Maintenance",
        description:
          "Follow manufacturer-recommended intervals for hydraulic oil changes to maintain optimal system health.",
      },
    ],
  },
];
