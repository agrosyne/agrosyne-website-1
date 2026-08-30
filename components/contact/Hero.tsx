"use client";

import Link from "next/link";
import { ArrowDownRight, Mail, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1F3A] text-white">

      {/* Background Detail */}

      <div className="absolute right-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full border border-white/10" />

      <div className="absolute bottom-[-180px] left-[-100px] h-[420px] w-[420px] rounded-full border border-[#c89b57]/10" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-15">

        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          {/* LEFT */}

          <div>

            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.45em] text-[#c89b57]">
              ----- GET IN TOUCH -----
            </p>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Let's Talk
              <br />
              <span className="text-[#c89b57]">Trade.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Whether you're looking to source a commodity, develop a new
              market or explore a trading opportunity, let's start the
              conversation.
            </p>

            {/* Bottom Links */}

            <div className="mt-12 flex flex-col gap-5 sm:flex-row">

              <Link
                href="#contact-form"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#c89b57] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#b88a44]"
              >
                Start an Inquiry
                <ArrowDownRight className="h-5 w-5" />
              </Link>

              <Link
                href="mailto:info@agrosyne.com"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#c89b57] hover:text-[#c89b57]"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </Link>

            </div>

          </div>

          {/* RIGHT CONTACT PANEL */}

          <div className="relative">

            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm sm:p-10">

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c89b57]">
                Start a Conversation
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-white">
                Tell us what
                <br />
                you're looking for.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-300">
                Share your requirement with our team and we'll connect you
                with the right person for your inquiry.
              </p>

              <div className="mt-10 border-t border-white/10 pt-7">

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c89b57]/40">
                    <MessageCircle className="h-5 w-5 text-[#c89b57]" />
                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-widest text-slate-400">
                      General Inquiries
                    </p>

                    <p className="mt-1 text-sm font-medium text-white">
                      info@agrosyne.com
                    </p>

                  </div>

                </div>

              </div>

              <div className="mt-7 grid grid-cols-2 gap-4 border-t border-white/10 pt-7">

                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400">
                    Focus
                  </p>

                  <p className="mt-2 text-sm font-medium text-white">
                    Global Commodities
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400">
                    Response
                  </p>

                  <p className="mt-2 text-sm font-medium text-white">
                    Business Inquiries
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Label */}

        <div className="mt-15 border-t border-white/10 pt-6">

          <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
            Global Trade • Sourcing • Market Access • Execution
          </p>

        </div>

      </div>

    </section>
  );
}