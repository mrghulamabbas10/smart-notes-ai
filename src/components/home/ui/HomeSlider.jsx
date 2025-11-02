"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    image: "/images/hero-1.png",
  },
  {
    image: "/images/hero-2.png",
  },
  {
    image: "/images/hero-3.png",
  },
];

export default function HomeSlider() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      5000 // change every 5 seconds
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative lg:h-[600px] z-10 lg:pt-32 pt-28 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
      {/* LEFT CONTENT (STATIC NOW) */}
      <div className="flex flex-col justify-center lg:h-[430px] lg:mt-7">
        <h1 className="lg:text-6xl lg:leading-[65px] md:text-3xl text-[11vw] md:leading-tight leading-[11vw] font-bold text-[#00234B] mb-2">
          Transforming
          <br /> <span className="text-primary">
            Clinical Notes
          </span> <br /> with AI
        </h1>

        <p className="mx-auto md:mb-12 mb-8 max-w-3xl text-[#464E68] text-base  ">
          SmartNotes AI instantly transforms patient visits into structured SOAP
          Notes, patient summaries, billing codes, and comprehensive
          documentation — all{" "}
          <span className="text-primary">HIPAA-compliant</span> and{" "}
          <span className="text-primary">EMR-integrated</span>.
        </p>

        <div className="flex items-center gap-4">
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
        </div>
      </div>

      {/* RIGHT IMAGE (ONLY THIS PART ANIMATES) */}
      <div className="relative ml-auto p-2">
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[current].image}
            src={slides[current].image}
            alt="Hero Image"
            className={`h-full w-full ml-auto object-cover rounded-3xl  
            ${current ===0 ? "lg:h-[380px]" : ""} 
            ${current === 1 ? "lg:h-[500px] ml-auto" : ""} 
            ${current === 2 ? "lg:h-[430px]" : ""} 
              `}
            initial={{ scale: 1, opacity: 0 }}
            animate={({ scale: 1, opacity: 1 }, { scale: 1, opacity: 1 })}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
