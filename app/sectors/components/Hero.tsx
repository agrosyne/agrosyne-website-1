import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/commodity-hero.jpg"
          alt="Global commodity trading"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/70" />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-750 via-slate-750/70 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 py-10 lg:px-8">

        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            INDUSTRIES WE SERVE
          </p>

          <h1 className="mt-3 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Connecting Global
            <br />
            Industries Through
            <span className="text-[#c89b57]"> Reliable Supply</span>
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-9 text-slate-300">
            Agrosyne Global Commodity delivers dependable sourcing solutions
            across agriculture, oil & gas, metals, scrap, and fertilizers,
            supported by a trusted supplier network and efficient international
            trade operations.
          </p>

          <div className="mt-6 flex flex-wrap gap-5">

            <Link
              href="/contact"
              className="rounded-full bg-[#c89b57] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#b88948]"
            >
              Request a Quote
            </Link>

            <Link
              href="#overview"
              className="rounded-full border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:border-[#c89b57] hover:bg-white/10"
            >
              Explore Industries
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}