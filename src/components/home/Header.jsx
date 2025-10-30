"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Features", href: "/features" },
    { label: "Workflow", href: "#workflow" },
    { label: "Pricing", href: "#pricing" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Specialities", href: "/specialities" },
    { label: "Blogs", href: "/blogs" },
  ];

  return (
    <div>
      <nav className="fixed w-full left-1/2 -translate-x-1/2 z-20 flex items-center justify-between px-4 sm:px-6 lg:px-20 md:pt-4 pt-3">
        <Link href="/" className="md:-ml-5 -ml-3 block">
          <Image
            src="/images/nav-logo.png"
            alt="nav-logo"
            width={133}
            height={74}
            className="md:w-[133px] md:h-[74px] w-[100px] h-[80px] object-contain"
          />
        </Link>
        {/* Center Menu - Desktop */}
        <div className="glassmorphic lg:flex hidden items-center gap-4 rounded-full border border-white px-8 py-3 opacity-90 backdrop-blur-sm sm:gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-fustat text-sm font-semibold text-[#464E68] transition hover:text-[#1457EA] sm:text-base"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Login Button */}
        <div>
          <button className="glassmorphic-light hidden md:block rounded-full border border-white px-8 py-3 font-fustat text-sm font-semibold text-[#00234B] transition hover:bg-white/80 sm:right-6 lg:right-8">
            Login
          </button>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="block lg:hidden text-[#00234B] border-white border p-2 rounded"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-white/60 backdrop-blur-lg md:hidden rounded-b-[40px] shadow-lg"
          >
            <div className="absolute top-5 right-5">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="block md:hidden text-[#00234B]"
              >
                <X size={28} />
              </button>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-fustat text-lg font-semibold text-[#00234B] transition hover:text-[#1457EA]"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setMenuOpen(false)}
              className="glassmorphic-light mt-6 rounded-full border border-white px-8 py-3 font-fustat text-base font-semibold text-[#00234B] transition hover:bg-white/80"
            >
              Login
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
