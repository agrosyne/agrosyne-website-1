"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const industries = [
  {
    title: "Agricultural",
    image: "/images/agriculture.jpg",
    description:
      "Global sourcing and export of premium rice, sugar and oilseeds through verified suppliers and dependable supply chains.",
    href: "/sectors/agriculture",
  },
  {
    title: "Oil & Energy",
    image: "/images/oil-gas.jpg",
    description:
      "Reliable sourcing of bitumen, base oils, lubricants and petroleum products for industrial and infrastructure projects.",
    href: "/sectors/oil-gas",
  },
  {
    title: "Metals & Scrap",
    image: "/images/metals.jpg",
    description:
      "Supplying ferrous and non-ferrous metals, recyclable scrap and industrial raw materials to global buyers.",
    href: "/sectors/metals-scrap",
  },
  {
    title: "Fertilizers",
    image: "/images/fertilizer.jpg",
    description:
      "International sourcing of fertilizers and agricultural inputs backed by quality assurance and efficient logistics.",
    href: "/sectors/fertilizers",
  },
];

export default function Industries() {
  return (
    <section className="bg-slate-50 py-10">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            ----- INDUSTRIES WE SERVE -----
          </p>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Expertise Across
            <br />
            Multiple Industries
          </h2>

          <p className="mt-5 text-lg leading-9 text-slate-600">
            We help manufacturers, suppliers and buyers build dependable
            international supply chains across key commodity sectors.
          </p>

        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {industries.map((industry) => (
  <article
    key={industry.title}
    className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
  >
    <div className="relative h-40 overflow-hidden">

      <Image
        src={industry.image}
        alt={industry.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

    </div>

    <div className="flex h-[320px] flex-col p-8">

      <h3 className="text-3xl font-bold text-slate-900">
        {industry.title}
      </h3>

      <p className="mt-3 min-h-[128px] text-[17px] leading-8 text-slate-600">
        {industry.description}
      </p>

      <Link
        href={industry.href}
        className="mt-auto inline-flex items-center gap-2 font-semibold text-[#c89b57] transition hover:gap-3"
      >
        Explore Sector

        <ArrowUpRight className="h-5 w-5" />
      </Link>

    </div>

  </article>
))}

        </div>

      </div>

    </section>
  );
}