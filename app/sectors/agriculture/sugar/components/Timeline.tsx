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
    step: "01",
    title: "LOI Received",
    description:
      "Buyer submits a Letter of Intent (LOI) outlining the required quantity, destination, preferred payment terms and commercial requirements.",
    icon: Search,
  },
  {
    step: "02",
    title: "FCO & SPA",
    description:
      "Following qualification, we issue the Full Corporate Offer (FCO). Upon acceptance, both parties execute the Sales & Purchase Agreement (SPA).",
    icon: FileText,
  },
  {
    step: "03",
    title: "Payment Instrument",
    description:
      "The agreed payment instrument, such as SBLC, DLC or Letter of Credit, is established according to the contractual terms.",
    icon: FileText,
  },
  {
    step: "04",
    title: "Shipment Preparation",
    description:
      "The supplier schedules production, container allocation and export logistics in preparation for vessel loading.",
    icon: Factory,
  },
  {
    step: "05",
    title: "Inspection",
    description:
      "Independent inspection is completed where applicable, verifying product quality, quantity and loading in accordance with the contract.",
    icon: FileText,
  },
  {
    step: "06",
    title: "Global Delivery",
    description:
      "Shipping documents are released, cargo reaches the destination port and the transaction concludes with post-shipment support.",
    icon: CircleCheckBig,
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
            ----- SUGAR TRADE PROCESS -----
          </p>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            From Buyer Inquiry
            <br />
            To Global Delivery
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            Every sugar transaction follows a structured commercial workflow designed to ensure transparency, secure payment procedures and reliable international execution.
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