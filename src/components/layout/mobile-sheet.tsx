'use client'

import { useState } from 'react'
import Link from 'next/link'

import { IconArrowUpRight } from '@tabler/icons-react'
import { ArrowUpRight, Menu } from 'lucide-react'

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
      <SheetContent>
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
                  {link.title}

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
                      {prod.title}

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
                Contact <ArrowUpRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
