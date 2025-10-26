import React from "react";

export default function CTASection() {
  return (
    <section className="bg-brand-light-gray py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-[56px] font-bold text-brand-dark leading-tight lg:leading-[62.72px] tracking-[-0.02em] mb-8 md:mb-10 px-4">
          Ready to explore what SmartNotes AI can do for you?
        </h2>

        <div className="relative inline-block">
          {/* Blur effect behind button */}
          <div
            className="absolute inset-0 -m-2 rounded-full opacity-50 blur-[21px]"
            style={{ background: "rgba(65, 144, 255, 0.46)" }}
          />

          {/* CTA Button */}
          <button
            className="relative px-10 py-4 rounded-[30px] text-white font-semibold text-base leading-[17.92px] shadow-lg hover:opacity-90 transition-opacity"
            style={{
              background: "linear-gradient(99deg, #BAD3FF 0%, #1457EA 54.9%)",
              backdropFilter: "blur(1px)",
            }}
          >
            Start Free Trial
          </button>
        </div>

        <p className="mt-8 text-[#BDBDBD] text-base leading-8">
          No Credit Card needed
        </p>
      </div>
    </section>
  );
}
