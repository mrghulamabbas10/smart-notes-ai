import React from "react";

export default function PartnerSection() {
  return (
    <section
      className="relative w-full py-16 md:py-20 lg:py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://api.builder.io/api/v1/image/assets/TEMP/76eddce5966d3c5faaf02900ef86860c60e23c3e?width=2886')",
      }}
    >
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="font-urbanist font-semibold text-white text-3xl md:text-4xl lg:text-[56px] leading-tight mb-6 tracking-tight">
          Looking to Partner With Us?
        </h2>
        <p className="font-urbanist text-white text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Interested in integrating SmartNotes AI into your clinic, platform, or
          service?
        </p>
        <a
          href="mailto:info@genmeditech.com"
          className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-white to-white/0 border border-white rounded-[30px] font-fustat font-semibold text-black text-base hover:bg-white/90 transition-all"
        >
          Let's talk: info@genmeditech.com
        </a>
      </div>
    </section>
  );
}
