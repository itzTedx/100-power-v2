import { Values } from '@/components/sections/solutions/values'

export const MissionVision = () => {
  return (
    <section className="space-y-6 py-8 md:py-12">
      <h2 className="text-center font-bold text-xl sm:text-2xl">Our Mission</h2>
      <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-6 md:grid-cols-2">
        <div
          aria-hidden="true"
          className="mx-0 aspect-video w-full rounded-lg bg-red-300 md:mx-4"
        />

        <div className="flex h-full items-center border-t px-2 pt-4 md:border-t-0 md:border-l md:px-4 md:pt-0">
          <p className="text-pretty font-helvetica text-base sm:text-lg md:text-xl">
            At 100 Power, our mission is driven by innovation and science.
            Through ongoing R&D, we’ve developed a micro-metallurgical formula
            that protects metal surfaces, reduces friction, extends equipment
            life, and cuts maintenance costs. We’re committed to delivering
            high-performance, sustainable solutions that boost efficiency and
            support environmental care.
          </p>
        </div>
      </div>
      <h2 className="text-center font-bold text-xl sm:text-2xl">Our Vision</h2>
      <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-6 md:grid-cols-2">
        <div className="flex h-full items-center border-b px-2 pb-4 md:border-r md:border-b-0 md:px-4 md:pb-0">
          <p className="text-pretty font-helvetica text-base sm:text-lg md:text-xl">
            Our vision is to be the most trusted global provider of advanced
            lubricant technologies. We aim to deliver world-class products that
            meet international standards and exceed customer expectations. By
            partnering with businesses worldwide, we build lasting relationships
            rooted in performance, integrity, and shared success.
          </p>
        </div>
        <div
          aria-hidden="true"
          className="mx-0 aspect-video w-full rounded-lg bg-red-300 md:mx-4"
        />
      </div>
      <h2 className="text-center font-bold text-xl sm:text-2xl">Our Values</h2>
      <Values />
    </section>
  )
}
