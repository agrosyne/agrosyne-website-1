"use client";

import {
  Globe,
  Package,
  Users,
  Ship,
  CalendarDays,
} from "lucide-react";

const stats = [
  {
    icon: Globe,
    value: "20+",
    label: "Countries Served",
  },
  {
    icon: Package,
    value: "100+",
    label: "Global Buyers",
  },
  {
    icon: Users,
    value: "150+",
    label: "Verified Suppliers",
  },
  {
    icon: Ship,
    value: "600+",
    label: "Shipments Coordinated",
  },
  {
    icon: CalendarDays,
    value: "5+",
    label: "Years Combined Experience",
  },
];

export default function Markets() {
  return (
    <section className="bg-white">

      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 py-10">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.label}
                className="text-center"
              >

                <Icon
                  size={34}
                  className="mx-auto text-[#D8A15D]"
                />

                <h3 className="mt-6 text-6xl font-bold text-slate-900">

                  {item.value}

                </h3>

                <div className="w-12 h-[3px] bg-[#D8A15D] rounded-full mx-auto mt-5 mb-5"></div>

                <p className="text-slate-500 text-[15px] leading-7">

                  {item.label}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );
}