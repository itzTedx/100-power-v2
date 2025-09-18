'use client'

import type { ReactNode } from 'react'

import { useQueryState } from 'nuqs'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const Tablist = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useQueryState('category', {
    defaultValue: 'all',
  })
  return (
    <Tabs
      className=""
      defaultValue="all"
      onValueChange={setCategory}
      value={category}
    >
      <ScrollArea>
        <TabsList
          aria-label="Product categories"
          className="mb-2 h-auto w-full gap-2 rounded-none border-b bg-transparent px-0 py-1 text-foreground"
        >
          <TabsTrigger
            className="after:-mb-1 relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:hover:bg-accent data-[state=active]:after:bg-primary"
            value="all"
          >
            All Products
          </TabsTrigger>

          <TabsTrigger
            className="after:-mb-1 relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:hover:bg-accent data-[state=active]:after:bg-primary"
            value="engine-additives"
          >
            Engine Additives
          </TabsTrigger>
          <TabsTrigger
            className="after:-mb-1 relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:hover:bg-accent data-[state=active]:after:bg-primary"
            value="lubrication"
          >
            Lubrication
          </TabsTrigger>
          <TabsTrigger
            className="after:-mb-1 relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:hover:bg-accent data-[state=active]:after:bg-primary"
            value="fuel-system"
          >
            Fuel System
          </TabsTrigger>
          <TabsTrigger
            className="after:-mb-1 relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:hover:bg-accent data-[state=active]:after:bg-primary"
            value="industrial"
          >
            Industrial Application
          </TabsTrigger>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 touch-none bg-gradient-to-l from-background to-transparent" />
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      {children}
    </Tabs>
  )
}
