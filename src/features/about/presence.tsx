import { Dot } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

import { DotMap } from '@/assets/dot-map'

export const Presence = async () => {
  const t = await getTranslations('about.presence')
  return (
    <section className="space-y-8 pt-8 md:pt-12">
      <Badge>
        <Dot /> {t('badge')}
      </Badge>
      <Separator />
      <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <h2 className="text-center font-bold font-helvetica text-3xl sm:text-4xl md:text-left md:text-5xl">
          {t('title')}
        </h2>

        <p className="whitespace-pre-line text-base leading-relaxed tracking-tight sm:text-xl md:text-2xl">
          {t('description')}
        </p>
      </div>
      <DotMap
        aria-label="100 Power global presence map"
        className="h-auto w-full"
      />
    </section>
  )
}
