'use client'

import type { ReactNode } from 'react'

import { useLocale, useTranslations } from 'next-intl'
import { useQueryState } from 'nuqs'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { RangeFilter } from './range-filter'

export const Tablist = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useQueryState('category', {
    defaultValue: 'engine-additives',
  })
  const locale = useLocale()

  const t = useTranslations('products.breadcrumb.categories')
  return (
    <Tabs
      defaultValue="engine-additives"
      onValueChange={setCategory}
      value={category}
    >
      <div className="z-50 flex items-center justify-between bg-background/80 backdrop-blur-xl max-md:sticky max-md:top-16">
        <ScrollArea
          className="w-[85%] ltr:md:flex-1"
          dir={locale === 'ar' ? 'rtl' : 'ltr'}
        >
          <TabsList
            aria-label="Product categories"
            className="mb-2 h-auto w-full justify-start gap-2 rounded-none border-b bg-transparent px-0 py-1 text-foreground"
          >
            {/* <TabsTrigger
              className="after:-mb-1 relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:hover:bg-accent data-[state=active]:after:bg-primary"
              value="all"
            >
              {t('all')}
            </TabsTrigger> */}

            <TabsTrigger
              className="after:-mb-1 relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:hover:bg-accent data-[state=active]:after:bg-primary"
              value="engine-additives"
            >
              {t('engine-additives')}
            </TabsTrigger>
            <TabsTrigger
              className="after:-mb-1 relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:hover:bg-accent data-[state=active]:after:bg-primary"
              value="lubrication"
            >
              {t('lubrication')}
            </TabsTrigger>
            <TabsTrigger
              className="after:-mb-1 relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:hover:bg-accent data-[state=active]:after:bg-primary"
              value="marine-aviation"
            >
              {t('fuel-system')}
            </TabsTrigger>
            <TabsTrigger
              className="after:-mb-1 relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:hover:bg-accent data-[state=active]:after:bg-primary"
              value="industrial"
            >
              {t('industrial')}
            </TabsTrigger>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 touch-none bg-gradient-to-l from-background to-transparent" />
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <RangeFilter />
      </div>
      {children}
    </Tabs>
  )
}
