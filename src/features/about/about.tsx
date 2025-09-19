import { Dot } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
export const About = async () => {
  const t = await getTranslations('about.about')
  return (
    <section className="space-y-8 py-8 md:py-12">
      <Badge>
        <Dot /> {t('badge')}
      </Badge>
      <Separator />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4">
        <h2 className="text-center font-bold font-helvetica text-2xl leading-normal sm:text-3xl md:text-left md:text-4xl">
          {t('title')}
        </h2>
        <article className="col-span-2 space-y-4 font-helvetica text-base leading-relaxed sm:text-xl md:text-2xl">
          <h3 className="font-medium text-xl md:text-3xl">{t('subtitle')}</h3>
          <p>{t('description')}</p>
        </article>
      </div>
    </section>
  )
}
