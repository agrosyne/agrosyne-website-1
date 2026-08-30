"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Plus,
  Search,
  Pencil,
  MoreHorizontal,
  FileText,
  ExternalLink,
  Copy,
  Trash2,
} from "lucide-react";

import type { Insight } from "@/lib/insights";
import Pagination from "@/components/insights/Pagination";

export default function InsightsAdminPage() {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [deleteTarget, setDeleteTarget] = useState<Insight | null>(null);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [status, setStatus] = useState("All Status");
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1); 
  const POSTS_PER_PAGE = 10;

  /*
   * Load insights from the API
   */

  useEffect(() => {
    async function loadInsights() {
      try {
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
   * Filter insights
   */

  const filteredInsights = useMemo(() => {
    const searchTerm = search
      .trim()
      .toLowerCase();

    return insights.filter((insight) => {
      const matchesSearch =
        !searchTerm ||
        insight.title
          .toLowerCase()
          .includes(searchTerm) ||
        insight.excerpt
          .toLowerCase()
          .includes(searchTerm) ||
        insight.category
          .toLowerCase()
          .includes(searchTerm);

      const normalizeCategory = (value: string) =>
  value
    .toLowerCase()
    .replace(/-/g, " ")
    .trim();

const matchesCategory =
  category === "All Categories" ||
  normalizeCategory(insight.category) ===
    normalizeCategory(category);

      const matchesStatus =
        status === "All Status" ||
        insight.status ===
          status.toLowerCase();

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus
      );
    });
  }, [
    insights,
    search,
    category,
    status,
  ]);
  const totalPages = Math.ceil(
  filteredInsights.length / POSTS_PER_PAGE
);

const startIndex =
  (currentPage - 1) * POSTS_PER_PAGE;

const currentInsights = filteredInsights.slice(
  startIndex,
  startIndex + POSTS_PER_PAGE
);
useEffect(() => {
  setCurrentPage(1);
}, [search, category, status]);

const deleteInsight = async (id: string) => {
  try {
    setDeletingId(id);

    const response = await fetch(
      `/api/insights?id=${encodeURIComponent(id)}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(
        data.error ||
          "Unable to delete insight."
      );
      return;
    }

    setInsights((current) =>
      current.filter(
        (insight) => insight.id !== id
      )
    );

    setOpenMenu(null);
    setDeleteTarget(null);

  } catch (error) {
    console.error(
      "Failed to delete insight:",
      error
    );

    alert(
      "Something went wrong while deleting the insight."
    );
  } finally {
    setDeletingId(null);
  }
};

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

        <div>

          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c89b57]">
            CONTENT MANAGEMENT
          </p>

          <h1 className="mt-3 text-3xl font-bold text-[#0B1F3A] sm:text-4xl">
            Insights
          </h1>

          <p className="mt-2 text-base text-slate-500">
            Manage your articles, market intelligence and business insights.
          </p>

        </div>

        <Link
          href="/admin/insights/new"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B1F3A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#142d4d]"
        >
          <Plus className="h-4 w-4" />
          New Insight
        </Link>

      </div>

      {/* Filters */}

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          {/* Search */}

          <div className="relative w-full lg:max-w-md">

            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search insights..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#c89b57] focus:bg-white"
            />

          </div>

          {/* Filters */}

          <div className="flex flex-col gap-3 sm:flex-row">

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none focus:border-[#c89b57]"
            >
              <option>
                All Categories
              </option>

              <option>
                Market Analysis
              </option>

              <option>
                Trade Guides
              </option>

              <option>
                Industry Insights
              </option>

              <option>
                Company News
              </option>
            </select>

            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none focus:border-[#c89b57]"
            >
              <option>
                All Status
              </option>

              <option>
                Published
              </option>

              <option>
                Draft
              </option>
            </select>

          </div>

        </div>

      </div>

      {/* Results */}

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        {/* Table Header */}

        <div className="hidden grid-cols-[1fr_180px_150px_100px] gap-6 border-b border-slate-200 bg-slate-50 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 md:grid">

          <span>
            Article
          </span>

          <span>
            Category
          </span>

          <span>
            Status
          </span>

          <span className="text-right">
            Action
          </span>

        </div>

        {/* Loading */}

        {loading ? (

          <div className="px-6 py-16 text-center">

            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-[#c89b57]" />

            <p className="mt-4 text-sm text-slate-500">
              Loading insights...
            </p>

          </div>

        ) : filteredInsights.length === 0 ? (

          /* Empty State */

          <div className="px-6 py-16 text-center">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">

              <Search className="h-5 w-5 text-slate-400" />

            </div>

            <h3 className="mt-4 text-lg font-bold text-[#0B1F3A]">
              No insights found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try changing your search or filters.
            </p>

          </div>

        ) : (

          /* Rows */

          <div className="divide-y divide-slate-200">

            {currentInsights.map(
               (insight) => (

                <div
                  key={insight.id}
                  className="grid gap-5 px-6 py-6 transition hover:bg-slate-50 md:grid-cols-[1fr_180px_150px_100px] md:items-center md:gap-6"
                >

                  {/* Article */}

                  <div className="flex items-start gap-4">

                    <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#c89b57]/10 sm:flex">

                      <FileText className="h-5 w-5 text-[#c89b57]" />

                    </div>

                    <div className="min-w-0">

                      <h3 className="font-semibold leading-6 text-[#0B1F3A]">
                        {insight.title}
                      </h3>

                      <p className="mt-1 break-all text-sm text-slate-500">
                        /insights/
                        {insight.slug}
                      </p>

                    </div>

                  </div>

                  {/* Category */}

                  <div>

                    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                      {insight.category}
                    </span>

                  </div>

                  {/* Status */}

                  <div>

                    <div
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${
                        insight.status ===
                        "published"
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-amber-50 text-amber-600"
                      }`}
                    >

                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          insight.status ===
                          "published"
                            ? "bg-emerald-500"
                            : "bg-amber-500"
                        }`}
                      />

                      {insight.status ===
                      "published"
                        ? "Published"
                        : "Draft"}

                    </div>

                    <p className="mt-2 text-xs text-slate-400">
                      {insight.publishedAt}
                    </p>

                  </div>

                  {/* Actions */}

                  <div className="flex items-center justify-start gap-2 md:justify-end">

                    <Link
                      href={`/admin/insights/${insight.id}/edit`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-[#c89b57] hover:text-[#c89b57]"
                      title="Edit"
                    >
                      <Pencil className="h-4 w-4" />
                    </Link>

                    <div className="relative">

  <button
    type="button"
    onClick={() =>
      setOpenMenu(
        openMenu === insight.id
          ? null
          : insight.id
      )
    }
    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-[#c89b57] hover:text-[#c89b57]"
    title="More actions"
  >
    <MoreHorizontal className="h-4 w-4" />
  </button>

  {openMenu === insight.id && (
    <div className="absolute right-0 z-30 mt-2 w-48 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">

      {/* View */}

      <Link
        href={`/insights/${insight.slug}`}
        target="_blank"
        onClick={() =>
          setOpenMenu(null)
        }
        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
      >
        <ExternalLink className="h-4 w-4 text-slate-400" />
        View Article
      </Link>

      {/* Edit */}

      <Link
        href={`/admin/insights/${insight.id}/edit`}
        onClick={() =>
          setOpenMenu(null)
        }
        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
      >
        <Pencil className="h-4 w-4 text-slate-400" />
        Edit Article
      </Link>

      {/* Duplicate */}

      <button
  type="button"
  onClick={async () => {
    try {
      setOpenMenu(null);

      const response = await fetch(
        "/api/insights",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            action: "duplicate",
            id: insight.id,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(
          data.error ||
            "Unable to duplicate article."
        );
        return;
      }

      alert(
        "Article duplicated as a draft."
      );

      window.location.href =
        `/admin/insights/${data.insight.id}/edit`;
    } catch (error) {
      console.error(
        "Failed to duplicate article:",
        error
      );

      alert(
        "Something went wrong while duplicating the article."
      );
    }
  }}
  className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50"
>
  <Copy className="h-4 w-4 text-slate-400" />
  Duplicate Article
</button>

      <div className="my-1 border-t border-slate-100" />

      {/* Delete */}

      <button
  type="button"
  disabled={deletingId === insight.id}
  onClick={() =>
    setDeleteTarget(insight)
  }
  className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
>
  <Trash2 className="h-4 w-4" />

  Delete Article
</button>

    </div>
  )}

</div>

                  </div>

                </div>

              )
            )}

          </div>

        )}

      </div>

       <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {/* Bottom Information */}

      <div className="flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

        <span>
  {filteredInsights.length === 0
    ? "Showing 0 insights"
    : `Showing ${startIndex + 1}–${Math.min(
        startIndex + POSTS_PER_PAGE,
        filteredInsights.length
      )} of ${filteredInsights.length} insights`}
</span>

        <span>
          Content is currently managed locally.
        </span>

      </div>
 {/* Delete Confirmation Modal */}

      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-6 backdrop-blur-sm">

          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">

            {/* Icon */}

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
              <Trash2 className="h-5 w-5 text-red-600" />
            </div>

            {/* Content */}

            <h2 className="mt-5 text-xl font-bold text-[#0B1F3A]">
              Delete Insight?
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Are you sure you want to permanently
              delete{" "}
              <span className="font-semibold text-slate-700">
                {deleteTarget.title}
              </span>
              ?
            </p>

            <p className="mt-2 text-sm text-red-500">
              This action cannot be undone.
            </p>

            {/* Actions */}

            <div className="mt-7 flex justify-end gap-3">

              <button
                type="button"
                onClick={() =>
                  setDeleteTarget(null)
                }
                disabled={
                  deletingId ===
                  deleteTarget.id
                }
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={() =>
                  deleteInsight(
                    deleteTarget.id
                  )
                }
                disabled={
                  deletingId ===
                  deleteTarget.id
                }
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Trash2 className="h-4 w-4" />

                {deletingId ===
                deleteTarget.id
                  ? "Deleting..."
                  : "Delete Article"}
              </button>

            </div>

          </div>

        </div>
      )}
    </div>
  );
}