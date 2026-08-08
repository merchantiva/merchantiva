"use client";

import { useState } from "react";
import Link from "next/link";
import { primaryLifecycleStages } from "@/lib/content";
import { submitLead, CALENDLY_URL } from "@/lib/leadCapture";

type Status = "idle" | "submitting" | "success" | "error";

export default function StageFunnel() {
  const [selectedSlug, setSelectedSlug] = useState(
    primaryLifecycleStages[0].slug,
  );
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const selected =
    primaryLifecycleStages.find((s) => s.slug === selectedSlug) ??
    primaryLifecycleStages[0];

  function selectStage(slug: string) {
    if (slug === selectedSlug) return;
    setSelectedSlug(slug);
    setStatus("idle");
    setEmail("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "submitting") return;
    setStatus("submitting");
    const ok = await submitLead({
      email,
      stage: selected.name,
      leadMagnet: selected.leadMagnet,
      _subject: `New lead — ${selected.name}`,
    });
    setStatus(ok ? "success" : "error");
  }

  return (
    <div>
      <div className="mx-auto mb-8 grid max-w-[1240px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {primaryLifecycleStages.map((stage) => {
          const isActive = stage.slug === selectedSlug;
          return (
            <button
              key={stage.slug}
              type="button"
              onClick={() => selectStage(stage.slug)}
              aria-pressed={isActive}
              className={`rounded-[10px] border p-5 text-left transition-colors ${
                isActive
                  ? "border-cyan bg-white"
                  : "border-navy/10 bg-white hover:border-cyan/60"
              }`}
            >
              <div className="mb-2 text-xs font-bold text-cyan">
                {stage.num}
              </div>
              <div className="mb-1.5 text-[15.5px] font-bold text-navy">
                {stage.name}
              </div>
              <div className="text-[13px] font-semibold text-navy">
                {isActive ? "Selected" : "Select →"}
              </div>
            </button>
          );
        })}
      </div>

      <div
        key={selected.slug}
        className="mx-auto max-w-[760px] rounded-2xl border border-navy/10 bg-white p-8 sm:p-10"
      >
        <div className="mb-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-cyan">
          Your next step
        </div>
        <h3 className="mb-3 font-serif text-[22px] font-semibold text-navy sm:text-[26px]">
          {selected.nextStep}
        </h3>
        <p className="mb-7 text-[15px] leading-relaxed text-gray">
          {selected.howWeHelp}
        </p>

        {status !== "success" ? (
          <form
            onSubmit={handleSubmit}
            className="mb-6 rounded-xl border border-navy/10 bg-offwhite p-5.5 sm:p-6"
          >
            <div className="mb-3.5 text-[13px] font-semibold text-navy">
              Free: <span className="font-mono">{selected.leadMagnet}</span>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@business.com"
                className="w-full rounded-md border border-navy/15 bg-white px-4 py-3.5 font-sans text-sm text-navy placeholder:text-gray sm:flex-1"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="whitespace-nowrap rounded-md bg-cyan px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-cyan-hover disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : "Send it to me"}
              </button>
            </div>
            {status === "error" && (
              <p className="mt-3 text-[13px] text-red-400">
                Something went wrong sending that — mind trying again?
              </p>
            )}
          </form>
        ) : (
          <div className="mb-6 rounded-xl border border-cyan/30 bg-offwhite p-5.5 sm:p-6">
            <div className="mb-4 text-[14.5px] leading-relaxed text-navy">
              Check your inbox — {selected.leadMagnet} is on its way.
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5">
              <Link
                href={selected.postSignupHref}
                className="text-[13.5px] font-semibold text-cyan transition-colors hover:text-cyan-hover"
              >
                {selected.postSignupCta}
              </Link>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-cyan px-5 py-2.5 text-[13.5px] font-semibold text-navy transition-colors hover:bg-cyan-hover"
              >
                Talk to us →
              </a>
            </div>
          </div>
        )}

        <Link
          href={`/lifecycle#${selected.slug}`}
          className="text-[13.5px] font-semibold text-navy/70 underline decoration-navy/20 underline-offset-4 transition-colors hover:text-cyan"
        >
          See the full {selected.name} breakdown →
        </Link>
      </div>
    </div>
  );
}
