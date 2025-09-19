import { getTranslations } from 'next-intl/server'

import {
  TabsContent as ShadcnTabsContent,
  Tabs,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

import { cn } from '@/lib/utils'

interface Props {
  children: React.ReactNode
}

export function Section({ children }: Props) {
  return (
    <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-12">
      {children}
    </section>
  )
}

export function SplitSection({ children }: Props) {
  return (
    <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-12">
      {children}
    </section>
  )
}

const tabsTriggerClassName =
  'hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none'

export const InformationTabs = async ({ children }: Props) => {
  const t = await getTranslations('products.page.tabs')
  return (
    <Tabs
      className="col-span-12 items-start md:col-span-7 rtl:items-end"
      defaultValue="core"
    >
      <TabsList className="h-auto w-full justify-start gap-2 overflow-x-auto rounded-none border-b bg-transparent px-0 py-1 text-foreground">
        <TabsTrigger className={tabsTriggerClassName} value="core">
          {t('advantages')}
        </TabsTrigger>
        <TabsTrigger className={tabsTriggerClassName} value="usages">
          {t('usages')}
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  )
}

export const DirectionsTabs = async ({ children }: Props) => {
  const t = await getTranslations('products.page.tabs')
  return (
    <Tabs
      className={cn('col-span-12 mt-6 items-start md:col-span-5 md:mt-0')}
      defaultValue="directions"
    >
      <TabsList className="mb-3 h-auto w-full justify-start gap-2 overflow-x-auto rounded-none border-b bg-transparent px-0 py-1 text-foreground">
        <TabsTrigger className={tabsTriggerClassName} value="directions">
          {t('direction')}
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  )
}

export const SafetyTabs = async ({ children }: Props) => {
  const t = await getTranslations('products.page.tabs')
  return (
    <Tabs
      className="mt-6 items-start md:col-span-7 md:mt-0"
      defaultValue="handling"
    >
      <TabsList className="h-auto w-full justify-start gap-2 overflow-x-auto rounded-none border-b bg-transparent px-0 py-1 text-foreground">
        <TabsTrigger className={tabsTriggerClassName} value="handling">
          {t('direction')}
        </TabsTrigger>
        <TabsTrigger className={tabsTriggerClassName} value="first-aid">
          {t('firstAid')}
        </TabsTrigger>
        <TabsTrigger className={tabsTriggerClassName} value="disposal">
          {t('disposal')}
        </TabsTrigger>
        <TabsTrigger className={tabsTriggerClassName} value="hazardous">
          {t('hazardous')}
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  )
}

interface TabContentProps {
  value: string
  children: React.ReactNode
}

export const TabContent = ({ value, children }: TabContentProps) => {
  return <ShadcnTabsContent value={value}>{children}</ShadcnTabsContent>
}
