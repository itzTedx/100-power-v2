import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductType } from "@/data/products";
import { cn } from "@/lib/utils";

interface Props {
  data: ProductType;
}

export const ProductCard = ({ data }: Props) => {
  return (
    <Card className="group">
      <CardHeader className="flex items-start justify-between">
        <div className="flex shrink-0 items-center gap-2">
          <div
            className={cn(
              "size-3 rounded-full",
              data.range === "Premium" ? "bg-primary" : "bg-secondary"
            )}
          />
          <p className="font-medium">{data.range}</p>
        </div>
        <Button size="icon" variant="secondary">
          <ArrowUpRight />
        </Button>
      </CardHeader>
      <CardContent className="relative overflow-hidden">
        <div className="relative aspect-square">
          <Image
            src="/images/xpower.webp"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute inset-0 z-10 flex items-end justify-center p-4 opacity-0 transition-opacity group-hover:opacity-100">
          <Button className="z-10 mx-auto" variant="outline" asChild>
            <Link href={data.href}>Discover it</Link>
          </Button>

          <div className="from-card pointer-events-none absolute inset-0 translate-y-full bg-gradient-to-t to-transparent transition-transform group-hover:translate-y-0" />
        </div>
      </CardContent>
      <CardFooter>
        <CardDescription>{data.badge}</CardDescription>
        <CardTitle>{data.title}</CardTitle>
      </CardFooter>
    </Card>
  );
};
