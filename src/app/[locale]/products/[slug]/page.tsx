import { Suspense } from 'react'
import { notFound } from 'next/navigation'

import { getLocale, getMessages, getTranslations } from 'next-intl/server'

import MDXContent from '@/components/markdown/mdx-component'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import {
  getProductBySlug,
  getProducts,
  getRelatedProducts,
} from '@/features/products/actions'
import { Header } from '@/features/products/components/header'
import { ProductGrid } from '@/features/products/components/product-grid'
import {
  DirectionsTabs,
  InformationTabs,
  SafetyTabs,
  Section,
  SplitSection,
  TabContent,
} from '@/features/products/components/tabs'
import { constructMetadata } from '@/features/seo'
import { Locale } from '@/locale'
import { routing } from '@/locale/routing'

type Params = Promise<{ slug: string; locale: Locale }>

export async function generateStaticParams() {
  const allParams = await Promise.all(
    routing.locales.map(async (locale) => {
      const products = await getProducts({ locale })
      return products.map((post) => ({
        locale: locale,
        slug: post.slug,
      }))
    })
  )

  return allParams.flat()
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params
  const locale = await getLocale()
  const product = await getProductBySlug(slug, { locale })
  if (!product)
    return {
      title: 'Product not Available',
    }

  const fullTitle = product.metadata.meta.title
  const description = product.metadata.meta.description
  const image = product.metadata.images[0]
  const canonicalUrl = `/products/${product.metadata.slug}`

  return constructMetadata({
    fullTitle,
    description,
    image,
    canonicalUrl,
  })
}

export default async function ProductSlugPage({ params }: { params: Params }) {
  const { slug, locale } = await params
  const product = await getProductBySlug(slug, { locale })
  const t = await getTranslations('products')
  if (!product) return notFound()

  const { content, metadata } = product

  // Derive localized category label from the messages object to avoid typed key constraints
  const messages = await getMessages()
  const productsMessages = (messages as unknown as Record<string, unknown>)
    .products as Record<string, unknown>
  const breadcrumb = productsMessages.breadcrumb as Record<string, unknown>
  const categories = breadcrumb.categories as Array<Record<string, string>>

  const categoryLabel = Array.isArray(categories)
    ? (categories.find((categoryObject) => categoryObject[metadata.category])?.[
        metadata.category
      ] ?? metadata.category)
    : metadata.category

  const relatedProducts = await getRelatedProducts({
    limit: 3,
    locale,
    category: product.metadata.category,
  })

  return (
    <>
      <main className="container py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{t('breadcrumb.home')}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">
                {t('breadcrumb.products')}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="capitalize"
                href={`/products?category=${metadata.category}`}
              >
                {/** biome-ignore  lint/suspicious/noExplicitAny: i don't know the type>*/}
                {t(`breadcrumb.categories.${categoryLabel}` as any)}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>{metadata.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <article className="prose prose-h3:mt-4 prose-ol:mt-0 prose-table:mt-0 prose-table:prose-p:mt-0 prose-ul:mt-0 prose-h2:mb-1 prose-h3:mb-2 prose-table:prose-p:mb-0 max-w-none prose-h2:font-normal prose-h2:text-base prose-h2:text-muted-foreground prose-h3:text-xl prose-li:prose-p:text-base prose-li:text-base prose-p:text-base prose-p:leading-normal prose-p:tracking-tight sm:prose-p:text-lg">
          <MDXContent
            components={{
              Header: (props) => <Header {...props} metadata={metadata} />,
              InformationTabs,
              Section,
              DirectionsTabs,
              TabContent,
              SplitSection,
              Table: (props) => (
                <div className="md:col-span-4">
                  <Table {...props} className="md:col-span-4" />
                </div>
              ),
              TableBody,
              TableCell,
              TableHead,
              TableHeader,
              TableRow,
              SafetyTabs,
            }}
            source={content}
          />
        </article>

        <section>
          <h3 className="mb-4 font-semibold text-2xl">
            {t('page.related')}{' '}
            {/** biome-ignore  lint/suspicious/noExplicitAny: i don't know the type>*/}
            {t(`breadcrumb.categories.${categoryLabel}` as any)}
          </h3>
          <Suspense fallback={'Loading...'}>
            <ProductGrid products={relatedProducts} />
          </Suspense>
        </section>
      </main>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Product',
            name: metadata.title,
            image: metadata.images,
            brand: {
              '@type': 'Brand',
              name: '100 Power',
            },
          }),
        }}
        type="application/ld+json"
      />
    </>
  )
}
