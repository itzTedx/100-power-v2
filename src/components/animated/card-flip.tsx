'use client'

import { ElementType, useState } from 'react'
import Image from 'next/image'

import { ArrowRight, Repeat2 } from 'lucide-react'

import { Feature } from '@/data/constants'
import { cn } from '@/lib/utils'

export interface CardFlipProps {
  data: Feature
  Icon: ElementType
}

export default function CardFlip({ data, Icon }: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="group relative w-full [perspective:2000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          'relative h-full w-full',
          '[transform-style:preserve-3d]',
          'transition-all duration-700',
          isFlipped
            ? '[transform:rotateY(180deg)]'
            : '[transform:rotateY(0deg)]'
        )}
      >
        <div
          className={cn(
            'absolute inset-0 h-full w-full',
            '[backface-visibility:hidden] [transform:rotateY(0deg)]',
            'overflow-hidden rounded-sm',
            'bg-zinc-50 dark:bg-zinc-900',
            'border border-zinc-200 dark:border-zinc-800/50',
            'shadow-xs dark:shadow-lg',
            'transition-all duration-700',
            'group-hover:shadow-lg dark:group-hover:shadow-xl',
            isFlipped ? 'opacity-0' : 'opacity-100'
          )}
        >
          <Image alt="" className="object-cover" fill src={data.image} />
          <div className="absolute right-0 bottom-0 left-0 p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="space-y-1.5">
                <h3 className="font-semibold text-lg text-zinc-900 leading-snug tracking-tighter transition-all duration-500 ease-out-expo group-hover:translate-y-[-4px] dark:text-white">
                  {data.title}
                </h3>
                <p className="line-clamp-2 text-sm text-zinc-600 tracking-tight transition-all delay-[50ms] duration-500 ease-out-expo group-hover:translate-y-[-4px] dark:text-zinc-200">
                  {data.subtitle}
                </p>
              </div>
              <div className="group/icon relative">
                <div
                  className={cn(
                    'absolute inset-[-8px] rounded-lg transition-opacity duration-300',
                    'bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-transparent'
                  )}
                />
                <Repeat2 className="group-hover/icon:-rotate-12 relative z-10 h-4 w-4 text-orange-500 transition-transform duration-300 group-hover/icon:scale-110" />
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full',
            '[backface-visibility:hidden] [transform:rotateY(180deg)]',
            'rounded-sm p-6',
            'bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-black',
            'border border-zinc-200 dark:border-zinc-800',
            'shadow-xs dark:shadow-lg',
            'flex flex-col',
            'transition-all duration-700',
            'group-hover:shadow-lg dark:group-hover:shadow-xl',
            !isFlipped ? 'opacity-0' : 'opacity-100'
          )}
        >
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-zinc-900 leading-snug tracking-tight transition-all duration-500 ease-out-expo group-hover:translate-y-[-2px] dark:text-white">
                {data.title}
              </h3>
              <p className="line-clamp-2 text-sm text-zinc-600 tracking-tight transition-all duration-500 ease-out-expo group-hover:translate-y-[-2px] dark:text-zinc-400">
                {data.description}
              </p>
            </div>

            <div className="space-y-2">
              {data.features.map((feature, index) => (
                <div
                  className="flex items-center gap-2 text-sm text-zinc-700 transition-all duration-500 dark:text-zinc-300"
                  key={feature.title}
                  style={{
                    transform: isFlipped
                      ? 'translateX(0)'
                      : 'translateX(-10px)',
                    opacity: isFlipped ? 1 : 0,
                    transitionDelay: `${index * 100 + 200}ms`,
                  }}
                >
                  <ArrowRight className="h-3 w-3 text-orange-500" />
                  <span>{feature.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 border-zinc-200 border-t pt-6 dark:border-zinc-800">
            <div
              className={cn(
                'group/start relative',
                'flex items-center justify-between',
                '-m-3 rounded-xl p-3',
                'transition-all duration-300',
                'bg-gradient-to-r from-zinc-100 via-zinc-100 to-zinc-100',
                'dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-800',
                'hover:from-0% hover:from-orange-500/10 hover:via-100% hover:via-orange-500/5 hover:to-100% hover:to-transparent',
                'dark:hover:from-0% dark:hover:from-orange-500/20 dark:hover:via-100% dark:hover:via-orange-500/10 dark:hover:to-100% dark:hover:to-transparent',
                'hover:scale-[1.02] hover:cursor-pointer'
              )}
            >
              <span className="font-medium text-sm text-zinc-900 transition-colors duration-300 group-hover/start:text-orange-600 dark:text-white dark:group-hover/start:text-orange-400">
                Start today
              </span>
              <div className="group/icon relative">
                <div
                  className={cn(
                    'absolute inset-[-6px] rounded-lg transition-all duration-300',
                    'bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-transparent',
                    'scale-90 opacity-0 group-hover/start:scale-100 group-hover/start:opacity-100'
                  )}
                />
                <Icon className="relative z-10 h-4 w-4 text-orange-500 transition-all duration-300 group-hover/start:translate-x-0.5 group-hover/start:scale-110" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scale {
          0% {
            transform: scale(2);
            opacity: 0;
            box-shadow: 0px 0px 50px rgba(255, 165, 0, 0.5);
          }
          50% {
            transform: translate(0px, -5px) scale(1);
            opacity: 1;
            box-shadow: 0px 8px 20px rgba(255, 165, 0, 0.5);
          }
          100% {
            transform: translate(0px, 5px) scale(0.1);
            opacity: 0;
            box-shadow: 0px 10px 20px rgba(255, 165, 0, 0);
          }
        }
      `}</style>
    </div>
  )
}
