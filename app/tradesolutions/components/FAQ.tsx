"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What trade solutions does Agrosyne provide?",
    answer:
      "We support international commodity transactions through supplier sourcing, buyer development, commercial coordination, trade documentation and logistics support across global markets.",
  },
  {
    question: "Do you work with both importers and exporters?",
    answer:
      "Yes. We work with importers, exporters, manufacturers, distributors and industrial buyers, helping connect reliable business partners for international commodity trade.",
  },
  {
    question: "Can you source products based on our requirements?",
    answer:
      "Yes. Every sourcing project is tailored to your product specifications, quality standards, origin preferences and commercial objectives through our trusted supplier network.",
  },
  {
    question: "Do you assist with international shipping and documentation?",
    answer:
      "Yes. We coordinate commercial documentation, shipment planning and logistics with trusted partners to help ensure smooth international trade execution.",
  },
  {
    question: "Which industries do you support?",
    answer:
      "Our trade solutions support businesses across agriculture, fertilizers, metals, energy and other industrial commodity sectors, depending on sourcing and market requirements.",
  },
  {
    question: "How can we start working with Agrosyne?",
    answer:
      "Simply contact our team with your sourcing requirements or trading objectives. We'll discuss your needs and recommend the most suitable trade solution for your business.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-5">

      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Answer To Your
            <br />
            Trade Questions
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Find answers to some of the most common questions about our
            trade solution, sourcing process and international commodity
            transaction.
          </p>

        </div>

        {/* Accordion */}

        <div className="mt-14 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`h-6 w-6 text-[#c89b57] transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  open === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-slate-100 px-8 py-6">
                    <p className="leading-8 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}