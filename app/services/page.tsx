import type { Metadata } from "next";
import Link from "next/link";
import { capabilities, serviceOffers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services — Merchantiva",
  description:
    "Four ways we take you from decision to done. Each engagement pairs research and strategy with hands-on execution.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="px-6 pb-14 pt-20 text-center sm:px-8 lg:pt-24">
        <div className="mb-4.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-cyan">
          Services
        </div>
        <h1 className="mx-auto mb-4.5 max-w-[760px] font-serif text-[32px] font-semibold text-offwhite sm:text-[44px]">
          Four ways we take you from decision to done.
        </h1>
        <p className="mx-auto max-w-[620px] text-base text-muted">
          Each engagement pairs research and strategy with hands-on
          execution. You get a recommendation, and the work to carry it out.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1344px] grid-cols-1 gap-6 px-6 pb-20 sm:px-8 md:grid-cols-2 lg:pb-24">
        {serviceOffers.map((offer) => (
          <div
            key={offer.num}
            className="rounded-2xl border border-white/10 bg-slate p-8 sm:p-10"
          >
            <div className="mb-4 text-[13px] font-bold text-cyan">
              {offer.num}
            </div>
            <h2 className="mb-2.5 font-serif text-2xl font-semibold text-offwhite">
              {offer.name}
            </h2>
            <p className="mb-6 text-base leading-relaxed text-[#C3CAD3]">
              {offer.outcome}
            </p>
            <div className="mb-7 flex flex-col gap-2.5">
              {offer.steps.map((step) => (
                <div key={step} className="flex gap-2.5 text-[13.5px] text-muted">
                  <span className="text-cyan">→</span>
                  {step}
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-block rounded-md bg-cyan px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-cyan-hover"
            >
              Start Here
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-[#12161c] px-6 py-16 sm:px-8">
        <div className="mx-auto mb-10 max-w-[640px] text-center">
          <h2 className="mb-3 font-serif text-2xl font-semibold text-offwhite sm:text-[28px]">
            How we work
          </h2>
          <p className="text-sm text-muted">
            The broader system behind every engagement.
          </p>
        </div>
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {capabilities.map((cap) => (
            <div
              key={cap.name}
              className="rounded-lg border border-white/10 p-4.5"
            >
              <div className="mb-1.5 text-sm font-semibold text-offwhite">
                {cap.name}
              </div>
              <div className="text-[12.5px] leading-snug text-gray">
                {cap.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
