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
              src="/images/rice/supply.jpg"
              alt="Indian Rice Supply"
              fill
              className="object-cover"
            />

          </div>

          {/* Floating Card */}

          <div className="absolute -bottom-8 left-10 rounded-3xl bg-[#183766] px-8 py-8 text-white shadow-2xl">

            <p className="text-xs uppercase tracking-[0.35em] text-[#c89b57]">
              GLOBAL RICE EXPORT
            </p>

            <h3 className="mt-3 text-4xl font-bold">
              Premium
              <br />
              Rice Supply
            </h3>

            <p className="mt-3 text-slate-200">
              Quality • Consistency • Reliability
            </p>

          </div>

        </div>

        {/* RIGHT CONTENT */}

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            ----- RICE SUPPLY -----
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
            India's Trusted Rice
            <br />
            Supply For Global
            <br />
            Markets
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
  India is one of the world's leading producers and exporters of rice,
  supplying premium Basmati and Non-Basmati varieties to buyers across
  international markets. Indian rice is recognized worldwide for its
  exceptional quality, consistent grain characteristics and competitive
  value.
</p>

<p className="mt-6 text-lg leading-9 text-slate-600">
  Agrosyne Global Commodity partners with carefully selected mills and
  trusted export suppliers across India to deliver reliable rice
  solutions for wholesalers, distributors, retailers and food
  manufacturers. Every shipment is managed with strict quality control,
  transparent communication and dependable export execution.
</p>

          {/* Feature Grid goes here */}

        </div>

      </div>

    </section>
  );
}