export default {
  navbar: {
    links: [
      { Home: "Home" },
      { About: "About" },
      { Products: "Products" },
      { Solutions: "Solutions" },
    ],
    contact: "Contact",
  },
  cta: {
    title: "Ready to Power up your Operations?",
    description:
      "Talk to our team to discover how 100 Power can reduce friction, cut costs, and boost efficiency across your operations.",
    button: "Talk to an expert",
  },
  footer: {
    title: "Hundred Power Trading LLC",
    description:
      "Powering industries with advanced lubrication technology to reduce friction, extend machinery life, and protect the planet.",
    links: {
      privacy: "Privacy Policy",
      terms: "Terms & Condition",
    },
    // New: Footer sections and link labels for i18n
    sections: {
      quickLinks: "Quick Links",
      products: "Products",
      factoryAddress: "Factory Address",
    },
    nav: {
      home: "Home",
      about: "About",
      solutions: "Solutions",
      products: "Products",
      contact: "Contact",
    },
    categories: {
      engineAdditives: "Engine Additives",
      lubrication: "Lubrication",
      fuelSystem: "Fuel System",
      industrial: "Industrial Application",
    },
    copyright: "©{year} Hundred Power LLC, All rights reserved",
    developer: "Designed & Developed by Ziron Media",
  },
} as const;
