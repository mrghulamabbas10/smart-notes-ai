"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Brands from "./Brands";
import Header from "./Header";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scroll-based scaling for hero image
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  // Reusable fade-up animation variant
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
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#EFF9FF] via-[#EFF9FF] to-[#FFF9EF]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/fd72e36943bf40025f4529e03abb650aca4206ac?width=2884"
          alt=""
          className="h-full w-full object-cover opacity-50"
        />
      </div>

      {/* Navigation */}
      <Header />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:pt-20 pt-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-center md:text-5xl text-4xl font-bold leading-tight text-[#00234B] sm:text-6xl lg:text-[92px]"
          >
            Transforming Clinical
          </motion.h1>

          {/* Icon Row */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="relative md:mb-8 mb-5 flex flex-wrap items-center justify-center gap-4"
          >
            <motion.img
              src="/images/text-icon-1.png"
              alt="Document icon"
              className="h-10 w-10 sm:h-24 sm:w-24 lg:h-32 lg:w-32"
              animate={{ x: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
            <h1 className="md:text-5xl text-4xl font-bold text-[#00234B] sm:text-6xl lg:text-[92px]">
              Notes
            </h1>
            <h1 className="md:text-5xl text-4xl font-bold text-[#00234B] sm:text-6xl lg:text-[92px]">
              with
            </h1>
            <motion.img
              src="/images/text-icon-2.png"
              alt="AI icon"
              className="h-10 w-10 sm:h-24 sm:w-24 lg:h-32 lg:w-32"
              animate={{ x: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
            <h1 className="md:text-5xl text-4xl font-bold text-[#00234B] sm:text-6xl lg:text-[92px]">
              AI
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="mx-auto md:mb-12 mb-8 max-w-3xl text-[#464E68] text-sm  sm:text-lg lg:text-xl"
          >
            SmartNotes AI instantly transforms patient visits into structured
            SOAP Notes, patient summaries, billing codes, and comprehensive
            documentation — all HIPAA-compliant and EMR-integrated.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
            className="flex items-center gap-4"
          >
            <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#BAD3FF] to-[#1457EA] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:shadow-xl">
              <div className="absolute inset-0 -z-10 rounded-full bg-[#4188FF] opacity-50 blur-xl"></div>
              Try it for Free
            </button>
            <button className="glassmorphic-light rounded-full border border-white px-8 py-4 text-base font-semibold text-[#1457EA] transition hover:bg-white/80">
              Login
            </button>
          </motion.div>

          {/* Flipping arrows */}
          <motion.div
            animate={{ rotateY: [0, 180, 360] }}
            className="absolute z-10 left-10 top-[100%] hidden lg:block"
          >
            <img src="/images/left-arrow.png" alt="" className="w-[13vw]" />
          </motion.div>

          <motion.div
            animate={{ rotateY: [0, 180, 360] }}
            className="absolute z-10 right-10 top-[100%] hidden lg:block"
          >
            <img src="/images/right-arrow.png" alt="" className="w-[13vw]" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Scale Hero Image */}
      <motion.div
        style={{ scale }}
        className="relative mx-auto p-2"
      >
        <img
          src="/images/hero-main.png"
          alt="SmartNotes AI Interface Preview"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Partner Logos Section */}
      <div className="relative z-10 bg-gradient-to-t from-[#EFF9FF] to-transparent md:pb-16 pb-8 pt-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <h3 className="mb-12 text-center font-satoshi text-lg text-[#120A0B] sm:text-xl md:block hidden">
            Integrated by the world's most innovative teams
          </h3>
          <Brands />
        </div>
      </div>
    </section>
  );
}
