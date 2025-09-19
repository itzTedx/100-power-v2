import { Geist } from 'next/font/google'

import type { AbstractIntlMessages } from 'next-intl'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

import { Footer, Navbar } from '@/components/layout'
import { Cta } from '@/components/sections/cta'

import { helvetica } from '@/assets/fonts'

import { cn } from '@/lib/utils'

import './globals.css'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getLocale, getTranslations, setRequestLocale } from 'next-intl/server'

import Providers from '@/components/providers'
import { Toaster } from '@/components/ui/sonner'

import { getMessages } from '@/locale'
import { routing } from '@/locale/routing'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata.home')
  const locale = await getLocale()

  const title = t('title')
  const description = t('description')
  const keywords = t('keywords')
  const image = '/images/hero-oil.webp'
  const url = '/'

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: '/en',
        ar: '/ar',
        ru: '/ru',
        'x-default': '/en',
      },
    },
    keywords,

    openGraph: {
      title,
      description,
      url: 'https://www.100poweruae.com/',
      siteName: '100 Power',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: '100 Power - Next-Gen Lubrication Technology',
        },
      ],
      locale,
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      site: '@100poweruae',
    },

    verification: {
      google: 'fTdWqZbJwOheew6IAibaK5UBtFhSeUf-Pi6Xg30lHQ0',
    },
    metadataBase: new URL('https://www.100poweruae.com'),
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  const messages = (await getMessages(
    locale
  )) as unknown as AbstractIntlMessages

  return (
    <html
      className="scroll-smooth"
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      lang={locale}
    >
      <body
        className={cn(
          'antialiased selection:bg-primary selection:text-secondary-foreground',
          geistSans.className,
          helvetica.variable
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <NuqsAdapter>
              <Navbar />
              {children}
              <Cta />
              <Footer />
              <Toaster richColors />
            </NuqsAdapter>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
