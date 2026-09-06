export default function OurRole() {
  return (
    <section className="bg-white py-10">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            BUILT AROUND YOUR BUSINESS
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
            Built Around.
            <br />
            Your Business.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
            Every business has unique sourcing, procurement and growth objectives.
            Rather than offering a fixed trading model, Agrosyne adapts every
            transaction to align with your commercial requirements, market strategy
            and long-term business goals.
          </p>

        </div>

        {/* Image */}

        <div className="mt-10">

          <div className="overflow-hidden rounded-3xl aspect-[16/7]">
             <img
             src="/images/tradesolution/ship.jpg"
             alt="International commodity trading"
             className="h-full w-full object-cover"
             />
          </div>

        </div>

      </div>

    </section>
  );
}