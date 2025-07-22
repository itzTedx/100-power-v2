import { IconTrendingUp } from "@tabler/icons-react";
import { Dot } from "lucide-react";

import { IconClock, IconOdometer, IconThunder } from "@/assets/icons";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { TechStack } from "../tech-stack";

export const SolutionTechnologies = () => {
  return (
    <section id="technology" className="container py-16">
      <div className="grid grid-cols-3 gap-2 md:grid-cols-5 md:gap-3">
        <div className="relative flex items-center overflow-hidden rounded border border-white bg-white/80 py-4 shadow-[0px_4px_4px_0px_hsla(32,94,59,.06),0px_4px_9px_0px_hsla(32,98,14,.08)] md:h-20">
          <div className="font-helvetica flex items-center gap-3 px-3 pr-2">
            <p className="text-primary text-3xl font-bold">8x</p>
            <p className="text-lg leading-tight font-medium text-[#AF5E00]">
              Extend oil
              <br /> change intervals
            </p>
          </div>
          <IconClock className="absolute -right-5 size-20 text-[#FEC966]" />
        </div>
        <div className="relative flex items-center overflow-hidden rounded border border-white bg-white/80 py-4 shadow-[0px_4px_4px_0px_hsla(32,94,59,.06),0px_4px_9px_0px_hsla(32,98,14,.08)] md:h-20">
          <div className="font-helvetica flex items-center gap-3 px-3 pr-2">
            <p className="text-primary text-3xl font-bold">8x</p>
            <p className="text-lg leading-tight font-medium text-[#AF5E00]">
              Increase equipment <br />
              and machinery life
            </p>
          </div>
          <IconThunder className="absolute -right-10 size-24 text-[#FEC966]" />
        </div>
        <div className="relative flex items-center overflow-hidden rounded border border-white bg-white/80 py-4 shadow-[0px_4px_4px_0px_hsla(32,94,59,.06),0px_4px_9px_0px_hsla(32,98,14,.08)] md:h-20">
          <div className="font-helvetica flex items-center gap-3 px-3 pr-2">
            <IconTrendingUp className="text-primary size-8 shrink-0" />

            <p className="text-lg leading-tight font-medium text-[#AF5E00]">
              Achieve up to 20% <br /> fuel savings
            </p>
          </div>
          <IconOdometer className="absolute -right-4 size-20 text-[#FEC966]" />
        </div>
        <div className="relative flex items-center overflow-hidden rounded border border-white bg-white/80 py-4 shadow-[0px_4px_4px_0px_hsla(32,94,59,.06),0px_4px_9px_0px_hsla(32,98,14,.08)] md:h-20">
          <div className="font-helvetica flex items-center gap-3 px-3 pr-2">
            <p className="text-primary text-3xl font-bold">95%</p>

            <p className="text-lg leading-tight font-medium text-[#AF5E00]">
              Eliminate friction <br /> and wear 
            </p>
          </div>
          <IconOdometer className="absolute -right-4 size-20 text-[#FEC966]" />
        </div>
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
