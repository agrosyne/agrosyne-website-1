"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setError("");

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError("Please enter your email address.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: trimmedEmail,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error ||
            "Unable to subscribe at this time."
        );
      }

      setSubmitted(true);
      setEmail("");
    } catch (error) {
      console.error(
        "Newsletter subscription failed:",
        error
      );

      setError(
        error instanceof Error
          ? error.message
          : "Unable to subscribe at this time."
      );
    } finally {
      setLoading(false);
    }
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
          Receive market intelligence, trade insights and
          Agrosyne updates designed to help businesses stay
          informed about global commodity markets.
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
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              placeholder="Enter your email address"
              disabled={loading}
              className="h-14 flex-1 rounded-lg border border-white/20 bg-white px-5 text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#c89b57] disabled:cursor-not-allowed disabled:opacity-70"
            />

            <button
              type="submit"
              disabled={loading}
              className="h-14 rounded-lg bg-[#c89b57] px-8 font-semibold text-white transition hover:bg-[#b58948] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        ) : (
          <div className="mx-auto mt-10 max-w-2xl rounded-lg border border-[#c89b57]/40 bg-white/10 px-6 py-4 text-[#f0d5a5]">
            Thank you for subscribing to Agrosyne Insights.
          </div>
        )}

        {/* Error */}

        {error && (
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-red-300">
            {error}
          </p>
        )}

        {/* Small note */}

        <p className="mt-5 text-sm text-slate-400">
          We respect your inbox. No unnecessary emails.
        </p>

      </div>
    </section>
  );
}