'use client'

import { useState } from 'react'
import Link from 'next/link'

import { IconArrowUpRight } from '@tabler/icons-react'
import { ArrowUpRight, Menu } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

import { Logo } from '@/assets/logo'

import { CATEGORIES, NAV_LINKS } from '@/data/constants'

import { Button } from '../ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'

export const MobileSheet = () => {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('layout.navbar')
  const locale = useLocale()
  const tProducts = useTranslations('products.breadcrumb.categories')

  const linkKeys = [
    'links.0.Home',
    'links.1.About',
    'links.2.Products',
    'links.3.Solutions',
  ] as const

  const getCategoryKeyFromHref = (href: string) => {
    try {
      const query = href.split('?')[1] ?? ''
      const params = new URLSearchParams(query)
      return params.get('category')
    } catch {
      return null
    }
  }

  return (
    <Sheet modal onOpenChange={setIsOpen} open={isOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button
          className="rounded-sm border-muted-foreground/60 bg-muted/60"
          size="icon"
          variant="outline"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={locale === 'ar' ? 'left' : 'right'}>
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription className="sr-only">
            Hundred Power Trading LLC
          </SheetDescription>
        </SheetHeader>
        <div className="flex h-full flex-col justify-between px-2 pb-6">
          <ul className="w-full space-y-2 font-medium">
            {NAV_LINKS.map((link, i) => (
              <li
                className="w-full"
                key={`${link.href}-${i}`}
                onClick={() => setIsOpen(false)}
              >
                <Link
                  className="inline-flex w-full items-center justify-between rounded-sm px-3 py-3 tracking-tight transition-colors hover:bg-accent hover:text-primary-foreground"
                  href={link.href}
                >
                  {t(linkKeys[i])}

                  <IconArrowUpRight className="size-4 text-muted-foreground" />
                </Link>
              </li>
            ))}
            <li className="ml-5 border-l pl-2">
              <ul className="space-y-2">
                {CATEGORIES.map((prod, i) => (
                  <li key={i} onClick={() => setIsOpen(false)}>
                    <Link
                      className="inline-flex w-full items-center justify-between rounded-sm py-2 pr-3 pl-2 tracking-tight transition-colors hover:bg-accent hover:text-primary-foreground"
                      href={prod.href}
                    >
                      {(() => {
                        const key = getCategoryKeyFromHref(prod.href)
                        if (key) {
                          try {
                            return (
                              tProducts as unknown as (s: string) => string
                            )(key)
                          } catch {
                            return prod.title
                          }
                        }
                        return prod.title
                      })()}

                      <IconArrowUpRight className="size-4 text-muted-foreground" />
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          <div className="px-3">
            <Button
              asChild
              className="w-full"
              onClick={() => setIsOpen(false)}
              variant="secondary"
            >
              <Link href="/contact">
                {t('contact')} <ArrowUpRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
