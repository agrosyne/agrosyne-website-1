import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  ClipboardCheck,
  FileCheck,
  Package,
  Ship,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function Quality() {
  return (
    <section className="bg-slate-50 py-10">

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-8">

        {/* LEFT */}

        <div className="relative">

          <div className="relative h-[850px] overflow-hidden rounded-3xl">

            <Image
              src="/images/about-whyagrosyne.jpg"
              alt="Rice Quality Assurance"
              fill
              className="object-cover"
            />

          </div>

          {/* Floating Card */}

          <div className="absolute -bottom-8 left-8 rounded-3xl bg-[#183766] px-8 py-8 text-white shadow-2xl">

            <p className="text-xs uppercase tracking-[0.35em] text-[#c89b57]">
              QUALITY ASSURANCE
            </p>

            <h3 className="mt-3 text-4xl font-bold leading-tight">
              Premium
              <br />
              Edible
              <br />
              Oils
            </h3>

            <p className="mt-3 text-slate-200">
              Consistency • Compliance • Reliability
            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            ----- QUALITY ASSURANCE -----
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
            Export Quality
            <br />
            You Can Trust
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
  Every shipment is sourced through trusted supplier networks, quality verified before export and supported with complete documentation, food-grade packaging and dependable international logistics.
</p>

          {/* Feature Grid starts here */}

          <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#c89b57]/10">
                <BadgeCheck className="h-6 w-6 text-[#c89b57]" />
              </div>

              <div>

                <h3 className="text-lg font-semibold text-slate-900">
                  Verified Supplier Network
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Carefully selected suppliers ensuring consistent quality and reliable supply.
                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#c89b57]/10">
                <ClipboardCheck className="h-6 w-6 text-[#c89b57]" />
              </div>

              <div>

                <h3 className="text-lg font-semibold text-slate-900">
                  Quality Verification
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Every shipment verified to meet agreed product specifications before dispatch.
                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#c89b57]/10">
                <FileCheck className="h-6 w-6 text-[#c89b57]" />
              </div>

              <div>

                <h3 className="text-lg font-semibold text-slate-900">
                  Export Documentation
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Accurate commercial, shipping and export documentation prepared for every order.
                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#c89b57]/10">
                <Package className="h-6 w-6 text-[#c89b57]" />
              </div>

              <div>

                <h3 className="text-lg font-semibold text-slate-900">
                  Flexible Packaging
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Bulk, retail and private label packaging tailored to customer requirements.
                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#c89b57]/10">
                <Ship className="h-6 w-6 text-[#c89b57]" />
              </div>

              <div>

                <h3 className="text-lg font-semibold text-slate-900">
                  Logistics Coordination
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Efficient container loading and international freight coordination.
                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#c89b57]/10">
                <ShieldCheck className="h-6 w-6 text-[#c89b57]" />
              </div>

              <div>

                <h3 className="text-lg font-semibold text-slate-900">
                  Global Trade Support
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Dedicated assistance from inquiry through successful delivery.
                </p>

              </div>

            </div>

          </div>

          {/* CTA */}

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-xl bg-[#c89b57] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#b78946]"
          >
            Request Quote

            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>

        </div>

      </div>

    </section>
  );
}