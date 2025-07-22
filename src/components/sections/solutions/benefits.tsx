import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Benefits = () => {
  const BENEFITS = [
    {
      icon: "⏳",
      title: "Extended Service Intervals",
      desc: "Keep your equipment running at peak performance far beyond the limits of traditional lubricants. Our solution reduces the frequency of oil changes and maintenance stops. Keeping your operations smooth and efficient.",
    },
    {
      icon: "⚡",
      title: "Consistent Performance",
      desc: "Experience steady, reliable output across the entire life of your machinery. Unlike conventional products that degrade over time, our formula maintains optimal functionality even under extreme conditions.",
    },
    {
      icon: "💧",
      title: "Fuel & Oil Efficiency",
      desc: "Our technology helps maintain a stable fuel and oil consumption curve — preventing spikes in usage as engines age or workloads increase. This means reduced operational costs and improved resource management.",
    },
    {
      icon: "🔩",
      title: "Extended Machinery Life",
      desc: "With wear reduction of up to 95%, our micro-metallurgical technology greatly extends the lifespan of engines, hydraulics, and gear systems—by up to 8×—reducing replacement costs and downtime.",
    },
    {
      icon: "🌱",
      title: "Environmental Impact",
      desc: "We help your business operate greener. Less lubricant waste, reduced emissions, and optimized combustion all contribute to a more sustainable future — without compromising performance.",
    },
    {
      icon: "⚙️",
      title: "Enhanced Energy Efficiency",
      desc: "Friction is the enemy of efficiency. Our anti-friction layer minimizes resistance, reduces power loss, and improves energy transfer — leading to lower energy consumption across your operations.",
    },
  ];

  return (
    <section className="container py-16">
      <h2 className="font-helvetica mb-10 text-center text-3xl font-bold md:text-4xl">
        Solution Benefits
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {BENEFITS.map((b, i) => (
          <Card key={i} className="group justify-between">
            <CardHeader>
              <p className="text-muted-foreground">{b.title}</p>
            </CardHeader>
            <CardContent className="mt-8 md:mt-12">
              <div className="group-first: group-first: grid size-16 place-content-center rounded-full border border-[oklch(0.9557_0.1104_102.71)] bg-[oklch(0.9101_0.1105_88.94)] to-[oklch(0.9557_0.1104_102.71)] group-first:bg-gradient-to-t group-first:from-[oklch(0.6519_0.1345_77.03)]/50 group-first:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset_0px_4px_8px_2to-5%] md:size-20">
                {b.icon}
              </div>
              <div className="mt-2 space-y-2 md:mt-4 md:space-y-3">
                <CardTitle className="font-helvetica text-xl font-normal md:text-3xl">
                  <h3>{b.title}</h3>
                </CardTitle>
                <CardDescription>
                  <p className="text-base tracking-tight md:text-lg">
                    {b.desc}
                  </p>
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
