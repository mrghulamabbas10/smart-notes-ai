"use client";

import Header from "../home/Header";
import ContactSection from "./ContactSection";

import { motion } from "framer-motion";

export default function ContactUs() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-smartnotes-lightBg overflow-x-hidden">
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#EFF9FF] via-[#EFF9FF] to-[#FFF9EF]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bg-img.png?width=2884"
            alt=""
            className="h-full w-full object-cover opacity-50"
          />
        </div> 

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-64 md:h-96 bg-gradient-to-t from-[#EFF9FF] via-[#EFF9FF]/60 to-transparent"></div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 md:mt-32 mt-24">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-fustat font-extrabold text-[#00234B] text-center text-4xl md:text-6xl lg:text-[92px] leading-tight lg:leading-[99.36px] max-w-6xl mx-auto md:mb-8 mb-4"
          >
            Get in Touch with SmartNotes AI
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-fustat text-[#1457EA] text-center text-lg md:text-2xl lg:text-[28px] font-medium max-w-3xl mx-auto mb-4"
          >
            We'd Love to Hear From You
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-fustat text-[#464E68] text-center text-base md:text-lg lg:text-xl max-w-3xl mx-auto"
          >
            Have a question, feedback, or looking to get started with SmartNotes
            AI? Whether you're a healthcare provider, physician, clinic manager,
            or potential partner, we're here to help.
          </motion.p>
        </div>

        {/* Contact Section */}
        <ContactSection />
      </section>
    </div>
  );
}
