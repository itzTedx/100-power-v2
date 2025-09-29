export default {
  navbar: {
    links: [
      { Home: "Home" },
      { About: "About" },
      {
        Products: "Products",
        items: [
          {
            title: "Engine Oil",
            description:
              "High-performance oils for maximum engine protection and efficiency.",
          },
          {
            title: "Lubrication",
            description:
              "Premium lubricants to reduce friction and extend equipment life.",
          },
          {
            title: "Marine",
            description: "High-performance oils for ships and marine engines.",
          },
          {
            title: "Aviation",
            description:
              "Reliable lubrication for aircraft safety and performance.",
          },
          {
            title: "Locomotive",
            description:
              "High-performance oils and lubricants for trains and rail engines.",
          },
          {
            title: "Industrial",
            description:
              "Reliable industrial oils and lubricants for heavy-duty operations.",
          },
        ],
      },
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
      engineAdditives: "Engine oil",
      lubrication: "Lubrication",
      aviation: "Aviation",
      marine: "Marine",
      locomotive: "Locomotive",
      industrial: "Industrial Application",
    },
    copyright: "©{year} Hundred Power LLC, All rights reserved",
    developer: "Designed & Developed by Ziron Media",
  },
} as const;
