import home from "./home";

export default {
  navbar: {
    links: [
      { Home: "Home" },
      { About: "About" },
      { Solutions: "Solutions" },
      { Products: "Products" },
    ],
    contact: "Contact",
  },
  home,
} as const;
