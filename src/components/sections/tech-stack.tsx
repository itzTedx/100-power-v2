import Image from "next/image";

import { FEATURES } from "@/data/constants";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export const TechStack = () => {
  return FEATURES.map((item) => (
    <div key={item.title} className="group py-6">
      <div className="grid grid-cols-2 items-start gap-9">
        <h3 className="font-helvetica inline-flex items-center gap-3 text-5xl font-bold">
          {item.title}
        </h3>

        <p className="text-xl tracking-tight">{item.description}</p>
      </div>
      <div className="grid grid-cols-3 gap-9 py-12">
        <ul className="order-1 col-span-2 grid grid-cols-2 gap-6 group-last:order-2">
          {item.features.map((feature) => (
            <li key={feature.id} className="space-y-4 p-3">
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
        <div className="relative order-2 flex items-end overflow-hidden rounded-md group-last:order-1">
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
