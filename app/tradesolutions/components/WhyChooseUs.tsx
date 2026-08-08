export default function HowWeWork() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            ----- HOW WE WORK -----
          </p>

          <h2 className="mt-5 text-5xl font-bold tracking-tight text-slate-900">
            Supporting Every Stage
            <br />
            Of Global Trade
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            Every commodity transaction is different. We simplify sourcing,
            negotiations and execution while adapting every transaction to your
            commercial objectives.
          </p>

        </div>

        {/* Image */}

        <div className="mt-15 overflow-hidden rounded-3xl aspect-[16/7]">
             <img
             src="/images/tradesolution/work.jpg"
             alt="Global Commodity Trade"
             className="h-full w-full object-cover"
             />
          </div>

        {/* Steps */}

        <div className="mt-20 grid gap-16 md:grid-cols-3">

          {/* Step 1 */}

          <div className="text-center">

            <span className="text-5xl font-bold text-[#c89b57]">
              01
            </span>

            <h3 className="mt-6 text-2xl font-semibold text-slate-900">
              Understand Your Requirement
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Every transaction begins with understanding your product,
              specifications, destination and commercial objectives.
            </p>

          </div>

          {/* Step 2 */}

          <div className="text-center">

            <span className="text-5xl font-bold text-[#c89b57]">
              02
            </span>

            <h3 className="mt-6 text-2xl font-semibold text-slate-900">
              Connect The Right Partners
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We identify suitable suppliers or buyers through our network and
              align both parties on practical commercial terms.
            </p>

          </div>

          {/* Step 3 */}

          <div className="text-center">

            <span className="text-5xl font-bold text-[#c89b57]">
              03
            </span>

            <h3 className="mt-6 text-2xl font-semibold text-slate-900">
              Execute With Confidence
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Documentation, logistics and coordination are managed until the
              transaction is successfully completed.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}