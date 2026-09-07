"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#0B1220]">
      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/commodity-hero.jpg')",
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-3xl">

          <p className="mb-1 text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
            Global Commodity Trading
          </p>

          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Connecting Global Markets Through Reliable Commodity Supply
          </h1>

          <p className="mt-4 max-w-2xl text-xl leading-8 text-gray-300">
            Agrosyne delivers agricultural commodities, energy products,
            metals, and industrial raw materials with dependable sourcing,
            transparent trade execution, and worldwide logistics support.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">

            <Link
              href="/sectors"
              className="rounded-md bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-600"
            >
              Explore Sectors
            </Link>

            <Link
              href="/contact"
              className="rounded-md border border-white px-8 py-4 text-white transition hover:bg-white hover:text-black"
            >
              Request a Quote
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}