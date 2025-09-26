import Image from 'next/image'
import Link from 'next/link'

import { ArrowUpRight, Dot } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { CATEGORIES_LINKS } from '@/data/constants'

export const Products = async () => {
  // const locale = await getLocale()
  // const products = await getProducts({ locale })
  const t = await getTranslations('home.products')
  return (
    <section
      aria-labelledby="products-heading"
      className="container max-w-7xl space-y-8 py-8 sm:py-12"
    >
      <Badge>
        <Dot />
        {t('badge')}
      </Badge>
      <Separator />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <h2
          className="font-bold font-helvetica text-2xl sm:text-4xl md:text-5xl"
          id="products-heading"
        >
          {t('title')}
        </h2>
        <div>
          <p className="mb-2 text-base tracking-tight sm:text-xl md:text-2xl">
            {t('description.first')}{' '}
            <span className="text-primary">{t('description.highlight')}</span>{' '}
            {t('description.last')}
          </p>
          <Button
            aria-label="Explore all products"
            asChild
            className="w-full sm:w-auto"
            variant="secondary"
          >
            <Link href="/products">
              {t('button')} <ArrowUpRight size={18} />
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {CATEGORIES_LINKS.map((link) => (
          <div
            className="relative grid grid-cols-3 items-center gap-3 rounded-xl bg-card p-6 transition-transform hover:scale-102"
            key={link.id}
          >
            <Link className="absolute inset-0 z-10" href={link.href} />
            <div className="col-span-2">
              <h3 className="font-semibold text-2xl tracking-tight">
                {link.title}
              </h3>
              <p className="text text-muted-foreground">{link.description}</p>
            </div>
            <div className="relative aspect-square">
              <Image alt="" className="object-contain" fill src={link.image} />
            </div>
          </div>
        ))}
      </div>

      {/* <div className="mx-auto mt-4 w-fit">
        <Button aria-label="Explore all products" asChild variant="secondary">
          <Link href="/products">
            {t('button')} <ArrowUpRight size={18} />
          </Link>
        </Button>
      </div> */}
    </section>
  )
}
