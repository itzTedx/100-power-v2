'use client'

import { useMemo } from 'react'

import { useQueryState } from 'nuqs'

import { ProductMetadata } from '@/features/products/actions/types'
import { ProductCard } from '@/features/products/components/product-card'

interface Props {
  products: ProductMetadata[]
  category?:
    | 'all'
    | 'engine-oil'
    | 'lubrication'
    | 'marine'
    | 'aviation'
    | 'industrial'
}

export function ProductGrid({ products, category = 'all' }: Props) {
  const [range] = useQueryState('range', { defaultValue: 'all' })

  const filtered = useMemo(() => {
    let result = products

    if (category !== 'all') {
      result = result.filter((p) => p.category === category)
    }

    if (range !== 'all') {
      const normalized = range.toLowerCase()
      result = result.filter((p) => {
        if (p.rangeKey) {
          return p.rangeKey.toLowerCase() === normalized
        }
        return (p.range ?? '').toLowerCase() === normalized
      })
    }

    return result
  }, [products, category, range])

  return (
    <section
      aria-label="Products"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {filtered.map((product, id) => (
        <ProductCard data={product} key={`${id}-${product.title}`} />
      ))}
    </section>
  )
}
