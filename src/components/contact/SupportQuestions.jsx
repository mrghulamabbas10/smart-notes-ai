import React from "react";

export default function SupportQuestions() {
  return (
    <section className="container mx-auto px-4 md:px-8 lg:px-16 py-10">
      <div className="bg-primary/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/6cbadc64992c7f5dc93ba356c785c27ed9ef4ed5?width=164"
            alt="Support"
            className="w-20 h-20"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-fustat font-bold text-[#00234B] text-xl mb-2">
            Support Questions
          </h3>
          <p className="font-fustat text-[#464E68] text-base">
            Reach out via the live Chat Support button in the bottom-right
            corner of any page on smartnotesai.com
          </p>
        </div>
        <a
          href="https://www.smartnotesai.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 px-8 py-3 bg-gradient-to-r from-[#BAD3FF] to-[#1457EA] text-white font-fustat font-semibold text-base rounded-[30px] hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          Visit Smart Notes AI
        </a>
      </div>
    </section>
  );
}
