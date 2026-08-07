import type { Metadata } from "next";
import { aboutNots, brandTraits } from "@/lib/content";

export const metadata: Metadata = {
  title: "About — Merchantiva",
  description:
    "The decision-and-implementation partner for ecommerce entrepreneurs. What is the next best decision for this ecommerce entrepreneur?",
};

export default function AboutPage() {
  return (
    <>
      <div className="px-6 pb-16 pt-20 text-center sm:px-8 lg:pt-24">
        <h1 className="mx-auto mb-4 max-w-[720px] font-serif text-[32px] font-semibold text-offwhite sm:text-[46px]">
          Better decisions. Better businesses.
        </h1>
        <p className="mx-auto max-w-[560px] text-base text-muted">
          The question behind every page: what is the next best decision for
          this ecommerce entrepreneur?
        </p>
      </div>

      <div className="mx-auto max-w-[900px] px-6 pb-20 sm:px-8 lg:pb-24">
        <div className="mb-14">
          <div className="mb-3.5 text-xs font-bold uppercase tracking-[0.1em] text-cyan">
            What Merchantiva is
          </div>
          <p className="text-lg leading-[1.7] text-offwhite">
            The decision-and-implementation partner for ecommerce
            entrepreneurs. Merchantiva helps entrepreneurs figure out what to
            do, then helps them do it, across the entire lifecycle of
            building an ecommerce business, from first idea to eventual sale.
          </p>
        </div>

        <div className="mb-14">
          <div className="mb-3.5 text-xs font-bold uppercase tracking-[0.1em] text-cyan">
            What Merchantiva is not
          </div>
          <div className="flex flex-col gap-2.5">
            {aboutNots.map((item) => (
              <div key={item} className="text-[15.5px] leading-relaxed text-[#C3CAD3]">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray">
            Research is a capability that informs decisions and
            implementation. It is never sold or presented as the standalone
            thing you&apos;re buying.
          </p>
        </div>

        <div className="mb-14 rounded-2xl border border-white/10 bg-slate p-8 sm:p-10">
          <div className="mb-3.5 text-xs font-bold uppercase tracking-[0.1em] text-cyan">
            Guiding principle
          </div>
          <p className="font-serif text-xl leading-snug text-offwhite sm:text-2xl">
            &ldquo;What is the next best decision for this ecommerce
            entrepreneur?&rdquo;
          </p>
        </div>

        <div>
          <div className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-cyan">
            Brand personality
          </div>
          <div className="flex flex-wrap gap-2.5">
            {brandTraits.map((trait) => (
              <div
                key={trait}
                className="rounded-full border border-white/15 px-4 py-2 text-[13.5px] text-offwhite"
              >
                {trait}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
