import { getTranslations } from "next-intl/server";

import { FAQS } from "@/data/faqs";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export const Faqs = async () => {
  const tFaqs = await getTranslations("home.faqs");

  // Load FAQs from data instead of translations
  const faqs = FAQS;
  type Key = Parameters<typeof tFaqs>[0];

  // Memoize rendering of accordion items
  const renderAccordionItems = (items: typeof faqs) =>
    items.map((item, i) => (
      <AccordionItem
        className="h-fit rounded-md bg-accent px-4 py-1 outline-none last:border-b has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50"
        key={item.id}
        value={item.id.toFixed()}
      >
        <AccordionTrigger className="cursor-pointer py-3 text-base leading-6 hover:no-underline focus-visible:ring-0">
          {tFaqs(`faq.${i}.title` as Key)}
        </AccordionTrigger>
        <AccordionContent className="whitespace-pre-line pb-4 text-base text-muted-foreground">
          {tFaqs(`faq.${i}.content` as Key)}
        </AccordionContent>
      </AccordionItem>
    ));

  return (
    <section aria-labelledby="faq-heading">
      <h2 className="sr-only" id="faq-heading">
        {tFaqs("badge")}
      </h2>
      <Accordion className="w-full space-y-3" collapsible type="single">
        {renderAccordionItems(faqs)}
      </Accordion>
    </section>
  );
};
