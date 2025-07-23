import { IconTrendingDown3, IconTrendingUp } from "@tabler/icons-react";

import {
  IconClock,
  IconCo2,
  IconGears,
  IconOdometer,
  IconThunder,
} from "@/assets/icons";

export const Values = () => {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 md:gap-3">
      <div className="relative flex items-center overflow-hidden rounded-sm border border-white bg-neutral-50 py-4 shadow-[0px_4px_4px_0px_hsla(32,94,59,.06),0px_4px_9px_0px_hsla(32,98,14,.08)] md:h-20">
        <div className="font-helvetica z-10 flex items-center gap-3 px-3 pr-2">
          <p className="text-primary text-xl font-bold sm:text-2xl md:text-3xl">
            8x
          </p>
          <p className="text-sm leading-tight font-medium text-[#AF5E00] md:text-lg">
            Extend oil
            <br /> change intervals
          </p>
        </div>
        <div className="absolute inset-0 z-1 bg-gradient-to-r from-neutral-50 via-neutral-50 to-transparent" />
        <IconClock className="absolute -right-5 size-20 text-[#FEC966]" />
      </div>
      <div className="relative flex items-center overflow-hidden rounded-sm border border-white bg-neutral-50 py-4 shadow-[0px_4px_4px_0px_hsla(32,94,59,.06),0px_4px_9px_0px_hsla(32,98,14,.08)] md:h-20">
        <div className="font-helvetica z-10 flex items-center gap-3 px-3 pr-2">
          <p className="text-primary text-xl font-bold sm:text-2xl md:text-3xl">
            8x
          </p>
          <p className="text-sm leading-tight font-medium text-[#AF5E00] md:text-lg">
            Increase equipment <br />
            and machinery life
          </p>
        </div>
        <div className="absolute inset-0 z-1 bg-gradient-to-r from-neutral-50 via-neutral-50 to-transparent" />
        <IconThunder className="absolute -right-10 size-24 text-[#FEC966]" />
      </div>
      <div className="relative flex items-center overflow-hidden rounded-sm border border-white bg-neutral-50 py-4 shadow-[0px_4px_4px_0px_hsla(32,94,59,.06),0px_4px_9px_0px_hsla(32,98,14,.08)] md:h-20">
        <div className="font-helvetica z-10 flex items-center gap-3 px-3 pr-2">
          <IconTrendingUp className="text-primary size-8 shrink-0" />

          <p className="text-sm leading-tight font-medium text-[#AF5E00] md:text-lg">
            Achieve up to 20% <br /> fuel savings
          </p>
        </div>
        <div className="absolute inset-0 z-1 bg-gradient-to-r from-neutral-50 via-neutral-50 to-transparent" />
        <IconOdometer className="absolute -right-4 size-20 text-[#FEC966]" />
      </div>
      <div className="relative flex items-center overflow-hidden rounded-sm border border-white bg-neutral-50 py-4 shadow-[0px_4px_4px_0px_hsla(32,94,59,.06),0px_4px_9px_0px_hsla(32,98,14,.08)] md:h-20">
        <div className="font-helvetica z-10 flex items-center gap-3 px-3 pr-2">
          <p className="text-primary text-xl font-bold sm:text-2xl md:text-3xl">
            95%
          </p>

          <p className="text-sm leading-tight font-medium text-[#AF5E00] md:text-lg">
            Eliminate friction <br /> and wear
          </p>
        </div>
        <div className="absolute inset-0 z-1 bg-gradient-to-r from-neutral-50 via-neutral-50 to-transparent" />
        <IconGears className="absolute -right-4 size-20 text-[#FEC966]" />
      </div>
      <div className="relative flex items-center overflow-hidden rounded-sm border border-white bg-neutral-50 py-4 shadow-[0px_4px_4px_0px_hsla(32,94,59,.06),0px_4px_9px_0px_hsla(32,98,14,.08)] md:h-20">
        <div className="font-helvetica z-10 flex items-center gap-3 px-3 pr-2">
          <IconTrendingDown3 className="text-primary size-8 shrink-0" />

          <p className="text-sm leading-tight font-medium text-[#AF5E00] md:text-lg">
            Lower emissions and environmental impact
          </p>
        </div>
        <div className="absolute inset-0 z-1 bg-gradient-to-r from-neutral-50 via-neutral-50 to-transparent" />
        <IconCo2 className="absolute -right-4 size-20 text-[#FEC966]" />
      </div>
    </div>
  );
};
