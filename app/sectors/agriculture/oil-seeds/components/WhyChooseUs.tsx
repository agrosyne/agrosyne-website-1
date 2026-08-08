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
      "Working with carefully selected suppliers to ensure dependable sourcing, consistent quality and reliable supply.",
    icon: Factory,
  },
  {
    title: "Consistent Product Quality",
    description:
      "Every shipment is supplied according to agreed specifications, ensuring consistency, reliability and buyer confidence.",
    icon: BadgeCheck,
  },
  {
    title: "Flexible Packaging",
    description:
      "Bulk, retail and private label packaging solutions designed to meet your market requirements.",
    icon: Package,
  },
  {
    title: "Export Documentation",
    description:
      "Complete commercial, shipping and export documentation prepared accurately for every shipment.",
    icon: FileCheck,
  },
  {
    title: "Responsive Communication",
    description:
      "Clear updates and transparent coordination throughout every stage of the export process.",
    icon: MessagesSquare,
  },
  {
    title: "Global Logistics Support",
    description:
      "Reliable shipment planning, container coordination and international delivery support.",
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
            ----- WHY AGROSYNE -----
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
            Your Trusted Export Partner
            <br />
            For Premium
            <br />
            Edible Oils
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Agrosyne Global Commodity supports importers, wholesalers, food manufacturers and private label brands with premium edible oils sourced through trusted supplier networks, transparent communication and dependable export execution tailored to international markets.
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