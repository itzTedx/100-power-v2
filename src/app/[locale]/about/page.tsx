import { Metadata } from 'next'

import { Locale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

import { Separator } from '@/components/ui/separator'

import { About } from '@/features/about/about'
import { Commitment } from '@/features/about/commitment'
import { Header } from '@/features/about/header'
import { MissionVision } from '@/features/about/mission-vision'
import { Presence } from '@/features/about/presence'

export const metadata: Metadata = {
  title: 'About Us | 100 Power',
  description:
    'Learn about 100 Power: our mission, vision, global presence, and commitment to advanced micro-metallurgical additives for machinery and engines worldwide.',
  openGraph: {
    title: 'About Us | 100 Power',
    description:
      "Discover 100 Power's innovation in micro-metallurgical additives, our global reach, and our dedication to performance, reliability, and sustainability.",
    url: 'https://www.100poweruae.com/about',
    siteName: '100 Power',
    type: 'website',
  },
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
