import { IconArrowUpRight } from "@tabler/icons-react";
import { Dot } from "lucide-react";

import { DotMap } from "@/assets/dot-map";
import { Values } from "@/components/sections/solutions/values";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { WHO_WE_ARE } from "@/data/constants";

export const generateMetadata = () => ({
  title: "About Us | 100 Power",
  description:
    "Learn about 100 Power: our mission, vision, global presence, and commitment to advanced micro-metallurgical additives for machinery and engines worldwide.",
  openGraph: {
    title: "About Us | 100 Power",
    description:
      "Discover 100 Power's innovation in micro-metallurgical additives, our global reach, and our dedication to performance, reliability, and sustainability.",
    url: "https://www.100poweruae.com/about",
    siteName: "100 Power",
    type: "website",
  },
});

export default function AboutPage() {
  return (
    <main className="container py-8 md:py-12">
      <header>
        <div className="mx-auto max-w-4xl space-y-5 px-2 py-6 text-center md:px-0">
          <Badge variant="primary">Engineered to Protect</Badge>

          <h1 className="font-helvetica text-3xl font-bold tracking-wide sm:text-5xl md:text-6xl">
            Powering Performance with{" "}
            <span className="text-primary">Innovation and Integrity</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl">
            At 100 Power, we develop advanced micro-metallurgical additives that
            protect and enhance machinery across industries worldwide—delivering
            reliability, sustainability, and unmatched quality.
          </p>
          <Button asChild className="w-full sm:w-auto">
            <a href="/contact" aria-label="Contact 100 Power">
              Contact us <IconArrowUpRight size={18} />
            </a>
          </Button>
        </div>
      </header>
      <section className="space-y-8 py-8 md:py-12">
        <Badge>
          <Dot /> About 100 Power
        </Badge>
        <Separator />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4">
          <h2 className="font-helvetica text-center text-2xl leading-normal font-bold sm:text-3xl md:text-left md:text-4xl">
            Engineering Excellence. Powering Performance.
          </h2>
          <article className="font-helvetica col-span-2 space-y-4 text-base leading-relaxed sm:text-xl md:text-2xl">
            <h3 className="text-xl font-medium md:text-3xl">
              Since 2017 - Headquartered in the UAE
            </h3>
            <p>
              100 Power is an innovation-led company with advanced manufacturing
              facilities in the UAE and California, USA. We specialize in
              cutting-edge micro-metallurgical additive technology engineered to
              significantly boost the performance, durability, and reliability
              of engines and industrial machinery.
            </p>
            <p>
              Backed by decades of military-grade R&D, our products form a
              polished-like microlayer that reduces friction, withstands extreme
              temperatures and pressure, and protects against wear.
            </p>
            <p>
              All ingredients are exclusively sourced from the USA, ensuring
              unmatched quality and performance. Today, our technologies power
              sectors such as defense, automotive, construction, marine, mining,
              and agriculture.
            </p>
          </article>
        </div>
      </section>
      <Separator />
      <section className="space-y-6 py-8 md:py-12">
        <h2 className="text-center text-xl font-bold sm:text-2xl">
          Our Mission
        </h2>
        <div className="mx-auto grid max-w-3xl grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div
            className="mx-0 aspect-video w-full rounded-lg bg-red-300 md:mx-4"
            aria-hidden="true"
          ></div>

          <div className="flex h-full items-center border-t px-2 pt-4 md:border-t-0 md:border-l md:px-4 md:pt-0">
            <p className="font-helvetica text-base text-pretty sm:text-lg md:text-xl">
              At 100 Power, our mission is driven by innovation and science.
              Through ongoing R&D, we’ve developed a micro-metallurgical formula
              that protects metal surfaces, reduces friction, extends equipment
              life, and cuts maintenance costs. We’re committed to delivering
              high-performance, sustainable solutions that boost efficiency and
              support environmental care.
            </p>
          </div>
        </div>
        <h2 className="text-center text-xl font-bold sm:text-2xl">
          Our Vision
        </h2>
        <div className="mx-auto grid max-w-3xl grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div className="flex h-full items-center border-b px-2 pb-4 md:border-r md:border-b-0 md:px-4 md:pb-0">
            <p className="font-helvetica text-base text-pretty sm:text-lg md:text-xl">
              Our vision is to be the most trusted global provider of advanced
              lubricant technologies. We aim to deliver world-class products
              that meet international standards and exceed customer
              expectations. By partnering with businesses worldwide, we build
              lasting relationships rooted in performance, integrity, and shared
              success.
            </p>
          </div>
          <div
            className="mx-0 aspect-video w-full rounded-lg bg-red-300 md:mx-4"
            aria-hidden="true"
          ></div>
        </div>
        <h2 className="text-center text-xl font-bold sm:text-2xl">
          Our Values
        </h2>
        <Values />
      </section>
      <section className="space-y-8 py-8 md:py-12">
        <Badge>
          <Dot /> Our Commitment
        </Badge>
        <Separator />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <h2 className="font-helvetica text-center text-3xl font-bold sm:text-4xl md:text-left md:text-5xl">
            Fueling Trust, Performance & Progress
          </h2>
          <p className="text-center text-base sm:text-xl md:text-left md:text-2xl">
            We uphold the highest standards in every aspect of our operations
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-2">
          {WHO_WE_ARE.map(({ label, Icon, title, description }, i) => (
            <Card key={label} className="group justify-between">
              <CardHeader>
                <p className="text-muted-foreground">{label}</p>
              </CardHeader>
              <CardContent className="mt-8 md:mt-12">
                <div className="group-first: group-first: grid size-16 place-content-center rounded-full border border-[oklch(0.9557_0.1104_102.71)] bg-[oklch(0.9101_0.1105_88.94)] to-[oklch(0.9557_0.1104_102.71)] group-first:bg-gradient-to-t group-first:from-[oklch(0.6519_0.1345_77.03)]/50 group-first:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset_0px_4px_8px_2to-5%] md:size-20">
                  <Icon
                    className="text-primary-foreground"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-2 space-y-2 md:mt-4 md:space-y-3">
                  <CardTitle className="font-helvetica text-xl font-normal md:text-3xl">
                    <h3>{title}</h3>
                  </CardTitle>
                  <CardDescription>
                    <p className="text-base tracking-tight md:text-lg">
                      {description}
                    </p>
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="space-y-8 pt-8 md:pt-12">
        <Badge>
          <Dot /> Global Presence
        </Badge>
        <Separator />
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <h2 className="font-helvetica text-center text-3xl font-bold sm:text-4xl md:text-left md:text-5xl">
            Reaching Every Corner of the Globe
          </h2>
          <div>
            <p className="text-base sm:text-xl md:text-2xl">
              With manufacturing plants in California and the UAE, and sales and
              support offices in the USA, India, and UAE, 100 Power operates on
              a truly global scale. Our extensive distribution network ensures
              our products are accessible to customers around the world.{" "}
            </p>{" "}
            <p className="text-base sm:text-xl md:text-2xl">
              We proudly serve markets in North America, the Middle East,
              Europe, Asia, and beyond, adapting to diverse regulatory
              requirements and customer needs with localized expertise.
            </p>
          </div>
        </div>
        <DotMap
          className="h-auto w-full"
          aria-label="100 Power global presence map"
        />
      </section>
    </main>
  );
}
