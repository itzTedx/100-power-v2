import { IconArrowUpRight } from "@tabler/icons-react";

import { IconUserQuestion } from "@/assets/icons";
import { Faqs } from "@/components/sections/faq";
import { About } from "@/components/sections/home/about";
import { Hero } from "@/components/sections/home/hero";
import { Industries } from "@/components/sections/home/industries";
import { Products } from "@/components/sections/home/products";
import { Technologies } from "@/components/sections/home/technologies";
import { Video } from "@/components/sections/home/video";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Video />
      <Products />
      <Industries />
      <Technologies />

      <section className="container space-y-8 py-12">
        <Badge>
          <IconUserQuestion />
          Frequently Asked Questions
        </Badge>
        <Separator />
        <div className="flex items-start justify-between gap-9">
          <h2 className="font-helvetica inline-flex items-center gap-3 text-5xl font-medium">
            Have any questions?
          </h2>

          <Button className="w-fit" variant="secondary">
            Ask as anything <IconArrowUpRight />
          </Button>
        </div>
        <Faqs />
      </section>
    </main>
  );
}
