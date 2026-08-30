"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email) return;

    setSubmitted(true);
    setEmail("");
  }

  return (
    <section className="bg-[#0B1F3A] py-10">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

        {/* Eyebrow */}

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
          ----- STAY INFORMED -----
        </p>

        {/* Heading */}

        <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Global Commodity Insights,
          <br className="hidden sm:block" />
          Delivered to Your Inbox.
        </h2>

        {/* Description */}

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Receive market intelligence, trade insights and Agrosyne updates
          designed to help businesses stay informed about global commodity
          markets.
        </p>

        {/* Form */}

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="h-14 flex-1 rounded-lg border border-white/20 bg-white px-5 text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#c89b57]"
            />

            <button
              type="submit"
              className="h-14 rounded-lg bg-[#c89b57] px-8 font-semibold text-white transition hover:bg-[#b58948]"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="mx-auto mt-10 max-w-2xl rounded-lg border border-[#c89b57]/40 bg-white/10 px-6 py-4 text-[#f0d5a5]">
            Thank you for subscribing to Agrosyne Insights.
          </div>
        )}

        {/* Small note */}

        <p className="mt-5 text-sm text-slate-400">
          We respect your inbox. No unnecessary emails.
        </p>

      </div>
    </section>
  );
}