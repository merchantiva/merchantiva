import Image from "next/image";
import Link from "next/link";

export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/favicon.svg"
        alt="Merchantiva M mark"
        width={size}
        height={size}
        priority
      />
      <span className="font-sans text-[15px] font-bold tracking-[0.14em] text-offwhite">
        MERCHANTIVA
      </span>
    </Link>
  );
}
