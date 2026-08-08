import type { Metadata } from "next";
import Link from "next/link";
import { resourceDownloads } from "@/lib/content";
import ArticleFilter from "./ArticleFilter";

export const metadata: Metadata = {
  title: "Resources — Merchantiva",
  description:
    "Free articles and guides mapped to the seven stages of the ecommerce lifecycle.",
};

export default function ResourcesPage() {
  return (
    <>
      <div className="px-6 pb-10 pt-20 text-center sm:px-8 lg:pt-24">
        <div className="mb-4.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-cyan">
          Resources
        </div>
        <h1 className="mb-4.5 font-serif text-[32px] font-semibold text-offwhite sm:text-[44px]">
          Free guidance for every stage.
        </h1>
        <p className="mx-auto mb-8 max-w-[600px] text-base text-muted">
          Articles and guides mapped to the seven stages of the lifecycle.
          Free, and grounded in research.
        </p>
      </div>

      <div className="px-6 pb-20 sm:px-8 lg:pb-24">
        <ArticleFilter />
      </div>

      <div className="bg-slate px-6 py-16 text-center sm:px-8">
        <h2 className="mb-3.5 font-serif text-2xl font-semibold text-offwhite sm:text-[26px]">
          Get the next right move in your inbox.
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
            Subscribe
          </Link>
        </div>
      </div>

      <div className="px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto mb-10 max-w-[640px] text-center">
          <h2 className="mb-3 font-serif text-2xl font-semibold text-offwhite sm:text-[28px]">
            Downloads
          </h2>
          <p className="text-sm text-muted">
            One guide per lifecycle stage — the same ones from the stage
            selector on the Home and Start Here pages.
          </p>
        </div>
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-4 sm:gap-4.5 lg:grid-cols-5">
          {resourceDownloads.map((dl) => (
            <div
              key={dl}
              className="rounded-[10px] border border-white/10 p-5.5 text-center"
            >
              <div className="mb-3.5 font-mono text-[13px] leading-snug text-muted">
                {dl}
              </div>
              <div className="text-[13px] font-semibold text-cyan">
                Download →
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
