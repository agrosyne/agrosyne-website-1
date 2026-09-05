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

      <div className="mx-auto max-w-[1500px] px-6 py-10 lg:px-12">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

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

                <div className="mx-auto mb-5 mt-5 h-[3px] w-12 rounded-full bg-[#D8A15D]" />

                <p className="text-[15px] leading-7 text-slate-500">
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