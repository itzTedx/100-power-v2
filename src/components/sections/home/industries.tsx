import { Suspense } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import { Dot } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { INDUSTRIES } from "@/data/constants";

const SimpleMarquee = dynamic(() => import("@/components/animated/marquee"));

export const Industries = () => {
  return (
    <section
      aria-labelledby="industries-heading"
      className="overflow-hidden py-12"
    >
      <div className="container mb-16 space-y-8">
        <Badge>
          <Dot />
          Industries we serve
        </Badge>
        <Separator />
        <div className="grid grid-cols-2 gap-4">
          <h2
            className="font-bold font-helvetica text-5xl"
            id="industries-heading"
          >
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
      <Suspense
        fallback={
          <div className="flex h-60 w-full items-center justify-center md:h-[26rem]">
            Loading...
          </div>
        }
      >
        <SimpleMarquee
          baseVelocity={4}
          className="w-full"
          draggable
          repeat={4}
          scrollAwareDirection={true}
          scrollSpringConfig={{ damping: 50, stiffness: 400 }}
          slowDownFactor={0.1}
          slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
          slowdownOnHover
          useScrollVelocity={true}
        >
          {INDUSTRIES.map((item, i) => (
            <MarqueeItem key={i}>
              <div className="relative aspect-4/3 h-60 overflow-hidden rounded-2xl p-6 md:h-[26rem]">
                <div className="relative z-20 flex h-full items-end">
                  <h4 className="rounded-sm bg-background px-2 py-0.5 font-helvetica font-medium">
                    {item.label}
                  </h4>
                </div>

                <Image
                  alt={`Industry: ${item.label}`}
                  className="object-cover"
                  fill
                  loading={i < 2 ? "eager" : "lazy"}
                  priority={i < 2}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={item.image}
                />
              </div>
            </MarqueeItem>
          ))}
        </SimpleMarquee>
      </Suspense>
    </section>
  );
};

const MarqueeItem = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-1 cursor-pointer duration-300 ease-in-out hover:scale-105 md:mx-2.5">
    {children}
  </div>
);
