import { Suspense } from 'react'
import type { Metadata } from 'next'

import { getLocale, getTranslations } from 'next-intl/server'

import { TabsContent } from '@/components/ui/tabs'

import { getProducts } from '@/features/products/actions'
import { ProductCard } from '@/features/products/components/product-card'
import { Tablist } from '@/features/products/components/tab-list'
import { Locale } from '@/locale'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata.products')
  const locale = await getLocale()

  const title = t('title')
  const description = t('description')
  const keywords = t('keywords')
  const image = '/images/hero-oil.webp'
  const url = '/products'

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `/en${url}`,
        ar: `/ar${url}`,
        ru: `/ru${url}`,
        'x-default': `/en${url}`,
      },
    },
    keywords,

    openGraph: {
      title,
      description,
      url: url,
      siteName: '100 Power',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: '100 Power - Next-Gen Lubrication Technology',
        },
      ],
      locale,
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      site: '@100poweruae',
    },
  }
}

interface Props {
  params: Promise<{ locale: Locale }>
}

export default async function ProductsPage({ params }: Props) {
  const { locale } = await params
  const products = await getProducts({ locale })
  const t = await getTranslations('products')

  return (
    <main className="container space-y-8 py-12">
      <header className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <h1 className="font-bold font-helvetica text-3xl sm:text-4xl md:text-5xl">
          {t('header.title')}
        </h1>
        <div>
          <p className="mb-2 text-lg tracking-tight sm:text-xl md:text-2xl">
            {t('header.description.first')}{' '}
            <span className="text-primary">
              {t('header.description.highlight')}
            </span>{' '}
            {t('header.description.last')}
          </p>
        </div>
      </header>
      <Suspense fallback={t('loading')}>
        <Tablist>
          <TabsContent value="all">
            <section
              aria-label="All Products"
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {products.map((product, id) => (
                <ProductCard data={product} key={`${id}-${product.title}`} />
              ))}
            </section>
          </TabsContent>

          <TabsContent value="engine-additives">
            <section
              aria-label="Engine Additives"
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {products
                .filter((p) => p.category === 'engine-additives')
                ?.map((product, id) => (
                  <ProductCard data={product} key={`${id}-${product.title}`} />
                ))}
            </section>
          </TabsContent>
          <TabsContent value="lubrication">
            <section
              aria-label="Lubrication Products"
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {products
                .filter((p) => p.category === 'lubrication')
                ?.map((product, id) => (
                  <ProductCard data={product} key={`${id}-${product.title}`} />
                ))}
            </section>
          </TabsContent>
          <TabsContent value="fuel-system">
            <section
              aria-label="Fuel System Products"
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {products
                .filter((p) => p.category === 'fuel-system')
                ?.map((product, id) => (
                  <ProductCard data={product} key={`${id}-${product.title}`} />
                ))}
            </section>
          </TabsContent>
          <TabsContent value="industrial">
            <section
              aria-label="Industrial Application Products"
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {products
                .filter((p) => p.category === 'industrial')
                ?.map((product, id) => (
                  <ProductCard data={product} key={`${id}-${product.title}`} />
                ))}
            </section>
          </TabsContent>
        </Tablist>
      </Suspense>
    </main>
  )
}
