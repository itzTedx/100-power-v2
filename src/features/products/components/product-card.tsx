import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import { Dot } from "lucide-react";

import { IconChart, IconShield } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ProductType } from "@/data/products";
import { cn } from "@/lib/utils";

interface Props {
  data: ProductType;
}

export const ProductCard = ({ data }: Props) => {
  return (
    <Link href={data.href}>
      <Card className="group overflow-hidden">
        <CardHeader className="relative flex items-start justify-between">
          <div className="flex shrink-0 items-center gap-2">
            <div
              className={cn(
                "size-3 rounded-full",
                data.range === "Premium" ? "bg-primary" : "bg-secondary"
              )}
            />
            <p className="font-medium">{data.range}</p>
          </div>
          <TooltipProvider>
            <div className="absolute right-5 z-20 flex flex-col space-y-1.5 opacity-0 transition-[opacity_translate] duration-100 ease-in group-hover:opacity-100">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" variant="secondary">
                    <IconShield className="size-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent
                  className="pointer-events-none select-none"
                  sideOffset={-3}
                >
                  Material Safety Data Sheet
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" variant="secondary">
                    <IconChart className="size-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent
                  className="pointer-events-none select-none"
                  sideOffset={-3}
                >
                  Technical Data sheet
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </CardHeader>
        <CardContent className="relative overflow-hidden">
          <div className="relative aspect-square">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 z-10 flex items-end justify-center p-4 opacity-0 transition-opacity group-hover:opacity-100">
            <Button className="z-10 mx-auto" variant="outline">
              Discover it
            </Button>

            <div className="from-card pointer-events-none absolute inset-0 translate-y-full bg-gradient-to-t to-transparent transition-transform group-hover:translate-y-0" />
          </div>
        </CardContent>
        <CardFooter className="flex-col items-start">
          <CardDescription className="flex items-center text-sm font-medium">
            {data.quantity.map((q, i) => (
              <Fragment key={q}>
                <p>{q}</p>{" "}
                <Dot
                  className={cn(data.quantity.length === i + 1 && "hidden")}
                />
              </Fragment>
            ))}
          </CardDescription>
          <CardTitle>{data.title}</CardTitle>
        </CardFooter>
      </Card>
    </Link>
  );
};
