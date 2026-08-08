"use client";

import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Sectors", href: "/sectors" },
  { name: "Trade Solutions", href: "/tradesolutions" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-24">

          {/* Logo */}

          <Link href="/" className="flex items-center">

            <Image
              src="/logos/logo-agrosyne.png"
              alt="Agrosyne"
              width={210}
              height={60}
              priority
            />

          </Link>

          {/* Navigation */}

          <nav className="hidden lg:flex items-center gap-10">

            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[15px] font-medium text-gray-700 hover:text-[#C8A45D] transition"
              >
                {item.name}
              </Link>
            ))}

          </nav>

          {/* CTA */}

          <Link
            href="/contact"
            className="hidden lg:flex items-center justify-center h-12 px-7 rounded-md bg-[#0B1F3A] text-white font-semibold hover:bg-[#162F55] transition"
          >
            Get In Touch
          </Link>

        </div>

      </div>
    </header>
  );
}