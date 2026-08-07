import Link from "next/link";
import { articleTeasers, engines, lifecycleStages } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
        <div>
          <div className="mb-5 text-[13px] font-semibold uppercase tracking-[0.12em] text-cyan">
            Decision &amp; Implementation Partner
          </div>
          <h1 className="mb-6 max-w-[620px] font-serif text-[38px] font-semibold leading-[1.1] text-offwhite sm:text-[46px] lg:text-[54px] lg:leading-[1.08]">
            Ecommerce guidance that turns into a working business.
          </h1>
          <p className="mb-9 max-w-[540px] text-[17px] leading-relaxed text-subtle">
            Merchantiva helps ecommerce entrepreneurs figure out the next right
            move, then helps them build it. From first idea through launch,
            growth, and an eventual sale.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-cyan px-7 py-3.5 text-[15px] font-semibold text-navy transition-colors hover:bg-cyan-hover"
            >
              Start Here
            </Link>
            <Link
              href="/services"
              className="rounded-md border border-white/30 px-7 py-3.5 text-[15px] font-semibold text-offwhite transition-colors hover:border-cyan hover:text-cyan"
            >
              Explore Services
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate px-7 pb-7 pt-8">
          <div className="mb-6 text-xs font-semibold uppercase tracking-[0.12em] text-cyan">
            The Merchantiva Lifecycle
          </div>
          <div className="flex flex-col gap-4.5 border-l-2 border-cyan/35 pl-5.5">
            {lifecycleStages.map((stage) => (
              <div key={stage.slug} className="relative">
                <div className="absolute -left-[29px] top-1 h-2 w-2 rounded-full bg-cyan" />
                <div className="text-sm font-semibold text-offwhite">
                  {stage.name}
                </div>
                <div className="mt-0.5 text-[12.5px] text-muted">
                  {stage.goal}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY SELECTOR */}
      <section className="bg-offwhite px-6 py-20 text-navy sm:px-8 lg:py-24">
        <div className="mx-auto mb-12 max-w-[640px] text-center">
          <h2 className="mb-3.5 font-serif text-[28px] font-semibold sm:text-[34px]">
            Where are you in your journey?
          </h2>
          <p className="text-base text-gray">
            Every ecommerce business moves through the same seven stages. Find
            yours.
          </p>
        </div>
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-4.5 sm:grid-cols-2 lg:grid-cols-4">
          {lifecycleStages.map((stage) => (
            <Link
              key={stage.slug}
              href={`/lifecycle#${stage.slug}`}
              className="block rounded-[10px] border border-navy/10 bg-white p-6 transition-colors hover:border-cyan"
            >
              <div className="mb-2.5 text-xs font-bold text-cyan">
                {stage.num}
              </div>
              <div className="mb-1.5 text-[17px] font-bold">{stage.name}</div>
              <div className="mb-3.5 text-[13.5px] leading-relaxed text-gray">
                {stage.goal}
              </div>
              <div className="text-[13px] font-semibold text-navy">
                Explore →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FOUR ENGINES */}
      <section className="bg-navy px-6 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto mb-14 max-w-[640px] text-center">
          <h2 className="mb-3.5 font-serif text-[28px] font-semibold text-offwhite sm:text-[32px]">
            Four connected engines
          </h2>
          <p className="text-base text-muted">
            Every decision and every build runs through the same system.
          </p>
        </div>
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {engines.map((engine) => (
            <div
              key={engine.num}
              className="border-white/10 pl-0 lg:border-l lg:px-7 lg:first:border-l-0 lg:first:pl-0"
            >
              <div className="mb-3.5 text-[13px] font-bold text-cyan">
                {engine.num}
              </div>
              <div className="mb-2.5 font-serif text-xl font-semibold text-offwhite">
                {engine.name}
              </div>
              <div className="text-sm leading-relaxed text-muted">
                {engine.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="bg-slate px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-7 text-center text-xs font-bold uppercase tracking-[0.12em] text-cyan">
            Social Proof
          </div>
          <div className="mb-10 flex flex-wrap justify-center gap-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="flex h-14 w-[140px] items-center justify-center rounded-md font-mono text-[11px] text-muted"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, rgba(255,255,255,0.06), rgba(255,255,255,0.06) 8px, transparent 8px, transparent 16px)",
                }}
              >
                [LOGO]
              </div>
            ))}
          </div>
          <div
            className="mx-auto max-w-[640px] rounded-[10px] p-8 text-center"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(255,255,255,0.04), rgba(255,255,255,0.04) 8px, transparent 8px, transparent 16px)",
            }}
          >
            <div className="mb-3 font-mono text-[13px] text-muted">
              [TESTIMONIAL PLACEHOLDER]
            </div>
            <div className="font-mono text-xs text-gray">
              [Name, Title, Company, PLACEHOLDER]
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCE TEASER */}
      <section className="bg-navy px-6 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-10 flex flex-col items-baseline justify-between gap-4 sm:flex-row">
            <div>
              <h2 className="mb-2.5 font-serif text-2xl font-semibold text-offwhite sm:text-[30px]">
                From the resource library
              </h2>
              <p className="text-sm text-muted">
                Free articles mapped to each stage of the lifecycle.
              </p>
            </div>
            <Link
              href="/resources"
              className="whitespace-nowrap text-sm font-semibold text-cyan transition-colors hover:text-cyan-hover"
            >
              View all resources →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articleTeasers.map((article) => (
              <Link
                key={article.tag}
                href="/resources"
                className="block overflow-hidden rounded-[10px] border border-white/10 bg-slate transition-colors hover:border-cyan"
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="bg-slate px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="mb-3.5 font-serif text-2xl font-semibold text-offwhite sm:text-[28px]">
            Get the next right move in your inbox.
          </h2>
          <p className="mb-7 text-sm text-muted">
            One email. What&apos;s changing at your lifecycle stage, and what
            to do about it.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="you@business.com"
              className="rounded-md border border-white/15 bg-navy px-4 py-3.5 font-sans text-sm text-offwhite placeholder:text-gray sm:w-[280px]"
            />
            <Link
              href="/contact"
              className="whitespace-nowrap rounded-md bg-cyan px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-cyan-hover"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES CTA */}
      <section className="border-t border-white/10 bg-navy px-6 py-20 text-center sm:px-8 lg:py-24">
        <h2 className="mb-4 font-serif text-2xl font-semibold text-offwhite sm:text-[30px]">
          Ready to build?
        </h2>
        <p className="mb-8 text-base text-muted">
          See the four ways we take you from decision to done.
        </p>
        <Link
          href="/services"
          className="inline-block rounded-md bg-cyan px-8 py-3.5 text-[15px] font-semibold text-navy transition-colors hover:bg-cyan-hover"
        >
          Explore Services
        </Link>
      </section>
    </>
  );
}
