import Link from "next/link";

const sectors = [
  {
    title: "Agriculture",
    image: "/images/agriculture.jpg",
    href: "/sectors/agriculture",
    description:
      "Supplying premium agricultural commodities including rice, sugar, soybean meal and other products through trusted sourcing partnerships.",
  },
  {
    title: "Oil & Gas",
    image: "/images/oil-gas.jpg",
    href: "/sectors/oil-gas",
    description:
      "Connecting global buyers with reliable suppliers of petroleum products, bitumen, lubricants and industrial energy commodities.",
  },
  {
    title: "Metals & Scrap",
    image: "/images/metals.jpg",
    href: "/sectors/metals-scrap",
    description:
      "International sourcing of ferrous, non-ferrous metals and recyclable scrap for manufacturing and industrial applications.",
  },
  {
    title: "Fertilizers",
    image: "/images/fertilizer.jpg",
    href: "/sectors/fertilizers",
    description:
      "Reliable sourcing of fertilizers and agricultural inputs supporting food production and global farming industries.",
  },
];

export default function Overview() {
  return (
    <section
      id="overview"
      className="bg-slate-50 py-10"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            ----- OUR INDUSTRIES -----
          </p>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Expertise Across
            <br />
            Multiple Commodity Sectors
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            Agrosyne Global Commodity connects international buyers with
            dependable suppliers across diverse industries, delivering
            sourcing solutions backed by quality, transparency and
            efficient global trade execution.
          </p>

        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">

          {sectors.map((sector) => (
            <Link
              key={sector.title}
              href={sector.href}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="overflow-hidden">

                <img
                  src={sector.image}
                  alt={sector.title}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-8">

                <h3 className="text-3xl font-bold text-slate-900">
                  {sector.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {sector.description}
                </p>

                <span className="mt-8 inline-flex items-center gap-2 font-semibold uppercase tracking-wide text-[#c89b57]">
                  Explore Sector →
                </span>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}