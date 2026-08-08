import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const commodities = [
  {
    title: "Rice",
    origin: "India",
    image: "/images/agriculture/rice.jpg",
    description:
      "Premium Basmati and Non-Basmati rice sourced from trusted Indian mills for global buyers.",
    href: "/sectors/agriculture/rice",
  },
  {
    title: "Sugar",
    origin: "Brazil",
    image: "/images/agriculture/sugar.jpg",
    description:
      "Brazilian ICUMSA sugar supplied through verified mills with dependable export execution.",
    href: "/sectors/agriculture/sugar",
  },
  {
    title: "Edible Oil",
    origin: "India",
    image: "/images/agriculture/oilseed.jpg",
    description:
      "Soybean, sesame, mustard and other premium oil seeds for global wholesale buyers.",
    href: "/sectors/agriculture/oil-seeds",
  },
];

export default function ProductPortfolio() {
  return (
    <section
  id="products"
  className="bg-white py-10"
>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            ----- AGRICULTURAL PORTFOLIO -----
          </p>

          <h2 className="mt-5 text-5xl font-bold tracking-tight text-slate-900">
            Our Code Agriculture
            <br />
            Commodity
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            We connect international buyers with carefully selected agricultural
            commodities sourced through trusted producer networks across India
            and Brazil.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {commodities.map((item) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-3xl"
          >
            {/* Image */}

            <div className="relative h-[450px]">

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />

              {/* Origin Badge */}

              <div className="absolute left-6 top-6 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                {item.origin}
              </div>

              {/* Content */}

<div className="absolute inset-0 flex flex-col justify-end p-8">

  <h3 className="text-4xl font-bold text-white">
    {item.title}
  </h3>

  {/* Fixed height description */}

  <div className="mt-5 h-28">
    <p className="text-base leading-7 text-slate-200">
      {item.description}
    </p>
  </div>

  <Link
    href={item.href}
    className="inline-flex w-fit items-center rounded-xl bg-[#c89b57] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b78946]"
  >
    Explore Products

    <ArrowRight className="ml-3 h-4 w-4" />
  </Link>

</div>

            </div>

          </div>
        ))}
      </div>

    </div>

  </section>
);
}