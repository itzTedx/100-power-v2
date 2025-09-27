import type { ElementType } from "react";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTelegram,
  IconBrandX,
  IconBrandYoutube,
  IconMail,
  IconPhoneCall,
} from "@tabler/icons-react";
import { Building2 } from "lucide-react";

import {
  IconClogSpin,
  IconDashboard,
  IconThunder,
  IconWrench,
} from "@/assets/icons";
import { IconAgriculture } from "@/assets/icons/agriculture";
import { IconAirplane } from "@/assets/icons/airplane";
import { IconCar } from "@/assets/icons/car";
import { IconConstruction } from "@/assets/icons/construction";
import { IconIndustrial } from "@/assets/icons/industrial";
import { IconMilitary } from "@/assets/icons/military";
import { IconMining } from "@/assets/icons/mining";
import { IconShip } from "@/assets/icons/ship";
import { IconTrain } from "@/assets/icons/train";

export const CATEGORIES_LINKS = [
  {
    id: 1,
    title: "Engine Oil",
    href: "/products?category=engine-oil",
    description:
      "High-performance oils for maximum engine protection and efficiency.",
    image: "/images/100power.webp",
  },
  {
    id: 2,
    title: "Lubrication",
    href: "/products?category=lubrication",
    description:
      "Premium lubricants to reduce friction and extend equipment life.",
    image: "/images/power-10.webp",
  },
  {
    id: 3,
    title: "Marine & Aviation",
    href: "/products?category=marine-aviation",
    description:
      "Specialized solutions for marine vessels and aircraft engines.",
    image: "/images/100power.webp",
  },
  {
    id: 4,
    title: "Industrial",
    href: "/products?category=industrial",
    description:
      "Reliable industrial oils and lubricants for heavy-duty operations.",
    image: "/images/hydraulic.webp",
  },
];

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
    title: "Products",
    href: "/products",
    items: CATEGORIES_LINKS,
  },
  {
    id: 4,
    title: "Solutions",
    href: "/solutions",
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

export const CATEGORIES = [
  {
    id: 1,
    title: "Engine OI",
    href: "/products?category=engine-oil",
  },
  {
    id: 2,
    title: "Lubrication",
    href: "/products?category=lubrication",
  },
  {
    id: 3,
    title: "Fuel System",
    href: "/products?category=fuel-system",
  },
  {
    id: 4,
    title: "Industrial Application",
    href: "/products?category=industrial",
  },
];

export const FOOTER = [
  {
    id: 1,
    heading: "Quick Links",
    items: [
      ...NAV_LINKS,
      {
        id: 5,
        title: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    id: 2,
    heading: "Products",
    items: CATEGORIES,
  },
  {
    id: 3,
    heading: "Factory Address",
    items: [
      {
        id: 1,
        title:
          "Plot No-4, Block 5, Umm Al Thuoob, New Industrial Area, Umm Al Quwain, United Arab Emirates, PO BOX 1171",
        // href: "/",
      },
      {
        id: 2,
        title: "info@100poweruae.com",
        href: "mailto:info@100poweruae.com",
      },
      {
        id: 3,
        title: "+971 52 786 2528",
        href: "tel:+971527862528",
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
  { label: "Automotive", image: "/images/automotive.webp", Icon: IconCar },
  { label: "Railways", image: "/images/railway.webp", Icon: IconTrain },
  { label: "Mining", image: "/images/mining.webp", Icon: IconMining },
  { label: "Aviation", image: "/images/aviation.webp", Icon: IconAirplane },
  { label: "Marine & Shipping", image: "/images/marine.webp", Icon: IconShip },
  {
    label: "Construction",
    image: "/images/construction.webp",
    Icon: IconConstruction,
  },
  {
    label: "Agriculture",
    image: "/images/agriculture.webp",
    Icon: IconAgriculture,
  },
  {
    label: "Defense & Military",
    image: "/images/military.webp",
    Icon: IconMilitary,
  },
  {
    label: "Industrial Equipment",
    image: "/images/industrial.webp",
    Icon: IconIndustrial,
  },
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

export const CONTACT = [
  {
    label: "We're here to help",
    title: "Email",
    description: "info@100poweruae.com",
    href: "mailto:info@100poweruae.com",
    Icon: IconMail,
  },
  {
    label: "Call us",
    title: "Phone",
    description: "+971 52 786 2528",
    href: "tel:+971527862528",
    Icon: IconPhoneCall,
  },
  {
    label: "Visit our office HQ",
    title: "Office",
    description: "View on Google Map",
    href: "https://share.google/NGaslvCPA7JsjTjKo",
    Icon: Building2,
  },
];
