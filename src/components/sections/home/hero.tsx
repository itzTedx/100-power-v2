import Image from "next/image";

import { IconArrowUpRight } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="container py-9 md:py-12" aria-labelledby="hero-heading">
      <div className="space-y-5 text-center max-md:pb-6 md:py-6">
        <Badge variant="primary">Engineered to Protect</Badge>

        <h1
          id="hero-heading"
          className="font-helvetica text-4xl font-bold tracking-wide sm:text-5xl md:text-6xl"
        >
          Advanced Additives for Peak <br className="hidden md:block" />{" "}
          Performance and Lasting{" "}
          <span className="text-primary">Protection.</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl">
          Next-gen lubrication technology to maximize performance, minimize
          friction, and protect the planet.
        </p>
        <Button
          className="w-full shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset,0px_4px_8px_0px_hsla(32,100,43,.25),0px_12px_16px_0px_hsla(32,97,17,.25)] sm:w-auto"
          aria-label="Explore lubrication solutions"
        >
          Explore Solutions <IconArrowUpRight size={18} />
        </Button>
      </div>
      <div className="relative h-48 w-full sm:h-72 md:h-[22rem] lg:h-[36rem]">
        <Image
          src="/images/hero.webp"
          fill
          alt="High-performance lubrication technology - 100 Power hero image"
          className="object-contain"
          quality={100}
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1600px"
        />
      </div>
    </section>
  );
};
