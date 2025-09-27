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
    <section className="py-9 md:py-12">
      <div className="container relative z-10 max-w-6xl rounded-2xl bg-card p-6 shadow-primary-foreground/5 shadow-xl">
        <Marquee className="[--duration:30s]">
          {INDUSTRIES.map(({ Icon }, i) => (
            <div
              className="flex items-center gap-1.5 rounded-lg bg-muted px-3.5 py-2"
              key={i}
            >
              <Icon className="size-5" />
              {industriesT(`industry.${i}.label` as Key)}
            </div>
          ))}
        </Marquee>
      </div>
      <div className="-mt-14 container">
        <div className="rounded-xl bg-card/60 p-9">
          <div className="mx-auto max-w-4xl space-y-4 pt-12 text-center">
            <Badge>
              <IconShip />
              {t('badge')}
            </Badge>
            <h2 className="font-bold text-4xl tracking-tight">
              {t('title.text')}{' '}
              <span className="text-primary">{t('title.highlight')}</span>
            </h2>
            <p className="font-light">
              {t('description.line1')}{' '}
              <span className="font-medium text-primary">
                {t('description.highlight')}
              </span>{' '}
              {t('description.last')}
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-6">
            <div className="relative flex aspect-5/4 items-end justify-start overflow-hidden rounded-xl bg-card p-6 transition-transform hover:scale-102">
              <Image
                alt=""
                className="object-cover"
                fill
                src="/images/harbour.webp"
              />
              <div className="relative z-10 rounded-lg bg-card px-3 py-2 tracking-tight">
                {t('solution.marine')}
              </div>
            </div>
            <div className="relative flex aspect-5/4 items-end justify-start overflow-hidden rounded-xl bg-card p-6 transition-transform hover:scale-102">
              <Image
                alt=""
                className="object-cover"
                fill
                src="/images/airplane.webp"
              />
              <div className="relative z-10 rounded-lg bg-card px-3 py-2 tracking-tight">
                {t('solution.aviation')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
