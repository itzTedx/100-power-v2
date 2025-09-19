import { Dot } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

import { DotMap } from '@/assets/dot-map'

export const Presence = () => {
  return (
    <section className="space-y-8 pt-8 md:pt-12">
      <Badge>
        <Dot /> Global Presence
      </Badge>
      <Separator />
      <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <h2 className="text-center font-bold font-helvetica text-3xl sm:text-4xl md:text-left md:text-5xl">
          Reaching Every Corner of the Globe
        </h2>
        <div className="space-y-4">
          <p className="text-base tracking-tight sm:text-xl md:text-2xl">
            With manufacturing rooted in the UAE and sales and support
            operations extending across the USA, and the GCC, 100 Power serves a
            growing international market with precision and purpose.
          </p>
          <p className="text-base tracking-tight sm:text-xl md:text-2xl">
            Our distribution network spans the Americas, Europe, Africa, the
            Middle East, and the GCC—ensuring fast access, localized support,
            and compliance with regional standards. From the UAE to the USA,
            Mexico to Europe, and across Africa, our technologies are trusted by
            industries that demand performance without compromise.
          </p>
        </div>
      </div>
      <DotMap
        aria-label="100 Power global presence map"
        className="h-auto w-full"
      />
    </section>
  )
}
