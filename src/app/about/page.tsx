import { IconArrowUpRight } from "@tabler/icons-react";
import { Dot } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <main className="container py-12">
      <section>
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
          <Button>
            Contact us <IconArrowUpRight size={18} />
          </Button>
        </div>
      </section>
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
        <h3 className="text-center text-2xl font-bold">Our Mission</h3>
        <div className="mx-auto grid max-w-3xl grid-cols-2 items-center">
          <div className="mx-4 aspect-video bg-red-300"></div>

          <div className="flex h-full items-center border-l px-4">
            <p>
              At 100 Power, our mission is driven by innovation and science.
              Through ongoing R&D, we’ve developed a micro-metallurgical formula
              that protects metal surfaces, reduces friction, extends equipment
              life, and cuts maintenance costs. We’re committed to delivering
              high-performance, sustainable solutions that boost efficiency and
              support environmental care.
            </p>
          </div>
        </div>
        <h3 className="text-center text-2xl font-bold">Our Mission</h3>
        <div className="mx-auto grid max-w-3xl grid-cols-2 items-center">
          <div className="flex h-full items-center border-r px-4">
            <p>
              At 100 Power, our mission is driven by innovation and science.
              Through ongoing R&D, we’ve developed a micro-metallurgical formula
              that protects metal surfaces, reduces friction, extends equipment
              life, and cuts maintenance costs. We’re committed to delivering
              high-performance, sustainable solutions that boost efficiency and
              support environmental care.
            </p>
          </div>
          <div className="mx-4 aspect-video bg-red-300"></div>
        </div>
        <h3 className="text-center text-2xl font-bold">Our Mission</h3>
      </section>
    </main>
  );
}
