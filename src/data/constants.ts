import type { ElementType } from "react";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTelegram,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";

import {
  IconClogSpin,
  IconDashboard,
  IconThunder,
  IconWrench,
} from "@/assets/icons";

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

interface SubFeature {
  id: number;
  title: string;
  description: string;
}

export interface Feature {
  title: string;
  subtitle: string;
  description: string;
  Icon: ElementType;
  image: string;
  features: SubFeature[];
}

export const FEATURES: Feature[] = [
  {
    title: "Micro Metallurgical Process",
    subtitle: "Stronger. Smoother. Smarter Metal.",
    description:
      "Our proprietary micro-metallurgical process creates ultra-hard, smooth surfaces that reduce wear, extend lifespan, and enhance oil flow by cleaning and polishing engine internals.",
    Icon: IconThunder,
    image: "/images/micro-process.webp",
    features: [
      {
        id: 1,
        title: "Eliminates friction",
        description:
          "Effectively reduces friction, ensuring smoother operation, improved efficiency, and reduced engine wear.",
      },
      {
        id: 2,
        title: "Polishes internal surfaces",
        description:
          "Gently polishes internal engine surfaces to restore performance, reduce noise, and extend vehicle life.",
      },
      {
        id: 3,
        title: "Prevents sludge and build-up",
        description:
          "Prevents sludge, deposits, and contaminants, keeping engine parts clean and avoiding blockages.",
      },
      {
        id: 4,
        title: "Increases durability under stress",
        description:
          "Boosts engine part’s strength and resilience to handle high temperatures, heavy loads, and harsh conditions.",
      },
    ],
  },
  {
    title: "Anti Friction Technology",
    subtitle: "Friction - Resistant by Design",
    description:
      "Our advanced AFT technology creates a protective micro-layer that reduces wear, noise, and vibration while resisting corrosion for longer, smoother equipment performance.",
    Icon: IconClogSpin,
    image: "/images/anti-friction.webp",
    features: [
      {
        id: 1,
        title: "Reduces metal-to-metal contact",
        description:
          "Forms a protective micro-layer that reduces metal contact, lowering friction and preventing wear.",
      },
      {
        id: 2,
        title: "Minimizes noise and vibration",
        description:
          "Dampens harsh engine movement, minimizing noise and vibration for a smoother, quieter drive.",
      },
      {
        id: 3,
        title: "Resists abrasion and oxidation",
        description:
          "Shields components from wear and oxidation damage, preserving surfaces for durability and cleaner operation.",
      },
      {
        id: 4,
        title: "Optimizes reliability and uptime",
        description:
          "Improves engine stability and dependability, reducing breakdown risks and ensuring maximum uptime.",
      },
    ],
  },
];

export const INDUSTRIES = [
  { label: "Automotive", image: "/images/automotive.webp" },
  { label: "Railways", image: "/images/railway.webp" },
  { label: "Mining", image: "/images/mining.webp" },
  { label: "Marine & Shipping", image: "/images/marine.webp" },
  { label: "Construction", image: "/images/construction.webp" },
  { label: "Agriculture", image: "/images/agriculture.webp" },
  { label: "Defense & Military", image: "/images/military.webp" },
  { label: "Industrial Equipment", image: "/images/industrial.webp" },
];

export const COMMITMENT = [
  {
    label: "01 / Quality",
    title: "Engineered to Excel",
    description:
      "Every product undergoes rigorous testing to ensure unmatched performance, reliability, and durability in real-world conditions.",
    Icon: IconDashboard,
  },
  {
    label: "02 / Sustainability",
    title: "Engineered to Excel",
    description:
      "We are committed to reducing environmental impact through efficient manufacturing practices and cleaner, smarter lubricant technologies.",
    Icon: IconWrench,
  },
  {
    label: "03 / Integrity",
    title: "Built on Trust",
    description:
      "We foster long-term relationships built on transparency, accountability, and a commitment to doing what's right - always.",
    Icon: IconDashboard,
  },
];
