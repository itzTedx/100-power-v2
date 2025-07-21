import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTelegram,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";

import { IconDashboard, IconWrench } from "@/assets/icons";

import { PRODUCTS } from "./products";

export const NAV_LINKS = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About",
    href: "/about",
  },
  {
    id: 3,
    title: "Solutions",
    href: "/solutions",
  },
  {
    id: 4,
    title: "Products",
    href: "/products",
  },
];

export const WHO_WE_ARE = [
  {
    label: "01 / Max Power",
    title: "Boost Performance & Lifespan",
    description:
      "Extend the life of engines and machinery by up to 10x while boosting overall performance with our additives.",
    Icon: IconDashboard,
  },
  {
    label: "02 / Low Maintenance",
    title: "Cut Maintenance & Downtime",
    description:
      "Reduce wear, friction, and repair needs by up to 60% - keeping your equipment running longer with fewer interruptions.",
    Icon: IconWrench,
  },
  {
    label: "03 / Eco Efficiency",
    title: "Drive Sustainability & Efficiency",
    description:
      "Lower emissions, cut oil and fuel consumption, and support a cleaner planet through lubrication solutions.",
    Icon: IconDashboard,
  },
];

export const FOOTER = [
  {
    id: 1,
    heading: "Quick Links",
    items: [
      ...NAV_LINKS.slice(0, 3),
      {
        id: 4,
        title: "Contact",
        href: "/",
      },
    ],
  },
  {
    id: 2,
    heading: "Products",
    items: [...PRODUCTS],
  },
  {
    id: 3,
    heading: "Contact",
    items: [
      {
        id: 1,
        title:
          "Al Moosa Tower 2 - 2403, 24th Floor, Sheikh Zayed Rd, near Emirates Tower Metro, Dubai, United Arab Emirates",
      },
      {
        id: 2,
        title: "support@tirrentglobal.com",
      },
      {
        id: 3,
        title: "+971 4 557 9964",
      },
    ],
  },
];

export const SOCIALS = [
  {
    id: 1,
    icon: IconBrandInstagram,
    href: "/",
  },
  {
    id: 2,
    icon: IconBrandX,
    href: "/",
  },
  {
    id: 3,
    icon: IconBrandTelegram,
    href: "/",
  },
  {
    id: 4,
    icon: IconBrandYoutube,
    href: "/",
  },
  {
    id: 5,
    icon: IconBrandPinterest,
    href: "/",
  },
  {
    id: 6,
    icon: IconBrandFacebook,
    href: "/",
  },
];
