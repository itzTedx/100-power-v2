import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense } from "react";

import { Dot } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { INDUSTRIES } from "@/data/constants";

const SimpleMarquee = dynamic(() => import("@/components/animated/marquee"));

export const Industries = () => {
  return (
    <section
      className="overflow-hidden py-12"
      aria-labelledby="industries-heading"
    >
      <div className="container mb-16 space-y-8">
        <Badge>
          <Dot />
          Industries we serve
        </Badge>
        <Separator />
        <div className="grid grid-cols-2 gap-4">
          <h2
            id="industries-heading"
            className="font-helvetica text-5xl font-bold"
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
          className="w-full"
          baseVelocity={4}
          repeat={4}
          draggable
          scrollSpringConfig={{ damping: 50, stiffness: 400 }}
          slowDownFactor={0.1}
          slowdownOnHover
          slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
          scrollAwareDirection={true}
          useScrollVelocity={true}
        >
          {INDUSTRIES.map((item, i) => (
            <MarqueeItem key={i}>
              <div className="relative aspect-4/3 h-60 overflow-hidden rounded-2xl p-6 md:h-[26rem]">
                <div className="relative z-20 flex h-full items-end">
                  <h4 className="font-helvetica bg-background rounded-sm px-2 py-0.5 font-medium">
                    {item.label}
                  </h4>
                </div>

                <Image
                  src={item.image}
                  alt={`Industry: ${item.label}`}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading={i < 2 ? "eager" : "lazy"}
                  priority={i < 2}
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
