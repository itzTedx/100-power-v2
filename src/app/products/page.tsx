import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/features/products/components/product-card";

export default function ProductsPage() {
  return (
    <main className="container space-y-8 py-12">
      <div className="grid grid-cols-2 gap-4">
        <h2 className="font-helvetica text-5xl font-bold">
          High-Performance Products for Demanding Machines
        </h2>
        <div>
          <p className="mb-2 text-2xl tracking-tight">
            Each product is developed with precision and purpose - to enhance{" "}
            <span className="text-primary">
              durability, reduce wear, and improve performance
            </span>{" "}
            under extreme conditions.
          </p>
        </div>
      </div>

      <Tabs defaultValue="all" className="items-center">
        <TabsList className="text-foreground mb-6 h-auto w-full gap-2 rounded-none border-b bg-transparent px-0 py-1">
          <TabsTrigger
            value="all"
            className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            All Products
          </TabsTrigger>
          <TabsTrigger
            value="lubrication"
            className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Lubrication
          </TabsTrigger>
          <TabsTrigger
            value="engine-additives"
            className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Engine Additives
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
        <TabsContent value="lubrication">
          <div className="grid grid-cols-3 gap-4">
            {PRODUCTS.filter((p) => p.type === "lubrication")?.map(
              (product) => (
                <ProductCard data={product} key={product.id} />
              )
            )}
          </div>
        </TabsContent>
        <TabsContent value="all">
          <div className="grid grid-cols-3 gap-4">
            {PRODUCTS.map((product) => (
              <ProductCard data={product} key={product.id} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="engine-additives">
          <div className="grid grid-cols-3 gap-4">
            {PRODUCTS.filter((p) => p.type === "engine-additives")?.map(
              (product) => (
                <ProductCard data={product} key={product.id} />
              )
            )}
          </div>
        </TabsContent>
        <TabsContent value="fuel-system">
          <div className="grid grid-cols-3 gap-4">
            {PRODUCTS.filter((p) => p.type === "fuel-system")?.map(
              (product) => (
                <ProductCard data={product} key={product.id} />
              )
            )}
          </div>
        </TabsContent>
        <TabsContent value="industrial">
          <div className="grid grid-cols-3 gap-4">
            {PRODUCTS.filter((p) => p.type === "industrial")?.map((product) => (
              <ProductCard data={product} key={product.id} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}
