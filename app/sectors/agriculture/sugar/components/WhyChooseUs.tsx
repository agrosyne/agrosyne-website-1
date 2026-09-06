import Link from "next/link";
import {
  BadgeCheck,
  Package,
  FileCheck,
  MessagesSquare,
  Ship,
  Factory,
  ArrowRight,
} from "lucide-react";

const advantages = [
  {
    title: "Verified Supplier Network",
    description:
      "Working with carefully selected Brazilian suppliers to ensure dependable supply and consistent commercial execution.",
    icon: Factory,
  },
  {
    title: "Reliable Product Quality",
    description:
      "Every shipment is managed according to agreed product specifications before export.",
    icon: BadgeCheck,
  },
  {
    title: "Spot & Contract Supply",
    description:
      "Supporting both spot purchases and long-term contract supply agreements tailored to your commercial requirements.",
    icon: Package,
  },
  {
    title: "Export Documentation",
    description:
      "Complete commercial, shipping and trade documentation prepared accurately for every shipment.",
    icon: FileCheck,
  },
  {
    title: "Transparent Communication",
    description:
      "Clear updates and responsive coordination throughout every stage of the transaction.",
    icon: MessagesSquare,
  },
  {
    title: "Global Logistics Support",
    description:
      "Reliable shipment planning, freight coordination and post-shipment assistance until delivery.",
    icon: Ship,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-10">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            WHY AGROSYNE
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
            Your Trusted Trading Partner
            <br />
            For Brazilian Sugar
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Agrosyne Global Commodity supports importers, wholesalers, industrial buyers and international trading companies with premium Brazilian sugar sourced through trusted supplier networks, transparent communication and dependable export execution.
          </p>

        </div>

        {/* Grid */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {advantages.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#c89b57]/40 hover:shadow-xl"
            >
              {/* Icon */}

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#c89b57]/10 transition-all duration-300 group-hover:bg-[#c89b57]">

                <Icon className="h-8 w-8 text-[#c89b57] transition-colors duration-300 group-hover:text-white" />

              </div>

              {/* Title */}

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              {/* Description */}

              <p className="mt-5 leading-8 text-slate-600">
                {item.description}
              </p>

            </div>
          );
        })}

        </div>

        {/* CTA */}

        <div className="mt-16 text-center">

          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-[#c89b57] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#b78946]"
          >
            Request a Quote

            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>

        </div>

      </div>

    </section>
  );
}