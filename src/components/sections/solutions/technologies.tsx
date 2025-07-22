import { Dot } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { TechStack } from "../tech-stack";

export const SolutionTechnologies = () => {
  return (
    <section id="technology" className="container py-16">
      <div className="grid grid-cols-3 gap-2 md:grid-cols-5 md:gap-3">
        <div
          className="bg-accent h-12 rounded md:h-20"
          aria-hidden="true"
        ></div>
        <div
          className="bg-accent h-12 rounded md:h-20"
          aria-hidden="true"
        ></div>
        <div
          className="bg-accent h-12 rounded md:h-20"
          aria-hidden="true"
        ></div>
        <div
          className="bg-accent h-12 rounded md:h-20"
          aria-hidden="true"
        ></div>
        <div
          className="bg-accent h-12 rounded md:h-20"
          aria-hidden="true"
        ></div>
      </div>
      <div className="container max-w-7xl space-y-8 pt-20">
        <Badge>
          <Dot />
          Our Core Technologies
        </Badge>
        <Separator />
        <div className="divide-y">
          <TechStack />
        </div>
      </div>
    </section>
  );
};
