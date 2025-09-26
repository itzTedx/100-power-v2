import Link from 'next/link'

import { ArrowUpRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

import { Logo } from '@/assets/logo'

import { NAV_LINKS } from '@/data/constants'

import { Button } from '../ui/button'
import { LanguageSelector } from './locale-selector'
import { MobileSheet } from './mobile-sheet'

export const Navbar = async () => {
  const t = await getTranslations('layout.navbar')
  const linkKeys = [
    'links.0.Home',
    'links.1.About',
    'links.2.Products',
    'links.3.Solutions',
  ] as const

  return (
    <header className="sticky top-0 z-999 border-background border-b bg-background/80 py-2 backdrop-blur-xl">
      <NavigationMenu
        className="container grid max-w-auto grid-cols-2 items-center justify-between md:grid-cols-3"
        viewport={true}
      >
        <Link href="/">
          <Logo />
        </Link>
        <div className="hidden md:block">
          <NavigationMenuList className="font-medium">
            {NAV_LINKS.map((link, i) =>
              link.id === 3 ? (
                <NavigationMenuItem key={`${link.href}-${i}`}>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent className="w-full bg-card">
                    <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[720px]">
                      {link.items?.map((component) => (
                        <ListItem
                          href={component.href}
                          key={component.id}
                          title={component.title}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={`${link.href}-${i}`}>
                  <NavigationMenuLink asChild>
                    <Link href={link.href}>
                      <div className="rounded-sm px-4 font-medium text-base tracking-tight transition-colors hover:bg-accent hover:text-primary-foreground">
                        {t(linkKeys[i])}
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </div>
        <div className="flex items-center gap-2 justify-self-end">
          <LanguageSelector />
          <Button asChild variant="secondary">
            <Link href="/contact">
              {t('contact')}
              <ArrowUpRight size={18} />
            </Link>
          </Button>

          <MobileSheet />
        </div>
      </NavigationMenu>
    </header>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild className="h-full p-5 hover:bg-background">
        <Link href={href}>
          <div className="font-medium text-sm leading-none">{title}</div>
          <p className="line-clamp-2 font-normal text-muted-foreground text-xs leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
