import Link from "next/link";

import { Logo } from "@/assets/logo";
import { NAV_LINKS } from "@/data/constants";

export const Navbar = () => {
  return (
    <header>
      <nav className="container flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        <ul className="flex items-center gap-3 font-medium">
          {NAV_LINKS.map((link, i) => (
            <li key={`${link.href}-${i}`}>
              <Link href={link.href} className="tracking-tight">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
