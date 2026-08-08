"use client";

import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="bg-[#0B1324] py-10">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto mb-10 max-w-3xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            ----- Our Purpose -----
          </p>

          <h2 className="text-4xl font-bold text-white lg:text-5xl">
            Driven By Purpose.
            <br />
            Focused On Long-Term Value.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Everything we do is guided by transparency, reliability and the
            commitment to building lasting international business
            relationships.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-2">
            {/* Mission */}

          <div className="group rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c89b57]/30 hover:shadow-xl">

            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#c89b57]/10">

              <Target className="h-auto w-8 text-[#c89b57]" />

            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#c89b57]">
              Our Mission
            </p>

            <h3 className="text-3xl font-bold text-slate-900">
              Simplifying Global Commodity Trade.
            </h3>

            <p className="mt-3 text-lg leading-8 text-slate-600">
              To connect international buyers with trusted manufacturers
              through transparent sourcing, dependable execution and reliable
              global supply chains that create long-term business value.
            </p>

          </div>

          {/* Vision */}

          <div className="group rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c89b57]/30 hover:shadow-xl">

            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#c89b57]/10">

              <Eye className="h-8 w-8 text-[#c89b57]" />

            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#c89b57]">
              Our Vision
            </p>

            <h3 className="text-3xl font-bold text-slate-900">
              Becoming A Trusted Global Trading Partner.
            </h3>

            <p className="mt-3 text-lg leading-8 text-slate-600">
              To build one of the world's most respected commodity sourcing
              companies by fostering transparency, trust and sustainable
              partnerships across international markets.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}