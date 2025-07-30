"use client";

import Link from "next/link";
import { IconChart, IconShield } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  type: "safetyDs" | "technicalDs";
  datasheet: string;
}

export const DatasheetButton = ({ type, datasheet }: Props) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button size="icon" variant="secondary" className="z-99" asChild>
          <Link href={datasheet} target="_blank">
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
