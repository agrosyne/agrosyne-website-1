"use client";

import { useState } from "react";
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
    step: "01",
    title: "Inquiry Received",
    description:
      "We review your product specifications, destination market and commercial requirements before preparing the right sourcing strategy.",
    icon: Search,
  },
  {
    step: "02",
    title: "Supplier Matching",
    description:
      "Verified manufacturers are selected based on quality, production capacity, certifications and commercial suitability.",
    icon: Factory,
  },
  {
    step: "03",
    title: "Commercial Proposal",
    description:
      "Pricing, payment terms, specifications and delivery schedules are finalized with complete transparency.",
    icon: FileText,
  },
  {
    step: "04",
    title: "Quality & Documentation",
    description:
      "Inspection, export documentation and compliance procedures are completed before dispatch.",
    icon: ClipboardCheck,
  },
  {
    step: "05",
    title: "Shipment & Logistics",
    description:
      "Freight booking, customs coordination and shipment tracking are managed until departure.",
    icon: Ship,
  },
  {
    step: "06",
    title: "Successful Delivery",
    description:
      "Cargo reaches its destination with continuous communication and post-shipment support.",
    icon: CircleCheckBig,
  },
];

export default function Timeline() {
  const [active, setActive] = useState(2);

  return (
    <section className="bg-white py-10">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
           ----- EXPORT EXECUTION PROCESS -----
          </p>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            From Inquiry to
            <br />
            Successful Delivery
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            Every shipment follows a structured workflow designed to ensure
            transparency, quality and dependable international execution.
          </p>

        </div>

        {/* Timeline starts below */}
                <div className="relative mt-10">

          {/* Timeline Line */}
          <div className="absolute left-0 right-0 top-5 h-[2px] bg-slate-200">
            <div
  className="h-full bg-[#c89b57] transition-all duration-500"
  style={{
    width: `${(active / (timeline.length - 1)) * 100}%`,
  }}
/>
          </div>

          {/* Timeline Items */}
          <div className="relative flex justify-between">

            {timeline.map((item, index) => (

              <div
                key={item.step}
                className="relative flex flex-1 flex-col items-center"
              >

                {/* Floating Card */}
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
                  {item.step}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}