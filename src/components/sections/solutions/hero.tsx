import Link from 'next/link'

import { ArrowUpRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

import { Button } from '@/components/ui/button'

export const SolutionHero = async () => {
  const t = await getTranslations('solutions.hero')
  return (
    <section className="container z-10 max-w-4xl overflow-hidden py-20 text-center">
      <h1 className="mb-6 font-bold font-helvetica text-4xl md:text-6xl">
        {t('title')}
      </h1>
      <p className="mb-8 text-lg md:text-xl">{t('description')}</p>
      <Button asChild>
        <Link href="/products">
          {t('button')} <ArrowUpRight />
        </Link>
      </Button>
    </section>
  )
}
