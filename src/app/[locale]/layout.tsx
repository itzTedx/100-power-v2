import type { Metadata } from 'next'
import { Geist } from 'next/font/google'

import { NuqsAdapter } from 'nuqs/adapters/next/app'

import { Footer, Navbar } from '@/components/layout'
import { Cta } from '@/components/sections/cta'

import { helvetica } from '@/assets/fonts'

import { cn } from '@/lib/utils'

import './globals.css'

import Providers from '@/components/providers'
import { Toaster } from '@/components/ui/sonner'

import { getCurrentLocale } from '@/locale/server'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '100 Power - Next-Gen Lubrication Technology for Maximum Performance',
  description:
    '100 Power is a UAE-based brand delivering American innovation in lubrication. Maximize performance, minimize friction, and protect the planet with our military-grade, eco-conscious solutions.',
  openGraph: {
    title:
      '100 Power | Next-Gen Lubrication Technology for Maximum Performance',
    description:
      '100 Power is a UAE-based brand delivering American innovation in lubrication. Maximize performance, minimize friction, and protect the planet with our military-grade, eco-conscious solutions.',
    url: 'https://www.100poweruae.com/',
    siteName: '100 Power',
    images: [
      {
        url: '/images/hero-oil.webp',
        width: 1200,
        height: 630,
        alt: '100 Power - Next-Gen Lubrication Technology',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      '100 Power | Next-Gen Lubrication Technology for Maximum Performance',
    description:
      '100 Power is a UAE-based brand delivering American innovation in lubrication. Maximize performance, minimize friction, and protect the planet with our military-grade, eco-conscious solutions.',
    images: ['/images/hero-oil.webp'],
    site: '@100poweruae',
  },
  verification: {
    google: 'EAeAjAM1Zm9ATZQk-J_R5sAmYeRcFbxyhFJ9fJrOJvk',
  },
  metadataBase: new URL('https://www.100poweruae.com'),
}
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const currentLocale = await getCurrentLocale()
  return (
    <html
      className="scroll-smooth"
      dir={currentLocale === 'ar' ? 'rtl' : 'ltr'}
      lang="en"
    >
      <body
        className={cn(
          'antialiased selection:bg-primary selection:text-secondary-foreground',
          geistSans.className,
          helvetica.variable
        )}
      >
        <Providers>
          <NuqsAdapter>
            <Navbar />
            {children}
            <Cta />
            <Footer />
            <Toaster richColors />
          </NuqsAdapter>
        </Providers>
      </body>
    </html>
  )
}
