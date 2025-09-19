import { Suspense } from 'react'
import type { Metadata } from 'next'

import { TabsContent } from '@/components/ui/tabs'

import { getProducts } from '@/features/products/actions'
import { ProductCard } from '@/features/products/components/product-card'
import { Tablist } from '@/features/products/components/tab-list'

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

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <main className="container space-y-8 py-12">
      <header className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <h1 className="font-bold font-helvetica text-3xl sm:text-4xl md:text-5xl">
          High-Performance Products for Demanding Machines
        </h1>
        <div>
          <p className="mb-2 text-lg tracking-tight sm:text-xl md:text-2xl">
            Each product is developed with precision and purpose - to enhance{' '}
            <span className="text-primary">
              durability, reduce wear, and improve performance
            </span>{' '}
            under extreme conditions.
          </p>
        </div>
      </header>
      <Suspense fallback={'Loading...'}>
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
