"use client";

import { useMemo, useState } from "react";
import { resourceArticles, resourceTags } from "@/lib/content";

export default function ArticleFilter() {
  const [activeTag, setActiveTag] = useState<string>("All");

  const filtered = useMemo(
    () =>
      activeTag === "All"
        ? resourceArticles
        : resourceArticles.filter((a) => a.tag === activeTag),
    [activeTag],
  );

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2.5">
        {resourceTags.map((tag) => {
          const isActive = tag === activeTag;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`rounded-full border px-4 py-2 text-[13.5px] font-medium transition-colors ${
                isActive
                  ? "border-cyan text-cyan"
                  : "border-white/15 text-offwhite hover:border-cyan hover:text-cyan"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <div className="mx-auto mt-10 grid max-w-[1240px] grid-cols-1 gap-6 px-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
        {filtered.map((article, i) => (
          <div
            key={`${article.tag}-${i}`}
            className="overflow-hidden rounded-[10px] border border-white/10 bg-slate"
          >
            <div
              className="flex h-[140px] items-center justify-center font-mono text-[11px] text-gray"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05) 8px, transparent 8px, transparent 16px)",
              }}
            >
              [ARTICLE IMAGE]
            </div>
            <div className="p-5">
              <div className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.08em] text-cyan">
                {article.tag}
              </div>
              <div className="font-mono text-[13.5px] leading-relaxed text-offwhite">
                {article.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
