"use client";

import { useTransition } from "react";
import { useParams } from "next/navigation";

import { Locale } from "next-intl";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { FlagRu, FlagUae, FlagUK } from "@/assets/flags";

import { useOpenPanelTracking } from "@/lib/openpanel";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "@/locale/navigation";

import { Button } from "../ui/button";

const LANGUAGES = [
  { code: "en", label: "EN", title: "English", Icon: FlagUK },
  { code: "ar", label: "AR", title: "Arabic", Icon: FlagUae },
  { code: "ru", label: "RU", title: "Russian", Icon: FlagRu },
] as const;

interface Props {
  className?: string;
}

export function LanguageSelector({ className }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const { trackLocaleChange } = useOpenPanelTracking();

  const currentLocale = (params?.locale as Locale) || "en";

  const handleSelect = (code: string) => {
    const nextLocale = code as Locale;
    trackLocaleChange({
      from: currentLocale,
      to: nextLocale,
      component: "LanguageSelector",
      locale: currentLocale,
    });
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params` are used in combination with a given `pathname`. Since the two will always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  };

  const currentLang = LANGUAGES.find((l) => l.code === currentLocale);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn(
            "flex cursor-pointer items-center justify-center gap-2.5 rounded-md text-brand-dark",
            className
          )}
          type="button"
          variant="ghost"
        >
          {currentLang ? <currentLang.Icon className="size-5" /> : null}
          <span className="font-semibold text-sm uppercase">
            {currentLocale}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="md:min-w-fit">
        <DropdownMenuGroup className="flex flex-col gap-1">
          {LANGUAGES.map((lang) => (
            <DropdownMenuItem
              className="max-md:px-3 max-md:py-2.5"
              key={lang.code}
            >
              <button
                className={cn(
                  "flex cursor-pointer items-center gap-2 rounded-md text-left transition md:gap-1.5"
                )}
                disabled={isPending}
                onClick={() => handleSelect(lang.code)}
                role="menuitem"
              >
                <lang.Icon className="size-5" />
                {lang.title}
                {currentLocale === lang.code && (
                  <span className="absolute inset-0 -z-1 rounded-sm bg-muted" />
                )}
              </button>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
