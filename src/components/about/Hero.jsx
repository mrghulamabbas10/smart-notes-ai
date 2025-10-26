"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Header from "../home/Header";

export default function AboutHero() {
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
          src="/images/bg-img.png?width=2884"
          alt=""
          className="h-full w-full object-cover opacity-50"
        />
      </div>

      {/* Navigation */}
      <Header />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:pt-20 pt-10 sm:px-6 lg:px-8">
        <div className="space-y-3">
          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-center md:text-5xl text-[9vw] md:leading-tight leading-[11vw] font-bold text-[#00234B] sm:text-6xl lg:text-[92px]"
          >
            Empowering Healthcare through Documentation
          </motion.h1>

          <motion.h3
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-semibold text-[#00234B] md:text-2xl text-xl text-center"
          >
            Built for clinical flow.
          </motion.h3>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className=" text-[#464E68] md:text-2xl text-xl text-center"
          >
            Transforming Clinical Notes with AI
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="mx-auto md:mb-12 mb-8 text-center max-w-3xl text-[#464E68] text-base  sm:text-lg lg:text-xl"
          >
            We're building intelligent solutions that simplify the way
            healthcare professionals document care. From solo practices to
            enterprise clinics, SmartNotes AI is on a mission to make clinical
            note-taking faster, more accurate, and less of a daily burden.
          </motion.p>
        </div>
      </div>

      {/* Scroll Scale Hero Image */}
      <motion.div style={{ scale }} className="relative mx-auto p-2">
        <img
          src="/images/about-hero.png"
          alt="SmartNotes AI Interface Preview"
          className="h-full w-full object-cover"
        />
      </motion.div>
    </section>
  );
}
