'use client'

import { useMemo } from 'react'

import { useQueryState } from 'nuqs'

import { cn } from '@/lib/utils'

const RANGE_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'Regular', label: 'Regular' },
  { value: 'Premium', label: 'Premium' },
  { value: 'Super Premium', label: 'Super Premium' },
] as const

export function RangeFilter() {
  const [range, setRange] = useQueryState('range', { defaultValue: 'all' })

  const options = useMemo(() => RANGE_OPTIONS, [])

  return (
    <>
      <div className="hidden shrink-0 flex-wrap items-center gap-2 md:flex">
        {options.map((opt) => (
          <button
            aria-pressed={range === opt.value}
            className={cn(
              'inline-flex h-9 items-center justify-center rounded-md border px-3 font-medium text-sm transition-colors',
              'hover:bg-accent hover:text-foreground',
              range === opt.value
                ? 'border-primary bg-background text-foreground shadow-sm'
                : 'border-transparent bg-muted/40 text-muted-foreground'
            )}
            key={opt.value}
            onClick={() => setRange(opt.value)}
            type="button"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </>
  )
}
