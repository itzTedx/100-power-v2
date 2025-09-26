import Link from 'next/link'

import { IconArrowUpRight } from '@tabler/icons-react'
import { Locale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'

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

type Props = {
  params: Promise<{ locale: Locale }>
}

export default async function Home({ params }: Props) {
  const { locale } = await params
  // Enable static rendering
  setRequestLocale(locale)

  const t = await getTranslations('home.faqs')

  return (
    <main>
      <Hero />
      <About />
      {/* <Industries /> */}
      <Video />
      <Products />
      <Technologies />

      <section className="container grid max-w-7xl gap-9 py-8 md:grid-cols-2 md:py-12">
        <div className="space-y-4">
          <Badge>
            <IconUserQuestion />
            {t('badge')}
          </Badge>
          <Separator />
          <div className="flex flex-col items-start justify-between gap-4 sm:gap-6 md:flex-row md:gap-9">
            <h2 className="inline-flex items-center gap-3 font-helvetica font-medium text-4xl md:text-5xl">
              {t('title')}
            </h2>

            <Button asChild className="w-fit" variant="secondary">
              <Link href="/contact">
                {t('button')} <IconArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
        <Faqs />
      </section>
    </main>
  )
}
