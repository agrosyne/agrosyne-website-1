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
              src="/images/fertilizer/supply.jpg"
              alt="Oil Gas"
              fill
              className="object-cover"
            />

          </div>

          {/* Floating Card */}

          <div className="absolute -bottom-8 left-10 rounded-3xl bg-[#183766] px-8 py-8 text-white shadow-2xl">

            <p className="text-xs uppercase tracking-[0.35em] text-[#c89b57]">
              GLOBAL FERTILIZER TRADE
            </p>

            <h3 className="mt-3 text-4xl font-bold">
              FERTILIZER 
              <br />
              Commodity Supply
            </h3>

            <p className="mt-3 text-slate-200">
              Reliability • Compliance • Global Reach
            </p>
          </div>

        </div>

        {/* RIGHT CONTENT */}

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            GLOBAL FERTILIZER SUPPLY
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
            Trusted Fertilizer
            <br />
            Supply For
            <br />
            Global Markets
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
  Fertilizers play a critical role in improving agricultural productivity and supporting global food security. Reliable sourcing, consistent product quality and efficient international logistics are essential to meeting the growing demands of modern agriculture.
</p>

<p className="mt-6 text-lg leading-9 text-slate-600">
  Agrosyne Global Commodity connects qualified buyers with trusted international supplier networks, delivering premium fertilizer commodities through transparent commercial execution, dependable sourcing and reliable global trade solutions for agricultural and industrial markets.
</p>

          {/* Feature Grid goes here */}

        </div>

      </div>

    </section>
  );
}