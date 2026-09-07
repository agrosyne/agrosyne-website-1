import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const portfolio = [
  {
    title: "EN590 Diesel",
    image: "/images/oilgas/en590.jpg",
    description:
      "Ultra-low sulfur diesel fuel supplied through trusted international supplier networks for bulk commercial and industrial buyers.",
    features: [
      "10 PPM Sulfur",
      "Bulk Supply",
      "Global Trade",
      "Contract & Spot",
    ],
    href: "/contact",
  },

  {
    title: "Jet Fuel A1",
    image: "/images/oilgas/jeta1.jpg",
    description:
      "Aviation turbine fuel supplied for airlines, aviation operators and international fuel trading companies.",
    features: [
      "Jet A1",
      "Aviation Grade",
      "Bulk Supply",
      "Worldwide Delivery",
    ],
    href: "/contact",
  },
  {
    title: "Bitumen",
    image: "/images/oilgas/bitumen.jpg",
    description:
      "Premium penetration grade bitumen supplied for road construction, infrastructure projects and industrial applications.",
    features: [
      "60/70 Grade",
      "80/100 Grade",
      "Bulk Export",
      "Reliable Supply",
    ],
    href: "/contact",
  },

  {
    title: "Coal",
    image: "/images/oilgas/coal.jpg",
    description:
      "High-quality thermal coal supplied for power generation, industrial processing and large-scale commercial buyers.",
    features: [
      "Thermal Coal",
      "Bulk Cargo",
      "Industrial Use",
      "Global Supply",
    ],
    href: "/contact",
},
];

export default function RicePortfolio() {
  return (
    <section className="bg-slate-50 py-10">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            OUR ENERGY PORTFOLIO
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
            Energy
            <br />
            Commodities We Supply
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Our portfolio includes premium energy commodities sourced through trusted international supplier networks, serving importers, distributors, industrial buyers and trading companies across global markets.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {portfolio.map((item) => (

            <div
              key={item.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Image */}

              <div className="relative h-[320px] overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              {/* Content */}

              <div className="p-10">

                <h3 className="text-4xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {item.description}
                </p>

                {/* Features */}

                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  {item.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >

                      <CheckCircle2 className="h-5 w-5 text-[#c89b57]" />

                      <span className="text-slate-700">
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

                {/* Button */}

                <Link
                  href={item.href}
                  className="mt-10 inline-flex items-center rounded-xl bg-[#c89b57] px-7 py-4 text-base font-semibold text-white transition hover:bg-[#b78946]"
                >
                  Contact Us

                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}