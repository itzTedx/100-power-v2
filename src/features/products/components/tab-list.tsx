'use client'

import type { ReactNode } from 'react'

import { useLocale, useTranslations } from 'next-intl'
import { parseAsString, useQueryStates } from 'nuqs'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { cn } from '@/lib/utils'

import { AviationCategories } from './aviation-categories'
import { IndustrialCategories } from './industrial-categories'
import { LocomotiveCategories } from './locomotive-categories'
import { RangeFilter } from './range-filter'

export const Tablist = ({ children }: { children: ReactNode }) => {
  const [q, setQ] = useQueryStates({
    category: parseAsString.withDefault('engine-oil'),
    query: parseAsString.withDefault('all'),
    range: parseAsString.withDefault('all'),
  })
  const locale = useLocale()

  const { category } = q

  const t = useTranslations('products.breadcrumb.categories')
  return (
    <Tabs
      defaultValue="engine-oil"
      onValueChange={(value) =>
        setQ({
          category: value,
          query: null,
          range: null,
        })
      }
      value={category}
    >
      <div
        className="z-50 flex items-center justify-between bg-background/80 backdrop-blur-xl max-md:sticky max-md:top-16"
        dir={locale === 'ar' ? 'rtl' : 'ltr'}
      >
        <ScrollArea
          className={cn(
            'ltr:md:flex-1',
            category === 'engine-oil' ? 'w-[85%]' : 'w-full'
          )}
          dir={locale === 'ar' ? 'rtl' : 'ltr'}
        >
          <TabsList
            aria-label="Product categories"
            className="mb-2 h-auto w-full justify-start gap-2 rounded-none border-b bg-transparent px-0 py-1 text-foreground"
          >
            <TabsTrigger
              className="after:-mb-1 relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:hover:bg-accent data-[state=active]:after:bg-primary"
              value="engine-oil"
            >
              {t('engine-oil')}
            </TabsTrigger>
            <TabsTrigger
              className="after:-mb-1 relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:hover:bg-accent data-[state=active]:after:bg-primary"
              value="lubrication"
            >
              {t('lubrication')}
            </TabsTrigger>
            <TabsTrigger
              className="after:-mb-1 relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:hover:bg-accent data-[state=active]:after:bg-primary"
              value="marine"
            >
              {t('marine')}
            </TabsTrigger>
            <TabsTrigger
              className="after:-mb-1 relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:hover:bg-accent data-[state=active]:after:bg-primary"
              value="aviation"
            >
              {t('aviation')}
            </TabsTrigger>
            <TabsTrigger
              className="after:-mb-1 relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:hover:bg-accent data-[state=active]:after:bg-primary"
              value="locomotive"
            >
              {t('locomotive')}
            </TabsTrigger>
            <TabsTrigger
              className="after:-mb-1 relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:hover:bg-accent data-[state=active]:after:bg-primary"
              value="industrial"
            >
              {t('industrial')}
            </TabsTrigger>
            <div className="pointer-events-none absolute inset-y-0 w-20 touch-none from-background to-transparent ltr:right-0 ltr:bg-gradient-to-l rtl:left-0 rtl:bg-gradient-to-r" />
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        {category === 'engine-oil' && <RangeFilter />}
        {category === 'aviation' && <AviationCategories />}
        {category === 'industrial' && <IndustrialCategories />}
        {category === 'locomotive' && <LocomotiveCategories />}
      </div>
      {children}
    </Tabs>
  )
}
