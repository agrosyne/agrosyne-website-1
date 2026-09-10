"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface InsightPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  status?: string;
  publishedAt?: string;
}

export default function Insights() {
  const [latestPosts, setLatestPosts] = useState<InsightPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const loadInsights = async () => {
      try {
        const response = await fetch(
          "/api/insights?public=true",
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error(
            "Unable to load insights."
          );
        }

        const data = await response.json();

        const apiPosts: InsightPost[] = Array.isArray(data)
          ? data
          : Array.isArray(data.posts)
            ? data.posts
            : [];

        if (cancelled) {
          return;
        }

        /*
         * The API already returns only published
         * articles when public=true is used.
         *
         * We still filter here as an additional
         * safety check.
         */

        const publishedPosts = apiPosts
          .filter(
            (post) =>
              post.status === "published"
          )
          .sort((a, b) => {
            const dateA = new Date(
              a.publishedAt || 0
            ).getTime();

            const dateB = new Date(
              b.publishedAt || 0
            ).getTime();

            return dateB - dateA;
          })
          .slice(0, 3);

        setLatestPosts(publishedPosts);
      } catch (error) {
        console.error(
          "Unable to load insights:",
          error
        );

        if (!cancelled) {
          setLatestPosts([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadInsights();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}

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

          {/* Desktop View All */}

          <Link
            href="/insights"
            className="hidden items-center gap-2 rounded-xl border border-slate-300 px-7 py-3 text-sm font-semibold transition hover:border-[#b88a44] hover:text-[#b88a44] md:flex"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>

        {/* Loading */}

        {loading ? (

          <div className="grid gap-8 lg:grid-cols-3">

            {Array.from(
              { length: 3 },
              (_, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >

                  <div className="h-64 animate-pulse bg-slate-100" />

                  <div className="space-y-5 p-8">

                    <div className="h-4 w-40 animate-pulse rounded bg-slate-100" />

                    <div className="h-10 w-full animate-pulse rounded bg-slate-100" />

                    <div className="h-20 w-full animate-pulse rounded bg-slate-100" />

                  </div>

                </div>
              )
            )}

          </div>

        ) : latestPosts.length > 0 ? (

          /* Latest Insights */

          <div className="grid gap-8 lg:grid-cols-3">

            {latestPosts.map((post) => (

              <article
                key={post.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* Image */}

                <Link
                  href={`/insights/${post.slug}`}
                >

                  <div className="relative h-64 overflow-hidden">

                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-slate-100">
                        <span className="text-sm font-medium text-slate-400">
                          Agrosyne Insights
                        </span>
                      </div>
                    )}

                  </div>

                </Link>

                {/* Content */}

                <div className="flex h-[430px] flex-col p-8">

                  {/* Category */}

                  <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#b88a44]">
                    {post.category}
                  </p>

                  {/* Title */}

                  <Link
                    href={`/insights/${post.slug}`}
                  >

                    <h3 className="mb-5 text-3xl font-bold leading-tight text-[#0f172a] transition group-hover:text-[#b88a44]">
                      {post.title}
                    </h3>

                  </Link>

                  {/* Excerpt */}

                  <p className="mb-10 text-base leading-8 text-slate-600">
                    {post.excerpt}
                  </p>

                  {/* Bottom */}

                  <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-6">

                    <span className="text-sm text-slate-500">
                      {post.readTime}
                    </span>

                    <Link
                      href={`/insights/${post.slug}`}
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

        ) : (

          /* Empty State */

          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-16 text-center">

            <h3 className="text-xl font-bold text-slate-900">
              Insights Coming Soon
            </h3>

            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-500">
              We are preparing market intelligence,
              trade analysis and global commodity
              insights for our readers.
            </p>

          </div>

        )}

        {/* Mobile View All */}

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