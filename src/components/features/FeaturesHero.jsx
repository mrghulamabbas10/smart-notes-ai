"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react"; 

export default function FeatureHero() {
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

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:pt-32 pt-24 sm:px-6 lg:px-8">
        <div className="space-y-3">
          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-center md:text-5xl text-[9vw] md:leading-tight leading-[11vw] font-bold text-[#00234B] sm:text-6xl lg:text-[92px]"
          >
            SmartNotes AI: Built to Unburden Your Day
          </motion.h1>

          <motion.h3
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-semibold text-[#00234B] md:text-2xl text-xl text-center"
          >
            Clean, direct, and focused on benefits.
          </motion.h3>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="mx-auto md:mb-12 mb-8 text-center max-w-3xl text-[#464E68] text-base  sm:text-lg 2xl:text-xl"
          >
            In a world where physicians spend more time typing than treating,
            SmartNotes AI transforms clinical documentation into something
            effortless. It's a voice-enabled, AI-powered application that
            listens to your patient encounters in real time, understands the
            medical context, and automatically generates accurate SOAP notes,
            billing data, and summaries—all while maintaining full HIPAA
            compliance.
            <br />
            <br />
            Built for doctors, not data entry, SmartNotes AI eliminates the
            repetitive tasks that slow you down. From solo practitioners to
            growing group practices, it helps healthcare providers reclaim their
            time, reduce burnout, and get back to what really matters: patient
            care.
          </motion.p>
        </div>
      </div>

      {/* Scroll Scale Hero Image */}
      <motion.div style={{ scale }} className="relative mx-auto p-2">
        <img
          src="/images/feature-main.png"
          alt="SmartNotes AI Interface Preview"
          className="h-full w-full object-cover"
        />
      </motion.div>
    </section>
  );
}
