"use client";
import { motion, useScroll, useTransform } from "framer-motion";

import { steps } from "./data";
import { useRef } from "react";

export default function Workflow() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scroll-based scaling for hero image
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return (
    <section
      id="workflow"
      ref={ref}
      className="w-full bg-white py-10 md:py-16 md:mb-[20vw] mb-0"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 font-urbanist text-4xl font-bold leading-tight text-[#120A0B] sm:text-5xl lg:text-[56px]">
            SmartNotes AI Workflow
          </h2>
          <p className="mx-auto max-w-3xl font-satoshi text-lg text-[#454140]">
            Generate and push your clinical notes to EHR/EMR in few clicks, with
            SmartNotes AI
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="grid md:gap-4 gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              style={{ scale }}
              className="rounded-3xl bg-[#F1F5F8] p-8 h-[500px] md:mb-0 mb-[10rem]"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="absolute h-14 w-10 bg-[#009DFF] opacity-50 blur-xl"></div>
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#009DFF]">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    className="h-10 w-10"
                  >
                    <rect width="60" height="60" rx="14" fill="#009DFF" />
                    <path d={step.icon} fill="white" />
                  </svg>
                </div>
              </div>

              {/* Step Info */}
              <div className="mb-2 font-satoshi text-xs font-medium uppercase tracking-wider text-[#120A0B]/40">
                STEP {step.number}
              </div>
              <h3 className="mb-2 font-satoshi text-xl font-bold text-[#120A0B]">
                {step.title}
              </h3>
              <p className="mb-8 font-satoshi text-sm leading-relaxed text-[#454140]">
                {step.description}
              </p>

              {/* Visual Content */}
              <div>
                {index === 0 && (
                  <div className="">
                    <img
                      src="/images/workflow1.png"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                )}

                {index === 1 && step.notePreview && (
                  <div className="">
                    <img
                      src="/images/workflow2.png"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                )}

                {index === 2 && step.showPushButton && (
                  <div>
                    <img
                      src="/images/workflow3.png"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
