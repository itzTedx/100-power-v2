import { Metadata } from "next";
import { notFound } from "next/navigation";
import MDXContent from "@/components/markdown/mdx-component";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PRODUCTS } from "@/data/products";
import { getProductBySlug } from "@/features/products/actions";
import { Header } from "@/features/products/components/header";
import {
  DirectionsTabs,
  InformationTabs,
  SafetyTabs,
  Section,
  SplitSection,
  TabContent,
} from "@/features/products/components/tabs";

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
  // const product = PRODUCTS.find((p) => p.href === slug);

  const product = await getProductBySlug(slug);

  if (!product) return notFound();

  // const images: CarouselImages = product.images.map((img) => ({ url: img }));
  const { content, metadata } = product;

  return (
    <>
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
                href={`/products?category=${metadata.category}`}
                className="capitalize"
              >
                {metadata.category.replace(/-/g, " ")}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>{metadata.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <article className="prose max-w-none prose-h2:text-muted-foreground prose-h2:mb-1 prose-h2:text-base prose-h2:font-normal prose-p:text-base prose-p:leading-normal prose-p:tracking-tight sm:prose-p:text-lg prose-li:prose-p:text-base prose-li:text-base prose-h3:text-xl prose-ul:mt-0 prose-ol:mt-0 prose-h3:mt-4 prose-h3:mb-2 prose-table:mt-0 prose-table:prose-p:mt-0 prose-table:prose-p:mb-0">
          <MDXContent
            source={content}
            components={{
              Header: (props) => <Header {...props} metadata={metadata} />,
              InformationTabs,
              Section,
              DirectionsTabs,
              TabContent,
              SplitSection,
              Table: (props) => <div className="col-span-4"><Table {...props} className="col-span-4" /></div>,
              TableBody,
              TableCell,
              TableHead,
              TableHeader,
              TableRow,
              SafetyTabs,
            }}
          />
        </article>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: metadata.title,
            image: metadata.images,
            brand: {
              "@type": "Brand",
              name: "100 Power",
            },
          }),
        }}
      />
    </>
  );
}
