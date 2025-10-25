'use client'

import { useMemo } from 'react'

import { useTranslations } from 'next-intl'
import { useQueryState } from 'nuqs'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const RANGE_OPTION_VALUES = [
  'engine',
  'compressor',
  'gear',
  'hydraulic',
  'grease',
  'coupler',
  'rail',
  'transformer',
] as const

type RangeOptionValue = (typeof RANGE_OPTION_VALUES)[number]

export function LocomotiveCategories() {
  const [range, setRange] = useQueryState('query', {
    defaultValue: 'all',
    history: 'push',
  })

  const t = useTranslations('products.locomotive')

  const options = useMemo(
    () =>
      RANGE_OPTION_VALUES.map((value) => ({
        value,
        label: t(`options.${value}` as const),
      })),
    [t]
  )

  return (
    <>
      <Select defaultValue="all" onValueChange={setRange} value={range}>
        <SelectTrigger className="w-full shrink-0 md:w-[240px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">{t('options.all')}</SelectItem>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {/* <Drawer>
        <DrawerTrigger asChild className="md:hidden">
          <Button size="icon" variant="outline">
            <IconFilter />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>{t('title')}</DrawerTitle>
              <DrawerDescription className="sr-only">
                {t('title')}
              </DrawerDescription>
            </DrawerHeader>
            <div className="px-4 pb-0">
              <div className="grid items-center gap-2">
                {options.map((opt) => (
                  <DrawerClose asChild key={opt.value}>
                    <button
                      aria-pressed={range === opt.value}
                      className={cn(
                        'inline-flex h-9 items-center justify-center rounded-md border px-3 font-medium text-sm transition-colors',
                        'hover:bg-accent hover:text-foreground',
                        range === opt.value
                          ? 'border-primary bg-background text-foreground shadow-sm'
                          : 'border-transparent bg-muted/40 text-muted-foreground'
                      )}
                      onClick={() => setRange(opt.value as RangeOptionValue)}
                      type="button"
                    >
                      {opt.label}
                    </button>
                  </DrawerClose>
                ))}
              </div>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer> */}
    </>
  )
}
