import { Dot } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

import { TechStack } from '../tech-stack'

export const Technologies = async () => {
  const t = await getTranslations('home.technologies')
  return (
    <section aria-labelledby="technologies-heading" className="py-8 md:py-12">
      <div className="container max-w-5xl py-8 text-center md:py-20">
        <h2
          className="text-balance font-bold font-helvetica text-4xl sm:text-5xl md:text-6xl"
          id="technologies-heading"
        >
          {t('title.first')}{' '}
          <span className="text-primary"> {t('title.highlight')}</span>{' '}
          {t('title.last')}
        </h2>
        <p className="mt-3 text-balance text-xl tracking-tight">
          {t('description')}
        </p>
      </div>
      <div className="container max-w-7xl space-y-8 pt-20">
        <Badge>
          <Dot />
          {t('badge')}
        </Badge>
        <Separator />
        <TechStack />
      </div>
    </section>
  )
}
