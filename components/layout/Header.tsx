"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Sectors", href: "/sectors" },
  { name: "Trade Solutions", href: "/tradesolutions" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  /*
   * Close mobile menu whenever the page changes.
   */
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  /*
   * Prevent background page scrolling while
   * the mobile menu is open.
   */
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Main Header */}

        <div className="flex h-20 items-center justify-between lg:h-24">

          {/* Logo */}

          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="Agrosyne Home"
          >
            <Image
              src="/logos/logo-agrosyne.png"
              alt="Agrosyne"
              width={210}
              height={60}
              priority
              className="h-auto w-[170px] sm:w-[190px] lg:w-[210px]"
            />
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-10 lg:flex">

            {navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-[15px] font-medium transition ${
                    isActive
                      ? "text-[#C8A45D]"
                      : "text-gray-700 hover:text-[#C8A45D]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

          </nav>

          {/* Desktop CTA */}

          <Link
            href="/contact"
            className="hidden h-12 items-center justify-center rounded-md bg-[#0B1F3A] px-7 font-semibold text-white transition hover:bg-[#162F55] lg:flex"
          >
            Get In Touch
          </Link>

          {/* Mobile Menu Button */}

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-[#0B1F3A] transition hover:bg-slate-100 lg:hidden"
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

        </div>

        {/* Mobile Navigation */}

        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-gray-200 lg:hidden"
          >

            <nav className="py-4">

              {navigation.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center rounded-lg px-3 py-3.5 text-base font-medium transition ${
                      isActive
                        ? "bg-[#C8A45D]/10 text-[#C8A45D]"
                        : "text-gray-700 hover:bg-slate-50 hover:text-[#C8A45D]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* Mobile CTA */}

              <div className="mt-3 border-t border-gray-200 pt-4">

                <Link
                  href="/contact"
                  className="flex h-12 w-full items-center justify-center rounded-md bg-[#0B1F3A] px-6 font-semibold text-white transition hover:bg-[#162F55]"
                >
                  Get In Touch
                </Link>

              </div>

            </nav>

          </div>
        )}

      </div>
    </header>
  );
}