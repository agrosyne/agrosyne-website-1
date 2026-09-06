import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ReactNode } from "react";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
};

export default function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  children,
}: LegalPageProps) {
  return (
    <>
      <Header />

      <main className="bg-white text-[#0B1F3A]">
        {/* PAGE HEADER */}
        <section className="border-b border-slate-200 bg-[#f7f7f5]">
          <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c89b57]">
              {eyebrow}
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
              {intro}
            </p>

            <p className="mt-6 text-sm font-medium text-slate-500">
              Last updated: {updated}
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section>
          <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="space-y-12 text-[16px] leading-8 text-slate-600">
              {children}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export function LegalSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="scroll-mt-24">
      <div className="mb-4 flex items-baseline gap-4">
        <span className="text-sm font-semibold tracking-wider text-[#c89b57]">
          {number}
        </span>

        <h2 className="text-2xl font-bold tracking-tight text-[#0B1F3A] sm:text-3xl">
          {title}
        </h2>
      </div>

      <div className="space-y-4">{children}</div>
    </section>
  );
}

export function LegalList({ children }: { children: ReactNode }) {
  return (
    <ul className="list-disc space-y-2 pl-6 marker:text-[#c89b57]">
      {children}
    </ul>
  );
}

export function LegalNote({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-2 border-[#c89b57] bg-[#f7f7f5] px-6 py-5 text-slate-600">
      {children}
    </div>
  );
}