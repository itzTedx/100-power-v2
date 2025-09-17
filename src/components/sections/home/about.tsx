import { ArrowUpRight } from "lucide-react";

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

import { IconLogo } from "@/assets/logo";

import { WHO_WE_ARE } from "@/data/constants";

export const About = () => {
  return (
    <section
      aria-labelledby="about-heading"
      className="container space-y-6 pb-8 sm:pb-12 md:space-y-8"
    >
      <Badge>
        <IconLogo />
        Who we are
      </Badge>
      <Separator />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:col-span-2 md:grid-cols-3">
          {WHO_WE_ARE.map(({ label, Icon, title, description }, i) => (
            <Card
              aria-labelledby={`about-feature-${i}`}
              className="group justify-between"
              key={label}
            >
              <CardHeader>
                <p className="text-muted-foreground">{label}</p>
              </CardHeader>
              <CardContent>
                <div className="group-first: group-first: grid size-16 place-content-center rounded-full border border-[oklch(0.9557_0.1104_102.71)] bg-[oklch(0.9101_0.1105_88.94)] to-[oklch(0.9557_0.1104_102.71)] group-first:bg-gradient-to-t group-first:from-[oklch(0.6519_0.1345_77.03)]/50 group-first:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset_0px_4px_8px_2to-5%] sm:size-20">
                  <Icon aria-hidden className="text-primary-foreground" />
                </div>
                <div className="mt-4 space-y-3">
                  <CardTitle className="font-helvetica font-normal text-xl sm:text-2xl md:text-3xl">
                    <h3 id={`about-feature-${i}`}>{title}</h3>
                  </CardTitle>
                  <CardDescription>
                    <p className="text-base tracking-tight sm:text-lg">
                      {description}
                    </p>
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="space-y-2 py-3 md:col-span-1">
          <Badge>
            <IconLogo />
            Who we are
          </Badge>
          <Separator />
          <div className="space-y-4">
            <h2
              className="text-balance font-medium text-2xl tracking-tighter sm:text-3xl md:text-4xl"
              id="about-heading"
            >
              We develop{" "}
              <span className="text-primary">
                eco-friendly, high-performance
              </span>{" "}
              additives that protect your vehicle and extend its life for a
              better future.
            </h2>
            <p className="text-balance text-base tracking-tight sm:text-lg">
              We are 100 Power, bringing a new era of performance with advanced
              solutions built for the engines of the future.
            </p>
            <Button
              aria-label="Learn more about 100 Power"
              className="w-full sm:w-auto"
              variant="secondary"
            >
              Learn More <ArrowUpRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
