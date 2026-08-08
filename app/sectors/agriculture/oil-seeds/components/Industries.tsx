import Link from "next/link";
import {
  Factory,
  Package,
  UtensilsCrossed,
  Globe2,
  Landmark,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    title: "Food Manufacturers",
    description:
      "Reliable oil supply for processed food manufacturers, ready-to-cook products and industrial food production.",
    icon: Factory,
  },
  {
    title: "International Traders",
    description:
      "Bulk edible oil supply for international trading companies, commodity traders and regional re-suppliers.",
    icon: Package,
  },
  {
    title: "Hotels & Restaurants",
    description:
      "Consistent oil solutions for hotels, restaurant chains and institutional catering businesses.",
    icon: UtensilsCrossed,
  },
  {
    title: "Wholesale Distributors",
    description:
      "Container-load shipments for importers and distributors serving domestic markets worldwide.",
    icon: Globe2,
  },
  {
    title: "Food Service Distributors",
    description:
      "Reliable edible oil supply for food service distributors supporting restaurants, catering companies and institutional kitchens.",
    icon: Landmark,
  },
  {
    title: "Retail Brands",
    description:
      "Private label packaging and customized oil solutions for supermarkets, retail chains and small brands.",
    icon: ShoppingBag,
  },
];

export default function Industries() {
  return (
    <section className="bg-white py-10">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            ----- INDUSTRIES WE SERVE -----
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
            Supplying Premium
            <br />
            Edible Oils Across
            <br />
            Global Industries
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Our export-ready edible oil solutions support food manufacturers, wholesalers, distributors and private label brands with dependable quality, flexible packaging and reliable international supply.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#c89b57]/40 hover:shadow-2xl"
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

              <p className="mt-5 text-base leading-8 text-slate-600">
                {item.description}
              </p>

              {/* Divider */}

              <div className="my-8 h-px bg-slate-200" />

              {/* Footer */}

              <Link
                href="/contact"
                className="inline-flex items-center text-base font-semibold text-[#c89b57] transition-all duration-300 group-hover:translate-x-1"
              >
                Learn More

                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

            </div>
          );
        })}

      </div>

    </div>

  </section>
);
}