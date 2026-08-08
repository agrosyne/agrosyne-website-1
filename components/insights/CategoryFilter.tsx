"use client";

import { useState } from "react";

const categories = [
  "All",
  "Market Analysis",
  "Trade Guides",
  "Industry Insights",
  "Company News",
];

export default function CategoryFilter() {
  const [active, setActive] = useState("All");

  return (
    <section className="bg-white pb-16">

      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-6 lg:px-8">

        {categories.map((category) => (

          <button
            key={category}
            onClick={() => setActive(category)}
            className={`rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 ${
              active === category
                ? "border-[#c89b57] bg-[#c89b57] text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-[#c89b57] hover:text-[#c89b57]"
            }`}
          >
            {category}
          </button>

        ))}

      </div>

    </section>
  );
}