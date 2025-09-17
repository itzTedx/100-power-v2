import Image from 'next/image'

import { IconArrowUpRight } from '@tabler/icons-react'

import { getScopedI18n } from '@/locale/server'

import { Button } from '../ui/button'

export const Cta = async () => {
  const t = await getScopedI18n('layout.cta')
  return (
    <section aria-labelledby="cta-heading" className="container py-8 md:py-12">
      <div className="relative grid grid-cols-1 overflow-hidden rounded-sm bg-secondary px-4 text-secondary-foreground md:grid-cols-2 md:px-12">
        <div className="relative z-10 px-3 py-6 sm:pt-12 md:px-6 md:pt-20 md:pb-12">
          <h3
            className="mb-2 text-balance font-bold font-helvetica text-3xl leading-tight sm:text-4xl md:text-6xl md:leading-[1.1]"
            id="cta-heading"
          >
            {t('title')}
          </h3>
          <p className="mb-4 text-balance text-sm sm:text-base md:mb-28 md:text-lg">
            {t('description')}
          </p>
          <Button aria-label="Talk to an expert at 100 Power">
            {t('button')} <IconArrowUpRight />
          </Button>
        </div>
        <div className="relative z-10">
          <Image
            alt="100 Power branding illustration"
            className="object-contain"
            fill
            priority
            src="/images/cta-products.webp"
          />
        </div>
        <div className="absolute inset-0 z-0">
          <Image
            alt="Abstract background pattern"
            className="object-cover object-left md:object-center"
            fill
            priority
            src="/images/cta-bg.webp"
          />
        </div>
      </div>
    </section>
  )
}
