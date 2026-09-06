import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const sectors = [
  {
    title: "Agriculture",
    image: "/images/agriculture.jpg",
    href: "/agriculture",
  },
  {
    title: "Oil & Gas",
    image: "/images/oil-gas.jpg",
    href: "/oil-gas",
  },
  {
    title: "Metals & Scrap",
    image: "/images/metals.jpg",
    href: "/metals-scrap",
  },
  {
    title: "Fertilizers",
    image: "/images/fertilizer.jpg",
    href: "/fertilizer",
  },
];

export default function Sectors() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D7A54A]">
            Our Expertise
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#071B3A] md:text-5xl">
            Explore Our Commodity Sectors
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            We source, inspect and deliver commodities through reliable supply
            chains, connecting trusted producers with buyers across global
            markets.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-4">

          {sectors.map((sector) => (
            <Link
              key={sector.title}
              href={sector.href}
              className="group relative h-[420px] overflow-hidden rounded-3xl"
            >

              <Image
                src={sector.image}
                alt={sector.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">

                <h3 className="mb-5 text-3xl font-bold text-white">
                  {sector.title}
                </h3>

                <span className="inline-flex items-center gap-2 rounded-full bg-[#D7A54A] px-5 py-3 text-sm font-semibold text-[#071B3A] transition group-hover:gap-3">
                  Explore
                  <ArrowRight size={18} />
                </span>

              </div>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}