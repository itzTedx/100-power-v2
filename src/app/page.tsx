import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <section className="container py-12">
        <div className="space-y-5 py-6 text-center">
          <Badge variant="primary">Engineered to Protect</Badge>

          <h1 className="font-helvetica text-6xl font-bold tracking-wide">
            Advanced Additives for Peak <br /> Performance and Lasting{" "}
            <span className="text-primary">Protection.</span>
          </h1>
          <p className="text-xl">
            Next-gen lubrication technology to maximize performance, minimize
            friction, and protect the planet.
          </p>
          <Button>Explore Solutions</Button>
        </div>
        <Image
          src="/images/hero.webp"
          width={1600}
          height={784}
          alt=""
          className="object-contain"
          quality={100}
          priority
        />
      </section>
    </main>
  );
}
