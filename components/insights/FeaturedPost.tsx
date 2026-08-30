"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import type { Insight } from "@/lib/insights";

export default function FeaturedPost() {
  const [featuredPost, setFeaturedPost] =
    useState<Insight | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadFeaturedPost() {
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
              "Unable to load featured insight."
          );
        }

        const featured = data.find(
          (post: Insight) => post.featured
        );

        setFeaturedPost(
          featured || null
        );
      } catch (error) {
        console.error(
          "Failed to load featured insight:",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    loadFeaturedPost();
  }, []);

  if (loading) {
    return (
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-12">
            <div className="h-5 w-40 animate-pulse rounded bg-slate-100" />

            <div className="mt-5 h-12 w-72 animate-pulse rounded bg-slate-100" />
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div className="aspect-[16/10] animate-pulse rounded-3xl bg-slate-100" />

            <div className="space-y-6">

              <div className="h-8 w-32 animate-pulse rounded-full bg-slate-100" />

              <div className="h-20 w-full animate-pulse rounded bg-slate-100" />

              <div className="h-24 w-full animate-pulse rounded bg-slate-100" />

            </div>

          </div>

        </div>
      </section>
    );
  }

  if (!featuredPost) {
    return null;
  }

  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}

        <div className="mb-12">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            FEATURED INSIGHT
          </p>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Editor&apos;s Pick
          </h2>

        </div>

        {/* Featured Article */}

        <div className="group grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Image */}

          <div className="aspect-[16/10] overflow-hidden rounded-3xl">

            {featuredPost.image ? (
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                width={1200}
                height={750}
                priority
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
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

          <div>

            {/* Category */}

            <span className="inline-flex rounded-full bg-[#c89b57]/10 px-4 py-2 text-sm font-semibold text-[#c89b57]">
              {featuredPost.category}
            </span>

            {/* Title */}

            <h3 className="mt-6 text-4xl font-bold leading-tight text-slate-900">
              {featuredPost.title}
            </h3>

            {/* Summary */}

            <p className="mt-6 text-lg leading-9 text-slate-600">
              {featuredPost.excerpt}
            </p>

            {/* Meta */}

            <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">

              <span>
                {featuredPost.publishedAt}
              </span>

              <span>•</span>

              <span>
                {featuredPost.readTime}
              </span>

            </div>

            {/* Button */}

            <Link
              href={`/insights/${featuredPost.slug}`}
              className="mt-10 inline-flex items-center gap-3 text-lg font-semibold text-[#c89b57] transition-all duration-300 hover:gap-5"
            >
              Read Article

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-6-6l6 6-6 6"
                />
              </svg>

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}