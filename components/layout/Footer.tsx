"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

type SiteSettings = {
  companyName: string;
  tagline: string;
  email: string;
  phone: string;
  address: string;
  website: string;

  linkedin: string;
  instagram: string;
  facebook: string;

  footerDescription: string;
  copyrightText: string;

  seoTitle: string;
  metaDescription: string;
};

const defaultSettings: SiteSettings = {
  companyName: "Agrosyne Global Commodity Pvt Ltd",

  tagline: "Global Commodity Trading & Supply",

  email: "info@agrosyne.com",

  phone: "+91 82904 45442",

  address:
    "Plot No. 3, Park House, Infront of Akashwani, MI Road, Jaipur, Rajasthan 302001, India",

  website: "https://www.agrosyne.com",

  linkedin: "",
  instagram: "",
  facebook: "",

  footerDescription:
    "Agrosyne is a global commodity trading company dealing in agriculture, oil & gas, metals & scrap, and fertilizers.",

  copyrightText:
    "© 2026 Agrosyne Global Commodity Pvt Ltd. All rights reserved.",

  seoTitle:
    "Agrosyne | Global Commodity Trading",

  metaDescription:
    "Agrosyne is a global commodity trading company specializing in agriculture, oil & gas, metals & scrap, and fertilizers.",
};


/*
 * LinkedIn Icon
 */

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.98h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.3ZM5.34 7.42a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.57V8.98H3.56v11.47Z" />
    </svg>
  );
}


/*
 * Instagram Icon
 */

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}


/*
 * Facebook Icon
 */

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M13.5 21v-8h2.75l.4-3h-3.15V8.08c0-.87.24-1.46 1.5-1.46h1.8V3.94c-.31-.04-1.37-.14-2.6-.14-2.57 0-4.33 1.57-4.33 4.45V10H7v3h2.87v8h3.63Z" />
    </svg>
  );
}


export default function Footer() {

  const [settings, setSettings] =
    useState<SiteSettings>(defaultSettings);


  /*
   * Load website settings
   */

  useEffect(() => {

    async function loadSettings() {

      try {

        const response = await fetch(
          "/api/settings",
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          return;
        }

        const data = await response.json();

        if (
          data &&
          typeof data === "object"
        ) {

          setSettings({
            ...defaultSettings,
            ...data,
          });

        }

      } catch (error) {

        console.error(
          "Failed to load footer settings:",
          error
        );

      }

    }

    loadSettings();

  }, []);


  /*
   * Phone link
   */

  const phoneHref = settings.phone
    ? `tel:${settings.phone.replace(
        /[^\d+]/g,
        ""
      )}`
    : "#";


  /*
   * Email link
   */

  const emailHref = settings.email
    ? `mailto:${settings.email}`
    : "#";


  return (

    <footer className="bg-[#0B1324] text-white">


      {/* ====================================================== */}
      {/* CTA */}
      {/* ====================================================== */}

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

            <ArrowRight className="h-5 w-5" />

          </Link>

        </div>

      </div>


      {/* ====================================================== */}
      {/* MAIN FOOTER */}
      {/* ====================================================== */}

      <div className="mx-auto max-w-7xl px-6 py-5">

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">


          {/* ================================================== */}
          {/* COMPANY INTRO */}
          {/* ================================================== */}

          <div>

            <Image
              src="/logos/logo-agrosyne.png"
              alt={settings.companyName}
              width={620}
              height={620}
              className="mb-6"
            />


            {/* Company Name */}

            <p className="max-w-sm font-semibold leading-7 text-slate-300">
              {settings.companyName}
            </p>


            {/* Footer Description */}

            <p className="max-w-sm leading-8 text-slate-300">
              {settings.footerDescription}
            </p>


            {/* ================================================== */}
            {/* SOCIAL MEDIA */}
            {/* ================================================== */}

            {(settings.linkedin ||
              settings.instagram ||
              settings.facebook) && (

              <div className="mt-6 flex items-center gap-3">


                {/* LinkedIn */}

                {settings.linkedin && (

                  <a
                    href={settings.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-300 transition hover:border-[#c89b57] hover:text-[#c89b57]"
                  >

                    <LinkedInIcon />

                  </a>

                )}


                {/* Instagram */}

                {settings.instagram && (

                  <a
                    href={settings.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-300 transition hover:border-[#c89b57] hover:text-[#c89b57]"
                  >

                    <InstagramIcon />

                  </a>

                )}


                {/* Facebook */}

                {settings.facebook && (

                  <a
                    href={settings.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-300 transition hover:border-[#c89b57] hover:text-[#c89b57]"
                  >

                    <FacebookIcon />

                  </a>

                )}

              </div>

            )}

          </div>


          {/* ================================================== */}
          {/* COMPANY */}
          {/* ================================================== */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Company
            </h3>


            <ul className="space-y-4 text-slate-300">

              <li>
                <Link href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/sectors">
                  Our Sectors
                </Link>
              </li>

              <li>
                <Link href="/tradesolutions">
                  Trade Solutions
                </Link>
              </li>

              <li>
                <Link href="/insights">
                  Insights
                </Link>
              </li>

              <li>
                <Link href="/contact">
                  Contact
                </Link>
              </li>

            </ul>

          </div>


          {/* ================================================== */}
          {/* SECTORS */}
          {/* ================================================== */}

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


          {/* ================================================== */}
          {/* CONTACT */}
          {/* ================================================== */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Contact Us
            </h3>


            <div className="space-y-6 text-slate-300">


              {/* Address */}

              {settings.address && (

                <div className="flex gap-4">

                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#c89b57]" />

                  <p className="whitespace-pre-line">
                    {settings.address}
                  </p>

                </div>

              )}


              {/* Phone */}

              {settings.phone && (

                <div className="flex items-center gap-4">

                  <Phone className="h-5 w-5 shrink-0 text-[#c89b57]" />

                  <a
                    href={phoneHref}
                    className="transition hover:text-[#c89b57]"
                  >
                    {settings.phone}
                  </a>

                </div>

              )}


              {/* Email */}

              {settings.email && (

                <div className="flex items-center gap-4">

                  <Mail className="h-5 w-5 shrink-0 text-[#c89b57]" />

                  <a
                    href={emailHref}
                    className="transition hover:text-[#c89b57]"
                  >
                    {settings.email}
                  </a>

                </div>

              )}


              {/* Contact Button */}

              <Link
                href="/contact"
                className="mt-2 inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 transition hover:border-[#c89b57]"
              >

                Get In Touch

                <ArrowRight className="h-4 w-4" />

              </Link>

            </div>

          </div>

        </div>

      </div>


      {/* ====================================================== */}
      {/* BOTTOM FOOTER */}
      {/* ====================================================== */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-2 text-sm text-slate-400 md:flex-row">


          {/* Copyright */}

          <p>
            {settings.copyrightText}
          </p>


          {/* Legal Links */}

          <div className="flex flex-wrap items-center justify-center gap-8">

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