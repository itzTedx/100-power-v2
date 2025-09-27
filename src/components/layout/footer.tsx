import Link from 'next/link'

import { getTranslations } from 'next-intl/server'

import { Logo } from '@/assets/logo'

import { FOOTER, SOCIALS } from '@/data/constants'

export async function Footer() {
  const t = await getTranslations('layout.footer')
  return (
    <footer
      aria-label="Site Footer"
      className="bg-primary-foreground text-secondary-foreground"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 md:grid-cols-4 md:py-12">
          <address className="col-span-1 space-y-3 not-italic md:col-span-1">
            <h3 className="font-aloevera font-bold text-primary">
              {t('title')}
            </h3>
            <p>{t('description')}</p>
          </address>

          {FOOTER.map((nav) => (
            <nav
              aria-label={
                nav.id === 1
                  ? t('sections.quickLinks')
                  : nav.id === 2
                    ? t('sections.products')
                    : t('sections.factoryAddress')
              }
              className="flex flex-col gap-2"
              key={nav.id}
            >
              <h3 className="mb-2 font-aloevera font-medium text-primary tracking-tight">
                {nav.id === 1
                  ? t('sections.quickLinks')
                  : nav.id === 2
                    ? t('sections.products')
                    : t('sections.factoryAddress')}
              </h3>
              <ul className="space-y-2">
                {nav.items.map((link) => (
                  <li key={link.id}>
                    {'href' in link ? (
                      <Link
                        href={link.href!}
                        prefetch={false}
                        title={(() => {
                          if (link.href === '/') return t('nav.home')
                          if (link.href === '/about') return t('nav.about')
                          if (link.href === '/solutions')
                            return t('nav.solutions')
                          if (link.href === '/products')
                            return t('nav.products')
                          if (link.href === '/contact') return t('nav.contact')
                          if (link.href?.includes('engine-oil'))
                            return t('categories.engineAdditives')
                          if (link.href?.includes('lubrication'))
                            return t('categories.lubrication')
                          if (link.href?.includes('fuel-system'))
                            return t('categories.fuelSystem')
                          if (link.href?.includes('industrial'))
                            return t('categories.industrial')
                          return link.title
                        })()}
                      >
                        {(() => {
                          if (link.href === '/') return t('nav.home')
                          if (link.href === '/about') return t('nav.about')
                          if (link.href === '/solutions')
                            return t('nav.solutions')
                          if (link.href === '/products')
                            return t('nav.products')
                          if (link.href === '/contact') return t('nav.contact')
                          if (link.href?.includes('engine-oil'))
                            return t('categories.engineAdditives')
                          if (link.href?.includes('lubrication'))
                            return t('categories.lubrication')
                          if (link.href?.includes('fuel-system'))
                            return t('categories.fuelSystem')
                          if (link.href?.includes('industrial'))
                            return t('categories.industrial')
                          return link.title
                        })()}
                      </Link>
                    ) : (
                      link.title
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-muted-foreground/20 border-y py-4 md:flex-row md:gap-0 md:py-6">
          <Link
            aria-label="Home"
            className="mb-2 md:mb-0"
            href="/"
            title="Home"
          >
            <Logo aria-label="100 Power Logo" />
          </Link>

          <ul
            aria-label="Social Media Links"
            className="flex items-center gap-4"
          >
            {SOCIALS.map((s) => (
              <li key={s.id}>
                <Link
                  aria-label="Social Link"
                  href={s.href}
                  prefetch={false}
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Social Link"
                >
                  <s.icon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 py-3 text-sm md:flex-row md:gap-4">
          <ul className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <li>
              <Link href="/privacy" prefetch={false} title={t('links.privacy')}>
                {t('links.privacy')}
              </Link>
            </li>
            <li>
              <Link href="/terms" prefetch={false} title={t('links.terms')}>
                {t('links.terms')}
              </Link>
            </li>
          </ul>
          <p className="text-center md:text-left">
            {t('copyright', { year: new Date().getFullYear().toString() })}
          </p>
          <Link
            className="text-center text-muted/80 text-sm tracking-tight md:text-right"
            href="https://www.zironmedia.com"
            prefetch={false}
            rel="noopener noreferrer"
            target="_blank"
            title="Ziron Media Website"
          >
            {t('developer')}
          </Link>
        </div>
      </div>
    </footer>
  )
}
