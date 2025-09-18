import { IconArrowUpRight } from '@tabler/icons-react'
import { getTranslations } from 'next-intl/server'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const Header = async () => {
  const t = await getTranslations('about.header')
  return (
    <header>
      <div className="mx-auto max-w-4xl space-y-5 px-2 py-6 text-center md:px-0">
        <Badge variant="primary">{t('badge')}</Badge>

        <h1 className="font-bold font-helvetica text-3xl tracking-wide sm:text-5xl md:text-6xl">
          {t('title.first')}{' '}
          <span className="text-primary"> {t('title.highlight')}</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl">{t('description')}</p>
        <Button asChild className="w-full sm:w-auto">
          <a aria-label="Contact 100 Power" href="/contact">
            {t('button')} <IconArrowUpRight size={18} />
          </a>
        </Button>
      </div>
    </header>
  )
}
