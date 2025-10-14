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
    | 'locomotive'
    | 'industrial'
}

export function ProductGrid({ products, category = 'all' }: Props) {
  const [range] = useQueryState('range', { defaultValue: 'all' })
  const [query] = useQueryState('query', { defaultValue: 'all' })

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

    // Filter by subcategory when a specific query is provided
    if (query !== 'all') {
      const normalized = query.toLowerCase()
      result = result.filter(
        (p) => (p.subcategory ?? '').toLowerCase() === normalized
      )
    }

    return result
  }, [products, category, range, query])

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
