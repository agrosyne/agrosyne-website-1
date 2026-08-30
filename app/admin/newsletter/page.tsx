"use client";

import { useEffect, useState } from "react";
import {
  Mail,
  Users,
  RefreshCw,
} from "lucide-react";

type Subscriber = {
  id: string;
  email: string;
  name?: string;
  source?: string;
  subscribedAt?: string;
};

export default function NewsletterAdminPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadSubscribers() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/newsletter", {
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error ||
            "Unable to load subscribers."
        );
      }

      setSubscribers(
        Array.isArray(data) ? data : []
      );
    } catch (error) {
      console.error(
        "Failed to load subscribers:",
        error
      );

      setError(
        error instanceof Error
          ? error.message
          : "Unable to load subscribers."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadSubscribers();
  }, []);

  return (
    <div className="min-w-0 space-y-8">
      {/* Header */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c89b57]">
            Newsletter
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Newsletter Subscribers
          </h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            View the people who have subscribed to
            Agrosyne Insights.
          </p>
        </div>

        <button
          type="button"
          onClick={loadSubscribers}
          disabled={loading}
          className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#c89b57] hover:text-[#c89b57] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <RefreshCw
            className={`h-4 w-4 ${
              loading ? "animate-spin" : ""
            }`}
          />

          Refresh
        </button>
      </div>

      {/* Error */}

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-600">
          {error}
        </div>
      )}

      {/* Stats */}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Total Subscribers
              </p>

              <p className="mt-3 text-3xl font-bold text-slate-900">
                {loading
                  ? "—"
                  : subscribers.length}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c89b57]/10">
              <Users className="h-5 w-5 text-[#c89b57]" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Source
              </p>

              <p className="mt-3 text-xl font-bold text-slate-900">
                Agrosyne Insights
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c89b57]/10">
              <Mail className="h-5 w-5 text-[#c89b57]" />
            </div>
          </div>
        </div>
      </div>

      {/* Subscribers Table */}

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="border-b border-slate-200 px-6 py-5">
          <h2 className="font-bold text-slate-900">
            Subscribers
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Newsletter contacts collected through
            the website.
          </p>
        </div>

        {loading ? (
          <div className="flex min-h-[250px] items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-[#c89b57]" />
          </div>
        ) : subscribers.length === 0 ? (
          <div className="flex min-h-[250px] flex-col items-center justify-center px-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
              <Mail className="h-6 w-6 text-slate-400" />
            </div>

            <h3 className="mt-4 font-semibold text-slate-900">
              No subscribers yet
            </h3>

            <p className="mt-2 max-w-md text-sm text-slate-500">
              When someone subscribes to the
              newsletter on the Insights page, they
              will appear here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Name
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Email
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Source
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Subscribed
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {subscribers.map(
                  (subscriber) => (
                    <tr
                      key={subscriber.id}
                      className="transition hover:bg-slate-50"
                    >
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">
                        {subscriber.name || "—"}
                      </td>

                      <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-700">
                        {subscriber.email}
                      </td>

                      <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">
                        {subscriber.source ||
                          "Insights"}
                      </td>

                      <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">
                        {subscriber.subscribedAt
                          ? new Date(
                              subscriber.subscribedAt
                            ).toLocaleString()
                          : "—"}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}