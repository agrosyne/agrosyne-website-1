import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Ship, Globe, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/oilgas/hero.jpg"
          alt="Oil and Gas"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/65" />
      </div>

      <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-6 pt-20 pb-24 lg:px-8 lg:pt-10 lg:pb-10">

        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            GLOBAL ENERGY TRADER
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-7xl">
            Global Energy
            <br />
            Commodity
            <br />
            Trader
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">
            Agrosyne Global Commodity connects qualified buyers with trusted international suppliers of energy commodities, delivering dependable sourcing, transparent commercial execution and reliable global trade solutions for industrial and wholesale markets.
          </p>

          <div className="mt-8 flex flex-wrap gap-5">

            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-[#c89b57] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#b78946]"
            >
              Contact Us

              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

          </div>

          {/* Trust Indicators */}

          <div className="mt-10 grid grid-cols-3 gap-8">

            <div className="flex items-center gap-3">

              <ShieldCheck className="h-8 w-8 text-[#c89b57]" />

              <div>

                <p className="font-semibold text-white">
                  Verified
                </p>

                <p className="text-sm text-slate-300">
                  Supplier Network
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <Ship className="h-8 w-8 text-[#c89b57]" />

              <div>

                <p className="font-semibold text-white">
                  Global
                </p>

                <p className="text-sm text-slate-300">
                  Trade Execution
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <Globe className="h-8 w-8 text-[#c89b57]" />

              <div>

                <p className="font-semibold text-white">
                  International
                </p>

                <p className="text-sm text-slate-300">
                  Energy Supply
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}