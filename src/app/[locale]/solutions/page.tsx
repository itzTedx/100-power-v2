import { Metadata } from 'next'

import { setStaticParamsLocale } from 'next-international/server'

import { Benefits } from '@/components/sections/solutions/benefits'
import { Certified } from '@/components/sections/solutions/certified'
import { SolutionHero } from '@/components/sections/solutions/hero'
import { Results } from '@/components/sections/solutions/results'
import { SolutionTechnologies } from '@/components/sections/solutions/technologies'

export const metadata: Metadata = {
  title: 'High-Performance Solutions | 100 Power',
  description:
    'Explore high-performance lubrication, engine additives, and industrial products engineered for durability, reduced wear, and optimal machine performance under extreme conditions.',
  openGraph: {
    title: 'High-Performance Products | 100 Power',
    description:
      'Explore high-performance lubrication, engine additives, and industrial products engineered for durability, reduced wear, and optimal machine performance under extreme conditions.',
    url: 'https://www.100poweruae.com/solutions',
    type: 'website',
  },
}

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setStaticParamsLocale(locale)

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
