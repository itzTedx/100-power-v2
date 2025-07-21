import Image from "next/image";

import { ArrowUpRight, Dot } from "lucide-react";

import { IconLogo } from "@/assets/logo";
import { Video } from "@/components/sections/home/video";
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

export default function Home() {
  return (
    <main>
      <section className="container py-12">
        <div className="space-y-5 py-6 text-center">
          <Badge variant="primary">Engineered to Protect</Badge>

          <h1 className="font-helvetica text-6xl font-bold tracking-wide">
            Advanced Additives for Peak <br /> Performance and Lasting{" "}
            <span className="text-primary">Protection.</span>
          </h1>
          <p className="text-xl">
            Next-gen lubrication technology to maximize performance, minimize
            friction, and protect the planet.
          </p>
          <Button>
            Explore Solutions <ArrowUpRight size={18} />
          </Button>
        </div>
        <Image
          src="/images/hero.webp"
          width={1600}
          height={784}
          alt=""
          className="object-contain"
          quality={100}
          priority
        />
      </section>
      <section className="container space-y-8 pb-12">
        <Badge>
          <IconLogo />
          Who we are
        </Badge>
        <Separator />
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 grid grid-cols-3 gap-2">
            {WHO_WE_ARE.map(({ label, Icon, title, description }, i) => (
              <Card key={label} className="group justify-between">
                <CardHeader>
                  <p className="text-muted-foreground">{label}</p>
                </CardHeader>
                <CardContent>
                  <div className="group-first: group-first: grid size-20 place-content-center rounded-full border border-[oklch(0.9557_0.1104_102.71)] bg-[oklch(0.9101_0.1105_88.94)] to-[oklch(0.9557_0.1104_102.71)] group-first:bg-gradient-to-t group-first:from-[oklch(0.6519_0.1345_77.03)]/50 group-first:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset_0px_4px_8px_2to-5%]">
                    <Icon className="text-primary-foreground" />
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
          <div className="col-span-1 space-y-4 py-3">
            <Badge>
              <IconLogo />
              Who we are
            </Badge>
            <Separator />
            <div className="space-y-4">
              <h2 className="text-4xl font-medium tracking-tighter text-balance">
                We develop{" "}
                <span className="text-primary">
                  eco-friendly, high-performance
                </span>{" "}
                additives that protect your vehicle and extend its life for a
                better future.
              </h2>
              <p className="text-xl tracking-tight text-balance">
                We are 100 Power, bringing a new era of performance with
                advanced solutions built for the engines of the future.
              </p>
              <Button variant="secondary">
                Learn More <ArrowUpRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Video />
      <div className="container space-y-10 py-12">
        <Badge>
          <Dot />
          Flagship Products
        </Badge>
        <Separator />
        <div className="grid grid-cols-2 gap-4">
          <h2 className="font-helvetica text-5xl font-bold">
            High-Performance Products for Demanding Machines
          </h2>
          <div>
            <p className="mb-2 text-2xl tracking-tight">
              Each product is developed with precision and purpose - to enhance
              durability, reduce wear, and improve performance under extreme
              conditions.
            </p>
            <Button variant="secondary">
              Explore Products <ArrowUpRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
