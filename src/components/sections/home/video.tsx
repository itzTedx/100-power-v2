import Link from 'next/link'

import { ArrowUpRight, Play } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

import { Button, buttonVariants } from '@/components/ui/button'

import { cn } from '@/lib/utils'

export const Video = async () => {
  const t = await getTranslations('home.video')
  return (
    <section
      aria-labelledby="innovation-heading"
      className="container py-8 sm:py-12"
    >
      <article className="relative flex aspect-4/3 h-full flex-col items-end justify-end gap-4 overflow-hidden rounded-sm bg-gray-200 p-4 sm:aspect-video sm:p-9">
        <button
          aria-label="Play 100 Power brand video"
          className="group -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 z-10 flex cursor-pointer items-center gap-2 self-end font-semibold text-base text-white tracking-tight transition-colors hover:text-primary sm:text-lg"
          type="button"
        >
          <div
            aria-hidden="true"
            className={cn(
              buttonVariants(),
              'grid size-12 place-content-center rounded-full bg-black text-secondary-foreground transition-colors duration-300 group-hover:bg-primary sm:size-14'
            )}
          >
            <Play className="size-5 sm:size-6" />
          </div>
          <span>{t('play')}</span>
        </button>
        <div className="relative z-10 mt-auto space-y-2 text-end md:space-y-4">
          <h2
            className="font-bold font-helvetica text-background text-xl sm:text-5xl md:text-6xl"
            id="innovation-heading"
          >
            {t('title.first')}
            <br />
            {t('title.last')}
          </h2>

          <Button
            asChild
            className="bg-background text-foreground"
            variant="secondary"
          >
            <Link
              aria-label="Learn more about our technology"
              href="/technology"
            >
              {t('button')} <ArrowUpRight className="size-3 sm:size-5" />
            </Link>
          </Button>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 z-1 bg-foreground/50"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 z-1 h-2/3 bg-gradient-to-t from-foreground to-transparent"
        />
        <video
          aria-label="100 Power brand video"
          autoPlay
          className="absolute inset-0 h-full w-full object-cover"
          loop
          muted
          title="100 Power brand video"
        >
          <source src="/videos/100-Power-Info.webm" type="video/webm" />
          Your browser does not support the video tag. Watch our brand video on
          our{' '}
          <a
            href="https://www.youtube.com/@100poweruae"
            rel="noopener noreferrer"
            target="_blank"
          >
            YouTube channel
          </a>
          .
        </video>
      </article>
    </section>
  )
}
