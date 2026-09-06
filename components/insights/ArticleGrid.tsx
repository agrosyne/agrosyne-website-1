"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import type { Insight } from "@/lib/insights";
import Pagination from "./Pagination";

interface ArticleGridProps {
  category: string;
}

const POSTS_PER_PAGE = 6;

export default function ArticleGrid({
  category,
}: ArticleGridProps) {
  const [posts, setPosts] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  /*
   * Load published insights from API
   */

  useEffect(() => {
    async function loadInsights() {
      try {
        const response = await fetch(
          "/api/insights?public=true",
          {
            cache: "no-store",
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error ||
              "Unable to load insights."
          );
        }

        setPosts(data);
      } catch (error) {
        console.error(
          "Failed to load insights:",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    loadInsights();
  }, []);

  /*
   * Filter by category
   */

  const normalizeCategory = (value: string) =>
  value
    .toLowerCase()
    .replace(/-/g, " ")
    .trim();

const filteredPosts =
  category === "All"
    ? posts
    : posts.filter(
        (post) =>
          normalizeCategory(post.category) ===
          normalizeCategory(category)
      );

  /*
   * Pagination
   */

  const totalPages = Math.ceil(
    filteredPosts.length /
      POSTS_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) *
    POSTS_PER_PAGE;

  const currentPosts =
    filteredPosts.slice(
      startIndex,
      startIndex + POSTS_PER_PAGE
    );

  /*
   * Reset pagination when category changes
   */

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  return (
    <section className="bg-white py-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-12">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            LATEST INSIGHTS
          </p>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            {category === "All"
              ? "Latest Articles"
              : category}
          </h2>

        </div>

        {/* Loading */}

        {loading ? (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {Array.from(
              { length: 6 },
              (_, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white"
                >
                  <div className="aspect-[16/10] animate-pulse bg-slate-100" />

                  <div className="space-y-4 p-8">

                    <div className="h-6 w-24 animate-pulse rounded-full bg-slate-100" />

                    <div className="h-8 w-full animate-pulse rounded-lg bg-slate-100" />

                    <div className="h-20 w-full animate-pulse rounded-lg bg-slate-100" />

                  </div>
                </div>
              )
            )}

          </div>
        ) : currentPosts.length > 0 ? (

          /* Articles */

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {currentPosts.map((post) => (

              <article
                key={post.id}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* Image */}

                <div className="relative aspect-[16/10] overflow-hidden">

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

                {/* Content */}

                <div className="p-8">

                  <span className="inline-flex rounded-full bg-[#c89b57]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#c89b57]">
                    {post.category}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold leading-snug text-slate-900">
                    {post.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 text-sm text-slate-500">
                    {post.publishedAt} ·{" "}
                    {post.readTime}
                  </div>

                  <Link
                    href={`/insights/${post.slug}`}
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-[#c89b57] transition group-hover:gap-4"
                  >
                    Read Article →
                  </Link>

                </div>

              </article>

            ))}

          </div>

        ) : (

          /* Empty State */

          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-16 text-center">

            <h3 className="text-xl font-bold text-slate-900">
              No articles found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              There are currently no published
              articles in this category.
            </p>

          </div>

        )}

        {/* Pagination */}

        {!loading && totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}

      </div>
    </section>
  );
}