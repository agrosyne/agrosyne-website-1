"use client";

import {
  Globe,
  Boxes,
  ShieldCheck,
  Ship,
  FileText,
  Handshake,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Global Sourcing",
    description:
      "Strong network of verified manufacturers, processors and export-ready suppliers across India.",
  },
  {
    icon: Boxes,
    title: "Trade Execution",
    description:
      "Efficient order management, supplier coordination and complete transaction support.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Independent inspections and quality standards maintained before every shipment.",
  },
  {
    icon: Ship,
    title: "Logistics & Shipping",
    description:
      "Ocean freight booking, container planning and worldwide shipping coordination.",
  },
  {
    icon: FileText,
    title: "Trade Compliance",
    description:
      "Export documentation, certificates, customs paperwork and compliance support.",
  },
  {
    icon: Handshake,
    title: "Customer Focus",
    description:
      "Long-term relationships built through transparency, communication and reliable execution.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#0F172A] text-white">

      <div className="max-w-[1550px] mx-auto px-6 lg:px-12 py-10 pb-6">

        {/* TOP */}

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-20 items-center">

          <div>

            <p className="uppercase tracking-[0.35em] text-[#D8A15D] text-xs font-semibold mb-5">
              OUR CAPABILITIES
            </p>

            <h2 className="text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight">

              End-to-End Trade
              <br />
              Solutions
              <br />
              You Can Rely On.

            </h2>

          </div>

          <div className="flex justify-end">

            <p className="max-w-[560px] text-lg leading-9 text-slate-300">

              We manage the complete commodity trade cycle with
              transparency, compliance and operational excellence—
              from supplier sourcing and quality inspection to
              documentation, logistics and international delivery.

            </p>

          </div>

        </div>

        <div className="border-t border-[#D8A15D] mt-10"></div>

        {/* SERVICES */}

        <div className="grid grid-cols-2 lg:grid-cols-6 mt-10">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <div
                key={service.title}
                className={`px-2 ${
                  index !== services.length - 1
                    ? "border-r border-[#D8A15D]"
                    : ""
                }`}
              >

                <div className="h-5 flex items-center">

                  <Icon
                    size={28}
                    className="text-[#D8A15D]"
                  />

                </div>

                <div className="h-20 mt-5">

                  <h3 className="text-[25px] leading-tight font-semibold">

                    {service.title}

                  </h3>

                </div>
                                <div className="mt-4">

                  <p className="text-slate-300 leading-8 text-[15px]">

                    {service.description}

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