import { IconTrendingDown3, IconTrendingUp } from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";

import {
  IconClock,
  IconCo2,
  IconGears,
  IconOdometer,
  IconThunder,
} from "@/assets/icons";

export const Values = async () => {
  const t = await getTranslations("about.values.value");
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 md:gap-3">
      <div className="relative flex items-center overflow-hidden rounded-sm border border-white bg-neutral-50 py-4 shadow-[0px_4px_4px_0px_hsla(32,94,59,.06),0px_4px_9px_0px_hsla(32,98,14,.08)] md:h-20">
        <div className="z-10 flex items-center gap-3 px-3 pr-2 font-helvetica">
          <p className="font-bold text-primary text-xl sm:text-2xl md:text-3xl">
            {t("oil.head")}
          </p>
          <p className="whitespace-pre-line font-medium text-[#AF5E00] text-sm leading-tight md:text-lg">
            {t("oil.title")}
          </p>
        </div>
        <div className="absolute inset-0 z-1 bg-linear-to-r from-neutral-50 via-neutral-50 to-transparent" />
        <IconClock className="absolute -right-5 size-20 text-[#FEC966] rtl:-left-5" />
      </div>
      <div className="relative flex items-center overflow-hidden rounded-sm border border-white bg-neutral-50 py-4 shadow-[0px_4px_4px_0px_hsla(32,94,59,.06),0px_4px_9px_0px_hsla(32,98,14,.08)] md:h-20">
        <div className="z-10 flex items-center gap-3 px-3 pr-2 font-helvetica">
          <p className="font-bold text-primary text-xl sm:text-2xl md:text-3xl">
            {t("equipment.head")}
          </p>
          <p className="whitespace-pre-line font-medium text-[#AF5E00] text-sm leading-tight md:text-lg">
            {t("equipment.title")}
          </p>
        </div>
        <div className="absolute inset-0 z-1 bg-linear-to-r from-neutral-50 via-neutral-50 to-transparent" />
        <IconThunder className="absolute -right-10 size-24 text-[#FEC966] rtl:-left-10" />
      </div>
      <div className="relative flex items-center overflow-hidden rounded-sm border border-white bg-neutral-50 py-4 shadow-[0px_4px_4px_0px_hsla(32,94,59,.06),0px_4px_9px_0px_hsla(32,98,14,.08)] md:h-20">
        <div className="z-10 flex items-center gap-3 px-3 pr-2 font-helvetica">
          <IconTrendingUp className="size-8 shrink-0 text-primary" />

          <p className="whitespace-pre-line font-medium text-[#AF5E00] text-sm leading-tight md:text-lg">
            {t("fuel.title")}
          </p>
        </div>
        <div className="absolute inset-0 z-1 bg-linear-to-r from-neutral-50 via-neutral-50 to-transparent" />
        <IconOdometer className="absolute -right-4 size-20 text-[#FEC966] rtl:-left-4" />
      </div>
      <div className="relative flex items-center overflow-hidden rounded-sm border border-white bg-neutral-50 py-4 shadow-[0px_4px_4px_0px_hsla(32,94,59,.06),0px_4px_9px_0px_hsla(32,98,14,.08)] md:h-20">
        <div className="z-10 flex items-center gap-3 px-3 pr-2 font-helvetica">
          <p className="font-bold text-primary text-xl sm:text-2xl md:text-3xl">
            {t("friction.head")}
          </p>

          <p className="whitespace-pre-line font-medium text-[#AF5E00] text-sm leading-tight md:text-lg">
            {t("friction.title")}
          </p>
        </div>
        <div className="absolute inset-0 z-1 bg-linear-to-r from-neutral-50 via-neutral-50 to-transparent" />
        <IconGears className="absolute -right-4 size-20 text-[#FEC966]" />
      </div>
      <div className="relative flex items-center overflow-hidden rounded-sm border border-white bg-neutral-50 py-4 shadow-[0px_4px_4px_0px_hsla(32,94,59,.06),0px_4px_9px_0px_hsla(32,98,14,.08)] md:h-20">
        <div className="z-10 flex items-center gap-3 px-3 pr-2 font-helvetica">
          <IconTrendingDown3 className="size-8 shrink-0 text-primary" />

          <h2 className="font-medium text-[#AF5E00] text-sm leading-tight md:text-lg">
            {t("environment.title")}
          </h2>
        </div>
        <div className="absolute inset-0 z-1 bg-linear-to-r from-neutral-50 via-neutral-50 to-transparent" />
        <IconCo2 className="absolute -right-4 size-20 text-[#FEC966]" />
      </div>
    </div>
  );
};
