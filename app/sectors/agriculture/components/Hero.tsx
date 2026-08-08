import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[640px] max-h-[800px] overflow-hidden">

      {/* Background Image */}

      <div className="absolute inset-0">
        <img
          src="/images/agriculture/hero.jpg"
          alt="Agricultural Commodity Trading"
          className="h-full w-full object-cover object-[90%_10%]"
        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-slate-950/65" />

        {/* Left Gradient */}

        <div className="absolute inset-0 bg-gradient-to-r from-slate-750 via-slate-750/75 to-transparent" />
      </div>

      {/* Hero Content */}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">

        <div className="max-w-3xl">

          {/* Small Heading */}

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            ----- Agricultural Commodities
          </p>

          {/* Main Heading */}

          <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight text-white lg:text-7xl">
            Global Agricultural
            <br />
            Commodities
            <br />
            Delivered With
            <br />
            Confidence
          </h1>

          {/* Description */}

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Agrosyne Global Commodity connects international buyers with
            verified suppliers of premium rice, Brazilian sugar and oil
            seeds through transparent sourcing, dependable logistics and
            reliable export execution.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-[#c89b57] px-8 py-4 text-base font-semibold text-white transition duration-300 hover:bg-[#b78946]"
            >
              Request a Quote

              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>

            <Link
              href="#products"
              className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-slate-900"
            >
              Explore Products
            </Link>

          
          </div>

        </div>

      </div>

    </section>
  );
}