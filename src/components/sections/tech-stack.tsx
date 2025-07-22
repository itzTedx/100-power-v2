import Image from "next/image";

import { FEATURES } from "@/data/constants";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export const TechStack = () => {
  return FEATURES.map((item) => (
    <div key={item.title} className="group py-6">
      <div className="grid grid-cols-1 items-start gap-9 md:grid-cols-2">
        <h3 className="font-helvetica inline-flex items-center gap-3 text-5xl font-bold">
          {item.title}
        </h3>

        <p className="text-xl tracking-tight">{item.description}</p>
      </div>
      <div className="grid gap-9 py-12 md:grid-cols-3">
        <ul className="order-2 grid grid-cols-2 gap-6 md:order-1 md:col-span-2 md:group-last:order-2">
          {item.features.map((feature) => (
            <li key={feature.id} className="space-y-4 md:p-3">
              <div className="space-y-3">
                <p className="text-muted-foreground/80">0{feature.id}</p>
                <Separator />
                <h4 className="font-helvetica text-2xl font-medium">
                  {feature.title}
                </h4>
              </div>
              <p className="text-muted-foreground text-lg">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
        {/* <CardFlip data={item} Icon={item.Icon} /> */}
        <div className="relative order-1 flex min-h-64 items-end overflow-hidden rounded-md sm:order-2 md:group-last:order-1">
          <div className="text-accent relative z-10 flex w-full items-center justify-between p-6">
            <div>
              <h5 className="font-helvetica text-2xl">{item.title}</h5>
              <p className="tracking-tight">{item.subtitle}</p>
            </div>
            <Button
              size="icon"
              className="size-12"
              aria-label={`Learn more about ${item.title}`}
            >
              <item.Icon className="size-5" />
            </Button>
          </div>
          <Image
            src={item.image}
            fill
            alt={`Technology: ${item.title}`}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  ));
};
