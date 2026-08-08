"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/commodity-hero.jpg"
          alt="Agrosyne Global Commodity"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/70" />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-750 via-slate-750/75 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center px-6 py-10 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            ----- About Agrosyne
          </p>

          <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Connecting Global
            <br />
            Trade With Trust.
          </h1>

          <p className="mt-3 max-w-2xl text-lg leading-9 text-slate-300">
            Agrosyne Global Commodity Pvt. Ltd. connects trusted
            manufacturers, processors and international buyers through
            transparent sourcing, dependable supply chains and efficient
            global trade execution across agriculture, industrial commodities
            and energy markets.
          </p>

          <div className="mt-6 flex flex-wrap gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-[#c89b57] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#b88a45]"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/sectors"
              className="inline-flex items-center rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Explore Sectors
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}