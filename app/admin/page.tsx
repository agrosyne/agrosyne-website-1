"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  FileText,
  Eye,
  Users,
  TrendingUp,
  ExternalLink,
} from "lucide-react";

import type { Insight } from "@/lib/insights";

export default function AdminDashboard() {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /*
   * Load all insights
   */

  useEffect(() => {
    async function loadInsights() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/api/insights", {
          cache: "no-store",
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error || "Unable to load insights."
          );
        }

        setInsights(data);
      } catch (error) {
        console.error(
          "Failed to load dashboard insights:",
          error
        );

        setError("Unable to load insight data.");
      } finally {
        setLoading(false);
      }
    }

    loadInsights();
  }, []);

  /*
   * Dashboard statistics
   */

  const totalInsights = insights.length;

  const publishedInsights = insights.filter(
    (insight) => insight.status === "published"
  ).length;

  /*
   * Recent published insights
   *
   * Admin-created articles use ISO timestamps,
   * while original articles may use human-readable
   * dates. We sort safely using Date parsing and
   * fall back to the existing array order.
   */

  const recentInsights = useMemo(() => {
    return insights
      .filter(
        (insight) => insight.status === "published"
      )
      .sort((a, b) => {
        const dateA = new Date(
          a.publishedAt
        ).getTime();

        const dateB = new Date(
          b.publishedAt
        ).getTime();

        if (
          Number.isNaN(dateA) ||
          Number.isNaN(dateB)
        ) {
          return 0;
        }

        return dateB - dateA;
      })
      .slice(0, 5);
  }, [insights]);

  /*
   * Dashboard statistics cards
   */

  const stats = [
    {
      label: "Total Insights",
      value: loading ? "—" : String(totalInsights),
      icon: FileText,
    },
    {
      label: "Published",
      value: loading
        ? "—"
        : String(publishedInsights),
      icon: TrendingUp,
    },
    {
      label: "Total Views",
      value: "—",
      icon: Eye,
    },
    {
      label: "Subscribers",
      value: "—",
      icon: Users,
    },
  ];

  return (
    <div className="min-w-0 space-y-8">

      {/* Page Heading */}

      <div className="min-w-0">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c89b57]">
          Dashboard
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          Welcome to Agrosyne Admin
        </h2>

        <p className="mt-3 max-w-3xl text-slate-600">
          Manage your website content, insights and business information
          from one place.
        </p>

      </div>

      {/* Error */}

      {error && (
        <div className="min-w-0 overflow-hidden rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-600">
          {error}
        </div>
      )}

      {/* Stats */}

      <div className="grid min-w-0 gap-5 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat) => {

          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6"
            >

              <div className="flex min-w-0 items-start justify-between gap-4">

                <div className="min-w-0">

                  <p className="truncate text-sm font-medium text-slate-500">
                    {stat.label}
                  </p>

                  <p className="mt-3 text-3xl font-bold text-slate-900">
                    {stat.value}
                  </p>

                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c89b57]/10">
                  <Icon className="h-5 w-5 text-[#c89b57]" />
                </div>

              </div>

            </div>
          );

        })}

      </div>

      {/* Recent Activity */}

      <div className="grid min-w-0 gap-6 lg:grid-cols-[1.4fr_0.6fr]">

        {/* Recent Insights */}

        <div className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">

          <div className="flex min-w-0 flex-col gap-4 border-b border-slate-200 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">

            <div className="min-w-0">

              <h3 className="font-bold text-slate-900">
                Recent Insights
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Your latest published content.
              </p>

            </div>

            <Link
              href="/admin/insights"
              className="w-fit shrink-0 text-sm font-semibold text-[#c89b57] transition hover:text-[#a87d3c]"
            >
              View All
            </Link>

          </div>

          <div className="min-w-0 p-5 sm:p-6">

            {loading ? (

              <div className="flex items-center justify-center py-10">

                <div className="h-7 w-7 animate-spin rounded-full border-2 border-slate-200 border-t-[#c89b57]" />

              </div>

            ) : recentInsights.length === 0 ? (

              <div className="py-10 text-center">

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">

                  <FileText className="h-5 w-5 text-slate-400" />

                </div>

                <h4 className="mt-4 font-semibold text-slate-900">
                  No published insights
                </h4>

                <p className="mt-2 text-sm text-slate-500">
                  Published articles will appear here.
                </p>

              </div>

            ) : (

              <div className="min-w-0 divide-y divide-slate-100">

                {recentInsights.map(
                  (insight) => (

                    <div
                      key={insight.id}
                      className="flex min-w-0 flex-col gap-3 py-4 first:pt-0 sm:flex-row sm:items-center sm:justify-between"
                    >

                      <div className="min-w-0">

                        <Link
                          href={`/insights/${insight.slug}`}
                          target="_blank"
                          className="group flex min-w-0 items-start gap-2"
                        >

                          <p className="min-w-0 break-words font-semibold text-slate-900 transition group-hover:text-[#c89b57]">
                            {insight.title}
                          </p>

                          <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0 text-slate-400 opacity-0 transition group-hover:opacity-100" />

                        </Link>

                        <p className="mt-1 text-sm text-slate-500">
                          {insight.category}
                        </p>

                      </div>

                      <span className="w-fit shrink-0 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                        Published
                      </span>

                    </div>

                  )
                )}

              </div>

            )}

          </div>

        </div>

        {/* Quick Actions */}

        <div className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">

          <h3 className="font-bold text-slate-900">
            Quick Actions
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Common admin tasks.
          </p>

          <div className="mt-6 space-y-3">

            <Link
              href="/admin/insights/new"
              className="block w-full rounded-xl bg-[#0B1F3A] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#162F55]"
            >
              Create New Insight
            </Link>

            <Link
              href="/admin/insights"
              className="block w-full rounded-xl border border-slate-200 px-5 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-[#c89b57] hover:text-[#c89b57]"
            >
              Manage Insights
            </Link>

            <Link
              href="/"
              target="_blank"
              className="block w-full rounded-xl border border-slate-200 px-5 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-[#c89b57] hover:text-[#c89b57]"
            >
              View Website
            </Link>

          </div>

        </div>

      </div>

      {/* Dashboard Footer Information */}

      <div className="flex min-w-0 flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

        <span className="break-words">
          {loading
            ? "Loading insight data..."
            : `${totalInsights} total insights · ${publishedInsights} published`}
        </span>

        <span>
          Content is currently managed locally.
        </span>

      </div>

    </div>
  );
}