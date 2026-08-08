import type { Metadata } from "next";
import Link from "next/link";
import { academyItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Academy — Merchantiva",
  description:
    "Courses, tutorials, templates, and direct access to the people behind the research — the education layer of Merchantiva.",
};

export default function AcademyPage() {
  return (
    <>
      <div className="grid grid-cols-1 items-center gap-10 px-6 pb-16 pt-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pb-20 lg:pt-24">
        <div>
          <div className="mb-4.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-cyan">
            Academy
          </div>
          <h1 className="mb-4.5 max-w-[520px] font-serif text-[32px] font-semibold leading-[1.1] text-offwhite sm:text-[44px]">
            Build your own decision-making skill.
          </h1>
          <p className="mb-8 max-w-[480px] text-base leading-relaxed text-muted">
            Courses, tutorials, templates, and direct access to the people
            behind the research. The education layer of Merchantiva, for
            entrepreneurs who want to understand the why, not just get the
            answer.
          </p>
          <Link
            href="/start"
            className="inline-block rounded-md bg-cyan px-7 py-3.5 text-[15px] font-semibold text-navy transition-colors hover:bg-cyan-hover"
          >
            Join the waitlist
          </Link>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate p-8 text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-cyan">
            Pricing
          </div>
          <div className="font-mono text-[15px] text-muted">
            [PLACEHOLDER]
          </div>
        </div>
      </div>

      <div className="px-6 pb-20 sm:px-8 lg:pb-24">
        <div className="mx-auto mb-10 max-w-[640px] text-center">
          <h2 className="font-serif text-2xl font-semibold text-offwhite sm:text-[30px]">
            What&apos;s included
          </h2>
        </div>
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-4 sm:gap-4.5 lg:grid-cols-4">
          {academyItems.map((item) => (
            <div
              key={item.name}
              className="rounded-[10px] border border-white/10 p-6"
            >
              <div className="mb-2 text-[15px] font-semibold text-offwhite">
                {item.name}
              </div>
              <div className="text-[13.5px] leading-relaxed text-muted">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate px-6 py-16 text-center sm:px-8">
        <h2 className="mb-3.5 font-serif text-2xl font-semibold text-offwhite sm:text-[26px]">
          Get notified when Academy opens up.
        </h2>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="you@business.com"
            className="rounded-md border border-white/15 bg-navy px-4 py-3.5 font-sans text-sm text-offwhite placeholder:text-gray sm:w-[280px]"
          />
          <Link
            href="/start"
            className="whitespace-nowrap rounded-md bg-cyan px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-cyan-hover"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </>
  );
}
