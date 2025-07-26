import Link from "next/link";

import { ArrowUpRight, Dot } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/features/products/components/product-card";

export const Products = () => {
  return (
    <section
      className="container space-y-8 py-8 sm:py-12"
      aria-labelledby="products-heading"
    >
      <Badge>
        <Dot />
        Flagship Products
      </Badge>
      <Separator />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <h2
          id="products-heading"
          className="font-helvetica text-2xl font-bold sm:text-4xl md:text-5xl"
        >
          High-Performance Products for Demanding Machines
        </h2>
        <div>
          <p className="mb-2 text-base tracking-tight sm:text-xl md:text-2xl">
            Each product is developed with precision and purpose - to enhance{" "}
            <span className="text-primary">
              durability, reduce wear, and improve performance
            </span>{" "}
            under extreme conditions.
          </p>
          <Button
            variant="secondary"
            aria-label="Explore all products"
            className="w-full sm:w-auto"
            asChild
          >
            <Link href="/products">
              Explore Products <ArrowUpRight size={18} />
            </Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="engine-additives" className="items-center">
        <ScrollArea>
          <TabsList className="text-foreground mb-6 h-auto w-full gap-2 rounded-none border-b bg-transparent px-0 py-1">
            <TabsTrigger
              value="engine-additives"
              className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Engine Additives
            </TabsTrigger>
            <TabsTrigger
              value="lubrication"
              className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Lubrication
            </TabsTrigger>
            <TabsTrigger
              value="fuel-system"
              className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Fuel System
            </TabsTrigger>
            <TabsTrigger
              value="industrial"
              className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Industrial Application
            </TabsTrigger>
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <TabsContent value="engine-additives">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.filter((p) => p.type === "engine-additives")?.map(
              (product, id) => (
                <ProductCard data={product} key={id} />
              )
            )}
          </div>
        </TabsContent>
        <TabsContent value="lubrication">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.filter((p) => p.type === "lubrication")?.map(
              (product, id) => (
                <ProductCard data={product} key={id} />
              )
            )}
          </div>
        </TabsContent>

        <TabsContent value="fuel-system">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.filter((p) => p.type === "fuel-system")?.map(
              (product, id) => (
                <ProductCard data={product} key={id} />
              )
            )}
          </div>
        </TabsContent>
        <TabsContent value="industrial">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.filter((p) => p.type === "industrial")?.map(
              (product, id) => (
                <ProductCard data={product} key={id} />
              )
            )}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};
