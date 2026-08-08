"use client";

import { useState } from "react";

const timeline = [
  {
    year: "2022",
    title: "Desi Manwar Pvt. Ltd. Founded",
    description:
      "Started our export journey by supplying premium Indian agricultural products including rice, spices, grains and other food commodities to international markets.",
  },
  {
    year: "2023",
    title: "Supplier Network Expansion",
    description:
      "Expanded our sourcing capabilities by building a reliable network of verified manufacturers and export partners across India.",
  },
  {
    year: "2024",
    title: "Entered Bulk Commodity Trading",
    description:
      "Expanded beyond agricultural exports and entered the international bulk commodity trading industry.",
  },
  {
    year: "2025",
    title: "Agrosyne Global Commodity Pvt. Ltd.",
    description:
      "Expanded into the Oil & Gas sector and registered Agrosyne Global Commodity Pvt. Ltd. as a dedicated entity focused on bulk commodity trading.",
  },
  {
    year: "2026",
    title: "Portfolio Expansion",
    description:
      "Expanded our global trading portfolio into Metals, Scrap and Fertilizers, serving a wider range of industries and international buyers.",
  },
];

export default function Timeline() {
  const [active, setActive] = useState(2);

  return (
    <section className="bg-white py-10">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
           ----- OUR JOURNEY -----
          </p>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            From Agricultural Exports
            <br />
            to Global Commodity Trading
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            Every milestone reflects our commitment to expanding our
            capabilities, strengthening partnerships and delivering
            dependable commodity solutions across global markets.
          </p>

        </div>

        {/* Timeline starts below */}
                <div className="relative mt-10">

          {/* Timeline Line */}
          <div className="absolute left-0 right-0 top-5 h-[2px] bg-slate-200">
            <div className="h-full bg-[#c89b57]" />
          </div>

          {/* Timeline Items */}
          <div className="relative flex justify-between">

            {timeline.map((item, index) => (

              <div
                key={item.year}
                className="relative flex flex-1 flex-col items-center"
              >

                {/* Floating Card */}
                {active === index && (

                  <div className="absolute bottom-16 left-1/2 z-20 w-72 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">

                    <span className="text-sm font-semibold uppercase tracking-widest text-[#c89b57]">
                      {item.year}
                    </span>

                    <h3 className="mt-3 text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>

                    {/* Pointer */}
                    <div className="absolute left-1/2 top-full z-10 -translate-x-1/2">
                      <div className="h-4 w-4 rotate-45 border-b border-r border-slate-200 bg-white" />
                    </div>

                  </div>

                )}

                {/* Dot */}
                <button
  onMouseEnter={() => setActive(index)}
  onClick={() => setActive(index)}
  className={`relative z-10 h-10 w-10 rounded-full border-4 transition-all duration-300 ${
    active === index
      ? "scale-110 border-[#c89b57] bg-[#c89b57]"
      : "border-[#c89b57] bg-white hover:bg-[#c89b57]/20"
  }`}
                />

                {/* Year */}
                <span
                  className={`mt-3 text-lg font-bold transition-colors ${
                    active === index
                      ? "text-slate-900"
                      : "text-slate-500"
                  }`}
                >
                  {item.year}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}