import { Dot } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { TechStack } from "../tech-stack";

export const Technologies = () => {
  return (
    <section aria-labelledby="technologies-heading" className="py-12">
      <div className="container max-w-5xl py-20 text-center">
        <h2
          className="text-balance font-bold font-helvetica text-6xl"
          id="technologies-heading"
        >
          Built for <span className="text-primary">Performance.</span> Powered
          by Responsibility
        </h2>
        <p className="mt-3 text-balance text-xl tracking-tight">
          We reduce emissions, prevent pollution, and contribute to a cleaner
          industrial future by reducing oil waste, extending equipment life, and
          minimizing energy loss.
        </p>
      </div>
      <div className="container max-w-7xl space-y-8 pt-20">
        <Badge>
          <Dot />
          Our Core Technologies
        </Badge>
        <Separator />
        <TechStack />
      </div>
    </section>
  );
};
