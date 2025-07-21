import Link from "next/link";

import { ArrowUpRight, Play } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Video = () => {
  return (
    <section
      className="container py-8 sm:py-12"
      aria-labelledby="innovation-heading"
    >
      <article className="relative flex aspect-4/3 h-full flex-col items-end justify-end gap-4 overflow-hidden rounded-sm bg-gray-200 p-4 sm:aspect-video sm:p-9">
        <button
          className="group hover:text-primary absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center gap-2 self-end text-base font-semibold tracking-tight text-white transition-colors sm:text-lg"
          aria-label="Play 100 Power brand video"
          type="button"
        >
          <div
            className={cn(
              buttonVariants(),
              "text-secondary-foreground group-hover:bg-primary grid size-12 place-content-center rounded-full bg-black transition-colors duration-300 sm:size-14"
            )}
            aria-hidden="true"
          >
            <Play className="size-5 sm:size-6" />
          </div>
          <span>Play Video</span>
        </button>
        <div className="relative z-10 mt-auto space-y-2 text-end md:space-y-4">
          <h2
            id="innovation-heading"
            className="font-helvetica text-background text-xl font-bold sm:text-5xl md:text-6xl"
          >
            Driven by Innovation.
            <br />
            Engineered for Impact.
          </h2>

          <Button
            variant="secondary"
            asChild
            className="bg-background text-foreground"
          >
            <Link
              href="/technology"
              aria-label="Learn more about our technology"
            >
              Learn More <ArrowUpRight className="size-3 sm:size-5" />
            </Link>
          </Button>
        </div>
        <div
          className="bg-foreground/50 absolute inset-0 z-1"
          aria-hidden="true"
        />
        <div
          className="from-foreground absolute inset-x-0 bottom-0 z-1 h-2/3 bg-gradient-to-t to-transparent"
          aria-hidden="true"
        />
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 h-full w-full object-cover"
          title="100 Power brand video"
          aria-label="100 Power brand video"
          poster="/images/video-poster.webp"
        >
          <source src="/videos/powerx.webm" type="video/webm" />
          Your browser does not support the video tag. Watch our brand video on
          our{" "}
          <a
            href="https://www.youtube.com/@100poweruae"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube channel
          </a>
          .
        </video>
      </article>
    </section>
  );
};
