import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const portfolio = [
  {
    title: "Basmati Rice",
    image: "/images/rice/basmati.jpg",
    description:
      "Premium aromatic long-grain rice sourced from India's trusted mills for retail, food service and international wholesale markets.",
    features: [
      "1121 Basmati",
      "1509 Basmati",
      "Traditional Basmati",
      "Private Label Available",
    ],
    href: "/catalogs/Agrosyne-Rice-Catalog.pdf",
  },

  {
    title: "Non-Basmati Rice",
    image: "/images/rice/non-basmati.jpg",
    description:
      "High-quality Non-Basmati rice supplied for bulk buyers, distributors, food manufacturers and institutional procurement worldwide.",
    features: [
      "IR64",
      "Sona Masoori",
      "PR11 / PR14",
      "Bulk Export Supply",
    ],
    href: "/catalogs/Agrosyne-Rice-Catalog.pdf",
  },
];

export default function RicePortfolio() {
  return (
    <section className="bg-slate-50 py-10">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            OUR RICE PORTFOLIO
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
            Premium Rice
            <br />
            Categories We Supply
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Our portfolio includes carefully selected Basmati and
            Non-Basmati rice sourced directly from trusted Indian mills,
            serving wholesalers, distributors, food manufacturers and
            private label brands across international markets.
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
                  Explore Products

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