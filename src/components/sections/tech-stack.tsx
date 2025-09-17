import Image from 'next/image'

import { FEATURES } from '@/data/constants'

import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

export const TechStack = () => {
  return FEATURES.map((item) => (
    <div className="group py-6" key={item.title}>
      <div className="grid grid-cols-1 items-start gap-9 md:grid-cols-2">
        <h3 className="inline-flex items-center gap-3 font-bold font-helvetica text-5xl">
          {item.title}
        </h3>

        <p className="text-xl tracking-tight">{item.description}</p>
      </div>
      <div className="grid gap-9 py-12 md:grid-cols-3">
        <ul className="order-2 grid grid-cols-2 gap-6 md:order-1 md:col-span-2 md:group-last:order-2">
          {item.features.map((feature) => (
            <li className="space-y-4 md:p-3" key={feature.id}>
              <div className="space-y-3">
                <p className="text-muted-foreground/80">0{feature.id}</p>
                <Separator />
                <h4 className="font-helvetica font-medium text-2xl">
                  {feature.title}
                </h4>
              </div>
              <p className="text-lg text-muted-foreground">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
        {/* <CardFlip data={item} Icon={item.Icon} /> */}
        <div className="relative order-1 flex min-h-64 items-end overflow-hidden rounded-md sm:order-2 md:group-last:order-1">
          <div className="relative z-10 flex w-full items-center justify-between p-6 text-accent">
            <div>
              <h5 className="font-helvetica text-2xl">{item.title}</h5>
              <p className="tracking-tight">{item.subtitle}</p>
            </div>
            <Button
              aria-label={`Learn more about ${item.title}`}
              className="size-12"
              size="icon"
            >
              <item.Icon className="size-5" />
            </Button>
          </div>
          <Image
            alt={`Technology: ${item.title}`}
            className="object-cover"
            fill
            src={item.image}
          />
        </div>
      </div>
    </div>
  ))
}
