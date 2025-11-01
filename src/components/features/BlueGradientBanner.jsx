import React from "react";

export default function BlueGradientBanner() {
  return (
    <section
      className="relative py-16 md:py-20 lg:py-28 px-4 md:px-8"
      style={{
        background:
          "url('/images/blue-bg.png?width=2886') lightgray 50% / cover no-repeat",
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-[56px] font-bold text-white leading-tight lg:leading-[62.72px] tracking-[-0.02em] px-4">
          It's not just what SmartNotes AI does — it's what it frees you to do.
        </h2>
      </div>
    </section>
  );
}
