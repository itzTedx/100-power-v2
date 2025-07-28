'use client'

import { IconArrowUpRight } from '@tabler/icons-react'
import { ArrowUpRight, Menu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
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
    <Sheet modal open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="md:hidden" asChild>
        <Button
          variant="outline"
          size="icon"
          className="border-muted-foreground/60 bg-muted/60 rounded-sm"
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
                key={`${link.href}-${i}`}
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                <Link
                  href={link.href}
                  className="hover:text-primary-foreground hover:bg-accent inline-flex w-full items-center justify-between rounded-sm px-3 py-3 tracking-tight transition-colors"
                >
                  {link.title}

                  <IconArrowUpRight className="text-muted-foreground size-4" />
                </Link>
              </li>
            ))}
            <li className="ml-5 border-l pl-2">
              <ul className="space-y-2">
                {CATEGORIES.map((prod, i) => (
                  <li key={i} onClick={() => setIsOpen(false)}>
                    <Link
                      href={prod.href}
                      className="hover:text-primary-foreground hover:bg-accent inline-flex w-full items-center justify-between rounded-sm py-2 pr-3 pl-2 tracking-tight transition-colors"
                    >
                      {prod.title}

                      <IconArrowUpRight className="text-muted-foreground size-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          <div className="px-3">
            <Button
              asChild
              variant="secondary"
              className="w-full"
              onClick={() => setIsOpen(false)}
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
