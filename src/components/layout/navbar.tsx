import Link from 'next/link'

import { ArrowUpRight } from 'lucide-react'

import { Logo } from '@/assets/logo'

import { NAV_LINKS } from '@/data/constants'
import { getScopedI18n } from '@/locale/server'

import { Button } from '../ui/button'
import { LanguageSelector } from './locale-selector'
import { MobileSheet } from './mobile-sheet'

export const Navbar = async () => {
  const t = await getScopedI18n('layout.navbar')
  const linkKeys = [
    'links.0.Home',
    'links.1.About',
    'links.2.Solutions',
    'links.3.Products',
  ] as const

  return (
    <header className="sticky top-0 z-999 border-background border-b bg-background/80 py-2 backdrop-blur-xl">
      <nav className="container flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-3 font-medium lg:flex">
          {NAV_LINKS.map((link, i) => (
            <li key={`${link.href}-${i}`}>
              <Link
                className="rounded-sm px-4 py-2.5 tracking-tight transition-colors hover:bg-accent hover:text-primary-foreground"
                href={link.href}
              >
                {t(linkKeys[i])}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <LanguageSelector />
          <Button asChild variant="secondary">
            <Link href="/contact">
              {t('contact')}
              <ArrowUpRight size={18} />
            </Link>
          </Button>

          <MobileSheet />
        </div>
      </nav>
    </header>
  )
}
