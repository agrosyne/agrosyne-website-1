import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const portfolio = [
  {
    title: "Aluminium A7 Ingots",
    image: "/images/metal/aluminium.jpg",
    description:
      "Premium Aluminium A7 ingots supplied for manufacturers, foundries and industrial buyers requiring high-purity aluminium for casting, extrusion and fabrication.",
    features: [
      "99.7% Purity",
      "Primary Aluminium",
      "Industrial Grade",
      "Bulk Supply",
    ],
    href: "/catalogs/EN590-Catalog.pdf",
  },

  {
    title: "Copper Scrap",
    image: "/images/metal/copper.jpg",
    description:
      "High-quality copper scrap sourced for recycling facilities, foundries and industrial processors seeking dependable supply and consistent material quality.",
    features: [
      "Millberry Grade",
      "High Conductivity",
      "Bulk Supply",
      "Industrial Recycling",
    ],
    href: "/catalogs/JetA1-Catalog.pdf",
  },
  {
    title: "UBC Scrap",
    image: "/images/metal/ubc.jpg",
    description:
      "Premium Used Beverage Can (UBC) aluminium scrap supplied for recycling operations and secondary aluminium production worldwide.",
    features: [
      "UBC Aluminium",
      "Recycling Grade",
      "Bulk Export",
      "Global Supply",
    ],
    href: "/catalogs/Bitumen-Catalog.pdf",
  },

  {
    title: "HMS 1 & 2 Scrap",
    image: "/images/metal/hms.jpg",
    description:
      "Heavy Melting Steel (HMS 1 & 2) scrap supplied for steel mills, foundries and industrial recycling facilities through reliable international supplier networks.",
    features: [
      "HMS 1 & 2",
      "Steel Scrap",
      "Bulk Cargo",
      "Industrial Supply",
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
            ----- OUR METALS & SCRAP PORTFOLIO -----
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
            Metals & Scrap
            <br />
            Products We Supply
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Our portfolio includes premium metals and recyclable scrap commodities sourced through trusted international supplier networks, serving manufacturers, recyclers, foundries, processors and international trading companies worldwide.
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