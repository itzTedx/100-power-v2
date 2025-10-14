'use client'

import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Dot } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { TooltipProvider } from '@/components/ui/tooltip'

import { cn } from '@/lib/utils'

import { ProductMetadata } from '../actions/types'
import { DatasheetButton } from './datasheet-button'

interface Props {
  data: ProductMetadata
}

export const ProductCard = ({ data }: Props) => {
  const t = useTranslations('products')

  return (
    <Card className="group relative gap-0 overflow-hidden">
      <Link className="absolute inset-0 z-40" href={`/products/${data.slug}`} />
      {data.range && (
        <CardHeader className="relative flex items-start justify-between">
          <div className="flex shrink-0 items-center gap-2">
            <div
              className={cn(
                'size-3 rounded-full',
                data.rangeKey === 'Premium'
                  ? 'bg-primary'
                  : 'bg-muted-foreground/80'
              )}
            />
            <p className="font-medium">{data.range}</p>
          </div>
          <TooltipProvider>
            <div className="absolute right-5 z-50 flex flex-col space-y-1.5 opacity-0 transition-[opacity_translate] duration-100 ease-in group-hover:opacity-100">
              {data.safetyDs && (
                <DatasheetButton datasheet={data.safetyDs} type="safetyDs" />
              )}
              {data.technicalDs && (
                <DatasheetButton
                  datasheet={data.technicalDs}
                  type="technicalDs"
                />
              )}
            </div>
          </TooltipProvider>
        </CardHeader>
      )}
      <CardContent className="relative overflow-hidden">
        {data.images && (
          <div className="relative aspect-square">
            <Image
              alt={data.title}
              className="object-cover transition-transform group-hover:scale-110"
              fill
              src={data.images[0]}
            />
          </div>
        )}
        <div className="absolute inset-0 z-10 flex items-end justify-center p-4 opacity-0 transition-opacity group-hover:opacity-100">
          <Button className="z-10 mx-auto" variant="outline">
            {t('button')}
          </Button>

          <div className="pointer-events-none absolute inset-0 translate-y-full bg-gradient-to-t from-card to-transparent transition-transform group-hover:translate-y-0" />
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start">
        {data.quantities && (
          <CardDescription className="flex flex-wrap items-center text-[10px] tracking-tighter sm:text-sm md:font-medium rtl:flex-row-reverse">
            {data.quantities.map((q, i) => (
              <Fragment key={q}>
                <p>{q}</p>{' '}
                <Dot
                  className={cn(
                    'size-3 md:size-4',
                    data.quantities?.length === i + 1 && 'hidden'
                  )}
                />
              </Fragment>
            ))}
          </CardDescription>
        )}
        <CardTitle className="mt-1">{data.title}</CardTitle>
      </CardFooter>
    </Card>
  )
}
