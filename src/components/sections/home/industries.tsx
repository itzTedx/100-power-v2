import { Dot } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const Industries = () => {
  return (
    <section className="py-12">
      <div className="container space-y-8">
        <Badge>
          <Dot />
          Industries we serve
        </Badge>
        <Separator />
        <div className="grid grid-cols-2 gap-4">
          <h2 className="font-helvetica text-5xl font-bold">
            Serving Every Sector with Precision
          </h2>
          <div>
            <p className="text-2xl tracking-tight">
              From <span className="text-primary">engines to excavation,</span>{" "}
              we power the industries where friction hurts most and performance
              matters most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
