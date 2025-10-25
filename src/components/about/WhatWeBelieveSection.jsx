export default function WhatWeBelieveSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-12 items-start">
        <h2 className="text-[#012025] font-urbanist text-[40px] md:text-[56px] font-bold leading-[1.12] tracking-[-1px] mb-6">
          What We Truly Believe
        </h2>
        <p className="text-[#717A7C] font-urbanist text-[17px] leading-[24px]">
          As SmartNotes AI grows, so does our commitment to empowering care
          teams around the world. We're constantly improving our platform,
          building new integrations, and listening closely to the people who use
          our tools every day. 
          <br />
          We're not just transforming clinical notes—we're reshaping the future
          of documentation in healthcare.
        </p>
      </div>

      <div className="mt-8 md:mt-16">
        <div className="rounded-2xl overflow-hidden">
          <img
            src="/images/Believe.png?width=2376"
            alt="Healthcare professionals collaborating"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
