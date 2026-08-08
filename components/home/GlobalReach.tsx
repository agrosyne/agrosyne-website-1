"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function GlobalReach() {
  return (
    <section className="bg-white">

      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 py-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}

          <div>

            <p className="uppercase tracking-[0.35em] text-[#D8A15D] text-xs font-semibold mb-5">
              GLOBAL MARKETS
            </p>

            <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-900">

              Global Reach.
              <br />
              Local Understanding.

            </h2>

            <p className="mt-5 text-lg leading-9 text-slate-600 max-w-xl">

              We connect trusted suppliers and buyers across
              Asia, the Middle East, Africa, Europe and South
              America through dependable sourcing, transparent
              trade execution and efficient global logistics.

            </p>

            <button className="mt-5 inline-flex items-center gap-3 rounded-xl bg-[#111827] hover:bg-black transition-all duration-300 text-white font-semibold px-8 py-4">

              Explore Markets

              <ArrowRight size={18} />

            </button>

          </div>

          {/* MAP */}

          <div className="relative">

            <Image
              src="/images/world-map.svg"
              alt="Global Markets"
              width={700}
              height={420}
              className="w-full opacity-100"
            />

            {/* Europe */}

            <div className="absolute left-[48%] top-[22%]">

              <div className="w-3 h-3 rounded-full bg-[#D8A15D]" />

              <span className="absolute mt-2 -left-4 whitespace-nowrap rounded-full bg-[#111827] px-4 py-2 text-xs text-white">

                Europe

              </span>

            </div>

            {/* Middle East */}

            <div className="absolute left-[58%] top-[42%]">

              <div className="w-3 h-3 rounded-full bg-[#D8A15D]" />

              <span className="absolute mt-2 -left-8 whitespace-nowrap rounded-full bg-[#111827] px-4 py-2 text-xs text-white">

                Middle East

              </span>

            </div>

            {/* Africa */}

            <div className="absolute left-[49%] top-[58%]">

              <div className="w-3 h-3 rounded-full bg-[#D8A15D]" />

              <span className="absolute mt-2 -left-4 whitespace-nowrap rounded-full bg-[#111827] px-4 py-2 text-xs text-white">

                Africa

              </span>

            </div>

            {/* Asia */}

            <div className="absolute left-[74%] top-[38%]">

              <div className="w-3 h-3 rounded-full bg-[#D8A15D]" />

              <span className="absolute mt-2 -left-2 whitespace-nowrap rounded-full bg-[#111827] px-4 py-2 text-xs text-white">

                Asia

              </span>

            </div>

            {/* South America */}

            <div className="absolute left-[28%] top-[63%]">

              <div className="w-3 h-3 rounded-full bg-[#D8A15D]" />

              <span className="absolute mt-2 -left-10 whitespace-nowrap rounded-full bg-[#111827] px-4 py-2 text-xs text-white">

                South America

              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}