import { Metadata } from "next";

export function constructMetadata({
  title,
  fullTitle,
  description = "Dub is the modern link attribution platform for short links, conversion tracking, and affiliate programs.",
  image = "https://www.100poweruae.com/images/hero-products.webp",
  url,
  canonicalUrl,
  noIndex = false,
  manifest,
}: {
  title?: string;
  fullTitle?: string;
  description?: string;
  image?: string | null;
  video?: string | null;
  icons?: Metadata["icons"];
  url?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  manifest?: string | URL | null;
} = {}): Metadata {
  return {
    title:
      fullTitle ||
      (title
        ? `${title} | 100 Power`
        : "100 Power - Next-Gen Lubrication Technology for Maximum Performance"),
    description,
    openGraph: {
      title,
      description,
      ...(image && {
        images: image,
      }),
      url,
    },
    twitter: {
      title,
      description,
      ...(image && {
        card: "summary_large_image",
        images: [image],
      }),

      creator: "@100power",
    },

    metadataBase: new URL("https://www.100poweruae.com"),
    ...((url || canonicalUrl) && {
      alternates: {
        canonical: url || canonicalUrl,
      },
    }),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
    ...(manifest && {
      manifest,
    }),
  };
}
