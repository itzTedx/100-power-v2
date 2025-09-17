import Link from "next/link";

import { ArrowUpRight, Dot } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { getProducts } from "@/features/products/actions";
import { ProductCard } from "@/features/products/components/product-card";

export const Products = async () => {
  const products = await getProducts();
  return (
    <section
      aria-labelledby="products-heading"
      className="container space-y-8 py-8 sm:py-12"
    >
      <Badge>
        <Dot />
        Flagship Products
      </Badge>
      <Separator />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <h2
          className="font-bold font-helvetica text-2xl sm:text-4xl md:text-5xl"
          id="products-heading"
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
            aria-label="Explore all products"
            asChild
            className="w-full sm:w-auto"
            variant="secondary"
          >
            <Link href="/products">
              Explore Products <ArrowUpRight size={18} />
            </Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="engine-additives">
        <ScrollArea>
          <TabsList className="mb-4 h-auto w-full gap-2 rounded-none border-b bg-transparent px-0 py-1 text-foreground">
            <TabsTrigger
              className="after:-mb-1 relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:hover:bg-accent data-[state=active]:after:bg-primary"
              value="engine-additives"
            >
              Engine Additives
            </TabsTrigger>
            <TabsTrigger
              className="after:-mb-1 relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:hover:bg-accent data-[state=active]:after:bg-primary"
              value="lubrication"
            >
              Lubrication
            </TabsTrigger>
            <TabsTrigger
              className="after:-mb-1 relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:hover:bg-accent data-[state=active]:after:bg-primary"
              value="fuel-system"
            >
              Fuel System
            </TabsTrigger>
            <TabsTrigger
              className="after:-mb-1 relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:hover:bg-accent data-[state=active]:after:bg-primary"
              value="industrial"
            >
              Industrial Application
            </TabsTrigger>
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <TabsContent value="engine-additives">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products
              .filter((p) => p.category === "engine-additives")
              ?.slice(0, 9)
              .map((product, id) => (
                <ProductCard data={product} key={id} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="lubrication">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products
              .filter((p) => p.category === "lubrication")
              ?.map((product, id) => (
                <ProductCard data={product} key={id} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="fuel-system">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products
              .filter((p) => p.category === "fuel-system")
              ?.map((product, id) => (
                <ProductCard data={product} key={id} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="industrial">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products
              .filter((p) => p.category === "industrial")
              ?.map((product, id) => (
                <ProductCard data={product} key={id} />
              ))}
          </div>
        </TabsContent>
        <div className="mx-auto mt-4 w-fit">
          <Button variant="secondary">
            <Link href="/products">Load More</Link>
          </Button>
        </div>
      </Tabs>
    </section>
  );
};
