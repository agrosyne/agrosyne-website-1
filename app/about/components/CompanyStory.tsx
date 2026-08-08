"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function CompanyStory() {
  return (
    <section className="bg-white py-10">

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-8">

        {/* Left Image */}

        <div className="relative">

          <div className="overflow-hidden rounded-3xl shadow-2xl">

            <Image
              src="/images/about-companystory1.jpg"
              alt="Agrosyne Global Commodity"
              width={700}
              height={850}
              className="h-full w-full object-cover"
            />

          </div>

        </div>

        {/* Right Content */}

        <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            Who We Are
          </p>

          <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            Building Long-Term Commodity
            <br />
            Partnerships Worldwide.
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Agrosyne Global Commodity Pvt. Ltd. is an international commodity
            sourcing and trading company connecting trusted manufacturers,
            processors and exporters with buyers across global markets. We help
            businesses simplify procurement through transparent trade,
            dependable supplier networks and efficient execution.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From agricultural commodities to industrial raw materials, our
            focus is on building reliable supply chains rather than simply
            completing transactions. Every shipment is backed by careful
            supplier selection, documentation support and quality-oriented
            execution.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We believe that long-term business is built on consistency,
            transparency and trust. Our goal is to become the preferred sourcing
            partner for companies seeking dependable international trade
            solutions.
          </p>

          {/* Highlights */}

          <div className="mt-10 grid gap-5 sm:grid-cols-2">

            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-[#c89b57]" />
              <span className="font-medium text-slate-800">
                Verified Supplier Network
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-[#c89b57]" />
              <span className="font-medium text-slate-800">
                Transparent Trade Execution
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-[#c89b57]" />
              <span className="font-medium text-slate-800">
                Global Logistics Support
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-[#c89b57]" />
              <span className="font-medium text-slate-800">
                Export Documentation Expertise
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}