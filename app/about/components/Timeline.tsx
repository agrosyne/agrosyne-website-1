"use client";

import { useEffect, useState } from "react";
import {
  Search,
  Factory,
  FileText,
  ClipboardCheck,
  Ship,
  CircleCheckBig,
} from "lucide-react";

const timeline = [
  {
    step: "2022",
    title: "Desi Manwar Pvt. Ltd. Founded",
    description:
      "Started our export journey by supplying premium Indian agricultural products including rice, spices, grains and other food commodities to international markets.",
    icon: Search,
  },
  {
    step: "2023",
    title: "Supplier Network Expansion",
    description:
      "Expanded our sourcing capabilities by building a reliable network of verified manufacturers and export partners across India.",
    icon: Factory,
  },
  {
    step: "2024",
    title: "Entered Bulk Commodity Trading",
    description:
      "Expanded beyond agricultural exports and entered the international bulk commodity trading industry.",
    icon: FileText,
  },
  {
    step: "2025",
    title: "Agrosyne Global Commodity Pvt. Ltd",
    description:
      "Expanded into the Oil & Gas sector and registered Agrosyne Global Commodity Pvt. Ltd. as a dedicated entity focused on bulk commodity trading.",
    icon: ClipboardCheck,
  },
  {
    step: "2026",
    title: "Portfolio Expansion",
    description:
      "Expanded our global trading portfolio into Metals, Scrap and Fertilizers, serving a wider range of industries and international buyers.",
    icon: Ship,
  },
];

export default function Timeline() {
  const [active, setActive] = useState(2);
  useEffect(() => {
  const interval = setInterval(() => {
    setActive((prev) => (prev + 1) % timeline.length);
  }, 2000);

  return () => clearInterval(interval);
}, []);

  return (
    <section className="bg-white py-10">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            EXPORT EXECUTION PROCESS
          </p>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            From Inquiry to
            <br />
            Successful Delivery
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            Every shipment follows a structured workflow designed to ensure transparency, quality and dependable international execution.
          </p>

        </div>

        {/* Desktop Timeline */}

         <div className="relative mt-10 hidden md:block">

          {/* Line */}

          <div className="absolute left-0 right-0 top-5 h-[2px] bg-slate-200">

            <div className="h-full bg-[#c89b57]" />

          </div>

          {/* Items */}

          <div className="relative flex justify-between">

            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.step}
                  className="relative flex flex-1 flex-col items-center"
                >

                  {/* Active Card */}

                  {active === index && (

                    <div className="absolute bottom-16 left-1/2 z-20 w-72 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">

                      <span className="text-sm font-semibold uppercase tracking-widest text-[#c89b57]">
                        {item.step}
                      </span>

                      <h3 className="mt-3 text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>

                      {/* Pointer */}

                      <div className="absolute left-1/2 top-full -translate-x-1/2">

                        <div className="h-4 w-4 rotate-45 border-b border-r border-slate-200 bg-white" />

                      </div>

                    </div>

                  )}

                  {/* Timeline Dot */}

                  <button
                    onMouseEnter={() => setActive(index)}
                    onClick={() => setActive(index)}
                    className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 transition-all duration-300 ${
                      active === index
                        ? "scale-110 border-[#c89b57] bg-[#c89b57]"
                        : "border-[#c89b57] bg-white hover:bg-[#c89b57]/20"
                    }`}
                  >
                    {active === index && (
                      <Icon className="h-5 w-5 text-white" />
                    )}
                  </button>

                  {/* Step */}

                  <span
                    className={`mt-3 text-lg font-bold transition-colors ${
                      active === index
                        ? "text-slate-900"
                        : "text-slate-500"
                    }`}
                  >
                    {item.step}
                  </span>

                </div>
              );
            })}

          </div>

        </div>

        <div className="mt-14 md:hidden">

  {timeline.map((item, index) => {

    const Icon = item.icon;

    return (

      <div
        key={item.step}
        className="relative mb-12 flex items-start gap-5"
      >

        {index !== timeline.length - 1 && (

          <div className="absolute left-6 top-14 h-24 w-[2px] bg-slate-200" />

        )}

        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#c89b57] bg-white">

          <Icon className="h-5 w-5 text-[#c89b57]" />

        </div>

        <div className="flex-1">

          <p className="text-xs font-semibold tracking-[0.25em] text-[#c89b57]">

            {item.step}

          </p>

          <h3 className="mt-2 text-xl font-bold text-slate-900">

            {item.title}

          </h3>

          <p className="mt-3 text-base leading-8 text-slate-600">

            {item.description}

          </p>

        </div>

      </div>

    );

  })}

</div>

      </div>

    </section>
  );
}