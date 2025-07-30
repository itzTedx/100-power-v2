import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

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
import { DatasheetButton } from "./datasheet-button";

interface Props {
  data: ProductType;
}

export const ProductCard = ({ data }: Props) => {
  return (
    <Card className="group relative overflow-hidden">
      <Link href={`/products/${data.href}`}  className="absolute inset-0 z-40" />
        <CardHeader className="relative flex items-start justify-between">
          <div className="flex shrink-0 items-center gap-2">
            <div
              className={cn(
                "size-3 rounded-full",
                data.range === "Premium"
                  ? "bg-primary"
                  : "bg-muted-foreground/80"
              )}
            />
            <p className="font-medium">{data.range}</p>
          </div>
          <TooltipProvider>
            <div className="absolute right-5 z-50 flex flex-col space-y-1.5 opacity-0 transition-[opacity_translate] duration-100 ease-in group-hover:opacity-100">
              {data.safetyDs && (
                <DatasheetButton type="safetyDs" datasheet={data.safetyDs}/>
              )}
              {data.technicalDs && (
                <DatasheetButton type="technicalDs" datasheet={data.technicalDs}/>
              )}
              
            </div>
          </TooltipProvider>
        </CardHeader>
        <CardContent className="relative overflow-hidden">
          <div className="relative aspect-square">
            <Image
              src={data.images[0]}
              alt={data.title}
              fill
              className="object-cover transition-transform group-hover:scale-110"
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
          <CardDescription className="flex flex-wrap items-center text-[10px] tracking-tighter sm:text-sm md:font-medium">
            {data.quantity.map((q, i) => (
              <Fragment key={q}>
                <p>{q}</p>{" "}
                <Dot
                  className={cn(
                    "size-3 md:size-4",
                    data.quantity.length === i + 1 && "hidden"
                  )}
                />
              </Fragment>
            ))}
          </CardDescription>
          <CardTitle className="mt-1">{data.title}</CardTitle>
        </CardFooter>
      
    </Card>
  );
};
