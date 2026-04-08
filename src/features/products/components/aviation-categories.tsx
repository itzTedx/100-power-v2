"use client";

import { useMemo } from "react";

import { useTranslations } from "next-intl";
import { useQueryState } from "nuqs";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RANGE_OPTION_VALUES = ["piston", "turbine", "hydraulic", "gear"] as const;

export function AviationCategories() {
  const [range, setRange] = useQueryState("query", {
    defaultValue: "all",
    history: "push",
  });

  const t = useTranslations("products.aviation");

  const options = useMemo(
    () =>
      RANGE_OPTION_VALUES.map((value) => ({
        value,
        label: t(`options.${value}` as const),
      })),
    [t]
  );

  return (
    <>
      <Select defaultValue="all" onValueChange={setRange} value={range}>
        <SelectTrigger className="w-full shrink-0 md:w-[240px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">{t("options.all")}</SelectItem>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}
