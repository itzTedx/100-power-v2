import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function ProductSlugPage() {
  return (
    <main className="container py-8">
      <section className="grid grid-cols-2 gap-12">
        <Card>
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
          <div className="space-y-3">
            <h2 className="text-muted-foreground">Product Overview</h2>
            <p className="text-lg leading-normal tracking-tight">
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
          <div className="space-y-3">
            <h2 className="text-muted-foreground">Key Benefits</h2>
            <ul className="list-disc text-lg">
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
        </div>
      </section>
    </main>
  );
}
