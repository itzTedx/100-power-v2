import Image from 'next/image'

import { IconCertificate } from '@tabler/icons-react'

import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export const Certified = () => {
  return (
    <section className="container max-w-7xl space-y-8 pb-20">
      <Badge>
        <IconCertificate />
        USA-Certified
      </Badge>
      <Separator />
      <div className="grid gap-6 md:grid-cols-3">
        <div className="col-span-2 space-y-6">
          <h2 className="font-bold font-helvetica text-4xl">
            Engineered with Certified U.S. Technology
          </h2>
          <p className="font-light text-xl leading-normal tracking-tight">
            We proudly incorporate Anti-Friction Technology developed in the
            USA, ensuring unmatched quality, reliability, and innovation. This
            badge represents our commitment to world-class performance and
            engineering excellence in lubrication science.
          </p>
          <ul className="list-inside list-disc space-y-3 font-light text-xl leading-normal tracking-tight">
            <li> Certified Micro-Metallurgical Process</li>
            <li>Made to U.S. Standards</li>
            <li>Trusted in Industrial & Military Applications</li>
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
