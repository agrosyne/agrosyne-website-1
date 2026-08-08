import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  BadgeCheck,
  FileText,
  Truck,
  MessageSquare,
  Headphones,
  ArrowRight,
} from "lucide-react";

export default function SupplyOrigins() {
  return (
    <section className="bg-white py-10">

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-8">

        {/* LEFT */}

        <div className="relative">

          <div className="relative h-[900px] overflow-hidden rounded-[32px]">

            <Image
              src="/images/agriculture/supplyorigins.jpg"
              alt="Global sourcing"
              fill
              className="object-cover"
            />

          </div>

          {/* Floating Card */}

          <div className="absolute -bottom-8 left-10 rounded-3xl bg-[#17386f] px-10 py-8 text-white shadow-2xl">

            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
              GLOBAL NETWORK
            </p>

            <h3 className="mt-3 text-4xl font-bold leading-tight">
              Verified
              <br />
              Supplier Partners
            </h3>

            <p className="mt-3 text-slate-300">
              Quality • Reliability • Transparency
            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            ----- OUR GLOBAL SOURCING -----
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
            Building Reliable
            <br />
            Supply Networks
            <br />
            Worldwide
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            We collaborate with carefully selected manufacturers,
            mills and export partners to ensure dependable quality,
            transparent execution and consistent international
            supply for every shipment.
          </p>

          {/* Feature Grid */}

          <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            <div className="flex items-start gap-4">
            <ShieldCheck className="mt-1 h-8 w-8 flex-shrink-0 text-[#c89b57]" />

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Verified Supplier Network
              </h3>

              <p className="mt-2 text-slate-600 leading-7">
                Carefully evaluated manufacturers, mills and export partners.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <ShieldCheck className="mt-1 h-8 w-8 flex-shrink-0 text-[#c89b57]" />

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Quality Assurance
              </h3>

              <p className="mt-2 text-slate-600 leading-7">
                Every shipment follows strict quality inspection standards.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <ShieldCheck className="mt-1 h-8 w-8 flex-shrink-0 text-[#c89b57]" />

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Export Documentation
              </h3>

              <p className="mt-2 text-slate-600 leading-7">
                Complete commercial and compliance documentation support.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <ShieldCheck className="mt-1 h-8 w-8 flex-shrink-0 text-[#c89b57]" />

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Logistics Coordination
              </h3>

              <p className="mt-2 text-slate-600 leading-7">
                Reliable freight coordination with trusted logistics partners.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <ShieldCheck className="mt-1 h-8 w-8 flex-shrink-0 text-[#c89b57]" />

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Transparent Communication
              </h3>

              <p className="mt-2 text-slate-600 leading-7">
                Regular updates from inquiry through successful delivery.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <ShieldCheck className="mt-1 h-8 w-8 flex-shrink-0 text-[#c89b57]" />

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Dedicated Buyer Support
              </h3>

              <p className="mt-2 text-slate-600 leading-7">
                A single point of contact throughout your sourcing journey.
              </p>
            </div>
          </div>

        </div>

        <Link
          href="/contact"
          className="mt-5 inline-flex items-center rounded-xl bg-[#c89b57] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#b78946]"
        >
          Request a Quote

          <ArrowRight className="ml-3 h-5 w-5" />
        </Link>

      </div>

    </div>

  </section>
);
}