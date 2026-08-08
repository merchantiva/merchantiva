import Image from "next/image";
import Link from "next/link";

const exploreLinks = [
  { href: "/lifecycle", label: "Lifecycle" },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
];

const companyLinks = [
  { href: "/academy", label: "Academy" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy px-6 pb-8 pt-16 sm:px-8">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="col-span-2 md:col-span-1">
          <div className="mb-3.5 flex items-center gap-2.5">
            <Image src="/favicon.svg" alt="Merchantiva M mark" width={30} height={30} />
            <span className="text-[13px] font-bold tracking-[0.14em] text-offwhite">
              MERCHANTIVA
            </span>
          </div>
          <div className="mb-4 text-[11px] tracking-[0.08em] text-gray">
            BETTER DECISIONS. BETTER BUSINESSES.
          </div>
          <p className="max-w-[280px] text-[13.5px] leading-relaxed text-gray">
            The decision-and-implementation partner for ecommerce entrepreneurs.
          </p>
        </div>

        <div>
          <div className="mb-4 text-xs font-bold uppercase tracking-[0.08em] text-offwhite">
            Explore
          </div>
          <div className="flex flex-col gap-3">
            {exploreLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-cyan"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 text-xs font-bold uppercase tracking-[0.08em] text-offwhite">
            Company
          </div>
          <div className="flex flex-col gap-3">
            {companyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-cyan"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 text-xs font-bold uppercase tracking-[0.08em] text-offwhite">
            Start
          </div>
          <Link
            href="/start"
            className="text-sm font-semibold text-cyan transition-colors hover:text-cyan-hover"
          >
            Start Here →
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1240px] border-t border-white/[0.06] pt-6 text-[12.5px] text-gray">
        © {year} Merchantiva
      </div>
    </footer>
  );
}
