import { useMemo } from "react";

import { FAQS } from "@/data/faqs";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export const Faqs = () => {
  // Memoize the split of FAQS
  const [firstHalf, secondHalf] = useMemo(() => {
    const half = Math.ceil(FAQS.length / 2);
    return [FAQS.slice(0, half), FAQS.slice(half)];
  }, []);

  // Memoize rendering of accordion items
  const renderAccordionItems = (items: typeof FAQS) =>
    items.map((item) => (
      <AccordionItem
        value={item.id.toFixed()}
        key={item.id}
        className="bg-accent has-focus-visible:border-ring has-focus-visible:ring-ring/50 h-fit rounded-md px-4 py-1 outline-none last:border-b has-focus-visible:ring-[3px]"
      >
        <AccordionTrigger className="cursor-pointer py-3 text-base leading-6 hover:no-underline focus-visible:ring-0">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground pb-4 text-base">
          {item.content}
        </AccordionContent>
      </AccordionItem>
    ));

  return (
    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="sr-only">
        Frequently Asked Questions
      </h2>
      <div className="mt-6 grid w-full gap-4 md:grid-cols-2 md:gap-6">
        <Accordion type="single" collapsible className="w-full space-y-3">
          {renderAccordionItems(firstHalf)}
        </Accordion>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {renderAccordionItems(secondHalf)}
        </Accordion>
      </div>
    </section>
  );
};
