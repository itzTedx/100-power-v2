import Link from "next/link";

import { Logo } from "@/assets/logo";
import { FOOTER, SOCIALS } from "@/data/constants";

export function Footer() {
  return (
    <footer
      className="bg-primary-foreground text-secondary-foreground"
      aria-label="Site Footer"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 md:grid-cols-4 md:py-12">
          <address className="col-span-1 space-y-3 not-italic md:col-span-1">
            <h3 className="font-aloevera text-primary font-bold">
              Hundred Power Trading LLC
            </h3>
            <p>
              Powering industries with advanced lubrication technology to reduce
              friction, extend machinery life, and protect the planet.
            </p>
          </address>

          {FOOTER.map((nav) => (
            <nav
              className="flex flex-col gap-2"
              key={nav.id}
              aria-label={nav.heading}
            >
              <h3 className="font-aloevera text-primary mb-2 font-medium tracking-tight">
                {nav.heading}
              </h3>
              <ul className="space-y-2">
                {nav.items.map((link) => (
                  <li key={link.id}>
                    {"href" in link ? (
                      <Link
                        href={link.href!}
                        title={link.title}
                        prefetch={false}
                      >
                        {link.title}
                      </Link>
                    ) : (
                      link.title
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="border-muted-foreground/20 flex flex-col items-center justify-between gap-4 border-y py-4 md:flex-row md:gap-0 md:py-6">
          <Link
            href="/"
            title="Home"
            aria-label="Home"
            className="mb-2 md:mb-0"
          >
            <Logo aria-label="100 Power Logo" />
          </Link>

          <ul
            className="flex items-center gap-4"
            aria-label="Social Media Links"
          >
            {SOCIALS.map((s) => (
              <li key={s.id}>
                <Link
                  href={s.href}
                  aria-label="Social Link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Social Link"
                  prefetch={false}
                >
                  <s.icon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 py-3 text-sm md:flex-row md:gap-4">
          <ul className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <li>
              <Link href="/privacy" title="Privacy Policy" prefetch={false}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" title="Terms & Conditions" prefetch={false}>
                Terms & Conditions
              </Link>
            </li>
          </ul>
          <p className="text-center md:text-left">
            ©{new Date().getFullYear()} Hundred Power LLC, All rights reserved
          </p>
          <Link
            href="https://www.zironmedia.com"
            className="text-muted/80 text-center text-sm tracking-tight md:text-right"
            target="_blank"
            rel="noopener noreferrer"
            title="Ziron Media Website"
            prefetch={false}
          >
            Designed & Developed by Ziron Media
          </Link>
        </div>
      </div>
    </footer>
  );
}
