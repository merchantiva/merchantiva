import type { Metadata } from "next";
import Link from "next/link";
import { lifecycleStageDetails } from "@/lib/content";

export const metadata: Metadata = {
  title: "Lifecycle — Merchantiva",
  description:
    "Every ecommerce business moves through the same seven stages, from first idea to eventual sale. Find yours, see the questions it answers, and what we do at that stage.",
};

export default function LifecyclePage() {
  return (
    <>
      <div className="px-6 pb-14 pt-20 text-center sm:px-8 lg:pt-24">
        <div className="mb-4.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-cyan">
          The Lifecycle
        </div>
        <h1 className="mb-4.5 font-serif text-[32px] font-semibold text-offwhite sm:text-[44px]">
          Seven stages. One partner.
        </h1>
        <p className="mx-auto mb-9 max-w-[640px] text-base text-muted">
          Every ecommerce business moves through the same seven stages, from
          first idea to eventual sale. Find yours, see the questions it
          answers, and what we do at that stage.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {lifecycleStageDetails.map((stage) => (
            <a
              key={stage.slug}
              href={`#${stage.slug}`}
              className="rounded-full border border-white/15 px-4 py-2 text-[13.5px] font-medium text-offwhite transition-colors hover:border-cyan hover:text-cyan"
            >
              {stage.name}
            </a>
          ))}
        </div>
      </div>

      {lifecycleStageDetails.map((stage) => (
        <section
          key={stage.slug}
          id={stage.slug}
          className={`grid scroll-mt-24 grid-cols-1 gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:py-18 ${
            stage.bg === "navy" ? "bg-navy" : "bg-slate"
          }`}
        >
          <div>
            <div className="mb-3.5 text-[13px] font-bold text-cyan">
              Stage {stage.num} of 7
            </div>
            <h2 className="mb-3 font-serif text-[26px] font-semibold text-offwhite sm:text-[32px]">
              {stage.name}
            </h2>
            <p className="mb-6 max-w-[420px] text-[15.5px] leading-relaxed text-muted">
              {stage.goal}
            </p>
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-offwhite">
              Questions it answers
            </div>
            <div className="flex flex-col gap-2">
              {stage.questions.map((q) => (
                <div key={q} className="text-[14.5px] leading-relaxed text-[#C3CAD3]">
                  &ldquo;{q}&rdquo;
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-navy/35 p-8">
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.08em] text-offwhite">
              What we do at this stage
            </div>
            <div className="mb-7 flex flex-col gap-2.5">
              {stage.actions.map((action) => (
                <div
                  key={action}
                  className="flex gap-2.5 text-[14.5px] text-[#C3CAD3]"
                >
                  <span className="text-cyan">→</span>
                  {action}
                </div>
              ))}
            </div>
            <Link
              href={stage.ctaHref}
              className="inline-block rounded-md bg-cyan px-6.5 py-3 text-[14.5px] font-semibold text-navy transition-colors hover:bg-cyan-hover"
            >
              {stage.cta}
            </Link>
          </div>
        </section>
      ))}
    </>
  );
}
