"use client";

import Image from "next/image";
import {
  ShieldCheck,
  Globe2,
  Truck,
  FileCheck,
  BadgeCheck,
  Users,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Supplier Network",
    text: "Verified manufacturers and export-ready producers.",
  },
  {
    icon: Globe2,
    title: "Transparent Trade",
    text: "Clear communication and ethical sourcing from inquiry to shipment.",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    text: "Ocean freight, documentation and delivery worldwide.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    text: "Inspection support and export quality standards.",
  },
  {
    icon: FileCheck,
    title: "Complete Documentation",
    text: "Commercial invoices, certificates and customs paperwork.",
  },
  {
    icon: Users,
    title: "Long-Term Partnerships",
    text: "Focused on sustainable business relationships.",
  },
];

export default function WhyAgrosyne() {
  return (
    <section className="bg-white py-10">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-stretch gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div className="flex flex-col justify-between">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
                WHY AGROSYNE
              </p>

              <h2 className="mt-4 text-5xl font-bold leading-tight text-slate-900">
                Why Leading Companies
                <br />
                Choose Agrosyne.
              </h2>

              <p className="mt-8 text-lg leading-9 text-slate-600">
                Every shipment is backed by transparent sourcing,
                dependable execution and long-term business ethics.
                We don't simply connect buyers and suppliers—we build
                partnerships that reduce risk, improve consistency and
                create lasting international business relationships.
              </p>

            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">

              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c89b57]/40 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#c89b57]/10">
                      <Icon className="h-6 w-6 text-[#c89b57]" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT */}

          <div className="relative h-full">

            <div className="h-full overflow-hidden rounded-3xl shadow-2xl">

              <Image
                src="/images/about-whyagrosyne.jpg"
                alt="Agrosyne Global Commodity"
                width={900}
                height={700}
                className="h-full min-h-[760px] w-full object-cover"
              />

            </div>

            {/* Floating Statistics Card */}

            <div className="absolute bottom-8 left-8 rounded-2xl bg-white p-7 shadow-2xl">

              <h3 className="text-4xl font-bold text-slate-900">
                20+
              </h3>

              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#c89b57]">
                Countries Served
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}