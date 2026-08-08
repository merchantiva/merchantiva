"use client";

import { useState } from "react";

export default function SimpleContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-cyan/30 bg-slate p-8 text-center sm:p-10">
        <p className="text-[15px] leading-relaxed text-offwhite">
          Got it — we&apos;ll follow up by email with the next right move.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-slate p-8 sm:p-10"
    >
      <div className="mb-5.5">
        <label
          htmlFor="need"
          className="mb-2.5 block text-[13px] font-semibold text-offwhite"
        >
          What do you need?
        </label>
        <textarea
          id="need"
          placeholder="A sentence or two is enough."
          className="min-h-[84px] w-full resize-y rounded-md border border-white/15 bg-navy px-4 py-3.5 font-sans text-sm text-offwhite placeholder:text-gray"
        />
      </div>

      <div className="mb-6.5">
        <label
          htmlFor="email"
          className="mb-2.5 block text-[13px] font-semibold text-offwhite"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="you@business.com"
          className="w-full rounded-md border border-white/15 bg-navy px-4 py-3.5 font-sans text-sm text-offwhite placeholder:text-gray"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-cyan py-3.5 text-[15px] font-semibold text-navy transition-colors hover:bg-cyan-hover"
      >
        Submit
      </button>
    </form>
  );
}
