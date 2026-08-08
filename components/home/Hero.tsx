"use client";

export default function Hero() {
  return (
    <section className="relative h-screen bg-[#0B1220] overflow-hidden">
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
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.35em] text-amber-400 text-sm font-semibold mb-1">
            ----- Global Commodity Trading
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Connecting Global Markets Through Reliable Commodity Supply
          </h1>

          <p className="mt-4 text-xl text-gray-300 leading-8 max-w-2xl">
            Agrosyne delivers agricultural commodities, energy products,
            metals, and industrial raw materials with dependable sourcing,
            transparent trade execution, and worldwide logistics support.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">

            <button className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-md transition">
              Explore Products
            </button>

            <button className="px-8 py-4 border border-white text-white hover:bg-white hover:text-black rounded-md transition">
              Request a Quote
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}