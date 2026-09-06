import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const portfolio = [
  {
    title: "Urea",
    image: "/images/fertilizer/urea.jpg",
    description:
      "High-quality urea fertilizer supplied for commercial agriculture, crop nutrition and large-scale farming operations through dependable international supply networks.",
    features: [
      "46% Nitrogen",
      "Agricultural Grade",
      "Bulk Supply",
      "Global Trade",
    ],
    href: "/catalogs/EN590-Catalog.pdf",
  },

  {
    title: "Sulphur",
    image: "/images/fertilizer/sulphur.jpg",
    description:
      "Premium sulphur supplied for fertilizer production, crop nutrition and industrial applications with consistent quality and reliable international sourcing.",
    features: [
      "High Purity",
      "Agricultural Use",
      "Industrial Grade",
      "Bulk Export",
    ],
    href: "/catalogs/JetA1-Catalog.pdf",
  },
  {
    title: "DAP",
    image: "/images/fertilizer/dap.jpg",
    description:
      "Premium diammonium phosphate fertilizer supplied to improve crop establishment, root development and overall agricultural productivity.",
    features: [
      "DAP Fertilizer",
      "High Phosphorus",
      "Bulk Supply",
      "Global Distribution",
    ],
    href: "/catalogs/Bitumen-Catalog.pdf",
  },

  {
    title: "NPK Fertilizer",
    image: "/images/fertilizer/npk.jpg",
    description:
      "Balanced NPK fertilizer formulations supplied for a wide range of crops, supporting healthy plant growth and improved agricultural yields.",
    features: [
      "Balanced Nutrition",
      "Multiple Formulations",
      "Bulk Supply",
      "Agricultural Grade",
    ],
    href: "/catalogs/Coal-Catalog.pdf",
},
];

export default function RicePortfolio() {
  return (
    <section className="bg-slate-50 py-10">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            OUR FERTILIZER PORTFOLIO
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
            Fertilizer
            <br />
            Commodities We Supply
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Our portfolio includes premium fertilizer commodities sourced through trusted international supplier networks, serving agricultural distributors, commercial farming enterprises, importers and international trading companies across global markets.
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