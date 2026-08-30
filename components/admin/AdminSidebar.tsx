"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  Settings,
  Users,
  ExternalLink,
  X,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Insights",
    href: "/admin/insights",
    icon: FileText,
  },
  {
    name: "New Insight",
    href: "/admin/insights/new",
    icon: PlusCircle,
  },
  {
    name: "Newsletter",
    href: "/admin/newsletter",
    icon: Users,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

interface AdminSidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function AdminSidebar({
  open,
  onClose,
}: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}

      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar */}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-white/10 bg-[#0B1F3A] transition-transform duration-300 ease-in-out lg:w-64 lg:translate-x-0 ${
          open
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        {/* Logo / Brand */}

        <div className="flex h-24 items-center justify-between border-b border-white/10 px-6">
          <div>
            <p className="text-xl font-bold tracking-wide text-white">
              AGROSYNE
            </p>

            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-[#c89b57]">
              Admin Panel
            </p>
          </div>

          {/* Mobile Close */}

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-300 transition hover:bg-white/10 hover:text-white lg:hidden"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}

        <nav className="flex-1 space-y-2 overflow-y-auto p-4">
          {navigation.map((item) => {
            const Icon = item.icon;

            const isActive =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-[#c89b57] text-white"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" />

                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* View Website */}

        <div className="border-t border-white/10 p-4">
          <Link
            href="/"
            target="_blank"
            onClick={onClose}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            <ExternalLink className="h-5 w-5" />

            <span>View Website</span>
          </Link>
        </div>
      </aside>
    </>
  );
}