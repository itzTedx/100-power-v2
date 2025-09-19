import Image from 'next/image'

import { IconCertificate } from '@tabler/icons-react'
import { getTranslations } from 'next-intl/server'

import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export const Certified = async () => {
  const t = await getTranslations('solutions.certified')
  return (
    <section className="container max-w-7xl space-y-8 pb-20">
      <Badge>
        <IconCertificate />
        {t('badge')}
      </Badge>
      <Separator />
      <div className="grid gap-6 md:grid-cols-3">
        <div className="col-span-2 space-y-6">
          <h2 className="font-bold font-helvetica text-4xl">{t('title')}</h2>
          <p className="font-light text-xl leading-normal tracking-tight">
            {t('description')}
          </p>
          <ul className="list-inside list-disc space-y-3 font-light text-xl leading-normal tracking-tight">
            <li>{t('list.one')}</li>
            <li>{t('list.two')}</li>
            <li>{t('list.three')}</li>
          </ul>
        </div>
        <div className="flex size-56 items-center justify-center md:h-full md:w-full">
          <div className="relative aspect-square h-full shrink-0">
            <Image
              alt=""
              className="object-contain object-center"
              fill
              src="/images/usa-certificate.png"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
