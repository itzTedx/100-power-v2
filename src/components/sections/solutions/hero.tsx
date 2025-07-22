import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export const SolutionHero = () => {
  return (
    <section className="z-10 container max-w-4xl overflow-hidden py-20 text-center">
      <h1 className="font-helvetica mb-6 text-4xl font-bold md:text-6xl">
        Smarter Lubrication. Longer Life. Greener Impact.
      </h1>
      <p className="mb-8 text-lg md:text-xl">
        We engineer advanced solutions that protect, optimize, and extend the
        life of engines and machinery using proprietary Micro-Metallurgical
        Technology.
      </p>
      <Button asChild>
        <Link href="/products">
          Explore Products <ArrowUpRight />
        </Link>
      </Button>
    </section>
  );
};
