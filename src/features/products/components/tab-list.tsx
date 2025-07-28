'use client'

import { useQueryState } from 'nuqs'
import type { ReactNode } from 'react'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const Tablist = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useQueryState('category', {
    defaultValue: 'all',
  })
  return (
    <Tabs
      defaultValue="all"
      className=""
      value={category}
      onValueChange={setCategory}
    >
      <ScrollArea>
        <TabsList
          className="text-foreground mb-2 h-auto w-full gap-2 rounded-none border-b bg-transparent px-0 py-1"
          aria-label="Product categories"
        >
          <TabsTrigger
            value="all"
            className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            All Products
          </TabsTrigger>

          <TabsTrigger
            value="engine-additives"
            className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Engine Additives
          </TabsTrigger>
          <TabsTrigger
            value="lubrication"
            className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Lubrication
          </TabsTrigger>
          <TabsTrigger
            value="fuel-system"
            className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Fuel System
          </TabsTrigger>
          <TabsTrigger
            value="industrial"
            className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Industrial Application
          </TabsTrigger>
          <div className="absolute bg-gradient-to-r inset-0" />
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      {children}
    </Tabs>
  )
}
