import home from "./home";

export default {
  navbar: {
    links: [
      { Home: "Дом" },
      { About: "О" },
      { Solutions: "Решения" },
      { Products: "Продукты" },
    ],
    contact: "Контакт",
  },
  home,
} as const;
