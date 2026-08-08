"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Which rice varieties do you export?",
    answer:
      "We supply both premium Basmati and Non-Basmati rice sourced from trusted Indian mills. Product availability depends on buyer requirements and export specifications.",
  },
  {
    question: "Can you supply bulk container quantities?",
    answer:
      "Yes. We handle bulk export shipments for wholesalers, distributors, food manufacturers and institutional buyers worldwide.",
  },
  {
    question: "Do you provide private label packaging?",
    answer:
      "Yes. We support customized retail, wholesale and private label packaging based on your branding and market requirements.",
  },
  {
    question: "Which countries do you export to?",
    answer:
      "We work with international buyers across multiple global markets, supporting exports according to destination-specific documentation and import requirements.",
  },
  {
    question: "Can you arrange export documentation?",
    answer:
      "Yes. Commercial invoices, packing lists, certificates of origin and other required export documents are prepared according to shipment requirements.",
  },
  {
    question: "How do you ensure product quality?",
    answer:
      "Every shipment is sourced through verified rice mills and undergoes quality verification before dispatch to ensure consistency and compliance with buyer specifications.",
  },
  {
    question: "What packaging options are available?",
    answer:
      "Packaging can be customized according to buyer requirements, including bulk export bags, retail packs and private label solutions.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "Simply contact our team with your preferred rice variety, quantity, destination country and packaging requirements. We'll prepare a detailed commercial quotation.",
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
            rice sourcing, export process and international supply
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