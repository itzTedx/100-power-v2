'use client'

import type { ReactNode } from 'react'

import { ProgressProvider } from '@bprogress/next/app'

import { I18nProviderClient } from '@/locale/client'

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ProgressProvider
      color="#af5e00"
      height="3px"
      memo
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  )
}

export default Providers

type ProviderProps = {
  locale: string
  children: ReactNode
}

export function Provider({ locale, children }: ProviderProps) {
  return (
    <I18nProviderClient fallback={<p>Loading...</p>} locale={locale}>
      {children}
    </I18nProviderClient>
  )
}
