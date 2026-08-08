"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/lifecycle", label: "Lifecycle" },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
  { href: "/academy", label: "Academy" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-offwhite transition-colors hover:text-cyan"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/start"
          className="hidden rounded-md bg-cyan px-[22px] py-[10px] text-sm font-semibold text-navy transition-colors hover:bg-cyan-hover lg:inline-block"
        >
          Start Here
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-offwhite lg:hidden"
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M1 1L17 13M17 1L1 13"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path d="M0 1H18" stroke="currentColor" strokeWidth="1.6" />
                <path d="M0 7H18" stroke="currentColor" strokeWidth="1.6" />
                <path d="M0 13H18" stroke="currentColor" strokeWidth="1.6" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy px-6 pb-6 lg:hidden">
          <nav className="flex flex-col gap-1 pt-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-[15px] font-medium text-offwhite transition-colors hover:text-cyan"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/start"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-md bg-cyan px-[22px] py-3 text-center text-sm font-semibold text-navy transition-colors hover:bg-cyan-hover"
          >
            Start Here
          </Link>
        </div>
      )}
    </header>
  );
}
