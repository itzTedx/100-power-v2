import Image from "next/image";

import { Dot } from "lucide-react";

import { IconChart, IconShield } from "@/assets/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/features/products/components/product-card";
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
      <div className="mt-8 grid grid-cols-12 gap-4">
        <Tabs defaultValue="core" className="col-span-7 items-start">
          <TabsList className="text-foreground mb-3 h-auto w-full justify-start gap-2 rounded-none border-b bg-transparent px-0 py-1">
            <TabsTrigger
              value="core"
              className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Core Advantages
            </TabsTrigger>
            <TabsTrigger
              value="usages"
              className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Usages
            </TabsTrigger>
            <TabsTrigger
              value="application"
              className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Application
            </TabsTrigger>
          </TabsList>
          <TabsContent value="core">
            <ul className="ml-5 list-disc space-y-3">
              <li>
                <h3 className="text-xl">
                  <strong>Superior Wear Protection</strong>
                </h3>
                <p>
                  Forms a micro-layer on engine parts to reduce friction and
                  metal-to-metal contact, extending life and ensuring smoother
                  operation—especially in cold starts and high-load scenarios.
                </p>
              </li>
              <li>
                <h3 className="text-xl">
                  <strong>Enhanced Engine Efficiency</strong>
                </h3>
                <p>
                  Minimizes internal drag, improving fuel economy, acceleration,
                  and engine responsiveness.
                </p>
              </li>
              <li>
                <h3 className="text-xl">
                  <strong>Exceptional Cleanliness</strong>
                </h3>
                <p>
                  Advanced detergents remove sludge, varnish, and deposits to
                  keep your engine running at its peak.
                </p>
              </li>
              <li>
                <h3 className="text-xl">
                  <strong>Reliable Cold Start Protection</strong>
                </h3>
                <p>
                  Instant lubrication at startup reduces early-stage wear and
                  enhances overall reliability.
                </p>
              </li>
              <li>
                <h3 className="text-xl">
                  <strong>Cooler Operating Temperatures</strong>
                </h3>
                <p>
                  Reduces friction heat, allowing your engine to perform
                  consistently under harsh conditions.
                </p>
              </li>
            </ul>
          </TabsContent>
          <TabsContent value="usages">
            <div className="grid gap-4">
              Superior Wear ProtectionForms a micro-layer on engine parts to
              reduce friction and metal-to-metal contact, extending life and
              ensuring smoother operation—especially in cold starts and
              high-load scenarios.
            </div>
          </TabsContent>
          <TabsContent value="application">
            <div className="grid gap-4">
              Superior Wear ProtectionForms a micro-layer on engine parts to
              reduce friction and metal-to-metal contact, extending life and
              ensuring smoother operation—especially in cold starts and
              high-load scenarios.
            </div>
          </TabsContent>
        </Tabs>
        <Tabs defaultValue="directions" className="col-span-5 items-start">
          <TabsList className="text-foreground mb-3 h-auto w-full justify-start gap-2 rounded-none border-b bg-transparent px-0 py-1">
            <TabsTrigger
              value="directions"
              className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Directions of Use
            </TabsTrigger>
          </TabsList>
          <TabsContent value="directions">
            <ol className="ml-5 list-decimal space-y-3">
              <li>
                <strong>Check Compatibility</strong>
                <p>Refer to your vehicle’s manual to confirm suitability.</p>
              </li>
              <li>
                <strong>Drain Old Oil</strong>
                <p>Ensure complete drainage to avoid contamination.</p>
              </li>
              <li>
                <strong>Replace Oil Filter</strong>
                <p>
                  Always install a new filter to maximize oil effectiveness.
                </p>
              </li>
              <li>
                <strong>Pour the Oil</strong>
                <p>Add XPower 5W30 as per the recommended capacity.</p>
              </li>
              <li>
                <strong>Check Level</strong>
                <p>Use a dipstick and top up if required.</p>
              </li>
              <li>
                <strong>Start Engine & Inspect</strong>
                <p>Let it run for a few minutes. Check for any leaks.</p>
              </li>
              <li>
                <strong>Regular Maintenance</strong>
                <p>
                  Monitor levels periodically and follow recommended change
                  intervals.
                </p>
              </li>
            </ol>
          </TabsContent>
        </Tabs>
      </div>
      <div className="space-y-6 py-12">
        <Badge>
          <Dot />
          More Packings
        </Badge>
        <Separator />
        <h2 className="text-3xl font-medium">Available Quantities</h2>
        <div className="grid grid-cols-6 gap-2">
          {PRODUCTS.map((product) => (
            <ProductCard data={product} key={product.id} />
          ))}
        </div>
      </div>
      <div className="space-y-6 pt-12">
        <Badge>
          <Dot />
          Related Products
        </Badge>
        <Separator />
        <h2 className="text-3xl font-medium">
          Other Products Related to Lubricants
        </h2>
        <div className="grid grid-cols-4 gap-2">
          {PRODUCTS.map((product) => (
            <ProductCard data={product} key={product.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
