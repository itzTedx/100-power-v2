import Image from 'next/image'

import { getTranslations } from 'next-intl/server'

import { FEATURES } from '@/data/constants'

import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

export const TechStack = async () => {
  const t = await getTranslations('home.technologies')
  type Key = Parameters<typeof t>[0]

  return FEATURES.map((item, i) => (
    <div className="group md:py-6" key={item.title}>
      <div className="grid grid-cols-1 items-start gap-9 md:grid-cols-2">
        <h3 className="inline-flex items-center gap-3 font-bold font-helvetica text-3xl sm:text-4xl md:text-5xl">
          {t(`technology.${i}.title` as Key)}
        </h3>

        <p className="text-xl tracking-tight">
          {t(`technology.${i}.description` as Key)}
        </p>
      </div>
      <div className="grid gap-9 py-12 md:grid-cols-3">
        <ul className="order-2 grid grid-cols-2 gap-6 md:order-1 md:col-span-2 md:group-last:order-2">
          {item.features.map((feature, idx) => (
            <li className="space-y-4 md:p-3" key={feature.id}>
              <div className="space-y-3">
                <p className="text-muted-foreground/80">0{feature.id}</p>
                <Separator />
                <h4 className="font-helvetica font-medium text-2xl">
                  {t(`technology.${i}.feature.${idx}.title` as Key)}
                </h4>
              </div>
              <p className="text-muted-foreground md:text-lg">
                {t(`technology.${i}.feature.${idx}.description` as Key)}
              </p>
            </li>
          ))}
        </ul>

        <div className="relative order-1 flex min-h-64 items-end overflow-hidden rounded-md sm:order-2 md:group-last:order-1">
          <div className="relative z-10 flex w-full items-center justify-between p-6 text-accent">
            <div>
              <h5 className="font-helvetica text-2xl">
                {t(`technology.${i}.title` as Key)}
              </h5>
              <p className="tracking-tight">
                {t(`technology.${i}.subtitle` as Key)}
              </p>
            </div>
            <Button
              aria-label={`Learn more about ${t(
                `technology.${i}.title` as Key
              )}`}
              className="size-12"
              size="icon"
            >
              <item.Icon className="size-5" />
            </Button>
          </div>
          <Image
            alt={`Technology: ${t(`technology.${i}.title` as Key)}`}
            className="object-cover"
            fill
            src={item.image}
          />
        </div>
      </div>
    </div>
  ))
}
