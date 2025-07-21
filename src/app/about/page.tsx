import { IconArrowUpRight } from "@tabler/icons-react";
import { Dot } from "lucide-react";

import { DotMap } from "@/assets/dot-map";
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
    url: "https://100power.com/about",
    siteName: "100 Power",
    type: "website",
  },
});

export default function AboutPage() {
  return (
    <main className="container py-12">
      <header>
        <div className="mx-auto max-w-4xl space-y-5 py-6 text-center">
          <Badge variant="primary">Engineered to Protect</Badge>

          <h1 className="font-helvetica text-6xl font-bold tracking-wide">
            Powering Performance with{" "}
            <span className="text-primary">Innovation and Integrity</span>
          </h1>
          <p className="text-xl">
            At 100 Power, we develop advanced micro-metallurgical additives that
            protect and enhance machinery across industries worldwide—delivering
            reliability, sustainability, and unmatched quality.
          </p>
          <Button asChild>
            <a href="/contact" aria-label="Contact 100 Power">
              Contact us <IconArrowUpRight size={18} />
            </a>
          </Button>
        </div>
      </header>
      <section className="space-y-8 py-12">
        <Badge>
          <Dot /> About 100 Power
        </Badge>
        <Separator />
        <div className="grid grid-cols-3 gap-4">
          <h2 className="font-helvetica text-4xl leading-normal font-bold">
            Engineering Excellence. Powering Performance.
          </h2>
          <article className="font-helvetica col-span-2 space-y-4 text-2xl leading-relaxed">
            <p>
              100 Power is an innovation-driven company headquartered in the
              USA, with state-of-the-art manufacturing facilities in California
              and the UAE. We specialize in advanced micro-metallurgical
              additive technology designed to dramatically enhance the
              performance, reliability, and lifespan of engines and machinery
              across industries.
            </p>
            <p>
              Built on decades of military-grade R&D, our solutions create a
              durable, polished-like microlayer that reduces friction, resists
              extreme temperatures and pressure, and protects against wear.
              Today, our technologies serve sectors ranging from defense to
              automotive, construction, marine, mining, and agriculture.
            </p>
            <p>
              Our global footprint spans the USA, India, and UAE—delivering
              excellence through cutting-edge lubricant products and a
              commitment to sustainability and performance.
            </p>
          </article>
        </div>
      </section>
      <Separator />
      <section className="space-y-6 py-12">
        <h2 className="text-center text-2xl font-bold">Our Mission</h2>
        <div className="mx-auto grid max-w-3xl grid-cols-2 items-center">
          <div
            className="mx-4 aspect-video bg-red-300"
            aria-hidden="true"
          ></div>

          <div className="flex h-full items-center border-l px-4">
            <p className="font-helvetica text-pretty">
              At 100 Power, our mission is driven by innovation and science.
              Through ongoing R&D, we’ve developed a micro-metallurgical formula
              that protects metal surfaces, reduces friction, extends equipment
              life, and cuts maintenance costs. We’re committed to delivering
              high-performance, sustainable solutions that boost efficiency and
              support environmental care.
            </p>
          </div>
        </div>
        <h2 className="text-center text-2xl font-bold">Our Vision</h2>
        <div className="mx-auto grid max-w-3xl grid-cols-2 items-center">
          <div className="flex h-full items-center border-r px-4">
            <p className="font-helvetica text-pretty">
              Our vision is to be the most trusted global provider of advanced
              lubricant technologies. We aim to deliver world-class products
              that meet international standards and exceed customer
              expectations. By partnering with businesses worldwide, we build
              lasting relationships rooted in performance, integrity, and shared
              success.
            </p>
          </div>
          <div
            className="mx-4 aspect-video bg-red-300"
            aria-hidden="true"
          ></div>
        </div>
        <h2 className="text-center text-2xl font-bold">Our Values</h2>
        <div className="grid grid-cols-5 gap-3">
          <div className="bg-accent h-20" aria-hidden="true"></div>
          <div className="bg-accent h-20" aria-hidden="true"></div>
          <div className="bg-accent h-20" aria-hidden="true"></div>
          <div className="bg-accent h-20" aria-hidden="true"></div>
          <div className="bg-accent h-20" aria-hidden="true"></div>
        </div>
      </section>
      <section className="space-y-8 py-12">
        <Badge>
          <Dot /> Our Commitment
        </Badge>
        <Separator />
        <div className="grid grid-cols-2 gap-12">
          <h2 className="font-helvetica text-5xl font-bold">
            Fueling Trust, Performance & Progress
          </h2>
          <p className="text-2xl">
            We uphold the highest standards in every aspect of our operations
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {WHO_WE_ARE.map(({ label, Icon, title, description }, i) => (
            <Card key={label} className="group justify-between">
              <CardHeader>
                <p className="text-muted-foreground">{label}</p>
              </CardHeader>
              <CardContent className="mt-12">
                <div className="group-first: group-first: grid size-20 place-content-center rounded-full border border-[oklch(0.9557_0.1104_102.71)] bg-[oklch(0.9101_0.1105_88.94)] to-[oklch(0.9557_0.1104_102.71)] group-first:bg-gradient-to-t group-first:from-[oklch(0.6519_0.1345_77.03)]/50 group-first:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset_0px_4px_8px_2to-5%]">
                  <Icon
                    className="text-primary-foreground"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-4 space-y-3">
                  <CardTitle className="font-helvetica text-3xl font-normal">
                    <h3>{title}</h3>
                  </CardTitle>
                  <CardDescription>
                    <p className="text-lg tracking-tight">{description}</p>
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="space-y-8 pt-12">
        <Badge>
          <Dot /> Global Presence
        </Badge>
        <Separator />
        <div className="grid grid-cols-2 gap-12">
          <h2 className="font-helvetica text-5xl font-bold">
            Reaching Every Corner of the Globe
          </h2>
          <div>
            <p className="text-2xl">
              With manufacturing plants in California and the UAE, and sales and
              support offices in the USA, India, and UAE, 100 Power operates on
              a truly global scale. Our extensive distribution network ensures
              our products are accessible to customers around the world.{" "}
            </p>{" "}
            <p className="text-2xl">
              We proudly serve markets in North America, the Middle East,
              Europe, Asia, and beyond, adapting to diverse regulatory
              requirements and customer needs with localized expertise.
            </p>
          </div>
        </div>
        <DotMap className="w-full" aria-label="100 Power global presence map" />
      </section>
    </main>
  );
}
