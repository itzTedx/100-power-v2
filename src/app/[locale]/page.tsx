import Link from 'next/link'

import { IconArrowUpRight } from '@tabler/icons-react'

import { Faqs } from '@/components/sections/faq'
import { About } from '@/components/sections/home/about'
import { Hero } from '@/components/sections/home/hero'
import { Products } from '@/components/sections/home/products'
import { Technologies } from '@/components/sections/home/technologies'
import { Video } from '@/components/sections/home/video'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { IconUserQuestion } from '@/assets/icons'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Video />
      <Products />
      {/* <Industries /> */}
      <Technologies />

      <section className="container max-w-7xl space-y-6 py-8 md:space-y-8 md:py-12">
        <Badge>
          <IconUserQuestion />
          Frequently Asked Questions
        </Badge>
        <Separator />
        <div className="flex flex-col items-start justify-between gap-4 sm:gap-6 md:flex-row md:gap-9">
          <h2 className="inline-flex items-center gap-3 font-helvetica font-medium text-4xl md:text-5xl">
            Have any questions?
          </h2>

          <Button asChild className="w-fit" variant="secondary">
            <Link href="/contact">
              Ask as anything <IconArrowUpRight />
            </Link>
          </Button>
        </div>
        <Faqs />
      </section>
    </main>
  )
}
