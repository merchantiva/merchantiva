"use client";

import { useState } from "react";
import { submitLead, CALENDLY_URL } from "@/lib/leadCapture";

type Status = "idle" | "submitting" | "success" | "error";

export default function SimpleContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "submitting") return;
    setStatus("submitting");
    const ok = await submitLead({
      email,
      message,
      _subject: "New Start Here contact",
    });
    setStatus(ok ? "success" : "error");
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-cyan/30 bg-slate p-8 text-center sm:p-10">
        <p className="mb-5 text-[15px] leading-relaxed text-offwhite">
          Got it — we&apos;ll follow up by email with the next right move.
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md bg-cyan px-6 py-3 text-[14px] font-semibold text-navy transition-colors hover:bg-cyan-hover"
        >
          Or just book a time now →
        </a>
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@business.com"
          className="w-full rounded-md border border-white/15 bg-navy px-4 py-3.5 font-sans text-sm text-offwhite placeholder:text-gray"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-cyan py-3.5 text-[15px] font-semibold text-navy transition-colors hover:bg-cyan-hover disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Submit"}
      </button>
      {status === "error" && (
        <p className="mt-3 text-[13px] text-red-400">
          Something went wrong sending that — mind trying again?
        </p>
      )}
    </form>
  );
}
