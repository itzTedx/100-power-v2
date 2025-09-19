import { Metadata } from 'next'
import Link from 'next/link'

import { IconArrowUpRight } from '@tabler/icons-react'
import { ArrowUpRight, CheckIcon } from 'lucide-react'

import { Faqs } from '@/components/sections/faq'
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

import { IconUserQuestion } from '@/assets/icons'
import { IconLogo } from '@/assets/logo'

import { CONTACT } from '@/data/constants'
import { ContactForm } from '@/features/contact/components/contact-form'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Contact us | 100 Power',
  description:
    'Learn about 100 Power: our mission, vision, global presence, and commitment to advanced micro-metallurgical additives for machinery and engines worldwide.',
  openGraph: {
    title: 'AContact | 100 Power',
    description:
      "Discover 100 Power's innovation in micro-metallurgical additives, our global reach, and our dedication to performance, reliability, and sustainability.",
    url: 'https://www.100poweruae.com/contact',
    siteName: '100 Power',
    type: 'website',
  },
}

const steps = [
  {
    title: "We'll prepare a proposal",
    description: 'Required scope, timeline and aprox. price will be included',
  },
  {
    title: 'Together we discuss it',
    description:
      "Let's get acquainted and discuss all the possible variants and options.",
  },
  {
    title: "Let's start building",
    description:
      'When the contract is signed and all goals are set we can start the first sprint.',
  },
]

export default async function ContactPage() {
  return (
    <main className="space-y-6 py-12 md:space-y-16">
      <section
        aria-labelledby="about-heading"
        className="container space-y-6 pb-8 sm:pb-12 md:space-y-8"
      >
        <div className="space-y-2">
          <Badge>Contact Us</Badge>
          <Separator className="my-6" />
          <div className="grid grid-cols-2 gap-6">
            <h1 className="font-bold font-helvetica text-3xl tracking-tight sm:text-4xl md:text-5xl">
              Get in Touch
            </h1>
            <p className="max-w-[42rem] text-lg text-muted-foreground">
              Have questions about our products or want to discuss how 100 Power
              can help your operations? Our team is ready to assist.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:col-span-2 md:grid-cols-3">
            {CONTACT.map(({ label, Icon, title, href, description }, i) => (
              <Card
                aria-labelledby={`about-feature-${i}`}
                className="group justify-between"
                key={label}
              >
                <CardHeader>
                  <p className="text-muted-foreground">{label}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid size-16 place-content-center rounded-full border border-[oklch(0.9557_0.1104_102.71)] bg-[oklch(0.9101_0.1105_88.94)] to-[oklch(0.9557_0.1104_102.71)] group-first:bg-gradient-to-t group-first:from-[oklch(0.6519_0.1345_77.03)]/50 group-first:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset_0px_4px_8px_2to-5%] sm:size-20">
                    <Icon aria-hidden className="text-primary-foreground" />
                  </div>
                  <div className="mt-4 space-y-3">
                    <CardTitle className="font-helvetica font-normal text-xl sm:text-2xl md:text-3xl">
                      <h3 id={`about-feature-${i}`}>{title}</h3>
                    </CardTitle>
                    <CardDescription>
                      <Button
                        className="bg-primary/5 font-medium text-base text-primary"
                        type="button"
                        variant="outline"
                      >
                        <Link href={href}>{description}</Link>
                      </Button>
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="space-y-2 py-3 md:col-span-1">
            <Badge>
              <IconLogo />
              Who we are
            </Badge>
            <Separator />
            <div className="space-y-4">
              <h2
                className="text-balance font-medium text-2xl tracking-tighter sm:text-3xl md:text-4xl"
                id="about-heading"
              >
                Powering Precision Starts With a Conversation - Let’s Talk
              </h2>
              <p className="text-balance text-base tracking-tight sm:text-lg">
                Expert solutions from lab to large-scale industry — let’s create
                something powerful.
              </p>
              <Button
                aria-label="Learn more about 100 Power"
                className="w-full sm:w-auto"
                variant="secondary"
              >
                Learn More <ArrowUpRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section
        className="container grid scroll-my-28 lg:grid-cols-3"
        id="contact"
      >
        <div className="space-y-4">
          <h2 className="relative z-20 font-helvetica font-medium text-3xl">
            What will be your next step?
          </h2>

          <p className="relative z-20 pt-3 font-light text-lg">
            You are one step closer to building or renovating your perfect
            building
          </p>
          <Separator />
          <ul className="relative flex flex-col justify-start" role="list">
            {steps.map((step, index) => {
              return (
                <li
                  className={cn('mb-4 flex gap-2 text-left')}
                  key={index}
                  role="listitem"
                >
                  <div>
                    <CheckIcon className="text-primary" />
                  </div>
                  <div>
                    <h3 className={cn('font-medium text-lg text-primary')}>
                      {index + 1} {step.title}
                    </h3>

                    <p className="font-light text-gray-600 text-lg">
                      {step.description}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="md:col-span-2 md:mx-20">
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="container max-w-7xl space-y-6 py-8 md:space-y-8 md:py-12">
        <Badge>
          <IconUserQuestion />
          Frequently Asked Questions
        </Badge>
        <Separator />
        <div className="flex flex-col items-start justify-between gap-4 sm:gap-6 md:flex-row md:gap-9">
          <h2 className="inline-flex items-center gap-3 font-helvetica font-medium text-4xl md:text-5xl">
            Have any questions?
          </h2>

          <Button asChild className="w-fit" variant="secondary">
            <Link href="#contact">
              Ask as anything <IconArrowUpRight />
            </Link>
          </Button>
        </div>
        <Faqs />
      </section>
    </main>
  )
}
