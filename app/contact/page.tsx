import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — Merchantiva",
  description:
    "Tell us where you're starting from. Two questions, and we'll follow up with the next right move.",
};

export default function ContactPage() {
  return (
    <div className="flex justify-center px-6 pb-24 pt-20 sm:px-8 lg:pb-32 lg:pt-24">
      <div className="w-full max-w-[560px]">
        <div className="mb-11 text-center">
          <div className="mb-4.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-cyan">
            Start Here
          </div>
          <h1 className="mb-3.5 font-serif text-[30px] font-semibold text-offwhite sm:text-[38px]">
            Tell us where you&apos;re starting from.
          </h1>
          <p className="text-[15.5px] text-muted">
            Two questions. We&apos;ll follow up with the next right move.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
