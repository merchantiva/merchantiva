"use client";

import { useState } from "react";
import { contactStages } from "@/lib/content";

export default function ContactForm() {
  const [selectedStage, setSelectedStage] = useState<string | null>(null);

  return (
    <div className="rounded-2xl border border-white/10 bg-slate p-8 sm:p-10">
      <div className="mb-6.5">
        <div className="mb-3 text-[13px] font-semibold text-offwhite">
          Where are you in your journey?
        </div>
        <div className="flex flex-wrap gap-2">
          {contactStages.map((stage) => {
            const isActive = stage === selectedStage;
            return (
              <button
                key={stage}
                type="button"
                onClick={() => setSelectedStage(stage)}
                className={`rounded-full border px-3.5 py-2 text-[13px] font-medium transition-colors ${
                  isActive
                    ? "border-cyan text-cyan"
                    : "border-white/15 text-offwhite hover:border-cyan hover:text-cyan"
                }`}
              >
                {stage}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-5.5">
        <label htmlFor="need" className="mb-2.5 block text-[13px] font-semibold text-offwhite">
          What do you need?
        </label>
        <textarea
          id="need"
          placeholder="A sentence or two is enough."
          className="min-h-[84px] w-full resize-y rounded-md border border-white/15 bg-navy px-4 py-3.5 font-sans text-sm text-offwhite placeholder:text-gray"
        />
      </div>

      <div className="mb-6.5">
        <label htmlFor="email" className="mb-2.5 block text-[13px] font-semibold text-offwhite">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@business.com"
          className="w-full rounded-md border border-white/15 bg-navy px-4 py-3.5 font-sans text-sm text-offwhite placeholder:text-gray"
        />
      </div>

      <button
        type="button"
        className="w-full rounded-md bg-cyan py-3.5 text-[15px] font-semibold text-navy transition-colors hover:bg-cyan-hover"
      >
        Submit
      </button>
    </div>
  );
}
