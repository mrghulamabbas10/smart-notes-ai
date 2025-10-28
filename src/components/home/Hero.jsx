"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Brands from "./Brands";
import Header from "./Header";
import Link from "next/link";
import HomeSlider from "./ui/HomeSlider";

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
      {/* Hero Content */}
      <HomeSlider />
      {/* Scroll Scale Hero Image */}

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
