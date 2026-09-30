"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CheckCircle2,
  ChevronRight,
  Clock3,
  Mail,
  Phone,
  Search,
  UserRound,
  X,
} from "lucide-react";

type InquiryStatus =
  | "new"
  | "contacted"
  | "qualified"
  | "quoted"
  | "negotiating"
  | "won"
  | "lost";

interface Inquiry {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
  status: InquiryStatus;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

const STATUS_OPTIONS: {
  value: InquiryStatus | "all";
  label: string;
}[] = [
  { value: "all", label: "All" },
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "qualified", label: "Qualified" },
  { value: "quoted", label: "Quoted" },
  { value: "negotiating", label: "Negotiating" },
  { value: "won", label: "Won" },
  { value: "lost", label: "Lost" },
];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function getStatusLabel(status: InquiryStatus) {
  return (
    STATUS_OPTIONS.find(
      (option) => option.value === status
    )?.label || status
  );
}

function getStatusClasses(status: InquiryStatus) {
  switch (status) {
    case "new":
      return "bg-amber-50 text-amber-700 border-amber-200";

    case "contacted":
      return "bg-blue-50 text-blue-700 border-blue-200";

    case "qualified":
      return "bg-violet-50 text-violet-700 border-violet-200";

    case "quoted":
      return "bg-indigo-50 text-indigo-700 border-indigo-200";

    case "negotiating":
      return "bg-orange-50 text-orange-700 border-orange-200";

    case "won":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";

    case "lost":
      return "bg-slate-100 text-slate-600 border-slate-200";

    default:
      return "bg-slate-100 text-slate-600 border-slate-200";
  }
}

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [selectedInquiry, setSelectedInquiry] =
    useState<Inquiry | null>(null);

  const [statusFilter, setStatusFilter] = useState<
    InquiryStatus | "all"
  >("all");

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updating, setUpdating] = useState(false);
  const [notes, setNotes] = useState("");
  const [notesSaved, setNotesSaved] = useState(false);

  useEffect(() => {
    async function loadInquiries() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/api/inquiries", {
          cache: "no-store",
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error ||
              "Unable to load inquiries."
          );
        }

        setInquiries(data);
      } catch (error) {
        console.error(
          "Failed to load inquiries:",
          error
        );

        setError(
          error instanceof Error
            ? error.message
            : "Unable to load inquiries."
        );
      } finally {
        setLoading(false);
      }
    }

    loadInquiries();
  }, []);

   async function updateInquiryStatus(
    status: InquiryStatus
  ) {
    if (!selectedInquiry) return;

    try {
      setUpdating(true);
      setNotesSaved(false);

      const response = await fetch(
        `/api/inquiries/${selectedInquiry.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Unable to update inquiry status."
        );
      }

      const updatedInquiry = data.inquiry as Inquiry;

      setSelectedInquiry(updatedInquiry);

      setInquiries((current) =>
        current.map((inquiry) =>
          inquiry.id === updatedInquiry.id
            ? updatedInquiry
            : inquiry
        )
      );
    } catch (error) {
      console.error(
        "Failed to update inquiry status:",
        error
      );

      setError(
        error instanceof Error
          ? error.message
          : "Unable to update inquiry status."
      );
    } finally {
      setUpdating(false);
    }
  }

  async function saveInquiryNotes() {
    if (!selectedInquiry) return;

    try {
      setUpdating(true);
      setNotesSaved(false);

      const response = await fetch(
        `/api/inquiries/${selectedInquiry.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            notes,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Unable to save inquiry notes."
        );
      }

      const updatedInquiry = data.inquiry as Inquiry;

      setSelectedInquiry(updatedInquiry);

      setInquiries((current) =>
        current.map((inquiry) =>
          inquiry.id === updatedInquiry.id
            ? updatedInquiry
            : inquiry
        )
      );

      setNotesSaved(true);
    } catch (error) {
      console.error(
        "Failed to save inquiry notes:",
        error
      );

      setError(
        error instanceof Error
          ? error.message
          : "Unable to save inquiry notes."
      );
    } finally {
      setUpdating(false);
    }
  }

  const filteredInquiries = useMemo(() => {
    const searchValue = search
      .trim()
      .toLowerCase();

    return inquiries.filter((inquiry) => {
      const matchesStatus =
        statusFilter === "all" ||
        inquiry.status === statusFilter;

      const matchesSearch =
        !searchValue ||
        inquiry.name
          .toLowerCase()
          .includes(searchValue) ||
        inquiry.company
          .toLowerCase()
          .includes(searchValue) ||
        inquiry.email
          .toLowerCase()
          .includes(searchValue) ||
        inquiry.inquiryType
          .toLowerCase()
          .includes(searchValue) ||
        inquiry.message
          .toLowerCase()
          .includes(searchValue);

      return matchesStatus && matchesSearch;
    });
  }, [inquiries, search, statusFilter]);

  const statusCounts = useMemo(() => {
    return {
      all: inquiries.length,
      new: inquiries.filter(
        (item) => item.status === "new"
      ).length,
      contacted: inquiries.filter(
        (item) => item.status === "contacted"
      ).length,
      qualified: inquiries.filter(
        (item) => item.status === "qualified"
      ).length,
      quoted: inquiries.filter(
        (item) => item.status === "quoted"
      ).length,
      negotiating: inquiries.filter(
        (item) => item.status === "negotiating"
      ).length,
      won: inquiries.filter(
        (item) => item.status === "won"
      ).length,
      lost: inquiries.filter(
        (item) => item.status === "lost"
      ).length,
    };
  }, [inquiries]);

  return (
    <div className="min-h-full bg-[#f3f6fa]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        {/* HEADER */}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
              CONTACT MANAGEMENT
            </p>

            <h1 className="mt-3 text-4xl font-bold text-[#0B1F3A]">
              Inquiries
            </h1>

            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-500">
              Manage contact requests and business
              opportunities received through the website.
            </p>
          </div>

          <div className="rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-slate-200">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              New inquiries
            </p>

            <p className="mt-1 text-2xl font-bold text-[#0B1F3A]">
              {statusCounts.new}
            </p>
          </div>

        </div>

        {/* STATUS FILTERS */}

        <div className="mt-8 overflow-x-auto">
          <div className="flex min-w-max gap-2">
            {STATUS_OPTIONS.map((option) => {
              const count =
                statusCounts[
                  option.value as keyof typeof statusCounts
                ];

              const active =
                statusFilter === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() =>
                    setStatusFilter(option.value)
                  }
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "bg-[#0B1F3A] text-white"
                      : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {option.label}

                  <span
                    className={`ml-2 ${
                      active
                        ? "text-white/70"
                        : "text-slate-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* SEARCH */}

        <div className="mt-6 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search by name, company, email or inquiry..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm outline-none transition focus:border-[#c89b57] focus:bg-white"
            />
          </div>
        </div>

        {/* CONTENT */}

        <div className="mt-6">

          {loading ? (
            <div className="rounded-2xl bg-white p-12 text-center shadow-sm ring-1 ring-slate-200">
              <p className="text-sm text-slate-500">
                Loading inquiries...
              </p>
            </div>
          ) : error ? (
            <div className="rounded-2xl bg-white p-12 text-center shadow-sm ring-1 ring-red-200">
              <p className="font-semibold text-red-600">
                Unable to load inquiries
              </p>

              <p className="mt-2 text-sm text-slate-500">
                {error}
              </p>
            </div>
          ) : filteredInquiries.length === 0 ? (
            <div className="rounded-2xl bg-white p-16 text-center shadow-sm ring-1 ring-slate-200">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                <Mail className="h-6 w-6 text-slate-400" />
              </div>

              <h2 className="mt-5 text-xl font-bold text-[#0B1F3A]">
                No inquiries found
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                New contact requests submitted through
                your website will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredInquiries.map((inquiry) => (
                <button
                  key={inquiry.id}
                  type="button"
                  onClick={() => {
  setSelectedInquiry(inquiry);
  setNotes(inquiry.notes || "");
  setNotesSaved(false);
  setError("");
}}
                  className="group w-full rounded-2xl bg-white p-5 text-left shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center">

                    <div className="flex min-w-0 flex-1 items-start gap-4">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B1F3A] text-white">
                        <UserRound className="h-5 w-5" />
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <h2 className="font-bold text-[#0B1F3A]">
                            {inquiry.name}
                          </h2>

                          <span
                            className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${getStatusClasses(
                              inquiry.status
                            )}`}
                          >
                            {getStatusLabel(
                              inquiry.status
                            )}
                          </span>
                        </div>

                        <p className="mt-1 text-sm font-medium text-slate-600">
                          {inquiry.company ||
                            "Individual inquiry"}
                        </p>

                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                          {inquiry.message}
                        </p>
                      </div>

                    </div>

                    <div className="flex shrink-0 items-center gap-6 lg:w-72">

                      <div className="hidden text-right sm:block">
                        <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                          Inquiry
                        </p>

                        <p className="mt-1 text-sm font-semibold text-slate-700">
                          {inquiry.inquiryType}
                        </p>

                        <p className="mt-2 text-xs text-slate-400">
                          {formatDate(
                            inquiry.createdAt
                          )}
                        </p>
                      </div>

                      <ChevronRight className="ml-auto h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#c89b57]" />

                    </div>

                  </div>
                </button>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* DETAIL PANEL */}

      {selectedInquiry && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/40">

          <button
            type="button"
            aria-label="Close inquiry"
            onClick={() =>
              setSelectedInquiry(null)
            }
            className="absolute inset-0 cursor-default"
          />

          <aside className="relative z-10 flex h-full w-full max-w-2xl flex-col bg-white shadow-2xl">

            {/* PANEL HEADER */}

            <div className="flex items-start justify-between border-b border-slate-200 px-7 py-6">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c89b57]">
                  INQUIRY DETAILS
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[#0B1F3A]">
                  {selectedInquiry.name}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  {selectedInquiry.company ||
                    "Individual inquiry"}
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedInquiry(null)
                }
                className="rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>

            </div>

            {/* PANEL BODY */}

            <div className="flex-1 overflow-y-auto px-7 py-7">

              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${getStatusClasses(
                    selectedInquiry.status
                  )}`}
                >
                  {getStatusLabel(
                    selectedInquiry.status
                  )}
                </span>

                <span className="text-sm text-slate-400">
                  Received{" "}
                  {formatDate(
                    selectedInquiry.createdAt
                  )}
                </span>
              </div>

              {/* CONTACT DETAILS */}

              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                <a
                  href={`mailto:${selectedInquiry.email}`}
                  className="rounded-xl border border-slate-200 p-4 transition hover:border-[#c89b57]"
                >
                  <Mail className="h-5 w-5 text-[#c89b57]" />

                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm font-semibold text-[#0B1F3A]">
                    {selectedInquiry.email}
                  </p>
                </a>

                {selectedInquiry.phone && (
                  <a
                    href={`tel:${selectedInquiry.phone}`}
                    className="rounded-xl border border-slate-200 p-4 transition hover:border-[#c89b57]"
                  >
                    <Phone className="h-5 w-5 text-[#c89b57]" />

                    <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#0B1F3A]">
                      {selectedInquiry.phone}
                    </p>
                  </a>
                )}

              </div>

              {/* INQUIRY TYPE */}

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Inquiry Type
                </p>

                <p className="mt-2 text-base font-semibold text-[#0B1F3A]">
                  {selectedInquiry.inquiryType}
                </p>
              </div>

              {/* MESSAGE */}

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Message
                </p>

                <div className="mt-3 rounded-2xl bg-slate-50 p-5">
                  <p className="whitespace-pre-wrap text-sm leading-7 text-slate-700">
                    {selectedInquiry.message}
                  </p>
                </div>
              </div>

              {/* STATUS */}

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Status
                </p>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  {STATUS_OPTIONS.filter(
                    (option) =>
                      option.value !== "all"
                  ).map((option) => (
                    <button
  key={option.value}
  type="button"
  onClick={() =>
    updateInquiryStatus(
      option.value as InquiryStatus
    )
  }
  disabled={updating}
  className={`rounded-xl border px-4 py-3 text-left text-sm font-semibold transition ${
    selectedInquiry.status ===
    option.value
      ? "border-[#c89b57] bg-[#c89b57]/10 text-[#0B1F3A]"
      : "border-slate-200 text-slate-600 hover:border-slate-300"
  }`}
>
  {option.label}
</button>
                  ))}
                </div>
              </div>

              {/* INTERNAL NOTES */}

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Internal Notes
                </p>

                <textarea
  value={notes}
  onChange={(event) => {
    setNotes(event.target.value);
    setNotesSaved(false);
  }}
  rows={5}
  placeholder="Add internal notes about this inquiry..."
  className="mt-3 w-full resize-none rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 outline-none transition focus:border-[#c89b57]"
/>

<div className="mt-3 flex items-center gap-3">
  <button
    type="button"
    onClick={saveInquiryNotes}
    disabled={updating}
    className="rounded-xl bg-[#0B1F3A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#162F55] disabled:cursor-not-allowed disabled:opacity-60"
  >
    {updating ? "Saving..." : "Save Notes"}
  </button>

  {notesSaved && (
    <span className="flex items-center gap-1.5 text-sm font-medium text-emerald-600">
      <CheckCircle2 className="h-4 w-4" />
      Saved
    </span>
  )}
</div>
              </div>

            </div>

            {/* PANEL FOOTER */}

            <div className="border-t border-slate-200 bg-slate-50 px-7 py-5">

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Clock3 className="h-4 w-4" />

                <span>
                  Last updated{" "}
                  {formatDate(
                    selectedInquiry.updatedAt
                  )}
                </span>
              </div>

            </div>

          </aside>
        </div>
      )}
    </div>
  );
}