"use client";

import {
  Bell,
  UserCircle,
  Menu,
  LogOut,
} from "lucide-react";
import { signOut } from "next-auth/react";

interface AdminHeaderProps {
  onMenuClick: () => void;
}

export default function AdminHeader({
  onMenuClick,
}: AdminHeaderProps) {

  async function handleSignOut() {
    await signOut({
      redirect: false,
    });

    window.location.href = "/admin/login";
  }

  return (
    <header className="sticky top-0 z-40 h-20 border-b border-slate-200 bg-white">
      <div className="flex h-full items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* Left Side */}

        <div className="flex items-center gap-4">

          {/* Mobile Menu */}

          <button
            type="button"
            onClick={onMenuClick}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 lg:hidden"
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Page Context */}

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c89b57]">
              AGROSYNE
            </p>

            <h1 className="mt-1 text-lg font-bold text-slate-900">
              Administration
            </h1>
          </div>
        </div>

        {/* Right Side */}

        <div className="flex items-center gap-3 sm:gap-5">

          {/* Notifications */}

          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#c89b57]" />
          </button>

          {/* User */}

          <div className="flex items-center gap-3 border-l border-slate-200 pl-3 sm:pl-5">
            <UserCircle className="h-9 w-9 text-slate-400" />

            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-slate-900">
                Administrator
              </p>

              <p className="text-xs text-slate-500">
                Agrosyne
              </p>
            </div>
          </div>

          {/* Sign Out */}

          <button
            type="button"
            onClick={handleSignOut}
            className="flex h-10 items-center gap-2 rounded-lg border border-slate-200 px-3 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900"
            aria-label="Sign out"
          >
            <LogOut className="h-4 w-4" />

            <span className="hidden sm:inline">
              Sign out
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}