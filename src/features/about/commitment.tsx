import { Dot } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

import { WHO_WE_ARE } from '@/data/constants'

export const Commitment = async () => {
  const t = await getTranslations('about.commitment')
  return (
    <section className="space-y-8 py-8 md:py-12">
      <Badge>
        <Dot /> {t('badge')}
      </Badge>
      <Separator />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <h2 className="text-center font-bold font-helvetica text-3xl sm:text-4xl md:text-left md:text-5xl">
          {t('title')}
        </h2>
        <p className="text-center text-base sm:text-xl md:text-left md:text-2xl">
          {t('description')}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-2">
        {WHO_WE_ARE.map(({ label, Icon }, i) => (
          <Card className="group justify-between" key={label}>
            <CardHeader>
              <p className="text-muted-foreground">{t(`weAre.${i}.label`)}</p>
            </CardHeader>
            <CardContent className="mt-8 md:mt-12">
              <div className="group-first: group-first: grid size-16 place-content-center rounded-full border border-[oklch(0.9557_0.1104_102.71)] bg-[oklch(0.9101_0.1105_88.94)] to-[oklch(0.9557_0.1104_102.71)] group-first:bg-gradient-to-t group-first:from-[oklch(0.6519_0.1345_77.03)]/50 group-first:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset_0px_4px_8px_2to-5%] md:size-20">
                <Icon aria-hidden="true" className="text-primary-foreground" />
              </div>
              <div className="mt-2 space-y-2 md:mt-4 md:space-y-3">
                <CardTitle className="font-helvetica font-normal text-xl md:text-3xl">
                  <h3>{t(`weAre.${i}.title`)}</h3>
                </CardTitle>
                <CardDescription>
                  <p className="text-base tracking-tight md:text-lg">
                    {t(`weAre.${i}.description`)}
                  </p>
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
