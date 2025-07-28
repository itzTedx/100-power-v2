import { Dot } from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { IconChart, IconShield } from "@/assets/icons";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import ImageCarousel, { CarouselImages } from "@/components/ui/image-carousel";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/features/products/components/product-card";
import { cn } from "@/lib/utils";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return PRODUCTS.map((post) => ({
    slug: post.href,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  // read route params
  const { slug } = await params;

  // fetch data
  const product = PRODUCTS.find((p) => p.href === slug);
  if (!product)
    return {
      title: "Product not Available",
    };

  return {
    title: `${product.title} - Hundred Power`,
    description: product.overview.slice(0, 240),

    openGraph: {
      images: product.images,
    },
  };
}

export default async function ProductSlugPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.href === slug);
  if (!product) return notFound();

  const images: CarouselImages = product.images.map((img) => ({ url: img }));

  return (
    <main className="container py-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink
              href={`/products?category=${product.type}`}
              className="capitalize"
            >
              {product.type.replace(/-/g, " ")}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>{product.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <article>
        <section className="grid grid-cols-1 gap-8 pt-4 md:grid-cols-2 md:gap-12">
          <div className="h-fit md:sticky md:top-[14svh]">
            <ImageCarousel
              images={images}
              imageFit="contain"
              aspectRatio="5/4"
              showThumbs={images.length > 1}
              showCarouselControls={images.length > 1}
            />
          </div>

          <div className="space-y-6 py-2">
            <header>
              <div className="flex shrink-0 items-center gap-2">
                <div
                  className={cn(
                    "size-3 rounded-full",
                    product.range === "Premium"
                      ? "bg-primary"
                      : "bg-muted-foreground/80"
                  )}
                />
                <span className="text-base font-medium sm:text-lg">
                  {product.range}
                </span>
              </div>
              <h1 className="font-helvetica text-2xl font-bold sm:text-3xl">
                {product.title}
              </h1>
            </header>
            <section aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="text-muted-foreground mb-1">
                Product Overview
              </h2>
              <p className="text-base leading-normal tracking-tight sm:text-lg">
                {product.overview}
              </p>
            </section>
            <section aria-labelledby="benefits-heading">
              <h2 id="benefits-heading" className="text-muted-foreground mb-1">
                Key Benefits
              </h2>
              <ul className="list-inside list-disc space-y-2 text-base sm:text-lg">
                {product.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="quantities-heading">
              <h2
                id="quantities-heading"
                className="mb-1 font-semibold tracking-tight"
              >
                Available Packings
              </h2>
              <ul className="font-helvetica flex gap-4 text-base font-medium sm:text-lg">
                {product.quantity.map((q) => (
                  <li
                    className="border-primary/50 bg-primary/5 rounded-sm border px-2.5 py-1"
                    key={q}
                  >
                    {q}
                  </li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="datasheet-heading">
              <h2 id="datasheet-heading" className="text-muted-foreground mb-1">
                Data Sheet Downloads
              </h2>
              <div className="flex flex-col gap-2 space-x-0 sm:flex-row sm:gap-0 sm:space-x-3">
                <Button variant="secondary">
                  <IconShield />
                  Material Safety Data Sheet
                </Button>
                <Button variant="secondary">
                  <IconChart />
                  Technical Data Sheet
                </Button>
              </div>
            </section>
          </div>
        </section>
        <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-12">
          <Tabs
            defaultValue="core"
            className="col-span-12 items-start md:col-span-7"
          >
            <TabsList className="text-foreground mb-3 h-auto w-full justify-start gap-2 overflow-x-auto rounded-none border-b bg-transparent px-0 py-1">
              <TabsTrigger
                value="core"
                className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Core Advantages
              </TabsTrigger>
              <TabsTrigger
                value="usages"
                className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Usages
              </TabsTrigger>
              {/* <TabsTrigger
                value="application"
                className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Application
              </TabsTrigger> */}
            </TabsList>
            <TabsContent value="core">
              <ul className="ml-5 list-disc space-y-3">
                {product.advantages.map((ad, i) => (
                  <li key={`${i}-${ad.title}`}>
                    <h3 className="text-xl">
                      <strong>{ad.title}</strong>
                    </h3>
                    <p>{ad.description}</p>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="usages">
              <ul className="ml-5 list-disc space-y-3">
                {product.usages.map((usage, i) => (
                  <li key={`${i}-${usage.title}`}>
                    <h3 className="text-xl">
                      <strong>{usage.title}</strong>
                    </h3>
                    <p>{usage.description}</p>
                  </li>
                ))}
              </ul>
            </TabsContent>
            {/* <TabsContent value="application">
              <div className="grid gap-4">
                Superior Wear ProtectionForms a micro-layer on engine parts to
                reduce friction and metal-to-metal contact, extending life and
                ensuring smoother operation—especially in cold starts and
                high-load scenarios.
              </div>
            </TabsContent> */}
          </Tabs>
          <Tabs
            defaultValue="directions"
            className="col-span-12 mt-6 items-start md:col-span-5 md:mt-0"
          >
            <TabsList className="text-foreground mb-3 h-auto w-full justify-start gap-2 overflow-x-auto rounded-none border-b bg-transparent px-0 py-1">
              <TabsTrigger
                value="directions"
                className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Directions of Use
              </TabsTrigger>
            </TabsList>
            <TabsContent value="directions">
              <ol className="ml-5 list-decimal space-y-3">
                {product.direction.map((dir, i) => (
                  <li key={`${i}-${dir.title}`}>
                    <strong>{dir.title}</strong>
                    <p>{dir.description}</p>
                  </li>
                ))}
              </ol>
            </TabsContent>
          </Tabs>
        </section>

        <section className="space-y-4 pt-8 sm:pt-12 md:space-y-6">
          <Badge>
            <Dot />
            Related Products
          </Badge>
          <Separator />
          <h2 className="text-xl font-medium sm:text-3xl">
            Other products related to{" "}
            <span className="capitalize">
              {product.type.replace(/-/g, " ")}
            </span>
          </h2>
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4">
            {PRODUCTS.filter((f) => f.type === product.type && f.href !== slug)
              .splice(0, 4)
              .map((product, id) => (
                <ProductCard data={product} key={id} />
              ))}
          </div>
        </section>
        {/* Product JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              name: product.title,
              image: [product.images],
              description: product.overview,
              brand: {
                "@type": "Brand",
                name: "100 Power",
              },
            }),
          }}
        />
      </article>
    </main>
  );
}
