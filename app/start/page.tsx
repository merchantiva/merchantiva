import type { Metadata } from "next";
import StageFunnel from "@/components/StageFunnel";
import SimpleContactForm from "@/components/SimpleContactForm";

export const metadata: Metadata = {
  title: "Start Here — Merchantiva",
  description:
    "Pick your stage. Get a specific next step and something free to help you take it.",
};

export default function StartPage() {
  return (
    <>
      <div className="px-6 pb-10 pt-20 text-center sm:px-8 lg:pt-24">
        <div className="mb-4.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-cyan">
          Start Here
        </div>
        <h1 className="mb-4.5 font-serif text-[32px] font-semibold text-offwhite sm:text-[44px]">
          Where are you in your journey?
        </h1>
        <p className="mx-auto max-w-[600px] text-base text-muted">
          Pick your stage. Get a specific next step and something free to
          help you take it.
        </p>
      </div>

      <div className="bg-offwhite px-6 py-16 text-navy sm:px-8 lg:py-20">
        <StageFunnel />
      </div>

      <div className="px-6 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[560px]">
          <div className="mb-8 text-center">
            <h2 className="mb-3 font-serif text-[22px] font-semibold text-offwhite sm:text-[26px]">
              Rather talk to a person?
            </h2>
            <p className="text-[14.5px] text-muted">
              Tell us what you need and we&apos;ll follow up directly.
            </p>
          </div>
          <SimpleContactForm />
        </div>
      </div>
    </>
  );
}
