import Link from 'next/link'

import { getTranslations } from 'next-intl/server'

import { Button } from '@/components/ui/button'
import ImageCarousel, {
  type CarouselImages,
} from '@/components/ui/image-carousel'

import { IconChart, IconShield } from '@/assets/icons'

import { cn } from '@/lib/utils'

import { ProductMetadata } from '../actions/types'

interface Props {
  metadata: ProductMetadata
  children: React.ReactNode
}

export const Header = async ({ metadata, children }: Props) => {
  const t = await getTranslations('products')
  const carousel: CarouselImages = metadata.images.map((img) => ({ url: img }))
  return (
    <section className="grid grid-cols-1 gap-8 pt-4 md:grid-cols-2">
      <div className="not-prose h-fit md:sticky md:top-[14svh]">
        <ImageCarousel
          aspectRatio="5/4"
          imageFit="contain"
          images={carousel}
          showCarouselControls={carousel.length > 1}
          showThumbs={carousel.length > 1}
        />
      </div>

      <div className="space-y-4">
        <header>
          {metadata.range && (
            <div className="flex shrink-0 items-center gap-2">
              <div
                className={cn(
                  'size-3 rounded-full',
                  metadata.rangeKey === 'Premium'
                    ? 'bg-primary'
                    : 'bg-muted-foreground/80'
                )}
              />
              <span className="font-medium text-base sm:text-lg">
                {metadata.range}
              </span>
            </div>
          )}
          <h1 className="font-bold font-helvetica text-2xl sm:text-3xl">
            {metadata.title}
          </h1>
        </header>
        <section aria-label="overview">{children}</section>

        <section aria-labelledby="quantities-heading">
          <h2
            className="not-prose mb-1 font-semibold tracking-tight"
            id="quantities-heading"
          >
            {t('page.packings')}
          </h2>
          <ul className="not-prose flex gap-4 font-helvetica font-medium text-base">
            {metadata.quantities.map((q) => (
              <li
                className="rounded-sm border border-primary/50 bg-primary/5 px-3 py-1"
                key={q}
              >
                {q}
              </li>
            ))}
          </ul>
        </section>
        {(metadata.safetyDs || metadata.technicalDs) && (
          <section aria-labelledby="datasheet-heading">
            <h2 className="mb-1 text-muted-foreground" id="datasheet-heading">
              {t('page.downloads.title')}
            </h2>
            <div className="flex flex-col gap-2 space-x-0 sm:flex-row sm:gap-0 sm:space-x-3">
              {metadata.safetyDs && (
                <Button asChild variant="secondary">
                  <Link href={metadata.safetyDs} target="_blank">
                    <IconShield />
                    {t('page.downloads.safetyDs')}
                  </Link>
                </Button>
              )}
              {metadata.technicalDs && (
                <Button asChild variant="secondary">
                  <Link href={metadata.technicalDs} target="_blank">
                    <IconChart />
                    {t('page.downloads.technicalDs')}
                  </Link>
                </Button>
              )}
            </div>
          </section>
        )}
      </div>
    </section>
  )
}
