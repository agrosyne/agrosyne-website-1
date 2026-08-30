"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact-form"
      className="bg-[#f7f7f5] py-24 lg:py-15"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT SIDE */}

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c89b57]">
              ----- YOUR INQUIRY -----
            </p>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#0B1F3A] sm:text-5xl">
              Tell us what
              <br />
              you need.
            </h2>

            <p className="mt-7 max-w-md text-lg leading-8 text-slate-600">
              Whether you're looking to source a product, explore a new
              market or discuss a trade opportunity, give us a few details
              and our team will take it from there.
            </p>

            <div className="mt-12 border-l-2 border-[#c89b57] pl-6">

              <p className="text-sm font-semibold text-[#0B1F3A]">
                Looking for something specific?
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Include the commodity, origin, destination, quantity or
                commercial requirement wherever possible.
              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="rounded-3xl bg-white p-7 shadow-xl sm:p-10 lg:p-12">

            {submitted ? (

              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#c89b57]/10">
                  <CheckCircle className="h-8 w-8 text-[#c89b57]" />
                </div>

                <h3 className="mt-7 text-3xl font-bold text-[#0B1F3A]">
                  Thank You.
                </h3>

                <p className="mt-4 max-w-md text-slate-600">
                  Your inquiry has been received. Our team will review the
                  details and get back to you.
                </p>

              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="space-y-7"
              >

                {/* Name + Company */}

                <div className="grid gap-7 sm:grid-cols-2">

                  <div>

                    <label className="text-sm font-semibold text-[#0B1F3A]">
                      Your Name
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      className="mt-3 w-full border-b border-slate-300 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c89b57]"
                    />

                  </div>

                  <div>

                    <label className="text-sm font-semibold text-[#0B1F3A]">
                      Company
                    </label>

                    <input
                      type="text"
                      placeholder="Company name"
                      className="mt-3 w-full border-b border-slate-300 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c89b57]"
                    />

                  </div>

                </div>

                {/* Email + Phone */}

                <div className="grid gap-7 sm:grid-cols-2">

                  <div>

                    <label className="text-sm font-semibold text-[#0B1F3A]">
                      Email
                    </label>

                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="mt-3 w-full border-b border-slate-300 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c89b57]"
                    />

                  </div>

                  <div>

                    <label className="text-sm font-semibold text-[#0B1F3A]">
                      Phone
                    </label>

                    <input
                     type="tel"
                     placeholder="+1 555 123 4567"
                     className="mt-3 w-full border-b border-slate-300 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c89b57]"
                    />

                  </div>

                </div>

                {/* Inquiry Type */}

                <div>

                  <label className="text-sm font-semibold text-[#0B1F3A]">
                    What can we help with?
                  </label>

                  <select
                    required
                    defaultValue=""
                    className="mt-3 w-full border-b border-slate-300 bg-transparent px-0 py-3 text-sm text-slate-500 outline-none transition focus:border-[#c89b57]"
                  >

                    <option value="" disabled>
                      Select an inquiry
                    </option>

                    <option value="buying">
                      I want to buy a commodity
                    </option>

                    <option value="selling">
                      I want to sell / supply a commodity
                    </option>

                    <option value="market">
                      Market / sourcing opportunity
                    </option>

                    <option value="partnership">
                      Business partnership
                    </option>

                    <option value="other">
                      Other inquiry
                    </option>

                  </select>

                </div>

                {/* Commodity */}

                <div>

                  <label className="text-sm font-semibold text-[#0B1F3A]">
                    Commodity / Product
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. Rice, Sugar, Pulses, Fertilizer..."
                    className="mt-3 w-full border-b border-slate-300 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c89b57]"
                  />

                </div>

                {/* Message */}

                <div>

                  <label className="text-sm font-semibold text-[#0B1F3A]">
                    Your Message
                  </label>

                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your requirement..."
                    className="mt-3 w-full resize-none border-b border-slate-300 bg-transparent px-0 py-3 text-sm leading-7 outline-none transition placeholder:text-slate-400 focus:border-[#c89b57]"
                  />

                </div>

                {/* Submit */}

                <div className="pt-3">

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#0B1F3A] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#162F55] sm:w-auto"
                  >
                    Send Inquiry
                    <ArrowRight className="h-5 w-5" />
                  </button>

                </div>

              </form>

            )}

          </div>

        </div>

      </div>
    </section>
  );
}