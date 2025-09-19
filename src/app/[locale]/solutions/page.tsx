import { Metadata } from 'next'

import { getLocale, getTranslations } from 'next-intl/server'

import { Benefits } from '@/components/sections/solutions/benefits'
import { Certified } from '@/components/sections/solutions/certified'
import { SolutionHero } from '@/components/sections/solutions/hero'
import { Results } from '@/components/sections/solutions/results'
import { SolutionTechnologies } from '@/components/sections/solutions/technologies'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata.solutions')
  const locale = await getLocale()

  const title = t('title')
  const description = t('description')
  const keywords = t('keywords')
  const image = '/images/hero-oil.webp'
  const url = '/solutions'

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

export default async function SolutionsPage() {
  return (
    <main>
      <SolutionHero />
      <SolutionTechnologies />
      <Certified />
      <Benefits />
      <Results />

      {/* <section className="container py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-helvetica mb-6 text-center text-3xl font-bold md:text-4xl">
            Why 100 Power?
          </h2>
          <ul className="mx-auto max-w-xl list-inside list-disc space-y-4 text-lg">
            <li>Years of dedicated R&amp;D</li>
            <li>Compatible with all lubricants</li>
            <li>Trusted by industrial leaders</li>
            <li>Proven in heavy-duty applications</li>
          </ul>
        </div>
      </section> */}
    </main>
  )
}
