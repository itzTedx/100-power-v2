import { getTranslations } from 'next-intl/server'

import { Values } from '@/components/sections/solutions/values'

export const MissionVision = async () => {
  const t = await getTranslations('about.values')
  return (
    <section className="space-y-6 py-8 md:py-12">
      <h2 className="text-center font-bold text-xl sm:text-2xl">
        {t('mission.title')}
      </h2>
      <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-6 md:grid-cols-2">
        <div
          aria-hidden="true"
          className="mx-0 aspect-video w-full rounded-lg bg-red-300 md:mx-4"
        />

        <div className="flex h-full items-center border-t px-2 pt-4 md:border-t-0 md:border-l md:px-4 md:pt-0">
          <p className="text-pretty font-helvetica text-base sm:text-lg md:text-xl">
            {t('mission.description')}
          </p>
        </div>
      </div>
      <h2 className="text-center font-bold text-xl sm:text-2xl">
        {t('vision.title')}
      </h2>
      <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-6 md:grid-cols-2">
        <div className="flex h-full items-center border-b px-2 pb-4 md:border-r md:border-b-0 md:px-4 md:pb-0">
          <p className="text-pretty font-helvetica text-base sm:text-lg md:text-xl">
            {t('vision.description')}
          </p>
        </div>
        <div
          aria-hidden="true"
          className="mx-0 aspect-video w-full rounded-lg bg-red-300 md:mx-4"
        />
      </div>
      <h2 className="text-center font-bold text-xl sm:text-2xl">
        {t('value.title')}
      </h2>
      <Values />
    </section>
  )
}
