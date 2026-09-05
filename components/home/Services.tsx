"use client";

import Link from "next/link";

export default function Services() {
  return (
    <section className="bg-[#0F172A] text-white">
      <div className="mx-auto max-w-[1550px] px-6 py-16 sm:px-8 lg:px-12 lg:py-10">

        {/* TOP CONTENT */}

        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">

          {/* LEFT */}

          <div>

            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#D8A15D]">
              OUR CAPABILITIES
            </p>

            <h2 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-[72px]">
              End-to-End Trade
              <br />
              Solutions
              <br />
              You Can Rely On.
            </h2>

          </div>

          {/* RIGHT */}

          <div className="lg:flex lg:justify-end">

            <div className="max-w-[600px]">

              <p className="text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
                We manage the complete commodity trade cycle with
                transparency, compliance and operational excellence—
                from supplier sourcing and quality inspection to
                documentation, logistics and international delivery.
              </p>

              {/* BUTTON */}

              <Link
                href="/tradesolutions"
                className="mt-8 inline-flex items-center justify-center rounded-md bg-[#D8A15D] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#C38C4D] hover:-translate-y-0.5"
              >
                Explore Trade Solutions
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}