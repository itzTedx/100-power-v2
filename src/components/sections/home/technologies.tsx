import Image from "next/image";

import { Dot } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FEATURES } from "@/data/constants";

export const Technologies = () => {
  return (
    <section className="py-12">
      <div className="container max-w-5xl py-20 text-center">
        <h2 className="font-helvetica text-6xl font-bold text-balance">
          Built for <span className="text-primary">Performance.</span> Powered
          by Responsibility
        </h2>
        <p className="mt-3 text-xl tracking-tight text-balance">
          We reduce emissions, prevent pollution, and contribute to a cleaner
          industrial future by reducing oil waste, extending equipment life, and
          minimizing energy loss.
        </p>
      </div>
      <div className="container space-y-8 pt-20">
        <Badge>
          <Dot />
          Our Core Technologies
        </Badge>
        <Separator />
        {FEATURES.map((item) => (
          <div key={item.title} className="group">
            <div className="grid grid-cols-2 items-start gap-9">
              <h2 className="font-helvetica inline-flex items-center gap-3 text-5xl font-bold">
                {item.title}
              </h2>

              <p className="text-2xl tracking-tight">{item.description}</p>
            </div>
            <div className="grid grid-cols-3 gap-9 py-12">
              <ul className="order-1 col-span-2 grid grid-cols-2 gap-6 group-last:order-2">
                {item.features.map((feature) => (
                  <li key={feature.id} className="space-y-6 py-9">
                    <div className="space-y-4">
                      <p className="text-muted-foreground/80">0{feature.id}</p>
                      <Separator />
                      <h3 className="font-helvetica text-3xl">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-xl">
                      {feature.description}
                    </p>
                  </li>
                ))}
              </ul>
              {/* <CardFlip data={item} Icon={item.Icon} /> */}
              <div className="relative order-2 flex items-end overflow-hidden rounded-md group-last:order-1">
                <div className="text-accent relative z-10 flex w-full items-center justify-between p-6">
                  <div>
                    <h4 className="font-helvetica text-2xl">{item.title}</h4>
                    <p className="tracking-tight">{item.subtitle}</p>
                  </div>
                  <Button size="icon" className="size-12">
                    <item.Icon className="size-5" />
                  </Button>
                </div>
                <Image src={item.image} fill alt="" className="object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
