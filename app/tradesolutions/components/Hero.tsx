import Link from "next/link";
import { ArrowRight, ShieldCheck, Ship, Globe, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[720px] overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

        <img
          src="/images/tradesolution/hero.jpg"
          alt="Global Trade Solutions"
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-slate-950/70" />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-750 via-slate-750/70 to-transparent" />

      </div>

      {/* Content */}

      <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-6 pt-5 pb-10 lg:px-8">

        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            GLOBAL TRADE SOLUTIONS
          </p>

          <h1 className="mt-3 text-5xl font-bold leading-[1.15] tracking-tight text-white lg:text-7xl">
            Simplifying
            <br />
            Global Commodity
            <br />
            Trade
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-9 text-slate-200">
            Agrosyne Global Commodity helps businesses navigate international
            commodity trade through dependable sourcing, supplier coordination,
            export documentation and logistics support, ensuring every
            transaction is managed with transparency and confidence.
          </p>

          {/* CTA Buttons */}

          <div className="mt-5 flex flex-col gap-4 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#c89b57] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#b78946]"
            >
              Request Quote

              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="#solutions"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-slate-900"
            >
              Explore Solutions
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