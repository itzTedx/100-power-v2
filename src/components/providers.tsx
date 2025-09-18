'use client'

import type { ReactNode } from 'react'

import { ProgressProvider } from '@bprogress/next/app'

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
