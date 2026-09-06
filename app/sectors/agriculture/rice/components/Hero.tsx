import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Ship, Globe, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/rice/hero.jpg"
          alt="Premium Indian Rice"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/65" />
      </div>

      <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-6 pt-20 pb-24 lg:px-8 lg:pt-10 lg:pb-10">

        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            PREMIUM INDIAN RICE EXPORTER
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-7xl">
            Premium Indian
            <br />
            Basmati &
            <br />
            Non-Basmati
            <br />
            Rice Exporter
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">
            Agrosyne Global Commodity supplies premium Indian rice to
            importers, distributors, wholesalers and food manufacturers
            worldwide with dependable sourcing, strict quality standards
            and seamless export execution.
          </p>

          <div className="mt-8 flex flex-wrap gap-5">

            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-[#c89b57] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#b78946]"
            >
              Request Quote

              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
  href="/catalogs/Agrosyne-Rice-Catalog.pdf"
  target="_blank"
  className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-slate-900"
>
  <FileText className="mr-3 h-5 w-5" />

  View Catalog
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
                  Suppliers
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
                  Export Logistics
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <Globe className="h-8 w-8 text-[#c89b57]" />

              <div>

                <p className="font-semibold text-white">
                  Worldwide
                </p>

                <p className="text-sm text-slate-300">
                  Buyer Network
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}