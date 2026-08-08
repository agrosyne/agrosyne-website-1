export default function Hero() {
  return (
    <section className="bg-white pt-10">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            ----- INSIGHTS -----
          </p>

          <h1 className="mt-5 text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">
            Market Intelligence
            <br />
            For Global Trade
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
            Explore articles, market updates and practical insights covering
            international commodity trade, logistics, procurement and global
            supply chains.
          </p>

        </div>
        {/* Hero Image */}

        <div className="mt-15">

          <div className="overflow-hidden rounded-3xl aspect-[16/7]">

            <img
              src="/images/insights/hero.jpg"
              alt="Global trade market insights"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />

          </div>

        </div>

      </div>

    </section>
  );
}