const pillars = [
  {
    number: "01",
    title: "Verified Supplier Network",
    description:
      "We build long-term relationships with carefully selected manufacturers, processors and exporters to ensure consistent quality and dependable supply.",
  },
  {
    number: "02",
    title: "Strategic Global Sourcing",
    description:
      "Our sourcing capabilities span key producing regions, enabling reliable procurement across multiple commodity categories.",
  },
  {
    number: "03",
    title: "Quality Assurance",
    description:
      "Every shipment is supported by quality inspections, export documentation and compliance procedures before dispatch.",
  },
  {
    number: "04",
    title: "Export & Logistics Management",
    description:
      "From supplier coordination to international delivery, we manage every stage of the export process with precision.",
  },
];

const stats = [
  {
    value: "20+",
    label: "Countries Served",
  },
  {
    value: "50+",
    label: "Trusted Supply Partners",
  },
  {
    value: "Multi",
    label: "Commodity Categories",
  },
];

export default function GlobalSupply() {
  return (
    <section className="bg-white py-10">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="max-w-5xl">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            TRUSTED GLOBAL SUPPLY NETWORK
          </p>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl">
            Reliable Supply Built
            <br />
            Through Trusted Partnerships
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            Our international supplier ecosystem is built on long-term
            relationships, disciplined sourcing and reliable execution.
            Every partnership is selected to deliver consistency, quality
            and confidence for buyers across global commodity markets.
          </p>

        </div>  

        {/* Pillars */}

        <div className="mt-2">

          {pillars.map((pillar, index) => (

            <div
              key={pillar.number}
              className={`grid gap-12 py-7 lg:grid-cols-[120px_1fr] ${
                index !== pillars.length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >

              {/* Number */}

              <div>

                <span className="text-6xl font-bold tracking-tight text-[#c89b57]/20">
                  {pillar.number}
                </span>

              </div>

              {/* Content */}

              <div>

                <h3 className="text-3xl font-semibold text-slate-900">
                  {pillar.title}
                </h3>

                <p className="mt-2 max-w-3xl text-lg leading-9 text-slate-600">
                  {pillar.description}
                </p>

              </div>

            </div>

          ))}
        </div>

        {/* Statistics */}

        <div className="mt-5 border-t border-slate-200 pt-16">

          <div className="grid gap-10 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center md:text-center"
            >
              <div className="text-5xl font-bold tracking-tight text-slate-900">
                {stat.value}
              </div>

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>

      {/* Bottom Quote */}

      <div className="mx-auto mt-15 max-w-4xl px-6 text-center">

        <blockquote className="text-2xl font-light leading-10 text-slate-700 lg:text-3xl">
          "Reliable international trade begins long before a shipment leaves the
          port. It begins with trusted partnerships, disciplined sourcing and
          consistent execution."
        </blockquote>

      </div>
      </div>

    </section>
  );
}  