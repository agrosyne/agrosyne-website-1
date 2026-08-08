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

          <div className="relative h-[580px] overflow-hidden rounded-3xl">

            <Image
              src="/images/oil/supply.jpg"
              alt="Oil Supply"
              fill
              className="object-cover"
            />

          </div>

          {/* Floating Card */}

          <div className="absolute -bottom-8 left-10 rounded-3xl bg-[#183766] px-8 py-8 text-white shadow-2xl">

            <p className="text-xs uppercase tracking-[0.35em] text-[#c89b57]">
              GLOBAL OIL EXPORT
            </p>

            <h3 className="mt-3 text-4xl font-bold">
              Premium
              <br />
              OIL SEED Supply
            </h3>

            <p className="mt-3 text-slate-200">
              Quality • Consistency • Reliability
            </p>

          </div>

        </div>

        {/* RIGHT CONTENT */}

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            ----- OIL SUPPLY -----
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
            Trusted Oil SEED
            <br />
            Supply For Global
            <br />
            Markets
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
  India is one of the world's leading producers of oil seeds, supplying premium agricultural commodities to processors, wholesalers and food manufacturers across global markets. Indian oil seeds are recognized for their quality, diverse varieties and dependable export availability.
</p>

<p className="mt-6 text-lg leading-9 text-slate-600">
  Agrosyne Global Commodity partners with carefully selected supplier networks across India to deliver premium soybean and sunflower seeds for international buyers. Every shipment is supported by transparent communication, reliable sourcing and efficient export execution tailored to global trade requirements.
</p>

          {/* Feature Grid goes here */}

        </div>

      </div>

    </section>
  );
}