"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const locations = [
  {
    name: "Brazil",
    left: "22%",
    top: "62%",
  },
  {
    name: "Europe",
    left: "49%",
    top: "24%",
  },
  {
    name: "India",
    left: "66%",
    top: "42%",
  },
  {
    name: "Dubai",
    left: "58%",
    top: "40%",
  },
  {
    name: "Singapore",
    left: "74%",
    top: "56%",
  },
  {
    name: "USA",
    left: "16%",
    top: "42%",
  },
];

export default function GlobalPresence() {
  return (
    <section className="relative overflow-hidden bg-white py-10">

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-8">

        {/* LEFT */}

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            ----- GLOBAL PRESENCE
          </p>

          <h2 className="mt-2 text-5xl font-bold leading-tight text-slate-900">
            Connecting Businesses.
            <br />
            Across Continents.
          </h2>

          <p className="mt-2 text-lg leading-9 text-slate-600">
            We connect trusted manufacturers, suppliers and buyers across
            agriculture, food ingredients and industrial commodities through
            transparent sourcing, dependable logistics and long-term business
            partnerships.
          </p>

          <Link
            href="/markets"
            className="mt-5 inline-flex items-center gap-3 rounded-xl bg-slate-900 px-7 py-4 text-white transition hover:bg-[#c89b57]"
          >
            Explore Markets

            <ArrowRight className="h-5 w-5" />
          </Link>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <Image
            src="/images/world-map.svg"
            alt="Global Map"
            width={900}
            height={620}
            className="w-full opacity-70"
          />

          {/* Glowing Locations */}

          {locations.map((location) => (
            <div
              key={location.name}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: location.left,
                top: location.top,
              }}
            >
              {/* Dot */}
              <span className="relative block h-4 w-4 rounded-full border-2 border-white bg-[#c89b57] shadow-[0_0_18px_rgba(200,155,87,0.9)]" />

              {/* Label */}
              <div className="absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-lg">
                {location.name}
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}