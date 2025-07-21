import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Logo } from "@/assets/logo";
import { NAV_LINKS } from "@/data/constants";

import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <header className="bg-background/80 border-background sticky top-0 z-999 border-b py-2 backdrop-blur-xl">
      <nav className="container flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        <ul className="flex items-center gap-3 font-medium">
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

        <Button asChild variant="secondary">
          <Link href="/contact">
            Contact <ArrowUpRight size={18} />
          </Link>
        </Button>
      </nav>
    </header>
  );
};
