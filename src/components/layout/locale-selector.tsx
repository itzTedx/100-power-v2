'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { FlagEn, FlagRu, FlagUae } from '@/assets/flags'

import { cn } from '@/lib/utils'
import { useChangeLocale, useCurrentLocale } from '@/locale/client'

import { Button } from '../ui/button'

const LANGUAGES = [
  { code: 'en', label: 'EN', title: 'English', Icon: FlagEn },
  { code: 'ar', label: 'AR', title: 'Arabic', Icon: FlagUae },
  { code: 'ru', label: 'RU', title: 'Russian', Icon: FlagRu },
] as const

interface Props {
  className?: string
}

export function LanguageSelector({ className }: Props) {
  const changeLocale = useChangeLocale({ preserveSearchParams: true })
  const currentLocale = useCurrentLocale()
  const currentLang = LANGUAGES.find((l) => l.code === currentLocale)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn(
            'flex cursor-pointer items-center justify-center gap-2.5 rounded-md text-brand-dark',
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
                  'flex cursor-pointer items-center gap-2 rounded-md text-left transition md:gap-1.5'
                )}
                onClick={() => changeLocale(lang.code)}
                role="menuitem"
              >
                <lang.Icon className="size-5" />
                {lang.title}
                {currentLocale === lang.code && (
                  <span className="-z-1 absolute inset-0 rounded-sm bg-muted" />
                )}
              </button>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
