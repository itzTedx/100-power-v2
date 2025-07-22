import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function SolutionsPage() {
  return (
    <main>
      <section className="z-10 container min-h-[60vh] max-w-4xl overflow-hidden py-20 text-center">
        <h1 className="font-helvetica mb-6 text-4xl font-bold md:text-6xl">
          Smarter Lubrication. Longer Life. Greener Impact.
        </h1>
        <p className="mb-8 text-lg md:text-xl">
          We engineer advanced solutions that protect, optimize, and extend the
          life of engines and machinery using proprietary Micro-Metallurgical
          Technology.
        </p>
        <Button asChild>
          <Link href="/products">
            Explore Products <ArrowUpRight />
          </Link>
        </Button>
      </section>

      <section id="technology" className="container py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row">
          <div className="flex-1">
            <h2 className="font-helvetica mb-2 text-3xl font-bold md:text-4xl">
              Our Technology
            </h2>
            <h3 className="text-primary mb-6 text-lg font-semibold">
              Advanced Micro-Metallurgical Formula
            </h3>
            <ul className="mb-8 list-inside list-disc space-y-4 text-base md:text-lg">
              <li>Embeds protective elements into metal surfaces</li>
              <li>Reduces friction by up to 95%</li>
              <li>Extends machine life by up to 8X</li>
              <li>
                Ideal for engines, hydraulics, gears, and industrial machinery
              </li>
            </ul>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="animate-fade-in flex h-64 w-64 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 shadow-xl">
              <span className="text-6xl text-orange-500">⚙️</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <h2 className="font-helvetica mb-10 text-center text-3xl font-bold md:text-4xl">
          Solution Benefits
        </h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              icon: "⏳",
              title: "Extended Service Intervals",
              desc: "Reduce downtime and extend the time between maintenance cycles.",
            },
            {
              icon: "⚡",
              title: "Consistent Performance",
              desc: "Maintain optimal machinery output under all conditions.",
            },
            {
              icon: "💧",
              title: "Fuel & Oil Efficiency",
              desc: "Lower consumption and maximize every drop.",
            },
            {
              icon: "🔩",
              title: "Extended Machinery Life",
              desc: "Protect critical components for years longer.",
            },
            {
              icon: "🌱",
              title: "Environmental Impact",
              desc: "Reduce waste and emissions for a greener operation.",
            },
            {
              icon: "⚙️",
              title: "Enhanced Energy Efficiency",
              desc: "Lower friction means less energy lost to heat.",
            },
          ].map((b, i) => (
            <Card
              key={i}
              className="flex flex-col items-center rounded-xl border-0 bg-gray-800 p-6 text-center shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="mb-4 text-4xl text-orange-500">{b.icon}</div>
              <h3 className="font-helvetica mb-2 text-lg font-semibold">
                {b.title}
              </h3>
              <p className="text-sm text-gray-300">{b.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="container bg-gray-950 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-helvetica mb-8 text-center text-3xl font-bold md:text-4xl">
            Real Results in Real Projects
          </h2>
          <div className="animate-fade-in overflow-x-auto rounded-xl shadow-xl">
            <table className="min-w-full rounded-xl">
              <thead>
                <tr>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-orange-500">
                    &nbsp;
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">
                    Without Tirrent Booster
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">
                    With Tirrent Booster
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="border-t border-gray-800">
                  <td className="px-6 py-4 font-medium">Downtime</td>
                  <td className="px-6 py-4 text-center">High</td>
                  <td className="px-6 py-4 text-center font-bold text-green-400">
                    Low
                  </td>
                </tr>
                <tr className="border-t border-gray-800">
                  <td className="px-6 py-4 font-medium">Maintenance Cost</td>
                  <td className="px-6 py-4 text-center">Expensive</td>
                  <td className="px-6 py-4 text-center font-bold text-green-400">
                    Reduced
                  </td>
                </tr>
                <tr className="border-t border-gray-800">
                  <td className="px-6 py-4 font-medium">
                    Performance Consistency
                  </td>
                  <td className="px-6 py-4 text-center">Variable</td>
                  <td className="px-6 py-4 text-center font-bold text-green-400">
                    Stable
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-helvetica mb-6 text-center text-3xl font-bold md:text-4xl">
            Why Tirrent Global?
          </h2>
          <ul className="mx-auto max-w-xl list-inside list-disc space-y-4 text-lg">
            <li>Years of dedicated R&amp;D</li>
            <li>Compatible with all lubricants</li>
            <li>Trusted by industrial leaders</li>
            <li>Proven in heavy-duty applications</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
