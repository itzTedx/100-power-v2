import { Metadata } from 'next'

import { IconArrowUpRight } from '@tabler/icons-react'
import { Dot } from 'lucide-react'
import { setStaticParamsLocale } from 'next-international/server'

import { Values } from '@/components/sections/solutions/values'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

import { DotMap } from '@/assets/dot-map'

import { WHO_WE_ARE } from '@/data/constants'
import { getStaticParams } from '@/locale/server'

export function generateStaticParams() {
  return getStaticParams()
}

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

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setStaticParamsLocale(locale)

  return (
    <main className="container py-8 md:py-12">
      <header>
        <div className="mx-auto max-w-4xl space-y-5 px-2 py-6 text-center md:px-0">
          <Badge variant="primary">Engineered to Protect</Badge>

          <h1 className="font-bold font-helvetica text-3xl tracking-wide sm:text-5xl md:text-6xl">
            Powering Performance with{' '}
            <span className="text-primary">Innovation and Integrity</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl">
            At 100 Power, we develop advanced micro-metallurgical additives that
            protect and enhance machinery across industries worldwide—delivering
            reliability, sustainability, and unmatched quality.
          </p>
          <Button asChild className="w-full sm:w-auto">
            <a aria-label="Contact 100 Power" href="/contact">
              Contact us <IconArrowUpRight size={18} />
            </a>
          </Button>
        </div>
      </header>
      <section className="space-y-8 py-8 md:py-12">
        <Badge>
          <Dot /> About 100 Power
        </Badge>
        <Separator />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4">
          <h2 className="text-center font-bold font-helvetica text-2xl leading-normal sm:text-3xl md:text-left md:text-4xl">
            Engineering Excellence. Powering Performance.
          </h2>
          <article className="col-span-2 space-y-4 font-helvetica text-base leading-relaxed sm:text-xl md:text-2xl">
            <h3 className="font-medium text-xl md:text-3xl">
              Since 2017 - Headquartered in the UAE
            </h3>
            <p>
              100 Power is an innovation-led company specializing in advanced
              micro-metallurgical additive technologies that enhance the
              performance, durability, and efficiency of engines and industrial
              machinery.
            </p>

            <p>
              Manufactured in the UAE using premium ingredients exclusively
              sourced from the USA, our products are built on decades of
              military-grade research. They create a durable, polished-like
              microlayer that minimizes friction, withstands extreme pressure
              and temperature, and protects against wear.
            </p>
            <p>
              Trusted across demanding industries—including defense, automotive,
              construction, marine, mining, and agriculture—100 Power delivers
              unmatched reliability where it matters most.
            </p>
          </article>
        </div>
      </section>
      <Separator />
      <section className="space-y-6 py-8 md:py-12">
        <h2 className="text-center font-bold text-xl sm:text-2xl">
          Our Mission
        </h2>
        <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div
            aria-hidden="true"
            className="mx-0 aspect-video w-full rounded-lg bg-red-300 md:mx-4"
          />

          <div className="flex h-full items-center border-t px-2 pt-4 md:border-t-0 md:border-l md:px-4 md:pt-0">
            <p className="text-pretty font-helvetica text-base sm:text-lg md:text-xl">
              At 100 Power, our mission is driven by innovation and science.
              Through ongoing R&D, we’ve developed a micro-metallurgical formula
              that protects metal surfaces, reduces friction, extends equipment
              life, and cuts maintenance costs. We’re committed to delivering
              high-performance, sustainable solutions that boost efficiency and
              support environmental care.
            </p>
          </div>
        </div>
        <h2 className="text-center font-bold text-xl sm:text-2xl">
          Our Vision
        </h2>
        <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div className="flex h-full items-center border-b px-2 pb-4 md:border-r md:border-b-0 md:px-4 md:pb-0">
            <p className="text-pretty font-helvetica text-base sm:text-lg md:text-xl">
              Our vision is to be the most trusted global provider of advanced
              lubricant technologies. We aim to deliver world-class products
              that meet international standards and exceed customer
              expectations. By partnering with businesses worldwide, we build
              lasting relationships rooted in performance, integrity, and shared
              success.
            </p>
          </div>
          <div
            aria-hidden="true"
            className="mx-0 aspect-video w-full rounded-lg bg-red-300 md:mx-4"
          />
        </div>
        <h2 className="text-center font-bold text-xl sm:text-2xl">
          Our Values
        </h2>
        <Values />
      </section>
      <section className="space-y-8 py-8 md:py-12">
        <Badge>
          <Dot /> Our Commitment
        </Badge>
        <Separator />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <h2 className="text-center font-bold font-helvetica text-3xl sm:text-4xl md:text-left md:text-5xl">
            Fueling Trust, Performance & Progress
          </h2>
          <p className="text-center text-base sm:text-xl md:text-left md:text-2xl">
            We uphold the highest standards in every aspect of our operations
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-2">
          {WHO_WE_ARE.map(({ label, Icon, title, description }) => (
            <Card className="group justify-between" key={label}>
              <CardHeader>
                <p className="text-muted-foreground">{label}</p>
              </CardHeader>
              <CardContent className="mt-8 md:mt-12">
                <div className="group-first: group-first: grid size-16 place-content-center rounded-full border border-[oklch(0.9557_0.1104_102.71)] bg-[oklch(0.9101_0.1105_88.94)] to-[oklch(0.9557_0.1104_102.71)] group-first:bg-gradient-to-t group-first:from-[oklch(0.6519_0.1345_77.03)]/50 group-first:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset_0px_4px_8px_2to-5%] md:size-20">
                  <Icon
                    aria-hidden="true"
                    className="text-primary-foreground"
                  />
                </div>
                <div className="mt-2 space-y-2 md:mt-4 md:space-y-3">
                  <CardTitle className="font-helvetica font-normal text-xl md:text-3xl">
                    <h3>{title}</h3>
                  </CardTitle>
                  <CardDescription>
                    <p className="text-base tracking-tight md:text-lg">
                      {description}
                    </p>
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="space-y-8 pt-8 md:pt-12">
        <Badge>
          <Dot /> Global Presence
        </Badge>
        <Separator />
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <h2 className="text-center font-bold font-helvetica text-3xl sm:text-4xl md:text-left md:text-5xl">
            Reaching Every Corner of the Globe
          </h2>
          <div className="space-y-4">
            <p className="text-base tracking-tight sm:text-xl md:text-2xl">
              With manufacturing rooted in the UAE and sales and support
              operations extending across the USA, and the GCC, 100 Power serves
              a growing international market with precision and purpose.
            </p>
            <p className="text-base tracking-tight sm:text-xl md:text-2xl">
              Our distribution network spans the Americas, Europe, Africa, the
              Middle East, and the GCC—ensuring fast access, localized support,
              and compliance with regional standards. From the UAE to the USA,
              Mexico to Europe, and across Africa, our technologies are trusted
              by industries that demand performance without compromise.
            </p>
          </div>
        </div>
        <DotMap
          aria-label="100 Power global presence map"
          className="h-auto w-full"
        />
      </section>
    </main>
  )
}
