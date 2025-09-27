import Image from 'next/image'

import { getTranslations } from 'next-intl/server'

import { Badge } from '@/components/ui/badge'
import { Marquee } from '@/components/ui/marquee'

import { IconShip } from '@/assets/icons/ship'

import { INDUSTRIES } from '@/data/constants'

export const Featured = async () => {
  const industriesT = await getTranslations('home.industries')
  type Key = Parameters<typeof industriesT>[0]

  const t = await getTranslations('home.featured')
  return (
    <section
      aria-labelledby="featured-solutions-heading"
      className="py-6 sm:py-9 md:py-12"
    >
      {/* Industries Marquee */}
      <div className="container relative z-10 max-w-6xl bg-card p-4 shadow-primary-foreground/5 shadow-xl sm:p-6 md:rounded-2xl">
        <div className="sr-only">
          <h3>Industries We Serve</h3>
        </div>
        <Marquee aria-label="Industries we serve" className="[--duration:30s]">
          {INDUSTRIES.map(({ Icon }, i) => (
            <div
              className="flex items-center gap-1.5 rounded-lg bg-muted px-3.5 py-2"
              key={i}
              role="listitem"
            >
              <Icon aria-hidden="true" className="size-5" />
              <span>{industriesT(`industry.${i}.label` as Key)}</span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Main Content */}
      <div className="-mt-8 sm:-mt-12 md:-mt-14 container">
        <article className="rounded-xl bg-card/60 p-4 sm:p-6 md:p-9">
          <header className="mx-auto max-w-4xl space-y-3 pt-8 text-center sm:space-y-4 sm:pt-10 md:pt-12">
            <Badge>
              <IconShip aria-hidden="true" />
              {t('badge')}
            </Badge>
            <h2
              className="font-bold text-2xl tracking-tight sm:text-3xl md:text-4xl"
              id="featured-solutions-heading"
            >
              {t('title.text')}{' '}
              <span className="text-primary">{t('title.highlight')}</span>
            </h2>
            <p className="font-light text-sm sm:text-base">
              {t('description.line1')}{' '}
              <span className="font-medium text-primary">
                {t('description.highlight')}
              </span>{' '}
              {t('description.last')}
            </p>
          </header>

          {/* Solutions Grid */}
          <div
            aria-label="Featured solutions"
            className="mt-4 grid grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-6"
            role="list"
          >
            <article
              className="relative flex aspect-4/3 items-end justify-start overflow-hidden rounded-xl bg-card p-4 transition-transform hover:scale-102 sm:aspect-5/4 sm:p-6"
              role="listitem"
            >
              <Image
                alt="Marine transportation and logistics solution showing a modern harbor with ships and cargo containers"
                className="object-cover"
                fill
                priority={false}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                src="/images/harbour.webp"
              />
              <div className="relative z-10 rounded-lg bg-card px-3 py-2 text-sm tracking-tight sm:text-base">
                <h3 className="font-medium">{t('solution.marine')}</h3>
              </div>
            </article>

            <article
              className="relative flex aspect-4/3 items-end justify-start overflow-hidden rounded-xl bg-card p-4 transition-transform hover:scale-102 sm:aspect-5/4 sm:p-6"
              role="listitem"
            >
              <Image
                alt="Aviation and aerospace logistics solution featuring modern aircraft and airport infrastructure"
                className="object-cover"
                fill
                priority={false}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                src="/images/airplane.webp"
              />
              <div className="relative z-10 rounded-lg bg-card px-3 py-2 text-sm tracking-tight sm:text-base">
                <h3 className="font-medium">{t('solution.aviation')}</h3>
              </div>
            </article>
          </div>
        </article>
      </div>
    </section>
  )
}
