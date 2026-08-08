"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1324] text-white">

      {/* CTA */}
      <div className="border-b border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-5 lg:flex-row lg:items-center">

          <div className="max-w-3xl">

            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.45em] text-[#c89b57]">
              Ready To Partner?
            </p>

            <h2 className="text-4xl font-bold leading-tight">
              Looking for a Reliable
              <br />
              Commodity Trading Partner?
            </h2>

            <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-300">
              We help businesses source agricultural products,
              industrial commodities and global trade solutions
              with transparency, reliability and efficiency.
            </p>

          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-xl bg-[#c89b57] px-8 py-4 font-semibold text-white transition hover:bg-[#b78644]"
          >
            Get In Touch
            <ArrowRight className="h-5 w-5"/>
          </Link>

        </div>

      </div>

            {/* Main Footer */}

      <div className="mx-auto max-w-7xl px-6 py-5">

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">

          {/* Company Intro */}

          <div>

            <Image
              src="/logos/logo-agrosyne.png"
              alt="Agrosyne"
              width={620}
              height={620}
              className="mb-6"
            />

            <p className="max-w-sm leading-7 text-slate-300 font-semibold">
              Agrosyne Global Commodity Pvt. Ltd.
            </p>
            <p className="max-w-sm leading-8 text-slate-300">
              connects trusted manufacturers, exporters & buyers worldwide through
              transparent trade, dependable logistics and long-term
              partnerships.
            </p>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Company
            </h3>

            <ul className="space-y-4 text-slate-300">

              <li><Link href="/">Home</Link></li>

              <li><Link href="/about">About Us</Link></li>

              <li><Link href="/sectors">Our Sectors</Link></li>

              <li><Link href="/trade-solutions">Trade Solutions</Link></li>

              <li><Link href="/markets">Markets</Link></li>

              <li><Link href="/insights">Insights</Link></li>

              <li><Link href="/contact">Contact</Link></li>

            </ul>

          </div>

          {/* Sectors */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Our Sectors
            </h3>

            <ul className="space-y-4 text-slate-300">

              <li>
                <Link href="/sectors/agriculture">
                  Agriculture
                </Link>
              </li>

              <li>
                <Link href="/sectors/oil-gas">
                  Oil & Gas
                </Link>
              </li>

              <li>
                <Link href="/sectors/metals-scrap">
                  Metals & Scrap
                </Link>
              </li>

              <li>
                <Link href="/sectors/fertilizers">
                  Fertilizers
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Contact Us
            </h3>

            <div className="space-y-6 text-slate-300">

              <div className="flex gap-4">

                <MapPin className="mt-1 h-5 w-5 text-[#c89b57]" />

                <p>
                  Plot No. 3,
                  Park House,
                  MI Road,
                  Jaipur,
                  Rajasthan 302001,
                  India
                </p>

              </div>

              <div className="flex items-center gap-4">

                <Phone className="h-5 w-5 text-[#c89b57]" />

                <a href="tel:+918290445442">
                  +91 82904 45442
                </a>

              </div>

              <div className="flex items-center gap-4">

                <Mail className="h-5 w-5 text-[#c89b57]" />

                <a href="mailto:info@agrosyne.com">
                  info@agrosyne.com
                </a>

              </div>

              <Link
                href="/contact"
                className="mt-2 inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 transition hover:border-[#c89b57]"
              >
                Get In Touch

                <ArrowRight className="h-4 w-4"/>
              </Link>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-2 text-sm text-slate-400 md:flex-row">

          <p>
            © {new Date().getFullYear()} Agrosyne Global Commodity Pvt. Ltd.
            All Rights Reserved.
          </p>

          <div className="flex items-center gap-8">

            <Link
              href="/privacy-policy"
              className="transition hover:text-[#c89b57]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-[#c89b57]"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/cookies"
              className="transition hover:text-[#c89b57]"
            >
              Cookies
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}