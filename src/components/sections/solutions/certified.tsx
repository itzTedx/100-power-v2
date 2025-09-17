import { IconCertificate } from "@tabler/icons-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const Certified = () => {
  return (
    <section className="container max-w-7xl space-y-8 pb-20">
      <Badge>
        <IconCertificate />
        USA-Certified
      </Badge>
      <Separator />
      <div className="grid md:grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <h2 className="font-helvetica text-4xl font-bold">
            Engineered with Certified U.S. Technology
          </h2>
          <p className="text-xl leading-normal font-light tracking-tight">
            We proudly incorporate Anti-Friction Technology developed in the
            USA, ensuring unmatched quality, reliability, and innovation. This
            badge represents our commitment to world-class performance and
            engineering excellence in lubrication science.
          </p>
          <ul className="list-inside list-disc space-y-3 text-xl leading-normal font-light tracking-tight">
            <li> Certified Micro-Metallurgical Process</li>
            <li>Made to U.S. Standards</li>
            <li>Trusted in Industrial & Military Applications</li>
          </ul>
        </div>
        <div className="flex size-56 md:h-full md:w-full items-center justify-center">
          <div className="relative aspect-square h-full shrink-0">
            <Image
              src="/images/usa-certificate.png"
              alt=""
              fill
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
