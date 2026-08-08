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

const process = [
  {
    step: "01",
    title: "Requirement Inquiry",
    description:
      "Share your product requirements, specifications and destination market.",
    icon: Search,
  },
  {
    step: "02",
    title: "Supplier Selections",
    description:
      "We identify the most suitable verified supplier based on your requirements.",
    icon: Factory,
  },
  {
    step: "03",
    title: "Commercial Proposal",
    description:
      "Pricing, specifications and commercial terms are finalized before confirmation.",
    icon: FileText,
  },
  {
    step: "04",
    title: "Quality & Documentation",
    description:
      "Inspection, export documentation and compliance are completed before shipment.",
    icon: ClipboardCheck,
  },
  {
    step: "05",
    title: "Production & Shipment",
    description:
      "Production, logistics and customs coordination are managed professionally.",
    icon: Ship,
  },
  {
    step: "06",
    title: "Successful Delivery",
    description:
      "Cargo reaches the destination safely with complete documentation.",
    icon: CircleCheckBig,
  },
];

export default function Timeline() {
  const [active, setActive] = useState(2);
  useEffect(() => {
  const interval = setInterval(() => {
    setActive((prev) => (prev + 1) % process.length);
  }, 2000);

  return () => clearInterval(interval);
}, []);

  return (
    <section className="bg-white py-5">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            ----- OUR PROCESS -----
          </p>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            From Inquiry to
            <br />
            Successful Delivery
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-slate-600">
            Every commodity transaction follows a structured execution
            process designed to reduce risk, maintain transparency and
            ensure timely international delivery.
          </p>

        </div>

        {/* Desktop Timeline */}

         <div className="relative mt-10 hidden md:block">

          {/* Main Line */}

          <div className="absolute left-0 right-0 top-7 hidden h-px bg-slate-200 lg:block" />

          <div className="grid gap-8 lg:grid-cols-6">

            {process.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.step}
                  className="group relative flex flex-col items-center"
                >
                    {/* Popup */}

                  <div className="pointer-events-none absolute -top-64 left-1/2 z-30 hidden w-72 -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:block group-hover:-translate-y-2 group-hover:opacity-100 lg:block">

                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">

                      <p className="text-sm font-semibold tracking-[0.25em] text-[#c89b57]">
                        STEP {item.step}
                      </p>

                      <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-4 leading-7 text-slate-600">
                        {item.description}
                      </p>

                    </div>

                    {/* Arrow */}

                    <div className="absolute left-1/2 top-full h-4 w-4 -translate-x-1/2 -translate-y-2 rotate-45 border-b border-r border-slate-200 bg-white" />

                  </div>

                  {/* Circle */}

                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-slate-300 bg-white transition-all duration-300 group-hover:border-[#c89b57] group-hover:bg-[#c89b57]">

                    <Icon
                      size={24}
                      className="text-slate-700 transition-colors duration-300 group-hover:text-white"
                    />

                  </div>

                  {/* Step */}

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
                    STEP {item.step}
                  </p>

                  {/* Title */}

                  <h4 className="mt-3 h-14 text-center text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-[#c89b57]">
                    {item.title}
                  </h4>

                </div>

              );

            })}

          </div>

        </div>

        <div className="mt-10 border-t border-slate-200 pt-10">

          <p className="mx-auto max-w-3xl text-center text-base leading-8 text-slate-600">
            Every shipment follows a standardized execution process designed
            to ensure transparency, quality assurance and timely international
            delivery across global markets.
          </p>

        </div>

        <div className="mt-14 md:hidden">

  {process.map((item, index) => {

    const Icon = item.icon;

    return (

      <div
        key={item.step}
        className="relative mb-12 flex items-start gap-5"
      >

        {index !== process.length - 1 && (

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

<div className="mt-14 md:hidden">

  {process.map((item, index) => {

    const Icon = item.icon;

    return (

      <div
        key={item.step}
        className="relative mb-12 flex items-start gap-5"
      >

        {index !== process.length - 1 && (

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