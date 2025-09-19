import { IconStar } from '@tabler/icons-react'
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

export const Benefits = async () => {
  const t = await getTranslations('solutions.benefits')
  const BENEFITS = [
    {
      icon: '⏳',
      badge: '01 / Reliable Output',
      title: 'Extended Service Intervals',
      desc: 'Keep your equipment running at peak performance far beyond the limits of traditional lubricants. Our solution reduces the frequency of oil changes and maintenance stops.',
    },
    {
      icon: '⚡',
      badge: '02 / Reliable Output',
      title: 'Consistent Performance',
      desc: 'Experience steady, reliable output across the life of your machinery. Unlike conventional products that degrade over time, our formula maintains functionality even under extreme conditions.',
    },
    {
      icon: '💧',
      badge: '03 / Efficiency',
      title: 'Fuel & Oil Efficiency',
      desc: 'Our technology helps maintain a stable fuel and oil curve — preventing spikes in usage as engines age or workloads increase. This means reduced costs and improved resource management.',
    },
    {
      icon: '🔩',
      badge: '04 / Prolonged Life',
      title: 'Extended Machinery Life',
      desc: 'With wear reduction of up to 95%, our micro-metallurgical technology extends the lifespan of engines, hydraulics, and gear systems-by up to 8x-reducing replacement costs and downtime.',
    },
    {
      icon: '🌱',
      badge: '05 / Greener',
      title: 'Environmental Impact',
      desc: 'We help your business operate greener. Less lubricant waste, reduced emissions, and optimized combustion all contribute to a more sustainable future — without compromising performance.',
    },
    {
      icon: '⚙️',
      badge: '06 / Low Energy Use',
      title: 'Enhanced Energy Efficiency',
      desc: 'Friction is the enemy of efficiency. Our anti-friction layer minimizes resistance, reduces power loss, and improves energy transfer — leading to lower energy consumption across your operations.',
    },
  ]

  return (
    <section className="container max-w-7xl space-y-8 pb-20">
      <Badge>
        <IconStar />
        {t('badge')}
      </Badge>
      <Separator />
      <div className="grid grid-cols-2 gap-28">
        <h2 className="whitespace-pre-line font-bold font-helvetica text-4xl">
          {t('title')}
        </h2>
        <p className="text-2xl tracking-tight">{t('description')}</p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {BENEFITS.map((b, i) => (
          <Card className="group justify-between" key={i}>
            <CardHeader>
              <p className="text-muted-foreground text-sm tracking-tight">
                {t(`benefit.${i}.badge`)}
              </p>
            </CardHeader>
            <CardContent className="mt-4">
              <div className="group-first: group-first: grid size-16 place-content-center rounded-full border border-[oklch(0.9557_0.1104_102.71)] bg-[oklch(0.9101_0.1105_88.94)] to-[oklch(0.9557_0.1104_102.71)] group-first:bg-gradient-to-t group-first:from-[oklch(0.6519_0.1345_77.03)]/50 group-first:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset_0px_4px_8px_2to-5%] md:size-20">
                {b.icon}
              </div>
              <div className="mt-2 space-y-2 md:mt-4 md:space-y-3">
                <CardTitle className="font-helvetica font-medium text-xl md:text-2xl">
                  <h3>{t(`benefit.${i}.title`)}</h3>
                </CardTitle>
                <CardDescription>
                  <p className="text-base tracking-tight md:text-lg">
                    {t(`benefit.${i}.desc`)}
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
