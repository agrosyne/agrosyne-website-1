"use client";

import { useEffect, useState } from "react";
import {
  Globe,
  Users,
  Handshake,
  FileText,
  Ship,
  CheckCircle,
} from "lucide-react";

const timeline = [
  {
    step: "STEP 01",
    title: "Supplier Sourcing",
    description:
      "Identify verified suppliers matching your product and quality requirements.",
    icon: Globe,
  },
  {
    step: "STEP 02",
    title: "Buyer Development",
    description:
      "Connect exporters with qualified international buyers through our global network and targeted business development.",
    icon: Users,
  },
  {
    step: "STEP 03",
    title: "Commercial Negotiation",
    description:
      "Coordinate quotations, pricing discussions, commercial terms and contract negotiations between both parties.",
    icon: Handshake,
  },
  {
    step: "STEP 04",
    title: "Trade Documentation",
    description:
      "Prepare commercial invoices, packing lists, certificates and export documentation accurately",
    icon: FileText,
  },
  {
    step: "STEP 05",
    title: "Logistics Coordination",
    description:
      "Manage freight booking, shipment scheduling and logistics coordination until dispatch.",
    icon: Ship,
  },
  {
    step: "STEP 06",
    title: "End-To-End Execution",
    description:
      "Monitor every stage of the transaction until successful international delivery.",
    icon: CheckCircle,
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
    <section className="bg-white py-5">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            OUR TRADE SOLUTION
          </p>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Complete Trade Support
            <br />
            At Every Stage
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            Every international commodity transaction follows a structured process. We manage sourcing, negotiations, documentation, logistics and execution to ensure smooth global trade.
          </p>

        </div>

        {/* Desktop Timeline */}

         <div className="relative mt-10 hidden md:block">

          {/* Line */}

          <div className="absolute left-0 right-0 top-5 h-[2px] bg-slate-200">

            <div className="h-full bg-[#c89b57] transition-all duration-500" style={{ width: `${(active / (timeline.length - 1)) * 100}%`,
  }}
/>

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
                    className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 transition-all duration-300 ${active === index? "scale-110 border-[#c89b57] bg-[#c89b57]": "border-[#c89b57] bg-white"}`}
                  >
                    <Icon className={`h-5 w-5 ${active === index? "text-white": "text-[#c89b57]"}`}/>
                  </button>

                  {/* Step */}

                  <div className="mt-3 text-center">

                   <p
                   className={`text-xs font-semibold tracking-[0.2em] ${
                    active === index
                    ? "text-[#c89b57]"
                    : "text-slate-400"
               }`}
                >
                {item.step}
                    </p>

                     <p
                    className={`mt-2 text-sm font-semibold ${
                     active === index
                     ? "text-slate-900"
                     : "text-slate-600"
                    }`}
                    >
                    {item.title}
                     </p>

                    </div>

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