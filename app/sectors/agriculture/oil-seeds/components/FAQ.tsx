"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Which edible oils do you supply?",
    answer:
      "We currently supply premium refined Sunflower Oil and Soybean Oil sourced through trusted supplier networks for international wholesale and industrial buyers.",
  },
  {
    question: "Can you supply bulk container quantities?",
    answer:
      "Yes. We support full container load (FCL) shipments for wholesalers, distributors, food manufacturers and international trading companies.",
  },
  {
    question: "Do you provide private label packaging?",
    answer:
      "Yes. We offer flexible packaging solutions, including bulk packaging, retail packaging and private label options based on your market requirements.",
  },
  {
    question: "Which countries do you export to?",
    answer:
      "We work with buyers across multiple international markets and can support exports according to destination-specific import and documentation requirements.",
  },
  {
    question: "What packaging options are available?",
    answer:
      "Packaging options can be customized according to buyer requirements, including retail bottles, bulk containers and private label solutions.",
  },
  {
    question: "How do you ensure product quality?",
    answer:
      "Every shipment is sourced through verified supplier networks and quality checked before export to ensure consistency and compliance with agreed product specifications.",
  },
  {
    question: "Can you arrange export documentation?",
    answer:
      "Yes. We prepare complete export documentation, including commercial invoices, packing lists, certificates of origin and other shipment-specific documents as required.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "Simply share your required oil type, quantity, destination country, packaging preference and preferred Incoterms. Our team will review your requirements and provide a detailed commercial quotation with product specifications, pricing, packaging options and shipment terms tailored to your needs.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-10">

      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            ----- FREQUENTLY ASKED QUESTIONS -----
          </p>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Frequently Asked
            <br />
            Questions
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Find answers to some of the most common questions about our
            oil sourcing, export process and international supply
            capabilities.
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