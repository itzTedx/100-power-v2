"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { IconChart, IconShield } from "@/assets/icons";

import { useOpenPanelTracking } from "@/lib/openpanel";

interface Props {
  type: "safetyDs" | "technicalDs";
  datasheet: string;
}

export const DatasheetButton = ({ type, datasheet }: Props) => {
  const { trackDatasheetOpen } = useOpenPanelTracking();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button asChild className="z-99" size="icon" variant="secondary">
          <Link
            href={datasheet}
            onClick={() =>
              trackDatasheetOpen({
                datasheetType: type,
                url: datasheet,
                component: "DatasheetButton",
                page: "products",
              })
            }
            target="_blank"
          >
            {type === "safetyDs" ? (
              <IconShield className="size-5" />
            ) : (
              <IconChart className="size-5" />
            )}
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent
        className="pointer-events-none select-none"
        sideOffset={-3}
      >
        {type === "safetyDs"
          ? " Material Safety Data Sheet"
          : "Technical Data sheet"}
      </TooltipContent>
    </Tooltip>
  );
};
