# 🔋 100 Power - Next-Gen Lubrication Technology Platform

![100 Power Banner](https://img.shields.io/badge/100%20Power-Premium%20Lubrication%20Technology-orange)
![Next.js](https://img.shields.io/badge/Next.js-15.4.2-black)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38B2AC)
![Turbopack](https://img.shields.io/badge/Turbopack-Bundler-FF6B6B)
![Biome](https://img.shields.io/badge/Biome-Linter%20%26%20Formatter-FF6B6B)

**100 Power** is a performance-focused technology brand specializing in **micro-metallurgical lubricant additive solutions**. Our products are engineered to reduce friction, minimize wear, and extend the lifespan of engines and machinery in **military, industrial, and commercial applications**.

This project powers the **digital ecosystem of 100 Power**, providing a scalable and modern platform to showcase innovative oil additive technologies, educate customers about micro-metallurgical advancements, and facilitate B2B engagements.

## 🌍 Global Impact

With manufacturing operations in the **USA and UAE**, 100 Power aims to set a new standard in lubrication technology across international markets.

## 🧭 Table of Contents
- [Global Impact](#global-impact)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Internationalization (i18n)](#internationalization-i18n)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Windows Notes](#windows-notes)
- [Available Scripts](#available-scripts)
- [Development Guidelines](#development-guidelines)
- [Contact Form Integration](#contact-form-integration)
- [Design System](#design-system)
- [Deployment](#deployment)
- [Analytics & SEO](#analytics--seo)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Modern Web Platform** - Built with Next.js 15 and React 19 for optimal performance
- **Product Showcase** - Interactive product galleries with zoom/pan functionality
- **Contact Management** - Professional contact forms with email integration
- **SEO Optimized** - Built-in SEO features and sitemap generation
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Accessibility** - WCAG compliant with Radix UI components
- **Email Integration** - Nodemailer with React Email templates
- **Form Validation** - Zod schema validation with React Hook Form
- **Animation System** - Smooth animations with Motion library
- **Performance** - Turbopack bundler for lightning-fast builds

## 🧰 Tech Stack

### 🚀 Core Framework
- **Next.js 15** with **Turbopack** — Lightning-fast bundler and React framework
- **React 19** — Modern React with concurrent rendering and use hooks
- **TypeScript** — Type safety and enhanced developer experience

### 🎨 Styling & UI
- **Tailwind CSS v4** — Utility-first CSS framework
- **Radix UI** — Accessible low-level UI primitives
- **Lucide React** / **Tabler Icons** — Comprehensive icon libraries
- **Embla Carousel** — Smooth and extensible carousels
- **tw-animate-css** — Tailwind-compatible animations

### 📦 Forms & Validation
- **React Hook Form** — Performance-focused form management
- **Zod** — Schema validation and type inference
- **@hookform/resolvers** — Integration between Zod and RHF

### 📧 Communication
- **Nodemailer** — Email delivery system
- **@react-email/components** — Professional email templating

### 🧠 State, Animations & Utils
- **nuqs** — Query string state management
- **motion** — Animation library for React
- **clsx**, **tailwind-merge**, **class-variance-authority** — Utility class management
- **react-zoom-pan-pinch** — Interactive zoom/pan for product media

### 🛠️ Developer Experience
- **Biome** — Unified linting and formatting
- **Turbopack** — Next-gen bundler replacing Webpack

## 📁 Project Structure

```
100-power-v2/
├── src/
│   ├── app/                    # Next.js App Router
│   │   └── [locale]/           # Locale-aware routes (en, ar, ru)
│   │       ├── about/          # About page
│   │       ├── contact/        # Contact page
│   │       ├── products/       # Products page
│   │       ├── solutions/      # Solutions page
│   │       ├── globals.css     # Global styles
│   │       ├── layout.tsx      # Root layout per-locale
│   │       └── page.tsx        # Home page
│   ├── components/             # Reusable components
│   │   ├── ui/                 # Base UI components
│   │   ├── layout/             # Layout components
│   │   ├── sections/           # Page sections
│   │   ├── animated/           # Animated components
│   │   └── markdown/           # Markdown components
│   ├── features/               # Feature modules
│   │   ├── contact/            # Contact form functionality
│   │   ├── products/           # Product management
│   │   └── seo/                # SEO utilities
│   ├── locale/                 # i18n (next-intl) configuration & messages
│   │   ├── routing.ts          # defineRouting (locales, defaultLocale, cookie)
│   │   ├── request.ts          # getRequestConfig to load messages
│   │   ├── en/                 # English messages
│   │   ├── ar/                 # Arabic messages
│   │   └── ru/                 # Russian messages
│   ├── data/                   # Static data and constants
│   ├── lib/                    # Utility functions
│   ├── assets/                 # Static assets
│   └── contents/               # Content management
├── public/                     # Public assets
│   ├── images/                 # Image assets
│   ├── videos/                 # Video assets
│   └── datasheet/              # Product datasheets
├── src/middleware.ts           # next-intl locale routing middleware
├── .github/                    # GitHub workflows
└── config files                # Various configuration files
```

## 🌐 Internationalization (i18n)

- **Library**: `next-intl` with localized routing via `[locale]` segment.
- **Supported locales**: `en`, `ar`, `ru` (default: `en`). See `src/locale/routing.ts`.
- **Locale cookie**: `100_POWER_LOCALE` to persist user choice.
- **Middleware**: `src/middleware.ts` enables locale-aware routing and redirects.
- **RTL/LTR**: `dir` attribute is set per-locale in `app/[locale]/layout.tsx` (Arabic is RTL).

### Usage
- **Server**: use `getTranslations` and `setRequestLocale` in server components or metadata.
- **Client**: use `useTranslations` inside client components.
- **Messages**: add/update message files under `src/locale/{locale}/` and load via `getMessages`.

### Add a new language
1. Create `src/locale/<code>/` with message files.
2. Add the locale code to `locales` in `src/locale/routing.ts`.
3. Ensure any RTL locales set correct `dir` handling if needed.

## 🚀 Getting Started

### Prerequisites

- **Node.js** 22+
- **pnpm** (recommended) or npm
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/100-power-v2.git
   cd 100-power-v2
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Configure the following variables:
   ```env
   # Email Configuration
   SMTP_HOST=your-smtp-host
   SMTP_PORT=587
   EMAIL_USER=your-email@domain.com
   EMAIL_PASS=your-email-password
   CONTACT_RECEIVER_EMAIL=contact@100poweruae.com

   # Google Analytics (GA4)
   NEXT_PUBLIC_GA_ID=your-ga-id
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Windows Notes
- Use a terminal that supports Node and pnpm well (e.g., Windows Terminal, PowerShell, or Git Bash as you prefer).
- If you run into native module build issues, ensure Build Tools are installed and try running your terminal as Administrator.

## 📝 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production with Turbopack
- `pnpm start` - Start production server
- `pnpm lint` - Run Biome linter
- `pnpm format` - Format code with Biome

## 🏗️ Development Guidelines

### Code Style
- **Biome** is used for linting and formatting
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Component-based architecture** with feature-based organization

### Component Structure
- Use **Radix UI** primitives for accessibility
- Implement **proper TypeScript types**
- Follow **React best practices**
- Use **semantic HTML** and **ARIA labels**

### State Management
- **React Hook Form** for form state
- **nuqs** for URL state management
- **Server Actions** for data mutations

### Performance
- **Turbopack** for fast builds
- **Image optimization** with Next.js
- **Code splitting** and lazy loading
- **SEO optimization** with metadata

## 📧 Contact Form Integration

The contact form uses:
- **React Hook Form** for form management
- **Zod** for validation
- **Nodemailer** for email delivery
- **React Email** for professional templates

### Email Configuration
```typescript
// src/features/contact/actions/mutation.tsx
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: process.env.CONTACT_RECEIVER_EMAIL,
  subject: 'New contact form submission',
  html: '<p>...</p>',
});
```

## 🎨 Design System

### Colors
- **Primary**: Orange-based brand colors
- **Secondary**: Neutral grays and whites
- **Accent**: Supporting brand colors

### Typography
- **Helvetica** for headings
- **Geist Sans** for body text
- **Responsive** font scaling

### Components
- **Badge** - Status and category indicators
- **Button** - Primary and secondary actions
- **Card** - Content containers
- **Form** - Input fields and validation
- **Carousel** - Product showcases

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms
- **Netlify** - Static site hosting
- **AWS Amplify** - Full-stack hosting
- **Docker** - Containerized deployment

## 📊 Analytics & SEO

- **Google Analytics** integration
- **Sitemap** generation
- **Meta tags** optimization
- **Open Graph** and **Twitter Cards**
- **Structured data** markup

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is proprietary software owned by **100 Power LLC**.

## ✨ Developed & Designed by [Ziron Media](https://zironmedia.com)

Crafted with precision and performance in mind.  
For branding, development, or product experience services, reach out to us at **Ziron Media**.

---

**100 Power** - Maximizing performance, minimizing friction, protecting the planet.
