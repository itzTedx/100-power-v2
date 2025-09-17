import home from "./home";

export default {
  navbar: {
    links: [
      { Home: "بيت" },
      { About: "من نحن" },
      { Solutions: "الحلول" },
      { Products: "منتجات" },
    ],
    contact: "اتصال",
  },
  home,
} as const;
