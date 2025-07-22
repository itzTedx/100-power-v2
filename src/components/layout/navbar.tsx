import Link from "next/link";

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
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
