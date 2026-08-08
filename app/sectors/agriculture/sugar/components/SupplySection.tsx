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

          <div className="relative h-[650px] overflow-hidden rounded-3xl">

            <Image
              src="/images/sugar/supply.jpg"
              alt="Brazilian Sugar Supply"
              fill
              className="object-cover"
            />

          </div>

          {/* Floating Card */}

          <div className="absolute -bottom-8 left-10 rounded-3xl bg-[#183766] px-8 py-8 text-white shadow-2xl">

            <p className="text-xs uppercase tracking-[0.35em] text-[#c89b57]">
              GLOBAL SUGAR SUPPLY
            </p>

            <h3 className="mt-3 text-4xl font-bold">
              Brazilian
              <br />
              Sugar Supply
            </h3>

            <p className="mt-3 text-slate-200">
              Quality • Consistency • Reliability
            </p>

          </div>

        </div>

        {/* RIGHT CONTENT */}

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            ----- BRAZILIAN SUGAR SUPPLY -----
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
            Brazil's Trusted Sugar
            <br />
            Supply For Global
            <br />
            Markets
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
  Brazil is the world's largest producer and exporter of sugar, supplying premium refined and raw sugar to international markets. Brazilian sugar is recognized worldwide for its consistent quality, large-scale production capacity and reliable export infrastructure.
</p>

<p className="mt-6 text-lg leading-9 text-slate-600">
  Agrosyne Global Commodity partners with carefully selected Brazilian supplier networks to deliver premium ICUMSA 45 refined sugar and VHP (Very High Polarization) sugar for wholesalers, distributors, food manufacturers and industrial buyers. Every shipment is managed with transparent communication, dependable sourcing and efficient export execution.
</p>

          {/* Feature Grid goes here */}

        </div>

      </div>

    </section>
  );
}