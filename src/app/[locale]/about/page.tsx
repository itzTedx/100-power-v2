import { Metadata } from 'next'

import { Locale } from 'next-intl'
import { getLocale, getTranslations, setRequestLocale } from 'next-intl/server'

import { Separator } from '@/components/ui/separator'

import { About } from '@/features/about/about'
import { Commitment } from '@/features/about/commitment'
import { Header } from '@/features/about/header'
import { MissionVision } from '@/features/about/mission-vision'
import { Presence } from '@/features/about/presence'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata.about')
  const locale = await getLocale()

  const title = t('title')
  const description = t('description')
  const keywords = t('keywords')
  const image = '/images/hero-oil.webp'
  const url = '/about'

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `/en${url}`,
        ar: `/ar${url}`,
        ru: `/ru${url}`,
        'x-default': `/en${url}`,
      },
    },
    keywords,

    openGraph: {
      title,
      description,
      url: url,
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
  }
}

type Props = {
  params: Promise<{ locale: Locale }>
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main className="container py-8 md:py-12">
      <Header />
      <About />
      <Separator />
      <MissionVision />
      <Commitment />
      <Presence />
    </main>
  )
}
