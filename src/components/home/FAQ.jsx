"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What is SmartNotes AI, and how does it help doctors?",
    answer:
      "SmartNotes AI is an AI-powered clinical documentation tool that transforms live doctor-patient conversations into structured medical notes, SOAP notes, billing codes, and patient summaries in real-time.",
  },
  {
    id: 2,
    question: "How do I begin using this AI clinical note-taking software?",
    answer:
      "Getting started is easy! Simply sign up for an account, complete the quick setup process, and you can begin using SmartNotes AI immediately. Our team provides comprehensive onboarding support.",
  },
  {
    id: 3,
    question:
      "Do I need to manually enter patient context in this AI medical scribe app?",
    answer:
      "No! SmartNotes AI automatically captures patient context during consultations. The AI listens to the conversation and generates comprehensive notes without manual data entry.",
  },
  {
    id: 4,
    question:
      "How fast does this AI clinical documentation tool generate notes?",
    answer:
      "SmartNotes AI generates comprehensive clinical notes in real-time during your consultation. Notes are available immediately after the patient interaction is complete.",
  },
  {
    id: 5,
    question: "Is my data secure with SmartNotes AI?",
    answer:
      "Absolutely! SmartNotes AI is fully HIPAA compliant with enterprise-grade encryption. Your patient data is stored securely and never shared with third parties.",
  },
];

export function FAQ() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="w-full py-16 lg:py-[80px] px-6 lg:px-[348px]">
      <div className="max-w-[750px] mx-auto space-y-12">
        <h2 className="text-3xl text-center lg:text-[48px] font-bold text-[#00234B] leading-tight">
          Still Unsure? Here's What You Need to Know
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-[#F8F8F8] rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-5 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg lg:text-xl font-semibold text-[#00234B] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-[#00234B] flex-shrink-0 transition-transform duration-300 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openId === faq.id && (
                <div className="px-5 pb-5 pt-2">
                  <p className="text-base text-brand-gray-text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-[#DDEBF9] rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-lg lg:text-xl font-bold text-[#00234B] mb-2">
              Still have questions?
            </h3>
            <p className="text-sm lg:text-base text-brand-gray-text-muted">
              Our team is happy to help! Visit our Help Center or contact us
              directly.
            </p>
          </div>

          <button className="px-6 py-3 rounded-full bg-gradient-to-tr from-[#BAD3FF] to-[#1457EA] text-white font-bold text-base hover:shadow-lg transition-all duration-300">
            Help Center
          </button>
        </div>
      </div>
    </section>
  );
}
