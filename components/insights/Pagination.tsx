"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-16 flex items-center justify-center gap-2">

      {/* Previous */}

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#c89b57] hover:text-[#c89b57] disabled:cursor-not-allowed disabled:opacity-40"
      >
        ← Previous
      </button>

      {/* Page Numbers */}

      <div className="flex items-center gap-2">

        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;

          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`h-10 w-10 rounded-lg text-sm font-semibold transition ${
                currentPage === page
                  ? "bg-[#0B1F3A] text-white"
                  : "border border-slate-200 text-slate-700 hover:border-[#c89b57] hover:text-[#c89b57]"
              }`}
            >
              {page}
            </button>
          );
        })}

      </div>

      {/* Next */}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#c89b57] hover:text-[#c89b57] disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next →
      </button>

    </div>
  );
}