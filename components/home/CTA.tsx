"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/cta-port.jpg"
        alt="Port Container Terminal"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/60" />

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-10">

        <div className="max-w-2xl">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-[#c89b57]">
            Ready To Partner?
          </p>

          <h2 className="mb-8 text-5xl font-bold leading-tight text-white">
            Let's Build Strong
            <br />
            Partnerships Together.
          </h2>

          <p className="mb-10 text-lg leading-9 text-slate-200">
            Whether you're sourcing agricultural products, industrial
            commodities or building long-term supply partnerships,
            Agrosyne Global Commodity Pvt. Ltd. is ready to support
            your business with reliable sourcing, transparent
            processes and efficient global logistics.
          </p>
              <div className="flex flex-wrap gap-5">

            {/* Primary Button */}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-xl bg-[#c89b57] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#b58545]"
            >
              Get In Touch

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Secondary Button */}
            <Link
              href="/sectors"
              className="group inline-flex items-center gap-3 rounded-xl border border-white/40 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-slate-900"
            >
              Explore Sectors

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}