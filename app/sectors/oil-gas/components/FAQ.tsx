"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Which energy commodities do you supply?",
    answer:
      "We currently supply EN590 Diesel, Jet Fuel A1, Bitumen and Thermal Coal through trusted international supplier networks for qualified buyers worldwide.",
  },
  {
    question: "Do you support both spot and contract transactions?",
    answer:
      "Yes. We facilitate both spot purchases and long-term supply agreements depending on the commodity, supplier availability and commercial requirements.",
  },
  {
    question: "Which countries can you supply to?",
    answer:
      "We work with qualified buyers across multiple international markets and support shipments based on destination-specific trade regulations and logistics requirements.",
  },
  {
    question: "What payment terms do you work with?",
    answer:
      "Payment terms are structured according to the commercial agreement and supplier requirements. Accepted instruments may include LC, DLC, SBLC or other mutually agreed trade finance solutions.",
  },
  {
    question: "Can you arrange inspection services?",
    answer:
      "Yes. Independent inspection agencies such as SGS, Bureau Veritas (BV) or Intertek can be arranged whenever required under the agreed commercial terms.",
  },
  {
    question: "Which Incoterms do you support?",
    answer:
      "Depending on the commodity and transaction structure, we can support internationally recognized Incoterms including FOB, CIF, CFR and other mutually agreed delivery terms.",
  },
  {
    question: "Do you provide complete export documentation?",
    answer:
      "Yes. We coordinate the preparation of commercial, shipping and export documentation required for each transaction in accordance with the agreed contractual terms.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "Simply share the required commodity, quantity, destination port, preferred Incoterm and payment preference. Our team will review your requirements and review your requirements and determine the appropriate commercial structure before issuing an offer.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-10">

      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b57]">
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Frequently Asked
            <br />
            Questions
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Find answers to some of the most common questions about our
            sugar sourcing, export process and international supply
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