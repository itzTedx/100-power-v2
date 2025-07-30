import Link from "next/link";
import { IconChart, IconShield } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import ImageCarousel, {
  type CarouselImages,
} from "@/components/ui/image-carousel";
import { cn } from "@/lib/utils";
import { ProductMetadata } from "../actions/types";

interface Props {
  metadata: ProductMetadata;
  children: React.ReactNode;
}

export const Header = ({  metadata, children }: Props) => {
  const carousel: CarouselImages = metadata.images.map((img) => ({ url: img }));
  return (
    <section className="grid grid-cols-1 gap-8 pt-4 md:grid-cols-2">
      <div className="h-fit md:sticky md:top-[14svh] not-prose">
        <ImageCarousel
          images={carousel}
          imageFit="contain"
          aspectRatio="5/4"
          showThumbs={carousel.length > 1}
          showCarouselControls={carousel.length > 1}
        />
      </div>

      <div className="space-y-4">
        <header>
          {metadata.range && (
            <div className="flex shrink-0 items-center gap-2">
              <div
                className={cn(
                  "size-3 rounded-full",
                  metadata.range === "Premium"
                    ? "bg-primary"
                    : "bg-muted-foreground/80"
                )}
              />
              <span className="text-base font-medium sm:text-lg">
                {metadata.range}
              </span>
            </div>
          )}
          <h1 className="font-helvetica text-2xl font-bold sm:text-3xl">
            {metadata.title}
          </h1>
        </header>
        <section aria-label="overview">{children}</section>

        <section aria-labelledby="quantities-heading">
          <h2
            id="quantities-heading"
            className="mb-1 font-semibold tracking-tight not-prose"
          >
            Available Packings
          </h2>
          <ul className="font-helvetica flex gap-4 text-base font-medium not-prose">
            {metadata.quantities.map((q) => (
              <li
                className="border-primary/50 bg-primary/5 rounded-sm border px-3 py-1"
                key={q}
              >
                {q}
              </li>
            ))}
          </ul>
        </section>
        {(metadata.safetyDs || metadata.technicalDs) && (
          <section aria-labelledby="datasheet-heading">
            <h2 id="datasheet-heading" className="text-muted-foreground mb-1">
              Data Sheet Downloads
            </h2>
            <div className="flex flex-col gap-2 space-x-0 sm:flex-row sm:gap-0 sm:space-x-3">
              {metadata.safetyDs && (
                <Button variant="secondary" asChild>
                  <Link href={metadata.safetyDs} target="_blank">
                    <IconShield />
                    Material Safety Data Sheet
                  </Link>
                </Button>
              )}
              {metadata.technicalDs && (
                <Button variant="secondary" asChild>
                  <Link href={metadata.technicalDs} target="_blank">
                    <IconChart />
                    Technical Data Sheet
                  </Link>
                </Button>
              )}
            </div>
          </section>
        )}
      </div>
    </section>
  );
};
