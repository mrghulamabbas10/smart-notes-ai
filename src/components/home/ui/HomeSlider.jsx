"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    title: (
      <>
        Trusted by <br /> <span className="text-primary">Many</span> Healthcare
        Professionals
      </>
    ),
    description:
      "SmartNotes AI instantly transforms patient visits into structured SOAP Notes, patient summaries, billing codes, and comprehensive documentation — all HIPAA-compliant and EMR-integrated.",
    image: "/images/hero-1.png",
  },
  {
    title: (
      <>
        Transforming
        <span className="text-primary"> Clinical Notes</span> with AI
      </>
    ),
    description:
      "SmartNotes AI instantly transforms patient visits into structured SOAP Notes, patient summaries, billing codes, and comprehensive documentation — all HIPAA-compliant and EMR-integrated.",
    image: "/images/hero-2.png",
  },
  {
    title: (
      <>
        Best AI-Powered
        <span className="text-primary"> Clinical Note-Taking</span> Application
      </>
    ),
    description:
      "SmartNotes AI instantly transforms patient visits into structured SOAP Notes, patient summaries, billing codes, and comprehensive documentation — all HIPAA-compliant and EMR-integrated.",
    image: "/images/hero-3.png",
  },
];

export default function HomeSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      5000 // change every 5 seconds
    );
    return () => clearInterval(interval);
  }, []);

  // Variants for staggered text animation
  const textContainer = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.15, duration: 0.6, ease: "easeOut" },
    },
  };

  const textItem = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4 lg:pt-32 md:pt-20 pt-10 sm:px-6 lg:px-8 grid grid-cols-12 gap-8 mb-20">
      {/* LEFT CONTENT */}
      <div className="flex flex-col justify-center lg:col-span-5 col-span-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={textContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, x: -50, transition: { duration: 0.4 } }}
          >
            <motion.h1
              variants={textItem}
              className="lg:text-5xl md:text-3xl text-[11vw] md:leading-tight leading-[11vw] font-bold text-[#00234B] mb-2"
            >
              {slides[current].title}
            </motion.h1>

            <motion.p
              variants={textItem}
              className="mx-auto md:mb-12 mb-8 max-w-3xl text-[#464E68] text-base md:text-lg"
            >
              {slides[current].description}
            </motion.p>

            <motion.div variants={textItem} className="flex items-center gap-4">
              <Link
                href="/dashboard"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#BAD3FF] to-[#1457EA] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:shadow-xl"
              >
                <div className="absolute inset-0 -z-10 rounded-full bg-[#4188FF] opacity-50 blur-xl"></div>
                Try it for Free
              </Link>
              <button className="glassmorphic-light rounded-full border border-white bg-gradient-to-r from-white to-white/0 px-10 py-4 text-base font-semibold text-[#1457EA] transition hover:bg-white/80">
                Login
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative mx-auto p-2 lg:col-span-7 col-span-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[current].image}
            src={slides[current].image}
            alt="Hero Image"
            className="h-full w-full object-cover rounded-3xl"
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1.15, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
