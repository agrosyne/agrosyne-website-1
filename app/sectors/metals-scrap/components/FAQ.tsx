"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Which metals and scrap products do you supply?",
    answer:
      "We currently supply Aluminium A7 Ingots, Copper Scrap, UBC (Used Beverage Can) Scrap and HMS 1 & 2 Scrap through trusted international supplier networks for qualified industrial buyers worldwide.",
  },
  {
    question: "Do you support both spot and contract transactions?",
    answer:
      "Yes. We facilitate both spot purchases and long-term supply agreements based on buyer requirements, supplier availability and commercial terms.",
  },
  {
    question: "Can you supply bulk container quantities?",
    answer:
      "Yes. We support bulk container shipments for manufacturers, foundries, recyclers, industrial buyers and international trading companies.",
  },
  {
    question: "How do you ensure material quality?",
    answer:
      "Materials are sourced through trusted supplier networks and supplied according to the agreed technical specifications, grades and commercial requirements.",
  },
  {
    question: "Can independent inspection be arranged?",
    answer:
      "Yes. Independent inspection agencies such as SGS, Bureau Veritas (BV) or Intertek can be arranged whenever required under the agreed commercial terms.",
  },
  {
    question: "Do you provide export documentation?",
    answer:
      "Yes. We coordinate complete commercial, shipping and export documentation required for international transactions in accordance with the agreed contractual terms.",
  },
  {
    question: "Which Incoterms do you support?",
    answer:
      "Depending on the commodity and transaction structure, we can support internationally recognized Incoterms including FOB, CIF, CFR and other mutually agreed delivery terms.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "Simply share the required commodity, grade, quantity, destination port, preferred Incoterm and any technical specifications. Our team will review your requirements and provide a detailed commercial offer for your evaluation",
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