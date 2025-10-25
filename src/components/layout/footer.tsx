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
          <div className="flex flex-col justify-between">
            <address className="space-y-3 not-italic">
              <h3 className="font-aloevera font-bold text-primary">
                {t('title')}
              </h3>
              <p>{t('description')}</p>
            </address>
            <div className="flex flex-col justify-between gap-4 py-4 md:py-6">
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
                className="flex items-center gap-2"
              >
                {SOCIALS.map((s) => (
                  <li key={s.id}>
                    <Link
                      aria-label="Social Link"
                      className="group flex size-10 items-center justify-center rounded-md bg-accent/10 transition-colors hover:bg-accent/20"
                      href={s.href}
                      prefetch={false}
                      rel="noopener noreferrer"
                      target="_blank"
                      title="Social Link"
                    >
                      <s.icon className="transition-colors group-hover:text-card" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

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
                    {'href' in link && (
                      <Link
                        className="transition-colors hover:text-primary"
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
                          if (link.href?.includes('marine'))
                            return t('categories.marine')
                          if (link.href?.includes('aviation'))
                            return t('categories.aviation')
                          if (link.href?.includes('locomotive'))
                            return t('categories.locomotive')
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
                          if (link.href?.includes('marine'))
                            return t('categories.marine')
                          if (link.href?.includes('aviation'))
                            return t('categories.aviation')
                          if (link.href?.includes('locomotive'))
                            return t('categories.locomotive')
                          if (link.href?.includes('industrial'))
                            return t('categories.industrial')

                          return link.title
                        })()}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <h3 className="mb-2 font-aloevera font-medium text-primary tracking-tight">
                Factory Address
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="text-secondary-foreground/90"
                    href={'/'}
                    prefetch={false}
                  >
                    Plot No-4, Block 5, Umm Al Thuoob, New Industrial Area, Umm
                    Al Quwain, United Arab Emirates, PO BOX 1171
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-secondary-foreground/80"
                    href={'mailto:info@100poweruae.com'}
                    prefetch={false}
                  >
                    info@100poweruae.com
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-secondary-foreground/80"
                    href={'tel:+971527862528'}
                    prefetch={false}
                  >
                    +971 52 786 2528
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="-mb-2 font-aloevera font-medium text-primary tracking-tight">
                Distributor Address
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    className="text-secondary-foreground/90"
                    href={'/'}
                    prefetch={false}
                  >
                    LLC "VIP UKRPROMARKET, <br />
                    Ukraine, 50011, Kryvyi Rih,Yunatska Street , Building 11-B
                    Edrpou
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-secondary-foreground/80"
                    href={'tel:+380681345077'}
                    prefetch={false}
                  >
                    Tel: +380 68 134 5077
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-secondary-foreground/80"
                    href={'https://wa.me/380681345077'}
                    prefetch={false}
                  >
                    Whatsapp: +380 68 134 5077
                  </Link>
                </li>
              </ul>
              <ul className="space-y-1">
                <li>
                  <Link
                    className="text-secondary-foreground/90"
                    href={'/'}
                    prefetch={false}
                  >
                    TFI Online AB, <br />
                    Sweden Stockholm 177 51 Järfälla
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-secondary-foreground/80"
                    href={'tel:+46737791563'}
                    prefetch={false}
                  >
                    Tel: +46 73 779 15 63
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-secondary-foreground/80"
                    href={'https://wa.me/46737791563'}
                    prefetch={false}
                  >
                    Whatsapp: +46 73 779 15 63
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-muted-foreground/20 border-t py-4 text-sm md:flex-row md:gap-4">
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
