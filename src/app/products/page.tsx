import type { Metadata } from "next";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/features/products/components/product-card";

export const metadata: Metadata = {
  title: "High-Performance Products | 100 Power",
  description:
    "Explore high-performance lubrication, engine additives, and industrial products engineered for durability, reduced wear, and optimal machine performance under extreme conditions.",
  openGraph: {
    title: "High-Performance Products | 100 Power",
    description:
      "Explore high-performance lubrication, engine additives, and industrial products engineered for durability, reduced wear, and optimal machine performance under extreme conditions.",
    url: "/products",
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <main className="container space-y-8 py-12">
      <header className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <h1 className="font-helvetica text-3xl font-bold sm:text-4xl md:text-5xl">
          High-Performance Products for Demanding Machines
        </h1>
        <div>
          <p className="mb-2 text-lg tracking-tight sm:text-xl md:text-2xl">
            Each product is developed with precision and purpose - to enhance{" "}
            <span className="text-primary">
              durability, reduce wear, and improve performance
            </span>{" "}
            under extreme conditions.
          </p>
        </div>
      </header>

      <Tabs defaultValue="all" className="items-center">
        <TabsList
          className="text-foreground mb-6 h-auto w-full gap-2 rounded-none border-b bg-transparent px-0 py-1"
          aria-label="Product categories"
        >
          <TabsTrigger
            value="all"
            className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            All Products
          </TabsTrigger>

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

        <TabsContent value="all">
          <section
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            aria-label="All Products"
          >
            {PRODUCTS.map((product) => (
              <ProductCard data={product} key={product.id} />
            ))}
          </section>
        </TabsContent>

        <TabsContent value="engine-additives">
          <section
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            aria-label="Engine Additives"
          >
            {PRODUCTS.filter((p) => p.type === "engine-additives")?.map(
              (product) => (
                <ProductCard data={product} key={product.id} />
              )
            )}
          </section>
        </TabsContent>
        <TabsContent value="lubrication">
          <section
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            aria-label="Lubrication Products"
          >
            {PRODUCTS.filter((p) => p.type === "lubrication")?.map(
              (product) => (
                <ProductCard data={product} key={product.id} />
              )
            )}
          </section>
        </TabsContent>
        <TabsContent value="fuel-system">
          <section
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            aria-label="Fuel System Products"
          >
            {PRODUCTS.filter((p) => p.type === "fuel-system")?.map(
              (product) => (
                <ProductCard data={product} key={product.id} />
              )
            )}
          </section>
        </TabsContent>
        <TabsContent value="industrial">
          <section
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            aria-label="Industrial Application Products"
          >
            {PRODUCTS.filter((p) => p.type === "industrial")?.map((product) => (
              <ProductCard data={product} key={product.id} />
            ))}
          </section>
        </TabsContent>
      </Tabs>
    </main>
  );
}
