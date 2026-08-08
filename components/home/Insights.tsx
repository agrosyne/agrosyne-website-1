"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Why Real Sugar Suppliers Reject Payment at Destination",
    category: "Agriculture",
    excerpt:
      "Understand why international sugar suppliers prefer secure payment structures and how buyers can build trust.",
    image: "/images/agriculture.jpg",
    readTime: "5 min read",
    slug: "/insights/why-real-sugar-suppliers-reject-payment-at-destination",
  },
  {
    title: "The Hidden Challenge in Global Rice Trade",
    category: "Agriculture",
    excerpt:
      "Why consistency, quality stability and supply discipline matter more than one successful shipment.",
    image: "/images/agriculture.jpg",
    readTime: "6 min read",
    slug: "/insights/the-hidden-challenge-in-global-rice-trade",
  },
  {
    title: "Choosing Safe International Payment Terms",
    category: "Trade",
    excerpt:
      "Understanding LC, SBLC, DLC and MT103 payment structures for international commodity trade.",
    image: "/images/agriculture.jpg",
    readTime: "4 min read",
    slug: "/insights/choosing-safe-payment-terms",
  },
];

export default function Insights() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 flex items-end justify-between">

          <div>

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-[#b88a44]">
              Insights & Market Intelligence
            </p>

            <h2 className="max-w-xl text-5xl font-bold leading-tight text-[#0f172a]">
              Stay Informed.
              <br />
              Stay Ahead.
            </h2>

          </div>

          <Link
            href="/insights"
            className="hidden items-center gap-2 rounded-xl border border-slate-300 px-7 py-3 text-sm font-semibold transition hover:border-[#b88a44] hover:text-[#b88a44] md:flex"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <Link href={article.slug}>
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </Link>

              {/* Content */}
              <div className="flex h-[430px] flex-col p-8">

                <p className="mb-5 h-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#b88a44]">
                  {article.category}
                </p>

                <Link href={article.slug}>
                  <h3 className="mb-5 h-auto text-3xl font-bold leading-tight text-[#0f172a] transition group-hover:text-[#b88a44]">
                    {article.title}
                  </h3>
                </Link>

                <p className="mb-10 h-5 text-base leading-8 text-slate-600">
                  {article.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-6">

                  <span className="text-sm text-slate-500">
                    {article.readTime}
                  </span>

                  <Link
                    href={article.slug}
                    className="flex items-center gap-2 text-base font-semibold text-[#0f172a] transition hover:text-[#b88a44]"
                  >
                    Read Article
                    <ArrowRight className="h-5 w-5" />
                  </Link>

                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link
            href="/insights"
            className="flex items-center gap-2 rounded-xl border border-slate-300 px-7 py-3 text-sm font-semibold hover:border-[#b88a44] hover:text-[#b88a44]"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
              </div>
    </section>
  );
}