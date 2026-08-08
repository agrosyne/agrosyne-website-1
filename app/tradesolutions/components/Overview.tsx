import {
  Globe,
  Users,
  FileText,
  Ship,
  Handshake,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Supplier Sourcing",
    description:
      "Vrifies global suppliers for consistent quality and pricing.",
  },
  {
    icon: Users,
    title: "Buyer Development",
    description:
      "Connect with qualified international buyers across key glboal markets..",
  },
  {
    icon: FileText,
    title: "Trade Documentation",
    description:
      "Complete export documentation prepared accurately and on time.",
  },
  {
    icon: Ship,
    title: "Logistics Coordination",
    description:
      "Freight planning and shipment coordination from origin to destination.",
  },
  {
    icon: Handshake,
    title: "Commercial Negotiation",
    description:
      "Support in pricing, contract discussions and commercial terms.",
  },
  {
    icon: CheckCircle,
    title: "End-to-End Execution",
    description:
      "Managing transaction from inquiry to successful delivery.",
  },
];

export default function Overview() {
  return (
    <section className="py-10 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-amber-600 mb-5">
              ----- GLOBAL TRADE SOLUTIONS -----
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
              End-to-End Trade Sol.
              <br />
              For Global Commodity
              <br />
              Businesses
            </h2>

            <p className="text-lg text-slate-600 leading-8 mb-6">
              International commodity trading involves much more than buying and
              selling products. Successful transactions require reliable
              suppliers, qualified buyers, accurate documentation, efficient
              logistics and seamless coordination throughout the entire trade
              cycle.
            </p>

            <p className="text-lg text-slate-600 leading-8">
              Agrosyne Global Commodity provides comprehensive trade solutions
              that simplify cross-border commerce for importers, exporters,
              distributors and industrial buyers. From supplier sourcing and
              buyer connections to documentation, shipment coordination and
              trade execution, we help businesses conduct international trade
              with confidence, transparency and efficiency.
            </p>
          </div>

          {/* Right Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="group bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center mb-2 group-hover:bg-amber-500 transition-colors">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 leading-7">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}