"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Which sugar products do you supply?",
    answer:
      "We specialize in Brazilian ICUMSA 45 refined white sugar and VHP (Very High Polarization) raw sugar for international wholesale and industrial buyers.",
  },
  {
    question: "What is ICUMSA 45 sugar?",
    answer:
      "ICUMSA 45 is a highly refined white sugar widely used by food manufacturers, beverage companies, wholesalers and retail packers due to its high purity and consistent quality.",
  },
  {
    question: "What is VHP sugar?",
    answer:
      "VHP (Very High Polarization) sugar is a premium raw sugar primarily used by industrial refiners and large-scale food processing companies before further refining.",
  },
  {
    question: "Can you supply spot orders and long-term contracts?",
    answer:
      "Yes. We support both spot purchases and long-term contract supply programs, depending on your commercial requirements and shipment schedule.",
  },
  {
    question: "What payment terms do you accept?",
    answer:
      "Payment terms are structured according to the commercial agreement and may include SBLC, DLC, Letter of Credit or other mutually agreed trade finance instruments.",
  },
  {
    question: "Do you arrange SGS inspection?",
    answer:
      "Yes. Independent SGS or equivalent third-party inspection can be arranged where required to verify quality, quantity and loading before shipment.",
  },
  {
    question: "Which Incoterms do you support?",
    answer:
      "We can structure transactions under commonly used international trade terms including FOB, CFR and CIF, depending on the agreed commercial arrangement.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "Simply share your required sugar grade, quantity, destination port, preferred Incoterm and payment terms. Our team will review your requirements and issue a detailed Full Corporate Offer (FCO) together with the relevant commercial terms for your evaluation.",
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