import Link from "next/link";

import { IconArrowUpRight } from "@tabler/icons-react";
import { ArrowUpRight, Menu } from "lucide-react";

import { Logo } from "@/assets/logo";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/data/constants";
import { PRODUCTS } from "@/data/products";

import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <header className="bg-background/80 border-background sticky top-0 z-999 border-b py-2 backdrop-blur-xl">
      <nav className="container flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-3 font-medium lg:flex">
          {NAV_LINKS.map((link, i) => (
            <li key={`${link.href}-${i}`}>
              <Link
                href={link.href}
                className="hover:text-primary-foreground hover:bg-accent rounded-sm px-4 py-2.5 tracking-tight transition-colors"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Button asChild variant="secondary">
            <Link href="/contact">
              Contact <ArrowUpRight size={18} />
            </Link>
          </Button>

          <Sheet modal>
            <SheetTrigger className="md:hidden" asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-muted-foreground/60 bg-muted/60 rounded-sm"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Hundred Power Trading LLC
                </SheetDescription>
              </SheetHeader>
              <div className="flex h-full flex-col justify-between px-2 pb-6">
                <ul className="w-full space-y-2 font-medium">
                  {NAV_LINKS.map((link, i) => (
                    <li key={`${link.href}-${i}`} className="w-full">
                      <Link
                        href={link.href}
                        className="hover:text-primary-foreground hover:bg-accent inline-flex w-full items-center justify-between rounded-sm px-3 py-3 tracking-tight transition-colors"
                      >
                        {link.title}

                        <IconArrowUpRight className="text-muted-foreground size-4" />
                      </Link>
                    </li>
                  ))}
                  <li className="ml-5 border-l pl-2">
                    <ul className="space-y-2">
                      {PRODUCTS.map((prod) => (
                        <li key={prod.id}>
                          <Link
                            href={prod.href}
                            className="hover:text-primary-foreground hover:bg-accent inline-flex w-full items-center justify-between rounded-sm py-2 pr-3 pl-2 tracking-tight transition-colors"
                          >
                            {prod.title}

                            <IconArrowUpRight className="text-muted-foreground size-4" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>

                <div className="px-3">
                  <Button asChild variant="secondary" className="w-full">
                    <Link href="/contact">
                      Contact <ArrowUpRight size={18} />
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
