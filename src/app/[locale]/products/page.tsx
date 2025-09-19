import { Suspense } from 'react'
import type { Metadata } from 'next'

import { getTranslations } from 'next-intl/server'

import { TabsContent } from '@/components/ui/tabs'

import { getProducts } from '@/features/products/actions'
import { ProductCard } from '@/features/products/components/product-card'
import { Tablist } from '@/features/products/components/tab-list'
import { Locale } from '@/locale'

export const metadata: Metadata = {
  title: 'High-Performance Products | 100 Power',
  description:
    'Explore high-performance lubrication, engine additives, and industrial products engineered for durability, reduced wear, and optimal machine performance under extreme conditions.',
  openGraph: {
    title: 'High-Performance Products | 100 Power',
    description:
      'Explore high-performance lubrication, engine additives, and industrial products engineered for durability, reduced wear, and optimal machine performance under extreme conditions.',
    url: 'https://www.100poweruae.com/products',
    type: 'website',
  },
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
