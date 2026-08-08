import type { Metadata } from "next";
import Link from "next/link";
import {
  lifecycleStageDetails,
  primaryLifecycleStages,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Lifecycle — Merchantiva",
  description:
    "Every ecommerce business moves through the same five stages, from first idea to eventual sale. Find yours, see the questions it answers, and what we do at that stage.",
};

export default function LifecyclePage() {
  return (
    <>
      <div className="px-6 pb-14 pt-20 text-center sm:px-8 lg:pt-24">
        <div className="mb-4.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-cyan">
          The Lifecycle
        </div>
        <h1 className="mb-4.5 font-serif text-[32px] font-semibold text-offwhite sm:text-[44px]">
          Five stages. One partner.
        </h1>
        <p className="mx-auto mb-9 max-w-[640px] text-base text-muted">
          Every ecommerce business moves through the same five stages, from
          first idea to eventual sale. Find yours, see the questions it
          answers, and what we do at that stage.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {primaryLifecycleStages.map((stage) => (
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

      {primaryLifecycleStages.map((stage, i) => {
        const subStages = lifecycleStageDetails.filter((sub) =>
          stage.subStageSlugs.includes(sub.slug),
        );
        const bg = i % 2 === 0 ? "bg-navy" : "bg-slate";

        return (
          <section
            key={stage.slug}
            id={stage.slug}
            className={`scroll-mt-24 px-6 py-16 sm:px-8 lg:py-18 ${bg}`}
          >
            <div className="mx-auto max-w-[1240px]">
              <div className="mb-10 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
                <div>
                  <div className="mb-3.5 text-[13px] font-bold text-cyan">
                    Stage {stage.num} of 5
                  </div>
                  <h2 className="mb-3 font-serif text-[26px] font-semibold text-offwhite sm:text-[32px]">
                    {stage.name}
                  </h2>
                  <p className="mb-6 max-w-[440px] text-[15.5px] italic leading-relaxed text-[#C3CAD3]">
                    &ldquo;{stage.jtbd}&rdquo;
                  </p>
                  <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-offwhite">
                    Where you are
                  </div>
                  <p className="max-w-[440px] text-[14.5px] leading-relaxed text-muted">
                    {stage.situation}
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-navy/35 p-8">
                  <div className="mb-4 text-xs font-bold uppercase tracking-[0.08em] text-offwhite">
                    Your progress
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex-1 rounded-md border border-white/10 bg-navy/40 p-4 text-[14.5px] leading-relaxed text-muted">
                      {stage.progressFrom}
                    </div>
                    <div className="text-center text-cyan sm:px-1">→</div>
                    <div className="flex-1 rounded-md border border-cyan/30 bg-navy/40 p-4 text-[14.5px] leading-relaxed text-offwhite">
                      {stage.progressTo}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {subStages.map((sub) => (
                  <div
                    key={sub.slug}
                    id={sub.slug}
                    className="scroll-mt-24 rounded-xl border border-white/10 bg-navy/25 p-6"
                  >
                    <div className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-cyan">
                      {stage.name}
                    </div>
                    <h3 className="mb-2.5 font-serif text-lg font-semibold text-offwhite">
                      {sub.name}
                    </h3>
                    <p className="mb-4 text-[14px] leading-relaxed text-muted">
                      {sub.goal}
                    </p>
                    <div className="mb-2 text-xs font-bold uppercase tracking-[0.06em] text-offwhite">
                      Questions it answers
                    </div>
                    <div className="mb-4 flex flex-col gap-1.5">
                      {sub.questions.map((q) => (
                        <div
                          key={q}
                          className="text-[13.5px] leading-relaxed text-[#C3CAD3]"
                        >
                          &ldquo;{q}&rdquo;
                        </div>
                      ))}
                    </div>
                    <div className="mb-2 text-xs font-bold uppercase tracking-[0.06em] text-offwhite">
                      What we do
                    </div>
                    <div className="mb-5 flex flex-col gap-1.5">
                      {sub.actions.map((action) => (
                        <div
                          key={action}
                          className="flex gap-2 text-[13.5px] text-[#C3CAD3]"
                        >
                          <span className="text-cyan">→</span>
                          {action}
                        </div>
                      ))}
                    </div>
                    <Link
                      href={sub.ctaHref}
                      className="inline-block rounded-md bg-cyan px-5 py-2.5 text-[13.5px] font-semibold text-navy transition-colors hover:bg-cyan-hover"
                    >
                      {sub.cta}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
