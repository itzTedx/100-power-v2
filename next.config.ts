import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";

const ContentSecurityPolicy = [
  "default-src 'self';",
  // Allow inline scripts only if absolutely necessary. Avoid adding 'unsafe-inline' if you can.
  "script-src 'self' 'unsafe-inline' https://analytics.zironpro.ae;",
  "style-src 'self' 'unsafe-inline';",
  "img-src 'self' data: https:;",
  "font-src 'self';",
  "connect-src 'self' https://analytics.zironpro.ae https://www.100poweruae.com;",
  "frame-ancestors 'none';",
].join(" ");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy,
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    qualities: [80],
    minimumCacheTTL: 60,
  },

  allowedDevOrigins: ["192.168.1.158", "localhost:3000"],

  experimental: {
    optimizePackageImports: ["lucide-react", "radix-ui"],
    turbopackFileSystemCacheForBuild: true,
    turbopackFileSystemCacheForDev: true
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  // Compression settings
  compress: true,

  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // SEO and performance optimizations
  poweredByHeader: false,
  generateEtags: true,
};

const withNextIntl = createNextIntlPlugin("./src/locale/request.ts");

export default withNextIntl(nextConfig);
