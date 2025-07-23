import { Dot } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { TechStack } from "../tech-stack";
import { Values } from "./values";

export const SolutionTechnologies = () => {
  return (
    <section id="technology" className="container py-16">
      <Values />
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
