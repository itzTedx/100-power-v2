import Image from "next/image";

import { IconChart, IconShield } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export default function ProductSlugPage() {
  return (
    <main className="container py-8">
      <section className="grid grid-cols-2 gap-12">
        <Card className="h-fit">
          <CardContent className="relative aspect-square">
            <Image
              src="/images/xpower-hi.webp"
              fill
              alt=""
              className="object-contain"
            />
          </CardContent>
        </Card>
        <div className="space-y-8 py-4">
          <div>
            <div className="flex shrink-0 items-center gap-2">
              <div className={cn("size-3 rounded-full", "bg-primary")} />
              <p className="font-medium">Premium</p>
            </div>
            <h1 className="font-helvetica text-3xl font-bold">
              XPower 5W30 Petrol Engine Oil (API SP)
            </h1>
          </div>
          <div>
            <h2 className="text-muted-foreground mb-1">Product Overview</h2>
            <p className="mb-3 text-lg leading-normal tracking-tight">
              Experience next-generation engine care with XPower 5W30,
              formulated to meet API SP standards. Designed for modern petrol
              engines, it delivers exceptional wear protection, cleaner
              performance, and extended engine life—whether you're navigating
              city traffic or cruising the highway.
            </p>
            <p className="text-lg leading-normal tracking-tight">
              With Micro-Lubricant Technology, advanced detergency, and superior
              thermal stability, XPower keeps your engine running smoother,
              quieter, and more efficiently every day.
            </p>
          </div>
          <div>
            <h2 className="text-muted-foreground mb-1">Key Benefits</h2>
            <ul className="list-disc space-y-2 text-lg">
              <li className="ml-5"> Maximize Engine Potential</li>
              <li className="ml-5">
                Quieter Engine, Smoother Operation, Enhanced Comfort
              </li>
              <li className="ml-5">
                Unmatched Thermal Stability & Extended Oil Drain Intervals
              </li>
              <li className="ml-5">
                Improves Fuel Efficiency & Reduces Emissions
              </li>
              <li className="ml-5">
                Extended Component Lifespan & Lower Maintenance Costs
              </li>
              <li className="ml-5">
                Protection Against Water Contamination in Engine Oil
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-muted-foreground mb-1">Datasheet Downloads</h2>
            <div className="space-x-3">
              <Button variant="secondary">
                <IconShield />
                Material Safety Datasheet
              </Button>
              <Button variant="secondary">
                <IconChart />
                Technical Datasheet
              </Button>
            </div>
          </div>
        </div>
      </section>
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
        </TabsList>
        <TabsContent value="lubrication">
          <div className="grid grid-cols-3 gap-4">
            Superior Wear ProtectionForms a micro-layer on engine parts to
            reduce friction and metal-to-metal contact, extending life and
            ensuring smoother operation—especially in cold starts and high-load
            scenarios.
          </div>
        </TabsContent>
        <TabsContent value="all">
          <div className="grid grid-cols-3 gap-4">
            Superior Wear ProtectionForms a micro-layer on engine parts to
            reduce friction and metal-to-metal contact, extending life and
            ensuring smoother operation—especially in cold starts and high-load
            scenarios.
          </div>
        </TabsContent>
        <TabsContent value="engine-additives">
          <div className="grid grid-cols-3 gap-4">
            Superior Wear ProtectionForms a micro-layer on engine parts to
            reduce friction and metal-to-metal contact, extending life and
            ensuring smoother operation—especially in cold starts and high-load
            scenarios.
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}
