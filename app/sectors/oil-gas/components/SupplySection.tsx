import Image from "next/image";
import {
  Wheat,
  Package,
  FileCheck,
  Ship,
 BadgeCheck,
  Store,
} from "lucide-react";

export default function SupplySection() {
  return (
    <section className="bg-white py-10">

      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2 lg:px-8">

        {/* LEFT IMAGE */}

        <div className="relative">

          <div className="relative h-[550px] overflow-hidden rounded-3xl">

            <Image
              src="/images/oilgas/rig.jpg"
              alt="Oil Gas"
              fill
              className="object-cover"
            />

          </div>

          {/* Floating Card */}

          <div className="absolute -bottom-8 left-10 rounded-3xl bg-[#183766] px-8 py-8 text-white shadow-2xl">

            <p className="text-xs uppercase tracking-[0.35em] text-[#c89b57]">
              GLOBAL ENERGY TRADE
            </p>

            <h3 className="mt-3 text-4xl font-bold">
              Energy
              <br />
              Commodity Supply
            </h3>

            <p className="mt-3 text-slate-200">
              Quality • Reliability • Global Reach
            </p>
          </div>

        </div>

        {/* RIGHT CONTENT */}

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            GLOBAL ENERGY SUPPLY
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
            Trusted Energy
            <br />
            Commodity Supply
            <br />
            For Global Markets
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
  Global energy commodities play a vital role in powering industries, transportation and infrastructure worldwide. Reliable sourcing, dependable supply chains and efficient international logistics are essential to meeting the growing demand of global markets.
</p>

<p className="mt-6 text-lg leading-9 text-slate-600">
  Agrosyne Global Commodity connects qualified buyers with trusted international supplier networks, delivering EN590 Diesel, Jet Fuel A1, Bitumen and Coal through transparent commercial execution, reliable sourcing and efficient global trade solutions.
</p>

          {/* Feature Grid goes here */}

        </div>

      </div>

    </section>
  );
}